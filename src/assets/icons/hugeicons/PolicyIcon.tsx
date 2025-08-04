
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function PolicyIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12.3074 1.25H12.3073H12.3073H11.1946H11.1946H11.1946C9.35685 1.24999 7.90123 1.24997 6.76203 1.40313C5.58961 1.56076 4.64067 1.89287 3.89231 2.64123C3.14395 3.38958 2.81182 4.33853 2.65419 5.51094C2.50102 6.65014 2.50102 8.10576 2.50102 9.94351L2.50098 14.0563V14.0564V14.0564C2.50095 15.8941 2.50092 17.3498 2.65408 18.489C2.8117 19.6614 3.14381 20.6104 3.89217 21.3587C4.64054 22.1071 5.58949 22.4392 6.76192 22.5969C7.90114 22.75 9.35677 22.75 11.1945 22.75H12.3073H12.3081H12.3082C12.872 22.75 13.3998 22.75 13.8934 22.7456C13.7402 22.3644 13.7052 21.9382 13.8062 21.5248L14.993 16.9807C14.3732 16.2421 13.9998 15.2897 13.9998 14.25C13.9998 11.9028 15.9026 10 18.2498 10C19.2991 10 20.2595 10.3802 21.0009 11.0104V9.94359C21.0009 8.10585 21.0009 6.65019 20.8478 5.51098C20.6901 4.33856 20.358 3.38961 19.6097 2.64124C18.8613 1.89288 17.9124 1.56076 16.7399 1.40314C15.6007 1.24997 14.1451 1.24999 12.3074 1.25ZM7.00293 6C7.00293 5.58579 7.33872 5.25 7.75293 5.25H15.7529C16.1671 5.25 16.5029 5.58579 16.5029 6C16.5029 6.41421 16.1671 6.75 15.7529 6.75H7.75293C7.33872 6.75 7.00293 6.41421 7.00293 6ZM7.00293 10C7.00293 9.58579 7.33872 9.25 7.75293 9.25H12.2529C12.6671 9.25 13.0029 9.58579 13.0029 10C13.0029 10.4142 12.6671 10.75 12.2529 10.75H7.75293C7.33872 10.75 7.00293 10.4142 7.00293 10ZM18.2498 17.25C19.9067 17.25 21.2498 15.9069 21.2498 14.25C21.2498 12.5931 19.9067 11.25 18.2498 11.25C16.5929 11.25 15.2498 12.5931 15.2498 14.25C15.2498 15.9069 16.5929 17.25 18.2498 17.25ZM15.0225 21.8136L15.9281 17.8102C16.5953 18.246 17.3926 18.4993 18.249 18.4993C19.1383 18.4993 19.9637 18.2262 20.6461 17.7593L21.4804 21.8334C21.5422 22.1052 21.4481 22.3888 21.2361 22.5698C21.0242 22.7509 20.7293 22.7994 20.4705 22.6959L18.249 21.8073L16.0276 22.6959C15.7654 22.8008 15.4665 22.7495 15.2543 22.5632C15.0421 22.3769 14.9525 22.0872 15.0225 21.8136Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M16.6106 17.6596L15.5 22L18 21L20.5 22L19.5 17.5987M21 15C21 16.6569 19.6569 18 18 18C16.3431 18 15 16.6569 15 15C15 13.3431 16.3431 12 18 12C19.6569 12 21 13.3431 21 15Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M20 10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2H11.0001C7.2289 2 5.34329 2 4.17172 3.17156C3.00015 4.34312 3.00014 6.22872 3.0001 9.99993L3.00007 13.9999C3.00004 17.7712 3.00002 19.6568 4.17159 20.8284C5.34317 22 7.2288 22 11.0001 22H13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.5 7H15.5M7.5 12H12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
