import { Gap12 } from '@components/Gap'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import { Colors } from '@utils/colors'
import type { NavProp } from '@utils/types'
import { View } from 'react-native'

const colors = [
  Colors.red[500],
  Colors.purple[500],
  Colors.lime[500],
  // Colors.pink[500],
  Colors.yellow[500],
  Colors.blue[500],
  Colors.orange[500],
  Colors.rose[500],
  Colors.amber[500],
  Colors.indigo[500],
  Colors.green[500],
  // Colors.teal[500],
  Colors.cyan[500],
]

export default function ManageStorage({ navigation }: NavProp) {
  return (
    <SettWrapper navigation={navigation} title='Manage Storage'>
      <Gap12>
        <SettText className='mt-3'>
          Manage different types of storage in the app. This screen is under development.
        </SettText>
      </Gap12>
      <View className='px-5'>
        <View className='w-full flex-row'>
          <View className='flex-0 overflow-hidden rounded-2xl'>
            {colors.map((color, index) => (
              <View key={index} style={{ backgroundColor: color, height: 50, width: 100 }} />
            ))}
          </View>
        </View>
      </View>
    </SettWrapper>
  )
}
