import Animations from '@assets/animations/animations'
import { Lottie } from '@components/Lottie'
import { W } from '@utils/dimensions'
import { Regular } from '@utils/fonts'
import { layout } from '@utils/utils'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { LocationNote } from './locationNotesStore'

export default function NoLocationNotes({ notes, search }: { notes: LocationNote[]; search: string }) {
  if (notes.length > 0) return null

  const searchNotFound = notes.length === 0 && search.length > 0

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} layout={layout}>
      <Lottie source={Animations.location} size={searchNotFound ? W * 0.85 : W} />
      <Regular className='text mx-auto mt-4 w-2/3 text-center text-sm'>
        {searchNotFound
          ? `No matching notes found for "${search}". Try a different search term`
          : 'No notes found. Add notes by clicking the plus button below.'}
      </Regular>
    </Animated.View>
  )
}
