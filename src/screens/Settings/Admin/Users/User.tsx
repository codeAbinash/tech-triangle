import {
  AngrySolidIcon,
  Calendar03SolidIcon,
  Mail02SolidIcon,
  NewReleasesSolidIcon,
  SmileSolidIcon,
  StarSolidIcon,
  StarsSolidIcon,
  UserSolidIcon,
} from '@assets/icons/icons'
import { Gap } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import { SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import type { RouteProp } from '@react-navigation/native'
import { getDate } from '@screens/Settings/Devices/utils'
import type { client } from '@utils/client'
import type { StackNav } from '@utils/types'
import React from 'react'

export type UserT = Awaited<ReturnType<Awaited<ReturnType<typeof client.api.admin.users.all.$post>>['json']>>['data'][0]

type ParamList = {
  User: UserParamList
}

export type UserParamList = {
  user: UserT
}

export default function User({ navigation, route }: { navigation: StackNav; route: RouteProp<ParamList, 'User'> }) {
  const user = route.params.user
  const { name, username, email, isAdmin, otp, lastOtpSent, isVerified, isBanned } = user

  return (
    <SettWrapper navigation={navigation} title={username}>
      <Gap gap={10}>
        <SettText className='mt-3'>You can see all details of the user here.</SettText>
        <SettGroup title='Full Name'>
          <SettOption title={name} Icon={<RoundedIcon Icon={UserSolidIcon} />} />
        </SettGroup>

        <SettGroup title='Username'>
          <SettOption title={username} Icon={<RoundedIcon Icon={StarSolidIcon} className='bg-yellow-500' />} />
        </SettGroup>

        <SettGroup title='Email'>
          <SettOption title={email} Icon={<RoundedIcon Icon={Mail02SolidIcon} className='bg-red-500' />} />
        </SettGroup>

        <SettGroup title='Admin'>
          <SettOption
            title={isAdmin ? 'Yes' : 'No'}
            Icon={<RoundedIcon Icon={StarsSolidIcon} className='bg-slate-500' />}
          />
        </SettGroup>

        <SettGroup title='OTP'>
          <SettOption title={otp || 'Cleared'} Icon={<RoundedIcon Icon={UserSolidIcon} className='bg-green-500' />} />
        </SettGroup>

        <SettGroup title='Last OTP Sent'>
          <SettOption
            title={getDate(new Date(lastOtpSent).getTime())}
            Icon={<RoundedIcon Icon={Calendar03SolidIcon} className='bg-red-500' />}
          />
        </SettGroup>

        <SettGroup title='Verified'>
          <SettOption
            title={isVerified ? 'Yes' : 'No'}
            Icon={<RoundedIcon Icon={NewReleasesSolidIcon} className='bg-blue-500' />}
          />
        </SettGroup>

        <SettGroup title='Banned'>
          <SettOption
            title={isBanned ? 'Yes' : 'No'}
            Icon={
              <RoundedIcon
                Icon={isBanned ? AngrySolidIcon : SmileSolidIcon}
                className={isBanned ? 'bg-red-500' : 'bg-green-500'}
              />
            }
          />
        </SettGroup>

        <SettText>Sample text</SettText>
      </Gap>
    </SettWrapper>
  )
}
