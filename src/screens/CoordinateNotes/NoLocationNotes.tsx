import Animations from '@assets/animations/animations'
import { Lottie } from '@components/Lottie'
import { W } from '@utils/dimensions'
import { Regular } from '@utils/fonts'
import { View } from 'react-native'
import { LocationNote } from './locationNotesStore'

export default function CoordinateNotes({ notes }: { notes: LocationNote[] }) {
  if (notes.length > 0) return null
  return (
    <View>
      <Lottie source={Animations.location} size={W} />
      <Regular className='text mx-auto mt-4 w-2/3 text-center text-sm'>
        No notes found. Add notes by clicking the plus button below.
      </Regular>
    </View>
  )
}
