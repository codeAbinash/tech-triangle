import { Gap12 } from '@components/Gap'
import { SettText, SettWrapper } from '@components/Settings'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function ManageStorage({ navigation }: NavProp) {
  return (
    <SettWrapper navigation={navigation} title='Manage Storage'>
      <Gap12>
        <SettText className='mt-3'>
          Manage different types of storage in the app. This screen in under development.
        </SettText>
      </Gap12>
    </SettWrapper>
  )
}
