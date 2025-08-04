
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function CancelCircleIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25ZM9.63086 8.22461C9.2381 7.90427 8.65909 7.92689 8.29297 8.29297C7.92698 8.65909 7.90429 9.23813 8.22461 9.63086L8.29297 9.70703L10.5859 12L8.29395 14.293C7.90357 14.6835 7.90344 15.3166 8.29395 15.707C8.68447 16.0972 9.31758 16.0974 9.70801 15.707L12 13.4141L14.292 15.707L14.3682 15.7754C14.7608 16.0957 15.3399 16.0729 15.7061 15.707C16.0721 15.3411 16.0954 14.7619 15.7754 14.3691L15.7061 14.293L13.4131 12L15.707 9.70703L15.7754 9.63086C16.0957 9.23812 16.073 8.65909 15.707 8.29297C15.3409 7.92689 14.7619 7.90427 14.3691 8.22461L14.293 8.29297L12 10.5859L9.70703 8.29297L9.63086 8.22461Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.9994 15L9 9M9.00064 15L15 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
