import { weatherStore } from '@/zustand/weatherStore'
import { CelsiusIcon, FahrenheitIcon, TemperatureIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import { Check, ic, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function TempUnit({ navigation }: NavProp) {
  const temperatureUnit = weatherStore((state) => state.temperatureUnit)
  const setTmpUnit = weatherStore((state) => state.setTemperatureUnit)
  return (
    <SettWrapper navigation={navigation} title='Temperature Unit'>
      <Gap12>
        <SettText className='mt-3'>Select the unit of temperature you want to use.</SettText>
        <SettGroup>
          <SettOption
            title='Celsius'
            Icon={<CelsiusIcon {...ic} />}
            Right={<Check checked={temperatureUnit === 'C'} />}
            onPress={() => setTmpUnit('C')}
          />
          <SettOption
            title='Fahrenheit'
            Icon={<FahrenheitIcon {...ic} />}
            Right={<Check checked={temperatureUnit === 'F'} />}
            onPress={() => setTmpUnit('F')}
          />
          <SettOption
            title='Kelvin'
            Icon={<TemperatureIcon {...ic} />}
            Right={<Check checked={temperatureUnit === 'K'} />}
            onPress={() => setTmpUnit('K')}
          />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
