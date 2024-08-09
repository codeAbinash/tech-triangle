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
import { screenDelay } from '@utils/utils'
import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'

export default function MMKVDataList({ navigation }: NavProp) {
  const state = useIsFocused()
  const [initStorage, setInitStorage] = React.useState<string[] | null>(null)
  const [search, setSearch] = React.useState('')
  const [searchResults, setSearchResults] = React.useState<string[]>([])

  useEffect(() => {
    if (state) screenDelay(() => setInitStorage(ls.getAllKeys()))
  }, [state])

  useEffect(() => {
    const timer = setTimeout(() => {
      const query = search.toLowerCase().trim()
      if (query.length === 0) {
        setSearchResults(initStorage || [])
        return
      }
      const results = initStorage?.filter((item) => item.toLowerCase().includes(query))
      setSearchResults(results || [])
    }, 100)

    return () => clearTimeout(timer)
  }, [search, initStorage])

  return (
    <>
      <SettWrapper
        navigation={navigation}
        Header={
          <>
            <BackHeader title='MMKV data editor' navigation={navigation} />
            <View className='bg-white px-5 pb-4 dark:bg-zinc-950'>
              <Search placeholder='Search keys' value={search} onChangeText={(text) => setSearch(text)} />
            </View>
          </>
        }
      >
        <Gap12>
          <SettText className='mt-3'>You may need to restart the app to see the changes in the app.</SettText>

          <SettGroup title='Stored keys' className='pb-4'>
            {searchResults?.map((item, i) => (
              <Animated.View key={item} entering={delayedFadeAnimation(search, i)}>
                <SettOption
                  title={item}
                  arrow
                  numberOfLines={1}
                  Icon={<Database02Icon {...ic} />}
                  onPress={() => navigation.navigate('MMKVDataEditor', { key: item })}
                />
              </Animated.View>
            ))}
            {initStorage?.length === 0 && (
              <SettOption
                title='Create new data'
                onPress={() => navigation.navigate('MMKVDataEditor', { new: true })}
                Icon={<Database02Icon {...ic} />}
              />
            )}
            {initStorage === null && <ActivityIndicator size='large' color={Colors.accent} style={{ marginTop: 30, marginBottom: 30 }} />}
            {/* {initStorage === null && <SettOption title='Loading all data...' Icon={<Database02Icon {...ic} />} arrow />} */}
          </SettGroup>
        </Gap12>
        <SettText>You can edit or delete these data. Click on the key to edit the value or click on the plus icon to add new data.</SettText>
        <View className='h-14'></View>
      </SettWrapper>
      <FabIcon
        navigation={navigation}
        Icon={<PencilEdit02Icon height={25} width={25} color={Colors.white} />}
        onPress={() => navigation.navigate('MMKVDataEditor', { new: true })}
      />
    </>
  )
}

function delayedFadeAnimation(search: string, i: number) {
  return FadeIn.duration(250).delay(search.trim().length === 0 ? Math.min((i + 1) * 25, 500) : 20)
}
