import { devOptStore } from '@/zustand/devOptStore'
import { weatherStore } from '@/zustand/weatherStore'
import { CleanIcon, CodeIcon, ComputerIcon, Database02Icon, Timer02Icon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import { ic, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { Toggle } from '@components/Toggle'
import { ANIM_DUR } from '@utils/constants'
import { PMedium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React, { useCallback } from 'react'
import { Alert, Text } from 'react-native'

export default function DeveloperOptions({ navigation }: NavProp) {
  const isEnabled = devOptStore((state) => state.isEnabled)
  const setEnabled = devOptStore((state) => state.setEnabled)
  const animationDuration = devOptStore((state) => state.animationDuration)
  const setAnimationDuration = devOptStore((state) => state.setAnimationDuration)
  const [animError, setAnimError] = React.useState('')
  const clearDevOptions = devOptStore((state) => state.clearDevOptions)
  const removeLocation = weatherStore((state) => state.removeCurrentCityLocation)
  const isFabEnabled = devOptStore((state) => state.isFabEnabled)
  const setFabEnabled = devOptStore((state) => state.setFabEnabled)

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
    <SettWrapper title='Developer Options' navigation={navigation}>
      <Gap12>
        <SettGroup>
          <SettOption
            title='Developer Options'
            onPress={() => setEnabled(!isEnabled)}
            Icon={<CodeIcon {...ic} />}
            Right={<Toggle isActive={isEnabled} />}
          />
        </SettGroup>
        <SettText className='mt-0'>These options are intended for developers and may cause unexpected behavior. Use them with caution.</SettText>
      </Gap12>

      {isEnabled ? (
        <>
          <Gap12>
            <SettGroup title='General'>
              <SettOption
                title='Toggle fab button'
                Icon={<ComputerIcon {...ic} />}
                Right={<Toggle isActive={isFabEnabled} />}
                onPress={() => setFabEnabled(!isFabEnabled)}
              />
            </SettGroup>
          </Gap12>
          <Gap12>
            <SettGroup title='Data Management'>
              <SettOption title='MMKV data editor' Icon={<Database02Icon {...ic} />} arrow />
            </SettGroup>
          </Gap12>
          <Gap12>
            <SettGroup title='Animation Duration'>
              <Input
                Icon={<Timer02Icon {...ic} />}
                placeholder='Enter animation duration'
                onChangeText={setAnim}
                defaultValue={animationDuration.toString()}
                keyboardType='number-pad'
                Right={
                  <PMedium style={{ fontSize: 15 }} className='text-zinc-800 opacity-50 dark:text-zinc-200'>
                    ms
                  </PMedium>
                }
              />
            </SettGroup>
            <SettText className={animError ? 'text-red-500' : ''}>{animError || 'Set the duration of animations in 0 to 1000 ms.'}</SettText>
            <SettText>
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
            </SettText>
          </Gap12>
          <Gap12>
            <SettGroup title='Weather Settings'>
              <SettOption title='Clear Current City & Location' Icon={<CleanIcon {...ic} />} onPress={removeLocation} />
            </SettGroup>
          </Gap12>
        </>
      ) : (
        <SettText>Turn on developer options to see more settings.</SettText>
      )}
      <SettGroup>
        <SettOption title='Rest Developer Options' Icon={<CleanIcon {...ic} />} onPress={resetDevOptions} arrow />
      </SettGroup>
      <SettText>
        This will reset all developer options to default. This action cannot be undone. You may need to restart the app for the changes to take
        effect.
      </SettText>
    </SettWrapper>
  )
}
