
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

export default function AndroidIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M6.5 9.5C6.5 6.46243 8.96243 4 12 4C15.0376 4 17.5 6.46243 17.5 9.5V16C17.5 17.4142 17.5 18.1213 17.0607 18.5607C16.6213 19 15.9142 19 14.5 19H9.5C8.08579 19 7.37868 19 6.93934 18.5607C6.5 18.1213 6.5 17.4142 6.5 16V9.5Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M20 11V17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15 19V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9 19V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 11V17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10 4L8.5 2M14 4L15.5 2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M6.5 10H17.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M20 11V17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15 19V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9 19V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 11V17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10 4L8.5 2M14 4L15.5 2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M6.5 10H17.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M6.50001 9.5C6.50001 6.46243 8.96244 4 12 4C15.0376 4 17.5 6.46243 17.5 9.5V18C17.5 18.5523 17.0523 19 16.5 19H7.49992C6.94763 19 6.49991 18.5523 6.49992 18L6.50001 9.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M20 10C20.5523 10 21 10.4477 21 11V17C21 17.5523 20.5523 18 20 18C19.4477 18 19 17.5523 19 17V11C19 10.4477 19.4477 10 20 10Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M15 18C15.5523 18 16 18.4477 16 19V22C16 22.5523 15.5523 23 15 23C14.4477 23 14 22.5523 14 22V19C14 18.4477 14.4477 18 15 18Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9 18C9.55228 18 10 18.4477 10 19V22C10 22.5523 9.55228 23 9 23C8.44772 23 8 22.5523 8 22V19C8 18.4477 8.44772 18 9 18Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M4 10C4.55228 10 5 10.4477 5 11V17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17V11C3 10.4477 3.44772 10 4 10Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M7.9 1.20006C8.34183 0.868688 8.96863 0.958231 9.3 1.40006L10.8 3.40006C11.1314 3.84189 11.0418 4.46869 10.6 4.80006C10.1582 5.13143 9.53137 5.04189 9.2 4.60006L7.7 2.60006C7.36863 2.15823 7.45817 1.53143 7.9 1.20006ZM16.1 1.20006C16.5418 1.53143 16.6314 2.15823 16.3 2.60006L14.8 4.60006C14.4686 5.04189 13.8418 5.13143 13.4 4.80006C12.9582 4.46869 12.8686 3.84189 13.2 3.40006L14.7 1.40006C15.0314 0.958231 15.6582 0.868688 16.1 1.20006Z" fill={color}/>
<Path d="M5.75391 9.25H18.2441C18.1129 5.91412 15.367 3.25 11.999 3.25C8.63095 3.25 5.88513 5.91412 5.75391 9.25Z" fill={color}/>
<Path d="M18.2501 10.75H5.75008L5.75 18C5.74999 18.9665 6.5335 19.75 7.5 19.75H16.5001C17.4666 19.75 18.2501 18.9665 18.2501 18V10.75Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M9.5 19H14.5C15.9142 19 16.6213 19 17.0607 18.5607C17.5 18.1213 17.5 17.4142 17.5 16V10H6.5V16C6.5 17.4142 6.5 18.1213 6.93934 18.5607C7.37868 19 8.08579 19 9.5 19Z" fill={color}/>
<Path d="M6.5 9.5C6.5 6.46243 8.96243 4 12 4C15.0376 4 17.5 6.46243 17.5 9.5V16C17.5 17.4142 17.5 18.1213 17.0607 18.5607C16.6213 19 15.9142 19 14.5 19H9.5C8.08579 19 7.37868 19 6.93934 18.5607C6.5 18.1213 6.5 17.4142 6.5 16V9.5Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M20 11V17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15 19V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9 19V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 11V17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10 4L8.5 2M14 4L15.5 2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M6.5 10H17.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M6.5 9.5C6.5 6.46243 8.96243 4 12 4C15.0376 4 17.5 6.46243 17.5 9.5V16C17.5 17.4142 17.5 18.1213 17.0607 18.5607C16.6213 19 15.9142 19 14.5 19H9.5C8.08579 19 7.37868 19 6.93934 18.5607C6.5 18.1213 6.5 17.4142 6.5 16V9.5Z" stroke={color} strokeWidth={strokeWidth}/>
<Path opacity="0.4" d="M20 11V17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15 19V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9 19V22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M4 11V17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10 4L8.5 2M14 4L15.5 2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M6.5 10H17.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M20 10C20.5523 10 21 10.4477 21 11V17C21 17.5523 20.5523 18 20 18C19.4477 18 19 17.5523 19 17V11C19 10.4477 19.4477 10 20 10Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M15 18C15.5523 18 16 18.4477 16 19V22C16 22.5523 15.5523 23 15 23C14.4477 23 14 22.5523 14 22V19C14 18.4477 14.4477 18 15 18Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9 18C9.55228 18 10 18.4477 10 19V22C10 22.5523 9.55228 23 9 23C8.44772 23 8 22.5523 8 22V19C8 18.4477 8.44772 18 9 18Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M4 10C4.55228 10 5 10.4477 5 11V17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17V11C3 10.4477 3.44772 10 4 10Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M7.9 1.20006C8.34183 0.868688 8.96863 0.958231 9.3 1.40006L10.8 3.40006C11.1314 3.84189 11.0418 4.46869 10.6 4.80006C10.1582 5.13143 9.53137 5.04189 9.2 4.60006L7.7 2.60006C7.36863 2.15823 7.45817 1.53143 7.9 1.20006ZM16.1 1.20006C16.5418 1.53143 16.6314 2.15823 16.3 2.60006L14.8 4.60006C14.4686 5.04189 13.8418 5.13143 13.4 4.80006C12.9582 4.46869 12.8686 3.84189 13.2 3.40006L14.7 1.40006C15.0314 0.958231 15.6582 0.868688 16.1 1.20006Z" fill={color}/>
<Path d="M6.7956 9.25C6.29466 9.25 6.04419 9.25 5.89412 9.06543C5.74405 8.88087 5.79006 8.66007 5.88208 8.21847C6.4733 5.38139 8.98803 3.25 12.0006 3.25C15.0131 3.25 17.5279 5.38139 18.1191 8.21847C18.2111 8.66007 18.2571 8.88087 18.107 9.06543C17.957 9.25 17.7065 9.25 17.2056 9.25H6.7956Z" fill={color}/>
<Path d="M6.75001 10.75C6.2786 10.75 6.0429 10.75 5.89645 10.8964C5.75001 11.0429 5.75001 11.2786 5.75001 11.75L5.75 16.0494C5.74997 16.7142 5.74994 17.2871 5.81161 17.7458C5.87771 18.2375 6.02677 18.7087 6.40902 19.091C6.79126 19.4732 7.26253 19.6223 7.75416 19.6884C8.21289 19.7501 8.78573 19.75 9.45057 19.75L14.5494 19.75C15.2142 19.75 15.7871 19.7501 16.2459 19.6884C16.7375 19.6223 17.2088 19.4732 17.591 19.091C17.9732 18.7087 18.1223 18.2375 18.1884 17.7458C18.2501 17.2871 18.25 16.7143 18.25 16.0494L18.25 11.75C18.25 11.2786 18.25 11.0429 18.1036 10.8964C17.9571 10.75 17.7214 10.75 17.25 10.75H6.75001Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M20 10C20.5523 10 21 10.4477 21 11V17C21 17.5523 20.5523 18 20 18C19.4477 18 19 17.5523 19 17V11C19 10.4477 19.4477 10 20 10Z" fill={color}/>
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M4 10C4.55228 10 5 10.4477 5 11V17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17V11C3 10.4477 3.44772 10 4 10Z" fill={color}/>
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M7.9 1.20006C8.34183 0.868688 8.96863 0.958231 9.3 1.40006L10.8 3.40006C11.1314 3.84189 11.0418 4.46869 10.6 4.80006C10.1582 5.13143 9.53137 5.04189 9.2 4.60006L7.7 2.60006C7.36863 2.15823 7.45817 1.53143 7.9 1.20006ZM16.1 1.20006C16.5418 1.53143 16.6314 2.15823 16.3 2.60006L14.8 4.60006C14.4686 5.04189 13.8418 5.13143 13.4 4.80006C12.9582 4.46869 12.8686 3.84189 13.2 3.40006L14.7 1.40006C15.0314 0.958231 15.6582 0.868688 16.1 1.20006Z" fill={color}/>
<Path d="M6.7956 9.25C6.29466 9.25 6.04419 9.25 5.89412 9.06543C5.74405 8.88087 5.79006 8.66007 5.88208 8.21847C6.4733 5.38139 8.98803 3.25 12.0006 3.25C15.0131 3.25 17.5279 5.38139 18.1191 8.21847C18.2111 8.66007 18.2571 8.88087 18.107 9.06543C17.957 9.25 17.7065 9.25 17.2056 9.25H6.7956Z" fill={color}/>
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M10 19.75V22C10 22.5523 9.55229 23 9 23C8.44772 23 8 22.5523 8 22V19.715C7.91478 19.7077 7.83279 19.699 7.75416 19.6884C7.26253 19.6223 6.79126 19.4732 6.40902 19.091C6.02677 18.7087 5.87771 18.2375 5.81161 17.7458C5.74994 17.2871 5.74997 16.7142 5.75 16.0494V16.0494L5.75001 11.75C5.75001 11.2786 5.75001 11.0429 5.89645 10.8964C6.0429 10.75 6.2786 10.75 6.75001 10.75L17.25 10.75C17.7214 10.75 17.9571 10.75 18.1036 10.8964C18.25 11.0429 18.25 11.2786 18.25 11.75L18.25 16.0494V16.0494C18.25 16.7143 18.2501 17.2871 18.1884 17.7458C18.1223 18.2375 17.9732 18.7087 17.591 19.091C17.2088 19.4732 16.7375 19.6223 16.2459 19.6884C16.1672 19.699 16.0852 19.7077 16 19.715V22C16 22.5523 15.5523 23 15 23C14.4477 23 14 22.5523 14 22V19.75L10 19.75Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M20 11V17" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M15 19V22" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M9 19V22" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M4 11V17" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M10 4L8.5 2M14 4L15.5 2" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M6.5 10H17.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M6.5 9.5C6.5 6.46243 8.96243 4 12 4C15.0376 4 17.5 6.46243 17.5 9.5V18.98C17.5 18.991 17.491 19 17.48 19H6.52C6.50895 19 6.5 18.991 6.5 18.98V9.5Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M19 17.25V11.25H21V17.25H19Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M14 22.25V19.25H16V22.25H14Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8 22.25V19.25H10V22.25H8Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M3 17.25V11.25H5V17.25H3Z" fill={color}/>
<Path d="M18.25 19.25V11H5.75V19.25C5.75 19.6642 6.08579 20 6.5 20H17.5C17.9142 20 18.25 19.6642 18.25 19.25Z" fill={color}/>
<Path d="M9.07991 4.22269C7.16854 5.23456 5.84504 7.20883 5.75491 9.5H18.2451C18.155 7.20906 16.8317 5.23495 14.9207 4.22298L16.1004 2.65L14.9004 1.75L13.4594 3.67131C12.9912 3.55931 12.5025 3.5 12 3.5C11.4977 3.5 11.0093 3.55925 10.5413 3.67115L9.10039 1.75L7.90039 2.65L9.07991 4.22269Z" fill={color}/>
</Svg>
)
}
