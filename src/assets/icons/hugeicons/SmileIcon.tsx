
import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
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

export default function SmileIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.00897 9L8 9M16 9L15.991 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.00897 9L8 9M16 9L15.991 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM7.54964 14.4003C7.88084 14.1516 8.35099 14.2184 8.59974 14.5496C9.37631 15.5836 10.6103 16.25 12 16.25C13.3898 16.25 14.6238 15.5836 15.4003 14.5496C15.6491 14.2184 16.1192 14.1516 16.4505 14.4003C16.7817 14.6491 16.8485 15.1192 16.5997 15.4505C15.5521 16.8454 13.8816 17.75 12 17.75C10.1185 17.75 8.44802 16.8454 7.40035 15.4505C7.1516 15.1192 7.21843 14.6491 7.54964 14.4003ZM8 7.75C7.30964 7.75 6.75 8.30964 6.75 9C6.75 9.69036 7.30964 10.25 8 10.25H8.00897C8.69933 10.25 9.25897 9.69036 9.25897 9C9.25897 8.30964 8.69933 7.75 8.00897 7.75H8ZM15.991 7.75C15.3007 7.75 14.741 8.30964 14.741 9C14.741 9.69036 15.3007 10.25 15.991 10.25H16C16.6904 10.25 17.25 9.69036 17.25 9C17.25 8.30964 16.6904 7.75 16 7.75H15.991Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle opacity="0.4" cx="12" cy="12" r="10" fill={color}/>
<Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.00897 9L8 9M16 9L15.991 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M8.00897 9L8 9M16 9L15.991 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM7.54964 14.4003C7.88084 14.1515 8.35099 14.2184 8.59974 14.5496C9.37631 15.5835 10.6103 16.25 12 16.25C13.3898 16.25 14.6238 15.5835 15.4003 14.5496C15.6491 14.2184 16.1192 14.1515 16.4505 14.4003C16.7817 14.649 16.8485 15.1192 16.5997 15.4504C15.5521 16.8453 13.8816 17.75 12 17.75C10.1185 17.75 8.44802 16.8453 7.40035 15.4504C7.1516 15.1192 7.21843 14.649 7.54964 14.4003ZM8 7.75C7.30964 7.75 6.75 8.30964 6.75 9C6.75 9.69036 7.30964 10.25 8 10.25H8.00897C8.69933 10.25 9.25897 9.69036 9.25897 9C9.25897 8.30964 8.69933 7.75 8.00897 7.75H8ZM15.991 7.75C15.3007 7.75 14.741 8.30964 14.741 9C14.741 9.69036 15.3007 10.25 15.991 10.25H16C16.6904 10.25 17.25 9.69036 17.25 9C17.25 8.30964 16.6904 7.75 16 7.75H15.991Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M7.54964 14.4003C7.88084 14.1515 8.35099 14.2184 8.59974 14.5496C9.37631 15.5835 10.6103 16.25 12 16.25C13.3898 16.25 14.6238 15.5835 15.4003 14.5496C15.6491 14.2184 16.1192 14.1515 16.4505 14.4003C16.7817 14.649 16.8485 15.1192 16.5997 15.4504C15.5521 16.8453 13.8816 17.75 12 17.75C10.1185 17.75 8.44802 16.8453 7.40035 15.4504C7.1516 15.1192 7.21843 14.649 7.54964 14.4003Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M6.75 9C6.75 8.30964 7.30964 7.75 8 7.75L8.00897 7.75C8.69933 7.75 9.25897 8.30964 9.25897 9C9.25897 9.69036 8.69933 10.25 8.00897 10.25L8 10.25C7.30964 10.25 6.75 9.69036 6.75 9ZM14.741 9C14.741 8.30964 15.3007 7.75 15.991 7.75L16 7.75C16.6904 7.75 17.25 8.30964 17.25 9C17.25 9.69036 16.6904 10.25 16 10.25L15.991 10.25C15.3007 10.25 14.741 9.69036 14.741 9Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M8.00897 9L8 9M16 9L15.991 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12.0001 16.2502C13.3899 16.2502 14.6238 15.5838 15.4004 14.5498L16.5998 15.4506C15.5521 16.8455 13.8816 17.7502 12.0001 17.7502C10.1185 17.7502 8.44806 16.8455 7.40039 15.4506L8.59978 14.5498C9.37635 15.5838 10.6103 16.2502 12.0001 16.2502ZM8 7.75C7.30964 7.75 6.75 8.30964 6.75 9C6.75 9.69036 7.30964 10.25 8 10.25H8.00897C8.69933 10.25 9.25897 9.69036 9.25897 9C9.25897 8.30964 8.69933 7.75 8.00897 7.75H8ZM15.991 7.75C15.3007 7.75 14.741 8.30964 14.741 9C14.741 9.69036 15.3007 10.25 15.991 10.25H16C16.6904 10.25 17.25 9.69036 17.25 9C17.25 8.30964 16.6904 7.75 16 7.75H15.991Z" fill={color}/>
</Svg>
)
}
