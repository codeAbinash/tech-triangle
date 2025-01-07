import profileStore from '@/zustand/profileStore'
import { StarSolidIcon, UserSolidIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function AdminSettings({ navigation }: NavProp) {
  const user = profileStore((state) => state.user)

  if (!user?.isAdmin) return null

  return (
    <Gap12>
      <SettGroup title='Admin Settings' className='pb-3.5'>
        <SettOption
          title='All users'
          Icon={<RoundedIcon Icon={UserSolidIcon} className='bg-green-500' />}
          arrow
          onPress={() => navigation.navigate('AllUsers')}
        />
        <SettOption
          title='Edit Version'
          className=''
          Icon={<RoundedIcon Icon={StarSolidIcon} />}
          arrow
          onPress={() => navigation.navigate('EditVersion')}
        ></SettOption>
      </SettGroup>
    </Gap12>
  )
}
