
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function LongitudeIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17.4982 21.4043C20.6433 19.4956 22.75 15.999 22.75 12.0018C22.75 8.00452 20.6433 4.50798 17.4982 2.59925C17.1423 2.38323 16.9643 2.27522 16.8573 2.29103C16.7363 2.3089 16.6379 2.3989 16.6094 2.51783C16.5842 2.62301 16.6856 2.82945 16.8885 3.24233C18.0124 5.5299 18.6824 8.62808 18.6824 12.0018C18.6824 15.3755 18.0124 18.4737 16.8885 20.7612C16.6856 21.1741 16.5842 21.3806 16.6094 21.4857C16.6379 21.6047 16.7363 21.6947 16.8573 21.7125C16.9643 21.7283 17.1423 21.6203 17.4982 21.4043Z" fill={color}/>
<Path d="M5.31757 12.0018C5.31757 8.62808 5.98759 5.5299 7.11153 3.24234C7.31439 2.82946 7.41583 2.62301 7.39059 2.51783C7.36206 2.3989 7.2637 2.3089 7.14271 2.29103C7.0357 2.27522 6.85772 2.38323 6.50177 2.59925C3.35667 4.50798 1.25 8.00452 1.25 12.0018C1.25 15.9991 3.35667 19.4956 6.50178 21.4043C6.85772 21.6203 7.0357 21.7283 7.14271 21.7125C7.26369 21.6947 7.36206 21.6047 7.39059 21.4857C7.41582 21.3806 7.31439 21.1741 7.11153 20.7612C5.98759 18.4737 5.31757 15.3755 5.31757 12.0018Z" fill={color}/>
<Path d="M10.3572 1.73445C9.76822 2.22082 9.18985 2.97916 8.67074 4.0357C7.69159 6.02857 7.06081 8.84377 7.06081 12.0018C7.06081 15.1598 7.69159 17.975 8.67074 19.9679C9.18985 21.0244 9.76822 21.7828 10.3572 22.2691C10.6418 22.5041 10.7841 22.6216 10.9562 22.5405C11.1284 22.4594 11.1284 22.2525 11.1284 21.8388V2.16473C11.1284 1.75103 11.1284 1.54418 10.9562 1.46308C10.7841 1.38198 10.6418 1.49947 10.3572 1.73445Z" fill={color}/>
<Path d="M12.8716 2.16473V21.8388C12.8716 22.2525 12.8716 22.4594 13.0438 22.5405C13.2159 22.6216 13.3582 22.5041 13.6428 22.2691C14.2318 21.7828 14.8102 21.0244 15.3293 19.9679C16.3084 17.975 16.9392 15.1598 16.9392 12.0018C16.9392 8.84377 16.3084 6.02857 15.3293 4.0357C14.8102 2.97916 14.2318 2.22082 13.6428 1.73445C13.3582 1.49947 13.2159 1.38198 13.0438 1.46308C12.8716 1.54418 12.8716 1.75103 12.8716 2.16473Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M17 12C17 6.47715 14.7614 2 12 2C9.23858 2 7 6.47715 7 12C7 17.5228 9.23858 22 12 22C14.7614 22 17 17.5228 17 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12 22L12 2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
