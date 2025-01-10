import { Setting07SolidIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function Test({ navigation }: NavProp) {
  return (
    <>
      <SettWrapper navigation={navigation} title='Test Screen'>
        <Gap12>
          <SettText className='mt-3'>This is a test screen.</SettText>
          <SettGroup title='Sample title'>
            <SettOption
              title='A blank setting'
              Icon={<RoundedIcon Icon={Setting07SolidIcon} className='bg-slate-500' />}
              arrow
            />
            <SettOption
              title='Animations'
              Icon={<RoundedIcon Icon={Setting07SolidIcon} className='bg-slate-500' />}
              arrow
              onPressOut={() => navigation.navigate('Animations')}
            />
          </SettGroup>
          <SettText>Sample text</SettText>
        </Gap12>
        <SettText>End Text</SettText>
      </SettWrapper>
    </>
  )
}
