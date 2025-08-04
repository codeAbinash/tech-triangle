
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function WindowsOldIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M10.25 3.85925L7.84227 4.25852C6.68636 4.45019 5.7502 4.60542 5.01793 4.82233C4.25565 5.04813 3.62542 5.36451 3.13988 5.93479C2.654 6.50547 2.44343 7.17723 2.34471 7.964C2.24997 8.71899 2.24998 9.66386 2.25 10.8293V10.8293V10.8293V11.25H10.25V3.85925ZM2.25 12.75V13.1707V13.1707V13.1707C2.24998 14.3361 2.24997 15.281 2.34471 16.036C2.44343 16.8228 2.654 17.4945 3.13988 18.0652C3.62542 18.6355 4.25566 18.9519 5.01793 19.1777C5.75021 19.3946 6.68639 19.5498 7.84231 19.7415L10.25 20.1407V12.75H2.25ZM11.75 20.3895L13.9497 20.7543C15.5213 21.0149 16.7803 21.2237 17.7767 21.2477C18.806 21.2724 19.6923 21.1061 20.4225 20.4906C21.1534 19.8745 21.4649 19.0301 21.6099 18.0139C21.75 17.0313 21.75 15.7607 21.75 14.1761V12.75H11.75V20.3895ZM21.75 11.25V9.82392C21.75 8.23929 21.75 6.96867 21.6099 5.98609C21.4649 4.96987 21.1534 4.12549 20.4225 3.50939C19.6923 2.89391 18.806 2.72759 17.7767 2.75234C16.7803 2.77629 15.5213 2.98509 13.9497 3.24573L11.75 3.6105V11.25H21.75Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14.0136 3.99538L8.01361 4.99036C5.61912 5.38744 4.42188 5.58597 3.71094 6.421C3 7.25602 3 8.46368 3 10.879L3 13.121C3 15.5363 3 16.744 3.71094 17.579C4.42188 18.414 5.61913 18.6126 8.01361 19.0096L14.0136 20.0046C17.2567 20.5424 18.8782 20.8113 19.9391 19.9171C21 19.023 21 17.3873 21 14.116V9.88402C21 6.6127 21 4.97704 19.9391 4.08286C18.8782 3.18868 17.2567 3.45758 14.0136 3.99538Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11 4.5V19.5M3 12H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
