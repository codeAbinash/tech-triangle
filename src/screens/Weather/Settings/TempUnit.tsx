import { weatherStore } from '@/zustand/weatherStore'
import Check from '@components/Check'
import { Gap12 } from '@components/Gap'
import RoundIcon from '@components/RoundIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import CelsiusIcon from '@hugeicons/CelsiusIcon'
import FahrenheitIcon from '@hugeicons/FahrenheitIcon'
import TemperatureIcon from '@hugeicons/TemperatureIcon'
import type { NavProp } from '@utils/types'

export default function TempUnit({ navigation }: NavProp) {
  const temperatureUnit = weatherStore((state) => state.temperatureUnit)
  const setTmpUnit = weatherStore((state) => state.setTemperatureUnit)
  return (
    <SettWrapper title='Temperature Unit'>
      <Gap12>
        <SettText className='mt-3'>Select the unit of temperature you want to use.</SettText>
        <SettGroup>
          <SettOption
            title='Celsius'
            Icon={<RoundIcon Icon={CelsiusIcon} className='bg-blue-500' />}
            Right={<Check checked={temperatureUnit === 'C'} />}
            onPress={() => setTmpUnit('C')}
          />
          <SettOption
            title='Fahrenheit'
            Icon={<RoundIcon Icon={FahrenheitIcon} className='bg-green-500' />}
            Right={<Check checked={temperatureUnit === 'F'} />}
            onPress={() => setTmpUnit('F')}
          />
          <SettOption
            title='Kelvin'
            Icon={<RoundIcon Icon={TemperatureIcon} className='bg-rose-500' />}
            Right={<Check checked={temperatureUnit === 'K'} />}
            onPress={() => setTmpUnit('K')}
          />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
