
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function CpuIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12.0565 3.25H12.0564H12.0564H11.9436H11.9436H11.9435C10.1058 3.24999 8.65019 3.24997 7.51098 3.40314C6.33856 3.56076 5.38961 3.89288 4.64124 4.64124C3.89288 5.38961 3.56076 6.33856 3.40314 7.51098C3.24997 8.65019 3.24999 10.1058 3.25 11.9436V11.9436V11.9436V12.0564V12.0564V12.0565C3.24999 13.8942 3.24997 15.3498 3.40314 16.489C3.56076 17.6614 3.89288 18.6104 4.64124 19.3588C5.38961 20.1071 6.33856 20.4392 7.51098 20.5969C8.65019 20.75 10.1059 20.75 11.9436 20.75H12.0565C13.8942 20.75 15.3498 20.75 16.489 20.5969C17.6614 20.4392 18.6104 20.1071 19.3588 19.3588C20.1071 18.6104 20.4392 17.6614 20.5969 16.489C20.75 15.3498 20.75 13.8942 20.75 12.0564V11.9435C20.75 10.1058 20.75 8.65019 20.5969 7.51098C20.4392 6.33856 20.1071 5.38961 19.3588 4.64124C18.6104 3.89288 17.6614 3.56076 16.489 3.40314C15.3498 3.24997 13.8942 3.24999 12.0565 3.25ZM13.7071 9.70711C14.0976 9.31658 14.0976 8.68342 13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289L8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L13.7071 9.70711ZM15.7071 12.2929C16.0976 12.6834 16.0976 13.3166 15.7071 13.7071L13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071C11.9024 15.3166 11.9024 14.6834 12.2929 14.2929L14.2929 12.2929C14.6834 11.9024 15.3166 11.9024 15.7071 12.2929Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.5 1C10.0523 1 10.5 1.44772 10.5 2V4C10.5 4.55228 10.0523 5 9.5 5C8.94772 5 8.5 4.55228 8.5 4V2C8.5 1.44772 8.94772 1 9.5 1ZM14.5 1C15.0523 1 15.5 1.44772 15.5 2V4C15.5 4.55228 15.0523 5 14.5 5C13.9477 5 13.5 4.55228 13.5 4V2C13.5 1.44772 13.9477 1 14.5 1ZM1 9.5C1 8.94772 1.44772 8.5 2 8.5H4C4.55228 8.5 5 8.94772 5 9.5C5 10.0523 4.55228 10.5 4 10.5H2C1.44772 10.5 1 10.0523 1 9.5ZM19 9.5C19 8.94772 19.4477 8.5 20 8.5H22C22.5523 8.5 23 8.94772 23 9.5C23 10.0523 22.5523 10.5 22 10.5H20C19.4477 10.5 19 10.0523 19 9.5ZM1 14.5C1 13.9477 1.44772 13.5 2 13.5H4C4.55228 13.5 5 13.9477 5 14.5C5 15.0523 4.55228 15.5 4 15.5H2C1.44772 15.5 1 15.0523 1 14.5ZM19 14.5C19 13.9477 19.4477 13.5 20 13.5H22C22.5523 13.5 23 13.9477 23 14.5C23 15.0523 22.5523 15.5 22 15.5H20C19.4477 15.5 19 15.0523 19 14.5ZM9.5 19C10.0523 19 10.5 19.4477 10.5 20V22C10.5 22.5523 10.0523 23 9.5 23C8.94772 23 8.5 22.5523 8.5 22V20C8.5 19.4477 8.94772 19 9.5 19ZM14.5 19C15.0523 19 15.5 19.4477 15.5 20V22C15.5 22.5523 15.0523 23 14.5 23C13.9477 23 13.5 22.5523 13.5 22V20C13.5 19.4477 13.9477 19 14.5 19Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M9.5 2V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 2V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.5 20V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 20V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M13 9L9 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15 13L13 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 14.5L20 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 9.5L2 9.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 14.5L2 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 9.5L20 9.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
