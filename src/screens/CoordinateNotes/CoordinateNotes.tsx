import { coordinateNotesStore } from '@screens/CoordinateNotes/coordinateNotesStore'
import { PlusSignSolidIcon } from '@assets/icons/icons'
import Press from '@components/Press'
import SettWrapper from '@components/Settings/SettWrapper'
import { useNavigation } from '@react-navigation/native'
import fabStyles from '@screens/Home/styles/fabStyles'
import { Medium } from '@utils/fonts'
import type { NavProp, StackNav } from '@utils/types'
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import NoNotes from './NoCoordinateNotes'

export default function CoordinateNotes({ navigation }: NavProp) {
  const notes = coordinateNotesStore((state) => state.notes)
  return (
    <>
      <SettWrapper navigation={navigation} title='Coordinate Notes'>
        <NoNotes />
        <Medium>{JSON.stringify(notes, null, 2)}</Medium>
      </SettWrapper>
      <FabButton />
    </>
  )
}

export const FabButton = () => {
  const navigation = useNavigation<StackNav>()
  const bottom = useSafeAreaInsets().bottom

  return (
    <Animated.View
      entering={ZoomIn.duration(200)}
      exiting={ZoomOut.duration(200)}
      className='absolute right-5 z-10'
      style={{ bottom: bottom + 15 }}
    >
      <Press
        style={fabStyles.fabShadow}
        onPress={() => navigation.navigate('NewCoordinateNotes')}
        activeOpacity={0.9}
        activeScale={0.95}
        className='items-center justify-center rounded-full bg-accent'
      >
        <PlusSignSolidIcon color={'white'} height={25} width={25} />
      </Press>
    </Animated.View>
  )
}
