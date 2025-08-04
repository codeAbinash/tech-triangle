
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function StarsIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 5.00608 13.7606 7.07493 15.3428 8.65717C16.9251 10.2394 18.9939 11.25 21 11.25C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75C18.9939 12.75 16.9251 13.7606 15.3428 15.3428C13.7606 16.9251 12.75 18.9939 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 18.9939 10.2394 16.9251 8.65717 15.3428C7.07493 13.7606 5.00608 12.75 3 12.75C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25C5.00608 11.25 7.07493 10.2394 8.65717 8.65717C10.2394 7.07493 11.25 5.00608 11.25 3C11.25 2.58579 11.5858 2.25 12 2.25Z" fill={color}/>
<Path d="M19.25 1.25C19.4635 1.25 19.6484 1.39794 19.6954 1.6062L19.9296 2.64601C20.0895 3.35601 20.644 3.91047 21.354 4.07041L22.3938 4.30464C22.6021 4.35155 22.75 4.53652 22.75 4.75C22.75 4.96348 22.6021 5.14845 22.3938 5.19536L21.354 5.42959C20.644 5.58953 20.0895 6.14398 19.9296 6.85398L19.6954 7.8938C19.6484 8.10206 19.4635 8.25 19.25 8.25C19.0365 8.25 18.8516 8.10206 18.8046 7.8938L18.5704 6.85398C18.4105 6.14398 17.856 5.58953 17.146 5.42959L16.1062 5.19536C15.8979 5.14845 15.75 4.96348 15.75 4.75C15.75 4.53652 15.8979 4.35155 16.1062 4.30464L17.146 4.07041C17.856 3.91047 18.4105 3.35602 18.5704 2.64601L18.8046 1.6062C18.8516 1.39794 19.0365 1.25 19.25 1.25Z" fill={color}/>
<Path d="M4.75 15.75C4.96348 15.75 5.14845 15.8979 5.19536 16.1062L5.42959 17.146C5.58953 17.856 6.14398 18.4105 6.85398 18.5704L7.8938 18.8046C8.10206 18.8516 8.25 19.0365 8.25 19.25C8.25 19.4635 8.10206 19.6484 7.8938 19.6954L6.85398 19.9296C6.14398 20.0895 5.58953 20.644 5.42959 21.354L5.19536 22.3938C5.14845 22.6021 4.96348 22.75 4.75 22.75C4.53652 22.75 4.35155 22.6021 4.30464 22.3938L4.07041 21.354C3.91047 20.644 3.35602 20.0895 2.64601 19.9296L1.6062 19.6954C1.39794 19.6484 1.25 19.4635 1.25 19.25C1.25 19.0365 1.39794 18.8516 1.6062 18.8046L2.64601 18.5704C3.35602 18.4105 3.91047 17.856 4.07041 17.146L4.30464 16.1062C4.35155 15.8979 4.53652 15.75 4.75 15.75Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M3 12C7.5 12 12 7.5 12 3C12 7.5 16.5 12 21 12C16.5 12 12 16.5 12 21C12 16.5 7.5 12 3 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M2 19.5C2.83333 19.5 4.5 17.8333 4.5 17C4.5 17.8333 6.16667 19.5 7 19.5C6.16667 19.5 4.5 21.1667 4.5 22C4.5 21.1667 2.83333 19.5 2 19.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M16 5C17 5 19 3 19 2C19 3 21 5 22 5C21 5 19 7 19 8C19 7 17 5 16 5Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}
