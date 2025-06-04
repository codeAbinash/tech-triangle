
import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
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

export default function PaintBoardIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M7 15.002L7.00868 14.9996" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Circle cx="9.5" cy="8.5" r="1.5" stroke={color} strokeWidth={strokeWidth}/>
<Circle cx="16.5" cy="9.5" r="1.5" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M7 15.0024L7.00868 15.0001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.5 10C10.3284 10 11 9.32843 11 8.5C11 7.67157 10.3284 7 9.5 7C8.67157 7 8 7.67157 8 8.5C8 9.32843 8.67157 10 9.5 10Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M16.5 11C17.3284 11 18 10.3284 18 9.5C18 8.67157 17.3284 8 16.5 8C15.6716 8 15 8.67157 15 9.5C15 10.3284 15.6716 11 16.5 11Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.937 6.06293 22.75 12 22.75C12.0515 22.75 12.1103 22.7509 12.175 22.7518L12.1754 22.7518C12.5352 22.7572 13.0737 22.7651 13.5177 22.6409C13.8057 22.5603 14.1315 22.4079 14.382 22.1074C14.6396 21.7982 14.75 21.4139 14.75 21C14.75 20.159 14.3186 19.5207 14.0232 19.0836L13.9905 19.0351C13.7467 18.6736 13.5967 18.4383 13.5315 18.1908C13.4789 17.9911 13.4711 17.7348 13.6708 17.3354C13.9111 16.8549 14.1887 16.6617 14.561 16.5536C15.0104 16.4232 15.593 16.4167 16.4815 16.4167H16.493C17.3426 16.4167 18.3867 16.4167 19.6061 16.2425C20.8111 16.0703 21.6693 15.5847 22.1796 14.7414C22.6553 13.955 22.75 12.9748 22.75 12C22.75 6.06293 17.937 1.25 12 1.25ZM7.26509 15.9668C7.79895 15.8253 8.11704 15.2778 7.97556 14.744C7.83408 14.2101 7.28661 13.892 6.75276 14.0335L6.74408 14.0358C6.21022 14.1773 5.89214 14.7247 6.03361 15.2586C6.17509 15.7924 6.72256 16.1105 7.25641 15.9691L7.26509 15.9668ZM7.25 8.5C7.25 7.25736 8.25736 6.25 9.5 6.25C10.7426 6.25 11.75 7.25736 11.75 8.5C11.75 9.74264 10.7426 10.75 9.5 10.75C8.25736 10.75 7.25 9.74264 7.25 8.5ZM16.5 7.25C15.2574 7.25 14.25 8.25736 14.25 9.5C14.25 10.7426 15.2574 11.75 16.5 11.75C17.7426 11.75 18.75 10.7426 18.75 9.5C18.75 8.25736 17.7426 7.25 16.5 7.25Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.0712 22 12.1447 22.0008 12.2195 22.0017C13.0294 22.0109 14 22.0219 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12ZM11 8.5C11 9.32843 10.3284 10 9.5 10C8.67157 10 8 9.32843 8 8.5C8 7.67157 8.67157 7 9.5 7C10.3284 7 11 7.67157 11 8.5ZM16.5 11C17.3284 11 18 10.3284 18 9.5C18 8.67157 17.3284 8 16.5 8C15.6716 8 15 8.67157 15 9.5C15 10.3284 15.6716 11 16.5 11Z" fill={color}/>
<Circle cx="9.5" cy="8.5" r="1.5" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M7 15.002L7.00868 14.9996" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Circle cx="16.5" cy="9.5" r="1.5" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M7 15.002L7.00868 14.9996" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Circle opacity="0.4" cx="9.5" cy="8.5" r="1.5" stroke={color} strokeWidth={strokeWidth}/>
<Circle opacity="0.4" cx="16.5" cy="9.5" r="1.5" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.0515 22.75 12.1103 22.7509 12.175 22.7518L12.1754 22.7518H12.1754C12.5352 22.7572 13.0737 22.7651 13.5177 22.6409C13.8057 22.5603 14.1315 22.4079 14.382 22.1074C14.6396 21.7983 14.75 21.4139 14.75 21C14.75 20.1588 14.3184 19.5203 14.0229 19.0831L13.9905 19.0352C13.7467 18.6736 13.5967 18.4383 13.5315 18.1909C13.4789 17.9911 13.4711 17.7348 13.6708 17.3354C13.9111 16.8549 14.1887 16.6617 14.561 16.5536C15.0103 16.4231 15.593 16.4167 16.4815 16.4167H16.493C17.3426 16.4167 18.3866 16.4167 19.6061 16.2425C20.8111 16.0703 21.6693 15.5847 22.1796 14.7413C22.6553 13.955 22.75 12.9748 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM6.73804 14.0366C6.20701 14.1796 5.89188 14.7279 6.03417 15.2614C6.17646 15.7949 6.72229 16.1114 7.25332 15.9685L7.26196 15.9662C7.79299 15.8232 8.10812 15.2749 7.96583 14.7414C7.82354 14.208 7.27771 13.8914 6.74668 14.0343L6.73804 14.0366ZM7.25 8.5C7.25 7.25736 8.25736 6.25 9.5 6.25C10.7426 6.25 11.75 7.25736 11.75 8.5C11.75 9.74264 10.7426 10.75 9.5 10.75C8.25736 10.75 7.25 9.74264 7.25 8.5ZM16.5 7.25C15.2574 7.25 14.25 8.25736 14.25 9.5C14.25 10.7426 15.2574 11.75 16.5 11.75C17.7426 11.75 18.75 10.7426 18.75 9.5C18.75 8.25736 17.7426 7.25 16.5 7.25Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 12.9748 22.6553 13.955 22.1796 14.7413C21.6693 15.5847 20.8111 16.0703 19.6061 16.2425C18.3866 16.4167 17.3426 16.4167 16.493 16.4167H16.4815C15.593 16.4167 15.0103 16.4231 14.561 16.5536C14.1887 16.6617 13.9111 16.8549 13.6708 17.3354C13.4711 17.7348 13.4789 17.9911 13.5315 18.1909C13.5967 18.4383 13.7467 18.6736 13.9905 19.0352L14.0229 19.0831C14.3184 19.5203 14.75 20.1588 14.75 21C14.75 21.4139 14.6396 21.7983 14.382 22.1074C14.1315 22.4079 13.8057 22.5603 13.5177 22.6409C13.0737 22.7651 12.5352 22.7572 12.1754 22.7518H12.1754L12.175 22.7518C12.1103 22.7509 12.0515 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M6.03417 15.2614C5.89188 14.7279 6.20701 14.1796 6.73804 14.0366L6.74668 14.0343C7.27771 13.8914 7.82355 14.208 7.96583 14.7414C8.10812 15.2749 7.79299 15.8232 7.26196 15.9662L7.25332 15.9685C6.72229 16.1114 6.17645 15.7949 6.03417 15.2614Z" fill={color}/>
<Path d="M7.25 8.5C7.25 7.25736 8.25736 6.25 9.5 6.25C10.7426 6.25 11.75 7.25736 11.75 8.5C11.75 9.74264 10.7426 10.75 9.5 10.75C8.25736 10.75 7.25 9.74264 7.25 8.5Z" fill={color}/>
<Path d="M14.25 9.5C14.25 8.25736 15.2574 7.25 16.5 7.25C17.7426 7.25 18.75 8.25736 18.75 9.5C18.75 10.7426 17.7426 11.75 16.5 11.75C15.2574 11.75 14.25 10.7426 14.25 9.5Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M8 15.002L8.00868 14.9996" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Circle cx="9" cy="9" r="2" stroke={color} strokeWidth={strokeWidth}/>
<Circle cx="16.5" cy="9.5" r="1.5" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M2 12C2 17.5228 6.47715 22 12 22L12.0709 21.9998C12.0242 21.6732 12 21.3394 12 21C12 17.134 15.134 14 19 14C19.9482 14 20.8524 14.1885 21.6771 14.5302C21.8878 13.7221 22 12.8741 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75L12.0761 22.7497L12.9349 22.7438L12.8133 21.8936C12.7716 21.6021 12.75 21.3038 12.75 21C12.75 17.5482 15.5482 14.75 19 14.75C19.848 14.75 20.6548 14.9185 21.3901 15.2231L22.1856 15.5526L22.4029 14.7194C22.6296 13.85 22.75 12.9385 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.73936 14.0361C7.2059 14.179 6.88931 14.7274 7.03226 15.2608C7.1752 15.7943 7.72354 16.1109 8.257 15.968L8.26568 15.9656C8.79914 15.8227 9.11573 15.2744 8.97278 14.7409C8.82984 14.2074 8.28151 13.8908 7.74804 14.0338L7.73936 14.0361ZM6.25 9C6.25 7.48122 7.48122 6.25 9 6.25C10.5188 6.25 11.75 7.48122 11.75 9C11.75 10.5188 10.5188 11.75 9 11.75C7.48122 11.75 6.25 10.5188 6.25 9ZM16.25 7.25C15.1454 7.25 14.25 8.14543 14.25 9.25C14.25 10.3546 15.1454 11.25 16.25 11.25C17.3546 11.25 18.25 10.3546 18.25 9.25C18.25 8.14543 17.3546 7.25 16.25 7.25Z" fill={color}/>
</Svg>
)
}
