import { PaddingBottom } from '@components/SafePadding'
import { AppBar } from '@components/TopBar'
import { Bold, Medium } from '@utils/fonts'
import { StatusBar, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Tags() {
  return (
    <View className='flex-1 bg-zinc-50 dark:bg-zinc-950'>
      <StatusBar barStyle='default' />
      <AppBar />
      <ScrollView contentContainerClassName='p-5 flex-1 justify-center items-center'>
        <Bold className='text-3xl text text-center'>Coming Soon!</Bold>
        <Medium className='text opacity-80 text-base mt-3 text-center'>This feature is currently under development. Stay tuned for updates!</Medium>
        <PaddingBottom />
      </ScrollView>
    </View>
  )
}
