import { weatherStore } from '@/zustand/weatherStore'

import Check from '@components/Check'
import { Gap12 } from '@components/Gap'
import RoundIcon from '@components/RoundIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import CloudSlowWindIcon from '@hugeicons/CloudSlowWindIcon'
import SlowWindsIcon from '@hugeicons/SlowWindsIcon'
import SunCloudFastWind01Icon from '@hugeicons/SunCloudFastWind01Icon'
import WindPowerIcon from '@hugeicons/WindPowerIcon'
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
            Icon={<RoundIcon Icon={SlowWindsIcon} className='bg-green-500' />}
            onPress={() => setWindSpeedUnit('kph')}
          />
          <SettOption
            title='Miles per hour (mph)'
            Right={<Check checked={windSpeedUnit === 'mph'} />}
            Icon={<RoundIcon Icon={SlowWindsIcon} className='bg-blue-500' />}
            onPress={() => setWindSpeedUnit('mph')}
          />
          <SettOption
            title='Meter per second (m/s)'
            Right={<Check checked={windSpeedUnit === 'm/s'} />}
            Icon={<RoundIcon Icon={SunCloudFastWind01Icon} className='bg-rose-500' />}
            onPress={() => setWindSpeedUnit('m/s')}
          />
          <SettOption
            title='Knot (kn)'
            Right={<Check checked={windSpeedUnit === 'kn'} />}
            Icon={<RoundIcon Icon={CloudSlowWindIcon} className='bg-accent' />}
            onPress={() => setWindSpeedUnit('kn')}
          />
          <SettOption
            title='Beaufort Scale'
            Right={<Check checked={windSpeedUnit === 'bft'} />}
            Icon={<RoundIcon Icon={WindPowerIcon} className='bg-amber-500' />}
            onPress={() => setWindSpeedUnit('bft')}
          />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
