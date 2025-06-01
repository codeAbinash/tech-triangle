import {
  DashboardSpeed02Icon,
  EarthIcon,
  Home01SolidIcon,
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
import SettWrapper from '@components/Settings/SettWrapper'
import { Txt } from '@components/Text'
import { fetchLocation } from '@screens/CoordinateNotes/lib'
import { useQuery } from '@tanstack/react-query'
import { NavProp } from '@utils/types'
import { getLatitude, getLongitude } from '@utils/utils'
import { View } from 'react-native'
import { GeoPosition } from 'react-native-geolocation-service'

export default function NewCoordinateNotes({ navigation }: NavProp) {
  const { data, isFetching, refetch } = useQuery({
    queryFn: fetchLocation,
    queryKey: ['currentLocation'],
  })

  return (
    <SettWrapper
      className='flex-1'
      // Header={
      //   <BackHeader
      //     title={'New Location Note'}
      //     navigation={navigation}
      //     Right={
      //       <Press>
      //         <SemiBold className='text-sm text-accent'>Save</SemiBold>
      //       </Press>
      //     }
      //   />
      // }
      title={'New Location Note'}
    >
      <Gap12 className='mt-3'>
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
        <SettGroup title='Tag'>
          <SettOption
            title=''
            placeholder='Add a tag'
            Icon={<RoundedIcon Icon={Home01SolidIcon} className='bg-blue-500' />}
            onPress={() => navigation.navigate('Tags')}
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
          <Btn title={'Save Location Note'} onPress={() => navigation.goBack()} />
          <PaddingBottom />
        </View>
      </Gap12>
    </SettWrapper>
  )
}

function LocationDetails({ data }: { data: GeoPosition | undefined }) {
  console.log(data?.coords.latitude)
  const { coords: { latitude, longitude, accuracy, altitude, altitudeAccuracy, speed } = {}, timestamp } = data || {}

  console.log(latitude, longitude, accuracy, altitude, altitudeAccuracy, speed, timestamp)

  return (
    <>
      <Gap12>
        <SettGroup title='Location Details'>
          <SettOption
            title='Latitude'
            Icon={<RoundedIcon Icon={LongitudeIcon} className='bg-blue-500' />}
            Right={<Txt skeleton={latitude === undefined}>{getLatitude(latitude || 0)}</Txt>}
          />
          <SettOption
            title='Longitude'
            Icon={<RoundedIcon Icon={LatitudeIcon} className='bg-green-500' />}
            Right={<Txt skeleton={longitude === undefined}>{getLongitude(longitude || 0)}</Txt>}
          />
          <SettOption
            title='Accuracy'
            Icon={<RoundedIcon Icon={DashboardSpeed02Icon} className='bg-rose-500' />}
            Right={<Txt skeleton={accuracy === undefined}>{accuracy?.toFixed(0)} m</Txt>}
          />
          <SettOption
            title='Altitude'
            Icon={<RoundedIcon Icon={EarthIcon} className='bg-blue-500' />}
            Right={
              <Txt skeleton={altitude === undefined}>
                {altitude?.toFixed(0)} m ± {altitudeAccuracy?.toFixed(0)} m
              </Txt>
            }
          />
          <SettOption
            title='Speed'
            Icon={<RoundedIcon Icon={Rocket01Icon} className='bg-orange-500' />}
            Right={<Txt skeleton={speed === undefined}>{speed?.toFixed(0)} m/s</Txt>}
          />
          <SettOption
            title='Timestamp'
            Icon={<RoundedIcon Icon={Timer02Icon} className='bg-accent' />}
            Right={<Txt skeleton={timestamp === undefined}>{new Date(timestamp || 0).toLocaleString()}</Txt>}
          />
        </SettGroup>
      </Gap12>
    </>
  )
}
