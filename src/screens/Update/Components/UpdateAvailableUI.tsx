import { Medium, Regular, SemiBold } from '@utils/fonts'
import React from 'react'
import { View } from 'react-native'
import AppIcon from '@assets/icons/icon.svg'

export default function UpdateAvailableUI({
  version,
  size,
  whatsNew,
}: {
  version: string
  size: string
  whatsNew: Array<string>
}) {
  return (
    <View className='flex-1 rounded-3xl bg-appIconBg p-8 pb-12'>
      <AppIcon width={80} height={80} className='mt-8' />
      <SemiBold style={{ fontSize: 24 }} className='mt-5 text-white'>
        Update Available
      </SemiBold>
      <Medium style={{ fontSize: 15 }} className='mt-1 text-white opacity-80'>
        {`v${version}`} • {size && `${size}`}
      </Medium>
      <Regular className='mt-5 text-white opacity-80' style={{ fontSize: 11 }}>
        We bring you the latest features and improvements. Update now to enjoy the best experience.
      </Regular>
      <Regular className='mt-5 text-white opacity-80' style={{ fontSize: 11 }}>
        Download size may vary. The Download Update button will redirect you to the GitHub and you can download the
        latest.
      </Regular>
      <View className='mt-5' style={{ gap: 5 }}>
        {whatsNew.map((item, index) => (
          <Regular key={index} className='text-white opacity-80' style={{ fontSize: 11 }}>
            • {'  '}
            {item}
          </Regular>
        ))}
      </View>
    </View>
  )
}
