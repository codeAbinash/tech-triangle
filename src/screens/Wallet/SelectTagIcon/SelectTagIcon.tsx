import Search from '@components/Search'
import StackHeader from '@components/StackHeader'
import { NavProp } from '@utils/types'
import { StatusBar, View } from 'react-native'

export default function SelectTagIcon({ navigation }: NavProp) {
  return (
    <View>
      <StatusBar barStyle='default' />

      <View className='p-5 pb-2 pt-4' style={{ gap: 12 }}>
        <StackHeader title='Search Icon' navigation={navigation} left='Cancel' right='Done' />
        <Search
          placeholder='Search Icons'
          keyboardType='web-search'
          // value={query}
          // onChangeText={setQuery}
          autoFocus
          // onEndEditing={() => mutate()}
        />
      </View>
    </View>
  )
}
