
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

export default function SquareArrowUp02Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M9.5 10.5C9.99153 9.9943 11.2998 8 12 8M14.5 10.5C14.0085 9.9943 12.7002 8 12 8M12 8V16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 16V8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 10.5L12.0004 8L9.5 10.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5C20.6046 2.5 21.5 3.39543 21.5 4.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M4.5 1.75C2.98122 1.75 1.75 2.98122 1.75 4.5V19.5C1.75 21.0188 2.98122 22.25 4.5 22.25H19.5C21.0188 22.25 22.25 21.0188 22.25 19.5V4.5C22.25 2.98122 21.0188 1.75 19.5 1.75H4.5ZM12.0004 7.25C12.1993 7.25002 12.3901 7.32905 12.5307 7.46971L15.0304 9.96971C15.3232 10.2626 15.3232 10.7375 15.0303 11.0304C14.7374 11.3232 14.2625 11.3232 13.9696 11.0303L12.75 9.81048V16.0195C12.75 16.4337 12.4142 16.7695 12 16.7695C11.5858 16.7695 11.25 16.4337 11.25 16.0195V9.81084L10.0303 11.0304C9.73737 11.3232 9.2625 11.3232 8.96963 11.0303C8.67676 10.7374 8.67679 10.2625 8.96971 9.96963L11.4701 7.46963C11.6133 7.32031 11.8281 7.25 12.0004 7.25Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" fill={color}/>
<Path d="M9.5 10.5C9.99153 9.9943 11.2998 8 12 8M14.5 10.5C14.0085 9.9943 12.7002 8 12 8M12 8V16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M9.5 10.5C9.99153 9.9943 11.2998 8 12 8M14.5 10.5C14.0085 9.9943 12.7002 8 12 8M12 8V16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM12 17C12.5523 17 13 16.5523 13 16V11.5H13.162C13.4524 11.5001 13.7597 11.5002 14.0022 11.4712C14.179 11.45 14.8295 11.3702 15.1296 10.7613C15.43 10.1519 15.0851 9.60918 14.9914 9.46263C14.8625 9.26085 14.6695 9.02819 14.4869 8.80808L14.4555 8.77028C14.168 8.42352 13.8257 8.02882 13.4824 7.71482C13.311 7.55802 13.1127 7.39647 12.8974 7.26884C12.6978 7.15052 12.3826 7 12 7C11.6174 7 11.3022 7.15052 11.1026 7.26884C10.8873 7.39647 10.689 7.55802 10.5176 7.71482C10.1743 8.02882 9.83196 8.42352 9.54449 8.77029L9.51315 8.80807C9.33054 9.02819 9.13753 9.26085 9.00859 9.46263C8.91494 9.60918 8.57002 10.1519 8.87038 10.7613C9.1705 11.3702 9.82103 11.45 9.99783 11.4712C10.2403 11.5002 10.5476 11.5001 10.838 11.5H11V16C11 16.5523 11.4477 17 12 17Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z" fill={color}/>
<Path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11.5H10.838C10.5476 11.5001 10.2403 11.5002 9.99783 11.4712C9.82103 11.45 9.1705 11.3702 8.87038 10.7613C8.57002 10.1519 8.91494 9.60918 9.00859 9.46263C9.13753 9.26085 9.33054 9.02819 9.51315 8.80807L9.54449 8.77029C9.83196 8.42352 10.1743 8.02882 10.5176 7.71482C10.689 7.55802 10.8873 7.39647 11.1026 7.26884C11.3022 7.15052 11.6174 7 12 7C12.3826 7 12.6978 7.15052 12.8974 7.26884C13.1127 7.39647 13.311 7.55802 13.4824 7.71482C13.8257 8.02882 14.168 8.42352 14.4555 8.77028L14.4869 8.80808C14.6695 9.02819 14.8625 9.26085 14.9914 9.46263C15.0851 9.60918 15.43 10.1519 15.1296 10.7613C14.8295 11.3702 14.179 11.45 14.0022 11.4712C13.7597 11.5002 13.4524 11.5001 13.162 11.5H13V16Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12.0004 16V8.442M15 11L12.0004 8L9 11" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M21 3V21H3V3H21Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM15.5294 10.4697L11.9991 6.93933L8.46875 10.4697L9.52941 11.5303L11.2491 9.81065V16H12.7491V9.81065L14.4688 11.5303L15.5294 10.4697Z" fill={color}/>
</Svg>
)
}
