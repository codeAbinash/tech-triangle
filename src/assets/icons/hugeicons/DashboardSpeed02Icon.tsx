
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function DashboardSpeed02Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V15.1707C9.83481 15.5825 9 16.6938 9 18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18C15 16.6938 14.1652 15.5825 13 15.1707V10Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 5C7.58172 5 4 8.58172 4 13C4 13.5523 3.55228 14 3 14C2.44772 14 2 13.5523 2 13C2 7.47715 6.47715 3 12 3C17.5228 3 22 7.47715 22 13C22 13.5523 21.5523 14 21 14C20.4477 14 20 13.5523 20 13C20 8.58172 16.4183 5 12 5Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="12" cy="18" r="3" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12 15V10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}
