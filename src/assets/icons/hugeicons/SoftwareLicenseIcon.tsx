
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

export default function SoftwareLicenseIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
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

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M3 8.5H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M6.5 5.5H6.50896M10.491 5.5H10.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M19.4989 2.50108L4.49892 2.5092C3.39477 2.50979 2.5 3.40505 2.5 4.50919V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.50108C21.5 3.39609 20.6039 2.50048 19.4989 2.50108Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.5 13L9.5 15L7.5 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.5 17H15.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M19.4985 1.75195C21.0179 1.75113 22.25 2.98259 22.25 4.50195V7.75086L1.75 7.75086L1.75 4.51006C1.75 2.99186 2.98031 1.76089 4.49851 1.76007L19.4985 1.75195ZM1.75 9.25086L22.25 9.25086V19.5009C22.25 21.0197 21.0188 22.2509 19.5 22.2509L4.5 22.2509C2.98122 22.2509 1.75 21.0197 1.75 19.5009L1.75 9.25086ZM6.5 4C5.94772 4 5.5 4.44772 5.5 5C5.5 5.55229 5.94772 6 6.5 6H6.50896C7.06124 6 7.50896 5.55229 7.50896 5C7.50896 4.44772 7.06124 4 6.50896 4H6.5ZM10.491 4C9.93874 4 9.49102 4.44772 9.49102 5C9.49102 5.55229 9.93874 6 10.491 6H10.5C11.0523 6 11.5 5.55229 11.5 5C11.5 4.44772 11.0523 4 10.5 4H10.491ZM6.96967 12.4697C7.26256 12.1768 7.73744 12.1768 8.03033 12.4697L10.0303 14.4697C10.3232 14.7626 10.3232 15.2374 10.0303 15.5303L8.03033 17.5303C7.73744 17.8232 7.26256 17.8232 6.96967 17.5303C6.67678 17.2374 6.67678 16.7626 6.96967 16.4697L8.43934 15L6.96967 13.5303C6.67678 13.2374 6.67678 12.7626 6.96967 12.4697ZM12.5 16.25C12.0858 16.25 11.75 16.5858 11.75 17C11.75 17.4142 12.0858 17.75 12.5 17.75L15.5 17.75C15.9142 17.75 16.25 17.4142 16.25 17C16.25 16.5858 15.9142 16.25 15.5 16.25L12.5 16.25Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 10.8633 21.5 9.87091 21.4773 9H2.52275C2.5 9.87091 2.5 10.8633 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088Z" fill={color}/>
<Path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M2.5 9H21.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M6.99981 6H7.00879" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10.9998 6H11.0088" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8 13L9.22654 14.0572C9.74218 14.5016 10 14.7239 10 15C10 15.2761 9.74218 15.4984 9.22654 15.9428L8 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 17H16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M2.5 9H21.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M7 6H7.00898" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11 6H11.009" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M8 13L9.22654 14.0572C9.74218 14.5016 10 14.7239 10 15C10 15.2761 9.74218 15.4984 9.22654 15.9428L8 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M12 17H16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12.0572 1.75H11.9428C9.75213 1.74999 8.03144 1.74998 6.68803 1.93059C5.31137 2.11568 4.21911 2.50272 3.36092 3.36091C2.50272 4.21911 2.11568 5.31137 1.9306 6.68802C1.89118 6.98118 1.86037 7.29229 1.83628 7.62234C1.81506 7.91313 1.80445 8.05853 1.89345 8.15427C1.98245 8.25 2.13094 8.25 2.42793 8.25H21.5721C21.8691 8.25 22.0176 8.25 22.1066 8.15427C22.1956 8.05853 22.1849 7.91313 22.1637 7.62234C22.1396 7.29229 22.1088 6.98118 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM22.2469 10.3424C22.2452 10.0638 22.2444 9.92444 22.1566 9.83722C22.0689 9.75 21.9289 9.75 21.649 9.75H2.35096C2.07108 9.75 1.93114 9.75 1.84339 9.83722C1.75563 9.92444 1.75478 10.0638 1.75307 10.3424C1.74999 10.8457 1.75 11.3786 1.75 11.9427V11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 11.3787 22.25 10.8458 22.2469 10.3424ZM6 5C6 4.44772 6.44571 4 6.99553 4H7.00447C7.55429 4 8 4.44772 8 5C8 5.55228 7.55429 6 7.00447 6H6.99553C6.44571 6 6 5.55228 6 5ZM10.9955 4C10.4457 4 10 4.44772 10 5C10 5.55228 10.4457 6 10.9955 6H11.0045C11.5543 6 12 5.55228 12 5C12 4.44772 11.5543 4 11.0045 4H10.9955ZM7.4319 13.5104C7.16147 13.8241 7.19659 14.2977 7.51034 14.5681L8.73688 15.6253C8.93658 15.7974 9.06848 15.9123 9.15913 16C9.06848 16.0878 8.93658 16.2026 8.73688 16.3747L7.51034 17.4319C7.19659 17.7023 7.16147 18.1759 7.4319 18.4897C7.70233 18.8034 8.17591 18.8385 8.48966 18.5681L9.7162 17.5109L9.74757 17.4839L9.74758 17.4839C9.97804 17.2853 10.2051 17.0898 10.3682 16.9054C10.5487 16.7015 10.75 16.4046 10.75 16C10.75 15.5954 10.5487 15.2985 10.3682 15.0946C10.205 14.9103 9.97803 14.7147 9.74757 14.5161L9.74757 14.5161L9.7162 14.4891L8.48966 13.4319C8.17591 13.1615 7.70233 13.1966 7.4319 13.5104ZM12 17.25C11.5858 17.25 11.25 17.5858 11.25 18C11.25 18.4142 11.5858 18.75 12 18.75H16C16.4142 18.75 16.75 18.4142 16.75 18C16.75 17.5858 16.4142 17.25 16 17.25H12Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M22.2469 10.3424C22.2452 10.0638 22.2444 9.92444 22.1566 9.83722C22.0689 9.75 21.9289 9.75 21.649 9.75H2.35096C2.07108 9.75 1.93114 9.75 1.84339 9.83722C1.75563 9.92444 1.75478 10.0638 1.75307 10.3424C1.74999 10.8458 1.75 11.3787 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 11.3787 22.25 10.8458 22.2469 10.3424Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.0579 1.75H11.9435H11.9435C9.75282 1.74999 8.03214 1.74998 6.68872 1.93059C5.31207 2.11568 4.21981 2.50272 3.36161 3.36091C2.50342 4.21911 2.11638 5.31137 1.93129 6.68802C1.89188 6.98118 1.86107 7.29229 1.83698 7.62234C1.81576 7.91313 1.80515 8.05853 1.89415 8.15427C1.98315 8.25 2.13164 8.25 2.42863 8.25H21.5728C21.8698 8.25 22.0183 8.25 22.1073 8.15427C22.1963 8.05853 22.1856 7.91313 22.1644 7.62234C22.1403 7.29229 22.1095 6.98118 22.0701 6.68802C21.885 5.31137 21.498 4.21911 20.6398 3.36091C19.7816 2.50272 18.6893 2.11568 17.3127 1.93059C15.9693 1.74998 14.2486 1.74999 12.0579 1.75H12.0579ZM6 5C6 4.44772 6.44571 4 6.99553 4H7.00447C7.55429 4 8 4.44772 8 5C8 5.55229 7.55429 6 7.00447 6H6.99553C6.44571 6 6 5.55229 6 5ZM10.9955 4C10.4457 4 10 4.44772 10 5C10 5.55229 10.4457 6 10.9955 6H11.0045C11.5543 6 12 5.55229 12 5C12 4.44772 11.5543 4 11.0045 4H10.9955Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M7.4319 13.5104C7.16147 13.8241 7.19659 14.2977 7.51034 14.5681L8.73688 15.6253C8.93658 15.7974 9.06848 15.9123 9.15913 16C9.06848 16.0878 8.93658 16.2026 8.73688 16.3747L7.51034 17.4319C7.19659 17.7023 7.16147 18.1759 7.4319 18.4897C7.70233 18.8034 8.17591 18.8385 8.48966 18.5681L9.7162 17.5109C9.72666 17.5019 9.73712 17.4929 9.74757 17.4839C9.97803 17.2853 10.205 17.0898 10.3682 16.9054C10.5487 16.7015 10.75 16.4046 10.75 16C10.75 15.5954 10.5487 15.2985 10.3682 15.0946C10.205 14.9103 9.97803 14.7147 9.74757 14.5161C9.73712 14.5071 9.72666 14.4981 9.7162 14.4891L8.48966 13.4319C8.17591 13.1615 7.70233 13.1966 7.4319 13.5104Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M11.25 18C11.25 17.5858 11.5858 17.25 12 17.25H16C16.4142 17.25 16.75 17.5858 16.75 18C16.75 18.4142 16.4142 18.75 16 18.75H12C11.5858 18.75 11.25 18.4142 11.25 18Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M3 3V21L21 21V3H3Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M2.5 9H21.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M6.99981 6H7.00879" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
<Path d="M10.9998 6H11.0088" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
<Path d="M8 13L10 15L8 17" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12 17H16" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V8.25H21.75V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM6 4.25H8.00898V6.25H6V4.25ZM10 4.25H12.009V6.25H10V4.25Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M21.75 9.75H2.25V21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.1989 21.75 21.3897 21.671 21.5303 21.5303C21.671 21.3897 21.75 21.1989 21.75 21V9.75ZM7.46875 14.17L8.93842 15.6397L7.46875 17.1094L8.52941 18.17L11.0597 15.6397L8.52941 13.1094L7.46875 14.17ZM11.9991 18.3897H15.9991V16.8897H11.9991V18.3897Z" fill={color}/>
</Svg>
)
}
