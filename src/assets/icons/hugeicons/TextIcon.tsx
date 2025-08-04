
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function TextIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M8 21C8 20.4477 8.44772 20 9 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V3C11 2.44772 11.4477 2 12 2Z" fill={color}/>
<Path d="M12 4C10.6663 4 8.92639 4.14259 7.51327 4.28698C6.85365 4.35437 6.72444 4.37712 6.62294 4.41844C6.35296 4.52836 6.1222 4.78389 6.0403 5.06365C6.00976 5.16796 6.00001 5.30827 6.00001 6C6.00001 6.55228 5.5523 7 5.00001 7C4.44773 7 4.00001 6.55228 4.00001 6L3.99993 5.89007C3.99934 5.37184 3.99882 4.91856 4.12087 4.50169C4.37414 3.63663 5.03395 2.90596 5.8688 2.56607C6.27093 2.40235 6.70917 2.35808 7.20688 2.30779L7.30998 2.29733C8.73458 2.15178 10.5589 2 12 2C13.4411 2 15.2654 2.15178 16.69 2.29733L16.7931 2.30779C17.2909 2.35808 17.7291 2.40235 18.1312 2.56607C18.9661 2.90596 19.6259 3.63663 19.8792 4.50169C20.0012 4.91856 20.0007 5.37184 20.0001 5.89007L20 6C20 6.55228 19.5523 7 19 7C18.4477 7 18 6.55228 18 6C18 5.30827 17.9903 5.16796 17.9597 5.06365C17.8778 4.78389 17.6471 4.52836 17.3771 4.41844C17.2756 4.37712 17.1464 4.35437 16.4868 4.28698C15.0736 4.14259 13.3337 4 12 4Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15 21.001H9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 3.00001V21.0008M12 3.00001C13.3874 3.00001 15.1695 3.03055 16.5884 3.17649C17.1885 3.2382 17.4886 3.26906 17.7541 3.37791C18.3066 3.60429 18.7518 4.10063 18.9194 4.67681C19 4.95382 19 5.26992 19 5.90215M12 3.00001C10.6126 3.00001 8.83047 3.03055 7.41161 3.17649C6.8115 3.2382 6.51144 3.26906 6.24586 3.37791C5.69344 3.60429 5.24816 4.10063 5.08057 4.67681C5 4.95382 5 5.26992 5 5.90215" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}
