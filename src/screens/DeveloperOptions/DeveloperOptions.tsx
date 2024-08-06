import { devOptStore } from '@/zustand/devOptStore'
import { weatherStore } from '@/zustand/weatherStore'
import KeyboardAvoidingContainer from '@components/KeyboardAvoidingContainer'
import { PaddingBottom } from '@components/SafePadding'
import {
  BackHeader,
  Gap12,
  Gap20,
  iconProps,
  RightArrow,
  SettingOption,
  SettingOptionInput,
  SettingText,
  SettingWrapper,
  Toggle,
} from '@components/Settings'
import CleanIcon from '@icons/clean-stroke-rounded.svg'
import CodeIcon from '@icons/code-stroke-rounded.svg'
import ComputerIcon from '@icons/computer-stroke-rounded.svg'
import StorageIcon from '@icons/database-02-stroke-rounded.svg'
import Timer02Icon from '@icons/timer-02-stroke-rounded.svg'
import { ANIM_DUR } from '@utils/constants'
import { PoppinsMedium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React, { useCallback } from 'react'
import { Alert, Text, ToastAndroid, View } from 'react-native'

export default function DeveloperOptions({ navigation }: NavProp) {
  const isEnabled = devOptStore((state) => state.isEnabled)
  const setEnabled = devOptStore((state) => state.setEnabled)
  const animationDuration = devOptStore((state) => state.animationDuration)
  const setAnimationDuration = devOptStore((state) => state.setAnimationDuration)
  const [animError, setAnimError] = React.useState('')
  const clearDevOptions = devOptStore((state) => state.clearDevOptions)
  const removeLocation = weatherStore((state) => state.removeCurrentCityLocation)

  const setAnim = useCallback((duration: string) => {
    let dur = parseInt(duration)
    if (isNaN(dur)) return setAnimError('Please enter a valid number')
    if (dur < 0 || dur > 1000) return setAnimError('Please enter a number between 0 and 1000')
    setAnimationDuration(dur)
    setAnimError('')
  }, [])

  const resetDevOptions = useCallback(() => {
    Alert.alert('Reset Developer Options', 'This will reset all developer options to default. This action cannot be undone.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Reset',
        onPress: () => {
          clearDevOptions()
          setAnimError('')
          navigation.goBack()
        },
      },
    ])
  }, [])

  return (
    <View className='flex-1 bg-zinc-100 dark:bg-black'>
      <BackHeader title='Developer Options' navigation={navigation} />
      <KeyboardAvoidingContainer
        contentContainerStyle={{ paddingBottom: 40 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Gap20>
          <Gap12>
            <SettingWrapper single>
              <SettingOption
                activeOpacity={0.8}
                title='Developer Options'
                onPress={() => setEnabled(!isEnabled)}
                Icon={<CodeIcon {...iconProps} />}
                Right={<Toggle isActive={isEnabled} />}
              />
            </SettingWrapper>
            <SettingText className='my-0'>These options are intended for developers and may cause data loss. Use them with caution.</SettingText>
          </Gap12>

          {isEnabled ? (
            <>
              <Gap12>
                <SettingWrapper title='Animation Duration'>
                  <SettingOptionInput
                    Icon={<Timer02Icon {...iconProps} />}
                    placeholder='Enter animation duration'
                    onChangeText={setAnim}
                    defaultValue={animationDuration.toString()}
                    keyboardType='number-pad'
                    Right={
                      <Text style={[PoppinsMedium, { fontSize: 15 }]} className='text-zinc-800 opacity-50 dark:text-zinc-200'>
                        ms
                      </Text>
                    }
                  />
                </SettingWrapper>
                <SettingText className={animError ? 'text-red-500' : ''}>
                  {animError || 'Set the duration of animations in 0 to 1000 ms.'}
                </SettingText>
                <SettingText>
                  You may need to restart the app or exit this screen for the changes to take effect. The default value is {ANIM_DUR} ms.{' '}
                  <Text
                    className='text-accent'
                    onPress={() => {
                      setAnim(ANIM_DUR.toString())
                      setAnimError('')
                    }}
                  >
                    Reset to default.
                  </Text>
                </SettingText>
              </Gap12>
              <Gap12>
                <SettingWrapper title='Data Viewer'>
                  <SettingOption
                    title='Toggle fab button'
                    Icon={<ComputerIcon {...iconProps} />}
                    Right={<Toggle isActive={false} />}
                    onLongPress={() => {
                      ToastAndroid.show('This will turn on a fab button on each screen to view data.', ToastAndroid.LONG)
                    }}
                  />
                  <SettingOption title='MMKV data viewer' Icon={<StorageIcon {...iconProps} />} Right={<RightArrow />} />
                </SettingWrapper>
              </Gap12>
              <Gap12>
                <SettingWrapper title='Weather Settings'>
                  <SettingOption title='Remove Current City & Location' Icon={<CleanIcon {...iconProps} />} onPress={removeLocation} />
                </SettingWrapper>
              </Gap12>
            </>
          ) : (
            <SettingText>Turn on developer options to see more settings.</SettingText>
          )}
          <SettingWrapper single>
            <SettingOption title='Rest Developer Options' Icon={<CleanIcon {...iconProps} />} onPress={resetDevOptions} Right={<RightArrow />} />
          </SettingWrapper>
          <SettingText>
            This will reset all developer options to default. This action cannot be undone. You may need to restart the app for the changes to take
            effect.
          </SettingText>
        </Gap20>
        <PaddingBottom />
      </KeyboardAvoidingContainer>
    </View>
  )
}
