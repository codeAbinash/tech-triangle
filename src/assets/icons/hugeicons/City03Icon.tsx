
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function City03Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M4.25 16.5962L4.25 22C4.25 22.4142 3.91421 22.75 3.5 22.75C3.08579 22.75 2.75 22.4142 2.75 22L2.75 16.5962C2.38201 16.4392 2.07239 16.1749 1.83934 15.8642C1.46151 15.3604 1.25 14.6989 1.25 14C1.25 13.3011 1.46151 12.6396 1.83934 12.1358C2.21734 11.6318 2.79679 11.25 3.5 11.25C4.20321 11.25 4.78266 11.6318 5.16066 12.1358C5.53849 12.6396 5.75 13.3011 5.75 14C5.75 14.6989 5.53849 15.3604 5.16066 15.8642C4.92761 16.1749 4.61799 16.4392 4.25 16.5962Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H20C20.4142 21.25 20.75 21.5858 20.75 22C20.75 22.4142 20.4142 22.75 20 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M17.5002 11.25C16.9787 11.25 16.5285 11.4224 16.0832 11.6788C15.6642 11.92 15.1921 12.2709 14.6316 12.6874L14.0729 13.1026C13.7144 13.369 13.4079 13.5967 13.1685 13.8089C12.9135 14.0349 12.6953 14.2762 12.536 14.5874C12.2483 15.1495 12.2491 15.7847 12.2501 16.5619L12.2502 22C12.2502 22.4142 12.586 22.75 13.0002 22.75H17.5C16.9477 22.75 16.5 22.3023 16.5 21.75V19.75C16.5 19.1977 16.9477 18.75 17.5 18.75C18.0523 18.75 18.5 19.1977 18.5 19.75V21.75C18.5 22.3023 18.0523 22.75 17.5 22.75H18.0503H18.0504C18.9505 22.75 19.6978 22.75 20.2903 22.6739C20.9121 22.5941 21.476 22.4188 21.9326 21.9826C22.3939 21.5418 22.5839 20.9894 22.6697 20.3795C22.7503 19.8067 22.7503 19.0868 22.7502 18.2317L22.7504 16.5619C22.7514 15.7847 22.7522 15.1495 22.4645 14.5874C22.3052 14.2762 22.0869 14.0349 21.832 13.8089C21.5926 13.5967 21.2861 13.369 20.9275 13.1025L20.3689 12.6874L20.3689 12.6874L20.3688 12.6874C19.8084 12.2709 19.3363 11.92 18.9173 11.6788C18.472 11.4224 18.0218 11.25 17.5002 11.25Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M17.5002 10C16.6812 10 16.0123 10.2773 15.4596 10.5955C14.9765 10.8736 14.4544 11.2616 13.9293 11.6519C13.909 11.6673 13.8854 11.6851 13.859 11.7051C13.4756 11.9947 12.4946 12.7359 12.3394 12.8734C12.0178 13.1584 11.6786 13.5191 11.4233 14.0178C10.9948 14.8549 10.9977 15.7655 10.9998 16.4557L11.0001 16.5628L11.0002 22.15C11.0002 22.4328 11.0002 22.5743 10.9124 22.6621C10.8245 22.75 10.6831 22.75 10.4002 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22L7.25 5C7.25 4.36327 7.28223 3.80099 7.38719 3.32323C7.49401 2.83699 7.68612 2.39173 8.03892 2.03892C8.39172 1.68612 8.83699 1.49401 9.32323 1.38719C9.80098 1.28224 10.3633 1.25 11 1.25H15C15.6367 1.25 16.199 1.28224 16.6768 1.38719C17.163 1.49401 17.6083 1.68612 17.9611 2.03892C18.3139 2.39173 18.506 2.83699 18.6128 3.32323C18.7178 3.80099 18.75 4.36327 18.75 5V9.36889C18.75 9.7363 18.75 9.92001 18.6493 10.0095C18.5485 10.099 18.3395 10.0743 17.9214 10.0248C17.7856 10.0087 17.6453 10 17.5002 10ZM12 4.25C11.5858 4.25 11.25 4.58579 11.25 5C11.25 5.41422 11.5858 5.75 12 5.75H14C14.4142 5.75 14.75 5.41422 14.75 5C14.75 4.58579 14.4142 4.25 14 4.25H12ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41422 11.5858 8.75 12 8.75H14C14.4142 8.75 14.75 8.41422 14.75 8C14.75 7.58579 14.4142 7.25 14 7.25H12Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M13 16.7033C13 15.7854 13 15.3265 13.2034 14.9292C13.4067 14.5319 13.7859 14.2501 14.5442 13.6866L15.0442 13.315C16.2239 12.4383 16.8138 12 17.5 12C18.1862 12 18.7761 12.4383 19.9558 13.315L20.4558 13.6866C21.2141 14.2501 21.5933 14.5319 21.7966 14.9292C22 15.3265 22 15.7854 22 16.7033V18.1782C22 19.9798 22 20.8806 21.4142 21.4403C20.8284 22 19.8856 22 18 22H13V16.7033Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M18 12.0002V5C18 2.518 17.482 2 15 2H11C8.518 2 8 2.518 8 5V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Ellipse cx="3.5" cy="14" rx="1.5" ry="2" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M3.5 16V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M2 22H20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M12 6H14M12 9H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M17.5 22L17.5 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
