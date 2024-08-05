import { useWeatherSearchHistory } from '@/zustand/store'
import Button from '@components/Button'
import { PaddingBottom } from '@components/SafePadding'
import Search from '@components/Search'
import { iconProps } from '@components/Settings'
import StackHeader from '@components/StackHeader'
import DeleteIcon from '@icons/delete-02-stroke-rounded.svg'
import MapIcon from '@icons/maps-location-02-stroke-rounded.svg'
import { PMedium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default function ClearWeatherSearchHistory({ navigation }: NavProp) {
  const searchHistory = useWeatherSearchHistory((state) => state.searchHistory)
  const clearSearchHistory = useWeatherSearchHistory((state) => state.clearSearchHistory)
  return (
    <>
      <StatusBar barStyle='default' />
      <View className='p-5 pb-2.5 pt-4 dark:bg-neutral-950' style={{ gap: 10 }}>
        <StackHeader title={`Search History `} navigation={navigation} left='Cancel' right='Done' />
        <Search placeholder={`Search History (${searchHistory.length})`} keyboardType='web-search' />
      </View>

      <View className='flex-1 dark:bg-neutral-950'>
        <FlatList
          className='bg-neutral-100 dark:bg-black'
          data={searchHistory}
          contentContainerStyle={{ gap: 2, paddingBottom: 30, flex: 1 }}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={HistoryItem}
          ListEmptyComponent={
            <View className='flex-1 items-center justify-center bg-white dark:bg-neutral-950'>
              <PMedium className='text-zinc-800 dark:text-zinc-200' style={{ fontSize: 15 }}>
                No search history
              </PMedium>
            </View>
          }
        ></FlatList>
      </View>

      {searchHistory.length > 0 && (
        <View className='px-[10%] pb-4 pt-3'>
          <Button
            title={`Clear Search History (${searchHistory.length})`}
            onPress={() => {
              clearSearchHistory()
              navigation.goBack()
            }}
          />
          <PaddingBottom />
        </View>
      )}
    </>
  )
}

function HistoryItem({ item }: { item: string }) {
  return (
    <View className='flex-row items-center justify-between bg-white px-7 dark:bg-neutral-950'>
      <View className='flex-row' style={{ gap: 18 }}>
        <MapIcon {...iconProps} />
        <PMedium className='text-zinc-800 dark:text-zinc-200' style={{ fontSize: 15 }}>
          {item}
        </PMedium>
      </View>
      <View className='py-4'>
        <DeleteIcon {...iconProps} className='text-red-500 opacity-80' />
      </View>
    </View>
  )
}
