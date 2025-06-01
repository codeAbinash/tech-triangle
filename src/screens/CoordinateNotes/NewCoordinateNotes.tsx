import { Home01SolidIcon, Location01Icon, MapsLocation02SolidIcon } from '@assets/icons/icons'
import Btn, { BtnTransparent } from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundedIcon from '@components/RoundedIcon'
import { PaddingBottom } from '@components/SafePadding'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettWrapper from '@components/Settings/SettWrapper'
import { coordinateNotesStore } from '@screens/CoordinateNotes/coordinateNotesStore'
import { fetchLocation } from '@screens/CoordinateNotes/lib'
import { useQuery } from '@tanstack/react-query'
import { NavProp } from '@utils/types'
import { useState } from 'react'
import { View } from 'react-native'
import { GeoPosition } from 'react-native-geolocation-service'
import LocationDetails from './LocationDetails'

export default function NewCoordinateNotes({ navigation }: NavProp) {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const newNote = coordinateNotesStore((state) => state.newNote)

  const { data, isFetching, refetch, isPending } = useQuery({
    queryFn: fetchLocation,
    queryKey: ['currentLocation'],
  })

  const isDisabled = name?.trim().length === 0 || isFetching || isPending

  function handleSave() {
    console.log('Save Location Note')
    console.log(name, description, data)
    newNote({
      title: name,
      description,
      location: data as GeoPosition,
    })
    navigation.goBack()
  }

  return (
    <SettWrapper
      className='flex-1'
      title={'New Location Note'}
    >
      <Gap12 className='mt-3'>
        <SettGroup title='Location Name'>
          <Input
            Icon={<RoundedIcon Icon={Location01Icon} className='bg-blue-500' />}
            placeholder='Enter a name for this location'
            value={name}
            onChangeText={setName}
            autoFocus
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
        <LocationDetails data={data} />
        <BtnTransparent
          title={isFetching ? 'Fetching...' : 'Refetch Location'}
          onPress={() => refetch()}
          disabled={isFetching}
        />
        <View className='px-5'>
          <Btn title={'Save Location Note'} onPress={handleSave} disabled={isDisabled} />
          <PaddingBottom />
        </View>
      </Gap12>
    </SettWrapper>
  )
}
