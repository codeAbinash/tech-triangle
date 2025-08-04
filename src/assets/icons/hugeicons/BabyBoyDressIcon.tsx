
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function BabyBoyDressIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M5.84748 12.7357C5.56776 12.6198 5.4279 12.5619 5.33901 12.6213C5.25012 12.6807 5.25012 12.8262 5.25012 13.1173V18.5272C5.25012 19.4391 5.57261 20.1672 6.40069 20.6111C7.85998 21.3933 9.9691 21.7505 12.0001 21.7505C14.0311 21.7505 16.1403 21.3933 17.5996 20.6111C18.4276 20.1672 18.7501 19.4391 18.7501 18.5272V13.1172C18.7501 12.8261 18.7501 12.6805 18.6612 12.6212C18.5723 12.5618 18.4325 12.6197 18.1527 12.7356C17.6778 12.9323 17.1649 13.0948 16.6357 13.2276C15.2362 13.5789 13.6107 13.7502 12 13.7502C10.3893 13.7502 8.7638 13.5789 7.36431 13.2276C6.83521 13.0948 6.32234 12.9324 5.84748 12.7357Z" fill={color}/>
<Path d="M7.35746 2.24963C6.05542 2.24896 5.30508 2.54464 4.33849 3.41666L1.81902 5.68739C1.42908 6.03883 1.32478 6.61035 1.28281 7.1092C1.17411 8.40101 1.31271 10.0178 2.08852 11.1177C2.23055 11.319 2.44057 11.5453 2.74032 11.6694C3.21023 11.8639 3.71837 11.6716 4.13577 11.4403C4.53445 11.2193 4.90216 10.9438 5.2576 10.6597C5.77127 11.0889 6.61923 11.4918 7.73425 11.7719C8.98965 12.0874 10.4876 12.2494 12.0002 12.2494C13.5128 12.2494 15.0107 12.0874 16.2661 11.7719C17.3848 11.4909 18.2298 11.0906 18.743 10.6597C19.0985 10.9438 19.4662 11.2193 19.8648 11.4403C20.2822 11.6716 20.7904 11.8639 21.2603 11.6694C21.56 11.5453 21.7701 11.319 21.9121 11.1177C22.6879 10.0178 22.8265 8.40101 22.7178 7.1092C22.6758 6.61035 22.5715 6.03883 22.1816 5.6874L19.6621 3.41666C18.6955 2.54464 17.9452 2.24896 16.6432 2.24963L15.9349 2.24965C15.5181 2.24966 15.3097 2.24966 15.1761 2.35023C15.0426 2.45079 14.9738 2.68984 14.8363 3.16792C14.47 4.44181 13.5216 5.68739 12.0003 5.68739C10.479 5.68739 9.53061 4.44181 9.16427 3.16792C9.02678 2.68984 8.95804 2.45079 8.82448 2.35023C8.69092 2.24966 8.48252 2.24966 8.06572 2.24965L7.35746 2.24963Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M5.94724 9.003C5.94724 9.003 3.68265 11.252 3.01654 10.9766C2.07687 10.5882 1.67051 6.8204 2.30951 6.24512L4.76679 4.03287C5.90144 3.01137 5.93084 3 7.43853 3H8.95703C9.1835 4.3592 10.4956 5.99207 12 5.99207C13.5044 5.99207 14.8165 4.3592 15.043 3H16.5615C18.0692 3 18.0986 3.01136 19.2332 4.03287L21.6905 6.24512C22.3295 6.8204 21.9231 10.5882 20.9835 10.9766C20.3173 11.252 18.0489 9.003 18.0489 9.003" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M6 8V18.5267C6 19.2323 6.11985 19.6092 6.75491 19.9496C9.3676 21.3501 14.6324 21.3501 17.2451 19.9496C17.8802 19.6092 18 19.2323 18 18.5267L18 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M6 10C8 12.6667 16 12.6667 18 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
