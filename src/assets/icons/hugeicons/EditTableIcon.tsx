
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function EditTableIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.3514 20.433L21.5808 18.2036C21.8923 17.8922 22.048 17.7364 22.1312 17.5685C22.2896 17.2489 22.2896 16.8736 22.1312 16.554C22.048 16.3861 21.8923 16.2304 21.5808 15.9189C21.2694 15.6075 21.1137 15.4518 20.9457 15.3686C20.6261 15.2102 20.2509 15.2102 19.9313 15.3686C19.7633 15.4518 19.6076 15.6075 19.2962 15.9189L16.8655 18.3496C16.1528 19.0623 15.7964 19.4187 15.5762 19.8553C15.5082 19.9902 15.4503 20.13 15.4031 20.2735C15.25 20.7379 15.25 21.2419 15.25 22.2498L15.905 22.1562C16.9014 22.0139 17.3996 21.9427 17.8417 21.7216C18.2839 21.5006 18.6397 21.1447 19.3514 20.433Z" fill={color}/>
<Path d="M12.0572 1.75C9.86647 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.83382 7.40785 1.7889 8.26881 1.76805 9.25H22.232C22.2111 8.26881 22.1662 7.40785 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z" fill={color}/>
<Path d="M22.2484 10.75H12.75V13.25H22.2488C22.25 12.8706 22.25 12.4751 22.25 12.063V12.0523C22.25 11.6028 22.25 11.1683 22.2484 10.75Z" fill={color}/>
<Path d="M15.8441 17.25L18.3037 14.7901C18.3166 14.777 18.3298 14.7637 18.3434 14.75H12.75L12.75 17.25H15.8441Z" fill={color}/>
<Path d="M14.4918 18.75H12.75V22.2496C13.0936 22.2492 13.4272 22.2481 13.7503 22.2456L13.7501 22.0797C13.7491 21.2407 13.7482 20.5036 13.9787 19.8042C14.0493 19.5901 14.1357 19.3815 14.2372 19.1802C14.3126 19.0305 14.398 18.8879 14.4918 18.75Z" fill={color}/>
<Path d="M11.25 18.75V22.2498C9.38519 22.2479 7.88649 22.2305 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.82616 20.1043 2.47434 19.4787 2.24033 18.75H11.25Z" fill={color}/>
<Path d="M1.92242 17.25H11.25L11.25 14.75H1.7667C1.78637 15.7 1.82919 16.5287 1.92242 17.25Z" fill={color}/>
<Path d="M11.25 13.25H1.75121C1.75 12.8688 1.75 12.4715 1.75 12.0574C1.75 11.6062 1.75 11.1698 1.75157 10.75H11.25V13.25Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2.5 9L21.5 9" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M2.5 13L16.5 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M2.5 17H12" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12 21.5L12 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M18.6014 19.6832L20.8308 17.4538C21.1423 17.1424 21.298 16.9867 21.3812 16.8187C21.5396 16.4991 21.5396 16.1239 21.3812 15.8043C21.298 15.6363 21.1423 15.4806 20.8308 15.1692C20.5194 14.8577 20.3637 14.702 20.1957 14.6188C19.8761 14.4604 19.5009 14.4604 19.1813 14.6188C19.0133 14.702 18.8576 14.8577 18.5462 15.1692L16.1155 17.5999C15.4028 18.3126 15.0464 18.6689 14.8262 19.1056C14.7582 19.2404 14.7003 19.3802 14.6531 19.5237C14.5 19.9881 14.5 20.4921 14.5 21.5L15.155 21.4064C16.1514 21.2641 16.6496 21.1929 17.0917 20.9718C17.5339 20.7508 17.8897 20.3949 18.6014 19.6832Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
</Svg>
)
}
