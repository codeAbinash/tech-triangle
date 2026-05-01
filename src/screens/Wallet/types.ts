// Shared wallet types + UI constants. Amounts are integer minor units (cents).

import { type GradientName } from '@utils/gradients'

export type Source = {
  id: string
  userId: string
  name: string
  description: string | null
  balance: number
  emoji: WalletIconName
  color: string
  createdAt: number | string
}

export type Tag = {
  id: string
  userId: string
  name: string
  emoji: WalletIconName
  color: string
  createdAt: number | string
}

export type Expense = {
  id: string
  userId: string
  name: string
  description: string | null
  amount: number
  sourceId: string
  date: number | string
  createdAt: number | string
  tagIds: string[]
}

export type Summary = {
  totalBalance: number
  thisMonthTotal: number
  recentExpenses: Omit<Expense, 'tagIds'>[]
  sources: Source[]
}

// Request bodies (mirror ttb/src/zod/wallet.ts)
export type SourceInput = {
  name: string
  description?: string | null
  balance: number
  emoji: WalletIconName
  color: string
}
export type TagInput = { name: string; emoji: WalletIconName; color: string }
export type ExpenseInput = {
  name: string
  description?: string | null
  amount: number
  sourceId: string
  tagIds: string[]
  date?: number
}

export const PALETTE = [
  '#0a84ff',
  '#ef4444',
  '#f59e0b',
  '#eab308',
  '#22c55e',
  '#10b981',
  '#06b6d4',
  '#6366f1',
  '#a855f7',
  '#ec4899',
  '#f97316',
  '#64748b',
] as const
export type TagGradientCode = GradientName

export const WALLET_ICON_NAMES = [
  'wallet-02',
  'shopping-cart-01',
  'home-01',
  'car-01',
  'bus-01',
  'taxi',
  'plane',
  'natural-food',
  'star',
] as const

export type WalletIconName = (typeof WALLET_ICON_NAMES)[number]

export const SOURCE_ICON_NAMES = [
  'wallet-02',
  'shopping-cart-01',
  'home-01',
  'car-01',
  'bus-01',
  'taxi',
  'plane',
  'natural-food',
] as const

export const TAG_ICON_NAMES = [
  'star',
  'shopping-cart-01',
  'natural-food',
  'car-01',
  'bus-01',
  'taxi',
  'home-01',
  'plane',
] as const

export const DEFAULT_SOURCE_ICON: WalletIconName = 'wallet-02'
export const DEFAULT_TAG_ICON: WalletIconName = 'star'

export function isWalletIconName(value: string): value is WalletIconName {
  return (WALLET_ICON_NAMES as readonly string[]).includes(value)
}

export function normalizeWalletIconName(value: string | null | undefined, fallback: WalletIconName): WalletIconName {
  return value && isWalletIconName(value) ? value : fallback
}

export const toCents = (v: string | number) => Math.round((Number(v) || 0) * 100)
export const fromCents = (c: number) => (c / 100).toFixed(2)
export const formatMoney = (c: number) => `₹ ${fromCents(c)}`
