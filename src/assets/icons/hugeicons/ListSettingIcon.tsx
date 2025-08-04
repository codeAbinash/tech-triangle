
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function ListSettingIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M16.5 12C17.0523 12 17.5 12.4477 17.5 13V13.2699C18.0993 13.4254 18.6435 13.7174 19.095 14.1109L19.4532 13.877C19.9156 13.575 20.5353 13.7051 20.8373 14.1675C21.1393 14.6299 21.0092 15.2495 20.5468 15.5515L20.2129 15.7696C20.3449 16.1561 20.4167 16.5701 20.4167 17C20.4167 17.43 20.3449 17.844 20.2128 18.2306L20.5464 18.4485C21.0088 18.7505 21.1389 19.3701 20.8369 19.8325C20.5349 20.2949 19.9152 20.425 19.4528 20.123L19.0949 19.8892C18.6433 20.2827 18.0993 20.5746 17.5 20.7301V21C17.5 21.5523 17.0523 22 16.5 22C15.9477 22 15.5 21.5523 15.5 21V20.7301C14.9007 20.5746 14.3567 20.2827 13.9051 19.8892L13.5472 20.123C13.0848 20.425 12.4651 20.2949 12.1631 19.8325C11.8611 19.3701 11.9912 18.7505 12.4536 18.4485L12.7872 18.2306C12.6551 17.844 12.5833 17.43 12.5833 17C12.5833 16.5701 12.6551 16.1561 12.7871 15.7696L12.4532 15.5515C11.9908 15.2495 11.8607 14.6299 12.1627 14.1675C12.4647 13.7051 13.0844 13.575 13.5468 13.877L13.905 14.1109C14.3565 13.7174 14.9007 13.4254 15.5 13.2699V13C15.5 12.4477 15.9477 12 16.5 12ZM16.5 15.1429C15.8266 15.1429 15.2405 15.4777 14.8991 15.9784C14.6987 16.2722 14.5833 16.6222 14.5833 17C14.5833 17.3779 14.6988 17.7279 14.8992 18.0217C15.2406 18.5224 15.8267 18.8571 16.5 18.8571C17.1733 18.8571 17.7594 18.5224 18.1008 18.0217C18.3012 17.7279 18.4167 17.3779 18.4167 17C18.4167 16.6222 18.3013 16.2722 18.1009 15.9784C17.7595 15.4777 17.1734 15.1429 16.5 15.1429Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M3 3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3C21 3.55228 20.5523 4 20 4H4C3.44772 4 3 3.55228 3 3Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M3 9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H4C3.44772 10 3 9.55228 3 9Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M3 15C3 14.4477 3.44772 14 4 14H9C9.55228 14 10 14.4477 10 15C10 15.5523 9.55228 16 9 16H4C3.44772 16 3 15.5523 3 15Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M16.5 19.8571V21M16.5 19.8571C15.4878 19.8571 14.5961 19.3521 14.073 18.5852M16.5 19.8571C17.5122 19.8571 18.4039 19.3521 18.927 18.5852M16.5 14.1429C17.5123 14.1429 18.4041 14.648 18.9271 15.415M16.5 14.1429C15.4877 14.1429 14.5959 14.648 14.0729 15.415M16.5 14.1429V13M20 14.7143L18.9271 15.415M13.0004 19.2857L14.073 18.5852M13 14.7143L14.0729 15.415M19.9996 19.2857L18.927 18.5852M18.9271 15.415C19.2364 15.8685 19.4167 16.4136 19.4167 17C19.4167 17.5864 19.2363 18.1316 18.927 18.5852M14.0729 15.415C13.7636 15.8685 13.5833 16.4136 13.5833 17C13.5833 17.5864 13.7637 18.1316 14.073 18.5852" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M4 3H20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M4 9H20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M4 15H9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}
