import versionStore from '@/zustand/versionStore'
import { AppIconRound, GithubSolidIcon, TelegramSolidIcon } from '@assets/icons/icons'
import BackHeader from '@components/BackHeader'
import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import type { RouteProp } from '@react-navigation/native'
import { APP_VERSION_CODE, GITHUB_REPO, join_telegram_channel } from '@utils/constants'
import { Medium, Regular, SemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React, { useCallback, useEffect } from 'react'
import { BackHandler, Linking, ToastAndroid, View } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'

type ParamList = {
  Update: UpdateParamList
}

export type UpdateParamList = {
  shouldGoBack: boolean
}

export default function Update({ navigation, route }: { navigation: StackNav; route: RouteProp<ParamList, 'Update'> }) {
  const shouldGoBack = route.params?.shouldGoBack
  // Disable Back button
  const cannotSkipBack = useCallback(() => {
    if (shouldGoBack) {
      navigation.goBack()
      return true
    }
    ToastAndroid.show('You cannot skip this update', ToastAndroid.SHORT)
    return true
  }, [navigation, shouldGoBack])

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', cannotSkipBack)
    return () => backHandler.remove()
  }, [cannotSkipBack, navigation, shouldGoBack])

  return (
    <SettWrapper
      navigation={navigation}
      title='App Update'
      Header={<BackHeader title='App Update' navigation={navigation} onBackPress={cannotSkipBack} />}
    >
      <Gap12>
        <View className='mt-5 flex-1 px-5'>
          <UpdateAvailableUI />
        </View>
        <View className='mt-2 px-10'>
          <Btn title='Download Update' onPress={join_telegram_channel} />
        </View>
        <SettGroup title='Download Options' className='mt-3'>
          <SettOption
            title='Download From Telegram'
            arrow
            Icon={<RoundedIcon Icon={TelegramSolidIcon} className='bg-sky-500' />}
            onPress={join_telegram_channel}
          />
          <SettOption
            title='Download From GitHub'
            Icon={<RoundedIcon Icon={GithubSolidIcon} className='bg-black' />}
            onPress={() => Linking.openURL(GITHUB_REPO)}
            arrow
          />
        </SettGroup>
        <SettText>
          Download size may vary. The Download Now button will redirect you to the GitHub and you can download the
          latest.
        </SettText>
      </Gap12>
    </SettWrapper>
  )
}

export function UpdateAvailableUI() {
  const data = versionStore((state) => state.version)
  const features = data?.features || []
  const size = data?.size
  const version = data?.version
  const versionCode = data?.versionCode || 0
  const rotate = useSharedValue(0)
  const isNew = versionCode > APP_VERSION_CODE

  useEffect(() => {
    rotate.value = withRepeat(withTiming(360, { duration: 7000, easing: Easing.linear }), -1)
  }, [rotate])

  const animatedImageStyle = useAnimatedStyle(() => ({ transform: [{ rotate: `${rotate.value}deg` }] }), [])
  return (
    <View className='flex-1 rounded-3xl bg-appIconBg p-8 pb-12'>
      <View className='flex-row'>
        <Animated.View style={[animatedImageStyle]} className='mt-8'>
          <AppIconRound width={80} height={80} />
        </Animated.View>
      </View>
      <SemiBold style={{ fontSize: 24 }} className='mt-5 text-white'>
        {isNew ? 'Update Available' : 'App is up to date'}
      </SemiBold>
      <Medium style={{ fontSize: 15 }} className='mt-1 text-white opacity-80'>
        {`v${version}`} • {size && `${size}`}
      </Medium>
      <Regular className='mt-5 text-white opacity-80' style={{ fontSize: 11 }}>
        We bring you the latest features and improvements. Update now to enjoy the best experience.
      </Regular>
      <Regular className='mt-5 text-white opacity-80' style={{ fontSize: 11 }}>
        Download size may vary. Usually around 15MB.
      </Regular>
      <View className='mt-5' style={{ gap: 5 }}>
        {features.map((item, index) => (
          <Regular key={index} className='text-white opacity-80' style={{ fontSize: 11 }}>
            • {'  '}
            {item}
          </Regular>
        ))}
      </View>
    </View>
  )
}
