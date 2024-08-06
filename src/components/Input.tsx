import { Colors } from '@utils/colors'
import { PoppinsMedium } from '@utils/fonts'
import React from 'react'
import { TextInput, type TextInputProps, useColorScheme, View } from 'react-native'

type InputProps = TextInputProps & {
  color?: string
  Icon?: React.ReactNode
  Right?: React.ReactNode
}
export function Input({ Icon, Right, color = Colors.accent, ...rest }: InputProps) {
  const scheme = useColorScheme()
  return (
    <View className='flex-row items-center justify-between px-7' style={{ gap: 10 }}>
      <View className='flex-1 flex-row items-center' style={{ gap: 23 }}>
        {Icon}
        <TextInput
          className='flex-1 p-2.5 px-0 text-zinc-800 dark:text-zinc-200'
          style={[{ fontSize: 15, paddingVertical: 0, flex: 1 }, PoppinsMedium]}
          placeholderTextColor={scheme === 'dark' ? Colors.zinc[500] : Colors.zinc[400]}
          cursorColor={color}
          selectionColor={color + '55'}
          selectionHandleColor={color}
          placeholder='Default placeholder'
          {...rest}
        />
      </View>
      {Right}
    </View>
  )
}
