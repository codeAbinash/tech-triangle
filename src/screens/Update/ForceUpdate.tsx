import { AndroidSolidIcon, GithubSolidIcon } from '@assets/icons/icons'
import BackHeader from '@components/BackHeader'
import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import { SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import type { RouteProp } from '@react-navigation/native'
import { GITHUB_LATEST_RELEASE, GITHUB_REPO } from '@utils/constants'
import type { StackNav } from '@utils/types'
import React, { useEffect } from 'react'
import { BackHandler, Linking, ToastAndroid, View } from 'react-native'
import UpdateAvailableUI from './Components/UpdateAvailableUI'

type ParamList = {
  ForceUpdate: ForceUpdateParamList
}

export type ForceUpdateParamList = {
  shouldGoBack: boolean
  version: string
  size: string
  whatsNew: Array<string>
}

export default function ForceUpdate({
  navigation,
  route,
}: {
  navigation: StackNav
  route: RouteProp<ParamList, 'ForceUpdate'>
}) {
  const shouldGoBack = route.params?.shouldGoBack
  const version = route.params.version
  const size = route.params.size
  const whatsNew = route.params.whatsNew
  // Disable Back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (shouldGoBack === undefined || shouldGoBack) {
        navigation.goBack()
        return true
      }
      ToastAndroid.show('You cannot skip this update', ToastAndroid.SHORT)
      return true
    })
    return () => backHandler.remove()
  }, [navigation, shouldGoBack])

  return (
    <SettWrapper
      navigation={navigation}
      title='App Update'
      Header={
        <BackHeader
          title='App Update'
          navigation={navigation}
          onBackPress={() => {
            if (shouldGoBack === undefined || shouldGoBack) {
              navigation.goBack()
              return
            }
            ToastAndroid.show('You cannot skip this update', ToastAndroid.SHORT)
          }}
        />
      }
    >
      <Gap12>
        <View className='mt-5 flex-1 px-5'>
          <UpdateAvailableUI version={version} size={size} whatsNew={whatsNew} />
        </View>
        <View className='mt-2 px-10'>
          <Btn title='Download Update' onPress={() => Linking.openURL(GITHUB_LATEST_RELEASE)} />
        </View>
        <SettGroup title='Download Options' className='mt-3'>
          <SettOption
            title='Download From Github'
            Icon={<RoundedIcon Icon={AndroidSolidIcon} className='bg-green-500' />}
            arrow
            onPress={() => Linking.openURL(GITHUB_LATEST_RELEASE)}
          />
          <SettOption
            title='Source on Github'
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
