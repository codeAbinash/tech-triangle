import CancelCircleIcon from '@hugeicons/CancelCircleIcon'
import Search01Icon from '@hugeicons/Search01Icon'
import { Colors } from '@utils/colors'
import { SEMIBOLD } from '@utils/fonts'
import React, { useCallback } from 'react'
import { TextInput, TouchableOpacity, View, useColorScheme, type TextInputProps } from 'react-native'
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'

export default function Search({ onChangeText, value, ...all }: TextInputProps) {
  const scheme = useColorScheme()
  const opacity = useSharedValue(value ? 1 : 0)
  const ref = React.useRef<TextInput>(null)

  useDerivedValue(() => {
    opacity.value = withTiming(value ? 1 : 0, { duration: 300 })
  }, [value])

  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }))

  const clearText = useCallback(() => {
    onChangeText && onChangeText('')
    ref.current?.focus()
  }, [onChangeText])

  return (
    <View
      className='w-full flex-row items-center justify-center overflow-hidden bg-zinc-100 pl-3.5 dark:bg-zinc-900'
      style={{ borderRadius: 14 }}
    >
      <Search01Icon size={17} color={scheme === 'dark' ? Colors.zinc[500] : Colors.zinc[400]} variant='stroke-rounded' strokeWidth={2.5}/>
      <TextInput
        ref={ref}
        className='flex-1 p-3 text-zinc-800 dark:text-zinc-200'
        style={[SEMIBOLD, { fontSize: 13, marginBottom: 3, height: 40 }]}
        placeholderTextColor={scheme === 'dark' ? Colors.zinc[500] : Colors.zinc[400]}
        cursorColor={Colors.accent}
        selectionColor={Colors.accent + '55'}
        selectionHandleColor={Colors.accent}
        value={value}
        onChangeText={onChangeText}
        {...all}
      />
      <Animated.View style={animatedStyle}>
        <TouchableOpacity className='py-2.5 pl-1 pr-3' activeOpacity={1} onPress={clearText}>
          <CancelCircleIcon color={scheme === 'dark' ? Colors.zinc[600] : Colors.zinc[400]} size={20} variant='solid-rounded'/>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}
