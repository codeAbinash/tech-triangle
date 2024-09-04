import { Gap12 } from '@components/Gap'
import { SettText, SettWrapper } from '@components/Settings'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function BackupAndRestore({ navigation }: NavProp) {
  return (
    <SettWrapper navigation={navigation} title='Backup and Restore'>
      <Gap12>
        <SettText className='mt-3'>In this section, you can backup and restore your data.</SettText>
        {/*<SettGroup title='Sample title'>
          <SettOption title='A blank setting' Icon={<Setting07Icon {...ic} />} arrow />
        </SettGroup>
        <SettText>Sample text</SettText> */}
      </Gap12>
      {/* <SettText>End Text</SettText> */}
    </SettWrapper>
  )
}
