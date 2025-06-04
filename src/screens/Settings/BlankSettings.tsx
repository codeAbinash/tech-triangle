import { Gap12 } from '@components/Gap'
import RoundIcon from '@components/RoundIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import Setting07Icon from '@hugeicons/Setting07Icon'
import type { NavProp } from '@utils/types'

export default function BlankSettings({ navigation }: NavProp) {
  return (
    <SettWrapper title='Blank Settings'>
      <Gap12>
        <SettText className='mt-3'>Beginning Text</SettText>
        <SettGroup title='Sample title'>
          <SettOption
            title='A blank setting'
            Icon={<RoundIcon Icon={Setting07Icon} className='bg-slate-500' />}
            arrow
          />
        </SettGroup>
        <SettText>Sample text</SettText>
      </Gap12>
      <SettText>End Text</SettText>
    </SettWrapper>
  )
}
