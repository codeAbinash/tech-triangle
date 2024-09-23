import AppIcon from '@assets/icons/icon.svg'
import Btn from '@components/Button'
import { PaddingBottom } from '@components/SafePadding'
import StackHeader from '@components/StackHeader'
import { GITHUB_REPO } from '@utils/constants'
import { Medium, Regular, SemiBold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React from 'react'
import { Linking, StatusBar, View } from 'react-native'

export default function Update({ navigation }: NavProp) {
  return (
    <View className='flex-1 p-5'>
      <View>
        <StatusBar barStyle='default' />
        <StackHeader title='App Update' navigation={navigation} left='Cancel' right='Done' />
      </View>
      <View className='mt-3 flex-1 justify-between'>
        <View className='flex-1 rounded-3xl bg-appIconBg p-8'>
          <AppIcon width={80} height={80} className='mt-8' />
          <SemiBold style={{ fontSize: 24 }} className='mt-5 text-white'>
            Update Available
          </SemiBold>
          <Medium style={{ fontSize: 14 }} className='mt-1 text-white opacity-70'>
            v1.0.0 15MB
          </Medium>
          <Regular className='mt-5 text-white opacity-80' style={{ fontSize: 12 }}>
            We bring you the latest features and improvements. Update now to enjoy the best experience.
          </Regular>
          <Regular className='mt-5 text-white opacity-80' style={{ fontSize: 12 }}>
            Download size may vary. The Download Now button will redirect you to the GitHub and you can download the
            latest.
          </Regular>
        </View>

        <View className='mt-5 px-5'>
          <Btn
            title='Download Update'
            onPress={() => {
              Linking.openURL(GITHUB_REPO)
            }}
          />
          <PaddingBottom />
        </View>
      </View>
    </View>
  )
}
