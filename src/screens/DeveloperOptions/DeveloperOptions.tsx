import authStore from '@/zustand/authStore'
import { devOptStore } from '@/zustand/devOptStore'
import popupStore from '@/zustand/popupStore'
import {
  CleanSolidIcon,
  CodeSolidIcon,
  ComputerSolidIcon,
  LockPasswordSolidIcon,
  Timer02SolidIcon,
} from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import { Toggle } from '@components/Toggle'
import { ANIM_DUR } from '@utils/constants'
import { Medium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React, { useCallback } from 'react'
import { Text } from 'react-native'

export default function DeveloperOptions({ navigation }: NavProp) {
  const alert = popupStore((store) => store.alert)
  const isEnabled = devOptStore((state) => state.isEnabled)
  const setEnabled = devOptStore((state) => state.setEnabled)
  const animationDuration = devOptStore((state) => state.animationDuration)
  const setAnimationDuration = devOptStore((state) => state.setAnimationDuration)
  const [animError, setAnimError] = React.useState('')
  const clearDevOptions = devOptStore((state) => state.clearDevOptions)
  const isFabEnabled = devOptStore((state) => state.isFabEnabled)
  const setFabEnabled = devOptStore((state) => state.setFabEnabled)
  // const { token, setToken } = authStore((state) => ({ token: state.token, setToken: state.setToken }))
  const token = authStore((state) => state.token)
  const setAnim = useCallback((duration: string) => {
    let dur = parseInt(duration, 10)
    if (isNaN(dur)) return setAnimError('Please enter a valid number')
    if (dur < 0 || dur > 1000) return setAnimError('Please enter a number between 0 and 1000')
    setAnimationDuration(dur)
    setAnimError('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resetDevOptions = useCallback(() => {
    alert(
      'Reset Developer Options',
      'This will reset all developer options to default. This action cannot be undone.',
      [
        { text: 'Cancel' },
        {
          text: 'Reset',
          onPress: () => {
            clearDevOptions()
            setAnimError('')
            navigation.goBack()
          },
        },
      ],
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handelAuthInput(text: string) {
    console.log(text)
  }

  return (
    <SettWrapper title='Developer Options'>
      <Gap12>
        <SettGroup>
          <SettOption
            title='Developer Options'
            onPress={() => setEnabled(!isEnabled)}
            Icon={<RoundedIcon Icon={CodeSolidIcon} className='bg-accent' />}
            Right={<Toggle isActive={isEnabled} />}
          />
        </SettGroup>
        <SettText>
          These options are intended for developers and may cause unexpected behavior. Use them with caution. It will
          also display additional settings on various screens.
        </SettText>
      </Gap12>

      {isEnabled ? (
        <>
          <Gap12>
            <SettGroup title='General'>
              <SettOption
                title='Toggle fab button'
                Icon={<RoundedIcon Icon={ComputerSolidIcon} className='bg-green-500' />}
                Right={<Toggle isActive={isFabEnabled} />}
                onPress={() => setFabEnabled(!isFabEnabled)}
              />
            </SettGroup>
          </Gap12>
          <Gap12>
            <SettGroup title='Animation Duration'>
              <Input
                // Icon={<Timer02Icon {...ic} />}
                Icon={<RoundedIcon Icon={Timer02SolidIcon} className='bg-rose-500' />}
                placeholder='Enter animation duration'
                onChangeText={setAnim}
                defaultValue={animationDuration.toString()}
                keyboardType='number-pad'
                Right={
                  <Medium style={{ fontSize: 15 }} className='text-zinc-800 opacity-50 dark:text-zinc-200'>
                    ms
                  </Medium>
                }
              />
            </SettGroup>
            <SettText className={animError ? 'text-red-500' : ''}>
              {animError || 'Set the duration of animations in 0 to 1000 ms.'}
            </SettText>
            <SettText>
              You may need to restart the app or exit this screen for the changes to take effect. The default value is{' '}
              {ANIM_DUR} ms.{' '}
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
            <SettGroup title='Auth Token'>
              <Input
                Icon={<RoundedIcon Icon={LockPasswordSolidIcon} className='bg-gray-500' />}
                placeholder='Enter auth token'
                // onChangeText={setToken}
                onChangeText={(text) => {
                  console.log(text)
                }}
                defaultValue={token}
                keyboardType='default'
                multiline
              />
            </SettGroup>
            <SettText>
              This will set the auth token for the app. You may need to restart the app for the changes to take effect.
            </SettText>
          </Gap12>
        </>
      ) : (
        <SettText>Turn on developer options to see more settings.</SettText>
      )}
      <SettGroup>
        <SettOption
          title='Rest Developer Options'
          Icon={<RoundedIcon Icon={CleanSolidIcon} className='bg-amber-500' />}
          onPress={resetDevOptions}
          arrow
        />
      </SettGroup>
      <SettText>
        This will reset all developer options to default. This action cannot be undone. You may need to restart the app
        for the changes to take effect.
      </SettText>
    </SettWrapper>
  )
}
