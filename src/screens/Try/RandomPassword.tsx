import { Gap12 } from '@components/Gap'
import { SettText, SettWrapper } from '@components/Settings'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function RandomPassword({ navigation }: NavProp) {
  return (
    <SettWrapper navigation={navigation} title='Random Password'>
      <Gap12>
        <SettText className='mt-3'>Here you will set some options to generate a random password</SettText>
      </Gap12>
    </SettWrapper>
  )
}
