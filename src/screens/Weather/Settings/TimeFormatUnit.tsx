import { weatherStore } from '@/zustand/weatherStore'
import { Clock01SolidIcon } from '@assets/icons/icons'
import Check from '@components/Check'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function TimeFormatUnit({ navigation }: NavProp) {
  const timeFormatUnit = weatherStore((state) => state.weatherTimeFormat)
  const setWeatherTimeFormat = weatherStore((state) => state.setWeatherTimeFormat)
  return (
    <SettWrapper navigation={navigation} title='Time Format Unit'>
      <Gap12>
        <SettText className='mt-3'>Choose between 12 hour and 24 hour time format</SettText>
        <SettGroup>
          <SettOption
            title='12 Hour'
            Right={<Check checked={timeFormatUnit === '12h'} />}
            onPress={() => setWeatherTimeFormat('12h')}
            Icon={<RoundedIcon Icon={Clock01SolidIcon} className='bg-blue-500' />}
          />
          <SettOption
            title='24 Hour'
            Right={<Check checked={timeFormatUnit === '24h'} />}
            onPress={() => setWeatherTimeFormat('24h')}
            Icon={<RoundedIcon Icon={Clock01SolidIcon} className='bg-rose-500' />}
          />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
