import { CancelCircleSolidIcon, Search01Icon } from '@assets/icons/icons'
import { Colors } from '@utils/colors'
import { PoppinsMedium } from '@utils/fonts'
import React, { useCallback } from 'react'
import { TextInput, type TextInputProps, useColorScheme, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

type SearchProps = TextInputProps
export default function Search({ onChangeText, value, ...all }: SearchProps) {
  const scheme = useColorScheme()
  const opacity = useSharedValue(value ? 1 : 0)
  const ref = React.useRef<TextInput>(null)

  useDerivedValue(() => {
    opacity.value = withTiming(value ? 1 : 0, { duration: 200 })
  }, [value])

  const animatedStyle = useAnimatedStyle(() => {
    return { opacity: opacity.value }
  }, [value])

  const clearText = useCallback(() => {
    onChangeText && onChangeText('')
    ref.current?.focus()
  }, [onChangeText])

  return (
    <View
      className='w-full flex-row items-center justify-center overflow-hidden bg-zinc-100 pl-3.5 dark:bg-zinc-900'
      style={{ borderRadius: 14 }}
    >
      <Search01Icon width={17} height={17} color={scheme === 'dark' ? Colors.zinc[500] : Colors.zinc[400]} />
      <TextInput
        ref={ref}
        className='flex-1 p-2 px-3 text-zinc-800 dark:text-zinc-200'
        style={[PoppinsMedium, { fontSize: 15.5 }]}
        placeholderTextColor={scheme === 'dark' ? Colors.zinc[500] : Colors.zinc[400]}
        cursorColor={Colors.accent}
        selectionColor={Colors.accent + '55'}
        selectionHandleColor={Colors.accent}
        value={value}
        onChangeText={onChangeText}
        {...all}
      />
      <AnimatedTouchableOpacity
        className='py-2.5 pl-1 pr-3'
        activeOpacity={1}
        onPress={clearText}
        style={animatedStyle}
      >
        <CancelCircleSolidIcon color={scheme === 'dark' ? Colors.zinc[600] : Colors.zinc[400]} width={20} height={20} />
      </AnimatedTouchableOpacity>
    </View>
  )
}
