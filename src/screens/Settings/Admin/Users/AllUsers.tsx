import { UserSolidIcon } from '@assets/icons/icons'
import BackHeader from '@components/BackHeader'
import DoubleSkeleton from '@components/DoubleSkeleton'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import Search from '@components/Search'
import { SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { useQuery } from '@tanstack/react-query'
import { client } from '@utils/client'
import { F, Medium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { delayedFadeAnimation, print } from '@utils/utils'
import React, { useEffect } from 'react'
import { ToastAndroid, View } from 'react-native'
import Animated from 'react-native-reanimated'

export default function AllUsers({ navigation }: NavProp) {
  const [search, setSearch] = React.useState('')

  const { data, isPending } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => await (await client.api.admin.users.all.$post()).json(),
  })

  useEffect(() => {
    if (data?.status === false) {
      ToastAndroid.show(data.message, ToastAndroid.SHORT)
      navigation.goBack()
    }
  }, [data, navigation])

  useEffect(() => {
    print(data)
  }, [data])

  return (
    <SettWrapper
      navigation={navigation}
      Header={
        <>
          <BackHeader title='All users' navigation={navigation} />
          <View className='bg-white px-5 pb-4 dark:bg-zinc-950'>
            <Search placeholder='Search user' value={search} onChangeText={(text) => setSearch(text)} />
          </View>
        </>
      }
    >
      <Gap12>
        <SettText className='mt-3'>You can see all users here. Also you can add or remove users.</SettText>
        <SettGroup title='All users'>
          {isPending && <DoubleSkeleton n={12} />}
          {data?.data?.map((user, i) => (
            // <Animated.View key={user.email} entering={delayedFadeAnimation(i)}>
            <SettOption
              key={user.email}
              title={user.name}
              Icon={<RoundedIcon Icon={UserSolidIcon} />}
              arrow
              onPress={() => navigation.navigate('User', { user })}
            >
              <Medium className='text-zinc-600 dark:text-zinc-400' style={F.F10_5} numberOfLines={1}>
                {user.email}
              </Medium>
            </SettOption>
            // </Animated.View>
          ))}
        </SettGroup>
      </Gap12>
      <SettText>
        <SettText className='ml-2'></SettText>
      </SettText>
    </SettWrapper>
  )
}
