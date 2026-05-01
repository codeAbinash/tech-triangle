import Lines from '@assets/icons/lines.svg'
import FabIcon from '@components/FabIcon'
import { Gap12, Gap20 } from '@components/Gap'
import Press from '@components/Press'
import { PaddingBottom, PaddingTop } from '@components/SafePadding'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import { AutoStatusBar } from '@components/StatusBar'
import { MAIN_TEXT_SIZE, SUB_TEXT_SIZE } from '@components/values'
import MoreHorizontalIcon from '@hugeicons/MoreHorizontalIcon'
import PlusSignIcon from '@hugeicons/PlusSignIcon'
import StarIcon from '@hugeicons/StarIcon'
import Wallet02Icon from '@hugeicons/Wallet02Icon'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '@utils/colors'
import { W } from '@utils/dimensions'
import { Bold, Medium, SemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import React from 'react'
import { RefreshControl, ScrollView, TouchableOpacity, View, useColorScheme } from 'react-native'
import { useSummary } from './api'
import { ColorBadge } from './components'
import { DEFAULT_SOURCE_ICON, type Expense, type Source, formatMoney } from './types'

export default function Wallet() {
  const navigation = useNavigation<StackNav>()
  const scheme = useColorScheme()
  const { data, isPending, refetch, isRefetching } = useSummary()

  return (
    <View className='bg flex-1'>
      <AutoStatusBar scheme={scheme} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={() => refetch()} tintColor={Colors.accent} />
        }
      >
        <PaddingTop />
        <Header />
        <Gap20 className='mt-2'>
          <BalanceCard total={data?.totalBalance ?? 0} month={data?.thisMonthTotal ?? 0} loading={isPending} />
          <QuickActions navigation={navigation} />
          <RecentExpenses expenses={data?.recentExpenses ?? []} sources={data?.sources ?? []} />
          <SourcesList sources={data?.sources ?? []} onPress={() => navigation.navigate('WalletSources')} />
        </Gap20>
        <PaddingBottom />
      </ScrollView>
      <FabIcon
        Icon={<PlusSignIcon color={'#fff'} size={25} strokeWidth={1.9} />}
        onPress={() => navigation.navigate('WalletAddExpense', {})}
        className='bg-wallet-accent rounded-full'
      />
    </View>
  )
}

function Header() {
  return (
    <View className='px-5 pt-2 pb-2'>
      <Bold className='text-zinc-800 dark:text-zinc-200' style={{ fontSize: 26 }}>
        Wallet
      </Bold>
      <Medium className='text-zinc-500' style={{ fontSize: SUB_TEXT_SIZE - 0.5 }}>
        Track expenses across all your sources
      </Medium>
    </View>
  )
}

function BalanceCard({ total, month, loading }: { total: number; month: number; loading: boolean }) {
  return (
    <View>
      <View className='absolute w-full'>
        <View className='bg-wallet-accent/85 h-7 rounded-[50px] rounded-b-none overflow-hidden w-[85%] mx-auto'></View>
      </View>
      <View className='bg-wallet-accent mx-3.5 p-7 pt-5 rounded-[28px] overflow-hidden mt-5'>
        <View className='absolute opacity-15'>
          <Lines width={W - 15} height={250} />
        </View>
        <View className='justify-between flex-row items-center'>
          <View>
            <Medium style={{ color: '#ffffffcc', fontSize: MAIN_TEXT_SIZE }}>Total Balance</Medium>
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {}} className='p-1 pr-0 pl-2'>
            <MoreHorizontalIcon color={'#ffffffcc'} size={25} />
          </TouchableOpacity>
        </View>
        <SemiBold
          style={{
            color: '#fff',
            fontSize: 2.7 * MAIN_TEXT_SIZE,
            fontVariant: ['tabular-nums'],
            letterSpacing: 2,
          }}
        >
          {loading ? '—' : formatMoney(total)}
        </SemiBold>
        <View className='flex-row items-center justify-between' style={{ marginTop: 18 }}>
          <Medium style={{ color: '#ffffffcc', fontSize: SUB_TEXT_SIZE - 1 }}>Spent this month</Medium>
          <SemiBold style={{ color: '#fff', fontSize: MAIN_TEXT_SIZE }}>{loading ? '—' : formatMoney(month)}</SemiBold>
        </View>
      </View>
    </View>
  )
}

function QuickActions({ navigation }: { navigation: StackNav }) {
  return (
    <View className='mx-3.5 flex-row' style={{ gap: 10 }}>
      <ActionButton
        label='Add Expense'
        Icon={<PlusSignIcon color={'#fff'} size={22} />}
        bg={Colors.accent}
        textColor='#fff'
        onPress={() => navigation.navigate('WalletAddExpense', {})}
      />
      <ActionButton
        label='Sources'
        Icon={<Wallet02Icon color={Colors.accent} size={22} />}
        onPress={() => navigation.navigate('WalletSources')}
      />
      <ActionButton
        label='Tags'
        Icon={<StarIcon color={Colors.accent} size={22} />}
        onPress={() => navigation.navigate('WalletTags')}
      />
    </View>
  )
}

function ActionButton({
  label,
  Icon,
  onPress,
  bg,
  textColor,
}: {
  label: string
  Icon: React.ReactNode
  onPress: () => void
  bg?: string
  textColor?: string
}) {
  return (
    <Press
      onPress={onPress}
      className='bg-card flex-1 items-center justify-center'
      style={{ borderRadius: 16, paddingVertical: 14, gap: 6, backgroundColor: bg }}
    >
      {Icon}
      <SemiBold style={{ fontSize: SUB_TEXT_SIZE - 1, color: textColor ?? Colors.accent }}>{label}</SemiBold>
    </Press>
  )
}

function RecentExpenses({ expenses, sources }: { expenses: Omit<Expense, 'tagIds'>[]; sources: Source[] }) {
  const navigation = useNavigation<StackNav>()
  const sourceMap = new Map(sources.map((s) => [s.id, s]))
  return (
    <SettGroup title='Recent Expenses'>
      {expenses.length === 0 ? (
        <Medium className='px-5 text-zinc-500' style={{ fontSize: SUB_TEXT_SIZE, paddingVertical: 6 }}>
          No expenses yet. Tap "Add Expense" to create one.
        </Medium>
      ) : (
        expenses.map((e) => {
          const src = sourceMap.get(e.sourceId)
          return (
            <SettOption
              key={e.id}
              title={e.name}
              Icon={<ColorBadge iconName={src?.emoji ?? DEFAULT_SOURCE_ICON} color={src?.color ?? Colors.accent} />}
              onPress={() => navigation.navigate('WalletAddExpense', { expense: { ...e, tagIds: [] } })}
              Right={
                <SemiBold className='text-zinc-800 dark:text-zinc-200' style={{ fontSize: MAIN_TEXT_SIZE }}>
                  {formatMoney(e.amount)}
                </SemiBold>
              }
            >
              <Medium className='text-zinc-500' style={{ fontSize: SUB_TEXT_SIZE - 2 }}>
                {src?.name ?? 'Unknown source'}
              </Medium>
            </SettOption>
          )
        })
      )}
    </SettGroup>
  )
}

function SourcesList({ sources, onPress }: { sources: Source[]; onPress: () => void }) {
  return (
    <Gap12>
      <View className='flex-row items-center justify-between px-5'>
        <SemiBold className='text-accent' style={{ fontSize: SUB_TEXT_SIZE }}>
          Sources
        </SemiBold>
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <SemiBold className='text-accent' style={{ fontSize: SUB_TEXT_SIZE - 1 }}>
            Manage
          </SemiBold>
        </TouchableOpacity>
      </View>
      {sources.length === 0 ? (
        <Medium className='px-5 text-zinc-500' style={{ fontSize: SUB_TEXT_SIZE }}>
          No sources yet. Tap "Manage" to add your first.
        </Medium>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 14, gap: 10 }}
        >
          {sources.map((s) => (
            <View key={s.id} className='bg-card' style={{ borderRadius: 16, padding: 14, width: 160, gap: 10 }}>
              <ColorBadge iconName={s.emoji} color={s.color} />
              <SemiBold
                className='text-zinc-800 dark:text-zinc-200'
                style={{ fontSize: MAIN_TEXT_SIZE }}
                numberOfLines={1}
              >
                {s.name}
              </SemiBold>
              <SemiBold className='text-accent' style={{ fontSize: SUB_TEXT_SIZE }}>
                {formatMoney(s.balance)}
              </SemiBold>
            </View>
          ))}
        </ScrollView>
      )}
    </Gap12>
  )
}
