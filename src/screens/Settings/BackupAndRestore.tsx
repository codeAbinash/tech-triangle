import { Gap12 } from '@components/Gap'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function BackupAndRestore({ navigation }: NavProp) {
  return (
    <SettWrapper navigation={navigation} title='Backup and Restore'>
      <Gap12>
        <SettText className='mt-3'>In this section, you can backup and restore your data.</SettText>
      </Gap12>
    </SettWrapper>
  )
}
