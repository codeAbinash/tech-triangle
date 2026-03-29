import Search01Icon from '@hugeicons/Search01Icon'
import { Colors } from '@utils/colors'
import { SEMIBOLD } from '@utils/fonts'
import { forwardRef } from 'react'
import { type LayoutChangeEvent, TextInput, type TextInputProps, useColorScheme } from 'react-native'
import Animated, { FadeIn, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const ICON_ENTER = FadeIn.delay(150).duration(200)
const INPUT_ENTER = FadeIn.delay(200).duration(250)
const EXPAND_DURATION = 300

export default forwardRef<TextInput, TextInputProps>(function HeaderSearch({ onChangeText, value, ...rest }, ref) {
  const scheme = useColorScheme()
  const width = useSharedValue(0)
  const muted = scheme === 'dark' ? Colors.zinc[200] : Colors.zinc[800]

  const onLayout = (e: LayoutChangeEvent) => {
    if (width.value === 0) {
      width.value = withTiming(e.nativeEvent.layout.width, { duration: EXPAND_DURATION })
    }
  }

  const expandStyle = useAnimatedStyle(() => ({
    width: width.value || undefined,
  }))

  return (
    <Animated.View
      onLayout={onLayout}
      style={expandStyle}
      className='flex-1 flex-row items-center overflow-hidden rounded-full bg-card pl-4'
    >
      <Animated.View entering={ICON_ENTER}>
        <Search01Icon size={17} color={muted} variant='stroke-rounded' strokeWidth={2} />
      </Animated.View>
      <Animated.View entering={INPUT_ENTER} className='flex-1'>
        <TextInput
          ref={ref}
          className='flex-1 px-3 text-zinc-800 dark:text-zinc-200'
          style={[SEMIBOLD, { fontSize: 14, height: 42 }]}
          placeholderTextColor={muted}
          cursorColor={Colors.accent}
          selectionColor={`${Colors.accent}55`}
          selectionHandleColor={Colors.accent}
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
      </Animated.View>
    </Animated.View>
  )
})
