import { W } from '@utils/dimensions'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#00000022',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default styles

export const hw = { width: W * 0.42, height: W * 0.48 }
