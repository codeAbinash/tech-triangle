
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

export default function Sent02Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M9.49811 15L16.9981 7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.00634 7.67888L15.327 4.21881C18.3688 2.78111 19.8897 2.06226 20.8598 2.78341C21.8299 3.50455 21.5527 5.14799 20.9984 8.43486L20.0435 14.0968C19.6811 16.246 19.4998 17.3205 18.6989 17.7891C17.8979 18.2577 16.8574 17.8978 14.7765 17.178L8.41077 14.9762C4.51917 13.6301 2.57337 12.9571 2.50019 11.6365C2.427 10.3159 4.28678 9.43692 8.00634 7.67888Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.49811 15.5V17.7274C9.49811 20.101 9.49811 21.2878 10.2083 21.4771C10.9185 21.6663 11.6664 20.6789 13.1622 18.7039L13.9981 17.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M9 14L16 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M20.9513 2.7925L18.6366 16.6802C18.5578 17.1533 18.1485 17.5 17.6689 17.5C17.5571 17.5 17.4462 17.4809 17.3408 17.4435L2.49976 12.1773C2.20018 12.071 2 11.7876 2 11.4697C2 11.1824 2.16399 10.9202 2.42238 10.7945L20.1308 2.17961C20.3518 2.07212 20.6166 2.11657 20.7903 2.29032C20.9219 2.42191 20.9818 2.60894 20.9513 2.7925Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9 14V20.3615C9 20.7141 9.28586 21 9.63849 21V21C9.86277 21 10.0706 20.8823 10.186 20.69L13 16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22.1108 2.3908C21.7101 1.98851 21.0994 1.88559 20.5898 2.13447L2.84597 10.8008C2.32845 11.0535 2 11.5807 2 12.1584C2 12.7976 2.40093 13.3676 3.00095 13.5813L6.75949 14.9203L17.2805 8.16498L9.01399 15.7234V21.1032C9.01399 21.8746 9.63688 22.5 10.4053 22.5C10.894 22.5 11.3468 22.2426 11.5983 21.8219L14.1495 17.5529L17.8717 18.8789C18.0579 18.9453 18.2541 18.9792 18.4517 18.9792C19.2996 18.9792 20.0233 18.3638 20.1627 17.5241L22.4819 3.5535C22.5525 3.1285 22.4142 2.69546 22.1108 2.3908Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M8.00634 7.67888L15.327 4.21881C18.3688 2.78111 19.8897 2.06226 20.8598 2.78341C21.8299 3.50455 21.5527 5.14799 20.9984 8.43486L20.0435 14.0968C19.6811 16.246 19.4998 17.3205 18.6989 17.7891C17.8979 18.2577 16.8574 17.8978 14.7765 17.178L8.41077 14.9762C4.51917 13.6301 2.57337 12.9571 2.50019 11.6365C2.427 10.3159 4.28678 9.43692 8.00634 7.67888Z" fill={color}/>
<Path d="M9.49811 15L16.9981 7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.00634 7.67888L15.327 4.21881C18.3688 2.78111 19.8897 2.06226 20.8598 2.78341C21.8299 3.50455 21.5527 5.14799 20.9984 8.43486L20.0435 14.0968C19.6811 16.246 19.4998 17.3205 18.6989 17.7891C17.8979 18.2577 16.8574 17.8978 14.7765 17.178L8.41077 14.9762C4.51917 13.6301 2.57337 12.9571 2.50019 11.6365C2.427 10.3159 4.28678 9.43692 8.00634 7.67888Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.49811 15.5V17.7274C9.49811 20.101 9.49811 21.2878 10.2083 21.4771C10.9185 21.6663 11.6664 20.6789 13.1622 18.7039L13.9981 17.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M9.49811 15L16.9981 7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M9.49811 15.5V17.7274C9.49811 20.101 9.49811 21.2878 10.2083 21.4771C10.9185 21.6663 11.6664 20.6789 13.1622 18.7039L13.9981 17.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.00634 7.67888L15.327 4.21881C18.3688 2.78111 19.8897 2.06226 20.8598 2.78341C21.8299 3.50455 21.5527 5.14799 20.9984 8.43486L20.0435 14.0968C19.6811 16.246 19.4998 17.3205 18.6989 17.7891C17.8979 18.2577 16.8574 17.8978 14.7765 17.178L8.41077 14.9762C4.51917 13.6301 2.57337 12.9571 2.50019 11.6365C2.427 10.3159 4.28678 9.43692 8.00634 7.67888Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M18.6513 1.97412C19.5959 1.68561 20.5255 1.60021 21.3073 2.18138C22.0929 2.76539 22.2693 3.67973 22.2506 4.6611C22.2323 5.62891 22.0169 6.90595 21.7492 8.49314L21.7492 8.49323L20.7736 14.2781L20.7736 14.2781C20.6005 15.3044 20.4572 16.1544 20.25 16.8017C20.0322 17.482 19.705 18.0694 19.0776 18.4363C18.4521 18.8023 17.7779 18.8029 17.0737 18.6651C16.4096 18.5352 15.5997 18.2562 14.621 17.9177L14.6142 17.9276L13.7783 19.1316C13.7724 19.14 13.7664 19.1484 13.7601 19.1566L13.7241 19.2043C13.0068 20.1514 12.4223 20.9232 11.9252 21.4281C11.46 21.9007 10.8131 22.4143 10.0152 22.2016C9.16852 21.976 8.93534 21.1589 8.84458 20.528C8.74809 19.8574 8.74812 18.924 8.74816 17.7932L8.74816 15.8863L16.9982 7L6.49817 15.1034C5.34792 14.6948 4.4007 14.3314 3.68248 13.9646C2.67188 13.4484 1.81226 12.7763 1.75138 11.6779C1.69047 10.5787 2.47159 9.81703 3.41938 9.19469C4.38413 8.56121 5.81675 7.88411 7.62528 7.02934L15.0661 3.51245C16.5365 2.81746 17.7171 2.25942 18.6513 1.97412Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M13.724 19.2047C13.0067 20.1518 12.4222 20.9236 11.9251 21.4285C11.4599 21.9011 10.813 22.4147 10.0151 22.202C9.16842 21.9764 8.93524 21.1593 8.84447 20.5284C8.74798 19.8578 8.74801 18.9244 8.74805 17.7936V17.7936L8.74805 15.8867L14.6209 17.9181L13.724 19.2047Z" fill={color}/>
<Path opacity="0.4" d="M18.6513 1.97412C19.5959 1.68561 20.5255 1.60021 21.3073 2.18138C22.0929 2.76539 22.2693 3.67973 22.2506 4.6611C22.2323 5.62891 22.0169 6.90595 21.7492 8.49314L21.7492 8.49323L20.7736 14.2781L20.7736 14.2781C20.6005 15.3044 20.4572 16.1544 20.25 16.8017C20.0322 17.482 19.705 18.0694 19.0776 18.4363C18.4521 18.8023 17.7779 18.8029 17.0737 18.6651C16.4096 18.5352 15.5997 18.2562 14.621 17.9177L14.6142 17.9276L8.74816 15.8863L16.9982 7L6.49817 15.1034C5.34792 14.6948 4.4007 14.3314 3.68248 13.9646C2.67188 13.4484 1.81226 12.7763 1.75138 11.6779C1.69047 10.5787 2.47159 9.81703 3.41938 9.19469C4.38413 8.56121 5.81675 7.88411 7.62528 7.02934L15.0661 3.51245C16.5365 2.81746 17.7171 2.25942 18.6513 1.97412Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M9 14L16.5 8" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M21 3L18 17.5L3 11.5L21 3Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M9 14V21L13 16" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.014 18.765L22.5 2L2 11.7931L6.96098 13.9438L16.461 7.73584L8.71098 14.6438V22.5L13.5 16.5L19.014 18.765Z" fill={color}/>
</Svg>
)
}
