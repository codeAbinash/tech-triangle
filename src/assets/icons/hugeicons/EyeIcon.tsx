
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function EyeIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.6394 4.92727C17.7538 3.62477 15.0524 2.25006 12 2.25006C8.94754 2.25006 6.24623 3.62477 4.36059 4.92727C3.40824 5.58509 2.63885 6.24185 2.10627 6.7352C1.84641 6.97592 1.42162 7.41195 1.26679 7.57089L1.25501 7.58298C0.886591 7.99442 0.921469 8.62663 1.33291 8.99505C1.74408 9.36321 2.3757 9.32863 2.74422 8.91798L2.745 8.91712C2.86754 8.79136 3.22617 8.42405 3.46541 8.20242C3.94489 7.75827 4.63997 7.16503 5.49727 6.57285C7.23091 5.37535 9.5296 4.25006 12 4.25006C14.4704 4.25006 16.7691 5.37535 18.5027 6.57285C19.36 7.16503 20.0551 7.75827 20.5346 8.20242C20.7738 8.42405 21.1332 8.79222 21.2558 8.91798C21.6243 9.32863 22.2559 9.36321 22.6671 8.99505C23.0785 8.62663 23.1134 7.99442 22.745 7.58298L22.7331 7.57077C22.5781 7.41174 22.1535 6.97586 21.8937 6.7352C21.3611 6.24185 20.5917 5.58509 19.6394 4.92727Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 6.25C9.42942 6.25 7.22594 7.38141 5.52029 8.71298C3.81311 10.0458 2.49803 11.694 1.79218 12.6837C1.53902 13.0358 1.24998 13.4378 1.24998 14C1.24998 14.5622 1.53902 14.9642 1.79218 15.3163C2.49803 16.306 3.81312 17.9542 5.52029 19.287C7.22594 20.6186 9.42942 21.75 12 21.75C14.5705 21.75 16.774 20.6186 18.4797 19.287C20.1869 17.9542 21.5019 16.306 22.2078 15.3163C22.461 14.9642 22.75 14.5622 22.75 14C22.75 13.4378 22.4609 13.0358 22.2078 12.6837C21.5019 11.694 20.1869 10.0458 18.4797 8.71298C16.774 7.38141 14.5705 6.25 12 6.25ZM9.99998 14C9.99998 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 9.99998 12.8954 9.99998 14ZM12 18C9.79085 18 7.99998 16.2091 7.99998 14C7.99998 11.7909 9.79085 10 12 10C14.2091 10 16 11.7909 16 14C16 16.2091 14.2091 18 12 18Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2 8C2 8 6.47715 3 12 3C17.5228 3 22 8 22 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M21.544 13.045C21.848 13.4713 22 13.6845 22 14C22 14.3155 21.848 14.5287 21.544 14.955C20.1779 16.8706 16.6892 21 12 21C7.31078 21 3.8221 16.8706 2.45604 14.955C2.15201 14.5287 2 14.3155 2 14C2 13.6845 2.15201 13.4713 2.45604 13.045C3.8221 11.1294 7.31078 7 12 7C16.6892 7 20.1779 11.1294 21.544 13.045Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}
