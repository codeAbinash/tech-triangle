import { Linking } from 'react-native'
export const ANIM_DUR = 150
export const SCREEN_TRANSITION = 300
export const WEATHER_CACHE_TIME = 1000 * 60 * 10 // 10 minutes

export const APP_VERSION = '1.4.0'
export const APP_VERSION_CODE = 13
export const ASK_QN_URL = 'https://t.me/+u6qGi8wPRmAxOGZl'
export const APP_TG_CHANNEL = 'tg://resolve?domain=tech_triangle'
export function ask_a_question() {
  Linking.openURL(ASK_QN_URL)
}

export function join_telegram_channel() {
  Linking.openURL(APP_TG_CHANNEL)
}

export const GITHUB_REPO = 'https://github.com/codeAbinash/tech-triangle'
export const GITHUB_LATEST_RELEASE = 'https://github.com/codeAbinash/tech-triangle/releases/latest'
export const WEB = 'https://techtriangle.vercel.app/'
