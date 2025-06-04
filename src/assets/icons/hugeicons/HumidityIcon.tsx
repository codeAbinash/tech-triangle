
import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { HugeIconProps, Variant, defaultColor, defaultSize, defaultStrokeWidth, defaultVariant } from './constants'

const iconMap: Record<Variant, React.FC<HugeIconProps>> = {
	'stroke-rounded': StrokeRounded,
	'stroke-standard': StrokeStandard,
	'solid-standard': SolidStandard,
	'duotone-rounded': DuotoneRounded,
	'twotone-rounded': TwotoneRounded,
	'solid-rounded': SolidRounded,
	'bulk-rounded': BulkRounded,
	'stroke-sharp': StrokeSharp,
	'solid-sharp': SolidSharp,
}

export default function HumidityIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M4 12.284C5.46463 11.8303 8.39159 11.6836 11.9842 13.7016C15.57 15.7157 18.516 14.9984 20 14.1354" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M20.5 13.5C20.5 18.1944 16.6944 22 12 22C7.30558 22 3.5 18.1944 3.5 13.5C3.5 7.95215 9.69216 3.49703 11.5063 2.31086C11.8101 2.11217 12.1899 2.11217 12.4937 2.31086C14.3078 3.49703 20.5 7.95215 20.5 13.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 12.284C5.46463 11.8303 8.39159 11.6836 11.9842 13.7016C15.57 15.7157 18.516 14.9984 20 14.1354" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M13.041 1.47417C12.4047 1.05809 11.5954 1.05809 10.959 1.47417C10.0182 2.08934 7.93805 3.55333 6.08235 5.59801C4.2436 7.624 2.5 10.3583 2.5 13.5003C2.5 18.747 6.75329 23.0003 12 23.0003C17.2467 23.0003 21.5 18.747 21.5 13.5003C21.5 10.3583 19.7564 7.624 17.9177 5.59801C16.0619 3.55333 13.9818 2.08934 13.041 1.47417ZM7.56334 6.94213C9.22344 5.11298 11.1036 3.77343 12 3.18321C12.8964 3.77343 14.7766 5.11298 16.4367 6.94213C18.1475 8.8272 19.5 11.0944 19.5 13.5003C19.5 13.519 19.4999 13.5378 19.4998 13.5565C18.1831 14.2685 15.5835 14.8633 12.3517 13.048C9.28626 11.3261 6.63436 11.0837 4.85285 11.3332C5.36315 9.73988 6.3771 8.24916 7.56334 6.94213Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M3.61438 12.3557C3.61499 12.3522 3.61561 12.3487 3.61623 12.3452C5.08086 11.8915 8.39158 11.684 11.9842 13.702C15.57 15.7161 19 15.0004 20.5 13.6784C20.5 13.6783 20.5 13.6785 20.5 13.6784C20.5 9.49424 16.9192 5.35907 14.4059 2.97222C13.0409 1.67593 10.9591 1.67593 9.59412 2.97222C7.34628 5.10694 4.24459 8.63983 3.61438 12.3557Z" fill={color}/>
<Path d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M4 12.284C5.46463 11.8303 8.39159 11.6836 11.9842 13.7016C15.57 15.7157 18.516 14.9984 20 14.1354" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z" stroke={color} strokeWidth={strokeWidth}/>
<Path opacity="0.4" d="M4 12.284C5.46463 11.8303 8.39159 11.6836 11.9842 13.7016C15.57 15.7157 18.516 14.9984 20 14.1354" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M15.0131 2.46876C13.3082 0.843746 10.6918 0.843746 8.98694 2.46876C7.73305 3.66394 6.19137 5.31616 4.9572 7.21627C3.73034 9.10512 2.75 11.3266 2.75 13.6399C2.75 18.1253 6.25883 22.75 12 22.75C17.7412 22.75 21.25 18.1253 21.25 13.6399C21.25 11.3266 20.2697 9.10513 19.0428 7.21627C17.8086 5.31616 16.267 3.66394 15.0131 2.46876ZM10.3279 3.88604C11.2812 2.97738 12.7188 2.97738 13.6721 3.88604C14.8654 5.02346 16.2906 6.55795 17.4115 8.28368C18.4849 9.93624 19.2276 11.6852 19.2973 13.3805C18.0238 14.0355 15.5565 14.5611 12.4742 12.8298C9.56427 11.1953 7.00776 10.8671 5.18542 11.0421C5.51852 10.1102 6.0046 9.18269 6.58853 8.28368C7.70944 6.55795 9.13464 5.02346 10.3279 3.88604Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M13.6721 3.88604C12.7188 2.97738 11.2812 2.97738 10.3279 3.88604C9.13464 5.02346 7.70944 6.55795 6.58853 8.28368C5.46031 10.0207 4.69737 11.8641 4.69737 13.6399C4.69737 17.1728 7.45668 20.7955 12 20.7955C16.5433 20.7955 19.3026 17.1728 19.3026 13.6399C19.3026 11.8641 18.5397 10.0207 17.4115 8.28368C16.2906 6.55795 14.8654 5.02346 13.6721 3.88604ZM8.98694 2.46876C10.6918 0.843746 13.3082 0.843746 15.0131 2.46876C16.267 3.66394 17.8086 5.31616 19.0428 7.21627C20.2697 9.10513 21.25 11.3266 21.25 13.6399C21.25 18.1253 17.7412 22.75 12 22.75C6.25883 22.75 2.75 18.1253 2.75 13.6399C2.75 11.3266 3.73034 9.10512 4.9572 7.21627C6.19137 5.31616 7.73305 3.66394 8.98694 2.46876Z" fill={color}/>
<Path opacity="0.4" d="M4.69727 13.6399C4.69727 17.1728 7.45658 20.7955 11.9999 20.7955C16.5432 20.7955 19.3025 17.1728 19.3025 13.6399C19.3025 13.5535 19.3007 13.467 19.2972 13.3803C18.0237 14.0353 15.5563 14.5611 12.4738 12.8297C9.56406 11.1953 7.00767 10.8671 5.18535 11.042C4.87485 11.9107 4.69727 12.7832 4.69727 13.6399Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M20.5 13.5C20.5 18.1944 16.6944 22 12 22C7.30558 22 3.5 18.1944 3.5 13.5C3.5 7 12 2 12 2C12 2 20.5 7 20.5 13.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M4 12.284C5.46463 11.8303 8.39159 11.6836 11.9842 13.7016C15.57 15.7157 18.516 14.9984 20 14.1354" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M13.8599 2.44314C13.4572 2.156 12 1.24997 12 1.24997C12 1.24997 10.5428 2.156 10.1401 2.44314C9.33662 3.01616 8.26207 3.85028 7.1837 4.8932C5.06738 6.93994 2.75 9.9706 2.75 13.533C2.75 18.6234 6.89137 22.75 12 22.75C17.1086 22.75 21.25 18.6234 21.25 13.533C21.25 9.9706 18.9326 6.93994 16.8163 4.8932C15.7379 3.85028 14.6634 3.01616 13.8599 2.44314ZM11.2727 4.02119C11.5561 3.81906 11.8029 3.65216 11.9992 3.52341C12.1954 3.65216 12.4423 3.81906 12.7257 4.02119C13.474 4.55481 14.4685 5.3276 15.4592 6.28573C17.481 8.2411 19.3018 10.7891 19.3018 13.5331C17.9326 14.1953 15.4276 14.7761 12.3507 13.0478C9.41463 11.3986 6.85794 11.1067 5.08203 11.3041C5.7218 9.4216 7.07798 7.69889 8.53918 6.28573C9.52988 5.3276 10.5244 4.55481 11.2727 4.02119Z" fill={color}/>
</Svg>
)
}
