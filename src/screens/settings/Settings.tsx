import { storageStore } from '@/zustand/storageStore'
import { BrushIcon } from '@assets/icons/icons'
import { Gap12, Gap20 } from '@components/Gap'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import Search from '@components/Search'
import { ic, SettGroup, SettOption, SettText } from '@components/Settings'
import { RightText } from '@components/Text'
import BubbleChatIcon from '@icons/bubble-chat-stroke-rounded.svg'
import CalendarIcon from '@icons/calendar-03-stroke-rounded.svg'
import CleanIcon from '@icons/clean-stroke-rounded.svg'
import CodeIcon from '@icons/code-stroke-rounded.svg'
import ComputerIcon from '@icons/computer-stroke-rounded.svg'
import StorageIcon from '@icons/database-02-stroke-rounded.svg'
import InformationCircleIcon from '@icons/information-circle-stroke-rounded.svg'
import PolicyIcon from '@icons/policy-stroke-rounded.svg'
import ShieldUserIcon from '@icons/shield-user-stroke-rounded.svg'
import WeatherIcon from '@icons/sun-cloud-angled-rain-zap-01-stroke-rounded.svg'
import WalletIcon from '@icons/wallet-02-stroke-rounded.svg'
import { Colors } from '@utils/colors'
import { APP_VERSION, APP_VERSION_CODE, ask_a_question } from '@utils/data'
import { PBold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { toReadableSize } from '@utils/utils'
import React from 'react'
import { useColorScheme, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
// function getTransparentCardStyle(scheme: ColorSchemeName) {
//   return scheme === 'dark' ? 'aa' : '77'
// }

function SettingsHeader({ title, Title }: { title?: string; Title?: React.ReactNode }) {
  return (
    <View style={{ gap: 5 }} className='bg-white px-5 pb-3 dark:bg-zinc-950'>
      {Title}
      <PBold style={{ fontSize: 30 }} className='mt-3 text-zinc-800 dark:text-zinc-200'>
        {title}
      </PBold>
      <Search placeholder='Search settings' />
    </View>
  )
}

export default function Settings({ navigation }: NavProp) {
  const scheme = useColorScheme()
  const totalSize = storageStore((state) => state.totalSize)
  const totalCache = storageStore((state) => state.totalCacheSize)
  const clearCache = storageStore((state) => state.clearCache)

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
            <SettText className='mt-3'>Go to each section to customize your experience. All settings are saved automatically.</SettText>
            <SettGroup title='General'>
              <SettOption
                title='Computer Science'
                Icon={<ComputerIcon {...ic} />}
                arrow
                // onPress={() => navigation.navigate('ComputerScienceSettings')}
              />
              <SettOption title='Weather Settings' Icon={<WeatherIcon {...ic} />} onPress={() => navigation.navigate('WeatherSettings')} arrow />
              <SettOption title='Routine Management' Icon={<CalendarIcon {...ic} />} arrow />
              <SettOption title='My Wallet' Icon={<WalletIcon {...ic} />} arrow />
            </SettGroup>
          </Gap12>
          <SettGroup title='Storage'>
            <SettOption
              title='Clear cache'
              Icon={<CleanIcon {...ic} />}
              Right={<RightText>{toReadableSize(totalCache)}</RightText>}
              onPress={clearCache}
            />
            <SettOption title='Clear storage' Icon={<StorageIcon {...ic} />} Right={<RightText>{toReadableSize(totalSize)}</RightText>} />
          </SettGroup>
          <Gap12>
            <SettGroup title='For Developers'>
              <SettOption title='Developer options' Icon={<CodeIcon {...ic} />} onPress={() => navigation.navigate('DeveloperOptions')} arrow />
              <SettOption title='UI & Components' Icon={<BrushIcon {...ic} />} onPress={() => navigation.navigate('TestSettings')} arrow />
            </SettGroup>
            <SettText>These options are intended for developers and may cause unexpected behavior. Use them with caution.</SettText>
          </Gap12>
          <SettGroup title='Help & Support'>
            <SettOption arrow title='Ask a question' Icon={<BubbleChatIcon {...ic} />} onPress={ask_a_question} />
            <SettOption arrow title='Privacy Policy' Icon={<ShieldUserIcon {...ic} />} />
            <SettOption arrow title='Terms of Service' Icon={<PolicyIcon {...ic} />} />
            <SettOption arrow title='About' Icon={<InformationCircleIcon {...ic} />} />
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
