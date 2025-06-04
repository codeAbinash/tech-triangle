
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

export default function DashboardSpeed02Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="12" cy="18" r="3" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12 15V10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="12" cy="18" r="3" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12 15V10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M13 10.5C13 9.94772 12.5523 9.5 12 9.5C11.4477 9.5 11 9.94772 11 10.5V15.6707C9.83481 16.0825 9 17.1938 9 18.5C9 20.1569 10.3431 21.5 12 21.5C13.6569 21.5 15 20.1569 15 18.5C15 17.1938 14.1652 16.0825 13 15.6707V10.5Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 4.5C7.02944 4.5 3 8.52944 3 13.5C3 14.0523 2.55228 14.5 2 14.5C1.44772 14.5 1 14.0523 1 13.5C1 7.42487 5.92487 2.5 12 2.5C18.0751 2.5 23 7.42487 23 13.5C23 14.0523 22.5523 14.5 22 14.5C21.4477 14.5 21 14.0523 21 13.5C21 8.52944 16.9706 4.5 12 4.5Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle opacity="0.4" cx="12" cy="18" r="3" fill={color}/>
<Circle cx="12" cy="18" r="3" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12 15V10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M12 15C10.3431 15 9 16.3431 9 18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18C15 16.3431 13.6569 15 12 15ZM12 15V10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V15.1707C9.83481 15.5825 9 16.6938 9 18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18C15 16.6938 14.1652 15.5825 13 15.1707V10Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 5C7.58172 5 4 8.58172 4 13C4 13.5523 3.55228 14 3 14C2.44772 14 2 13.5523 2 13C2 7.47715 6.47715 3 12 3C17.5228 3 22 7.47715 22 13C22 13.5523 21.5523 14 21 14C20.4477 14 20 13.5523 20 13C20 8.58172 16.4183 5 12 5Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V15.1707C9.83481 15.5825 9 16.6938 9 18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18C15 16.6938 14.1652 15.5825 13 15.1707V10Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 5C7.58172 5 4 8.58172 4 13C4 13.5523 3.55228 14 3 14C2.44772 14 2 13.5523 2 13C2 7.47715 6.47715 3 12 3C17.5228 3 22 7.47715 22 13C22 13.5523 21.5523 14 21 14C20.4477 14 20 13.5523 20 13C20 8.58172 16.4183 5 12 5Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="12" cy="17" r="3" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12 14V8" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M22 14C22 8.47715 17.5228 4 12 4C6.47715 4 2 8.47715 2 14" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M8.25 17C8.25 14.9289 9.92893 13.25 12 13.25C14.0711 13.25 15.75 14.9289 15.75 17C15.75 19.0711 14.0711 20.75 12 20.75C9.92893 20.75 8.25 19.0711 8.25 17Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M13 8V14H11V8H13Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 5.20455C7.1424 5.20455 3.20455 9.1424 3.20455 14H1.25C1.25 8.06294 6.06294 3.25 12 3.25C17.9371 3.25 22.75 8.06294 22.75 14H20.7955C20.7955 9.1424 16.8576 5.20455 12 5.20455Z" fill={color}/>
</Svg>
)
}
