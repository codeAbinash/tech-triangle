import { Colors } from '@utils/colors'
import { PoppinsMedium } from '@utils/fonts'
import React from 'react'
import { TextInput, type TextInputProps, useColorScheme, View } from 'react-native'

type InputProps = TextInputProps & {
  accent?: string
  Icon?: React.ReactNode
  Right?: React.ReactNode
}
export function Input({ Icon, Right, accent = Colors.accent, multiline, style, editable, ...rest }: InputProps) {
  const scheme = useColorScheme()
  return (
    <View className='flex-row items-center justify-between px-7' style={{ gap: 10 }}>
      <View className='flex-1 flex-row items-center' style={{ gap: 23 }}>
        {Icon}
        <TextInput
          className='flex-1 p-2.5 px-0 text-zinc-800 dark:text-zinc-200'
          style={[{ fontSize: 15, paddingVertical: 0, flex: 1, opacity: editable ? 1 : 0.8 }, PoppinsMedium, style]}
          placeholderTextColor={scheme === 'dark' ? Colors.zinc[500] : Colors.zinc[400]}
          cursorColor={accent}
          selectionColor={accent + '55'}
          selectionHandleColor={accent}
          placeholder='Default placeholder'
          editable={editable}
          textAlignVertical={multiline ? 'top' : 'center'}
          multiline={multiline}
          {...rest}
        />
      </View>
      {Right}
    </View>
  )
}
