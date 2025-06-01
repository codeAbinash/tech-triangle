import { appLockStore } from '@/zustand/appLockStore'
import { LockPasswordSolidIcon, SquareLock02SolidIcon, ViewIcon, ViewOffSlashIcon } from '@assets/icons/icons'
import Check from '@components/Check'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { ic } from '@components/Settings/Settings'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import { Toggle } from '@components/Toggle'
import { Colors } from '@utils/colors'
import type { NavProp } from '@utils/types'
import React, { useEffect } from 'react'
import { ToastAndroid, TouchableOpacity } from 'react-native'

export default function AppLock({ navigation }: NavProp) {
  const isAppLockEnabled = appLockStore((state) => state.appLockEnabled)
  const setAppLockEnabled = appLockStore((state) => state.setAppLockEnabled)
  const appLockPassword = appLockStore((state) => state.appLockPassword)
  const setAppLockPassword = appLockStore((state) => state.setAppLockPassword)

  const [confirmPassword, setConfirmPassword] = React.useState('')

  const [isVisible, setIsVisible] = React.useState(false)

  function handleAppLockPress() {
    if (!appLockPassword) ToastAndroid.show('Please set a password first', ToastAndroid.SHORT)
    else setAppLockEnabled(!isAppLockEnabled)
  }

  useEffect(() => {
    console.log(isAppLockEnabled)
  }, [isAppLockEnabled])

  return (
    <SettWrapper title='App Lock'>
      <Gap12>
        <SettText className='mt-3 text-blue-500'>This feature will be available in the next release. CodeAntu</SettText>
        <SettGroup title='App Lock Settings'>
          <SettOption
            title='App Lock'
            Icon={<RoundedIcon Icon={SquareLock02SolidIcon} className='bg-green-500' />}
            Right={<Toggle isActive={isAppLockEnabled} accent={Colors.green['500']} />}
            onPress={handleAppLockPress}
          />
        </SettGroup>
        <SettText className='text-orange-500'>
          When app lock is enabled you will need to enter your password to use the app. If you forget your password, you
          will loose all your data.
        </SettText>
        <SettGroup title='Password'>
          <Input
            value={appLockPassword}
            onChangeText={setAppLockPassword}
            placeholder='Password'
            secureTextEntry={!isVisible}
            // Icon={<LockPasswordSolidIcon {...ic} />}
            Icon={<RoundedIcon Icon={LockPasswordSolidIcon} className='bg-rose-500' />}
            Right={
              <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                {isVisible ? (
                  <ViewIcon {...ic} width={24} height={24} />
                ) : (
                  <ViewOffSlashIcon {...ic} width={24} height={24} />
                )}
              </TouchableOpacity>
            }
          />
        </SettGroup>
        <SettGroup title='Confirm Password'>
          <Input
            placeholder='Confirm Password'
            Icon={<RoundedIcon Icon={LockPasswordSolidIcon} className='bg-rose-500' />}
            secureTextEntry={!isVisible}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </SettGroup>

        <SettGroup title='App Lock Timeout'>
          <SettOption title='Immediately' Right={<Check checked />} />
          <SettOption title='After 1 minute' />
          <SettOption title='After 5 minutes' />
          <SettOption title='After 10 minutes' />
          <SettOption title='After 30 minutes' />
          <SettOption title='After 1 hour' />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
