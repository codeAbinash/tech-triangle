import Press from '@components/Press'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettWrapper from '@components/Settings/SettWrapper'
import { MAIN_TEXT_SIZE, SUB_TEXT_SIZE } from '@components/values'
import PlusSignIcon from '@hugeicons/PlusSignIcon'
import { Colors } from '@utils/colors'
import { Medium, SemiBold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { RefreshControl, View } from 'react-native'
import { useSources } from './api'
import { ColorBadge } from './components'
import { formatMoney } from './types'

export default function Sources({ navigation }: NavProp) {
  const { data, isRefetching, refetch } = useSources()
  const sources = data ?? []

  return (
    <SettWrapper
      title='Sources'
      refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} tintColor={Colors.accent} />}
    >
      <View className='mt-3' style={{ gap: 14 }}>
        <Press
          onPress={() => navigation.navigate('WalletEditSource', {})}
          className='bg-accent mx-3.5 flex-row items-center justify-center'
          style={{ borderRadius: 14, paddingVertical: 13, gap: 8 }}
        >
          <PlusSignIcon color='#fff' size={18} />
          <SemiBold style={{ color: '#fff', fontSize: MAIN_TEXT_SIZE }}>New Source</SemiBold>
        </Press>
        {sources.length === 0 ? (
          <Medium className='mx-3.5 text-zinc-500' style={{ fontSize: SUB_TEXT_SIZE }}>
            No sources yet.
          </Medium>
        ) : (
          <SettGroup>
            {sources.map((s) => (
              <SettOption
                key={s.id}
                title={s.name}
                Icon={<ColorBadge iconName={s.emoji} color={s.color} />}
                Right={
                  <SemiBold style={{ fontSize: MAIN_TEXT_SIZE, color: Colors.accent }}>
                    {formatMoney(s.balance)}
                  </SemiBold>
                }
                arrow
                onPress={() => navigation.navigate('WalletEditSource', { source: s })}
              >
                {!!s.description && (
                  <Medium className='text-zinc-500' style={{ fontSize: SUB_TEXT_SIZE - 2 }} numberOfLines={1}>
                    {s.description}
                  </Medium>
                )}
              </SettOption>
            ))}
          </SettGroup>
        )}
      </View>
    </SettWrapper>
  )
}
