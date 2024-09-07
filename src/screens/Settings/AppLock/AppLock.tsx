import { appLockStore } from '@/zustand/appLockStore'
import { LockPasswordIcon, Setting07Icon, ViewIcon, ViewOffSlashIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import { Check, ic, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { Toggle } from '@components/Toggle'
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
    <SettWrapper navigation={navigation} title='App Lock'>
      <Gap12>
        <SettText className='mt-3 text-orange-500'>
          When app lock is enabled you will need to enter your password to use the app. If you forget your password, you
          will loose all your data.
        </SettText>
        <SettGroup title='App Lock Settings'>
          <SettOption
            title='App Lock'
            Icon={<Setting07Icon {...ic} />}
            Right={<Toggle isActive={isAppLockEnabled} />}
            onPress={handleAppLockPress}
          />
        </SettGroup>
        <SettGroup title='Password'>
          <Input
            value={appLockPassword}
            onChangeText={setAppLockPassword}
            placeholder='Password'
            secureTextEntry={!isVisible}
            Icon={<LockPasswordIcon {...ic} />}
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
            Icon={<LockPasswordIcon {...ic} />}
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