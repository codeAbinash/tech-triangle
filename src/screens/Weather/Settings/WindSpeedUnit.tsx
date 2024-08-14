import { weatherStore } from '@/zustand/weatherStore'
import { CloudSlowWindIcon, FastWindIcon, SlowWindsIcon, SunCloudFastWind01Icon, WindPowerIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import { Check, ic, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function WindSpeedUnit({ navigation }: NavProp) {
  const windSpeedUnit = weatherStore((state) => state.windSpeedUnit)
  const setWindSpeedUnit = weatherStore((state) => state.setWindSpeedUnit)
  return (
    <SettWrapper navigation={navigation} title='Wind Speed Unit'>
      <Gap12>
        <SettText className='mt-3'>Select the unit of wind speed you want to use.</SettText>
        <SettGroup>
          <SettOption
            title='Kilometer per hour (kph)'
            Right={<Check checked={windSpeedUnit === 'kph'} />}
            Icon={<FastWindIcon {...ic} />}
            onPress={() => setWindSpeedUnit('kph')}
          />
          <SettOption
            title='Miles per hour (mph)'
            Right={<Check checked={windSpeedUnit === 'mph'} />}
            Icon={<SlowWindsIcon {...ic} />}
            onPress={() => setWindSpeedUnit('mph')}
          />
          <SettOption
            title='Meter per second (m/s)'
            Right={<Check checked={windSpeedUnit === 'm/s'} />}
            Icon={<SunCloudFastWind01Icon {...ic} />}
            onPress={() => setWindSpeedUnit('m/s')}
          />
          <SettOption
            title='Knot (kn)'
            Right={<Check checked={windSpeedUnit === 'kn'} />}
            Icon={<CloudSlowWindIcon {...ic} />}
            onPress={() => setWindSpeedUnit('kn')}
          />
          <SettOption
            title='Beaufort Scale'
            Right={<Check checked={windSpeedUnit === 'bft'} />}
            Icon={<WindPowerIcon {...ic} />}
            onPress={() => setWindSpeedUnit('bft')}
          />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
