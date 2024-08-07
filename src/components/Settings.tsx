import { Colors } from '@utils/colors'
import { PMedium } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React from 'react'
import { TouchableOpacity, View, type ScrollViewProps, type TextProps, type TouchableOpacityProps, type ViewProps } from 'react-native'
import type { SvgProps } from 'react-native-svg'
import BackHeader from './BackHeader'
import { Gap20 } from './Gap'
import KeyboardAvoidingContainer from './KeyboardAvoidingContainer'
import { PaddingBottom } from './SafePadding'
import { ArrowRight01Icon, Tick01Icon } from '@assets/icons/icons'

type SettOptionProps = TouchableOpacityProps & {
  title: string
  Icon?: React.ReactNode
  Right?: React.ReactNode
  arrow?: boolean
}
export function SettOption({ title, onPress, Icon, Right, style, arrow, ...rest }: SettOptionProps) {
  return (
    <TouchableOpacity
      className='flex-row items-center justify-between px-7'
      onPress={onPress}
      activeOpacity={0.7}
      style={[{ gap: 10 }, style]}
      {...rest}
    >
      <View className='flex-row items-center justify-center' style={{ gap: 20 }}>
        {Icon}
        <PMedium className='p-2.5 px-0 text-zinc-800 dark:text-zinc-200' style={{ fontSize: 15 }}>
          {title}
        </PMedium>
      </View>
      <View className='flex-row items-center' style={{ gap: 5 }}>
        {Right}
        {arrow && <RightArrow />}
      </View>
    </TouchableOpacity>
  )
}

type SettGroupProps = ViewProps & {
  title?: string
}
export function SettGroup({ children, title, ...rest }: SettGroupProps) {
  return (
    <View className={`bg-white py-2.5 dark:bg-zinc-950`} {...rest}>
      {title && (
        <PMedium className={`px-6 py-1.5 text-accent`} style={{ textTransform: 'none', opacity: 1, fontSize: 13.5 }}>
          {title}
        </PMedium>
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
    <PMedium className='px-5 text-xs text-zinc-500 dark:text-zinc-500' {...rest}>
      {children}
    </PMedium>
  )
}

export const ic = { width: 22, height: 22, color: Colors.zinc[500] }
export type CheckIconProps = {
  checked: boolean
} & SvgProps
export function Check({ checked, ...rest }: CheckIconProps) {
  return checked ? <Tick01Icon {...ic} className='text-accent' {...rest} /> : <Tick01Icon {...ic} className='opacity-0' />
}

type SettWrapperProps = ScrollViewProps & {
  Header?: React.ReactNode
  title?: string
  navigation: StackNav
}
export function SettWrapper({ Header, title, navigation, children, ...rest }: SettWrapperProps) {
  return (
    <View className='flex-1 bg-zinc-100 dark:bg-black'>
      {Header ? Header : <BackHeader title={title || 'Test Title'} navigation={navigation} />}
      <KeyboardAvoidingContainer
        contentContainerStyle={{ paddingBottom: 50 }}
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
