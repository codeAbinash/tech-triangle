
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

export default function Wallet02Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M13 3.5H14C14.93 3.5 15.395 3.5 15.7765 3.60222C16.8117 3.87962 17.6204 4.68827 17.8978 5.72354C18 6.10504 18 6.57003 18 7.5H5C3.89543 7.5 3 6.60457 3 5.5C3 4.39543 3.89543 3.5 5 3.5H8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3 5.5V15.5C3 18.3284 3 19.7426 3.87868 20.6213C4.75736 21.5 6.17157 21.5 9 21.5H15C17.8284 21.5 19.2426 21.5 20.1213 20.6213C21 19.7426 21 18.3284 21 15.5V13.5C21 10.6716 21 9.25736 20.1213 8.37868C19.2426 7.5 17.8284 7.5 15 7.5H7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21 12.5H19C18.535 12.5 18.3025 12.5 18.1118 12.5511C17.5941 12.6898 17.1898 13.0941 17.0511 13.6118C17 13.8025 17 14.035 17 14.5C17 14.965 17 15.1975 17.0511 15.3882C17.1898 15.9059 17.5941 16.3102 18.1118 16.4489C18.3025 16.5 18.535 16.5 19 16.5H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10.5 2.5C12.433 2.5 14 4.067 14 6C14 6.5368 13.8792 7.04537 13.6632 7.5H7.33682C7.12085 7.04537 7 6.5368 7 6C7 4.067 8.567 2.5 10.5 2.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10.5 2.5C12.433 2.5 14 4.067 14 6C14 6.5368 13.8792 7.04537 13.6632 7.5H7.33682C7.12085 7.04537 7 6.5368 7 6C7 4.067 8.567 2.5 10.5 2.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M13 3.5H16C17.1046 3.5 18 4.39543 18 5.5V7.5H5C3.89543 7.5 3 6.60457 3 5.5C3 4.39543 3.89543 3.5 5 3.5H8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3 5.5V19.5C3 20.6046 3.89543 21.5 5 21.5H19C20.1046 21.5 21 20.6046 21 19.5V9.5C21 8.39543 20.1046 7.5 19 7.5H7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21 12.5H18C17.4477 12.5 17 12.9477 17 13.5V15.5C17 16.0523 17.4477 16.5 18 16.5H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10.5 1.75C12.7633 1.75 14.6128 3.51917 14.7422 5.75H6.25781C6.38723 3.51917 8.23672 1.75 10.5 1.75Z" fill={color}/>
<Path d="M15.8379 2.75C17.446 2.75 18.75 3.98122 18.75 5.5V6.75H19C20.5188 6.75 21.75 7.98122 21.75 9.5V11.75H18C17.0335 11.75 16.25 12.5335 16.25 13.5V15.5C16.25 16.4665 17.0335 17.25 18 17.25H21.75V19.5C21.75 21.0188 20.5188 22.25 19 22.25H5C3.48122 22.25 2.25 21.0188 2.25 19.5V5.5C2.25 3.98122 3.55399 2.75 5.16211 2.75H6.37793C5.95501 3.28597 5.6354 3.90655 5.44629 4.58203H5.27441C4.67624 4.58229 4.19141 5.06778 4.19141 5.66602C4.19167 6.26419 4.67716 6.74902 5.27539 6.74902H16.8086V5.49902C16.8086 4.99276 16.3739 4.58203 15.8379 4.58203H15.5537C15.3646 3.90655 15.045 3.28597 14.6221 2.75H15.8379Z" fill={color}/>
<Path d="M21.75 15.75H18C17.8619 15.75 17.75 15.6381 17.75 15.5V13.5C17.75 13.3619 17.8619 13.25 18 13.25H21.75V15.75Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M19 12.5H21V16.5H19C18.535 16.5 18.3025 16.5 18.1118 16.4489C17.5941 16.3102 17.1898 15.9059 17.0511 15.3882C17 15.1975 17 14.965 17 14.5C17 14.035 17 13.8025 17.0511 13.6118C17.1898 13.0941 17.5941 12.6898 18.1118 12.5511C18.3025 12.5 18.535 12.5 19 12.5Z" fill={color}/>
<Path d="M13 3.5H14C14.93 3.5 15.395 3.5 15.7765 3.60222C16.8117 3.87962 17.6204 4.68827 17.8978 5.72354C18 6.10504 18 6.57003 18 7.5H5C3.89543 7.5 3 6.60457 3 5.5C3 4.39543 3.89543 3.5 5 3.5H8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3 5.5V15.5C3 18.3284 3 19.7426 3.87868 20.6213C4.75736 21.5 6.17157 21.5 9 21.5H15C17.8284 21.5 19.2426 21.5 20.1213 20.6213C21 19.7426 21 18.3284 21 15.5V13.5C21 10.6716 21 9.25736 20.1213 8.37868C19.2426 7.5 17.8284 7.5 15 7.5H7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21 12.5H19C18.535 12.5 18.3025 12.5 18.1118 12.5511C17.5941 12.6898 17.1898 13.0941 17.0511 13.6118C17 13.8025 17 14.035 17 14.5C17 14.965 17 15.1975 17.0511 15.3882C17.1898 15.9059 17.5941 16.3102 18.1118 16.4489C18.3025 16.5 18.535 16.5 19 16.5H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10.5 2.5C12.433 2.5 14 4.067 14 6C14 6.5368 13.8792 7.04537 13.6632 7.5H7.33682C7.12085 7.04537 7 6.5368 7 6C7 4.067 8.567 2.5 10.5 2.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<G opacity="0.4">
<Path d="M14 3.5C14.93 3.5 15.3949 3.50032 15.7764 3.60254C16.8116 3.87994 17.6201 4.68836 17.8975 5.72363C17.9997 6.10513 18 6.57003 18 7.5H13.6631C13.8791 7.04537 14 6.5368 14 6C14 5.02033 13.5969 4.1353 12.9482 3.5H14Z" fill={color}/>
<Path d="M8.05176 3.5C7.40311 4.1353 7 5.02033 7 6C7 6.5368 7.12094 7.04537 7.33691 7.5H5C3.89543 7.5 3 6.60457 3 5.5C3 4.39543 3.89543 3.5 5 3.5H8.05176Z" fill={color}/>
</G>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M13 3.5H14C14.93 3.5 15.395 3.5 15.7765 3.60222C16.8117 3.87962 17.6204 4.68827 17.8978 5.72354C18 6.10504 18 6.57003 18 7.5H5C3.89543 7.5 3 6.60457 3 5.5C3 4.39543 3.89543 3.5 5 3.5H8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3 5.5V15.5C3 18.3284 3 19.7426 3.87868 20.6213C4.75736 21.5 6.17157 21.5 9 21.5H15C17.8284 21.5 19.2426 21.5 20.1213 20.6213C21 19.7426 21 18.3284 21 15.5V13.5C21 10.6716 21 9.25736 20.1213 8.37868C19.2426 7.5 17.8284 7.5 15 7.5H7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M21 12.5H19C18.535 12.5 18.3025 12.5 18.1118 12.5511C17.5941 12.6898 17.1898 13.0941 17.0511 13.6118C17 13.8025 17 14.035 17 14.5C17 14.965 17 15.1975 17.0511 15.3882C17.1898 15.9059 17.5941 16.3102 18.1118 16.4489C18.3025 16.5 18.535 16.5 19 16.5H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10.5 2.5C12.433 2.5 14 4.067 14 6C14 6.5368 13.8792 7.04537 13.6632 7.5H7.33682C7.12085 7.04537 7 6.5368 7 6C7 4.067 8.567 2.5 10.5 2.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10.5 1.75C12.8211 1.75 14.7064 3.61072 14.748 5.92188H6.25195C6.29363 3.61072 8.17889 1.75 10.5 1.75Z" fill={color}/>
<Path d="M6.37891 2.75C5.95579 3.28609 5.63541 3.9064 5.44629 4.58203H5.36133C4.71537 4.5823 4.19176 5.10602 4.19141 5.75195C4.19141 6.39819 4.71516 6.92259 5.36133 6.92285H16.7979C16.7979 6.60664 16.7981 6.44818 16.7803 6.31543C16.6852 5.6099 16.2256 5.02445 15.5967 4.75C15.4161 4.01087 15.0804 3.33324 14.624 2.75391C15.1114 2.76059 15.5119 2.78391 15.8721 2.875L16.1201 2.94629C17.3402 3.33885 18.2806 4.2817 18.6172 5.46777L18.6641 5.65723C18.7376 6.01686 18.7475 6.4243 18.749 6.92383C19.4938 7.06409 20.2403 7.44248 20.7607 7.96289C21.2855 8.54535 21.5203 9.26466 21.6338 10.1084C21.6976 10.5833 21.7243 11.129 21.7373 11.75H19C18.6354 11.75 18.1995 11.7727 17.918 11.8271C17.19 12.0222 16.611 12.5672 16.3701 13.2744C16.2871 13.5845 16.25 14.0834 16.25 14.5C16.25 14.9165 16.2871 15.4154 16.3701 15.7256C16.6109 16.4329 17.19 16.9777 17.918 17.1729C18.1995 17.2273 18.6354 17.25 19 17.25H21.7373C21.7243 17.8711 21.6976 18.4167 21.6338 18.8916C21.5203 19.7354 21.2855 20.4546 20.7607 21.0371C20.1588 21.639 19.2917 22.0128 18.3916 22.1338C17.5267 22.2501 16.4275 22.25 15.0645 22.25H8.93555C7.57249 22.25 6.47331 22.2501 5.6084 22.1338C4.76457 22.0203 3.93114 21.6762 3.34863 21.1514C2.74681 20.5495 2.48722 19.7916 2.36621 18.8916C2.24998 18.0267 2.24997 16.9274 2.25 15.5645V5.5C2.25017 3.98137 3.5541 2.75 5.16211 2.75H6.37891Z" fill={color}/>
<Path d="M21.75 15.75H19C18.6148 15.75 18.3721 15.7363 18.3721 15.7363C18.1575 15.7499 17.7754 15.4498 17.7754 15.1943C17.7753 15.1205 17.75 15.0128 17.75 14.5C17.75 13.9869 17.7563 13.877 17.7754 13.8057C17.7756 13.6013 18.129 13.2638 18.3721 13.2637C18.457 13.2538 18.6148 13.25 19 13.25H21.75V15.75Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10.5 1.75C12.8211 1.75 14.7064 3.61072 14.748 5.92188H6.25195C6.29363 3.61072 8.17889 1.75 10.5 1.75Z" fill={color}/>
<Path opacity="0.4" d="M5.44629 4.58203C5.63541 3.9064 5.95579 3.28609 6.37891 2.75H5.16211C3.5541 2.75 2.25017 3.98137 2.25 5.5V15.5645C2.24997 16.9274 2.24998 18.0267 2.36621 18.8916C2.48722 19.7916 2.74681 20.5495 3.34863 21.1514C3.93114 21.6762 4.76457 22.0203 5.6084 22.1338C6.47331 22.2501 7.57249 22.25 8.93555 22.25H15.0645C16.4275 22.25 17.5267 22.2501 18.3916 22.1338C19.2917 22.0128 20.1588 21.639 20.7607 21.0371C21.2855 20.4546 21.5203 19.7354 21.6338 18.8916C21.6976 18.4167 21.7243 17.871 21.7373 17.25H19C18.6354 17.25 18.1995 17.2273 17.918 17.1729C17.19 16.9777 16.6109 16.4329 16.3701 15.7256C16.2871 15.4154 16.25 14.9165 16.25 14.5C16.25 14.0834 16.2871 13.5845 16.3701 13.2744C16.611 12.5672 17.19 12.0222 17.918 11.8271C18.1995 11.7727 18.6354 11.75 19 11.75H21.7373C21.7243 11.129 21.6976 10.5833 21.6338 10.1084C21.5203 9.26466 21.2855 8.54535 20.7607 7.96289C20.2403 7.44248 19.4938 7.06409 18.749 6.92383C18.7475 6.4243 18.7376 6.01686 18.6641 5.65723L18.6172 5.46777C18.2806 4.2817 17.3402 3.33885 16.1201 2.94629L15.8721 2.875C15.5119 2.78391 15.1114 2.76059 14.624 2.75391C15.0804 3.33324 15.4161 4.01087 15.5967 4.75C16.2256 5.02445 16.6852 5.6099 16.7803 6.31543C16.7979 6.44627 16.7979 6.60209 16.7979 6.90931V6.92285H5.36133C4.71516 6.92259 4.19141 6.39819 4.19141 5.75195C4.19176 5.10602 4.71537 4.5823 5.36133 4.58203H5.44629Z" fill={color}/>
<Path d="M21.75 15.75H19C18.6148 15.75 18.3721 15.7363 18.3721 15.7363C18.1575 15.7499 17.7754 15.4498 17.7754 15.1943C17.7753 15.1205 17.75 15.0128 17.75 14.5C17.75 13.9869 17.7563 13.877 17.7754 13.8057C17.7756 13.6013 18.129 13.2638 18.3721 13.2637C18.457 13.2538 18.6148 13.25 19 13.25H21.75V15.75Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10.5 2.5C12.433 2.5 14 4.067 14 6C14 6.5368 13.8792 7.04537 13.6632 7.5H7.33682C7.12085 7.04537 7 6.5368 7 6C7 4.067 8.567 2.5 10.5 2.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M13.5 3.5H18V7.5H5C3.89543 7.5 3 6.60457 3 5.5C3 4.39543 3.89543 3.5 5 3.5H7.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M3 6V19.5C3 20.6046 3.89543 21.5 5 21.5H21V7.5H7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M21 12.5H17V16.5H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10.5 1.75C12.7633 1.75 14.6128 3.51917 14.7422 5.75H6.25781C6.38723 3.51917 8.23672 1.75 10.5 1.75Z" fill={color}/>
<Path d="M18.75 6.75H21.75V11.75H16.25V17.25H21.75V22.25H5C3.48122 22.25 2.25 21.0188 2.25 19.5V5.5C2.25 3.98122 3.55399 2.75 5.16211 2.75H6.37793C5.95501 3.28597 5.6354 3.90655 5.44629 4.58203H5.27441C4.67624 4.58229 4.19141 5.06778 4.19141 5.66602C4.19167 6.26419 4.67716 6.74902 5.27539 6.74902H16.8086V4.58203H15.5537C15.3646 3.90655 15.045 3.28597 14.6221 2.75H18.75V6.75Z" fill={color}/>
<Path d="M21.75 15.75H17.75V13.25H21.75V15.75Z" fill={color}/>
</Svg>
)
}
