
import React from 'react'
import Svg, { Ellipse, Path } from 'react-native-svg'
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

export default function City03Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
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

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17 12.0003V4C17 2.89543 16.1046 2 15 2L9.99999 2.00002C8.89543 2.00003 8 2.89546 8 4.00002V22.0001" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M3.5 16C4.32843 16 5 15.1046 5 14C5 12.8954 4.32843 12 3.5 12C2.67157 12 2 12.8954 2 14C2 15.1046 2.67157 16 3.5 16Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M3.49609 16V22" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M2 22H22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.5 6H13.5M11.5 9H13.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17 22V19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M13 22V15.0087L17 12L21 15.0087V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.83934 12.1358C2.21734 11.6318 2.79679 11.25 3.5 11.25C4.20321 11.25 4.78266 11.6318 5.16066 12.1358C5.53849 12.6396 5.75 13.3011 5.75 14C5.75 14.6989 5.53849 15.3604 5.16066 15.8642C4.78266 16.3682 4.20321 16.75 3.5 16.75C2.79679 16.75 2.21734 16.3682 1.83934 15.8642C1.46151 15.3604 1.25 14.6989 1.25 14C1.25 13.3011 1.46151 12.6396 1.83934 12.1358Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M2.74609 22V16H4.24609V22H2.74609Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M17.4508 11.4006C17.1838 11.1998 16.8162 11.1998 16.5492 11.4006L12.5492 14.4093C12.3608 14.551 12.25 14.773 12.25 15.0087V22C12.25 22.4142 12.5858 22.75 13 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22V15.0087C21.75 14.773 21.6392 14.551 21.4508 14.4093L17.4508 11.4006ZM18 19C18 18.4477 17.5523 18 17 18C16.4477 18 16 18.4477 16 19V21.5C16 22.0523 16.4477 22.5 17 22.5C17.5523 22.5 18 22.0523 18 21.5V19Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.99999 1.25002L15 1.25C16.5188 1.24999 17.75 2.48121 17.75 4V10.0919C17.0993 9.83615 16.3469 9.92608 15.7677 10.3617L11.7677 13.3704C11.2529 13.7576 10.95 14.3644 10.95 15.0087V22C10.95 22.2647 11.0002 22.5177 11.0915 22.75L8.00001 22.7501C7.8011 22.7501 7.61033 22.671 7.46967 22.5304C7.32902 22.3897 7.25 22.199 7.25 22.0001V4.00002C7.25 2.48125 8.48121 1.25003 9.99999 1.25002ZM11.5 4.25C11.0858 4.25 10.75 4.58579 10.75 5C10.75 5.41421 11.0858 5.75 11.5 5.75H13.5C13.9142 5.75 14.25 5.41421 14.25 5C14.25 4.58579 13.9142 4.25 13.5 4.25H11.5ZM11.5 7.25C11.0858 7.25 10.75 7.58579 10.75 8C10.75 8.41421 11.0858 8.75 11.5 8.75H13.5C13.9142 8.75 14.25 8.41421 14.25 8C14.25 7.58579 13.9142 7.25 13.5 7.25H11.5Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M13.2034 14.9292C13 15.3265 13 15.7854 13 16.7033V22L8 22V5C8 2.518 8.518 2 11 2H15C17.482 2 18 2.518 18 5V12.0798C17.8323 12.0266 17.6691 12 17.5 12C16.8138 12 16.2239 12.4383 15.0442 13.315L14.5442 13.6866C13.7859 14.2501 13.4067 14.5319 13.2034 14.9292Z" fill={color}/>
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

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M13 16.7033C13 15.7854 13 15.3265 13.2034 14.9292C13.4067 14.5319 13.7859 14.2501 14.5442 13.6866L15.0442 13.315C16.2239 12.4383 16.8138 12 17.5 12C18.1862 12 18.7761 12.4383 19.9558 13.315L20.4558 13.6866C21.2141 14.2501 21.5933 14.5319 21.7966 14.9292C22 15.3265 22 15.7854 22 16.7033V18.1782C22 19.9798 22 20.8806 21.4142 21.4403C20.8284 22 19.8856 22 18 22H13V16.7033Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path opacity="0.4" d="M18 12.0002V5C18 2.518 17.482 2 15 2H11C8.518 2 8 2.518 8 5V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Ellipse cx="3.5" cy="14" rx="1.5" ry="2" stroke={color} strokeWidth={strokeWidth}/>
<Path opacity="0.4" d="M3.5 16V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M2 22H20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path opacity="0.4" d="M12 6H14M12 9H14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path opacity="0.4" d="M17.5 22L17.5 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
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

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M3.5 15.25C3.91421 15.25 4.25 15.5858 4.25 16V22C4.25 22.4142 3.91421 22.75 3.5 22.75C3.08579 22.75 2.75 22.4142 2.75 22V16C2.75 15.5858 3.08579 15.25 3.5 15.25Z" fill={color}/>
<Path d="M1.83934 12.1358C2.21734 11.6318 2.79679 11.25 3.5 11.25C4.20321 11.25 4.78266 11.6318 5.16066 12.1358C5.53849 12.6396 5.75 13.3011 5.75 14C5.75 14.6989 5.53849 15.3604 5.16066 15.8642C4.78266 16.3682 4.20321 16.75 3.5 16.75C2.79679 16.75 2.21734 16.3682 1.83934 15.8642C1.46151 15.3604 1.25 14.6989 1.25 14C1.25 13.3011 1.46151 12.6396 1.83934 12.1358Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H20C20.4142 21.25 20.75 21.5858 20.75 22C20.75 22.4142 20.4142 22.75 20 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M17.5002 11.25C16.9787 11.25 16.5285 11.4224 16.0832 11.6788C15.6642 11.92 15.1921 12.2709 14.6316 12.6874L14.0729 13.1026C13.7144 13.369 13.4079 13.5967 13.1685 13.8089C12.9135 14.0349 12.6953 14.2762 12.536 14.5874C12.2483 15.1495 12.2491 15.7847 12.2501 16.5619L12.2502 22C12.2502 22.4142 12.586 22.75 13.0002 22.75H17.5C16.9477 22.75 16.5 22.3023 16.5 21.75V19.75C16.5 19.1977 16.9477 18.75 17.5 18.75C18.0523 18.75 18.5 19.1977 18.5 19.75V21.75C18.5 22.3023 18.0523 22.75 17.5 22.75H18.0503H18.0504C18.9505 22.75 19.6978 22.75 20.2903 22.6739C20.9121 22.5941 21.476 22.4188 21.9326 21.9826C22.3939 21.5418 22.5839 20.9894 22.6697 20.3795C22.7503 19.8067 22.7503 19.0868 22.7502 18.2317L22.7504 16.5619C22.7514 15.7847 22.7522 15.1495 22.4645 14.5874C22.3052 14.2762 22.0869 14.0349 21.832 13.8089C21.5926 13.5967 21.2861 13.369 20.9275 13.1025L20.3689 12.6874L20.3689 12.6874L20.3688 12.6874C19.8084 12.2709 19.3363 11.92 18.9173 11.6788C18.472 11.4224 18.0218 11.25 17.5002 11.25Z" fill={color}/>
<Path opacity="0.4" d="M15.4596 10.5955C16.0123 10.2773 16.6812 10 17.5002 10C17.6453 10 17.7856 10.0087 17.9214 10.0248C18.3395 10.0743 18.5485 10.099 18.6493 10.0095C18.75 9.92001 18.75 9.7363 18.75 9.36889V5C18.75 4.36327 18.7178 3.80098 18.6128 3.32323C18.506 2.83699 18.3139 2.39172 17.9611 2.03892C17.6083 1.68612 17.163 1.49401 16.6768 1.38719C16.199 1.28223 15.6367 1.25 15 1.25H11C10.3633 1.25 9.80098 1.28223 9.32323 1.38719C8.83699 1.494 8.39172 1.68612 8.03892 2.03892C7.68612 2.39172 7.49401 2.83699 7.38719 3.32323C7.28223 3.80098 7.25 4.36327 7.25 5V22C7.25 22.4142 7.58579 22.75 8 22.75H10.4002C10.6831 22.75 10.8245 22.75 10.9124 22.6621C11.0002 22.5743 11.0002 22.4328 11.0002 22.15L11.0001 16.5628L10.9998 16.4557C10.9977 15.7655 10.9948 14.8549 11.4233 14.0178C11.6786 13.5191 12.0178 13.1584 12.3394 12.8734C12.5053 12.7264 13.6148 11.8896 13.9293 11.6519C14.4544 11.2616 14.9765 10.8736 15.4596 10.5955Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M11.25 5C11.25 4.58579 11.5858 4.25 12 4.25H14C14.4142 4.25 14.75 4.58579 14.75 5C14.75 5.41421 14.4142 5.75 14 5.75H12C11.5858 5.75 11.25 5.41421 11.25 5ZM11.25 8C11.25 7.58579 11.5858 7.25 12 7.25H14C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H12C11.5858 8.75 11.25 8.41421 11.25 8Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17.475 12.0003V2.00003L7.49245 2.00007V22.0001" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M3.49959 16C4.32657 16 4.99696 15.1046 4.99696 14C4.99696 12.8955 4.32657 12 3.49959 12C2.67261 12 2.00221 12.8955 2.00221 14C2.00221 15.1046 2.67261 16 3.49959 16Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M3.49977 16V22" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M2.00221 22H20.0022" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M10.4876 6.00003H14.4806M10.4876 9.00003H14.4806" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M17.5022 22V18" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M12.9949 21.4312V14.9845L17.4536 11.9668L21.9978 14.9845V21.9967H19.6209" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2.75 16.5962V22H4.25V16.5962C4.61799 16.4392 4.92761 16.1749 5.16066 15.8642C5.53849 15.3604 5.75 14.6989 5.75 14C5.75 13.3011 5.53849 12.6396 5.16066 12.1358C4.78266 11.6318 4.20321 11.25 3.5 11.25C2.79679 11.25 2.21734 11.6318 1.83934 12.1358C1.46151 12.6396 1.25 13.3011 1.25 14C1.25 14.6989 1.46151 15.3604 1.83934 15.8642C2.07239 16.1749 2.38201 16.4392 2.75 16.5962Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M20 22.75H2V20.75H20V22.75Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M17.4993 9.2959L18.25 9.79638V1.99976C18.25 1.80085 18.171 1.61008 18.0303 1.46943C17.8897 1.32878 17.6989 1.24976 17.5 1.24976L7.5 1.24981C7.08578 1.24981 6.75 1.58559 6.75 1.99981L6.75 21.9998C6.75 22.414 7.08579 22.7498 7.5 22.7498H10.7493L10.748 13.7958L17.4993 9.2959ZM10.5 6.75001L14.5 6.75001V5.25001H10.5V6.75001ZM10.5 9.75001L14.5 9.75001V8.25001L10.5 8.25001V9.75001Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M22.749 14.5986L17.4991 11.0986L12.248 14.5986L12.2491 22.75H22.749V14.5986ZM18.25 22V18H16.75V22L18.25 22Z" fill={color}/>
</Svg>
)
}
