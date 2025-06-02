export const variants = [
  'stroke-rounded' as const,
  'stroke-standard' as const,
  'solid-standard' as const,
  'duotone-rounded' as const,
  'twotone-rounded' as const,
  'solid-rounded' as const,
  'bulk-rounded' as const,
  'stroke-sharp' as const,
  'solid-sharp' as const,
]

export type Variant = (typeof variants)[number]

export type IconProps = {
  variant?: Variant
  size?: number
  color?: string
  strokeWidth?: number
  className?: string
  fill?: string
}

export const defaultStrokeWidth = 1.5
export const defaultColor = 'currentColor'
export const defaultVariant = 'stroke-rounded'
export const defaultSize = 24
