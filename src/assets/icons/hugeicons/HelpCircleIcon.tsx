
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function HelpCircleIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25ZM12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18H12.0088L12.1113 17.9951C12.6155 17.9439 13.0088 17.5177 13.0088 17C13.0088 16.4823 12.6155 16.0561 12.1113 16.0049L12.0088 16H12ZM12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 10.0523 8.94772 10.5 9.5 10.5C10.0523 10.5 10.5 10.0523 10.5 9.5C10.5 8.67158 11.1716 8 12 8C12.8284 8 13.5 8.67158 13.5 9.5C13.5 9.9492 13.3034 10.3529 12.9883 10.6289L12.8467 10.7383C12.4769 10.9917 12.0355 11.3308 11.6807 11.7578C11.322 12.1896 11 12.7754 11 13.5C11 14.0523 11.4477 14.5 12 14.5C12.5523 14.5 13 14.0523 13 13.5C13 13.3962 13.0426 13.2483 13.2188 13.0361C13.3989 12.8193 13.6632 12.6035 13.9766 12.3887L14.1455 12.2656C14.9681 11.6267 15.5 10.6255 15.5 9.5C15.5 7.567 13.933 6 12 6Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5C14.5 10.3569 14.0689 11.1131 13.4117 11.5636C12.7283 12.0319 12 12.6716 12 13.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.0001 17H12.009" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
