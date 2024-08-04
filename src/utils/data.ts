import { Linking } from 'react-native'

export const APP_VERSION = '1.0.0'
export const APP_VERSION_CODE = 46
export const ASK_QN_URL = 'tg://resolve?domain=codeAbinash'

export function ask_a_question() {
  Linking.openURL(ASK_QN_URL)
}
