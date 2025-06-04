
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

export default function ArrowRight01Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M9.00005 6L15 12L9 18" stroke={color} strokeWidth={strokeWidth} strokeMiterlimit="16" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M8.71304 5.30711C8.99329 5.19103 9.31588 5.25519 9.53038 5.46969L15.5303 11.4697C15.8232 11.7626 15.8232 12.2375 15.5303 12.5304L9.53033 18.5304C9.31583 18.7449 8.99324 18.809 8.71299 18.6929C8.43273 18.5768 8.25 18.3034 8.25 18L8.25005 6.00002C8.25005 5.69667 8.43278 5.4232 8.71304 5.30711Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15 12C14.9999 10.4189 9 6 9 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M8.19486 5.40705C8.52237 4.96235 9.14837 4.86736 9.59306 5.19488C9.93847 5.44927 10.2668 5.70372 10.5528 5.92689C11.1236 6.3724 11.8882 6.98573 12.6556 7.65208C13.4181 8.31412 14.2064 9.04815 14.8119 9.73344C15.1136 10.0749 15.3911 10.4279 15.5986 10.7721C15.7895 11.0888 16 11.524 16 12.0001C16 12.4762 15.7895 12.9115 15.5986 13.2282C15.3911 13.5724 15.1136 13.9253 14.8119 14.2668C14.2064 14.9521 13.4181 15.6861 12.6556 16.3482C11.8882 17.0145 11.1236 17.6278 10.5528 18.0734C10.2668 18.2965 9.93847 18.551 9.59307 18.8054C9.14837 19.1329 8.52237 19.0379 8.19486 18.5932C8.0632 18.4144 7.99983 18.2064 8.00001 18.0002L8 12.0001L8 6.00007C7.99983 5.79387 8.0632 5.58581 8.19486 5.40705Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M8.19486 5.40705C8.52237 4.96235 9.14837 4.86736 9.59306 5.19488C9.93847 5.44927 10.2668 5.70372 10.5528 5.92689C11.1236 6.3724 11.8882 6.98573 12.6556 7.65208C13.4181 8.31412 14.2064 9.04815 14.8119 9.73344C15.1136 10.0749 15.3911 10.4279 15.5986 10.7721C15.7895 11.0888 16 11.524 16 12.0001C16 12.4762 15.7895 12.9115 15.5986 13.2282C15.3911 13.5724 15.1136 13.9253 14.8119 14.2668C14.2064 14.9521 13.4181 15.6861 12.6556 16.3482C11.8882 17.0145 11.1236 17.6278 10.5528 18.0734C10.2668 18.2965 9.93847 18.551 9.59307 18.8054C9.14837 19.1329 8.52237 19.0379 8.19486 18.5932C8.0632 18.4144 7.99983 18.2064 8.00001 18.0002L8 12.0001L8 6.00007C7.99983 5.79387 8.0632 5.58581 8.19486 5.40705Z" fill={color}/>
<Path d="M14.8119 9.73344C15.1136 10.0749 15.3911 10.4279 15.5986 10.7721C15.7895 11.0888 16 11.524 16 12.0001C16 12.4762 15.7895 12.9115 15.5986 13.2282C15.3911 13.5724 15.1136 13.9253 14.8119 14.2668C14.2064 14.9521 13.4181 15.6861 12.6556 16.3482C11.8882 17.0145 11.1236 17.6278 10.5528 18.0734C10.2668 18.2965 9.93847 18.551 9.59307 18.8054C9.14837 19.1329 8.52237 19.0379 8.19486 18.5932C8.0632 18.4144 7.99983 18.2064 8.00001 18.0002L8 13L13.0509 8C13.6843 8.56556 14.3107 9.1662 14.8119 9.73344Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M9.00005 6L15 12L9 18" stroke={color} strokeWidth={strokeWidth} strokeMiterlimit="16"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M7.50003 4V20L16.5 12L7.50003 4Z" fill={color}/>
</Svg>
)
}
