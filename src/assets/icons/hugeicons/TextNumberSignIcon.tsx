
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

export default function TextNumberSignIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2 20V7.02172C2 5.10465 2 4.00007 2.4389 4.00007C2.95995 4.00007 3.33531 4.66033 4.25033 6.27292L10.7497 17.7271C11.6647 19.3397 12.0233 20 12.5611 20C13 20 13 18.8954 13 16.9784V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 13L22 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.5806 4.58081C17.3546 3.80672 20.6454 3.80672 21.4194 4.58081C22.1935 5.35489 22.1935 8.6456 21.4194 9.41968C20.6454 10.1938 17.3546 10.1938 16.5806 9.41968C15.8065 8.6456 15.8065 5.35489 16.5806 4.58081Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2 20V4.00009L13 20V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 13L22 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.002 5.50009C16.002 4.67163 16.6736 4.00001 17.502 4.00001L20.5001 4C21.3285 4 22.0001 4.67155 22.0001 5.49997L22.0002 8.49998C22.0002 9.32842 21.3286 10 20.5002 10H17.5022C16.6738 10 16.0023 9.32849 16.0022 8.5001L16.002 5.50009Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.73307 3.03637C2.16624 2.91639 2.62623 3.10016 2.85749 3.48559L10 15.3897V4C10 3.44772 10.4477 3 11 3C11.5523 3 12 3.44772 12 4V19C12 19.4495 11.7001 19.8437 11.2669 19.9637C10.8338 20.0837 10.3738 19.8999 10.1425 19.5145L3 7.61039V19C3 19.5523 2.55228 20 2 20C1.44772 20 1 19.5523 1 19V4.00009C1 3.55061 1.29989 3.15636 1.73307 3.03637Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M14 14C14 13.4477 14.4477 13 15 13L21 13C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15L15 15C14.4477 15 14 14.5523 14 14Z" fill={color}/>
<Path d="M16.5019 3L19.5 3C20.8807 3 22 4.11925 22 5.49994L22.0001 8.49995C22.0001 9.88069 20.8808 11 19.5001 11H16.5021C15.1215 11 14.0022 9.88081 14.0021 8.50015L14.002 5.50015C14.0019 4.11938 15.1212 3.00001 16.5019 3Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M16.5806 4.58056C17.3546 3.80648 20.6454 3.80648 21.4194 4.58056C22.1935 5.35464 22.1935 8.64536 21.4194 9.41944C20.6454 10.1935 17.3546 10.1935 16.5806 9.41944C15.8065 8.64536 15.8065 5.35464 16.5806 4.58056Z" fill={color}/>
<Path d="M2 20V7.02172C2 5.10465 2 4.00007 2.4389 4.00007C2.95995 4.00007 3.33531 4.66033 4.25033 6.27292L10.7497 17.7271C11.6647 19.3397 12.0233 20 12.5611 20C13 20 13 18.8954 13 16.9784V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 13L22 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.5806 4.58081C17.3546 3.80672 20.6454 3.80672 21.4194 4.58081C22.1935 5.35489 22.1935 8.6456 21.4194 9.41968C20.6454 10.1938 17.3546 10.1938 16.5806 9.41968C15.8065 8.6456 15.8065 5.35489 16.5806 4.58081Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2 20V7.02172C2 5.10465 2 4.00007 2.4389 4.00007C2.95995 4.00007 3.33531 4.66033 4.25033 6.27292L10.7497 17.7271C11.6647 19.3397 12.0233 20 12.5611 20C13 20 13 18.8954 13 16.9784V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M16 13L22 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M16.5806 4.58081C17.3546 3.80672 20.6454 3.80672 21.4194 4.58081C22.1935 5.35489 22.1935 8.6456 21.4194 9.41968C20.6454 10.1938 17.3546 10.1938 16.5806 9.41968C15.8065 8.6456 15.8065 5.35489 16.5806 4.58081Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M13 3C13.5523 3 14 3.44772 14 4L14 17.0397C14 17.9469 14.0001 18.7448 13.9395 19.3139C13.9097 19.594 13.8561 19.9281 13.7225 20.2171C13.5771 20.5318 13.2205 21 12.5611 21C11.7883 21 11.3035 20.4828 10.993 20.0631C10.6992 19.6661 10.3719 19.0885 9.97593 18.39L9.87993 18.2207L3.38059 6.76643C3.23887 6.51667 3.11394 6.29689 3.00238 6.10338C3.00017 6.37572 3 6.68108 3 7.02172V20C3 20.5523 2.55229 21 2 21C1.44772 21 1 20.5523 1 20V7.02172L1 6.96036V6.9603C0.999971 6.0531 0.999945 5.25528 1.06047 4.68622C1.09028 4.40605 1.14388 4.07195 1.27747 3.78299C1.42294 3.46832 1.77949 3.00007 2.4389 3.00007C3.20678 3.00007 3.69199 3.52282 3.99859 3.93406C4.31037 4.35224 4.65926 4.9672 5.08561 5.71867L5.08562 5.71868L5.12007 5.77942L11.6626 17.3098C11.7871 17.5292 11.8979 17.7245 11.9976 17.8983C11.9998 17.6256 12 17.3197 12 16.9784V4C12 3.44772 12.4477 3 13 3Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M15.5 13C15.5 12.4477 15.9477 12 16.5 12L22 12C22.5523 12 23 12.4477 23 13C23 13.5523 22.5523 14 22 14L16.5 14C15.9477 14 15.5 13.5523 15.5 13Z" fill={color}/>
<Path d="M20.8605 3.41348C21.3223 3.51754 21.8498 3.70029 22.1998 4.05023C22.5497 4.40017 22.7325 4.92767 22.8365 5.3895C22.948 5.88426 23 6.44925 23 7C23 7.55075 22.948 8.11574 22.8365 8.6105C22.7325 9.07233 22.5497 9.59983 22.1998 9.94977C21.8498 10.2997 21.3223 10.4825 20.8605 10.5865C20.3657 10.698 19.8007 10.75 19.25 10.75C18.6993 10.75 18.1343 10.698 17.6395 10.5865C17.1777 10.4825 16.6502 10.2997 16.3002 9.94977C15.9503 9.59983 15.7675 9.07233 15.6635 8.6105C15.552 8.11574 15.5 7.55075 15.5 7C15.5 6.44925 15.552 5.88426 15.6635 5.3895C15.7675 4.92767 15.9503 4.40017 16.3002 4.05023C16.6502 3.70029 17.1777 3.51754 17.6395 3.41348C18.1343 3.30201 18.6993 3.25 19.25 3.25C19.8007 3.25 20.3657 3.30201 20.8605 3.41348Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M13 3C13.5523 3 14 3.44772 14 4L14 17.0397C14 17.9469 14.0001 18.7448 13.9395 19.3139C13.9097 19.594 13.8561 19.9281 13.7225 20.2171C13.5771 20.5318 13.2205 21 12.5611 21C11.7883 21 11.3035 20.4828 10.993 20.0631C10.6992 19.6661 10.3719 19.0885 9.97593 18.39L9.87993 18.2207L3.38059 6.76643C3.23887 6.51667 3.11394 6.29689 3.00238 6.10338C3.00017 6.37572 3 6.68108 3 7.02172V20C3 20.5523 2.55229 21 2 21C1.44772 21 1 20.5523 1 20V7.02172L1 6.96036V6.9603C0.999971 6.0531 0.999945 5.25528 1.06047 4.68622C1.09028 4.40605 1.14388 4.07195 1.27747 3.78299C1.42294 3.46832 1.77949 3.00007 2.4389 3.00007C3.20678 3.00007 3.69199 3.52282 3.99859 3.93406C4.31037 4.35224 4.65926 4.9672 5.08561 5.71867L5.08562 5.71868L5.12007 5.77942L11.6626 17.3098C11.7871 17.5292 11.8979 17.7245 11.9976 17.8983C11.9998 17.6256 12 17.3197 12 16.9784V4C12 3.44772 12.4477 3 13 3Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M15.5 13C15.5 12.4477 15.9477 12 16.5 12L22 12C22.5523 12 23 12.4477 23 13C23 13.5523 22.5523 14 22 14L16.5 14C15.9477 14 15.5 13.5523 15.5 13Z" fill={color}/>
<Path d="M20.8605 3.41348C21.3223 3.51754 21.8498 3.70029 22.1998 4.05023C22.5497 4.40017 22.7325 4.92767 22.8365 5.3895C22.948 5.88426 23 6.44925 23 7C23 7.55075 22.948 8.11574 22.8365 8.6105C22.7325 9.07233 22.5497 9.59983 22.1998 9.94977C21.8498 10.2997 21.3223 10.4825 20.8605 10.5865C20.3657 10.698 19.8007 10.75 19.25 10.75C18.6993 10.75 18.1343 10.698 17.6395 10.5865C17.1777 10.4825 16.6502 10.2997 16.3002 9.94977C15.9503 9.59983 15.7675 9.07233 15.6635 8.6105C15.552 8.11574 15.5 7.55075 15.5 7C15.5 6.44925 15.552 5.88426 15.6635 5.3895C15.7675 4.92767 15.9503 4.40017 16.3002 4.05023C16.6502 3.70029 17.1777 3.51754 17.6395 3.41348C18.1343 3.30201 18.6993 3.25 19.25 3.25C19.8007 3.25 20.3657 3.30201 20.8605 3.41348Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2 20V4.00009L13 20V4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
<Path d="M16 13L22 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
<Path d="M16.0017 4.00001L21.9998 4L22 10H16.0021L16.0017 4.00001Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M14 3V20C14 20.438 13.7149 20.8251 13.2966 20.955C12.8783 21.0849 12.4241 20.9275 12.176 20.5665L3 7.21975V21H1V4.00009C1 3.56206 1.28507 3.17501 1.70339 3.04509C2.1217 2.91516 2.57588 3.0726 2.82404 3.43355L12 16.7803V3H14Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M15 12L23 12V14L15 14V12Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M17.0018 5.00001L17.002 9.00001H20.9999L20.9999 5L17.0018 5.00001ZM16.0017 3.00001L21.9998 3C22.5521 3 22.9998 3.4477 22.9998 3.99998L23 9.99999C23 10.2652 22.8946 10.5196 22.7071 10.7071C22.5195 10.8946 22.2652 11 22 11H16.0021C15.4498 11 15.0021 10.5523 15.0021 10.0001L15.0017 4.00007C15.0017 3.73484 15.107 3.48047 15.2946 3.29292C15.4821 3.10537 15.7365 3.00001 16.0017 3.00001Z" fill={color}/>
</Svg>
)
}
