import popupStore from '@/zustand/popupStore'
import { Home01SolidIcon, Location01Icon, MapsLocation02SolidIcon } from '@assets/icons/icons'
import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import { RouteProp } from '@react-navigation/native'
import { coordinateNotesStore, type LocationNote } from '@screens/CoordinateNotes/locationNotesStore'
import type { StackNav } from '@utils/types'
import { useCallback, useEffect, useState } from 'react'
import { BackHandler, View } from 'react-native'
import LocationDetails from './LocationDetails'

type ParamList = {
  LocationNote: LocationNoteParamList
}

export type LocationNoteParamList = {
  data: LocationNote
}

type LocationNoteProps = {
  route: RouteProp<ParamList, 'LocationNote'>
  navigation: StackNav
}

export default function LocationNote({ navigation, route }: LocationNoteProps) {
  const alert = popupStore((store) => store.alert)
  const data = route.params.data
  const [name, setName] = useState<string>(data.title || '')
  const [description, setDescription] = useState<string>(data.description || '')
  const updateNote = coordinateNotesStore((state) => state.updateNote)
  const deleteNote = coordinateNotesStore((state) => state.deleteNote)

  const handleSave = useCallback(() => {
    if (!name || name.trim().length === 0 || !data) return
    updateNote({
      title: name.trim(),
      description: description.trim(),
      location: data.location,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.location, description, name])

  const handleRemove = useCallback(() => {
    alert('Delete this note?', 'Are you sure you want to delete this note? This action cannot be undone.', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        onPress: () => {
          deleteNote(data.location.timestamp)
          navigation.goBack()
        },
      },
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onBackPress = useCallback(() => {
    handleSave()
    return false
  }, [handleSave])

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress)
    return () => backHandler.remove()
  }, [onBackPress])

  useEffect(() => {
    const timer = setTimeout(handleSave, 500)
    return () => clearTimeout(timer)
  }, [handleSave])

  return (
    <>
      <SettWrapper title={name || 'Location Note'}>
        <Gap12 className='mt-3'>
          <SettGroup title='Location Name'>
            <Input
              Icon={<RoundedIcon Icon={Location01Icon} />}
              placeholder='Enter a name for this location'
              value={name}
              onChangeText={setName}
            />
          </SettGroup>
          <SettGroup title='Description'>
            <Input
              placeholder='This is a input field with multiple lines. You can type as much as you want.'
              multiline
              numberOfLines={10}
              value={description}
              onChangeText={setDescription}
              Icon={<RoundedIcon Icon={MapsLocation02SolidIcon} className='bg-slate-500' />}
            />
          </SettGroup>
          <SettGroup title='Tag'>
            <SettOption
              title=''
              placeholder='Add a tag'
              Icon={<RoundedIcon Icon={Home01SolidIcon} className='bg-rose-500' />}
              onPress={() => navigation.navigate('LocationTags')}
              arrow
            />
          </SettGroup>
          <LocationDetails data={data.location} />
          <SettText>
            Deleting this note will remove it from the list of location notes.
          </SettText>
          <View className='mt-5 px-5'>
            <Btn title={'Delete Note'} className='bg-red-500' onPress={handleRemove} />
          </View>
        </Gap12>
      </SettWrapper>
    </>
  )
}
