
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function HumidityIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M15.0131 2.46876C13.3082 0.843746 10.6918 0.843746 8.98694 2.46876C7.73305 3.66394 6.19137 5.31616 4.9572 7.21627C3.73034 9.10512 2.75 11.3266 2.75 13.6399C2.75 18.1253 6.25883 22.75 12 22.75C17.7412 22.75 21.25 18.1253 21.25 13.6399C21.25 11.3266 20.2697 9.10513 19.0428 7.21627C17.8086 5.31616 16.267 3.66394 15.0131 2.46876ZM10.3279 3.88604C11.2812 2.97738 12.7188 2.97738 13.6721 3.88604C14.8654 5.02346 16.2906 6.55795 17.4115 8.28368C18.4849 9.93624 19.2276 11.6852 19.2973 13.3805C18.0238 14.0355 15.5565 14.5611 12.4742 12.8298C9.56427 11.1953 7.00776 10.8671 5.18542 11.0421C5.51852 10.1102 6.0046 9.18269 6.58853 8.28368C7.70944 6.55795 9.13464 5.02346 10.3279 3.88604Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M4 12.284C5.46463 11.8303 8.39159 11.6836 11.9842 13.7016C15.57 15.7157 18.516 14.9984 20 14.1354" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
