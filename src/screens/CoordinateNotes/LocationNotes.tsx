import { Location01Icon, PlusSignSolidIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import Press from '@components/Press'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import { useNavigation } from '@react-navigation/native'
import { coordinateNotesStore, LocationNote } from '@screens/CoordinateNotes/locationNotesStore'
import fabStyles from '@screens/Home/styles/fabStyles'
import { F, Medium } from '@utils/fonts'
import type { NavProp, StackNav } from '@utils/types'
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import NoNotes from './NoLocationNotes'

export default function LocationNotes({ navigation }: NavProp) {
  const notes = coordinateNotesStore((state) => state.notes)
  return (
    <>
      <SettWrapper title='Coordinate Notes'>
        <NoNotes notes={notes} />
        <NotesList notes={notes} />
      </SettWrapper>
      <FabButton />
    </>
  )
}

function NotesList({ notes }: { notes: LocationNote[] }) {
  const navigation = useNavigation<StackNav>()
  if (!notes || notes.length === 0) return null
  return (
    <Gap12>
      <SettText className='mt-3.5'>
        {notes.length === 0
          ? ''
          : `Found ${notes.length} note${notes.length > 1 ? 's' : ''}. Tap on a note to view details.`}
      </SettText>
      <SettGroup title='Notes'>
        {notes.map((item) => (
          <SettOption
            key={item.location.timestamp}
            title={item.title}
            Icon={<RoundedIcon Icon={Location01Icon} />}
            arrow
            onPress={() => navigation.navigate('LocationNote', { data: item })}
          >
            {item.description && (
              <Medium className='text-zinc-600 dark:text-zinc-400' style={F.F10_5} numberOfLines={1}>
                {item.description}
              </Medium>
            )}
          </SettOption>
        ))}
      </SettGroup>
    </Gap12>
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
        onPress={() => navigation.navigate('NewLocationNote')}
        activeOpacity={0.9}
        activeScale={0.95}
        className='items-center justify-center rounded-full bg-accent'
      >
        <PlusSignSolidIcon color={'white'} height={25} width={25} />
      </Press>
    </Animated.View>
  )
}
