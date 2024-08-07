import { Database02Icon, PencilEdit02Icon } from '@assets/icons/icons'
import BackHeader from '@components/BackHeader'
import FabIcon from '@components/FabIcon'
import { Gap12 } from '@components/Gap'
import Search from '@components/Search'
import { ic, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { useIsFocused } from '@react-navigation/native'
import { Colors } from '@utils/colors'
import { ls } from '@utils/storage'
import type { NavProp } from '@utils/types'
import React, { useMemo } from 'react'
import { View } from 'react-native'

export default function MMKVDataList({ navigation }: NavProp) {
  const state = useIsFocused()
  const storage = useMemo(() => ls.getAllKeys(), [state])

  return (
    <>
      <SettWrapper
        navigation={navigation}
        Header={
          <>
            <BackHeader title='MMKV data editor' navigation={navigation} />
            <View className='bg-white px-5 pb-4 dark:bg-zinc-950'>
              <Search placeholder='Search keys' />
            </View>
          </>
        }
      >
        <Gap12>
          <SettText className='mt-3'>MMKV is an efficient, small, easy-to-use mobile key-value storage framework.</SettText>
          <SettText>You may need to restart the app to see the changes in the app.</SettText>
          <SettGroup title='Stored keys'>
            {storage.map((item) => (
              <SettOption
                title={item}
                arrow
                key={item}
                numberOfLines={1}
                Icon={<Database02Icon {...ic} />}
                onPress={() => navigation.navigate('MMKVDataEditor', { key: item })}
              />
            ))}
          </SettGroup>
        </Gap12>
        <SettText>You can edit or delete these data. Click on the key to edit the value or click on the plus icon to add new data.</SettText>
        <View className='h-12'></View>
      </SettWrapper>
      <FabIcon
        navigation={navigation}
        Icon={<PencilEdit02Icon height={25} width={25} color={Colors.white} />}
        onPress={() => navigation.navigate('MMKVDataEditor', { new: true })}
      />
    </>
  )
}
