import { Colors } from '@utils/colors'
import { Medium, MEDIUM } from '@utils/fonts'
import { StyleSheet, type TextInputProps } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export function Box({ text }: { text: string }) {
  return (
    <Medium
      className='rounded-lg bg-white py-3.5 text-center text-sm text-black dark:bg-zinc-900 dark:text-white'
      style={styles.box}
    >
      {text}
    </Medium>
  )
}

export function BoxInput({ value, onChangeText, placeholder, ...rest }: TextInputProps) {
  return (
    <TextInput
      cursorColor={Colors.accent}
      value={value}
      placeholderTextColor={Colors.zinc[400]}
      className='rounded-lg bg-white px-2 py-3 text-center text-sm dark:bg-zinc-900 dark:text-white'
      style={styles.box}
      onChangeText={onChangeText}
      placeholder={placeholder}
      selectionColor={Colors.accent + '55'}
      autoComplete='off'
      numberOfLines={1}
      {...rest}
    />
  )
}

export const styles = StyleSheet.create({
  row: { marginTop: `${(100 - 32 * 3) / 3}%` },
  box: { width: '32.3%', ...MEDIUM },
})
