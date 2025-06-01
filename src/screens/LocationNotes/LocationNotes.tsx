import { MapsLocation02SolidIcon, PlusSignSolidIcon } from '@assets/icons/icons'
import BackHeader from '@components/BackHeader'
import { Gap12 } from '@components/Gap'
import Press from '@components/Press'
import RoundedIcon from '@components/RoundedIcon'
import Search from '@components/Search'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import { useNavigation } from '@react-navigation/native'
import fabStyles from '@screens/Home/styles/fabStyles'
import { LocationNote, locationNotesStore } from '@screens/LocationNotes/locationNotesStore'
import { Medium } from '@utils/fonts'
import type { NavProp, StackNav } from '@utils/types'
import { delayedFadeAnimationSearch, exiting, layout } from '@utils/utils'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import NoLocationNotes from './NoLocationNotes'

export default function LocationNotes({ navigation }: NavProp) {
  const notes = locationNotesStore((state) => state.notes)
  const [search, setSearch] = useState<string>('')
  const [searchResults, setSearchResults] = useState<LocationNote[]>(notes)

  useEffect(() => {
    const timer = setTimeout(() => {
      const query = search.toLowerCase().trim()
      if (query.length === 0) {
        setSearchResults(notes)
        return
      }
      const results = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(query) ||
          (note.description && note.description.toLowerCase().includes(query)),
      )
      setSearchResults(results)
    }, 100)

    return () => clearTimeout(timer)
  }, [search, notes])

  return (
    <>
      <SettWrapper
        title='Location Notes'
        Header={
          <>
            <BackHeader title='Location Notes' navigation={navigation} />
            <View className='bg-white px-5 pb-4 dark:bg-zinc-950'>
              <Search
                placeholder='Search by title or description'
                value={search}
                onChangeText={(text) => setSearch(text)}
              />
            </View>
          </>
        }
      >
        <NoLocationNotes notes={searchResults} search={search} />
        <NotesList notes={searchResults} search={search} />
      </SettWrapper>
      <FabButton />
    </>
  )
}

function NotesList({ notes, search }: { notes: LocationNote[]; search?: string }) {
  const navigation = useNavigation<StackNav>()
  if (!notes || notes.length === 0) return null
  return (
    <Gap12>
      <SettText className='mt-3.5'>
        {notes.length === 0
          ? ''
          : `Found ${notes.length} note${notes.length > 1 ? 's' : ''}. Tap on a note to view details.`}
      </SettText>
      <Animated.View entering={FadeIn} exiting={FadeOut} layout={layout}>
        <SettGroup title='Notes'>
          {notes.map((item, i) => (
            <Animated.View
              key={item.location.timestamp}
              entering={search ? delayedFadeAnimationSearch(search, i) : undefined}
              exiting={exiting}
              layout={layout}
            >
              <SettOption
                title={item.title}
                Icon={<RoundedIcon Icon={MapsLocation02SolidIcon} />}
                onPress={() => navigation.navigate('LocationNote', { data: item })}
                numberOfLines={1}
                arrow
              >
                {item.description && (
                  <Medium
                    className='text-zinc-600 dark:text-zinc-400'
                    style={{ fontSize: 10.5, flexShrink: 1, flex: 0.5, flexGrow: 0 }}
                    numberOfLines={1}
                  >
                    {item.description}
                  </Medium>
                )}
              </SettOption>
            </Animated.View>
          ))}
        </SettGroup>
      </Animated.View>
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
