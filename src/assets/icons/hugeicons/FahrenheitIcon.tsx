
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function FahrenheitIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5.5 5C4.94772 5 4.5 5.44772 4.5 6C4.5 6.55228 4.94772 7 5.5 7C6.05228 7 6.5 6.55228 6.5 6C6.5 5.44772 6.05228 5 5.5 5ZM2.5 6C2.5 4.34315 3.84315 3 5.5 3C7.15685 3 8.5 4.34315 8.5 6C8.5 7.65685 7.15685 9 5.5 9C3.84315 9 2.5 7.65685 2.5 6Z" fill={color}/>
<Path d="M20.5 3L17.4294 3C16.0753 2.99997 14.9587 2.99994 14.0749 3.11875C13.1471 3.2435 12.3277 3.51547 11.6716 4.17158C11.0155 4.82768 10.7435 5.64711 10.6188 6.57494C10.4999 7.45869 10.5 8.57529 10.5 9.92939L10.5 11.999C10.5 11.9993 10.5 11.9997 10.5 12C10.5 12.0003 10.5 12.0007 10.5 12.001L10.5 20C10.5 20.5523 10.9477 21 11.5 21C12.0523 21 12.5 20.5523 12.5 20V13H18.5C19.0523 13 19.5 12.5523 19.5 12C19.5 11.4477 19.0523 11 18.5 11H12.5V10C12.5 8.55752 12.5021 7.57625 12.6009 6.84143C12.6958 6.13538 12.8632 5.80836 13.0858 5.58579C13.3084 5.36322 13.6354 5.19585 14.3414 5.10092C15.0763 5.00213 16.0575 5 17.5 5H20.5C21.0523 5 21.5 4.55229 21.5 4C21.5 3.44772 21.0523 3 20.5 3Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="5" cy="6" r="2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21 4H18C15.1716 4 13.7574 4 12.8787 4.87868C12 5.75736 12 7.17157 12 10V20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 12H19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
