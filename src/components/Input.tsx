import { Colors } from '@utils/colors'
import { SEMIBOLD } from '@utils/fonts'
import { cn } from '@utils/utils'
import React from 'react'
import { TextInput, type TextInputProps, View, useColorScheme } from 'react-native'
import { GAP_SETT_ICON_TEXT, MAIN_BUTTON_SIZE } from './values'

type InputProps = TextInputProps & {
  accent?: string
  Icon?: React.ReactNode
  Right?: React.ReactNode
}
export function Input({ Icon, Right, accent = Colors.accent, multiline, className, ...rest }: InputProps) {
  const scheme = useColorScheme()
  return (
    <View className='flex-row items-center justify-between px-6' style={{ gap: 10 }}>
      <View className='flex-1 flex-row items-center' style={{ gap: GAP_SETT_ICON_TEXT - 4 }}>
        {Icon}
        <TextInput
          className={cn('flex-1 text-zinc-800 dark:text-zinc-200', className)}
          style={[
            { marginBottom: 1, flex: 1, height: multiline ? undefined : 40, fontSize: MAIN_BUTTON_SIZE },
            SEMIBOLD,
          ]}
          placeholderTextColor={scheme === 'dark' ? Colors.zinc[500] : Colors.zinc[400]}
          cursorColor={accent}
          selectionColor={accent + '77'}
          selectionHandleColor={accent}
          placeholder='Default placeholder'
          textAlignVertical={multiline ? 'top' : 'center'}
          multiline={multiline}
          {...rest}
        />
      </View>
      {Right}
    </View>
  )
}
