import { ArrowRight01Icon, Tick01Icon } from '@assets/icons/icons'
import { Colors } from '@utils/colors'
import { Medium } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React from 'react'
import {
  TouchableOpacity,
  useColorScheme,
  View,
  type ScrollViewProps,
  type TextProps,
  type TouchableOpacityProps,
  type ViewProps,
} from 'react-native'
import type { SvgProps } from 'react-native-svg'
import BackHeader from './BackHeader'
import { Gap20 } from './Gap'
import KeyboardAvoidingContainer from './KeyboardAvoidingContainer'
import { PaddingBottom } from './SafePadding'
import { AutoStatusBar } from './StatusBar'

type SettOptionProps = TouchableOpacityProps & {
  title: string
  Icon?: React.ReactNode
  Right?: React.ReactNode
  arrow?: boolean
  numberOfLines?: number
}
export function SettOption({ title, onPress, Icon, Right, style, arrow, numberOfLines, ...rest }: SettOptionProps) {
  return (
    <TouchableOpacity
      className='flex-row items-center justify-between px-6'
      onPress={onPress}
      activeOpacity={0.7}
      style={[{ gap: 10 }]}
      {...rest}
    >
      <View className='flex-row items-center justify-center' style={{ gap: 22, flexShrink: 1 }}>
        {Icon}
        <Medium
          className='p-2.5 px-0 text-left text-zinc-800 dark:text-zinc-200'
          style={[{ fontSize: 14.5, flexShrink: 1 }, style]}
          numberOfLines={numberOfLines || 0}
        >
          {title}
        </Medium>
      </View>
      <View className='flex-row items-center' style={{ gap: 5, flexShrink: 1 }}>
        {Right}
        {arrow && <RightArrow />}
      </View>
    </TouchableOpacity>
  )
}

type SettGroupProps = ViewProps & {
  title?: string
  color?: string
}
export function SettGroup({ children, title, color = Colors.accent, ...rest }: SettGroupProps) {
  return (
    <View className={'bg-white py-2.5 dark:bg-zinc-950'} {...rest}>
      {title && (
        <Medium
          className={'px-6 py-1.5 text-accent'}
          style={{ textTransform: 'none', opacity: 1, fontSize: 13, color: color }}
        >
          {title}
        </Medium>
      )}
      <View style={{ gap: 8 }}>{children}</View>
    </View>
  )
}

export function RightArrow() {
  return <ArrowRight01Icon width={22} height={22} color={Colors.zinc[500]} />
}

export function SettText({ children, ...rest }: TextProps) {
  return (
    <Medium className='px-5 text-xs text-zinc-500 dark:text-zinc-500' {...rest}>
      {children}
    </Medium>
  )
}

export const ic = { width: 22, height: 22, color: Colors.zinc[500] }
export type CheckIconProps = {
  checked: boolean
} & SvgProps
export function Check({ checked, ...rest }: CheckIconProps) {
  return checked ? (
    <Tick01Icon {...ic} className='text-accent' {...rest} />
  ) : (
    <Tick01Icon {...ic} className='opacity-0' />
  )
}

type SettWrapperProps = ScrollViewProps & {
  Header?: React.ReactNode
  title?: string
  navigation?: StackNav
}
export function SettWrapper({ Header, title, navigation, children, ...rest }: SettWrapperProps) {
  const scheme = useColorScheme()
  return (
    <View className='flex-1 bg-zinc-100 dark:bg-black'>
      <AutoStatusBar scheme={scheme} />
      {Header ? Header : <BackHeader title={title || 'Test Title'} navigation={navigation} />}
      <KeyboardAvoidingContainer
        contentContainerStyle={{ paddingBottom: 100 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...rest}
      >
        <Gap20>{children}</Gap20>
        <PaddingBottom />
      </KeyboardAvoidingContainer>
    </View>
  )
}

export function Bg({ children, ...rest }: ViewProps) {
  return (
    <View className='bg-white dark:bg-zinc-950' {...rest}>
      {children}
    </View>
  )
}

export function BgSecondary({ children, ...rest }: ViewProps) {
  return (
    <View className='bg-zinc-100 dark:bg-black' {...rest}>
      {children}
    </View>
  )
}
