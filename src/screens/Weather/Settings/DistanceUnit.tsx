import { weatherStore } from '@/zustand/weatherStore'
import { Road02Icon, RulerIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import { Check, ic, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function DistanceUnit({ navigation }: NavProp) {
  const distanceUnit = weatherStore((state) => state.distanceUnit)
  const setDistUnit = weatherStore((state) => state.setDistanceUnit)
  return (
    <SettWrapper navigation={navigation} title='Distance Unit'>
      <Gap12>
        <SettText className='mt-3'>Select the unit of distance you want to use.</SettText>
        <SettGroup>
          <SettOption title='Meter' Right={<Check checked={distanceUnit === 'm'} />} onPress={() => setDistUnit('m')} Icon={<RulerIcon {...ic} />} />
          <SettOption
            title='Feet'
            Right={<Check checked={distanceUnit === 'ft'} />}
            onPress={() => setDistUnit('ft')}
            Icon={<Road02Icon {...ic} />}
          />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
