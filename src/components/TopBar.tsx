import { View } from 'react-native'

export const Bar = () => (
  <View className='mx-auto h-1.5 w-28 justify-between rounded-full bg-zinc-200 dark:bg-zinc-800' />
)

export const AppBar = () => (
  <View className='pb-3.5 pt-4'>
    <Bar />
  </View>
)
