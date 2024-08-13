import { coordinateNotesStore } from '@/zustand/coordinateNotesStore'
import { PlusSignIcon } from '@assets/icons/icons'
import BackHeader from '@components/BackHeader'
import FabIcon from '@components/FabIcon'
import { PaddingBottom } from '@components/SafePadding'
import Search from '@components/Search'
import { Bg, BgSecondary } from '@components/Settings'
import { AutoStatusBar } from '@components/StatusBar'
import { Txt } from '@components/Text'
import { Colors } from '@utils/colors'
import type { NavProp } from '@utils/types'
import React, { useState } from 'react'
import { View, useColorScheme } from 'react-native'

export default function CoordinatesNotes({ navigation }: NavProp) {
  const [query, setQuery] = useState('')
  const scheme = useColorScheme()
  const notes = coordinateNotesStore((state) => state.notes)

  // useEffect(() => {
  //   console.log(timeStamp())
  // }, [])
  return (
    <BgSecondary className='flex-1'>
      <AutoStatusBar scheme={scheme} />
      <BackHeader title={'Coordinate Notes'} navigation={navigation} />
      {/* <ScrollView className='flex-1'>
        <Bg className='px-5 pb-3'>
          <Search placeholder='Search Coordinates' value={query} onChangeText={(text) => setQuery(text)} />
        </Bg>
      </ScrollView> */}
      {notes.length === 0 && (
        <>
          <Bg className='px-5 pb-3'>
            <Search placeholder='Search Coordinates' value={query} onChangeText={(text) => setQuery(text)} />
          </Bg>
          <View className='flex-1 items-center justify-center pb-10'>
            <Txt>No notes found</Txt>
          </View>
        </>
      )}
      <FabIcon
        Icon={<PlusSignIcon height={25} width={25} color={Colors.white} />}
        onPress={() => navigation.navigate('MMKVDataEditor', { new: true })}
      />
      <PaddingBottom />
    </BgSecondary>
  )
}
