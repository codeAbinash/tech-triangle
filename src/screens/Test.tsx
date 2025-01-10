import { Setting07SolidIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import type { NavProp } from '@utils/types'
import React, { useEffect } from 'react'

import { open } from '@op-engineering/op-sqlite'
import { drizzle } from 'drizzle-orm/op-sqlite'

const opsqlite = open({
  name: 'myDB',
})
const db = drizzle(opsqlite)

export default function Test({ navigation }: NavProp) {
  useEffect(() => {
    console.log('db', db)
  }, [db])

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
