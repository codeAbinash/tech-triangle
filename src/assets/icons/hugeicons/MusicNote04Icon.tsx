
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function MusicNote04Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14.6952 2.30606L14.755 2.32365C18.0744 3.29725 20.5 6.36464 20.5 10.0012C20.5 10.4056 20.2564 10.7703 19.8827 10.925C19.509 11.0798 19.0789 10.9943 18.7929 10.7083C18.1412 10.0565 16.9075 9.20939 15.6937 8.78919C14.6015 8.41109 13.9056 8.48251 13.5 8.82432L13.5 17.0012C13.5 19.7626 11.2614 22.0012 8.5 22.0012C5.73858 22.0012 3.5 19.7626 3.5 17.0012C3.5 14.2397 5.73858 12.0012 8.5 12.0012C9.62561 12.0012 10.6643 12.3731 11.5 13.0008V8.45725C11.4999 8.44892 11.4999 8.44059 11.5 8.43226V5.00116L11.5 4.93629V4.93628C11.4998 4.50611 11.4996 4.06207 11.5656 3.69193C11.6462 3.23941 11.8422 2.78264 12.3012 2.4389C12.7212 2.12438 13.1687 2.02927 13.6247 2.06607C13.9754 2.09438 14.358 2.20689 14.6952 2.30606Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12.5 3L12.5 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.5 17C12.5 19.2091 10.7091 21 8.5 21C6.29086 21 4.5 19.2091 4.5 17C4.5 14.7909 6.29086 13 8.5 13C10.7091 13 12.5 14.7909 12.5 17Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.5 3C16.366 3 19.5 6.13401 19.5 10C18 8.5 14.0556 6.26667 12.5 8.44444" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
