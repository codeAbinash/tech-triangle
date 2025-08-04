
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function Key01Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M15.5 1.75C11.7721 1.75 8.75 4.77208 8.75 8.5C8.75 9.30306 8.89055 10.0746 9.14879 10.7906L1.96967 17.9697C1.82902 18.1103 1.75 18.3011 1.75 18.5V21.5C1.75 21.9142 2.08579 22.25 2.5 22.25H5.5C5.91421 22.25 6.25 21.9142 6.25 21.5V19.75H8C8.41421 19.75 8.75 19.4142 8.75 19V17.25H10.5C10.6989 17.25 10.8897 17.171 11.0303 17.0303L13.2094 14.8512C13.9254 15.1094 14.6969 15.25 15.5 15.25C19.2279 15.25 22.25 12.2279 22.25 8.5C22.25 4.77208 19.2279 1.75 15.5 1.75ZM18.0303 7.03033C18.3232 6.73744 18.3232 6.26256 18.0303 5.96967C17.7374 5.67678 17.2626 5.67678 16.9697 5.96967L15.9697 6.96967C15.6768 7.26256 15.6768 7.73744 15.9697 8.03033C16.2626 8.32322 16.7374 8.32322 17.0303 8.03033L18.0303 7.03033Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15.5 14.5C18.8137 14.5 21.5 11.8137 21.5 8.5C21.5 5.18629 18.8137 2.5 15.5 2.5C12.1863 2.5 9.5 5.18629 9.5 8.5C9.5 9.38041 9.68962 10.2165 10.0303 10.9697L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.0303 13.9697C13.7835 14.3104 14.6196 14.5 15.5 14.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17.5 6.5L16.5 7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
