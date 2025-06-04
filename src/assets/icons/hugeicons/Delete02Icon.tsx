
import React from 'react'
import Svg, { Path } from 'react-native-svg'
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

export default function Delete02Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M9.5 16.5L9.5 10.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M14.5 16.5L14.5 10.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.5 5.5L18.6139 20.121C18.5499 21.1766 17.6751 22 16.6175 22H7.38246C6.32488 22 5.4501 21.1766 5.38612 20.121L4.5 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3 5.5H8M21 5.5H16M16 5.5L14.7597 2.60608C14.6022 2.2384 14.2406 2 13.8406 2H10.1594C9.75937 2 9.39783 2.2384 9.24025 2.60608L8 5.5M16 5.5H8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.5 16.5L9.5 10.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14.5 16.5L14.5 10.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M4.63751 20.1665L3.82444 6.75092L3.73431 5.06621C3.72513 4.89447 3.8619 4.75018 4.03388 4.75018H19.9945C20.1685 4.75018 20.306 4.89769 20.2938 5.07124L20.1756 6.75092L19.3625 20.1665C19.2745 21.618 18.0717 22.7502 16.6176 22.7502H7.38247C5.9283 22.7502 4.72548 21.618 4.63751 20.1665ZM8.74963 16.5002C8.74963 16.9144 9.08542 17.2502 9.49963 17.2502C9.91385 17.2502 10.2496 16.9144 10.2496 16.5002V10.5002C10.2496 10.086 9.91385 9.75018 9.49963 9.75018C9.08542 9.75018 8.74963 10.086 8.74963 10.5002V16.5002ZM14.4996 9.75018C14.9138 9.75018 15.2496 10.086 15.2496 10.5002V16.5002C15.2496 16.9144 14.9138 17.2502 14.4996 17.2502C14.0854 17.2502 13.7496 16.9144 13.7496 16.5002V10.5002C13.7496 10.086 14.0854 9.75018 14.4996 9.75018Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8.31879 2.46286C8.63394 1.7275 9.35702 1.2507 10.1571 1.2507H13.8383C14.6383 1.2507 15.3614 1.7275 15.6766 2.46286L16.6569 4.75034H19.2239C19.2903 4.75034 19.3523 4.75034 19.4102 4.7507H19.4637C19.4857 4.74973 19.5079 4.74972 19.5303 4.7507H20.9977C21.55 4.7507 21.9977 5.19842 21.9977 5.7507C21.9977 6.30299 21.55 6.7507 20.9977 6.7507H2.99768C2.4454 6.7507 1.99768 6.30299 1.99768 5.7507C1.99768 5.19842 2.4454 4.7507 2.99768 4.7507H4.46507C4.48746 4.74972 4.50968 4.74973 4.53167 4.7507H4.58469C4.6426 4.75034 4.70457 4.75034 4.77093 4.75034H7.33844L8.31879 2.46286ZM13.8903 3.37192L14.481 4.75034H9.5144L10.1052 3.37192C10.1367 3.29838 10.209 3.2507 10.289 3.2507L13.7064 3.2507C13.7864 3.2507 13.8587 3.29838 13.8903 3.37192Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5H19.5Z" fill={color}/>
<Path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M21 5.5H3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M16.0575 5.5L15.3748 4.09173C14.9213 3.15626 14.6946 2.68852 14.3035 2.39681C14.2167 2.3321 14.1249 2.27454 14.0288 2.2247C13.5957 2 13.0759 2 12.0363 2C10.9706 2 10.4377 2 9.99745 2.23412C9.89986 2.28601 9.80675 2.3459 9.71906 2.41317C9.3234 2.7167 9.10239 3.20155 8.66037 4.17126L8.05469 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M9.5 16.5L9.5 10.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M14.5 16.5L14.5 10.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M21 5.5H3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M16.0575 5.5L15.3748 4.09173C14.9213 3.15626 14.6946 2.68852 14.3035 2.39681C14.2167 2.3321 14.1249 2.27454 14.0288 2.2247C13.5957 2 13.0759 2 12.0363 2C10.9706 2 10.4377 2 9.99745 2.23412C9.89986 2.28601 9.80675 2.3459 9.71906 2.41317C9.3234 2.7167 9.10239 3.20155 8.66037 4.17126L8.05469 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path opacity="0.4" d="M9.5 16.5L9.5 10.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path opacity="0.4" d="M14.5 16.5L14.5 10.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M19.5825 15.6564C19.5058 16.9096 19.4449 17.9041 19.3202 18.6984C19.1922 19.5131 18.9874 20.1915 18.5777 20.7849C18.2029 21.3278 17.7204 21.786 17.1608 22.1303C16.5491 22.5067 15.8661 22.6713 15.0531 22.75L8.92739 22.7499C8.1135 22.671 7.42972 22.5061 6.8176 22.129C6.25763 21.7841 5.77494 21.3251 5.40028 20.7813C4.99073 20.1869 4.78656 19.5075 4.65957 18.6917C4.53574 17.8962 4.47623 16.9003 4.40122 15.6453L3.75 4.75H20.25L19.5825 15.6564ZM9.5 17.9609C9.08579 17.9609 8.75 17.6252 8.75 17.2109L8.75 11.2109C8.75 10.7967 9.08579 10.4609 9.5 10.4609C9.91421 10.4609 10.25 10.7967 10.25 11.2109L10.25 17.2109C10.25 17.6252 9.91421 17.9609 9.5 17.9609ZM15.25 11.2109C15.25 10.7967 14.9142 10.4609 14.5 10.4609C14.0858 10.4609 13.75 10.7967 13.75 11.2109V17.2109C13.75 17.6252 14.0858 17.9609 14.5 17.9609C14.9142 17.9609 15.25 17.6252 15.25 17.2109V11.2109Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M13.3473 1.28277C13.9124 1.33331 14.4435 1.50576 14.8996 1.84591C15.2369 2.09748 15.4712 2.40542 15.6714 2.73893C15.8569 3.04798 16.0437 3.4333 16.2555 3.8704L16.6823 4.7507H21C21.5523 4.7507 22 5.19842 22 5.7507C22 6.30299 21.5523 6.7507 21 6.7507C14.9998 6.7507 9.00019 6.7507 3 6.7507C2.44772 6.7507 2 6.30299 2 5.7507C2 5.19842 2.44772 4.7507 3 4.7507H7.40976L7.76556 3.97016C7.97212 3.51696 8.15403 3.11782 8.33676 2.79754C8.53387 2.45207 8.76721 2.13237 9.10861 1.87046C9.57032 1.51626 10.1121 1.33669 10.6899 1.28409C11.1249 1.24449 11.5634 1.24994 12 1.25064C12.5108 1.25146 12.97 1.24902 13.3473 1.28277ZM9.60776 4.7507H14.4597C14.233 4.28331 14.088 3.98707 13.9566 3.7682C13.7643 3.44787 13.5339 3.30745 13.1691 3.27482C12.9098 3.25163 12.5719 3.2507 12.0345 3.2507C11.4837 3.2507 11.137 3.25166 10.8712 3.27585C10.4971 3.30991 10.2639 3.45568 10.0739 3.78866C9.94941 4.00687 9.81387 4.29897 9.60776 4.7507Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M19.5825 15.6564C19.5058 16.9096 19.4449 17.9041 19.3202 18.6984C19.1922 19.5131 18.9874 20.1915 18.5777 20.7849C18.2029 21.3278 17.7204 21.786 17.1608 22.1303C16.5491 22.5067 15.8661 22.6713 15.0531 22.75L8.92739 22.7499C8.1135 22.671 7.42972 22.5061 6.8176 22.129C6.25763 21.7841 5.77494 21.3251 5.40028 20.7813C4.99073 20.1869 4.78656 19.5075 4.65957 18.6917C4.53574 17.8962 4.47623 16.9003 4.40122 15.6453L3.75 4.75H20.25L19.5825 15.6564Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.5 17.9648C9.08579 17.9648 8.75 17.6291 8.75 17.2148L8.75 11.2148C8.75 10.8006 9.08579 10.4648 9.5 10.4648C9.91421 10.4648 10.25 10.8006 10.25 11.2148L10.25 17.2148C10.25 17.6291 9.91421 17.9648 9.5 17.9648Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.4648C14.9142 10.4648 15.25 10.8006 15.25 11.2148L15.25 17.2148C15.25 17.6291 14.9142 17.9648 14.5 17.9648C14.0858 17.9648 13.75 17.6291 13.75 17.2148L13.75 11.2148C13.75 10.8006 14.0858 10.4648 14.5 10.4648Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M13.3473 1.28277C13.9124 1.33331 14.4435 1.50576 14.8996 1.84591C15.2369 2.09748 15.4712 2.40542 15.6714 2.73893C15.8569 3.04798 16.0437 3.4333 16.2555 3.8704L16.6823 4.7507H21C21.5523 4.7507 22 5.19842 22 5.7507C22 6.30299 21.5523 6.7507 21 6.7507C14.9998 6.7507 9.00019 6.7507 3 6.7507C2.44772 6.7507 2 6.30299 2 5.7507C2 5.19842 2.44772 4.7507 3 4.7507H7.40976L7.76556 3.97016C7.97212 3.51696 8.15403 3.11782 8.33676 2.79754C8.53387 2.45207 8.76721 2.13237 9.10861 1.87046C9.57032 1.51626 10.1121 1.33669 10.6899 1.28409C11.1249 1.24449 11.5634 1.24994 12 1.25064C12.5108 1.25146 12.97 1.24902 13.3473 1.28277ZM9.60776 4.7507H14.4597C14.233 4.28331 14.088 3.98707 13.9566 3.7682C13.7643 3.44787 13.5339 3.30745 13.1691 3.27482C12.9098 3.25163 12.5719 3.2507 12.0345 3.2507C11.4837 3.2507 11.137 3.25166 10.8712 3.27585C10.4971 3.30991 10.2639 3.45568 10.0739 3.78866C9.94941 4.00687 9.81387 4.29897 9.60776 4.7507Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.5 5.5L18.5 22H5.5L4.5 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M2 5.5H8M22 5.5H16M16 5.5L14.5 2H9.5L8 5.5M16 5.5H8" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M9.5 16.5L9.5 10.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M14.5 16.5L14.5 10.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M8.58085 1.85608C8.73843 1.4884 9.09997 1.25 9.5 1.25H14.5C14.9 1.25 15.2616 1.4884 15.4191 1.85608L16.6594 4.75H22V6.75H2V4.75H7.3406L8.58085 1.85608ZM9.51654 4.75H14.4835L13.8406 3.25H10.1594L9.51654 4.75Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M19.2492 22.0454L20.2492 5.54541H3.75195L4.75195 22.0454C4.77595 22.4413 5.10399 22.75 5.50058 22.75H18.5006C18.8972 22.75 19.2252 22.4413 19.2492 22.0454ZM10.501 17V11H8.50098L8.50098 17H10.501ZM15.501 17V11H13.501V17H15.501Z" fill={color}/>
</Svg>
)
}
