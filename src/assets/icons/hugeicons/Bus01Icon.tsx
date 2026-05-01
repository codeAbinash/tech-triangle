
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import {type Variant, type HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function Bus01Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M17 19.375C17.5523 19.375 18 19.8227 18 20.375V21.875C18 22.4273 17.5523 22.875 17 22.875C16.4477 22.875 16 22.4273 16 21.875V20.375C16 19.8227 16.4477 19.375 17 19.375Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M7 19.375C7.55228 19.375 8 19.8227 8 20.375V21.875C8 22.4273 7.55228 22.875 7 22.875C6.44772 22.875 6 22.4273 6 21.875V20.375C6 19.8227 6.44772 19.375 7 19.375Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M4.42453 3.8793C5.67932 2.75158 8.16215 1.125 11.998 1.125C15.8339 1.125 18.3168 2.75158 19.5716 3.8793L19.5967 3.90191C19.9368 4.20737 20.2405 4.48012 20.4944 5.0501C20.7492 5.62236 20.7486 6.12699 20.748 6.67827L20.7479 13.8688C20.748 15.1891 20.748 16.2778 20.6325 17.1394C20.5112 18.0441 20.2468 18.843 19.6089 19.4827C18.971 20.1224 18.1744 20.3876 17.2723 20.5092C16.4131 20.6251 15.3275 20.625 14.011 20.625H9.98505C8.66855 20.625 7.58296 20.6251 6.72376 20.5092C5.82172 20.3876 5.02506 20.1224 4.38719 19.4827C3.74932 18.843 3.48491 18.0441 3.36363 17.1394C3.24811 16.2778 3.24814 15.1891 3.24818 13.8688L3.24811 6.67827C3.24746 6.12699 3.24687 5.62235 3.50173 5.0501C3.75557 4.48012 4.05925 4.20737 4.39936 3.90191L4.42453 3.8793ZM5.19163 7.22498C5.19164 6.94214 5.19165 6.80073 5.27951 6.71286C5.36738 6.625 5.5088 6.625 5.79163 6.625H18.2021C18.4849 6.625 18.6263 6.625 18.7142 6.71286C18.8021 6.80073 18.8021 6.94214 18.8021 7.22498L18.8023 12.8958C18.8023 13.1297 18.8023 13.2466 18.7339 13.3297C18.6655 13.4128 18.5522 13.435 18.3255 13.4793C18.0684 13.5296 17.7828 13.5825 17.4727 13.6353C16.0327 13.8808 14.077 14.1247 11.9987 14.1247C9.92049 14.1247 7.96474 13.8808 6.52476 13.6353C6.21311 13.5822 5.92621 13.5291 5.66812 13.4786C5.44149 13.4342 5.32817 13.412 5.25979 13.3289C5.19141 13.2458 5.19142 13.1289 5.19142 12.8951L5.19163 7.22498ZM11 18.125H13C13.4142 18.125 13.75 17.7892 13.75 17.375C13.75 16.9608 13.4142 16.625 13 16.625H11C10.5858 16.625 10.25 16.9608 10.25 17.375C10.25 17.7892 10.5858 18.125 11 18.125ZM6 16.625C5.58579 16.625 5.25 16.9608 5.25 17.375C5.25 17.7892 5.58579 18.125 6 18.125H6.5C6.91421 18.125 7.25 17.7892 7.25 17.375C7.25 16.9608 6.91421 16.625 6.5 16.625H6ZM17.5 16.625C17.0858 16.625 16.75 16.9608 16.75 17.375C16.75 17.7892 17.0858 18.125 17.5 18.125H18C18.4142 18.125 18.75 17.7892 18.75 17.375C18.75 16.9608 18.4142 16.625 18 16.625H17.5Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M1.5 7.875C2.05228 7.875 2.5 8.32272 2.5 8.875V9.875C2.5 10.4273 2.05228 10.875 1.5 10.875C0.947715 10.875 0.5 10.4273 0.5 9.875L0.5 8.875C0.5 8.32272 0.947715 7.875 1.5 7.875Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M22.5 7.875C23.0523 7.875 23.5 8.32272 23.5 8.875V9.875C23.5 10.4273 23.0523 10.875 22.5 10.875C21.9477 10.875 21.5 10.4273 21.5 9.875V8.875C21.5 8.32272 21.9477 7.875 22.5 7.875Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17 20.5V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7 20.5V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 6.78186C4 6.14251 4 5.82283 4.17387 5.43355C4.34773 5.04428 4.52427 4.88606 4.87736 4.56964C6.03437 3.53277 8.36029 2 12 2C15.6397 2 17.9656 3.53277 19.1226 4.56964C19.4757 4.88606 19.6523 5.04428 19.8261 5.43355C20 5.82283 20 6.14251 20 6.78186V14C20 16.8284 20 18.2426 19.1213 19.1213C18.2426 20 16.8284 20 14 20H10C7.17157 20 5.75736 20 4.87868 19.1213C4 18.2426 4 16.8284 4 14V6.78186Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M4 14C4 14 7.73333 15 12 15C16.2667 15 20 14 20 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4.5 17.5H6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18 17.5H19.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11 17.5L13 17.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 6H20" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M2 9L2 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 9L22 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
