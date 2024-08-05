import ArrowLeft01Icon from '@icons/arrow-left-01-stroke-rounded.svg'
import ArrowRightIcon from '@icons/arrow-right-01-stroke-rounded.svg'
import { Colors } from '@utils/colors'
import { PMedium, PoppinsMedium } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React from 'react'
import { TouchableOpacity, useColorScheme, View, type TextInputProps, type TextProps, type TouchableOpacityProps, type ViewProps } from 'react-native'
import type { SvgProps } from 'react-native-svg'
import { PaddingTop } from './SafePadding'
import Tick01Icon from '@icons/tick-01-stroke-rounded.svg'
import { TextInput } from 'react-native-gesture-handler'

type SettingOptionProps = TouchableOpacityProps & {
  title: string
  Icon?: React.ReactNode
  Right?: React.ReactNode
}
export function SettingOption({ title, onPress, Icon, Right, style, ...rest }: SettingOptionProps) {
  return (
    <TouchableOpacity className='flex-row justify-between p-2.5 px-7' onPress={onPress} activeOpacity={0.7} style={[{ gap: 10 }, style]} {...rest}>
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

type SettingOptionInputProps = TextInputProps & {
  Icon?: React.ReactNode
  Right?: React.ReactNode
}
export function SettingOptionInput({ Icon, Right, ...rest }: SettingOptionInputProps) {
  const scheme = useColorScheme()
  return (
    <View className='flex-row justify-between px-7' style={{ gap: 10 }}>
      <View className='flex-1 flex-row items-center' style={{ gap: 23 }}>
        {Icon}
        <TextInput
          className='flex-1 p-2.5 px-0 text-zinc-800 dark:text-zinc-200'
          style={[{ fontSize: 15, paddingVertical: 0, flex: 1 }, PoppinsMedium]}
          placeholderTextColor={scheme === 'dark' ? Colors.zinc[500] : Colors.zinc[400]}
          cursorColor={Colors.accent}
          selectionColor={Colors.accent + '55'}
          selectionHandleColor={Colors.accent}
          placeholder='Default placeholder'
          {...rest}
        />
      </View>
      {Right}
    </View>
  )
}

export function SettingWrapper({ children, title, single }: { children?: React.ReactNode; title?: string; single?: boolean }) {
  return (
    <View className={`bg-white ${single ? 'py-1.5' : 'py-3'} dark:bg-zinc-950`} style={{ gap: 4 }}>
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

export type CheckIconProps = {
  checked: boolean
} & SvgProps
export function Check({ checked, ...rest }: CheckIconProps) {
  return checked ? <Tick01Icon {...iconProps} className='text-accent' {...rest} /> : <Tick01Icon {...iconProps} className='opacity-0' />
}
