
import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
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

export default function TextIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15 21.001H9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 3.00001V21.0008M12 3.00001C13.3874 3.00001 15.1695 3.03055 16.5884 3.17649C17.1885 3.2382 17.4886 3.26906 17.7541 3.37791C18.3066 3.60429 18.7518 4.10063 18.9194 4.67681C19 4.95382 19 5.26992 19 5.90215M12 3.00001C10.6126 3.00001 8.83047 3.03055 7.41161 3.17649C6.8115 3.2382 6.51144 3.26906 6.24586 3.37791C5.69344 3.60429 5.24816 4.10063 5.08057 4.67681C5 4.95382 5 5.26992 5 5.90215" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14.5 21H9.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 3L12 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M5 5.5V4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M6 2C4.89543 2 4 2.89543 4 4V5.5C4 6.05228 4.44772 6.5 5 6.5C5.55228 6.5 6 6.05228 6 5.5V4H11L11 20H9.5C8.94772 20 8.5 20.4477 8.5 21C8.5 21.5523 8.94772 22 9.5 22H14.5C15.0523 22 15.5 21.5523 15.5 21C15.5 20.4477 15.0523 20 14.5 20H13L13 4H18V5.5C18 6.05228 18.4477 6.5 19 6.5C19.5523 6.5 20 6.05228 20 5.5V4C20 2.89543 19.1046 2 18 2H6Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<G opacity="0.4">
<Path d="M15.3516 21H9.35156" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.3516 2.99902V20.9998M12.3516 2.99902C13.739 2.99902 15.5211 3.02956 16.94 3.1755C17.5401 3.23721 17.8402 3.26807 18.1057 3.37692C18.6582 3.6033 19.1034 4.09964 19.271 4.67582C19.3516 4.95283 19.3516 5.26893 19.3516 5.90116M12.3516 2.99902C10.9642 2.99902 9.18203 3.02956 7.76317 3.1755C7.16306 3.23721 6.863 3.26807 6.59742 3.37692C6.045 3.6033 5.59972 4.09964 5.43213 4.67582C5.35156 4.95283 5.35156 5.26893 5.35156 5.90116" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</G>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15 21H9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M12.043 3V20.9826" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M19 6.01551C19 5.38805 19 5.07433 18.9194 4.79941C18.7518 4.22758 18.3066 3.73499 17.7541 3.51031C17.4886 3.40229 17.1885 3.37167 16.5884 3.31042C15.1695 3.16559 13.3874 3.01855 12 3.01855C10.6126 3.01855 8.83047 3.16559 7.41161 3.31042C6.8115 3.37167 6.51144 3.40229 6.24586 3.51031C5.69344 3.73499 5.24816 4.22758 5.08057 4.79941C5 5.07433 5 5.38805 5 6.01551" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M8 21C8 20.4477 8.44772 20 9 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V3C11 2.44772 11.4477 2 12 2Z" fill={color}/>
<Path d="M12 4C10.6663 4 8.92639 4.14259 7.51327 4.28698C6.85365 4.35437 6.72444 4.37712 6.62294 4.41844C6.35296 4.52836 6.1222 4.78389 6.0403 5.06365C6.00976 5.16796 6.00001 5.30827 6.00001 6C6.00001 6.55228 5.5523 7 5.00001 7C4.44773 7 4.00001 6.55228 4.00001 6L3.99993 5.89007C3.99934 5.37184 3.99882 4.91856 4.12087 4.50169C4.37414 3.63663 5.03395 2.90596 5.8688 2.56607C6.27093 2.40235 6.70917 2.35808 7.20688 2.30779L7.30998 2.29733C8.73458 2.15178 10.5589 2 12 2C13.4411 2 15.2654 2.15178 16.69 2.29733L16.7931 2.30779C17.2909 2.35808 17.7291 2.40235 18.1312 2.56607C18.9661 2.90596 19.6259 3.63663 19.8792 4.50169C20.0012 4.91856 20.0007 5.37184 20.0001 5.89007L20 6C20 6.55228 19.5523 7 19 7C18.4477 7 18 6.55228 18 6C18 5.30827 17.9903 5.16796 17.9597 5.06365C17.8778 4.78389 17.6471 4.52836 17.3771 4.41844C17.2756 4.37712 17.1464 4.35437 16.4868 4.28698C15.0736 4.14259 13.3337 4 12 4Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M8 21C8 20.4477 8.44772 20 9 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21Z" fill={color}/>
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V3C11 2.44772 11.4477 2 12 2Z" fill={color}/>
<Path d="M12 4C10.6663 4 8.92639 4.14259 7.51327 4.28698C6.85365 4.35437 6.72444 4.37712 6.62294 4.41844C6.35296 4.52836 6.1222 4.78389 6.0403 5.06365C6.00976 5.16796 6.00001 5.30827 6.00001 6C6.00001 6.55228 5.5523 7 5.00001 7C4.44773 7 4.00001 6.55228 4.00001 6L3.99993 5.89007C3.99934 5.37184 3.99882 4.91856 4.12087 4.50169C4.37414 3.63663 5.03395 2.90596 5.8688 2.56607C6.27093 2.40235 6.70917 2.35808 7.20688 2.30779L7.30998 2.29733C8.73458 2.15178 10.5589 2 12 2C13.4411 2 15.2654 2.15178 16.69 2.29733L16.7931 2.30779C17.2909 2.35808 17.7291 2.40235 18.1312 2.56607C18.9661 2.90596 19.6259 3.63663 19.8792 4.50169C20.0012 4.91856 20.0007 5.37184 20.0001 5.89007L20 6C20 6.55228 19.5523 7 19 7C18.4477 7 18 6.55228 18 6C18 5.30827 17.9903 5.16796 17.9597 5.06365C17.8778 4.78389 17.6471 4.52836 17.3771 4.41844C17.2756 4.37712 17.1464 4.35437 16.4868 4.28698C15.0736 4.14259 13.3337 4 12 4Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15 21H9" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M18.9998 5.99998V3H4.99805L4.99981 5.99998" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M12.0273 3.70508V20.999" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M9 20H15V22H9V20Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M11 21V3H13V21H11Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M4.29092 2.2931C4.47847 2.10544 4.73291 2 4.99823 2L19 2C19.5523 2 20 2.44772 20 3V5.99998H18V4L5.99882 4L6 5.99939L4 6.00057L3.99823 3.00059C3.99807 2.73527 4.10336 2.48077 4.29092 2.2931Z" fill={color}/>
</Svg>
)
}
