import { Input } from '@components/Input'
import SettGroup from '@components/Settings/SettGroup'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import type { NavProp } from '@utils/types'

export default function Test({ navigation }: NavProp) {
  return (
    <>
      <SettWrapper navigation={navigation} title='Test Screen'>
        <SettText className='mt-5'>This is a test screen</SettText>
        <SettGroup title='Normal Input'>
          <Input placeholder='Test Input' />
        </SettGroup>
        <SettGroup title='Multiline Input (8)'>
          <Input multiline placeholder='Test Input' numberOfLines={8} />
        </SettGroup>
      </SettWrapper>
    </>
  )
}
