import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import { Medium } from '@utils/fonts'
import { ScrollView, View } from 'react-native'

export default function WalletTab() {
  return (
    <View className='bg flex-1'>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <PaddingTop />
        <Medium>Weather Blank</Medium>
        <PaddingBottom />
      </ScrollView>
    </View>
  )
}
