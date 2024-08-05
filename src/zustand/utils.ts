import { ls } from '@utils/storage'

export function getLocalDataSize(startKey: string) {
  const keys = ls.getAllKeys().filter((key) => key.startsWith(startKey))
  let size = 0
  keys.forEach((key) => {
    const value = ls.getString(key)
    if (value) size += value.length
  })
  return Math.round(size)
}
