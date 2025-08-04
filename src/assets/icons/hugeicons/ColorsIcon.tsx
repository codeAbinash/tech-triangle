
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function ColorsIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5.25 8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8C18.75 8.06385 18.75 8.09578 18.7446 8.12394C18.7154 8.27516 18.574 8.38066 18.4208 8.36566C18.3922 8.36287 18.3541 8.35157 18.278 8.32899C17.556 8.11492 16.7914 8 16 8C12.6711 8 9.81706 10.0333 8.61206 12.9256C8.46403 13.281 8.39001 13.4586 8.24327 13.4949C8.09654 13.5312 7.96484 13.4223 7.70145 13.2046L7.70144 13.2046C6.20411 11.9665 5.25 10.0947 5.25 8ZM9.25 16C9.25 12.2721 12.2721 9.25 16 9.25C19.7279 9.25 22.75 12.2721 22.75 16C22.75 19.7279 19.7279 22.75 16 22.75C12.2721 22.75 9.25 19.7279 9.25 16ZM8.02538 15.36C8.00857 15.5717 8 15.7858 8 16.0019C8 18.12 8.82313 20.0458 10.167 21.477L10.167 21.477C10.472 21.8019 10.6246 21.9643 10.5817 22.1254C10.5387 22.2865 10.3498 22.3441 9.97199 22.4593C9.34819 22.6496 8.68605 22.7519 8 22.7519C4.27208 22.7519 1.25 19.7298 1.25 16.0019C1.25 13.9072 2.20418 12.0353 3.70161 10.7972C3.965 10.5795 4.0967 10.4706 4.24343 10.5069C4.39016 10.5432 4.46416 10.7208 4.61215 11.076C5.2393 12.5812 6.3127 13.8533 7.66512 14.7266L7.7468 14.7794C7.89871 14.8775 7.97467 14.9265 8.01134 15.0007C8.04802 15.0749 8.04047 15.1699 8.02538 15.36Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17.5798 9.71016C17.0765 9.57314 16.5468 9.5 16 9.5C13.4668 9.5 11.3002 11.0699 10.4202 13.2898M17.5798 9.71016C20.1271 10.4036 22 12.7331 22 15.5C22 18.8137 19.3137 21.5 16 21.5C14.4633 21.5 13.0615 20.9223 12 19.9722M17.5798 9.71016C17.851 9.02618 18 8.2805 18 7.5C18 4.18629 15.3137 1.5 12 1.5C8.68629 1.5 6 4.18629 6 7.5C6 8.2805 6.14903 9.02618 6.42018 9.71016M10.4202 13.2898C10.149 13.9738 10 14.7195 10 15.5C10 17.277 10.7725 18.8736 12 19.9722M10.4202 13.2898C8.59146 12.792 7.11029 11.451 6.42018 9.71016M6.42018 9.71016C3.87294 10.4036 2 12.7331 2 15.5C2 18.8137 4.68629 21.5 8 21.5C9.53671 21.5 10.9385 20.9223 12 19.9722" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}
