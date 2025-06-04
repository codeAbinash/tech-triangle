
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

export default function CpuIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M9.5 2V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 2V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.5 20V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 20V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M13 9L9 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15 13L13 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 14.5L20 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 9.5L2 9.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 14.5L2 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 9.5L20 9.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M9 2V4M15 2V4M9 20V22M15 20V22M4 9H2M4 15H2M22 15H20M22 9H20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M13 9L9 13M15 13L13 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M9 1C9.55228 1 10 1.44772 10 2V4C10 4.55228 9.55228 5 9 5C8.44772 5 8 4.55228 8 4V2C8 1.44772 8.44772 1 9 1ZM15 1C15.5523 1 16 1.44772 16 2V4C16 4.55228 15.5523 5 15 5C14.4477 5 14 4.55228 14 4V2C14 1.44772 14.4477 1 15 1ZM1 9C1 8.44772 1.44772 8 2 8H4C4.55228 8 5 8.44772 5 9C5 9.55228 4.55228 10 4 10H2C1.44772 10 1 9.55228 1 9ZM19 9C19 8.44772 19.4477 8 20 8H22C22.5523 8 23 8.44772 23 9C23 9.55228 22.5523 10 22 10H20C19.4477 10 19 9.55228 19 9ZM1 15C1 14.4477 1.44772 14 2 14H4C4.55228 14 5 14.4477 5 15C5 15.5523 4.55228 16 4 16H2C1.44772 16 1 15.5523 1 15ZM19 15C19 14.4477 19.4477 14 20 14H22C22.5523 14 23 14.4477 23 15C23 15.5523 22.5523 16 22 16H20C19.4477 16 19 15.5523 19 15ZM9 19C9.55228 19 10 19.4477 10 20V22C10 22.5523 9.55228 23 9 23C8.44772 23 8 22.5523 8 22V20C8 19.4477 8.44772 19 9 19ZM15 19C15.5523 19 16 19.4477 16 20V22C16 22.5523 15.5523 23 15 23C14.4477 23 14 22.5523 14 22V20C14 19.4477 14.4477 19 15 19Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M6 3.25C4.48122 3.25 3.25 4.48122 3.25 6V18C3.25 19.5188 4.48122 20.75 6 20.75H18C19.5188 20.75 20.75 19.5188 20.75 18V6C20.75 4.48122 19.5188 3.25 18 3.25H6ZM13.7071 9.70711C14.0976 9.31658 14.0976 8.68342 13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289L8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L13.7071 9.70711ZM15.7071 13.7071C16.0976 13.3166 16.0976 12.6834 15.7071 12.2929C15.3166 11.9024 14.6834 11.9024 14.2929 12.2929L12.2929 14.2929C11.9024 14.6834 11.9024 15.3166 12.2929 15.7071C12.6834 16.0976 13.3166 16.0976 13.7071 15.7071L15.7071 13.7071Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z" fill={color}/>
<Path d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M9.5 2V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 2V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.5 20V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 20V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M13 9L9 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15 13L13 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 14.5L20 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 9.5L2 9.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 14.5L2 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 9.5L20 9.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path opacity="0.4" d="M9.5 2V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M14.5 2V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M9.5 20V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M14.5 20V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M13 9L9 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15 13L13 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M22 14.5L20 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M4 9.5L2 9.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M4 14.5L2 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M22 9.5L20 9.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12.0565 3.25H12.0564H12.0564H11.9436H11.9436H11.9435C10.1058 3.24999 8.65019 3.24997 7.51098 3.40314C6.33856 3.56076 5.38961 3.89288 4.64124 4.64124C3.89288 5.38961 3.56076 6.33856 3.40314 7.51098C3.24997 8.65019 3.24999 10.1058 3.25 11.9436V11.9436V11.9436V12.0564V12.0564V12.0565C3.24999 13.8942 3.24997 15.3498 3.40314 16.489C3.56076 17.6614 3.89288 18.6104 4.64124 19.3588C5.38961 20.1071 6.33856 20.4392 7.51098 20.5969C8.65019 20.75 10.1059 20.75 11.9436 20.75H12.0565C13.8942 20.75 15.3498 20.75 16.489 20.5969C17.6614 20.4392 18.6104 20.1071 19.3588 19.3588C20.1071 18.6104 20.4392 17.6614 20.5969 16.489C20.75 15.3498 20.75 13.8942 20.75 12.0564V11.9435C20.75 10.1058 20.75 8.65019 20.5969 7.51098C20.4392 6.33856 20.1071 5.38961 19.3588 4.64124C18.6104 3.89288 17.6614 3.56076 16.489 3.40314C15.3498 3.24997 13.8942 3.24999 12.0565 3.25ZM13.7071 9.70711C14.0976 9.31658 14.0976 8.68342 13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289L8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L13.7071 9.70711ZM15.7071 12.2929C16.0976 12.6834 16.0976 13.3166 15.7071 13.7071L13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071C11.9024 15.3166 11.9024 14.6834 12.2929 14.2929L14.2929 12.2929C14.6834 11.9024 15.3166 11.9024 15.7071 12.2929Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.5 1C10.0523 1 10.5 1.44772 10.5 2V4C10.5 4.55228 10.0523 5 9.5 5C8.94772 5 8.5 4.55228 8.5 4V2C8.5 1.44772 8.94772 1 9.5 1ZM14.5 1C15.0523 1 15.5 1.44772 15.5 2V4C15.5 4.55228 15.0523 5 14.5 5C13.9477 5 13.5 4.55228 13.5 4V2C13.5 1.44772 13.9477 1 14.5 1ZM1 9.5C1 8.94772 1.44772 8.5 2 8.5H4C4.55228 8.5 5 8.94772 5 9.5C5 10.0523 4.55228 10.5 4 10.5H2C1.44772 10.5 1 10.0523 1 9.5ZM19 9.5C19 8.94772 19.4477 8.5 20 8.5H22C22.5523 8.5 23 8.94772 23 9.5C23 10.0523 22.5523 10.5 22 10.5H20C19.4477 10.5 19 10.0523 19 9.5ZM1 14.5C1 13.9477 1.44772 13.5 2 13.5H4C4.55228 13.5 5 13.9477 5 14.5C5 15.0523 4.55228 15.5 4 15.5H2C1.44772 15.5 1 15.0523 1 14.5ZM19 14.5C19 13.9477 19.4477 13.5 20 13.5H22C22.5523 13.5 23 13.9477 23 14.5C23 15.0523 22.5523 15.5 22 15.5H20C19.4477 15.5 19 15.0523 19 14.5ZM9.5 19C10.0523 19 10.5 19.4477 10.5 20V22C10.5 22.5523 10.0523 23 9.5 23C8.94772 23 8.5 22.5523 8.5 22V20C8.5 19.4477 8.94772 19 9.5 19ZM14.5 19C15.0523 19 15.5 19.4477 15.5 20V22C15.5 22.5523 15.0523 23 14.5 23C13.9477 23 13.5 22.5523 13.5 22V20C13.5 19.4477 13.9477 19 14.5 19Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M12.0564 3.25C13.8942 3.24999 15.3498 3.24997 16.489 3.40314C17.6614 3.56076 18.6104 3.89288 19.3588 4.64124C20.1071 5.38961 20.4392 6.33856 20.5969 7.51098C20.75 8.65018 20.75 10.1058 20.75 11.9435V12.0564C20.75 13.8942 20.75 15.3498 20.5969 16.489C20.4392 17.6614 20.1071 18.6104 19.3588 19.3588C18.6104 20.1071 17.6614 20.4392 16.489 20.5969C15.3498 20.75 13.8942 20.75 12.0565 20.75H11.9436C10.1059 20.75 8.65018 20.75 7.51098 20.5969C6.33856 20.4392 5.38961 20.1071 4.64124 19.3588C3.89288 18.6104 3.56076 17.6614 3.40314 16.489C3.24997 15.3498 3.24999 13.8942 3.25 12.0564V12.0564V11.9436V11.9436C3.24999 10.1058 3.24997 8.65019 3.40314 7.51098C3.56076 6.33856 3.89288 5.38961 4.64124 4.64124C5.38961 3.89288 6.33856 3.56076 7.51098 3.40314C8.65019 3.24997 10.1058 3.24999 11.9436 3.25H11.9436H12.0564H12.0564Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289ZM15.7071 13.7071C16.0976 13.3166 16.0976 12.6834 15.7071 12.2929C15.3166 11.9024 14.6834 11.9024 14.2929 12.2929L12.2929 14.2929C11.9024 14.6834 11.9024 15.3166 12.2929 15.7071C12.6834 16.0976 13.3166 16.0976 13.7071 15.7071L15.7071 13.7071Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M10.5 2C10.5 1.44772 10.0523 1 9.5 1C8.94772 1 8.5 1.44772 8.5 2V3.30982C9.09592 3.2727 9.76055 3.25861 10.5 3.25327V2ZM15.5 3.30982C14.9041 3.2727 14.2395 3.25861 13.5 3.25327V2C13.5 1.44772 13.9477 1 14.5 1C15.0523 1 15.5 1.44772 15.5 2V3.30982ZM20.7467 10.5C20.7414 9.76055 20.7273 9.09592 20.6902 8.5H22C22.5523 8.5 23 8.94772 23 9.5C23 10.0523 22.5523 10.5 22 10.5H20.7467ZM20.6902 15.5C20.7273 14.9041 20.7414 14.2394 20.7467 13.5H22C22.5523 13.5 23 13.9477 23 14.5C23 15.0523 22.5523 15.5 22 15.5H20.6902ZM13.5 20.7467C14.2395 20.7414 14.9041 20.7273 15.5 20.6902V22C15.5 22.5523 15.0523 23 14.5 23C13.9477 23 13.5 22.5523 13.5 22V20.7467ZM8.5 20.6902C9.09593 20.7273 9.76055 20.7414 10.5 20.7467V22C10.5 22.5523 10.0523 23 9.5 23C8.94772 23 8.5 22.5523 8.5 22V20.6902ZM3.25327 13.5C3.25861 14.2395 3.2727 14.9041 3.30982 15.5H2C1.44772 15.5 1 15.0523 1 14.5C1 13.9477 1.44772 13.5 2 13.5H3.25327ZM3.30982 8.5C3.2727 9.09592 3.25861 9.76055 3.25327 10.5H2C1.44772 10.5 1 10.0523 1 9.5C1 8.94772 1.44772 8.5 2 8.5H3.30982Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.5 4.5H4.5V19.5H19.5V4.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M9.5 2V4.5M14.5 2V4.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M9.5 19.5V22M14.5 19.5V22" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M13 9L9 13" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M15 13L13 15" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M4.5 9.5H2M4.5 14.5H2" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M22 14.5H19.5M22 9.5L19.5 9.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V4.5ZM8.29297 12.2928L12.293 8.29285L13.7072 9.70706L9.70718 13.7071L8.29297 12.2928ZM14.293 12.2928L12.293 14.2928L13.7072 15.7071L15.7072 13.7071L14.293 12.2928Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8.5 4.5V2H10.5V4.5H8.5ZM13.5 4.5V2H15.5V4.5H13.5ZM2 8.5H4.5V10.5H2V8.5ZM19.5 8.5H22V10.5H19.5V8.5ZM2 13.5H4.5V15.5H2V13.5ZM19.5 13.5H22V15.5H19.5V13.5ZM8.5 22V19.5H10.5V22H8.5ZM13.5 22V19.5H15.5V22H13.5Z" fill={color}/>
</Svg>
)
}
