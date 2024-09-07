import { Gap12 } from '@components/Gap'
import { SettText, SettWrapper } from '@components/Settings'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function YourAge({ navigation }: NavProp) {
  return (
    <SettWrapper navigation={navigation} title='Your Age'>
      <Gap12>
        <SettText className='mt-3'>Here you can see your age in years, months, days etc.</SettText>
      </Gap12>
    </SettWrapper>
  )
}
