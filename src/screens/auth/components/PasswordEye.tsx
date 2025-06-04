import { ic } from '@components/Settings/Settings'
import ViewIcon from '@hugeicons/ViewIcon'
import ViewOffSlashIcon from '@hugeicons/ViewOffSlashIcon'
import { TouchableOpacity } from 'react-native'

export function PasswordEye({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean
  setIsVisible: (visible: boolean) => void
}) {
  return (
    <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
      {isVisible ? <ViewIcon {...ic} size={24} /> : <ViewOffSlashIcon {...ic} size={24} />}
    </TouchableOpacity>
  )
}
