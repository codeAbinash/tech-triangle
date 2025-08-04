
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function TemperatureIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M13.1459 1.27079C12.8412 1.24999 12.47 1.24999 12.0253 1.25H12.0253C11.5806 1.24999 11.1588 1.24999 10.8541 1.27079C10.5368 1.29245 10.2372 1.33914 9.94665 1.45953C9.27321 1.73863 8.73814 2.2737 8.45905 2.94713C8.33865 3.23764 8.29196 3.53731 8.2703 3.85456C8.2495 4.15932 8.2495 4.53054 8.24951 4.97522V4.97522L8.24951 12.6414C7.0263 13.6949 6.25 15.2569 6.25 17C6.25 20.1756 8.82436 22.75 12 22.75C15.1756 22.75 17.75 20.1756 17.75 17C17.75 15.2569 16.9737 13.6949 15.7505 12.6414V4.97524C15.7505 4.53055 15.7505 4.15933 15.7297 3.85456C15.708 3.53731 15.6614 3.23764 15.541 2.94713C15.2619 2.2737 14.7268 1.73863 14.0534 1.45953C13.7628 1.33914 13.4632 1.29245 13.1459 1.27079ZM12 7C12.5523 7 13 7.44772 13 8V14.4375C14.0243 14.8375 14.75 15.834 14.75 17C14.75 18.5188 13.5188 19.75 12 19.75C10.4812 19.75 9.25 18.5188 9.25 17C9.25 15.834 9.97566 14.8375 11 14.4375V8C11 7.44772 11.4477 7 12 7Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 22C14.7614 22 17 19.7614 17 17C17 15.3644 16.2147 13.9122 15.0005 13V5.00049C15.0005 4.06815 15.0005 3.60198 14.8481 3.23428C14.6451 2.74451 14.256 2.35537 13.7662 2.15239C13.3985 2 12.9323 2 12 2C11.0677 2 10.6015 2 10.2338 2.15239C9.74402 2.35537 9.35488 2.74451 9.1519 3.23428C8.99951 3.60198 8.99951 4.06815 8.99951 5.00049V13C7.78534 13.9122 7 15.3644 7 17C7 19.7614 9.23858 22 12 22Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15ZM12 15V8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
