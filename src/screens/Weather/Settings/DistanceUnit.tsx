import { weatherStore } from '@/zustand/weatherStore'
import { Road02SolidIcon, RulerSolidIcon } from '@assets/icons/icons'
import Check from '@components/Check'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
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
          <SettOption
            title='Meter'
            Right={<Check checked={distanceUnit === 'm'} />}
            onPress={() => setDistUnit('m')}
            Icon={<RoundedIcon Icon={RulerSolidIcon} className='bg-blue-500' />}
          />
          <SettOption
            title='Feet'
            Right={<Check checked={distanceUnit === 'ft'} />}
            onPress={() => setDistUnit('ft')}
            Icon={<RoundedIcon Icon={Road02SolidIcon} className='bg-rose-500' />}
          />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
