import FabIcon from '@components/FabIcon'
import SearchableBackHeader from '@components/SearchableBackHeader'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettWrapper from '@components/Settings/SettWrapper'
import { SUB_TEXT_SIZE } from '@components/values'
import PlusSignIcon from '@hugeicons/PlusSignIcon'
import { Colors } from '@utils/colors'
import { Medium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { useState } from 'react'
import { RefreshControl, View } from 'react-native'
import { useTags } from './api'
import { ColorBadge } from './components'

export default function Tags({ navigation }: NavProp) {
  const { data, isRefetching, refetch } = useTags()
  const [search, setSearch] = useState('')
  const tags = (data ?? []).filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <SettWrapper
        title='Tags'
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} tintColor={Colors.accent} />}
        Header={
          <SearchableBackHeader
            title='All Tags'
            placeholder='Search tags...'
            value={search}
            onChangeText={setSearch}
            navigation={navigation}
          />
        }
      >
        <View className='mt-3' style={{ gap: 14 }}>
          {tags.length === 0 ? (
            <Medium className='mt-[50%] text-center text-zinc-500' style={{ fontSize: SUB_TEXT_SIZE }}>
              No tags yet.
            </Medium>
          ) : (
            <SettGroup>
              {tags.map((t) => (
                <SettOption
                  key={t.id}
                  title={t.name}
                  Icon={<ColorBadge iconName={t.emoji} color={t.color} />}
                  arrow
                  onPress={() => navigation.navigate('WalletEditTag', { tag: t })}
                />
              ))}
            </SettGroup>
          )}
        </View>
      </SettWrapper>
      <FabIcon
        Icon={<PlusSignIcon size={25} color={Colors.white} strokeWidth={2} />}
        onPress={() => navigation.navigate('WalletEditTag', {})}
      />
    </>
  )
}
