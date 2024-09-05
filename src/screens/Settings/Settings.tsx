import { devOptStore } from '@/zustand/devOptStore'
import {
  BrushIcon,
  BubbleChatIcon,
  Calendar03Icon,
  CleanIcon,
  CodeIcon,
  ComputerIcon,
  Database02Icon,
  EditTableIcon,
  FolderFileStorageIcon,
  InformationCircleIcon,
  PolicyIcon,
  ShieldUserIcon,
  SunCloudAngledRainZap01Icon,
  UserIcon,
  Wallet02Icon,
} from '@assets/icons/icons'
import { Gap12, Gap20 } from '@components/Gap'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import Search from '@components/Search'
import { ic, SettGroup, SettOption, SettText } from '@components/Settings'
import { TxtAcc } from '@components/Text'
import { useIsFocused } from '@react-navigation/native'
import { Colors } from '@utils/colors'
import { APP_VERSION, APP_VERSION_CODE, ask_a_question } from '@utils/data'
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
                Icon={<UserIcon {...ic} />}
                arrow
                onPress={() => navigation.navigate('YourProfile')}
              />
              <SettOption
                title='Computer Science'
                Icon={<ComputerIcon {...ic} />}
                arrow
                // onPress={() => navigation.navigate('ComputerScienceSettings')}
              />
              <SettOption
                title='Weather Settings'
                Icon={<SunCloudAngledRainZap01Icon {...ic} />}
                onPress={() => navigation.navigate('WeatherSettings')}
                arrow
              />
              <SettOption title='Routine Management' Icon={<Calendar03Icon {...ic} />} arrow />
              <SettOption title='My Wallet' Icon={<Wallet02Icon {...ic} />} arrow />
            </SettGroup>
          </Gap12>
          <Gap12>
            <SettGroup title='For Developers'>
              <SettOption
                title='Developer options'
                Icon={<CodeIcon {...ic} />}
                onPress={() => navigation.navigate('DeveloperOptions')}
                arrow
              />
              <SettOption
                title='UI & Components'
                Icon={<BrushIcon {...ic} />}
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
              Icon={<FolderFileStorageIcon {...ic} />}
              arrow
              onPress={() => navigation.navigate('BackupAndRestore')}
            />
            {dev && (
              <SettOption
                title='MMKV data editor'
                Icon={<EditTableIcon {...ic} />}
                arrow
                onPress={() => navigation.navigate('MMKVDataList')}
              />
            )}
            <SettOption
              title='Manage Storage'
              Icon={<Database02Icon {...ic} />}
              Right={<TxtAcc>{toReadableSize(totalSize)}</TxtAcc>}
              onPress={() => navigation.navigate('ManageStorage')}
              arrow
            />
            <SettOption
              title='Clear cache'
              Icon={<CleanIcon {...ic} />}
              Right={<TxtAcc>{toReadableSize(totalCache)}</TxtAcc>}
              onPress={clearCache}
              arrow
            />
          </SettGroup>
          <SettGroup title='Help & Support'>
            <SettOption arrow title='Ask a question' Icon={<BubbleChatIcon {...ic} />} onPress={ask_a_question} />
            <SettOption arrow title='Privacy Policy' Icon={<ShieldUserIcon {...ic} />} />
            <SettOption arrow title='Terms of Service' Icon={<PolicyIcon {...ic} />} />
            <SettOption
              arrow
              title='About'
              Icon={<InformationCircleIcon {...ic} />}
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
