
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

export default function UserAdd02Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14 8.5C14 5.73858 11.7614 3.5 9 3.5C6.23858 3.5 4 5.73858 4 8.5C4 11.2614 6.23858 13.5 9 13.5C11.7614 13.5 14 11.2614 14 8.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 20.5C16 16.634 12.866 13.5 9 13.5C5.13401 13.5 2 16.634 2 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M19 9V15M22 12L16 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14 8.5C14 5.73858 11.7614 3.5 9 3.5C6.23858 3.5 4 5.73858 4 8.5C4 11.2614 6.23858 13.5 9 13.5C11.7614 13.5 14 11.2614 14 8.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 20.5C16 16.634 12.866 13.5 9 13.5C5.13401 13.5 2 16.634 2 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M19 9V15M22 12L16 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M7.2451 12.9495C3.81022 13.7447 1.25 16.8234 1.25 20.5C1.25 20.9142 1.58579 21.25 2 21.25H16C16.4142 21.25 16.75 20.9142 16.75 20.5C16.75 16.8234 14.1898 13.7447 10.7549 12.9495C12.7914 12.2274 14.25 10.2841 14.25 8C14.25 5.10051 11.8995 2.75 9 2.75C6.1005 2.75 3.75 5.10051 3.75 8C3.75 10.2841 5.20857 12.2274 7.2451 12.9495Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M18.75 8C19.3023 8 19.75 8.44772 19.75 9V11L21.75 11C22.3023 11 22.75 11.4477 22.75 12C22.75 12.5523 22.3023 13 21.75 13H19.75V15C19.75 15.5523 19.3023 16 18.75 16C18.1977 16 17.75 15.5523 17.75 15V13H15.75C15.1977 13 14.75 12.5523 14.75 12C14.75 11.4477 15.1977 11 15.75 11L17.75 11V9C17.75 8.44772 18.1977 8 18.75 8Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M9 3.5C11.7614 3.5 14 5.73858 14 8.5C14 11.2614 11.7614 13.5 9 13.5C12.866 13.5 16 16.634 16 20.5H2C2 16.634 5.13401 13.5 9 13.5C6.23858 13.5 4 11.2614 4 8.5C4 5.73858 6.23858 3.5 9 3.5Z" fill={color}/>
<Path d="M14 8.5C14 5.73858 11.7614 3.5 9 3.5C6.23858 3.5 4 5.73858 4 8.5C4 11.2614 6.23858 13.5 9 13.5C11.7614 13.5 14 11.2614 14 8.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 20.5C16 16.634 12.866 13.5 9 13.5C5.13401 13.5 2 16.634 2 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M19 9V15M22 12L16 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14 8.5C14 5.73858 11.7614 3.5 9 3.5C6.23858 3.5 4 5.73858 4 8.5C4 11.2614 6.23858 13.5 9 13.5C11.7614 13.5 14 11.2614 14 8.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 20.5C16 16.634 12.866 13.5 9 13.5C5.13401 13.5 2 16.634 2 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M19 9V15M22 12L16 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M7.2451 12.9495C3.81022 13.7447 1.25 16.8234 1.25 20.5C1.25 20.9142 1.58579 21.25 2 21.25H16C16.4142 21.25 16.75 20.9142 16.75 20.5C16.75 16.8234 14.1898 13.7447 10.7549 12.9495C12.7914 12.2274 14.25 10.2841 14.25 8C14.25 5.10051 11.8995 2.75 9 2.75C6.1005 2.75 3.75 5.10051 3.75 8C3.75 10.2841 5.20857 12.2274 7.2451 12.9495Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M18.75 8C19.3023 8 19.75 8.44772 19.75 9V11L21.75 11C22.3023 11 22.75 11.4477 22.75 12C22.75 12.5523 22.3023 13 21.75 13H19.75V15C19.75 15.5523 19.3023 16 18.75 16C18.1977 16 17.75 15.5523 17.75 15V13H15.75C15.1977 13 14.75 12.5523 14.75 12C14.75 11.4477 15.1977 11 15.75 11L17.75 11V9C17.75 8.44772 18.1977 8 18.75 8Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M7.2451 12.9495C3.81022 13.7447 1.25 16.8234 1.25 20.5C1.25 20.9142 1.58579 21.25 2 21.25H16C16.4142 21.25 16.75 20.9142 16.75 20.5C16.75 16.8234 14.1898 13.7447 10.7549 12.9495C12.7914 12.2274 14.25 10.2841 14.25 8C14.25 5.10051 11.8995 2.75 9 2.75C6.1005 2.75 3.75 5.10051 3.75 8C3.75 10.2841 5.20857 12.2274 7.2451 12.9495Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M18.75 8C19.3023 8 19.75 8.44772 19.75 9V11L21.75 11C22.3023 11 22.75 11.4477 22.75 12C22.75 12.5523 22.3023 13 21.75 13H19.75V15C19.75 15.5523 19.3023 16 18.75 16C18.1977 16 17.75 15.5523 17.75 15V13H15.75C15.1977 13 14.75 12.5523 14.75 12C14.75 11.4477 15.1977 11 15.75 11L17.75 11V9C17.75 8.44772 18.1977 8 18.75 8Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14 8.5C14 5.73858 11.7614 3.5 9 3.5C6.23858 3.5 4 5.73858 4 8.5C4 11.2614 6.23858 13.5 9 13.5C11.7614 13.5 14 11.2614 14 8.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M16 20.5C16 16.634 12.866 13.5 9 13.5C5.13401 13.5 2 16.634 2 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M19 9V15M22 12L16 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M7.2451 12.9495C3.81022 13.7447 1.25 16.8234 1.25 20.5V21.25H16.75V20.5C16.75 16.8234 14.1898 13.7447 10.7549 12.9495C12.7914 12.2274 14.25 10.2841 14.25 8C14.25 5.10051 11.8995 2.75 9 2.75C6.1005 2.75 3.75 5.10051 3.75 8C3.75 10.2841 5.20857 12.2274 7.2451 12.9495Z" fill={color}/>
<Path d="M19.75 8V11H22.75V13H19.75V16H17.75V13H14.75V11H17.75V8H19.75Z" fill={color}/>
</Svg>
)
}
