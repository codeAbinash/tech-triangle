
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

export default function UserIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M6.75 8C6.75 5.1005 9.1005 2.75 12 2.75C14.8995 2.75 17.25 5.1005 17.25 8C17.25 10.8995 14.8995 13.25 12 13.25C9.1005 13.25 6.75 10.8995 6.75 8Z" fill={color}/>
<Path d="M4.25 20.5C4.25 16.2198 7.71979 12.75 12 12.75C16.2802 12.75 19.75 16.2198 19.75 20.5C19.75 20.9142 19.4142 21.25 19 21.25H5C4.58579 21.25 4.25 20.9142 4.25 20.5Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M12 3.5C14.7614 3.5 17 5.73858 17 8.5C17 11.2614 14.7614 13.5 12 13.5C15.866 13.5 19 16.634 19 20.5H5C5 16.634 8.13401 13.5 12 13.5C9.23858 13.5 7 11.2614 7 8.5C7 5.73858 9.23858 3.5 12 3.5Z" fill={color}/>
<Path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M6.75 8C6.75 5.1005 9.1005 2.75 12 2.75C14.8995 2.75 17.25 5.1005 17.25 8C17.25 10.8995 14.8995 13.25 12 13.25C9.1005 13.25 6.75 10.8995 6.75 8Z" fill={color}/>
<Path d="M4.25 20.5C4.25 16.2198 7.71979 12.75 12 12.75C16.2802 12.75 19.75 16.2198 19.75 20.5C19.75 20.9142 19.4142 21.25 19 21.25H5C4.58579 21.25 4.25 20.9142 4.25 20.5Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M6.75 8C6.75 5.1005 9.1005 2.75 12 2.75C14.8995 2.75 17.25 5.1005 17.25 8C17.25 10.8995 14.8995 13.25 12 13.25C9.1005 13.25 6.75 10.8995 6.75 8Z" fill={color}/>
<Path opacity="0.4" d="M4.25 20.5C4.25 16.2198 7.71979 12.75 12 12.75C16.2802 12.75 19.75 16.2198 19.75 20.5C19.75 20.9142 19.4142 21.25 19 21.25H5C4.58579 21.25 4.25 20.9142 4.25 20.5Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M4.25 20.5C4.25 16.2198 7.71979 12.75 12 12.75C16.2802 12.75 19.75 16.2198 19.75 20.5V21.25H4.25V20.5Z" fill={color}/>
<Path d="M6.75 8C6.75 5.1005 9.1005 2.75 12 2.75C14.8995 2.75 17.25 5.1005 17.25 8C17.25 10.8995 14.8995 13.25 12 13.25C9.1005 13.25 6.75 10.8995 6.75 8Z" fill={color}/>
</Svg>
)
}
