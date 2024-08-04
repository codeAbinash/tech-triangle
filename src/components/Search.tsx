import SearchIcon from '@icons/search-01-stroke-rounded.svg'
import { Colors } from '@utils/colors'
import { PoppinsMedium } from '@utils/fonts'
import React from 'react'
import { TextInput, type TextInputProps, useColorScheme, View } from 'react-native'

type SearchProps = TextInputProps

export default function Search({ ...all }: SearchProps) {
  const scheme = useColorScheme()
  return (
    <View className='w-full flex-row items-center justify-center overflow-hidden bg-zinc-100 pl-3.5 dark:bg-zinc-900' style={{ borderRadius: 14 }}>
      <SearchIcon width={17} height={17} color={scheme === 'dark' ? Colors.zinc[500] : Colors.zinc[400]} />
      <TextInput
        className='flex-1 p-2 px-3 text-zinc-800 dark:text-zinc-200'
        style={[PoppinsMedium, { fontSize: 15.5 }]}
        placeholderTextColor={scheme === 'dark' ? Colors.zinc[500] : Colors.zinc[400]}
        cursorColor={Colors.accent}
        selectionColor={Colors.accent + '55'}
        selectionHandleColor={Colors.accent}
        {...all}
      />
    </View>
  )
}
