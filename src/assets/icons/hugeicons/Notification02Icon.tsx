
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

export default function Notification02Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21 17.5H3C4.50991 16.896 5.5 15.4336 5.5 13.8074V9C5.5 5.41015 8.41015 2.5 12 2.5C15.5899 2.5 18.5 5.41015 18.5 9V13.8074C18.5 15.4336 19.4901 16.896 21 17.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 20.5C13.8557 21.1186 12.9733 21.5 12 21.5C11.0267 21.5 10.1443 21.1186 9.5 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21 17.5H3C4.50991 16.896 5.5 15.4336 5.5 13.8074V9C5.5 5.41015 8.41015 2.5 12 2.5C15.5899 2.5 18.5 5.41015 18.5 9V13.8074C18.5 15.4336 19.4901 16.896 21 17.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 20.5C13.8557 21.1186 12.9733 21.5 12 21.5C11.0267 21.5 10.1443 21.1186 9.5 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M4.75001 9C4.75001 4.99594 7.99595 1.75 12 1.75C16.0041 1.75 19.25 4.99594 19.25 9V14.3074C19.25 15.627 20.0534 16.8136 21.2786 17.3036C21.6124 17.4372 21.8045 17.7888 21.7365 18.1418C21.6685 18.4949 21.3595 18.75 21 18.75H3.00001C2.64049 18.75 2.33153 18.4949 2.26355 18.1418C2.19556 17.7888 2.38766 17.4372 2.72147 17.3036C3.94664 16.8136 4.75001 15.627 4.75001 14.3074V9Z" fill={color}/>
<Path d="M8.21747 20C8.93994 21.3413 10.3653 22.25 12 22.25C13.6347 22.25 15.0601 21.3413 15.7825 20H8.21747Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M21 17.5H3C4.50991 16.896 5.5 15.4336 5.5 13.8074V9C5.5 5.41015 8.41015 2.5 12 2.5C15.5899 2.5 18.5 5.41015 18.5 9V13.8074C18.5 15.4336 19.4901 16.896 21 17.5Z" fill={color}/>
<Path d="M21 17.5H3C4.50991 16.896 5.5 15.4336 5.5 13.8074V9C5.5 5.41015 8.41015 2.5 12 2.5C15.5899 2.5 18.5 5.41015 18.5 9V13.8074C18.5 15.4336 19.4901 16.896 21 17.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 20.5C13.8557 21.1186 12.9733 21.5 12 21.5C11.0267 21.5 10.1443 21.1186 9.5 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M21 17.5H3C4.50991 16.896 5.5 15.4336 5.5 13.8074V9C5.5 5.41015 8.41015 2.5 12 2.5C15.5899 2.5 18.5 5.41015 18.5 9V13.8074C18.5 15.4336 19.4901 16.896 21 17.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 20.5C13.8557 21.1186 12.9733 21.5 12 21.5C11.0267 21.5 10.1443 21.1186 9.5 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M4.75 9C4.75 4.99594 7.99593 1.75 12 1.75C16.0041 1.75 19.25 4.99594 19.25 9V14.3074C19.25 15.627 20.0534 16.8136 21.2785 17.3036C21.6124 17.4372 21.8045 17.7888 21.7365 18.1418C21.6685 18.4949 21.3595 18.75 21 18.75H3C2.64047 18.75 2.33152 18.4949 2.26353 18.1418C2.19554 17.7888 2.38764 17.4372 2.72145 17.3036C3.94662 16.8136 4.75 15.627 4.75 14.3074V9Z" fill={color}/>
<Path d="M8.21744 20C8.93991 21.3413 10.3652 22.25 12 22.25C13.6347 22.25 15.06 21.3413 15.7825 20H8.21744Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M4.75 9C4.75 4.99594 7.99593 1.75 12 1.75C16.0041 1.75 19.25 4.99594 19.25 9V14.3074C19.25 15.627 20.0534 16.8136 21.2785 17.3036C21.6124 17.4372 21.8045 17.7888 21.7365 18.1418C21.6685 18.4949 21.3595 18.75 21 18.75H3C2.64047 18.75 2.33152 18.4949 2.26353 18.1418C2.19554 17.7888 2.38764 17.4372 2.72145 17.3036C3.94662 16.8136 4.75 15.627 4.75 14.3074V9Z" fill={color}/>
<Path d="M8.21744 20C8.93991 21.3413 10.3652 22.25 12 22.25C13.6347 22.25 15.06 21.3413 15.7825 20H8.21744Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21 17.5H3C4.5 17.5 5.5 15.4336 5.5 13.8074V9C5.5 5.41015 8.41015 2.5 12 2.5C15.5899 2.5 18.5 5.41015 18.5 9V13.8074C18.5 15.4336 20 17.5 21 17.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M14.5 20.5C13.8557 21.1186 12.9733 21.5 12 21.5C11.0267 21.5 10.1443 21.1186 9.5 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M20.6485 17.0601C20.7518 17.1406 21 17.25 21 17.25V18.75H3V17.25C3.3734 17.25 3.79749 16.9896 4.17158 16.374C4.53643 15.7737 4.75 14.9857 4.75 14.3074V9C4.75 4.99594 7.99594 1.75 12 1.75C16.0041 1.75 19.25 4.99594 19.25 9V14.3074C19.25 14.9187 19.5455 15.6942 19.991 16.3357C20.2087 16.6491 20.4402 16.8978 20.6485 17.0601Z" fill={color}/>
<Path d="M8.21729 20C8.93976 21.3413 10.3651 22.25 11.9998 22.25C13.6346 22.25 15.0599 21.3413 15.7823 20H8.21729Z" fill={color}/>
</Svg>
)
}
