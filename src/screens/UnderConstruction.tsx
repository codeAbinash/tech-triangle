import Animations from '@assets/animations/animations'
import { Lottie } from '@components/Lottie'
import { Bold, Regular } from '@utils/fonts'
import { Dimensions, View } from 'react-native'

const { width } = Dimensions.get('window')

export default function UnderConstruction() {
  return (
    <View className='h-screen w-screen items-center justify-center bg-zinc-50 px-5 dark:bg-black'>
      <Lottie source={Animations['coming-soon']} style={{ width: width - 70, height: width - 70, marginBottom: 20 }} />
      <Bold className='text-center text-2xl text-gray-800 dark:text-gray-200'>Under construction</Bold>
      <Regular className='mt-1 w-4/5 text-center text-gray-500 dark:text-gray-400'>
        This screen is under construction. Please check back later.
      </Regular>
    </View>
  )
}
