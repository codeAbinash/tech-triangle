import { Home01SolidIcon, InformationCircleSolidIcon, Location01Icon } from '@assets/icons/icons'
import Btn, { BtnTransparent } from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettWrapper from '@components/Settings/SettWrapper'
import { fetchLocation } from '@screens/LocationNotes/lib'
import { locationNotesStore } from '@screens/LocationNotes/locationNotesStore'
import { useQuery } from '@tanstack/react-query'
import { NavProp } from '@utils/types'
import { useCallback, useEffect, useState } from 'react'
import { BackHandler, View } from 'react-native'
import { GeoPosition } from 'react-native-geolocation-service'
import LocationDetails from './LocationDetails'

export default function NewLocationNote({ navigation }: NavProp) {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const updateNote = locationNotesStore((state) => state.updateNote)

  const { data, isFetching, refetch } = useQuery({
    queryFn: fetchLocation,
    queryKey: ['currentLocation'],
    // Disable caching for this query
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchInterval: false,
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

  function saveAndGoBack() {
    handleSave()
    navigation.goBack()
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress)
    return () => backHandler.remove()
  }, [onBackPress])

  useEffect(() => {
    const timer = setTimeout(handleSave, 500)
    return () => clearTimeout(timer)
  }, [handleSave])

  const isDisabled = !name || name.trim().length === 0 || !data

  return (
    <SettWrapper className='flex-1' title={name || 'New Location Note'} onBackPress={saveAndGoBack}>
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
            placeholder='Describe this location...'
            multiline
            numberOfLines={10}
            value={description}
            onChangeText={setDescription}
            Icon={<RoundedIcon Icon={InformationCircleSolidIcon} className='bg-slate-500' />}
          />
        </SettGroup>
        <SettGroup title='Tag'>
          <SettOption
            title=''
            placeholder='Add a tag'
            Icon={<RoundedIcon Icon={Home01SolidIcon} className='bg-rose-500' />}
            arrow
          />
        </SettGroup>
        <LocationDetails data={data} />
        <View className='gap-8 px-5'>
          <BtnTransparent
            title={isFetching ? 'Fetching...' : 'Refetch Location'}
            onPress={() => refetch()}
            disabled={isFetching}
          />
          <Btn title='Save This Location' onPress={saveAndGoBack} disabled={isDisabled} />
        </View>
      </Gap12>
    </SettWrapper>
  )
}
