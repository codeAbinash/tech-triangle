
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function DashboardSpeed01Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M17.312 1.93066C15.9686 1.75004 14.2479 1.75005 12.0572 1.75006H12.0572H11.9429H11.9429C9.75218 1.75005 8.0315 1.75004 6.68808 1.93066C5.31143 2.11574 4.21917 2.50278 3.36097 3.36097C2.50278 4.21917 2.11574 5.31143 1.93066 6.68808C1.75004 8.0315 1.75005 9.75218 1.75006 11.9429V11.9429V12.0572V12.0572C1.75005 14.2479 1.75004 15.9686 1.93066 17.312C2.11574 18.6887 2.50278 19.781 3.36097 20.6391C4.21917 21.4973 5.31143 21.8844 6.68808 22.0695C8.0315 22.2501 9.7522 22.2501 11.9429 22.2501H12.0573C14.248 22.2501 15.9686 22.2501 17.312 22.0695C18.6887 21.8844 19.781 21.4973 20.6391 20.6391C21.4973 19.781 21.8844 18.6887 22.0695 17.312C22.2501 15.9686 22.2501 14.2479 22.2501 12.0572V11.9429C22.2501 9.75217 22.2501 8.0315 22.0695 6.68808C21.8844 5.31143 21.4973 4.21917 20.6391 3.36097C19.781 2.50278 18.6887 2.11574 17.312 1.93066ZM17.5645 9.49395C17.8373 9.18222 17.8057 8.7084 17.4939 8.43564C17.1822 8.16288 16.7084 8.19447 16.4356 8.50619L12.9968 12.4363C12.6878 12.316 12.3516 12.2501 12.0001 12.2501C10.4813 12.2501 9.25006 13.4813 9.25006 15.0001C9.25006 16.5189 10.4813 17.7501 12.0001 17.7501C13.5188 17.7501 14.7501 16.5189 14.7501 15.0001C14.7501 14.3783 14.5437 13.8047 14.1957 13.344L17.5645 9.49395ZM12.0001 6.75006C9.10057 6.75006 6.75006 9.10057 6.75006 12.0001C6.75006 12.4143 6.41427 12.7501 6.00006 12.7501C5.58585 12.7501 5.25006 12.4143 5.25006 12.0001C5.25006 8.27214 8.27214 5.25006 12.0001 5.25006C13.2283 5.25006 14.382 5.57878 15.3756 6.15355C15.7342 6.36096 15.8567 6.81975 15.6493 7.1783C15.4419 7.53684 14.9831 7.65937 14.6245 7.45196C13.8531 7.0057 12.9576 6.75006 12.0001 6.75006Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M13.5 13L17 9M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M6 12C6 8.68629 8.68629 6 12 6C13.0929 6 14.1175 6.29218 15 6.80269" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M2.50006 12.0001C2.50006 7.52172 2.50006 5.28255 3.8913 3.8913C5.28255 2.50006 7.52172 2.50006 12.0001 2.50006C16.4784 2.50006 18.7176 2.50006 20.1088 3.8913C21.5001 5.28255 21.5001 7.52172 21.5001 12.0001C21.5001 16.4784 21.5001 18.7176 20.1088 20.1088C18.7176 21.5001 16.4784 21.5001 12.0001 21.5001C7.52172 21.5001 5.28255 21.5001 3.8913 20.1088C2.50006 18.7176 2.50006 16.4784 2.50006 12.0001Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}
