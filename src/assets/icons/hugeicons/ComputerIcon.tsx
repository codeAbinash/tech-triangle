
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function ComputerIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M16.0549 2.25C17.4225 2.24998 18.5248 2.24996 19.3918 2.36652C20.2919 2.48754 21.0497 2.74643 21.6517 3.34835C22.2536 3.95027 22.5125 4.70814 22.6335 5.60825C22.75 6.47522 22.75 7.57754 22.75 8.94513V11.0549C22.75 12.4225 22.75 13.5248 22.6335 14.3918C22.5125 15.2919 22.2536 16.0497 21.6517 16.6517C21.0497 17.2536 20.2919 17.5125 19.3918 17.6335C18.5248 17.75 17.4225 17.75 16.0549 17.75H16.0549H7.94513H7.94512C6.57754 17.75 5.47522 17.75 4.60825 17.6335C3.70814 17.5125 2.95027 17.2536 2.34835 16.6517C1.74643 16.0497 1.48754 15.2919 1.36652 14.3918C1.24996 13.5248 1.24998 12.4225 1.25 11.0549V11.0549V8.94513V8.94511C1.24998 7.57753 1.24996 6.47521 1.36652 5.60825C1.48754 4.70814 1.74643 3.95027 2.34835 3.34835C2.95027 2.74643 3.70814 2.48754 4.60825 2.36652C5.47521 2.24996 6.57753 2.24998 7.94511 2.25H7.94513H16.0549H16.0549Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M10.5 16.75C10.5 16.1977 10.9477 15.75 11.5 15.75H12.5C13.0523 15.75 13.5 16.1977 13.5 16.75V19.25C13.5 19.5261 13.7239 19.75 14 19.75H16C16.5523 19.75 17 20.1977 17 20.75C17 21.3023 16.5523 21.75 16 21.75H8C7.44772 21.75 7 21.3023 7 20.75C7 20.1977 7.44772 19.75 8 19.75H10C10.2761 19.75 10.5 19.5261 10.5 19.25V16.75Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14 21H16M14 21C13.1716 21 12.5 20.3284 12.5 19.5V17L12 17M14 21H10M10 21H8M10 21C10.8284 21 11.5 20.3284 11.5 19.5V17L12 17M12 17V21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17H16C18.8284 17 20.2426 17 21.1213 16.1213C22 15.2426 22 13.8284 22 11V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
