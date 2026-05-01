import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundIcon from '@components/RoundIcon'
import SettGroup from '@components/Settings/SettGroup'
import SettWrapper from '@components/Settings/SettWrapper'
import { SUB_TEXT_SIZE } from '@components/values'
import InformationCircleIcon from '@hugeicons/InformationCircleIcon'
import PencilEdit02Icon from '@hugeicons/PencilEdit02Icon'
import { RouteProp } from '@react-navigation/native'
import { Medium } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import { useState } from 'react'
import { View } from 'react-native'
import popupStore from '@/zustand/popupStore'
import { useDeleteSource, useSaveSource } from './api'
import { ColorPicker, DeleteButton, IconPicker, getWalletIcon } from './components'
import {
  DEFAULT_SOURCE_ICON,
  SOURCE_ICON_NAMES,
  fromCents,
  normalizeWalletIconName,
  PALETTE,
  toCents,
  type Source,
} from './types'

export type WalletEditSourceParamList = { source?: Source } | undefined

type Props = {
  route: RouteProp<{ WalletEditSource: WalletEditSourceParamList }, 'WalletEditSource'>
  navigation: StackNav
}

export default function EditSource({ navigation, route }: Props) {
  const existing = route.params?.source
  const alert = popupStore((s) => s.alert)
  const [name, setName] = useState(existing?.name ?? '')
  const [description, setDescription] = useState(existing?.description ?? '')
  const [balance, setBalance] = useState(existing ? fromCents(existing.balance) : '0.00')
  const [emoji, setEmoji] = useState(normalizeWalletIconName(existing?.emoji, DEFAULT_SOURCE_ICON))
  const [color, setColor] = useState(existing?.color ?? PALETTE[0])

  const save = useSaveSource()
  const remove = useDeleteSource()

  const canSave = name.trim().length > 0 && !save.isPending

  function onSave() {
    if (!canSave) return
    save.mutate(
      {
        id: existing?.id,
        data: {
          name: name.trim(),
          description: description.trim() || null,
          balance: toCents(balance),
          emoji,
          color,
        },
      },
      { onSuccess: () => navigation.goBack() },
    )
  }

  function onDelete() {
    if (!existing) return
    alert('Delete source?', 'This will permanently delete this source.', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        onPress: () => remove.mutate(existing.id, { onSuccess: () => navigation.goBack() }),
      },
    ])
  }

  return (
    <SettWrapper title={existing ? 'Edit Source' : 'New Source'}>
      <Gap12 className='mt-3'>
        <SettGroup title='Name'>
          <Input
            Icon={<RoundIcon Icon={getWalletIcon(emoji)} />}
            placeholder='e.g. HDFC Bank'
            value={name}
            onChangeText={setName}
          />
        </SettGroup>
        <SettGroup title='Description'>
          <Input
            Icon={<RoundIcon Icon={InformationCircleIcon} gradient='slate' />}
            placeholder='Optional note'
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
          />
        </SettGroup>
        <SettGroup title='Balance'>
          <Input
            Icon={<RoundIcon Icon={PencilEdit02Icon} gradient='emerald' />}
            placeholder='0.00'
            value={balance}
            onChangeText={setBalance}
            keyboardType='decimal-pad'
          />
        </SettGroup>
        <SettGroup title='Appearance'>
          <Medium className='px-5 text-zinc-500' style={{ fontSize: SUB_TEXT_SIZE - 2, marginBottom: 4 }}>
            Icon
          </Medium>
          <IconPicker value={emoji} options={SOURCE_ICON_NAMES} onChange={setEmoji} />
          <Medium className='px-5 text-zinc-500' style={{ fontSize: SUB_TEXT_SIZE - 2, marginTop: 8, marginBottom: 4 }}>
            Color
          </Medium>
          <ColorPicker value={color} onChange={setColor} />
        </SettGroup>
        <View className='gap-8 px-5'>
          <Btn title={save.isPending ? 'Saving...' : 'Save'} onPress={onSave} disabled={!canSave} />
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
