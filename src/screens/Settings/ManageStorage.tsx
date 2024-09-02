import { Setting07Icon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import { ic, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function ManageStorage({ navigation }: NavProp) {
  return (
    <SettWrapper navigation={navigation} title='Manage Storage'>
      <Gap12>
        <SettText className='mt-3'>
          Manage different types of storage in the app. This screen in under development.
        </SettText>
        {/* <SettGroup title='Sample title'>
          <SettOption title='A blank setting' Icon={<Setting07Icon {...ic} />} arrow />
        </SettGroup>
        <SettText>Sample text</SettText> */}
      </Gap12>

      {/* <SettText>End Text</SettText> */}
    </SettWrapper>
  )
}
