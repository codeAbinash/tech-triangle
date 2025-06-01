import {
  DashboardSpeed02Icon,
  EarthIcon,
  LatitudeIcon,
  LongitudeIcon,
  MapsLocation02SolidIcon,
  Rocket01Icon,
  Timer02Icon,
} from '@assets/icons/icons'
import Btn, { BtnTransparent } from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundedIcon from '@components/RoundedIcon'
import { PaddingBottom } from '@components/SafePadding'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import { Txt } from '@components/Text'
import { AppBar } from '@components/TopBar'
import { fetchLocation } from '@screens/CoordinateNotes/lib'
import { useQuery } from '@tanstack/react-query'
import { Bold } from '@utils/fonts'
import { NavProp } from '@utils/types'
import { getLatitude, getLongitude } from '@utils/utils'
import { useEffect } from 'react'
import { StatusBar, View } from 'react-native'
import { GeoPosition } from 'react-native-geolocation-service'
import { ScrollView } from 'react-native-gesture-handler'

export default function NewCoordinateNotes({navigation} : NavProp) {
  const { data, isFetching, refetch } = useQuery({
    queryFn: fetchLocation,
    queryKey: ['currentLocation'],
  })

  return (
    <View className='flex-1 bg-zinc-50 dark:bg-zinc-950'>
      <StatusBar barStyle='default' />
      <AppBar />
      <Bold className='px-5 pb-4 text-2xl dark:text-white'>Current Location</Bold>
      <ScrollView contentContainerClassName='justify-between flex-1'>
        <Gap12>
          <SettGroup title='Location Name'>
            <Input
              Icon={<RoundedIcon Icon={MapsLocation02SolidIcon} className='bg-blue-500' />}
              placeholder='Enter a name for this location'
            />
          </SettGroup>
          <SettGroup title='Description'>
            <Input
              placeholder='This is a input field with multiple lines. You can type as much as you want.'
              multiline
              numberOfLines={10}
            />
          </SettGroup>
          <LocationDetails data={data} />
          <BtnTransparent
            title={isFetching ? 'Fetching...' : 'Refetch Location'}
            onPress={() => refetch()}
            disabled={isFetching}
          />
        </Gap12>
        <View className='px-5 py-3'>
          <Btn title={'Add Location Note'} onPress={() => navigation.goBack()} />
          <PaddingBottom />
        </View>
      </ScrollView>
    </View>
  )
}

function LocationDetails({ data }: { data: GeoPosition | undefined }) {
  console.log(data?.coords.latitude)
  const { coords: { latitude, longitude, accuracy, altitude, altitudeAccuracy, speed } = {}, timestamp } = data || {}
  return (
    <>
      <Gap12>
        <SettGroup title='Location Details'>
          <SettOption
            title='Latitude'
            Icon={<RoundedIcon Icon={LongitudeIcon} className='bg-blue-500' />}
            Right={<Txt skeleton={latitude}>{getLatitude(latitude || 0)}</Txt>}
          />
          <SettOption
            title='Longitude'
            Icon={<RoundedIcon Icon={LatitudeIcon} className='bg-green-500' />}
            Right={<Txt skeleton={longitude}>{getLongitude(longitude || 0)}</Txt>}
          />
          <SettOption
            title='Accuracy'
            Icon={<RoundedIcon Icon={DashboardSpeed02Icon} className='bg-rose-500' />}
            Right={<Txt skeleton={accuracy}>{accuracy?.toFixed(0)} m</Txt>}
          />
          <SettOption
            title='Altitude'
            Icon={<RoundedIcon Icon={EarthIcon} className='bg-blue-500' />}
            Right={
              <Txt skeleton={altitude}>
                {altitude?.toFixed(0)} m ± {altitudeAccuracy?.toFixed(0)} m
              </Txt>
            }
          />
          <SettOption
            title='Speed'
            Icon={<RoundedIcon Icon={Rocket01Icon} className='bg-orange-500' />}
            Right={<Txt skeleton={speed}>{speed?.toFixed(0)} m/s</Txt>}
          />
          <SettOption
            title='Timestamp'
            Icon={<RoundedIcon Icon={Timer02Icon} className='bg-accent' />}
            Right={<Txt skeleton={timestamp}>{new Date(timestamp || 0).toLocaleString()}</Txt>}
          />
        </SettGroup>
      </Gap12>
    </>
  )
}
