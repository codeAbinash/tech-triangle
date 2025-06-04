import popupStore from '@/zustand/popupStore'

import Btn from '@components/Button'
import { Gap } from '@components/Gap'
import RoundIcon from '@components/RoundIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import AngryIcon from '@hugeicons/AngryIcon'
import Calendar03Icon from '@hugeicons/Calendar03Icon'
import Mail02Icon from '@hugeicons/Mail02Icon'
import NewReleasesIcon from '@hugeicons/NewReleasesIcon'
import SmileIcon from '@hugeicons/SmileIcon'
import StarIcon from '@hugeicons/StarIcon'
import StarsIcon from '@hugeicons/StarsIcon'
import UserIcon from '@hugeicons/UserIcon'
import { queryClient } from '@query/index'
import type { RouteProp } from '@react-navigation/native'
import { getDate } from '@screens/Settings/Devices/utils'
import { useMutation } from '@tanstack/react-query'
import { client } from '@utils/client'
import type { StackNav } from '@utils/types'
import { ToastAndroid, View } from 'react-native'

export type UserT = Awaited<ReturnType<Awaited<ReturnType<typeof client.api.admin.users.all.$post>>['json']>>['data'][0]

type ParamList = {
  User: UserParamList
}

export type UserParamList = {
  user: UserT
}

export default function User({ navigation, route }: { navigation: StackNav; route: RouteProp<ParamList, 'User'> }) {
  const user = route.params.user
  const { _id, name, username, email, isAdmin, otp, lastOtpSent, isVerified, isBanned } = user
  const alert = popupStore((store) => store.alert)

  const { mutate, isPending } = useMutation({
    mutationKey: ['removeUser', _id],
    mutationFn: async () => await (await client.api.admin.users.delete.$post({ form: { id: _id || '' } })).json(),
    onSuccess: (d) => {
      if (!d.status) return alert('Error', d.message)
      queryClient.invalidateQueries({ queryKey: ['allUsers'] })
      ToastAndroid.show('User removed successfully', ToastAndroid.SHORT)
      navigation.goBack()
    },
  })

  function handleRemove() {
    alert('Delete this user?', 'Are you sure you want to delete this user? This action cannot be undone.', [
      { text: 'Cancel' },
      { text: 'Delete', onPress: () => mutate() },
    ])
  }

  return (
    <SettWrapper title={username}>
      <Gap gap={10}>
        <SettText className='mt-3'>You can see all details of the user here.</SettText>
        <SettGroup title='Full Name'>
          <SettOption title={name} Icon={<RoundIcon Icon={UserIcon} />} />
        </SettGroup>

        <SettGroup title='Username'>
          <SettOption title={username} Icon={<RoundIcon Icon={StarIcon} className='bg-yellow-500' />} />
        </SettGroup>

        <SettGroup title='Email'>
          <SettOption title={email} Icon={<RoundIcon Icon={Mail02Icon} className='bg-red-500' />} />
        </SettGroup>

        <SettGroup title='Admin'>
          <SettOption title={isAdmin ? 'Yes' : 'No'} Icon={<RoundIcon Icon={StarsIcon} className='bg-slate-500' />} />
        </SettGroup>

        <SettGroup title='OTP'>
          <SettOption title={otp || 'Cleared'} Icon={<RoundIcon Icon={UserIcon} className='bg-green-500' />} />
        </SettGroup>

        <SettGroup title='Last OTP Sent'>
          <SettOption
            title={getDate(new Date(lastOtpSent).getTime())}
            Icon={<RoundIcon Icon={Calendar03Icon} className='bg-red-500' />}
          />
        </SettGroup>

        <SettGroup title='Verified'>
          <SettOption
            title={isVerified ? 'Yes' : 'No'}
            Icon={<RoundIcon Icon={NewReleasesIcon} className='bg-blue-500' />}
          />
        </SettGroup>

        <SettGroup title='Banned'>
          <SettOption
            title={isBanned ? 'Yes' : 'No'}
            Icon={
              <RoundIcon Icon={isBanned ? AngryIcon : SmileIcon} className={isBanned ? 'bg-red-500' : 'bg-green-500'} />
            }
          />
        </SettGroup>
      </Gap>
      <SettText>
        Deleting the user will remove all the data associated with the user. This action cannot be undone.
      </SettText>
      <View className='px-6'>
        <Btn
          title={isPending ? 'Deleting User...' : 'Delete User'}
          onPress={handleRemove}
          className='bg-red-500'
          disabled={isPending}
        />
      </View>
    </SettWrapper>
  )
}
