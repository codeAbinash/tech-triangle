
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function SoundcloudIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10.25 6C10.25 5.0335 11.0335 4.25 12 4.25C15.3215 4.25 18.1146 6.71493 18.2452 9.89994C20.7562 10.2389 22.75 12.2646 22.75 14.8C22.75 17.5817 20.3499 19.75 17.5 19.75H11C10.5858 19.75 10.25 19.4142 10.25 19V6Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8 5.25C8.41421 5.25 8.75 5.58579 8.75 6V19C8.75 19.4142 8.41421 19.75 8 19.75C7.58579 19.75 7.25 19.4142 7.25 19V6C7.25 5.58579 7.58579 5.25 8 5.25ZM5.00018 9.12917C5.4144 9.12917 5.75018 9.46496 5.75018 9.87917V18.9079C5.75018 19.3221 5.4144 19.6579 5.00018 19.6579C4.58597 19.6579 4.25018 19.3221 4.25018 18.9079V9.87917C4.25018 9.46496 4.58597 9.12917 5.00018 9.12917ZM2 10.8796C2.41421 10.8796 2.75 11.2154 2.75 11.6296V17.1574C2.75 17.5716 2.41421 17.9074 2 17.9074C1.58579 17.9074 1.25 17.5716 1.25 17.1574V11.6296C1.25 11.2154 1.58579 10.8796 2 10.8796Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M8 6V19M5.00018 9.87917V18.9079M2 11.6296V17.1574" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17.4776 10.6001C17.485 10.6 17.4925 10.6 17.5 10.6C19.9853 10.6 22 12.4804 22 14.8C22 17.1196 19.9853 19 17.5 19H14M17.4776 10.6001C17.4924 10.4463 17.5 10.2907 17.5 10.1333C17.5 7.29827 15.0376 5 12 5H11V19M17.4776 10.6001C17.3753 11.6589 16.9286 12.625 16.2428 13.4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
