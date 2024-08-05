import ArrowLeft01Icon from '@icons/arrow-left-01-stroke-rounded.svg'
import ArrowRightIcon from '@icons/arrow-right-01-stroke-rounded.svg'
import Tick01Icon from '@icons/tick-01-stroke-rounded.svg'
import { Colors } from '@utils/colors'
import { PMedium, PoppinsMedium } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
  type TextInputProps,
  type TextProps,
  type TouchableOpacityProps,
  type ViewProps,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import type { SvgProps } from 'react-native-svg'
import { PaddingTop } from './SafePadding'
import { devOptStore } from '@/zustand/devOptStore'
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'

type SettingOptionProps = TouchableOpacityProps & {
  title: string
  Icon?: React.ReactNode
  Right?: React.ReactNode
}
export function SettingOption({ title, onPress, Icon, Right, style, ...rest }: SettingOptionProps) {
  return (
    <TouchableOpacity
      className='flex-row items-center justify-between px-7'
      onPress={onPress}
      activeOpacity={0.7}
      style={[{ gap: 10 }, style]}
      {...rest}
    >
      <View className='flex-row items-center justify-center' style={{ gap: 23 }}>
        {Icon}
        <PMedium className='p-2.5 px-0 text-zinc-800 dark:text-zinc-200' style={{ fontSize: 15 }}>
          {title}
        </PMedium>
      </View>
      {Right}
    </TouchableOpacity>
  )
}

export function RightText({ children, ...rest }: TextProps) {
  return (
    <PMedium className='text-accent' style={{ fontSize: 15 }} {...rest}>
      {children}
    </PMedium>
  )
}

type SettingOptionInputProps = TextInputProps & {
  Icon?: React.ReactNode
  Right?: React.ReactNode
}
export function SettingOptionInput({ Icon, Right, ...rest }: SettingOptionInputProps) {
  const scheme = useColorScheme()
  return (
    <View className='flex-row items-center justify-between px-7' style={{ gap: 10 }}>
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
    <View className={`bg-white ${single ? 'py-2' : 'py-2.5'} dark:bg-zinc-950`} style={{ gap: 4 }}>
      {title && (
        <PMedium className='px-6 pb-1 pt-1 text-accent' style={{ textTransform: 'none', opacity: 0.9, fontSize: 13.5 }}>
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

const TC_W = 50 // Toggle Container Width
const TC_H = 26 // Toggle Container Height
const T_W = 17 // Toggle Width
const PAD = (TC_H - T_W) / 2 + 0.025 // Padding
const AVAIL_W = TC_W - T_W - PAD * 2 // Available Width
// const duration = useDeveloperOptions.getState().animationDuration

const styles = StyleSheet.create({
  toggleContainer: {
    width: TC_W,
    height: TC_H,
    borderRadius: 100,
    padding: PAD,
  },
  toggle: {
    width: T_W,
    height: T_W,
    borderRadius: 100,
    backgroundColor: 'white',
  },
})

interface ToggleProps {
  isActive: boolean
  color?: string
}

export function Toggle({ isActive, color }: ToggleProps) {
  const scheme = useColorScheme()
  const progress = useDerivedValue(() => (isActive ? AVAIL_W : 0), [isActive])
  const duration = devOptStore((state) => state.animationDuration)

  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = withTiming(
      interpolateColor(progress.value, [0, AVAIL_W], [scheme === 'dark' ? Colors.zinc[800] : Colors.zinc[200], color || Colors.accent]),
      { duration },
    )
    return { backgroundColor }
  }, [color, scheme, progress])

  const customSpringStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: withTiming(progress.value, { duration }) }] }
  }, [progress])

  return (
    <Animated.View style={[styles.toggleContainer, backgroundColorStyle]}>
      <Animated.View style={[styles.toggle, customSpringStyle]}></Animated.View>
    </Animated.View>
  )
}
