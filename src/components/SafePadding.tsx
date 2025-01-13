import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function PaddingBottom() {
  const bottom = useSafeAreaInsets().bottom
  return <View style={{ height: bottom }} />
}

export function PaddingTop() {
  const top = useSafeAreaInsets().top
  return <View style={{ height: top }} />
}
