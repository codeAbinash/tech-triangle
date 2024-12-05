import { ArrowRight01Icon, Tick01Icon } from '@assets/icons/icons'
import { Colors } from '@utils/colors'
import { F, Medium } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import { cn } from '@utils/utils'
import React from 'react'
import {
  TouchableOpacity,
  View,
  type ScrollViewProps,
  type TextProps,
  type TouchableOpacityProps,
  type ViewProps,
  useColorScheme,
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
export function SettOption({
  title,
  children,
  onPress,
  Icon,
  Right,
  className,
  arrow,
  numberOfLines,
  ...rest
}: SettOptionProps) {
  return (
    <TouchableOpacity
      className={cn('flex-row items-center justify-between px-6', className)}
      onPress={onPress}
      activeOpacity={0.7}
      style={[{ gap: 10 }]}
      {...rest}
    >
      <View className='flex-row items-center justify-center' style={{ gap: 22, flexShrink: 1 }}>
        {Icon}
        <View className='p-2.5 px-0'>
          <Medium
            className='text-left text-zinc-800 dark:text-zinc-200'
            style={[{ fontSize: 12, flexShrink: 1 }]}
            numberOfLines={numberOfLines || 0}
          >
            {title}
          </Medium>
          {children}
        </View>
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
  accent?: string
}
export function SettGroup({ children, title, className, accent = Colors.accent, ...rest }: SettGroupProps) {
  return (
    <View className={cn('bg-white py-3 dark:bg-zinc-950', className)} {...rest}>
      {title && (
        <Medium
          className={'px-6 py-1.5 text-accent'}
          style={{ textTransform: 'none', opacity: 1, fontSize: 10, color: accent }}
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

export function SettText({ children, className, ...rest }: TextProps) {
  const newLocal = cn('px-5 text-zinc-500 dark:text-zinc-500', className)
  return (
    <Medium className={newLocal} {...rest} style={[F.F9]}>
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
    <Tick01Icon {...ic} color={Colors.accent} {...rest} />
  ) : (
    <Tick01Icon {...ic} style={{ opacity: 0 }} />
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
        contentContainerStyle={{ paddingBottom: 70 }}
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
