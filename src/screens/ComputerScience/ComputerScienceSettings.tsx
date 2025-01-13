import BackHeader from '@components/BackHeader'
import { Gap12, Gap20 } from '@components/Gap'
import { PaddingBottom } from '@components/SafePadding'
import SettText from '@components/Settings/SettText'
import type { NavProp } from '@utils/types'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function ComputerScienceSettings({ navigation }: NavProp) {
  return (
    <View className='bg flex-1'>
      <BackHeader title='Computer Science' navigation={navigation} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Gap20>
          <Gap12>
            <SettText className='pt-3'>
              Here are some settings related to Computer Science functionality in the app.
            </SettText>
          </Gap12>
        </Gap20>
        <PaddingBottom />
      </ScrollView>
    </View>
  )
}
