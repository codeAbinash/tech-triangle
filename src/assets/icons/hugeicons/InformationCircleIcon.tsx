
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

export default function InformationCircleIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.992 8H12.001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M12.5 16.5V12.1C12.5 11.5815 12.5 11.3222 12.3536 11.1611C12.2071 11 11.9714 11 11.5 11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 8H12.0001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.937 1.25 22.75 6.06293 22.75 12C22.75 17.937 17.937 22.75 12 22.75C6.06293 22.75 1.25 17.937 1.25 12ZM12.1949 10.0309C12.4605 10.0702 12.8087 10.1752 13.0935 10.4884C13.3659 10.7881 13.4444 11.1308 13.4743 11.3752C13.5002 11.5871 13.5001 11.8365 13.5 12.0602L13.5 12.1V16.5C13.5 17.0523 13.0523 17.5 12.5 17.5C11.9477 17.5 11.5 17.0523 11.5 16.5V12.1L11.5 12C10.9477 12 10.5 11.5523 10.5 11C10.5 10.4477 10.9477 10 11.5 10L11.5408 9.99999H11.5408C11.739 9.99983 11.9835 9.99964 12.1949 10.0309ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9H12.0001C12.5524 9 13.0001 8.55228 13.0001 8C13.0001 7.44772 12.5524 7 12.0001 7H12Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill={color}/>
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.992 8H12.001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path opacity="0.4" d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M11.992 8H12.001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12ZM11.6819 11.0273C11.9289 11.0605 12.2707 11.1494 12.5607 11.4394C12.8507 11.7294 12.9396 12.0711 12.9728 12.3182C13.0003 12.5228 13.0001 12.7608 13 12.9606L13 13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L11.0394 11C11.2393 10.9999 11.4772 10.9997 11.6819 11.0273ZM11.9954 7C11.4456 7 10.9999 7.44772 10.9999 8C10.9999 8.55228 11.4456 9 11.9954 9H12.0044C12.5542 9 12.9999 8.55228 12.9999 8C12.9999 7.44772 12.5542 7 12.0044 7H11.9954Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M11.6819 11.0273C11.9289 11.0605 12.2707 11.1494 12.5607 11.4394C12.8507 11.7294 12.9396 12.0711 12.9728 12.3182C13.0003 12.5228 13.0001 12.7608 13 12.9606C13 12.974 13 12.9871 13 13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11C11.0129 11 11.0261 11 11.0394 11C11.2393 10.9999 11.4772 10.9997 11.6819 11.0273Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M10.9999 8C10.9999 7.44772 11.4456 7 11.9954 7H12.0044C12.5542 7 12.9999 7.44772 12.9999 8C12.9999 8.55228 12.5542 9 12.0044 9H11.9954C11.4456 9 10.9999 8.55228 10.9999 8Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M10.0239 10.0107H12.0048V16.9917M11.2514 7.26758H12.7509" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM11 6.5V8H13V6.5H11ZM10 11H11V17H13V9H10V11Z" fill={color}/>
</Svg>
)
}
