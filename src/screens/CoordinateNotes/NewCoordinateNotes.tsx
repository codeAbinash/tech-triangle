import { Home01SolidIcon, Location01Icon, MapsLocation02SolidIcon } from '@assets/icons/icons'
import { BtnTransparent } from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettWrapper from '@components/Settings/SettWrapper'
import { coordinateNotesStore } from '@screens/CoordinateNotes/coordinateNotesStore'
import { fetchLocation } from '@screens/CoordinateNotes/lib'
import { useQuery } from '@tanstack/react-query'
import { NavProp } from '@utils/types'
import { useCallback, useEffect, useState } from 'react'
import { BackHandler, View } from 'react-native'
import { GeoPosition } from 'react-native-geolocation-service'
import LocationDetails from './LocationDetails'

export default function NewCoordinateNotes({ navigation }: NavProp) {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const updateNote = coordinateNotesStore((state) => state.updateNote)

  const { data, isFetching, refetch } = useQuery({
    queryFn: fetchLocation,
    queryKey: ['currentLocation'],
  })

  const handleSave = useCallback(() => {
    if (!name || name.trim().length === 0 || !data) return
    updateNote({
      title: name.trim(),
      description: description.trim(),
      location: data as GeoPosition,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, description, name])

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
    <SettWrapper className='flex-1' title={name || 'New Location Note'}>
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
        <LocationDetails data={data} />
        <View className='px-5'>
          <BtnTransparent
            title={isFetching ? 'Fetching...' : 'Refetch Location'}
            onPress={() => refetch()}
            disabled={isFetching}
          />
        </View>
      </Gap12>
    </SettWrapper>
  )
}
