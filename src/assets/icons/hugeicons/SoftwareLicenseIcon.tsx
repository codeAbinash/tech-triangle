
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function SoftwareLicenseIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12.0572 1.75H11.9428C9.75213 1.74999 8.03144 1.74998 6.68803 1.93059C5.31137 2.11568 4.21911 2.50272 3.36092 3.36091C2.50272 4.21911 2.11568 5.31137 1.9306 6.68802C1.89118 6.98118 1.86037 7.29229 1.83628 7.62234C1.81506 7.91313 1.80445 8.05853 1.89345 8.15427C1.98245 8.25 2.13094 8.25 2.42793 8.25H21.5721C21.8691 8.25 22.0176 8.25 22.1066 8.15427C22.1956 8.05853 22.1849 7.91313 22.1637 7.62234C22.1396 7.29229 22.1088 6.98118 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM22.2469 10.3424C22.2452 10.0638 22.2444 9.92444 22.1566 9.83722C22.0689 9.75 21.9289 9.75 21.649 9.75H2.35096C2.07108 9.75 1.93114 9.75 1.84339 9.83722C1.75563 9.92444 1.75478 10.0638 1.75307 10.3424C1.74999 10.8457 1.75 11.3786 1.75 11.9427V11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 11.3787 22.25 10.8458 22.2469 10.3424ZM6 5C6 4.44772 6.44571 4 6.99553 4H7.00447C7.55429 4 8 4.44772 8 5C8 5.55228 7.55429 6 7.00447 6H6.99553C6.44571 6 6 5.55228 6 5ZM10.9955 4C10.4457 4 10 4.44772 10 5C10 5.55228 10.4457 6 10.9955 6H11.0045C11.5543 6 12 5.55228 12 5C12 4.44772 11.5543 4 11.0045 4H10.9955ZM7.4319 13.5104C7.16147 13.8241 7.19659 14.2977 7.51034 14.5681L8.73688 15.6253C8.93658 15.7974 9.06848 15.9123 9.15913 16C9.06848 16.0878 8.93658 16.2026 8.73688 16.3747L7.51034 17.4319C7.19659 17.7023 7.16147 18.1759 7.4319 18.4897C7.70233 18.8034 8.17591 18.8385 8.48966 18.5681L9.7162 17.5109L9.74757 17.4839L9.74758 17.4839C9.97804 17.2853 10.2051 17.0898 10.3682 16.9054C10.5487 16.7015 10.75 16.4046 10.75 16C10.75 15.5954 10.5487 15.2985 10.3682 15.0946C10.205 14.9103 9.97803 14.7147 9.74757 14.5161L9.74757 14.5161L9.7162 14.4891L8.48966 13.4319C8.17591 13.1615 7.70233 13.1966 7.4319 13.5104ZM12 17.25C11.5858 17.25 11.25 17.5858 11.25 18C11.25 18.4142 11.5858 18.75 12 18.75H16C16.4142 18.75 16.75 18.4142 16.75 18C16.75 17.5858 16.4142 17.25 16 17.25H12Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M2.5 9H21.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M6.99981 6H7.00879" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10.9998 6H11.0088" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8 13L9.22654 14.0572C9.74218 14.5016 10 14.7239 10 15C10 15.2761 9.74218 15.4984 9.22654 15.9428L8 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 17H16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
