import { Linking } from 'react-native'

export const APP_VERSION = '1.0.0'
export const APP_VERSION_CODE = 46
export const ASK_QN_URL = 'https://t.me/+u6qGi8wPRmAxOGZl'
export const APP_TG_CHANNEL = 'tg://resolve?domain=tech_triangle'
export function ask_a_question() {
  Linking.openURL(ASK_QN_URL)
}

export function join_telegram_channel() {
  Linking.openURL(APP_TG_CHANNEL)
}
