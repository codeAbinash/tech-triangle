import {
  DashboardSpeed02Icon,
  EarthIcon,
  LatitudeIcon,
  LongitudeIcon,
  MapsLocation02SolidIcon,
  Sent02Icon,
  Timer02Icon,
} from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import { Txt } from '@components/Text'
import { getLatitude, getLongitude, layout } from '@utils/utils'
import { Linking, Share } from 'react-native'
import { GeoPosition } from 'react-native-geolocation-service'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { shareMessage } from './lib'

export default function LocationDetails({ data }: { data: GeoPosition | undefined | null }) {
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
          {/* <SettOption
            title='Speed'
            Icon={<RoundedIcon Icon={Rocket01Icon} className='bg-orange-500' />}
            Right={<Txt skeleton={speed === undefined}>{speed?.toFixed(0)} m/s</Txt>}
          /> */}
          <SettOption
            title='Timestamp'
            Icon={<RoundedIcon Icon={Timer02Icon} className='bg-accent' />}
            Right={<Txt skeleton={timestamp === undefined}>{new Date(timestamp || 0).toLocaleString()}</Txt>}
          />
        </SettGroup>
        {latitude && longitude && (
          <Animated.View layout={layout} entering={FadeIn} exiting={FadeOut}>
            <SettGroup title='Actions'>
              <SettOption
                title='View on Map'
                Icon={<RoundedIcon Icon={MapsLocation02SolidIcon} className='bg-green-500' />}
                onPress={() =>
                  Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`)
                }
                arrow
              />
              <SettOption
                title='Share Location'
                Icon={<RoundedIcon Icon={Sent02Icon} className='bg-blue-500' />}
                onPress={() =>
                  Share.share({
                    message: shareMessage(latitude || 0, longitude || 0, timestamp),
                  })
                }
                arrow
              />
            </SettGroup>
          </Animated.View>
        )}
      </Gap12>
    </>
  )
}
