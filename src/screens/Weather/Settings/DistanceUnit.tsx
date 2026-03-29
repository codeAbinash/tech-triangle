import { weatherStore } from '@/zustand/weatherStore'
import Check from '@components/Check'
import { Gap12 } from '@components/Gap'
import RoundIcon from '@components/RoundIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import Road02Icon from '@hugeicons/Road02Icon'
import RulerIcon from '@hugeicons/RulerIcon'
import type { NavProp } from '@utils/types'

export default function DistanceUnit({ navigation }: NavProp) {
  const distanceUnit = weatherStore((state) => state.distanceUnit)
  const setDistUnit = weatherStore((state) => state.setDistanceUnit)
  return (
    <SettWrapper title='Distance Unit'>
      <Gap12>
        <SettText>Select the unit of distance you want to use.</SettText>
        <SettGroup>
          <SettOption
            title='Meter'
            Right={<Check checked={distanceUnit === 'm'} />}
            onPress={() => setDistUnit('m')}
            Icon={<RoundIcon Icon={RulerIcon} gradient='blue' />}
          />
          <SettOption
            title='Feet'
            Right={<Check checked={distanceUnit === 'ft'} />}
            onPress={() => setDistUnit('ft')}
            Icon={<RoundIcon Icon={Road02Icon} gradient='rose' />}
          />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
