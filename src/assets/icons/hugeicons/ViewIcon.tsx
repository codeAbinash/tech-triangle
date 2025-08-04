
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function ViewIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5.52031 6.71298C7.22595 5.38141 9.42944 4.25 12 4.25C14.5706 4.25 16.774 5.38141 18.4797 6.71298C20.1869 8.04576 21.4487 9.61974 22.1546 10.6095L22.2078 10.6837C22.461 11.0358 22.75 11.4378 22.75 12C22.75 12.5622 22.461 12.9642 22.2078 13.3163L22.1546 13.3905C21.4487 14.3803 20.1869 15.9542 18.4797 17.287C16.774 18.6186 14.5706 19.75 12 19.75C9.42944 19.75 7.22595 18.6186 5.52031 17.287C3.81313 15.9542 2.55126 14.3803 1.84541 13.3905L1.79219 13.3163C1.53904 12.9642 1.25 12.5622 1.25 12C1.25 11.4378 1.53904 11.0358 1.79219 10.6837L1.84541 10.6095C2.55126 9.61974 3.81313 8.04576 5.52031 6.71298ZM8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}
