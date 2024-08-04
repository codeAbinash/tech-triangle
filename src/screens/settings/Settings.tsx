import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import Search from '@components/Search'
import { Gap12, Gap20, iconProps, RightArrow, SettingOption, SettingText, SettingWrapper, Title } from '@components/Settings'
import BubbleChatIcon from '@icons/bubble-chat-stroke-rounded.svg'
import CalendarIcon from '@icons/calendar-03-stroke-rounded.svg'
import CleanIcon from '@icons/clean-stroke-rounded.svg'
import ComputerIcon from '@icons/computer-stroke-rounded.svg'
import StorageIcon from '@icons/database-02-stroke-rounded.svg'
import DeveloperIcon from '@icons/developer-stroke-rounded.svg'
import InformationCircleIcon from '@icons/information-circle-stroke-rounded.svg'
import PolicyIcon from '@icons/policy-stroke-rounded.svg'
import ShieldUserIcon from '@icons/shield-user-stroke-rounded.svg'
import WeatherIcon from '@icons/sun-cloud-angled-rain-zap-01-stroke-rounded.svg'
import WalletIcon from '@icons/wallet-02-stroke-rounded.svg'
import COL, { Colors } from '@utils/colors'
import { APP_VERSION, APP_VERSION_CODE, ask_a_question } from '@utils/data'
import { PBold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React from 'react'
import { useColorScheme, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
// function getTransparentCardStyle(scheme: ColorSchemeName) {
//   return scheme === 'dark' ? 'aa' : '77'
// }

function SettingsHeader({ title, Title }: { title?: string; Title?: React.ReactNode }) {
  return (
    <View style={{ gap: 5 }} className='bg-white px-5 pb-0 dark:bg-zinc-950'>
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
            <SettingWrapper title='General'>
              <SettingOption
                title='Computer Science'
                Icon={<ComputerIcon {...iconProps} />}
                // onPress={() => navigation.navigate('ComputerScienceSettings')}
              />
              <SettingOption
                title='Weather Settings'
                Icon={<WeatherIcon {...iconProps} />}
                onPress={() => navigation.navigate('WeatherSettings')}
                Right={<RightArrow />}
              />
              <SettingOption title='Routine Management' Icon={<CalendarIcon {...iconProps} />} />
              <SettingOption title='My Wallet' Icon={<WalletIcon {...iconProps} />} />
            </SettingWrapper>
            <SettingText>
              Go to each section to customize your experience. All settings are saved automatically. You can also reset your settings to default.
            </SettingText>
          </Gap12>
          <SettingWrapper title='Storage'>
            <SettingOption title='Clear cache' Icon={<CleanIcon {...iconProps} />} />
            <SettingOption title='Clear storage' Icon={<StorageIcon {...iconProps} />} />
          </SettingWrapper>
          <Gap12>
            <SettingWrapper single>
              <SettingOption title='Developer options' Icon={<DeveloperIcon {...iconProps} />} />
            </SettingWrapper>
            <SettingText>These options are intended for developers and may cause data loss. Use them with caution.</SettingText>
          </Gap12>
          <SettingWrapper>
            <Title>Help & Support</Title>
            <SettingOption title='Ask a question' Icon={<BubbleChatIcon {...iconProps} />} onPress={ask_a_question} />
            <SettingOption title='Privacy Policy' Icon={<ShieldUserIcon {...iconProps} />} />
            <SettingOption title='Terms of Service' Icon={<PolicyIcon {...iconProps} />} />
            <SettingOption title='About' Icon={<InformationCircleIcon {...iconProps} />} />
          </SettingWrapper>
          <SettingText className='text-center'>
            Version v{APP_VERSION} ({APP_VERSION_CODE})
          </SettingText>
        </Gap20>
        <PaddingBottom />
      </ScrollView>
    </View>
  )
}
