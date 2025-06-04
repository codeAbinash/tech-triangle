
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

export default function Cancel01Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M5.00049 4.99988L19.0005 18.9999" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M19.0005 4.99988L5.00049 18.9999" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M4.11654 18.116C3.62839 18.6041 3.62839 19.3956 4.11654 19.8838C4.6047 20.3719 5.39616 20.3719 5.88431 19.8838L19.8843 5.88376C20.3725 5.39561 20.3725 4.60415 19.8843 4.11599C19.3962 3.62784 18.6047 3.62784 18.1165 4.11599L4.11654 18.116Z" fill={color}/>
<Path d="M5.88434 4.11599C5.39619 3.62784 4.60473 3.62784 4.11657 4.11599C3.62842 4.60415 3.62842 5.39561 4.11657 5.88376L18.1166 19.8838C18.6047 20.3719 19.3962 20.3719 19.8843 19.8838C20.3725 19.3956 20.3725 18.6041 19.8843 18.116L5.88434 4.11599Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M19.0002 4.99994L5.00024 18.9999M5.00024 4.99994L19.0002 18.9999" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M19.0002 4.99994L5.00024 18.9999" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M5.00024 4.99994L19.0002 18.9999" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M19.8841 4.11599C20.3722 4.60415 20.3722 5.39561 19.8841 5.88376L5.88407 19.8838C5.39591 20.3719 4.60445 20.3719 4.1163 19.8838C3.62814 19.3956 3.62814 18.6041 4.1163 18.116L18.1163 4.11599C18.6045 3.62784 19.3959 3.62784 19.8841 4.11599Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M4.1163 4.11599C4.60445 3.62784 5.39591 3.62784 5.88407 4.11599L19.8841 18.116C20.3722 18.6041 20.3722 19.3956 19.8841 19.8838C19.3959 20.3719 18.6045 20.3719 18.1163 19.8838L4.1163 5.88376C3.62814 5.39561 3.62814 4.60415 4.1163 4.11599Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M19.8841 4.11606C20.3723 4.60421 20.3723 5.39567 19.8841 5.88382L5.88413 19.8838C5.39597 20.372 4.60452 20.372 4.11636 19.8838C3.62821 19.3957 3.62821 18.6042 4.11636 18.1161L18.1164 4.11606C18.6045 3.6279 19.396 3.6279 19.8841 4.11606Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M4.11636 4.11606C4.60452 3.6279 5.39597 3.6279 5.88413 4.11606L19.8841 18.1161C20.3723 18.6042 20.3723 19.3957 19.8841 19.8838C19.396 20.372 18.6045 20.372 18.1164 19.8838L4.11636 5.88382C3.62821 5.39567 3.62821 4.60421 4.11636 4.11606Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.0002 4.99994L5.00024 18.9999M5.00024 4.99994L19.0002 18.9999" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 10.2623L18.0123 4.25L19.75 5.98775L13.7377 12L19.75 18.0123L18.0123 19.75L12 13.7377L5.98775 19.75L4.25 18.0123L10.2623 12L4.25 5.98775L5.98775 4.25L12 10.2623Z" fill={color}/>
</Svg>
)
}
