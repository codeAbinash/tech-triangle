import { devOptStore } from '@/zustand/devOptStore'
import {
  BrushSolidIcon,
  BubbleChatSolidIcon,
  Calendar03SolidIcon,
  CleanSolidIcon,
  CodeSolidIcon,
  ComputerSolidIcon,
  Database02SolidIcon,
  EditTableSolidIcon,
  FolderFileStorageSolidIcon,
  InformationCircleSolidIcon,
  PolicySolidIcon,
  ShieldUserSolidIcon,
  SquareLock02SolidIcon,
  SunCloudAngledRainZap01SolidIcon,
  TelegramSolidIcon,
  UserSolidIcon,
  Wallet02SolidIcon,
} from '@assets/icons/icons'
import { Gap12, Gap20 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import Search from '@components/Search'
import { SettGroup, SettOption, SettText } from '@components/Settings'
import { TxtAcc } from '@components/Text'
import { useIsFocused } from '@react-navigation/native'
import { Colors } from '@utils/colors'
import { APP_VERSION, APP_VERSION_CODE, ask_a_question, join_telegram_channel } from '@utils/data'
import { Bold } from '@utils/fonts'
import { Caches, clearStorage, getStartWithSize, getStorageSize } from '@utils/storage'
import type { NavProp } from '@utils/types'
import { screenDelay, toReadableSize } from '@utils/utils'
import React, { useEffect } from 'react'
import { useColorScheme, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
// function getTransparentCardStyle(scheme: ColorSchemeName) {
//   return scheme === 'dark' ? 'aa' : '77'
// }

function SettingsHeader({ title, Title }: { title?: string; Title?: React.ReactNode }) {
  return (
    <View style={{ gap: 5 }} className='bg-white px-5 pb-3 dark:bg-zinc-950'>
      {Title}
      <Bold style={{ fontSize: 30 }} className='mt-3 text-zinc-800 dark:text-zinc-200'>
        {title}
      </Bold>
      <Search placeholder='Search settings' />
    </View>
  )
}

export default function Settings({ navigation }: NavProp) {
  const scheme = useColorScheme()
  const [totalSize, setTotalSize] = React.useState(0)
  const [totalCache, setTotalCache] = React.useState(0)
  const dev = devOptStore((state) => state.isEnabled)

  const focused = useIsFocused()

  useEffect(() => {
    focused &&
      screenDelay(() => {
        setTotalSize(getStartWithSize(''))
        setTotalCache(getStorageSize(Caches))
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function clearCache() {
    clearStorage(Caches)
    setTotalCache(0)
  }

  return (
    <View className='flex-1 bg-white dark:bg-zinc-950'>
      <PaddingTop />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30, backgroundColor: scheme === 'dark' ? 'black' : Colors.zinc[100] }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <SettingsHeader title='Settings' />
        {/* <SettingsHeader navigation={navigation} title='Settings' back={false}/> */}
        {/* <SettingBackHeader title='Computer Science' navigation={navigation} /> */}
        <Gap20>
          <Gap12>
            <SettText className='mt-3'>
              Go to each section to customize your experience. All settings are saved automatically.
            </SettText>
            <SettGroup title='General'>
              <SettOption
                title='Your Profile'
                Icon={<RoundedIcon Icon={UserSolidIcon} className='bg-green-500' />}
                arrow
                onPress={() => navigation.navigate('YourProfile')}
              />
              <SettOption title='Computer Science' Icon={<RoundedIcon Icon={ComputerSolidIcon} />} arrow />
              <SettOption
                title='Weather Settings'
                // Icon={<SunCloudAngledRainZap01SolidIcon {...ic} />}
                Icon={<RoundedIcon Icon={SunCloudAngledRainZap01SolidIcon} className='bg-blue-500' />}
                onPress={() => navigation.navigate('WeatherSettings')}
                arrow
              />
              <SettOption
                title='Routine Management'
                Icon={<RoundedIcon Icon={Calendar03SolidIcon} className='bg-red-500' />}
                arrow
              />
              <SettOption
                title='My Wallet'
                Icon={<RoundedIcon Icon={Wallet02SolidIcon} className='bg-amber-500' />}
                arrow
              />
            </SettGroup>
          </Gap12>
          <Gap12>
            <SettGroup title='Password and Security'>
              <SettOption
                title='App Lock'
                // Icon={<SquareLock02SolidIcon {...ic} />}
                Icon={<RoundedIcon Icon={SquareLock02SolidIcon} className='bg-green-500' />}
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
                // Icon={<CodeIcon {...ic} />}
                Icon={<RoundedIcon Icon={CodeSolidIcon} className='bg-blue-500' />}
                onPress={() => navigation.navigate('DeveloperOptions')}
                arrow
              />
              <SettOption
                title='UI & Components'
                // Icon={<BrushIcon {...ic} />}
                Icon={<RoundedIcon Icon={BrushSolidIcon} className='bg-rose-500' />}
                onPress={() => navigation.navigate('TestSettings')}
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
              Icon={<RoundedIcon Icon={FolderFileStorageSolidIcon} className='bg-yellow-500' />}
              arrow
              onPress={() => navigation.navigate('BackupAndRestore')}
            />
            {dev && (
              <SettOption
                title='MMKV data editor'
                Icon={<RoundedIcon Icon={EditTableSolidIcon} className='bg-green-500' />}
                arrow
                onPress={() => navigation.navigate('MMKVDataList')}
              />
            )}
            <SettOption
              title='Manage Storage'
              Icon={<RoundedIcon Icon={Database02SolidIcon} className='bg-slate-500' />}
              Right={<TxtAcc>{toReadableSize(totalSize)}</TxtAcc>}
              onPress={() => navigation.navigate('ManageStorage')}
              arrow
            />
            <SettOption
              title='Clear cache'
              Icon={<RoundedIcon Icon={CleanSolidIcon} className='bg-amber-500' />}
              Right={<TxtAcc>{toReadableSize(totalCache)}</TxtAcc>}
              onPress={clearCache}
              arrow
            />
          </SettGroup>
          <SettGroup title='Help & Support'>
            <SettOption
              arrow
              title='Ask a question'
              Icon={<RoundedIcon Icon={BubbleChatSolidIcon} className='bg-rose-500' />}
              onPress={ask_a_question}
            />
            <SettOption
              arrow
              title='Join telegram channel'
              Icon={<RoundedIcon Icon={TelegramSolidIcon} className='bg-sky-500' />}
              onPress={join_telegram_channel}
            />
            <SettOption
              arrow
              title='Privacy Policy'
              Icon={<RoundedIcon Icon={ShieldUserSolidIcon} className='bg-green-500' />}
            />
            <SettOption
              arrow
              title='Terms of Service'
              Icon={<RoundedIcon Icon={PolicySolidIcon} className='bg-yellow-500' />}
            />
            <SettOption
              arrow
              title='About'
              Icon={<RoundedIcon Icon={InformationCircleSolidIcon} className='bg-slate-500' />}
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
