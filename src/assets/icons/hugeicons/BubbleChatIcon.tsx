
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import {type Variant, type HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function BubbleChatIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 1.75C17.6609 1.75 22.25 6.33908 22.25 12C22.25 17.6609 17.6609 22.25 12 22.25C10.2448 22.25 8.59046 21.8084 7.14453 21.0293C6.38511 20.6201 5.78228 20.6112 5.23633 20.7139C4.94458 20.7688 4.66731 20.8556 4.3584 20.9531L4.34082 20.959C4.05369 21.0496 3.7164 21.1558 3.37793 21.207C2.95556 21.2709 2.5542 21.1147 2.2793 20.8398C1.8481 20.4083 1.80203 19.788 2.00293 19.3145L2.07617 19.1318C2.43613 18.1714 2.70956 16.5536 2.27148 15.2363C1.9329 14.2181 1.75 13.1296 1.75 12C1.75 6.33908 6.33908 1.75 12 1.75ZM8.00879 11C7.45662 11.0001 7.00879 11.4478 7.00879 12C7.00879 12.5522 7.45662 12.9999 8.00879 13H8.01758L8.12012 12.9951C8.62432 12.9439 9.01758 12.5177 9.01758 12C9.01758 11.4823 8.62432 11.0561 8.12012 11.0049L8.01758 11H8.00879ZM12.0039 11C11.4519 11.0003 11.0039 11.4479 11.0039 12C11.0039 12.5521 11.4519 12.9997 12.0039 13H12.0137C12.5658 12.9998 13.0137 12.5521 13.0137 12C13.0137 11.4479 12.5658 11.0002 12.0137 11H12.0039ZM16 11C15.4478 11.0001 15 11.4478 15 12C15 12.5522 15.4478 12.9999 16 13H16.0088C16.5611 13 17.0088 12.5523 17.0088 12C17.0088 11.4477 16.5611 11 16.0088 11H16Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12.0045 12H12.0135M16 12H16.009M8.009 12H8.01797" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C10.3719 21.5 8.8394 21.0904 7.5 20.3687C5.63177 19.362 4.37462 20.2979 3.26592 20.4658C3.09774 20.4913 2.93024 20.4302 2.80997 20.31C2.62741 20.1274 2.59266 19.8451 2.6935 19.6074C3.12865 18.5818 3.5282 16.6382 2.98341 15C2.6698 14.057 2.5 13.0483 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
