import Tick01Icon from '@hugeicons/Tick01Icon'
import { HugeIconProps } from '@hugeicons/constants'
import { Colors } from '@utils/colors'
import { ic } from './Settings/Settings'

export type CheckIconProps = {
  checked: boolean
} & HugeIconProps
export default function Check({ checked, ...rest }: CheckIconProps) {
  return checked ? (
    <Tick01Icon {...ic} color={Colors.accent} {...rest} />
  ) : (
    <Tick01Icon {...ic} style={{ opacity: 0 }} />
  )
}
