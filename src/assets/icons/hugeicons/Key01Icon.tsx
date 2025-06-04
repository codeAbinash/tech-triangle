
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

export default function Key01Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15.5 14.5C18.8137 14.5 21.5 11.8137 21.5 8.5C21.5 5.18629 18.8137 2.5 15.5 2.5C12.1863 2.5 9.5 5.18629 9.5 8.5C9.5 9.38041 9.68962 10.2165 10.0303 10.9697L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.0303 13.9697C13.7835 14.3104 14.6196 14.5 15.5 14.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17.5 6.5L16.5 7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15.5 14.5C18.8137 14.5 21.5 11.8137 21.5 8.5C21.5 5.18629 18.8137 2.5 15.5 2.5C12.1863 2.5 9.5 5.18629 9.5 8.5C9.5 9.38041 9.68962 10.2165 10.0303 10.9697L3.08579 17.9142C2.71071 18.2893 2.5 18.798 2.5 19.3284V21.5H5.5V19.5H7.5V17.5H9.5L13.0303 13.9697C13.7835 14.3104 14.6196 14.5 15.5 14.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17.5 6.5L16.5 7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M15.5 1.75C11.7721 1.75 8.75 4.77208 8.75 8.5C8.75 9.30306 8.89055 10.0746 9.14879 10.7906L2.55546 17.3839C2.03973 17.8996 1.75 18.5991 1.75 19.3284V21.5C1.75 21.9142 2.08579 22.25 2.5 22.25H5.5C5.91421 22.25 6.25 21.9142 6.25 21.5V20.25H7.5C7.91421 20.25 8.25 19.9142 8.25 19.5V18.25H9.5C9.69891 18.25 9.88968 18.171 10.0303 18.0303L13.2094 14.8512C13.9254 15.1094 14.6969 15.25 15.5 15.25C19.2279 15.25 22.25 12.2279 22.25 8.5C22.25 4.77208 19.2279 1.75 15.5 1.75ZM18.0303 7.03033C18.3232 6.73744 18.3232 6.26256 18.0303 5.96967C17.7374 5.67678 17.2626 5.67678 16.9697 5.96967L15.9697 6.96967C15.6768 7.26256 15.6768 7.73744 15.9697 8.03033C16.2626 8.32322 16.7374 8.32322 17.0303 8.03033L18.0303 7.03033Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M15.5 14.5C18.8137 14.5 21.5 11.8137 21.5 8.5C21.5 5.18629 18.8137 2.5 15.5 2.5C12.1863 2.5 9.5 5.18629 9.5 8.5C9.5 9.38041 9.68962 10.2165 10.0303 10.9697L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.0303 13.9697C13.7835 14.3104 14.6196 14.5 15.5 14.5Z" fill={color}/>
<Path d="M15.5 14.5C18.8137 14.5 21.5 11.8137 21.5 8.5C21.5 5.18629 18.8137 2.5 15.5 2.5C12.1863 2.5 9.5 5.18629 9.5 8.5C9.5 9.38041 9.68962 10.2165 10.0303 10.9697L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.0303 13.9697C13.7835 14.3104 14.6196 14.5 15.5 14.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17.5 6.5L16.5 7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15.5 14.5C18.8137 14.5 21.5 11.8137 21.5 8.5C21.5 5.18629 18.8137 2.5 15.5 2.5C12.1863 2.5 9.5 5.18629 9.5 8.5C9.5 9.38041 9.68962 10.2165 10.0303 10.9697L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.0303 13.9697C13.7835 14.3104 14.6196 14.5 15.5 14.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M17.5 6.5L16.5 7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M15.5 1.75C11.7721 1.75 8.75 4.77208 8.75 8.5C8.75 9.30306 8.89055 10.0746 9.14879 10.7906L1.96967 17.9697C1.82902 18.1103 1.75 18.3011 1.75 18.5V21.5C1.75 21.9142 2.08579 22.25 2.5 22.25H5.5C5.91421 22.25 6.25 21.9142 6.25 21.5V19.75H8C8.41421 19.75 8.75 19.4142 8.75 19V17.25H10.5C10.6989 17.25 10.8897 17.171 11.0303 17.0303L13.2094 14.8512C13.9254 15.1094 14.6969 15.25 15.5 15.25C19.2279 15.25 22.25 12.2279 22.25 8.5C22.25 4.77208 19.2279 1.75 15.5 1.75ZM18.0303 7.03033C18.3232 6.73744 18.3232 6.26256 18.0303 5.96967C17.7374 5.67678 17.2626 5.67678 16.9697 5.96967L15.9697 6.96967C15.6768 7.26256 15.6768 7.73744 15.9697 8.03033C16.2626 8.32322 16.7374 8.32322 17.0303 8.03033L18.0303 7.03033Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M8.75 8.5C8.75 4.77208 11.7721 1.75 15.5 1.75C19.2279 1.75 22.25 4.77208 22.25 8.5C22.25 12.2279 19.2279 15.25 15.5 15.25C14.6969 15.25 13.9254 15.1094 13.2094 14.8512L11.0303 17.0303C10.8897 17.171 10.6989 17.25 10.5 17.25H8.75V19C8.75 19.4142 8.41421 19.75 8 19.75H6.25V21.5C6.25 21.9142 5.91421 22.25 5.5 22.25H2.5C2.08579 22.25 1.75 21.9142 1.75 21.5V18.5C1.75 18.3011 1.82902 18.1103 1.96967 17.9697L9.14879 10.7906C8.89055 10.0746 8.75 9.30306 8.75 8.5Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M18.0303 5.96967C18.3232 6.26256 18.3232 6.73744 18.0303 7.03033L17.0303 8.03033C16.7374 8.32322 16.2626 8.32322 15.9697 8.03033C15.6768 7.73744 15.6768 7.26256 15.9697 6.96967L16.9697 5.96967C17.2626 5.67678 17.7374 5.67678 18.0303 5.96967Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15.5 14.5C18.8137 14.5 21.5 11.8137 21.5 8.5C21.5 5.18629 18.8137 2.5 15.5 2.5C12.1863 2.5 9.5 5.18629 9.5 8.5C9.5 9.38041 9.68962 10.2165 10.0303 10.9697L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.0303 13.9697C13.7835 14.3104 14.6196 14.5 15.5 14.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M17.5 6.5L16.5 7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M15.5 1.75C11.7721 1.75 8.75 4.77208 8.75 8.5C8.75 9.30306 8.89055 10.0746 9.14879 10.7906L1.75 18.1893V22.25H6.25V19.75H8.75V17.25H10.8107L13.2094 14.8512C13.9254 15.1094 14.6969 15.25 15.5 15.25C19.2279 15.25 22.25 12.2279 22.25 8.5C22.25 4.77208 19.2279 1.75 15.5 1.75ZM16.5001 8.56077L18.5608 6.50011L17.5001 5.43945L15.4395 7.50011L16.5001 8.56077Z" fill={color}/>
</Svg>
)
}
