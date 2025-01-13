import { PlusSignIcon, Setting07Icon } from '@assets/icons/icons'
import { F, Medium } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'

export default function Header({
  navigation,
  color,
  isPending,
}: {
  navigation: StackNav
  color: { color: string }
  isPending: boolean
}) {
  return (
    <View className='flex-row items-center justify-between'>
      <TouchableOpacity
        className='py-3 pr-3'
        onPress={() => navigation.navigate('WeatherSearchCity', { shouldGoBack: true })}
      >
        <PlusSignIcon width={25} height={25} color={color.color} />
      </TouchableOpacity>
      <View>
        {isPending && (
          <View className='flex-row items-center justify-between gap-2'>
            <ActivityIndicator size={13} color={color.color} />
            <Medium style={[color, F.F9_5]}>Updating...</Medium>
          </View>
        )}
      </View>
      <TouchableOpacity className='py-3 pl-3' onPress={() => navigation.navigate('WeatherSettings')}>
        <Setting07Icon width={24} height={24} color={color.color} />
      </TouchableOpacity>
    </View>
  )
}
