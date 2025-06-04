
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

export default function ArrowLeft01Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15 6L9 12.0001L15 18" stroke={color} strokeWidth={strokeWidth} strokeMiterlimit="16" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M15.287 5.30711C15.5672 5.42319 15.75 5.69667 15.75 6.00002L15.75 18C15.75 18.3034 15.5673 18.5768 15.287 18.6929C15.0068 18.809 14.6842 18.7449 14.4697 18.5304L8.46967 12.5305C8.17678 12.2376 8.17677 11.7627 8.46966 11.4698L14.4696 5.4697C14.6841 5.2552 15.0067 5.19103 15.287 5.30711Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9 12C9.00001 10.4189 15 6 15 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15.8051 5.40705C15.4776 4.96235 14.8516 4.86736 14.4069 5.19488C14.0615 5.44927 13.7332 5.70372 13.4472 5.92689C12.8764 6.3724 12.1118 6.98572 11.3444 7.65208C10.5819 8.31412 9.79361 9.04815 9.18811 9.73344C8.88637 10.0749 8.60888 10.4279 8.4014 10.7721C8.21046 11.0888 8 11.524 8 12.0001C8 12.4762 8.21046 12.9115 8.4014 13.2282C8.60888 13.5724 8.88637 13.9253 9.18811 14.2668C9.79361 14.9521 10.5819 15.6861 11.3444 16.3482C12.1118 17.0145 12.8764 17.6278 13.4472 18.0734C13.7332 18.2965 14.0615 18.551 14.4069 18.8054C14.8516 19.1329 15.4776 19.0379 15.8051 18.5932C15.9368 18.4144 16.0002 18.2064 16 18.0002V12.0001V6.00007C16.0002 5.79387 15.9368 5.58581 15.8051 5.40705Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M15.8051 5.40705C15.4776 4.96235 14.8516 4.86736 14.4069 5.19488C14.0615 5.44927 13.7332 5.70372 13.4472 5.92689C12.8764 6.3724 12.1118 6.98572 11.3444 7.65208C10.5819 8.31412 9.79361 9.04815 9.18811 9.73344C8.88637 10.0749 8.60888 10.4279 8.4014 10.7721C8.21046 11.0888 8 11.524 8 12.0001C8 12.4762 8.21046 12.9115 8.4014 13.2282C8.60888 13.5724 8.88637 13.9253 9.18811 14.2668C9.79361 14.9521 10.5819 15.6861 11.3444 16.3482C12.1118 17.0145 12.8764 17.6278 13.4472 18.0734C13.7332 18.2965 14.0615 18.551 14.4069 18.8054C14.8516 19.1329 15.4776 19.0379 15.8051 18.5932C15.9368 18.4144 16.0002 18.2064 16 18.0002V12.0001V6.00007C16.0002 5.79387 15.9368 5.58581 15.8051 5.40705Z" fill={color}/>
<Path d="M15.8051 5.40705C15.4776 4.96235 14.8516 4.86736 14.4069 5.19488C14.0615 5.44927 13.7332 5.70372 13.4472 5.92689C12.8764 6.3724 12.1118 6.98572 11.3444 7.65208C10.5819 8.31412 9.79361 9.04815 9.18811 9.73344C8.88637 10.0749 8.60888 10.4279 8.4014 10.7721C8.21046 11.0888 8 11.524 8 12.0001C8 12.4762 8.21046 12.9115 8.4014 13.2282C8.60888 13.5724 8.88637 13.9253 9.18811 14.2668C9.6563 14.7967 10.2338 15.3557 10.8241 15.8881L16 10.7122V6.00007C16.0002 5.79387 15.9368 5.58581 15.8051 5.40705Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15 6L9 12L15 18" stroke={color} strokeWidth={strokeWidth} strokeMiterlimit="16"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15.4999 4V20L6.49989 12L15.4999 4Z" fill={color}/>
</Svg>
)
}
