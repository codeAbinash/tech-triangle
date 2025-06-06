import { devOptStore } from '@/zustand/devOptStore'
import popupStore from '@/zustand/popupStore'
import profileStore from '@/zustand/profileStore'
import versionStore from '@/zustand/versionStore'

import { Gap, Gap12, Gap20 } from '@components/Gap'
import RoundIcon from '@components/RoundIcon'
import RoundNotification from '@components/RoundNotification'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import Search from '@components/Search'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import { Txt, TxtAcc } from '@components/Text'
import BrushIcon from '@hugeicons/BrushIcon'
import BubbleChatIcon from '@hugeicons/BubbleChatIcon'
import Calendar03Icon from '@hugeicons/Calendar03Icon'
import CleanIcon from '@hugeicons/CleanIcon'
import CodeIcon from '@hugeicons/CodeIcon'
import ComputerIcon from '@hugeicons/ComputerIcon'
import Database02Icon from '@hugeicons/Database02Icon'
import DeviceAccessIcon from '@hugeicons/DeviceAccessIcon'
import EditTableIcon from '@hugeicons/EditTableIcon'
import FolderFileStorageIcon from '@hugeicons/FolderFileStorageIcon'
import InformationCircleIcon from '@hugeicons/InformationCircleIcon'
import Logout02Icon from '@hugeicons/Logout02Icon'
import PolicyIcon from '@hugeicons/PolicyIcon'
import ShieldUserIcon from '@hugeicons/ShieldUserIcon'
import SquareArrowUp02Icon from '@hugeicons/SquareArrowUp02Icon'
import SquareLock02Icon from '@hugeicons/SquareLock02Icon'
import TelegramIcon from '@hugeicons/TelegramIcon'
import UserIcon from '@hugeicons/UserIcon'
import Wallet02Icon from '@hugeicons/Wallet02Icon'
import { useIsFocused } from '@react-navigation/native'
import { handleLogout, logout } from '@screens/auth/utils'
import { useMutation } from '@tanstack/react-query'
import { client } from '@utils/client'
import { Colors } from '@utils/colors'
import { APP_VERSION, APP_VERSION_CODE, ask_a_question, join_telegram_channel } from '@utils/constants'
import { Bold } from '@utils/fonts'
import { Caches, clearStorage, getStartWithSize, getStorageSize } from '@utils/storage'
import type { NavProp } from '@utils/types'
import { screenDelay, toReadableSize } from '@utils/utils'
import React, { useEffect } from 'react'
import { ToastAndroid, View, useColorScheme } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { FadeIn } from 'react-native-reanimated'
import AdminSettings from './AdminSettings'

function SettingsHeader({ title, Title }: { title?: string; Title?: React.ReactNode }) {
  const [search, setSearch] = React.useState('')
  return (
    <View style={{ gap: 5 }} className='bg-white px-5 pb-3 dark:bg-zinc-950'>
      {Title}
      <Bold style={{ fontSize: 24 }} className='mt-3 text-zinc-800 dark:text-zinc-200'>
        {title}
      </Bold>
      <Search placeholder='Search settings' value={search} onChangeText={setSearch} />
    </View>
  )
}

export default function Settings({ navigation }: NavProp) {
  const scheme = useColorScheme()
  const [totalSize, setTotalSize] = React.useState(0)
  const [totalCache, setTotalCache] = React.useState(0)
  const dev = devOptStore((state) => state.isEnabled)
  const user = profileStore((state) => state.user)
  const alert = popupStore((store) => store.alert)

  const focused = useIsFocused()

  const { mutate: logoutMutation } = useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => await (await client.api.logout.$post()).json(),
    onSuccess: (d) => {
      if (!d.status) ToastAndroid.show('Error logging out!', ToastAndroid.SHORT)
      logout()
    },
  })

  useEffect(() => {
    focused &&
      screenDelay(() => {
        setTotalSize(getStartWithSize(''))
        setTotalCache(getStorageSize(Caches))
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function clearCache() {
    alert('Are you sure?', 'Do you want to clear all cache?', [
      {
        text: 'Yes',
        onPress() {
          clearStorage(Caches)
          setTotalCache(0)
        },
      },
      { text: 'No' },
    ])
  }

  return (
    <View className='flex-1 bg-white dark:bg-zinc-950'>
      <PaddingTop />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30, backgroundColor: scheme === 'dark' ? 'black' : Colors.zinc[100] }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='always'
      >
        <SettingsHeader title='Settings' />
        <Gap20>
          <Gap12>
            <SettText className='mt-3'>
              Hello {user?.name.split(' ')[0]}, Go to each section to customize your experience. All settings are saved
              automatically.
            </SettText>
            <UpdateSettings navigation={navigation} />
            <SettGroup title='General'>
              <SettOption
                title='Your Profile'
                Icon={<RoundIcon Icon={UserIcon} className='bg-green-500' />}
                arrow
                onPress={() => navigation.navigate('YourProfile')}
              />
              <SettOption title='Computer Science' Icon={<RoundIcon Icon={ComputerIcon} />} arrow />
              {/* <SettOption
                title='Weather Settings'
                // Icon={<SunCloudAngledRainZap01Icon {...ic} />}
                Icon={<RoundIcon Icon={SunCloudAngledRainZap01Icon} className='bg-blue-500' />}
                onPress={() => navigation.navigate('WeatherSettings')}
                arrow
              /> */}
              <SettOption
                title='Routine Management'
                Icon={<RoundIcon Icon={Calendar03Icon} className='bg-red-500' />}
                arrow
              />
              <SettOption title='My Wallet' Icon={<RoundIcon Icon={Wallet02Icon} className='bg-amber-500' />} arrow />
            </SettGroup>
          </Gap12>
          <AdminSettings navigation={navigation} />
          <Gap12>
            <SettGroup title='Devices'>
              <SettOption
                title='Devices'
                Icon={<RoundIcon Icon={DeviceAccessIcon} />}
                arrow
                onPressOut={() => navigation.navigate('Devices')}
              />
              <SettOption
                arrow
                title='Log Out'
                Icon={<RoundIcon Icon={Logout02Icon} className='bg-red-500' />}
                onPress={() => handleLogout(logoutMutation)}
              />
            </SettGroup>
          </Gap12>
          <Gap12>
            <SettGroup title='Password and Security'>
              <SettOption
                title='App Lock'
                // Icon={<SquareLock02Icon {...ic} />}
                Icon={<RoundIcon Icon={SquareLock02Icon} className='bg-green-500' />}
                arrow
                Right={<TxtAcc>Off</TxtAcc>}
                onPress={() => navigation.navigate('AppLock')}
              />
            </SettGroup>
            <SettText>Enable app lock to protect your data.</SettText>
          </Gap12>
          <Gap12>
            <SettGroup title='For Developers'>
              <SettOption
                title='Developer options'
                Icon={<RoundIcon Icon={CodeIcon} className='bg-accent' />}
                onPress={() => navigation.navigate('DeveloperOptions')}
                arrow
              />
              <SettOption
                title='UI & Components'
                Icon={<RoundIcon Icon={BrushIcon} className='bg-rose-500' />}
                onPress={() => navigation.navigate('UiAndComponents')}
                arrow
              />
            </SettGroup>
            <SettText>
              These options are intended for developers and may cause unexpected behavior. Use them with caution.
            </SettText>
          </Gap12>
          <SettGroup title='Storage'>
            <SettOption
              title='Backup and Restore'
              Icon={<RoundIcon Icon={FolderFileStorageIcon} className='bg-yellow-500' />}
              arrow
              onPress={() => navigation.navigate('BackupAndRestore')}
            />
            {dev && (
              <SettOption
                title='MMKV data editor'
                Icon={<RoundIcon Icon={EditTableIcon} className='bg-green-500' />}
                arrow
                onPress={() => navigation.navigate('MMKVDataList')}
              />
            )}
            <SettOption
              title='Manage Storage'
              Icon={<RoundIcon Icon={Database02Icon} className='bg-slate-500' />}
              Right={<TxtAcc>{toReadableSize(totalSize)}</TxtAcc>}
              onPress={() => navigation.navigate('ManageStorage')}
              arrow
            />
            <SettOption
              title='Clear cache'
              Icon={<RoundIcon Icon={CleanIcon} className='bg-amber-500' />}
              Right={<TxtAcc>{toReadableSize(totalCache)}</TxtAcc>}
              onPress={clearCache}
              arrow
            />
          </SettGroup>
          <SettGroup title='Help & Support'>
            <SettOption
              arrow
              title='Ask a question'
              Icon={<RoundIcon Icon={BubbleChatIcon} className='bg-rose-500' />}
              onPress={ask_a_question}
            />
            <SettOption
              arrow
              title='Join telegram channel'
              Icon={<RoundIcon Icon={TelegramIcon} className='bg-sky-500' />}
              onPress={join_telegram_channel}
            />
            <SettOption
              arrow
              title='Privacy Policy'
              Icon={<RoundIcon Icon={ShieldUserIcon} className='bg-green-500' />}
            />
            <SettOption
              arrow
              title='Terms of Service'
              Icon={<RoundIcon Icon={PolicyIcon} className='bg-yellow-500' />}
            />
            <SettOption
              arrow
              title='About'
              Icon={<RoundIcon Icon={InformationCircleIcon} className='bg-slate-500' />}
              onPress={() => navigation.navigate('About')}
            />
          </SettGroup>
          <SettText className='text-center'>
            Version v{APP_VERSION} ({APP_VERSION_CODE})
          </SettText>
        </Gap20>
        <PaddingBottom />
      </ScrollView>
    </View>
  )
}

function UpdateSettings({ navigation }: NavProp) {
  const version = versionStore((state) => state.version)
  const isNew = version ? APP_VERSION_CODE < version.versionCode : false
  const isAhead = version ? APP_VERSION_CODE > version.versionCode : false
  const profile = profileStore((state) => state.user)

  if (!isNew && !isAhead) return null

  if (isAhead) {
    return (
      <Animated.View entering={FadeIn}>
        <Gap gap={10}>
          <SettGroup>
            <SettOption
              title='Version Ahead warning!'
              Icon={<RoundIcon Icon={SquareArrowUp02Icon} />}
              onPress={() => {
                if (profile?.isAdmin) {
                  navigation.navigate('EditVersion')
                }
              }}
            />
          </SettGroup>
          <SettText>
            If you installed the nightly build, you may see this message. Please ignore this message and continue using
            the app.
          </SettText>
        </Gap>
      </Animated.View>
    )
  }

  return (
    <Gap12>
      <Animated.View entering={FadeIn}>
        <SettGroup>
          <SettOption
            title={isNew ? 'Update available' : 'Check for updates'}
            Icon={<RoundIcon Icon={SquareArrowUp02Icon} />}
            arrow
            onPress={() => version && navigation.navigate('Update', { shouldGoBack: true })}
            Right={isNew ? <RoundNotification n={1} /> : <Txt>{`v${APP_VERSION}`}</Txt>}
          />
        </SettGroup>
      </Animated.View>
    </Gap12>
  )
}
