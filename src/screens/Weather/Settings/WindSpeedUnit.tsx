import { weatherStore } from '@/zustand/weatherStore'
import {
  CloudSlowWindSolidIcon,
  SlowWindsIcon,
  SlowWindsSolidIcon,
  SunCloudFastWind01SolidIcon,
  WindPowerSolidIcon,
} from '@assets/icons/icons'
import Check from '@components/Check'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import type { NavProp } from '@utils/types'

export default function WindSpeedUnit({ navigation }: NavProp) {
  const windSpeedUnit = weatherStore((state) => state.windSpeedUnit)
  const setWindSpeedUnit = weatherStore((state) => state.setWindSpeedUnit)
  return (
    <SettWrapper title='Wind Speed Unit'>
      <Gap12>
        <SettText className='mt-3'>Select the unit of wind speed you want to use.</SettText>
        <SettGroup>
          <SettOption
            title='Kilometer per hour (kph)'
            Right={<Check checked={windSpeedUnit === 'kph'} />}
            Icon={<RoundedIcon Icon={SlowWindsSolidIcon} className='bg-green-500' />}
            onPress={() => setWindSpeedUnit('kph')}
          />
          <SettOption
            title='Miles per hour (mph)'
            Right={<Check checked={windSpeedUnit === 'mph'} />}
            Icon={<RoundedIcon Icon={SlowWindsIcon} className='bg-blue-500' />}
            onPress={() => setWindSpeedUnit('mph')}
          />
          <SettOption
            title='Meter per second (m/s)'
            Right={<Check checked={windSpeedUnit === 'm/s'} />}
            Icon={<RoundedIcon Icon={SunCloudFastWind01SolidIcon} className='bg-rose-500' />}
            onPress={() => setWindSpeedUnit('m/s')}
          />
          <SettOption
            title='Knot (kn)'
            Right={<Check checked={windSpeedUnit === 'kn'} />}
            Icon={<RoundedIcon Icon={CloudSlowWindSolidIcon} className='bg-accent' />}
            onPress={() => setWindSpeedUnit('kn')}
          />
          <SettOption
            title='Beaufort Scale'
            Right={<Check checked={windSpeedUnit === 'bft'} />}
            Icon={<RoundedIcon Icon={WindPowerSolidIcon} className='bg-amber-500' />}
            onPress={() => setWindSpeedUnit('bft')}
          />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
