import BackHeader from '@components/BackHeader'
import FabIcon from '@components/FabIcon'
import { Gap12 } from '@components/Gap'
import RoundIcon from '@components/RoundIcon'
import Search from '@components/Search'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import SingleSkeleton from '@components/SingleSkeleton'
import Database02Icon from '@hugeicons/Database02Icon'
import PencilEdit02Icon from '@hugeicons/PencilEdit02Icon'
import { useIsFocused } from '@react-navigation/native'
import { Colors } from '@utils/colors'
import { ls, type StorageKeys } from '@utils/storage'
import type { NavProp } from '@utils/types'
import { delayedFadeAnimationSearch, exiting, layout } from '@utils/utils'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import Animated from 'react-native-reanimated'

export default function MMKVDataList({ navigation }: NavProp) {
  const state = useIsFocused()
  const [initStorage, setInitStorage] = React.useState<string[] | null>(null)
  const [search, setSearch] = React.useState('')
  const [searchResults, setSearchResults] = React.useState<string[]>([])

  useEffect(() => {
    if (state) setInitStorage(ls.getAllKeys())
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

  useEffect(() => {
    console.log(searchResults)
  }, [searchResults])

  return (
    <>
      <SettWrapper
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
              <Animated.View
                key={item}
                entering={delayedFadeAnimationSearch(search, i)}
                exiting={exiting}
                layout={layout}
              >
                <SettOption
                  title={item}
                  arrow
                  key={item}
                  numberOfLines={1}
                  Icon={<RoundIcon Icon={Database02Icon} className='bg-slate-500' />}
                  onPress={() => navigation.navigate('MMKVDataEditor', { key: item as StorageKeys })}
                />
              </Animated.View>
            ))}
            {initStorage?.length === 0 && (
              <>
                <SettOption
                  title='Create new data'
                  onPress={() => navigation.navigate('MMKVDataEditor', { new: true })}
                  Icon={<RoundIcon Icon={Database02Icon} className='bg-slate-500' />}
                  arrow
                />
              </>
            )}
            {initStorage === null && <SingleSkeleton n={18} />}
            {searchResults.length === 0 && (
              <SettText className='mt-2 pl-6'>No data found. Try searching with another keyword.</SettText>
            )}

            {/* {initStorage === null && <SettOption title='Loading all data...' Icon={<Database02Icon {...ic} />} arrow />} */}
          </SettGroup>
        </Gap12>
        <SettText>
          You can edit or delete these data. Click on the key to edit the value or click on the plus icon to add new
          data.
        </SettText>
        <View className='h-14'></View>
      </SettWrapper>
      <FabIcon
        Icon={<PencilEdit02Icon size={25} color={Colors.white} />}
        onPress={() => navigation.navigate('MMKVDataEditor', { new: true })}
      />
    </>
  )
}
