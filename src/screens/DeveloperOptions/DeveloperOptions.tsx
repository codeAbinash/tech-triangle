import { useDeveloperOptions } from '@/zustand/developerOption'
import KeyboardAvoidingContainer from '@components/KeyboardAvoidingContainer'
import { PaddingBottom } from '@components/SafePadding'
import { BackHeader, Gap12, Gap20, iconProps, SettingOption, SettingOptionInput, SettingText, SettingWrapper, Toggle } from '@components/Settings'
import DashboardSquare02Icon from '@icons/dashboard-square-02-stroke-rounded.svg'
import Timer02Icon from '@icons/timer-02-stroke-rounded.svg'
import type { NavProp } from '@utils/types'
import React, { useCallback } from 'react'
import { Text, View } from 'react-native'
import CodeIcon from '@icons/code-stroke-rounded.svg'

export default function DeveloperOptions({ navigation }: NavProp) {
  const isEnabled = useDeveloperOptions((state) => state.isEnabled)
  const setEnabled = useDeveloperOptions((state) => state.setEnabled)
  const animationDuration = useDeveloperOptions((state) => state.animationDuration)
  const setAnimationDuration = useDeveloperOptions((state) => state.setAnimationDuration)
  const [animError, setAnimError] = React.useState('')

  const setAnim = useCallback((duration: string) => {
    let dur = parseInt(duration)
    if (isNaN(dur)) return setAnimError('Please enter a valid number')
    if (dur < 0 || dur > 1000) return setAnimError('Please enter a number between 0 and 1000')
    setAnimationDuration(dur)
    setAnimError('')
  }, [])

  return (
    <View className='flex-1 bg-zinc-100 dark:bg-black'>
      <BackHeader title='Developer Options' navigation={navigation} />
      <KeyboardAvoidingContainer
        contentContainerStyle={{ paddingBottom: 40 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <SettingText className='my-3'>These options are intended for developers and may cause data loss. Use them with caution.</SettingText>
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
          </Gap12>

          {isEnabled ? (
            <Gap12>
              <SettingWrapper title='Animation Duration'>
                <SettingOptionInput
                  Icon={<Timer02Icon {...iconProps} />}
                  placeholder='Enter animation duration'
                  onChangeText={setAnim}
                  defaultValue={animationDuration.toString()}
                  keyboardType='number-pad'
                />
              </SettingWrapper>
              <SettingText className={animError ? 'text-red-500' : ''}>{animError || 'Set the duration of animations in 0 to 1000 ms.'}</SettingText>
              <SettingText>
                You may need to restart the app or exit this screen for the changes to take effect. The default value is 150 ms.{' '}
                <Text
                  className='text-accent'
                  onPress={() => {
                    setAnim('150')
                    setAnimError('')
                  }}
                >
                  Reset to default.
                </Text>
              </SettingText>
            </Gap12>
          ) : (
            <SettingText>Developer options are disabled. Enable them to customize the app.</SettingText>
          )}
        </Gap20>
        <PaddingBottom />
      </KeyboardAvoidingContainer>
    </View>
  )
}
