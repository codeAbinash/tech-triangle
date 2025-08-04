
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function Sent02Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M18.6513 1.97412C19.5959 1.68561 20.5255 1.60021 21.3073 2.18138C22.0929 2.76539 22.2693 3.67973 22.2506 4.6611C22.2323 5.62891 22.0169 6.90595 21.7492 8.49314L21.7492 8.49323L20.7736 14.2781L20.7736 14.2781C20.6005 15.3044 20.4572 16.1544 20.25 16.8017C20.0322 17.482 19.705 18.0694 19.0776 18.4363C18.4521 18.8023 17.7779 18.8029 17.0737 18.6651C16.4096 18.5352 15.5997 18.2562 14.621 17.9177L14.6142 17.9276L13.7783 19.1316C13.7724 19.14 13.7664 19.1484 13.7601 19.1566L13.7241 19.2043C13.0068 20.1514 12.4223 20.9232 11.9252 21.4281C11.46 21.9007 10.8131 22.4143 10.0152 22.2016C9.16852 21.976 8.93534 21.1589 8.84458 20.528C8.74809 19.8574 8.74812 18.924 8.74816 17.7932L8.74816 15.8863L16.9982 7L6.49817 15.1034C5.34792 14.6948 4.4007 14.3314 3.68248 13.9646C2.67188 13.4484 1.81226 12.7763 1.75138 11.6779C1.69047 10.5787 2.47159 9.81703 3.41938 9.19469C4.38413 8.56121 5.81675 7.88411 7.62528 7.02934L15.0661 3.51245C16.5365 2.81746 17.7171 2.25942 18.6513 1.97412Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M9.49811 15L16.9981 7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.00634 7.67888L15.327 4.21881C18.3688 2.78111 19.8897 2.06226 20.8598 2.78341C21.8299 3.50455 21.5527 5.14799 20.9984 8.43486L20.0435 14.0968C19.6811 16.246 19.4998 17.3205 18.6989 17.7891C17.8979 18.2577 16.8574 17.8978 14.7765 17.178L8.41077 14.9762C4.51917 13.6301 2.57337 12.9571 2.50019 11.6365C2.427 10.3159 4.28678 9.43692 8.00634 7.67888Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.49811 15.5V17.7274C9.49811 20.101 9.49811 21.2878 10.2083 21.4771C10.9185 21.6663 11.6664 20.6789 13.1622 18.7039L13.9981 17.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
