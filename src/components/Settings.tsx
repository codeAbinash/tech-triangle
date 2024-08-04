import ArrowLeft01Icon from '@icons/arrow-left-01-stroke-rounded.svg'
import ArrowRightIcon from '@icons/arrow-right-01-stroke-rounded.svg'
import { Colors } from '@utils/colors'
import { PMedium, PSemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React from 'react'
import { TouchableOpacity, useColorScheme, View, type TextProps, type ViewProps } from 'react-native'
import { PaddingTop } from './SafePadding'
export function SettingOption({
  title,
  onPress,
  Icon,
  Right,
}: {
  title: string
  onPress?: () => void
  Icon?: React.ReactNode
  Right?: React.ReactNode
}) {
  return (
    <TouchableOpacity className='flex-row justify-between p-2.5 px-7' onPress={onPress} activeOpacity={0.7} style={{ gap: 10 }}>
      <View className='flex-row items-center justify-center' style={{ gap: 23 }}>
        {Icon}
        <PMedium className='text-zinc-800 dark:text-zinc-200' style={{ fontSize: 15 }}>
          {title}
        </PMedium>
      </View>
      {Right}
    </TouchableOpacity>
  )
}

export function SettingWrapper({ children, title, single }: { children?: React.ReactNode; title?: string; single?: boolean }) {
  return (
    <View className={`bg-white ${single ? 'py-1.5' : 'py-3'} dark:bg-zinc-950`} style={{ gap: 3 }}>
      {title && (
        <PMedium className='px-6 pb-1 pt-0.5 text-accent' style={{ textTransform: 'none', opacity: 0.9, fontSize: 13.5 }}>
          {title}
        </PMedium>
      )}
      {children}
    </View>
  )
}

export function Gap12({ children, style, ...rest }: ViewProps) {
  return (
    <View style={[{ gap: 12 }, style]} {...rest}>
      {children}
    </View>
  )
}

export function Gap20({ children, style, ...rest }: ViewProps) {
  return (
    <View style={[{ gap: 20 }, style]} {...rest}>
      {children}
    </View>
  )
}

export function Title({ children, style, ...rest }: TextProps) {
  return (
    <PMedium className='px-6 pb-1 pt-0.5 text-accent' style={[{ textTransform: 'none', fontSize: 13.5 }, style]} {...rest}>
      {children}
    </PMedium>
  )
}

export function RightArrow() {
  return <ArrowRightIcon width={22} height={22} color={Colors.zinc[500]} />
}

export function SettingText({ children, ...rest }: TextProps) {
  return (
    <PMedium className='px-5 text-xs text-zinc-500 dark:text-zinc-500' {...rest}>
      {children}
    </PMedium>
  )
}

export function BackHeader({ navigation, title, Title }: { navigation: StackNav; title?: string; Title?: React.ReactNode }) {
  const scheme = useColorScheme()
  return (
    <View className='bg-white px-5 pb-0 pl-1 dark:bg-zinc-950'>
      <PaddingTop />
      <View>
        {Title || (
          <View className='flex-row items-center'>
            <TouchableOpacity className='p-3' onPress={() => navigation.goBack()} activeOpacity={0.7}>
              <ArrowLeft01Icon width={26} height={26} color={scheme === 'dark' ? Colors.zinc[200] : Colors.zinc[800]} />
            </TouchableOpacity>
            <PMedium style={{ fontSize: 18 }} className='mt-0.5 text-zinc-800 dark:text-zinc-200'>
              {title}
            </PMedium>
          </View>
        )}
      </View>
    </View>
  )
}

export const iconProps = { width: 22, height: 22, color: Colors.zinc[500] }
