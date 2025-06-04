
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

export default function Logout02Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M11 3L10.3374 3.23384C7.75867 4.144 6.46928 4.59908 5.73464 5.63742C5 6.67576 5 8.0431 5 10.7778V13.2222C5 15.9569 5 17.3242 5.73464 18.3626C6.46928 19.4009 7.75867 19.856 10.3374 20.7662L11 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M21 12L11 12M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10 3L5.10557 5.44721C4.428 5.786 4 6.47852 4 7.23607L4 16.7639C4 17.5215 4.428 18.214 5.10557 18.5528L10 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17.5 9.5L20 12L17.5 14.5M10 12L19.3912 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M10.8944 2.55301C11.1414 3.04698 10.9412 3.64766 10.4472 3.89465L5.55279 6.34186C5.214 6.51125 5 6.85751 5 7.23629L5 16.7642C5 17.1429 5.214 17.4892 5.55279 17.6586L10.4472 20.1058C10.9412 20.3528 11.1414 20.9535 10.8944 21.4474C10.6474 21.9414 10.0468 22.1416 9.55279 21.8946L4.65836 19.4474C3.64201 18.9393 3 17.9005 3 16.7642L3 7.23629C3 6.09997 3.64201 5.06118 4.65836 4.55301L9.55279 2.10579C10.0468 1.8588 10.6474 2.05903 10.8944 2.55301Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M17.1173 8.57615C17.491 8.42137 17.9211 8.50692 18.2071 8.79292L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L18.2071 15.2071C17.9211 15.4931 17.491 15.5787 17.1173 15.4239C16.7436 15.2691 16.5 14.9045 16.5 14.5V13L10 13C9.44772 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11H16.5V9.50003C16.5 9.09557 16.7436 8.73093 17.1173 8.57615Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M10.3374 3.23384L11 3V21L10.3374 20.7662C7.75867 19.856 6.46928 19.4009 5.73464 18.3626C5 17.3242 5 15.9569 5 13.2222V10.7778C5 8.0431 5 6.67576 5.73464 5.63742C6.46928 4.59908 7.75867 4.144 10.3374 3.23384Z" fill={color}/>
<Path d="M11 3L10.3374 3.23384C7.75867 4.144 6.46928 4.59908 5.73464 5.63742C5 6.67576 5 8.0431 5 10.7778V13.2222C5 15.9569 5 17.3242 5.73464 18.3626C6.46928 19.4009 7.75867 19.856 10.3374 20.7662L11 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M21 12L11 12M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M11 3L10.3374 3.23384C7.75867 4.144 6.46928 4.59908 5.73464 5.63742C5 6.67576 5 8.0431 5 10.7778V13.2222C5 15.9569 5 17.3242 5.73464 18.3626C6.46928 19.4009 7.75867 19.856 10.3374 20.7662L11 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path opacity="0.4" d="M21 12L11 12M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12.193 2.66745C12.3768 3.18825 12.1036 3.75945 11.5828 3.94326L10.9203 4.17711C9.60945 4.63975 8.70506 4.96051 8.03099 5.28754C7.37981 5.60347 7.03566 5.88357 6.80098 6.21526C6.5663 6.54696 6.41671 6.96471 6.33552 7.68392C6.25148 8.42839 6.25 9.38798 6.25 10.778V13.2225C6.25 14.6126 6.25148 15.5722 6.33552 16.3166C6.41671 17.0358 6.5663 17.4536 6.80098 17.7853C7.03566 18.117 7.37981 18.3971 8.031 18.713C8.70506 19.04 9.60945 19.3608 10.9203 19.8234L11.5828 20.0573C12.1036 20.2411 12.3768 20.8123 12.193 21.3331C12.0092 21.8539 11.438 22.1271 10.9172 21.9433L10.1999 21.6901C8.957 21.2515 7.94545 20.8945 7.15799 20.5124C6.33614 20.1137 5.66827 19.6471 5.1683 18.9404C4.66834 18.2338 4.45061 17.4487 4.34814 16.541C4.24996 15.6713 4.24998 14.5986 4.25 13.2806V10.72C4.24998 9.40197 4.24996 8.32928 4.34814 7.45957C4.45061 6.55186 4.66834 5.76676 5.1683 5.06012C5.66827 4.35347 6.33614 3.88686 7.15799 3.48813C7.94545 3.10609 8.957 2.74909 10.1999 2.31045L10.9172 2.05728C11.438 1.87347 12.0092 2.14665 12.193 2.66745Z" fill={color}/>
<Path d="M10.75 13.0059C10.1977 13.0059 9.75 12.5581 9.75 12.0059C9.75 11.4536 10.1977 11.0059 10.75 11.0059L17.25 11.0059L17.25 10.4116C17.2499 10.236 17.2497 10.0203 17.2718 9.84387L17.2722 9.84053C17.288 9.71408 17.3598 9.13804 17.9254 8.86368C18.4923 8.58872 18.9924 8.89065 19.1006 8.95597L19.5691 9.29511C19.9449 9.58975 20.4594 9.99545 20.8504 10.3759C21.0455 10.5657 21.2467 10.783 21.4056 11.0139C21.5468 11.2191 21.75 11.5693 21.75 12C21.75 12.4307 21.5468 12.7809 21.4056 12.9861C21.2467 13.217 21.0455 13.4343 20.8504 13.6241C20.4594 14.0046 19.9449 14.4102 19.5691 14.7049L19.1006 15.044C18.9924 15.1093 18.4922 15.4113 17.9254 15.1363C17.3598 14.862 17.288 14.2859 17.2722 14.1595L17.2718 14.1561C17.2497 13.9797 17.2499 13.764 17.25 13.5884L17.25 13.0059L10.75 13.0059Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M12.193 2.66745C12.3768 3.18825 12.1036 3.75945 11.5828 3.94326L10.9203 4.17711C9.60945 4.63975 8.70506 4.96051 8.03099 5.28754C7.37981 5.60347 7.03566 5.88357 6.80098 6.21526C6.5663 6.54696 6.41671 6.96471 6.33552 7.68392C6.25148 8.42839 6.25 9.38798 6.25 10.778V13.2225C6.25 14.6126 6.25148 15.5722 6.33552 16.3166C6.41671 17.0358 6.5663 17.4536 6.80098 17.7853C7.03566 18.117 7.37981 18.3971 8.031 18.713C8.70506 19.04 9.60945 19.3608 10.9203 19.8234L11.5828 20.0573C12.1036 20.2411 12.3768 20.8123 12.193 21.3331C12.0092 21.8539 11.438 22.1271 10.9172 21.9433L10.1999 21.6901C8.957 21.2515 7.94545 20.8945 7.15799 20.5124C6.33614 20.1137 5.66827 19.6471 5.1683 18.9404C4.66834 18.2338 4.45061 17.4487 4.34814 16.541C4.24996 15.6713 4.24998 14.5986 4.25 13.2806V10.72C4.24998 9.40197 4.24996 8.32928 4.34814 7.45957C4.45061 6.55186 4.66834 5.76676 5.1683 5.06012C5.66827 4.35347 6.33614 3.88686 7.15799 3.48813C7.94545 3.10609 8.957 2.74909 10.1999 2.31045L10.9172 2.05728C11.438 1.87347 12.0092 2.14665 12.193 2.66745Z" fill={color}/>
<Path d="M10.75 13.0059C10.1977 13.0059 9.75 12.5581 9.75 12.0059C9.75 11.4536 10.1977 11.0059 10.75 11.0059L17.25 11.0059L17.25 10.4116C17.2499 10.236 17.2497 10.0203 17.2718 9.84387L17.2722 9.84053C17.288 9.71408 17.3598 9.13804 17.9254 8.86368C18.4923 8.58872 18.9924 8.89065 19.1006 8.95597L19.5691 9.29511C19.9449 9.58975 20.4594 9.99545 20.8504 10.3759C21.0455 10.5657 21.2467 10.783 21.4056 11.0139C21.5468 11.2191 21.75 11.5693 21.75 12C21.75 12.4307 21.5468 12.7809 21.4056 12.9861C21.2467 13.217 21.0455 13.4343 20.8504 13.6241C20.4594 14.0046 19.9449 14.4102 19.5691 14.7049L19.1006 15.044C18.9924 15.1093 18.4922 15.4113 17.9254 15.1363C17.3598 14.862 17.288 14.2859 17.2722 14.1595L17.2718 14.1561C17.2497 13.9797 17.2499 13.764 17.25 13.5884L17.25 13.0059L10.75 13.0059Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10 3L4 6L4 18L10 21" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M10 12H19.2642M16.9998 9L20 12L16.9998 15" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M9.59923 2L10.5 3.80794L5.01418 6.56061L5.01418 17.4394L10.5 20.1921L9.59923 22L3 18.6887L3 5.31135L9.59923 2Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M17.2926 8.29287L21 12L17.2926 15.7071L15.8784 14.2929L17.1714 13H9.58574V11H17.1714L15.8784 9.70713L17.2926 8.29287Z" fill={color}/>
</Svg>
)
}
