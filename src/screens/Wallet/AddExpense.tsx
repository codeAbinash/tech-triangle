import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundIcon from '@components/RoundIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettWrapper from '@components/Settings/SettWrapper'
import { SUB_TEXT_SIZE } from '@components/values'
import InformationCircleIcon from '@hugeicons/InformationCircleIcon'
import PencilEdit02Icon from '@hugeicons/PencilEdit02Icon'
import Wallet02Icon from '@hugeicons/Wallet02Icon'
import { RouteProp } from '@react-navigation/native'
import { Colors } from '@utils/colors'
import { Medium, SemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import popupStore from '@/zustand/popupStore'
import { useDeleteExpense, useSaveExpense, useSources, useTags } from './api'
import { ColorBadge, DeleteButton, Pill } from './components'
import { fromCents, toCents, type Expense } from './types'

export type WalletAddExpenseParamList = { expense?: Expense } | undefined

type Props = {
  route: RouteProp<{ WalletAddExpense: WalletAddExpenseParamList }, 'WalletAddExpense'>
  navigation: StackNav
}

export default function AddExpense({ navigation, route }: Props) {
  const existing = route.params?.expense
  const alert = popupStore((s) => s.alert)
  const { data: sources } = useSources()
  const { data: tags } = useTags()

  const [name, setName] = useState(existing?.name ?? '')
  const [description, setDescription] = useState(existing?.description ?? '')
  const [amount, setAmount] = useState(existing ? fromCents(existing.amount) : '')
  const [sourceId, setSourceId] = useState<string>(existing?.sourceId ?? sources?.[0]?.id ?? '')
  const [tagIds, setTagIds] = useState<string[]>(existing?.tagIds ?? [])

  const save = useSaveExpense()
  const remove = useDeleteExpense()
  const sourceList = sources ?? []
  const tagList = tags ?? []
  const selectedSource = sourceList.find((s) => s.id === sourceId)

  const cents = toCents(amount)
  const canSave = name.trim().length > 0 && cents > 0 && !!sourceId && !save.isPending

  const toggleTag = (id: string) => setTagIds((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  const onSave = () =>
    canSave &&
    save.mutate(
      {
        id: existing?.id,
        data: { name: name.trim(), description: description.trim() || null, amount: cents, sourceId, tagIds },
      },
      { onSuccess: () => navigation.goBack() },
    )

  const onDelete = () =>
    existing &&
    alert('Delete expense?', 'This will permanently remove this expense.', [
      { text: 'Cancel' },
      { text: 'Delete', onPress: () => remove.mutate(existing.id, { onSuccess: () => navigation.goBack() }) },
    ])

  return (
    <SettWrapper title={existing ? 'Edit Expense' : 'Add Expense'}>
      <Gap12 className='mt-3'>
        <SettGroup title='Details'>
          <Input
            Icon={<RoundIcon Icon={PencilEdit02Icon} />}
            placeholder='What was this for?'
            value={name}
            onChangeText={setName}
          />
          <Input
            Icon={<RoundIcon Icon={Wallet02Icon} gradient='emerald' />}
            placeholder='0.00'
            value={amount}
            onChangeText={setAmount}
            keyboardType='decimal-pad'
          />
          <Input
            Icon={<RoundIcon Icon={InformationCircleIcon} gradient='slate' />}
            placeholder='Optional note'
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
          />
        </SettGroup>
        <SettGroup title='Source'>
          {sourceList.length === 0 ? (
            <Medium className='px-5 text-zinc-500' style={{ fontSize: SUB_TEXT_SIZE }}>
              Create a source first.
            </Medium>
          ) : (
            sourceList.map((s) => (
              <SettOption
                key={s.id}
                title={s.name}
                Icon={<ColorBadge iconName={s.emoji} color={s.color} />}
                onPress={() => setSourceId(s.id)}
                Right={
                  sourceId === s.id ? (
                    <SemiBold className='text-accent' style={{ fontSize: SUB_TEXT_SIZE }}>
                      Selected
                    </SemiBold>
                  ) : null
                }
              />
            ))
          )}
        </SettGroup>
        <SettGroup title='Tags'>
          {tagList.length === 0 ? (
            <Medium className='px-5 text-zinc-500' style={{ fontSize: SUB_TEXT_SIZE }}>
              No tags available.
            </Medium>
          ) : (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 20, gap: 8 }}
            >
              {tagList.map((t) => (
                <Pill
                  key={t.id}
                  iconName={t.emoji}
                  label={t.name}
                  color={t.color}
                  selected={tagIds.includes(t.id)}
                  onPress={() => toggleTag(t.id)}
                />
              ))}
            </ScrollView>
          )}
        </SettGroup>
        {!!selectedSource && cents > 0 && (
          <View className='mx-3.5 px-5'>
            <Medium className='text-zinc-500' style={{ fontSize: SUB_TEXT_SIZE - 1 }}>
              Will deduct from <SemiBold style={{ color: Colors.accent }}>{selectedSource.name}</SemiBold>
            </Medium>
          </View>
        )}
        <View className='gap-8 px-5' style={{ marginTop: 8 }}>
          <Btn
            title={save.isPending ? 'Saving...' : existing ? 'Save Changes' : 'Add Expense'}
            onPress={onSave}
            disabled={!canSave}
          />
          {existing && (
            <DeleteButton
              title={remove.isPending ? 'Deleting...' : 'Delete'}
              onPress={onDelete}
              disabled={remove.isPending}
            />
          )}
        </View>
      </Gap12>
    </SettWrapper>
  )
}
