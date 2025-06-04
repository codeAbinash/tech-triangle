
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

export default function Moon02Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M10.5163 2.04296C10.6958 2.27649 10.722 2.59345 10.5832 2.85326C9.99927 3.9469 9.66792 5.19607 9.66792 6.52485C9.66792 10.8367 13.1633 14.3321 17.4751 14.3321C18.8039 14.3321 20.0531 14.0007 21.1467 13.4168C21.4065 13.278 21.7235 13.3042 21.957 13.4837C22.1906 13.6632 22.2974 13.9627 22.2302 14.2495C21.1556 18.8349 17.0409 22.25 12.1269 22.25C6.39589 22.25 1.75 17.6041 1.75 11.8731C1.75 6.95906 5.16505 2.84445 9.7505 1.76979C10.0373 1.70258 10.3368 1.80944 10.5163 2.04296Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" fill={color}/>
<Path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21.5 14.0784C20.503 18.3324 16.6849 21.5 12.1269 21.5C6.8101 21.5 2.5 17.1899 2.5 11.8731C2.5 7.31513 5.66765 3.49698 9.92163 2.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10.5163 2.04296C10.6958 2.27649 10.722 2.59345 10.5832 2.85326C9.99927 3.9469 9.66792 5.19607 9.66792 6.52485C9.66792 10.8367 13.1633 14.3321 17.4751 14.3321C18.8039 14.3321 20.0531 14.0007 21.1467 13.4168C21.4065 13.278 21.7235 13.3042 21.957 13.4837C22.1906 13.6632 22.2974 13.9627 22.2302 14.2495C21.1556 18.8349 17.0409 22.25 12.1269 22.25C6.39589 22.25 1.75 17.6041 1.75 11.8731C1.75 6.95906 5.16505 2.84445 9.7505 1.76979C10.0373 1.70258 10.3368 1.80944 10.5163 2.04296Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M10.5163 2.04296C10.6958 2.27649 10.722 2.59345 10.5832 2.85326C9.99927 3.9469 9.66792 5.19607 9.66792 6.52485C9.66792 10.8367 13.1633 14.3321 17.4751 14.3321C18.8039 14.3321 20.0531 14.0007 21.1467 13.4168C21.4065 13.278 21.7235 13.3042 21.957 13.4837C22.1906 13.6632 22.2974 13.9627 22.2302 14.2495C21.1556 18.8349 17.0409 22.25 12.1269 22.25C6.39589 22.25 1.75 17.6041 1.75 11.8731C1.75 6.95906 5.16505 2.84445 9.7505 1.76979C10.0373 1.70258 10.3368 1.80944 10.5163 2.04296Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 14.1878C20.7372 14.8621 19.2949 15.2443 17.7633 15.2443C12.7885 15.2443 8.75571 11.2115 8.75571 6.23669C8.75571 4.70512 9.13795 3.26282 9.81225 2C5.33437 3.04945 2 7.06856 2 11.8664C2 17.4631 6.53695 22 12.1336 22C16.9314 22 20.9505 18.6656 22 14.1878Z" fill={color}/>
</Svg>
)
}
