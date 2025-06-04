
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

export default function SortingDownIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M6 15.5L18.0001 15.5001" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3 11.5H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8 2.5V8.5M8 8.5L6 6.5M8 8.5L10 6.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 15.5V21.5M12 21.5L10 19.5M12 21.5L14 19.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 2.5V8.5M16 8.5L14 6.5M16 8.5L18 6.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M6 6L8 8L10 6M8 2.5V7.39122" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14 6L16 8L18 6M16 2.5V7.39122" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10 19L12 21L14 19M12 15.5V20.3912" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M6.5 15H17.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3.5 11H20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M8.00003 1.5C8.55231 1.5 9.00003 1.94772 9.00003 2.5V5H10C10.4045 5 10.7691 5.24364 10.9239 5.61732C11.0787 5.99099 10.9931 6.42111 10.7071 6.70711L8.70714 8.70711C8.31661 9.09763 7.68345 9.09763 7.29292 8.70711L5.29292 6.70711C5.00692 6.42111 4.92137 5.99099 5.07615 5.61732C5.23093 5.24364 5.59557 5 6.00003 5H7.00003V2.5C7.00003 1.94772 7.44774 1.5 8.00003 1.5Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M16 1.5C16.5523 1.5 17 1.94772 17 2.5V5H18C18.4045 5 18.7691 5.24364 18.9239 5.61732C19.0787 5.99099 18.9931 6.42111 18.7071 6.70711L16.7071 8.70711C16.3166 9.09763 15.6834 9.09763 15.2929 8.70711L13.2929 6.70711C13.0069 6.42111 12.9214 5.99099 13.0761 5.61732C13.2309 5.24364 13.5956 5 14 5H15V2.5C15 1.94772 15.4477 1.5 16 1.5Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 14.5C12.5523 14.5 13 14.9477 13 15.5V18H14C14.4045 18 14.7691 18.2436 14.9239 18.6173C15.0787 18.991 14.9931 19.4211 14.7071 19.7071L12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071L9.29292 19.7071C9.00692 19.4211 8.92137 18.991 9.07615 18.6173C9.23093 18.2436 9.59557 18 10 18H11V15.5C11 14.9477 11.4477 14.5 12 14.5Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M5.5 15C5.5 15.5523 5.94772 16 6.5 16H17.5C18.0523 16 18.5 15.5523 18.5 15C18.5 14.4477 18.0523 14 17.5 14H6.5C5.94772 14 5.5 14.4477 5.5 15Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M2.5 11C2.5 11.5523 2.94772 12 3.5 12H20.5C21.0523 12 21.5 11.5523 21.5 11C21.5 10.4477 21.0523 10 20.5 10H3.5C2.94772 10 2.5 10.4477 2.5 11Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M6.00098 15L18.0011 15.0001" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M3.00098 11H21.001" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M16.001 2V8M16.001 8L14.001 6M16.001 8L18.001 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M8.00098 2V8M8.00098 8L6.00098 6M8.00098 8L10.001 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.001 15.0001V21.0001M12.001 21.0001L10.001 19.0001M12.001 21.0001L14.001 19.0001" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M3 11.489H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8 2.49774V8.66428M8 8.66428L6 6.66428M8 8.66428L10 6.66428" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M6 15.5163L18.0001 15.5164M12 15.7232V21.5022M12 21.5022L10 19.7232M12 21.5022L14 19.7232" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 2.49774V8.66416M16 8.66416L14 6.66416M16 8.66416L18 6.66416" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M8.84702 5.06667H9.82995C9.83564 5.06667 9.84197 5.06665 9.84888 5.06663C9.92044 5.06644 10.0539 5.06608 10.1718 5.08288C10.3046 5.1018 10.6908 5.17881 10.8975 5.56028C11.1028 5.93913 10.9468 6.27801 10.8841 6.39369C10.8296 6.49414 10.7513 6.59611 10.7098 6.65003C10.7058 6.65526 10.7021 6.66003 10.6989 6.6643C10.4486 6.99207 10.0356 7.51644 9.6222 7.96481C9.41754 8.18678 9.19413 8.41069 8.97746 8.58558C8.86966 8.67258 8.74386 8.7636 8.60693 8.83671C8.48561 8.90149 8.26896 9 8 9C7.73104 9 7.51439 8.90149 7.39307 8.83671C7.25614 8.7636 7.13034 8.67258 7.02254 8.58558C6.80587 8.41069 6.58246 8.18678 6.3778 7.9648C5.96443 7.51644 5.55136 6.99207 5.30112 6.6643C5.29785 6.66003 5.29418 6.65525 5.29017 6.65003C5.24874 6.59611 5.1704 6.49414 5.11592 6.39369C5.05317 6.27801 4.89725 5.93913 5.10253 5.56028C5.30923 5.17881 5.69543 5.1018 5.82822 5.08288C5.94614 5.06608 6.07956 5.06644 6.15112 5.06663C6.15803 5.06665 6.16436 5.06667 6.17005 5.06667H7.15298V2.05C7.15298 1.60817 7.53221 1.25 8 1.25C8.46779 1.25 8.84702 1.60817 8.84702 2.05V5.06667Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.847 17.8167H13.83C13.8356 17.8167 13.842 17.8167 13.8489 17.8166C13.9204 17.8164 14.0539 17.8161 14.1718 17.8329C14.3046 17.8518 14.6908 17.9288 14.8975 18.3103C15.1028 18.6891 14.9468 19.028 14.8841 19.1437C14.8296 19.2441 14.7513 19.3461 14.7098 19.4C14.7058 19.4053 14.7021 19.41 14.6989 19.4143C14.4486 19.7421 14.0356 20.2664 13.6222 20.7148C13.4175 20.9368 13.1941 21.1607 12.9775 21.3356C12.8697 21.4226 12.7439 21.5136 12.6069 21.5867C12.4856 21.6515 12.269 21.75 12 21.75C11.731 21.75 11.5144 21.6515 11.3931 21.5867C11.2561 21.5136 11.1303 21.4226 11.0225 21.3356C10.8059 21.1607 10.5825 20.9368 10.3778 20.7148C9.96443 20.2664 9.55136 19.7421 9.30112 19.4143C9.29785 19.41 9.29418 19.4053 9.29017 19.4C9.24874 19.3461 9.1704 19.2441 9.11592 19.1437C9.05317 19.028 8.89725 18.6891 9.10253 18.3103C9.30923 17.9288 9.69543 17.8518 9.82822 17.8329C9.94614 17.8161 10.0796 17.8164 10.1511 17.8166C10.158 17.8166 10.1644 17.8167 10.17 17.8167H11.153V14.8C11.153 14.3582 11.5322 14 12 14C12.4678 14 12.847 14.3582 12.847 14.8V17.8167Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M16.847 5.06667H17.83C17.8356 5.06667 17.842 5.06665 17.8489 5.06663C17.9204 5.06644 18.0539 5.06608 18.1718 5.08288C18.3046 5.1018 18.6908 5.17881 18.8975 5.56028C19.1028 5.93913 18.9468 6.27801 18.8841 6.39369C18.8296 6.49414 18.7513 6.59611 18.7098 6.65003C18.7058 6.65526 18.7021 6.66003 18.6989 6.6643C18.4486 6.99207 18.0356 7.51644 17.6222 7.96481C17.4175 8.18678 17.1941 8.41069 16.9775 8.58558C16.8697 8.67258 16.7439 8.7636 16.6069 8.83671C16.4856 8.90149 16.269 9 16 9C15.731 9 15.5144 8.90149 15.3931 8.83671C15.2561 8.7636 15.1303 8.67258 15.0225 8.58558C14.8059 8.41069 14.5825 8.18678 14.3778 7.9648C13.9644 7.51644 13.5514 6.99207 13.3011 6.6643C13.2979 6.66003 13.2942 6.65525 13.2902 6.65003C13.2487 6.59611 13.1704 6.49414 13.1159 6.39369C13.0532 6.27801 12.8972 5.93913 13.1025 5.56028C13.3092 5.17881 13.6954 5.1018 13.8282 5.08288C13.9461 5.06608 14.0796 5.06644 14.1511 5.06663C14.158 5.06665 14.1644 5.06667 14.17 5.06667H15.153V2.05C15.153 1.60817 15.5322 1.25 16 1.25C16.4678 1.25 16.847 1.60817 16.847 2.05V5.06667Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M5 15C5 14.4477 5.44772 14 6 14L18.0001 14.0001C18.5523 14.0001 19.0001 14.4478 19.0001 15.0001C19.0001 15.5524 18.5523 16.0001 18.0001 16.0001L5.99999 16C5.44771 16 4.99999 15.5523 5 15Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M2 11C2 10.4477 2.44772 10 3 10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H3C2.44772 12 2 11.5523 2 11Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M8.84702 5.06667H9.82995C9.83564 5.06667 9.84197 5.06665 9.84888 5.06663C9.92044 5.06644 10.0539 5.06608 10.1718 5.08288C10.3046 5.1018 10.6908 5.17881 10.8975 5.56028C11.1028 5.93913 10.9468 6.27801 10.8841 6.39369C10.8296 6.49414 10.7513 6.59611 10.7098 6.65003C10.7058 6.65526 10.7021 6.66003 10.6989 6.6643C10.4486 6.99207 10.0356 7.51644 9.6222 7.96481C9.41754 8.18678 9.19413 8.41069 8.97746 8.58558C8.86966 8.67258 8.74386 8.7636 8.60693 8.83671C8.48561 8.90149 8.26896 9 8 9C7.73104 9 7.51439 8.90149 7.39307 8.83671C7.25614 8.7636 7.13034 8.67258 7.02254 8.58558C6.80587 8.41069 6.58246 8.18678 6.3778 7.9648C5.96443 7.51644 5.55136 6.99207 5.30112 6.6643C5.29785 6.66003 5.29418 6.65525 5.29017 6.65003C5.24874 6.59611 5.1704 6.49414 5.11592 6.39369C5.05317 6.27801 4.89725 5.93913 5.10253 5.56028C5.30923 5.17881 5.69543 5.1018 5.82822 5.08288C5.94614 5.06608 6.07956 5.06644 6.15112 5.06663C6.15803 5.06665 6.16436 5.06667 6.17005 5.06667H7.15298V2.05C7.15298 1.60817 7.53221 1.25 8 1.25C8.46779 1.25 8.84702 1.60817 8.84702 2.05V5.06667Z" fill={color}/>
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M12.847 17.8167H13.83C13.8356 17.8167 13.842 17.8167 13.8489 17.8166C13.9204 17.8164 14.0539 17.8161 14.1718 17.8329C14.3046 17.8518 14.6908 17.9288 14.8975 18.3103C15.1028 18.6891 14.9468 19.028 14.8841 19.1437C14.8296 19.2441 14.7513 19.3461 14.7098 19.4C14.7058 19.4053 14.7021 19.41 14.6989 19.4143C14.4486 19.7421 14.0356 20.2664 13.6222 20.7148C13.4175 20.9368 13.1941 21.1607 12.9775 21.3356C12.8697 21.4226 12.7439 21.5136 12.6069 21.5867C12.4856 21.6515 12.269 21.75 12 21.75C11.731 21.75 11.5144 21.6515 11.3931 21.5867C11.2561 21.5136 11.1303 21.4226 11.0225 21.3356C10.8059 21.1607 10.5825 20.9368 10.3778 20.7148C9.96443 20.2664 9.55136 19.7421 9.30112 19.4143C9.29785 19.41 9.29418 19.4053 9.29017 19.4C9.24874 19.3461 9.1704 19.2441 9.11592 19.1437C9.05317 19.028 8.89725 18.6891 9.10253 18.3103C9.30923 17.9288 9.69543 17.8518 9.82822 17.8329C9.94614 17.8161 10.0796 17.8164 10.1511 17.8166C10.158 17.8166 10.1644 17.8167 10.17 17.8167H11.153V14.8C11.153 14.3582 11.5322 14 12 14C12.4678 14 12.847 14.3582 12.847 14.8V17.8167Z" fill={color}/>
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M16.847 5.06667H17.83C17.8356 5.06667 17.842 5.06665 17.8489 5.06663C17.9204 5.06644 18.0539 5.06608 18.1718 5.08288C18.3046 5.1018 18.6908 5.17881 18.8975 5.56028C19.1028 5.93913 18.9468 6.27801 18.8841 6.39369C18.8296 6.49414 18.7513 6.59611 18.7098 6.65003C18.7058 6.65526 18.7021 6.66003 18.6989 6.6643C18.4486 6.99207 18.0356 7.51644 17.6222 7.96481C17.4175 8.18678 17.1941 8.41069 16.9775 8.58558C16.8697 8.67258 16.7439 8.7636 16.6069 8.83671C16.4856 8.90149 16.269 9 16 9C15.731 9 15.5144 8.90149 15.3931 8.83671C15.2561 8.7636 15.1303 8.67258 15.0225 8.58558C14.8059 8.41069 14.5825 8.18678 14.3778 7.9648C13.9644 7.51644 13.5514 6.99207 13.3011 6.6643C13.2979 6.66003 13.2942 6.65525 13.2902 6.65003C13.2487 6.59611 13.1704 6.49414 13.1159 6.39369C13.0532 6.27801 12.8972 5.93913 13.1025 5.56028C13.3092 5.17881 13.6954 5.1018 13.8282 5.08288C13.9461 5.06608 14.0796 5.06644 14.1511 5.06663C14.158 5.06665 14.1644 5.06667 14.17 5.06667H15.153V2.05C15.153 1.60817 15.5322 1.25 16 1.25C16.4678 1.25 16.847 1.60817 16.847 2.05V5.06667Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M5 15C5 14.4477 5.44772 14 6 14L18.0001 14.0001C18.5523 14.0001 19.0001 14.4478 19.0001 15.0001C19.0001 15.5524 18.5523 16.0001 18.0001 16.0001L5.99999 16C5.44771 16 4.99999 15.5523 5 15Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M2 11C2 10.4477 2.44772 10 3 10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H3C2.44772 12 2 11.5523 2 11Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M6 15.4808L18.0001 15.4809" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M3 11.4893H21" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M7.99605 2.49902V8.50979M5.5 5.99742L7.98666 8.51919L10.5 6.00157" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M11.996 15.4808V21.4916M9.5 18.9792L11.9867 21.501L14.5 18.9834" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M15.996 2.49902V8.50979M13.5 5.99742L15.9867 8.51919L18.5 6.00157" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M18.0001 16.0001L5.99999 16L6 14L18.0001 14.0001L18.0001 16.0001Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M21 12H3V10H21V12Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M17 2V5.58579L17.7929 4.79289L19.2071 6.20711L16 9.41421L12.7929 6.20711L14.2071 4.79289L15 5.58579V2H17Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.00001 2V5.58579L9.79291 4.79289L11.2071 6.20711L8.00001 9.41421L4.79291 6.20711L6.20712 4.79289L7.00001 5.58579V2H9.00001Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M13 15V18.1716L13.7929 17.3787L15.2071 18.7929L12 22L8.79291 18.7929L10.2071 17.3787L11 18.1716V15H13Z" fill={color}/>
</Svg>
)
}
