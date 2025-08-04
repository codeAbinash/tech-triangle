
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function SidebarRightIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M9.95154 2.25003H12.75C13.2214 2.25003 13.4571 2.25003 13.6036 2.39648C13.75 2.54292 13.75 2.77863 13.75 3.25003L13.75 20.75C13.75 21.2214 13.75 21.4571 13.6036 21.6036C13.4571 21.75 13.2214 21.75 12.75 21.75H9.95145H9.95143H9.95141H9.95139H9.95137C8.35293 21.75 7.08651 21.7501 6.07727 21.6304C5.03896 21.5072 4.18587 21.2495 3.4548 20.6736C2.95374 20.2789 2.5222 19.7921 2.17708 19.2376C1.68205 18.4422 1.46162 17.5217 1.355 16.3837C1.24999 15.263 1.24999 13.8507 1.25 12.0395V12.0395V11.9606V11.9606C1.24999 10.1494 1.24999 8.73708 1.355 7.61635C1.46162 6.4784 1.68205 5.55783 2.17708 4.76249C2.5222 4.208 2.95374 3.72112 3.4548 3.32641C4.18587 2.75053 5.03896 2.49282 6.07727 2.36969C7.08654 2.25001 8.35302 2.25002 9.95153 2.25003H9.95154ZM16.2559 21.7341C16.8783 21.7188 17.431 21.6889 17.9227 21.6306C18.961 21.5075 19.8141 21.2497 20.5452 20.6739C21.0463 20.2792 21.4778 19.7923 21.8229 19.2378C22.3179 18.4424 22.5384 17.5219 22.645 16.3839C22.75 15.2632 22.75 13.8508 22.75 12.0397V11.9608C22.75 10.1496 22.75 8.7373 22.645 7.61656C22.5384 6.47861 22.3179 5.55804 21.8229 4.7627C21.4778 4.20821 21.0463 3.72133 20.5452 3.32662C19.8141 2.75074 18.961 2.49303 17.9227 2.3699C17.431 2.3116 16.8783 2.2817 16.2559 2.26637C15.7864 2.2548 15.5517 2.24902 15.4008 2.39618C15.25 2.54334 15.25 2.78167 15.25 3.25834V20.7421C15.25 21.2188 15.25 21.4571 15.4008 21.6043C15.5517 21.7515 15.7864 21.7457 16.2559 21.7341ZM17.75 6.96097C17.75 6.54675 18.0858 6.21097 18.5 6.21097H19.5C19.9142 6.21097 20.25 6.54675 20.25 6.96097C20.25 7.37518 19.9142 7.71097 19.5 7.71097H18.5C18.0858 7.71097 17.75 7.37518 17.75 6.96097ZM17.75 9.96097C17.75 9.54675 18.0858 9.21097 18.5 9.21097H19.5C19.9142 9.21097 20.25 9.54675 20.25 9.96097C20.25 10.3752 19.9142 10.711 19.5 10.711H18.5C18.0858 10.711 17.75 10.3752 17.75 9.96097Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2 12C2 8.3109 2 6.46633 2.81382 5.1588C3.1149 4.67505 3.48891 4.2543 3.91891 3.91557C5.08116 3.00003 6.72077 3.00003 10 3.00003H14C17.2792 3.00003 18.9188 3.00003 20.0811 3.91557C20.5111 4.2543 20.8851 4.67505 21.1862 5.1588C22 6.46633 22 8.3109 22 12C22 15.6892 22 17.5337 21.1862 18.8413C20.8851 19.325 20.5111 19.7458 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7458 3.1149 19.325 2.81382 18.8413C2 17.5337 2 15.6892 2 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M14.5 3.00003L14.5 21" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M18 7.00006H19M18 10.0001H19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
