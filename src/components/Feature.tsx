import { SemiBold, PoppinsSemiBold, PoppinsMedium, Medium } from '@utils/fonts'
import React from 'react'
import { Text, View } from 'react-native'

export default function Feature({ Icon, title, description }: { Icon: React.ReactNode; title: string; description: string | React.ReactNode }) {
  return (
    <View className='w-full flex-row items-center p-2' style={{ gap: 20 }}>
      {Icon}
      <View className='w-full flex-[0]' style={{ flexGrow: 1 }}>
        <SemiBold style={{ fontSize: 14.5 }} className='text-zinc-700 dark:text-zinc-300'>
          {title}
        </SemiBold>
        <Medium style={{ fontSize: 13 }} className='text-zinc-400 dark:text-zinc-500'>
          {description}
        </Medium>
      </View>
    </View>
  )
}
