export const APP_GRADIENTS = {
  accent: ['#B56EF8', '#8B21F5'],
  rose: ['#F94E6E', '#C01538'],
  red: ['#FF4444', '#C01010'],
  pink: ['#EC4899', '#DB2777'],
  fuchsia: ['#D946EF', '#C026D3'],
  purple: ['#BB6EFA', '#7B20D6'],
  violet: ['#8B5CF6', '#7C3AED'],
  indigo: ['#7577F5', '#3D35D6'],
  blue: ['#5B9EFF', '#1A55D4'],
  sky: ['#18B8FF', '#0270C4'],
  cyan: ['#06B6D4', '#0891B2'],
  teal: ['#14B8A6', '#0D9488'],
  emerald: ['#10B981', '#059669'],
  green: ['#35D96A', '#15983E'],
  lime: ['#84CC16', '#65A30D'],
  yellow: ['#FFD025', '#E08C00'],
  amber: ['#FCC535', '#E07C05'],
  slate: ['#7285A0', '#3D5070'],
  orange: ['#FDA040', '#EF6318'],
} as const

export type GradientName = keyof typeof APP_GRADIENTS

export const WALLET_TAG_GRADIENTS: readonly GradientName[] = [
  'accent',
  'rose',
  'red',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'sky',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'slate',
  'orange',
]

export const TOP_SEVEN_GRADIENTS: readonly GradientName[] = [
  'rose',
  'orange',
  'yellow',
  'emerald',
  'sky',
  'cyan',
  'violet',
  'slate',
]

export function isGradientName(value: string): value is GradientName {
  return value in APP_GRADIENTS
}

export function resolveGradient(value: string, fallback: GradientName = 'accent'): [string, string] {
  const key = isGradientName(value) ? value : fallback
  const [start, end] = APP_GRADIENTS[key]
  return [start, end]
}
