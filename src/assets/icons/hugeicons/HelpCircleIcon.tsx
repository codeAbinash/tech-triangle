
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

export default function HelpCircleIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M11.992 17H12.001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 16.5H12.009H12Z" fill={color}/>
<Path d="M12 16.5H12.009" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5C14 9.89815 13.8837 10.2691 13.6831 10.5808C13.0854 11.5097 12 12.3954 12 13.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11 16.5C11 15.9477 11.4477 15.5 12 15.5H12.009C12.5613 15.5 13.009 15.9477 13.009 16.5C13.009 17.0523 12.5613 17.5 12.009 17.5H12C11.4477 17.5 11 17.0523 11 16.5ZM11 9.5C11 8.94772 11.4477 8.5 12 8.5C12.5523 8.5 13 8.94772 13 9.5C13 9.70057 12.942 9.88454 12.8422 10.0397C12.7241 10.2232 12.5739 10.4167 12.3889 10.6466L12.2993 10.7576C12.1441 10.9494 11.9687 11.1665 11.8088 11.3862C11.4328 11.903 11 12.6184 11 13.5C11 14.0523 11.4477 14.5 12 14.5C12.5523 14.5 13 14.0523 13 13.5C13 13.277 13.1099 12.9973 13.426 12.5629C13.5532 12.3881 13.6904 12.2182 13.8449 12.027L13.9471 11.9004C14.1337 11.6684 14.3433 11.4028 14.5241 11.1219C14.8253 10.6537 15 10.0957 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 10.0523 9.44771 10.5 10 10.5C10.5523 10.5 11 10.0523 11 9.5Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle opacity="0.4" cx="12" cy="12" r="10" fill={color}/>
<Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M11.992 17H12.001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth}/>
<Path opacity="0.4" d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path opacity="0.4" d="M11.992 17H12.001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 8.5C11.4477 8.5 11 8.94772 11 9.5C11 10.0523 10.5523 10.5 10 10.5C9.44771 10.5 9 10.0523 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5C15 10.0957 14.8253 10.6537 14.5241 11.1219C14.3433 11.4028 14.1337 11.6684 13.9471 11.9004L13.8449 12.027C13.6904 12.2182 13.5532 12.3881 13.426 12.5629C13.1099 12.9973 13 13.277 13 13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5C11 12.6184 11.4328 11.903 11.8088 11.3862C11.9687 11.1665 12.1441 10.9494 12.2993 10.7576L12.3889 10.6466C12.5739 10.4167 12.7241 10.2232 12.8422 10.0397C12.942 9.88454 13 9.70057 13 9.5C13 8.94772 12.5523 8.5 12 8.5ZM11.9955 15.5C11.4457 15.5 11 15.9477 11 16.5C11 17.0523 11.4457 17.5 11.9955 17.5H12.0045C12.5543 17.5 13 17.0523 13 16.5C13 15.9477 12.5543 15.5 12.0045 15.5H11.9955Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 8.5C11.4477 8.5 11 8.94772 11 9.5C11 10.0523 10.5523 10.5 10 10.5C9.44772 10.5 9 10.0523 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5C15 10.0957 14.8253 10.6537 14.5241 11.1219C14.3433 11.4028 14.1337 11.6684 13.9471 11.9004C13.9122 11.9437 13.8781 11.9859 13.8449 12.027C13.6904 12.2182 13.5532 12.3881 13.426 12.5629C13.1099 12.9973 13 13.277 13 13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5C11 12.6184 11.4328 11.903 11.8088 11.3862C11.9687 11.1665 12.1441 10.9494 12.2993 10.7576C12.33 10.7195 12.36 10.6825 12.3889 10.6466C12.5739 10.4167 12.7241 10.2232 12.8422 10.0397C12.942 9.88454 13 9.70057 13 9.5C13 8.94772 12.5523 8.5 12 8.5Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M11 16.5C11 15.9477 11.4457 15.5 11.9955 15.5H12.0045C12.5543 15.5 13 15.9477 13 16.5C13 17.0523 12.5543 17.5 12.0045 17.5H11.9955C11.4457 17.5 11 17.0523 11 16.5Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
<Path d="M9.5 10C9.5 8.61929 10.6193 7.5 12 7.5C13.3807 7.5 14.5 8.61929 14.5 10C14.5 11.3807 13.3807 12.5 12 12.5V14.5M12 16V17.5" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM10.5 10C10.5 9.17157 11.1716 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14.5H13V13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.067 6.5 8.5 8.067 8.5 10H10.5ZM11 16V17.5H13V16H11Z" fill={color}/>
</Svg>
)
}
