
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

export default function Road02Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M20.8284 5.17157C19.6569 4 17.7712 4 14 4L10 4C6.22877 4 4.34315 4 3.17157 5.17157M20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284M20.8284 5.17157C20.8284 5.17157 20.8284 5.17157 20.8284 5.17157ZM3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284M3.17157 5.17157C3.17157 5.17157 3.17157 5.17157 3.17157 5.17157ZM3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284M3.17157 18.8284C3.17157 18.8284 3.17157 18.8284 3.17157 18.8284ZM20.8284 18.8284C20.8284 18.8284 20.8284 18.8284 20.8284 18.8284Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M13 12L11 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18.5 12L16.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.5 12L5.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M4 4C2.89543 4 2 4.89543 2 6L2 18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4L4 4Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M13 12H11M18.5 12H16.5M7.5 12H5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M4 3.25C2.48122 3.25 1.25 4.48122 1.25 6V18C1.25 19.5188 2.48122 20.75 4 20.75H20C21.5188 20.75 22.75 19.5188 22.75 18V6C22.75 4.48122 21.5188 3.25 20 3.25H4ZM5.5 11C4.94772 11 4.5 11.4477 4.5 12C4.5 12.5523 4.94772 13 5.5 13H7.5C8.05228 13 8.5 12.5523 8.5 12C8.5 11.4477 8.05228 11 7.5 11H5.5ZM11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H11ZM16.5 11C15.9477 11 15.5 11.4477 15.5 12C15.5 12.5523 15.9477 13 16.5 13H18.5C19.0523 13 19.5 12.5523 19.5 12C19.5 11.4477 19.0523 11 18.5 11H16.5Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C3.17157 18.8284 3.17157 18.8284 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C3.17157 5.17157 3.17157 5.17157 3.17157 5.17157C4.34315 4 6.22877 4 10 4L14 4C17.7712 4 19.6569 4 20.8284 5.17157C20.8284 5.17157 20.8284 5.17157 20.8284 5.17157C22 6.34315 22 8.22876 22 12Z" fill={color}/>
<Path d="M20.8284 5.17157C19.6569 4 17.7712 4 14 4L10 4C6.22877 4 4.34315 4 3.17157 5.17157M20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284M20.8284 5.17157C20.8284 5.17157 20.8284 5.17157 20.8284 5.17157ZM3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284M3.17157 5.17157C3.17157 5.17157 3.17157 5.17157 3.17157 5.17157ZM3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284M3.17157 18.8284C3.17157 18.8284 3.17157 18.8284 3.17157 18.8284ZM20.8284 18.8284C20.8284 18.8284 20.8284 18.8284 20.8284 18.8284Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M13 12L11 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18.5 12L16.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.5 12L5.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M20.8284 5.17157C19.6569 4 17.7712 4 14 4L10 4C6.22877 4 4.34315 4 3.17157 5.17157M20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284M20.8284 5.17157C20.8284 5.17157 20.8284 5.17157 20.8284 5.17157ZM3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284M3.17157 5.17157C3.17157 5.17157 3.17157 5.17157 3.17157 5.17157ZM3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284M3.17157 18.8284C3.17157 18.8284 3.17157 18.8284 3.17157 18.8284ZM20.8284 18.8284C20.8284 18.8284 20.8284 18.8284 20.8284 18.8284Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path opacity="0.4" d="M13 12L11 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M18.5 12L16.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M7.5 12L5.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5.51098 20.5969C6.65018 20.75 8.1058 20.75 9.94354 20.75H9.94359H14.0564H14.0565C15.8942 20.75 17.3498 20.75 18.489 20.5969C19.6614 20.4392 20.6104 20.1071 21.3588 19.3588C22.1071 18.6104 22.4392 17.6614 22.5969 16.489C22.75 15.3498 22.75 13.8942 22.75 12.0565V12.0564V11.9436V11.9435C22.75 10.1058 22.75 8.65018 22.5969 7.51098C22.4392 6.33856 22.1071 5.38961 21.3588 4.64124C20.6104 3.89288 19.6614 3.56076 18.489 3.40314C17.3498 3.24997 15.8942 3.24999 14.0564 3.25H14.0564H9.94359H9.94358C8.10582 3.24998 6.65019 3.24997 5.51098 3.40314C4.33856 3.56076 3.38961 3.89288 2.64124 4.64124C1.89288 5.38961 1.56076 6.33856 1.40314 7.51098C1.24997 8.65019 1.24998 10.1058 1.25 11.9436V11.9436V12.0564V12.0564C1.24998 13.8942 1.24997 15.3498 1.40314 16.489C1.56076 17.6614 1.89288 18.6104 2.64124 19.3588C3.38961 20.1071 4.33856 20.4392 5.51098 20.5969ZM5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H7C7.55229 13 8 12.5523 8 12C8 11.4477 7.55229 11 7 11H5ZM17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H17ZM13 11H11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M9.94354 20.75C8.1058 20.75 6.65018 20.75 5.51098 20.5969C4.33855 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V12.0564V11.9436V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25H9.94359H14.0564H14.0564C15.8942 3.24999 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65018 22.75 10.1058 22.75 11.9435V11.9436V12.0564V12.0565C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0565 20.75H14.0564H9.94359H9.94354Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11L7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13H5C4.44772 13 4 12.5523 4 12ZM16 12C16 11.4477 16.4477 11 17 11L19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H17C16.4477 13 16 12.5523 16 12ZM11 11L13 11C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2 4L2 20H22V4L2 4Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M13.5 12L10.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M19 12L16 12" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M8 12L5 12" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M2 3.25C1.80109 3.25 1.61032 3.32902 1.46967 3.46967C1.32902 3.61032 1.25 3.80109 1.25 4V20C1.25 20.1989 1.32902 20.3897 1.46967 20.5303C1.61032 20.671 1.80109 20.75 2 20.75H22C22.4142 20.75 22.75 20.4142 22.75 20V4C22.75 3.58579 22.4142 3.25 22 3.25H2ZM8 11H5V13H8V11ZM10.5 11H13.5V13H10.5V11ZM19 11H16V13H19V11Z" fill={color}/>
</Svg>
)
}
