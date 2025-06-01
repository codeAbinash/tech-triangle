import {
  DashboardSpeed02Icon,
  EarthIcon,
  LatitudeIcon,
  LongitudeIcon,
  Rocket01Icon,
  Timer02Icon,
} from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import { Txt } from '@components/Text'
import { getLatitude, getLongitude } from '@utils/utils'
import { GeoPosition } from 'react-native-geolocation-service'

export default function LocationDetails({ data }: { data: GeoPosition | undefined }) {
  const { coords: { latitude, longitude, accuracy, altitude, altitudeAccuracy, speed } = {}, timestamp } = data || {}

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
