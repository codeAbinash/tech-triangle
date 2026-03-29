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
        <SettText>Select the unit of wind speed you want to use.</SettText>
        <SettGroup>
          <SettOption
            title='Kilometer per hour (kph)'
            Right={<Check checked={windSpeedUnit === 'kph'} />}
            Icon={<RoundIcon Icon={SlowWindsIcon} gradient='green' />}
            onPress={() => setWindSpeedUnit('kph')}
          />
          <SettOption
            title='Miles per hour (mph)'
            Right={<Check checked={windSpeedUnit === 'mph'} />}
            Icon={<RoundIcon Icon={SlowWindsIcon} gradient='blue' />}
            onPress={() => setWindSpeedUnit('mph')}
          />
          <SettOption
            title='Meter per second (m/s)'
            Right={<Check checked={windSpeedUnit === 'm/s'} />}
            Icon={<RoundIcon Icon={SunCloudFastWind01Icon} gradient='rose' />}
            onPress={() => setWindSpeedUnit('m/s')}
          />
          <SettOption
            title='Knot (kn)'
            Right={<Check checked={windSpeedUnit === 'kn'} />}
            Icon={<RoundIcon Icon={CloudSlowWindIcon} gradient='accent' />}
            onPress={() => setWindSpeedUnit('kn')}
          />
          <SettOption
            title='Beaufort Scale'
            Right={<Check checked={windSpeedUnit === 'bft'} />}
            Icon={<RoundIcon Icon={WindPowerIcon} gradient='amber' />}
            onPress={() => setWindSpeedUnit('bft')}
          />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
