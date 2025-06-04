
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

export default function ArrowDown01Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M5.99977 9.00005L11.9998 15L17.9998 9" stroke={color} strokeWidth={strokeWidth} strokeMiterlimit="16" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5.99977 8.25005L17.9998 8.25C18.3031 8.25 18.5766 8.43273 18.6927 8.71298C18.8088 8.99324 18.7446 9.31583 18.5301 9.53033L12.5301 15.5303C12.2373 15.8232 11.7624 15.8232 11.4695 15.5303L5.46944 9.53038C5.25494 9.31588 5.19077 8.9933 5.30686 8.71304C5.42294 8.43278 5.69642 8.25005 5.99977 8.25005Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 15C13.5811 15 18 9.00005 18 9.00005" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M18.593 8.19486C19.0376 8.52237 19.1326 9.14837 18.8051 9.59306C18.5507 9.93847 18.2963 10.2668 18.0731 10.5528C17.6276 11.1236 17.0143 11.8882 16.3479 12.6556C15.6859 13.4181 14.9518 14.2064 14.2666 14.8119C13.9251 15.1136 13.5721 15.3911 13.2279 15.5986C12.9112 15.7895 12.476 16 11.9999 16C11.5238 16 11.0885 15.7895 10.7718 15.5986C10.4276 15.3911 10.0747 15.1136 9.7332 14.8119C9.04791 14.2064 8.31387 13.4181 7.65183 12.6556C6.98548 11.8882 6.37216 11.1236 5.92664 10.5528C5.70347 10.2668 5.44902 9.93847 5.19463 9.59307C4.86712 9.14837 4.96211 8.52237 5.4068 8.19486C5.58556 8.0632 5.79362 7.99983 5.99982 8L11.9999 8L17.9999 8C18.2061 7.99983 18.4142 8.0632 18.593 8.19486Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M18.593 8.19486C19.0376 8.52237 19.1326 9.14837 18.8051 9.59306C18.5507 9.93847 18.2963 10.2668 18.0731 10.5528C17.6276 11.1236 17.0143 11.8882 16.3479 12.6556C15.6859 13.4181 14.9518 14.2064 14.2666 14.8119C13.9251 15.1136 13.5721 15.3911 13.2279 15.5986C12.9112 15.7895 12.476 16 11.9999 16C11.5238 16 11.0885 15.7895 10.7718 15.5986C10.4276 15.3911 10.0747 15.1136 9.7332 14.8119C9.04791 14.2064 8.31387 13.4181 7.65183 12.6556C6.98548 11.8882 6.37216 11.1236 5.92664 10.5528C5.70347 10.2668 5.44902 9.93847 5.19463 9.59307C4.86712 9.14837 4.96211 8.52237 5.4068 8.19486C5.58556 8.0632 5.79362 7.99983 5.99982 8L11.9999 8L17.9999 8C18.2061 7.99983 18.4142 8.0632 18.593 8.19486Z" fill={color}/>
<Path d="M18.593 8.19486C19.0376 8.52237 19.1326 9.14837 18.8051 9.59306C18.5507 9.93847 18.2963 10.2668 18.0731 10.5528C17.6276 11.1236 17.0143 11.8882 16.3479 12.6556C15.6859 13.4181 14.9518 14.2064 14.2666 14.8119C13.9251 15.1136 13.5721 15.3911 13.2279 15.5986C12.9112 15.7895 12.476 16 11.9999 16C11.5238 16 11.0885 15.7895 10.7718 15.5986C10.4276 15.3911 10.0747 15.1136 9.7332 14.8119C9.15076 14.2973 8.53312 13.6506 7.95439 13L13 8L17.9999 8C18.2061 7.99983 18.4142 8.0632 18.593 8.19486Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M5.99977 9.00005L11.9998 15L17.9998 9" stroke={color} strokeWidth={strokeWidth} strokeMiterlimit="16"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M20.002 7.5H4.00195L12.002 16.5L20.002 7.5Z" fill={color}/>
</Svg>
)
}
