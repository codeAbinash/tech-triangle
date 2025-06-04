
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

export default function FahrenheitIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="5" cy="6" r="2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21 4H18C15.1716 4 13.7574 4 12.8787 4.87868C12 5.75736 12 7.17157 12 10V20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 12H19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="5" cy="6" r="2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21 4H12V20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 12H19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7C5.55228 7 6 6.55228 6 6C6 5.44772 5.55228 5 5 5ZM2 6C2 4.34315 3.34315 3 5 3C6.65685 3 8 4.34315 8 6C8 7.65685 6.65685 9 5 9C3.34315 9 2 7.65685 2 6Z" fill={color}/>
<Path d="M12 3C11.4477 3 11 3.44772 11 4V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5H21C21.5523 5 22 4.55228 22 4C22 3.44772 21.5523 3 21 3H12Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle opacity="0.4" cx="5" cy="6" r="2" fill={color}/>
<Circle cx="5" cy="6" r="2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21 4H18C15.1716 4 13.7574 4 12.8787 4.87868C12 5.75736 12 7.17157 12 10V20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 12H19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle opacity="0.4" cx="5" cy="6" r="2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21 4H18C15.1716 4 13.7574 4 12.8787 4.87868C12 5.75736 12 7.17157 12 10V20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 12H19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5.5 5C4.94772 5 4.5 5.44772 4.5 6C4.5 6.55228 4.94772 7 5.5 7C6.05228 7 6.5 6.55228 6.5 6C6.5 5.44772 6.05228 5 5.5 5ZM2.5 6C2.5 4.34315 3.84315 3 5.5 3C7.15685 3 8.5 4.34315 8.5 6C8.5 7.65685 7.15685 9 5.5 9C3.84315 9 2.5 7.65685 2.5 6Z" fill={color}/>
<Path d="M20.5 3L17.4294 3C16.0753 2.99997 14.9587 2.99994 14.0749 3.11875C13.1471 3.2435 12.3277 3.51547 11.6716 4.17158C11.0155 4.82768 10.7435 5.64711 10.6188 6.57494C10.4999 7.45869 10.5 8.57529 10.5 9.92939L10.5 11.999C10.5 11.9993 10.5 11.9997 10.5 12C10.5 12.0003 10.5 12.0007 10.5 12.001L10.5 20C10.5 20.5523 10.9477 21 11.5 21C12.0523 21 12.5 20.5523 12.5 20V13H18.5C19.0523 13 19.5 12.5523 19.5 12C19.5 11.4477 19.0523 11 18.5 11H12.5V10C12.5 8.55752 12.5021 7.57625 12.6009 6.84143C12.6958 6.13538 12.8632 5.80836 13.0858 5.58579C13.3084 5.36322 13.6354 5.19585 14.3414 5.10092C15.0763 5.00213 16.0575 5 17.5 5H20.5C21.0523 5 21.5 4.55229 21.5 4C21.5 3.44772 21.0523 3 20.5 3Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5.5 5C4.94772 5 4.5 5.44772 4.5 6C4.5 6.55228 4.94772 7 5.5 7C6.05228 7 6.5 6.55228 6.5 6C6.5 5.44772 6.05228 5 5.5 5ZM2.5 6C2.5 4.34315 3.84315 3 5.5 3C7.15685 3 8.5 4.34315 8.5 6C8.5 7.65685 7.15685 9 5.5 9C3.84315 9 2.5 7.65685 2.5 6Z" fill={color}/>
<Path opacity="0.4" d="M20.5 3L17.4294 3C16.0753 2.99997 14.9587 2.99994 14.0749 3.11875C13.1471 3.2435 12.3277 3.51547 11.6716 4.17158C11.0155 4.82768 10.7435 5.64711 10.6188 6.57494C10.4999 7.45869 10.5 8.57529 10.5 9.92939L10.5 11.999C10.5 11.9993 10.5 11.9997 10.5 12C10.5 12.0003 10.5 12.0007 10.5 12.001L10.5 20C10.5 20.5523 10.9477 21 11.5 21C12.0523 21 12.5 20.5523 12.5 20V13H18.5C19.0523 13 19.5 12.5523 19.5 12C19.5 11.4477 19.0523 11 18.5 11H12.5V10C12.5 8.55752 12.5021 7.57625 12.6009 6.84143C12.6958 6.13538 12.8632 5.80836 13.0858 5.58579C13.3084 5.36322 13.6354 5.19585 14.3414 5.10092C15.0763 5.00213 16.0575 5 17.5 5H20.5C21.0523 5 21.5 4.55229 21.5 4C21.5 3.44772 21.0523 3 20.5 3Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="5" cy="6" r="2" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M21 4H12V20" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12 12H19" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5ZM3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6Z" fill={color}/>
<Path d="M21 3H11V21H13V13H19V11H13V5H21V3Z" fill={color}/>
</Svg>
)
}
