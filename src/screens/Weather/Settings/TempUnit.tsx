import { weatherStore } from '@/zustand/weatherStore'
import { CelsiusSolidIcon, FahrenheitSolidIcon, TemperatureSolidIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import { Check, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
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
            Icon={<RoundedIcon Icon={CelsiusSolidIcon} className='bg-blue-500' />}
            Right={<Check checked={temperatureUnit === 'C'} />}
            onPress={() => setTmpUnit('C')}
          />
          <SettOption
            title='Fahrenheit'
            Icon={<RoundedIcon Icon={FahrenheitSolidIcon} className='bg-green-500' />}
            Right={<Check checked={temperatureUnit === 'F'} />}
            onPress={() => setTmpUnit('F')}
          />
          <SettOption
            title='Kelvin'
            Icon={<RoundedIcon Icon={TemperatureSolidIcon} className='bg-rose-500' />}
            Right={<Check checked={temperatureUnit === 'K'} />}
            onPress={() => setTmpUnit('K')}
          />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
