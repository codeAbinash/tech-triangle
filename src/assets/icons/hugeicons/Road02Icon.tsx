
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function Road02Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5.51098 20.5969C6.65018 20.75 8.1058 20.75 9.94354 20.75H9.94359H14.0564H14.0565C15.8942 20.75 17.3498 20.75 18.489 20.5969C19.6614 20.4392 20.6104 20.1071 21.3588 19.3588C22.1071 18.6104 22.4392 17.6614 22.5969 16.489C22.75 15.3498 22.75 13.8942 22.75 12.0565V12.0564V11.9436V11.9435C22.75 10.1058 22.75 8.65018 22.5969 7.51098C22.4392 6.33856 22.1071 5.38961 21.3588 4.64124C20.6104 3.89288 19.6614 3.56076 18.489 3.40314C17.3498 3.24997 15.8942 3.24999 14.0564 3.25H14.0564H9.94359H9.94358C8.10582 3.24998 6.65019 3.24997 5.51098 3.40314C4.33856 3.56076 3.38961 3.89288 2.64124 4.64124C1.89288 5.38961 1.56076 6.33856 1.40314 7.51098C1.24997 8.65019 1.24998 10.1058 1.25 11.9436V11.9436V12.0564V12.0564C1.24998 13.8942 1.24997 15.3498 1.40314 16.489C1.56076 17.6614 1.89288 18.6104 2.64124 19.3588C3.38961 20.1071 4.33856 20.4392 5.51098 20.5969ZM5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H7C7.55229 13 8 12.5523 8 12C8 11.4477 7.55229 11 7 11H5ZM17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H17ZM13 11H11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M20.8284 5.17157C19.6569 4 17.7712 4 14 4L10 4C6.22877 4 4.34315 4 3.17157 5.17157M20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284M20.8284 5.17157C20.8284 5.17157 20.8284 5.17157 20.8284 5.17157ZM3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284M3.17157 5.17157C3.17157 5.17157 3.17157 5.17157 3.17157 5.17157ZM3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284M3.17157 18.8284C3.17157 18.8284 3.17157 18.8284 3.17157 18.8284ZM20.8284 18.8284C20.8284 18.8284 20.8284 18.8284 20.8284 18.8284Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M13 12L11 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18.5 12L16.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.5 12L5.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
