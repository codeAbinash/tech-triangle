
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function Add01Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M11.001 19.002V13.002H5C4.44772 13.002 4 12.5543 4 12.002C4 11.4498 4.44772 11.002 5 11.002H11.001V5.00009C11.001 4.44781 11.4487 4.00009 12.001 4.00009C12.5533 4.0001 13.001 4.44781 13.001 5.00009V11.002H19.002L19.1045 11.0069C19.6086 11.0583 20.002 11.4844 20.002 12.002C20.002 12.5197 19.6086 12.9458 19.1045 12.9972L19.002 13.002H13.001V19.002C13.001 19.5543 12.5533 20.002 12.001 20.002C11.4487 20.002 11.001 19.5543 11.001 19.002Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12.001 5.00003V19.002" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M19.002 12.002L4.99998 12.002" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
