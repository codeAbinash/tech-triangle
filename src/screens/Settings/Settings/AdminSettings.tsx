import profileStore from '@/zustand/profileStore'
import { Gap12 } from '@components/Gap'
import RoundIcon from '@components/RoundIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import StarIcon from '@hugeicons/StarIcon'
import UserIcon from '@hugeicons/UserIcon'
import type { NavProp } from '@utils/types'

export default function AdminSettings({ navigation }: NavProp) {
  const user = profileStore((state) => state.user)

  if (!user?.isAdmin) return null

  return (
    <Gap12>
      <SettGroup title='Admin Settings' className='pb-3.5'>
        <SettOption
          title='All users'
          Icon={<RoundIcon Icon={UserIcon} className='bg-green-500' />}
          arrow
          onPress={() => navigation.navigate('AllUsers')}
        />
        <SettOption
          title='Edit Version'
          className=''
          Icon={<RoundIcon Icon={StarIcon} />}
          arrow
          onPress={() => navigation.navigate('EditVersion')}
        ></SettOption>
      </SettGroup>
    </Gap12>
  )
}
