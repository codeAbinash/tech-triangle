import type { NU } from '@utils/types'

export type Device = {
  id: string
  time: number
  name: string | NU
  os: string | NU
  isSelf?: boolean
} | null
