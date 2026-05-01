import popupStore from '@/zustand/popupStore'
import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundIcon from '@components/RoundIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettWrapper from '@components/Settings/SettWrapper'
import { RouteProp } from '@react-navigation/native'
import { isGradientName } from '@utils/gradients'
import type { StackNav } from '@utils/types'
import { useState } from 'react'
import { View } from 'react-native'
import { useDeleteTag, useSaveTag } from './api'
import { DeleteButton, GradientPicker, IconPicker, getWalletIcon, toRoundIconGradient } from './components'
import { DEFAULT_TAG_ICON, TAG_ICON_NAMES, type Tag, normalizeWalletIconName } from './types'

export type WalletEditTagParamList = { tag?: Tag } | undefined

type Props = {
  route: RouteProp<{ WalletEditTag: WalletEditTagParamList }, 'WalletEditTag'>
  navigation: StackNav
}

export default function EditTag({ navigation, route }: Props) {
  const existing = route.params?.tag
  const alert = popupStore((s) => s.alert)
  const normalizedColor = existing?.color && isGradientName(existing.color) ? existing.color : 'accent'
  const [name, setName] = useState(existing?.name ?? '')
  const [emoji, setEmoji] = useState(normalizeWalletIconName(existing?.emoji, DEFAULT_TAG_ICON))
  const [color, setColor] = useState<string>(normalizedColor)

  const save = useSaveTag()
  const remove = useDeleteTag()
  const canSave = name.trim().length > 0 && !save.isPending

  function onSave() {
    if (!canSave) return
    save.mutate(
      {
        id: existing?.id,
        data: {
          name: name.trim(),
          emoji,
          color,
        },
      },
      { onSuccess: () => navigation.goBack() },
    )
  }

  function onDelete() {
    if (!existing) return
    alert('Delete tag?', 'This will permanently delete this tag.', [
      { text: 'Cancel' },
      { text: 'Delete', onPress: () => remove.mutate(existing.id, { onSuccess: () => navigation.goBack() }) },
    ])
  }

  return (
    <SettWrapper title={existing ? 'Edit Tag' : 'New Tag'}>
      <Gap12 className='mt-3'>
        <SettGroup title='Name'>
          <Input
            Icon={<RoundIcon Icon={getWalletIcon(emoji)} gradient={toRoundIconGradient(color)} />}
            placeholder='e.g. Food'
            value={name}
            onChangeText={setName}
          />
        </SettGroup>
        <SettGroup title='Select Icon'>
          <IconPicker value={emoji} options={TAG_ICON_NAMES} onChange={setEmoji} />
          <SettOption
            title='More Icon Options'
            onPress={() => navigation.navigate('WalletSelectTagIcon')}
            arrow
            // Icon={<RoundIcon Icon={getWalletIcon(emoji)} gradient={toRoundIconGradient(color)} />}
          />
        </SettGroup>

        <SettGroup title='Select Gradient'>
          <GradientPicker value={color} onChange={setColor} />
          <SettOption
            title='More Gradient Options'
            onPress={() => navigation.navigate('WalletSelectTagIcon')}
            arrow
            // Icon={<RoundIcon Icon={getWalletIcon(emoji)} gradient={toRoundIconGradient(color)} />}
          />
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
