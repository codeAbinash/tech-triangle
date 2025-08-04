
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function VolumeHighIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10.9916 3.9756C11.6784 3.44801 12.4957 3.01957 13.367 3.38808C14.2302 3.75318 14.5076 4.63267 14.6274 5.49785C14.7502 6.38459 14.7502 7.60557 14.7502 9.12365V14.8794C14.7502 16.3975 14.7502 17.6185 14.6274 18.5052C14.5076 19.3704 14.2302 20.2499 13.367 20.615C12.4957 20.9835 11.6784 20.5551 10.9916 20.0275C10.2892 19.488 9.3966 18.5765 8.34667 17.5044L8.34663 17.5044C7.80717 16.9535 7.44921 16.6873 7.08663 16.5374C6.72221 16.3868 6.27914 16.3229 5.50619 16.3229C4.83768 16.3229 4.23963 16.3229 3.78679 16.2758C3.31184 16.2265 2.87088 16.1191 2.47421 15.8485C1.7184 15.3328 1.42917 14.5777 1.31957 13.8838C1.23785 13.3663 1.24723 12.7981 1.25479 12.3405V11.6626C1.24723 11.205 1.23785 10.6368 1.31957 10.1193C1.42917 9.42536 1.7184 8.67029 2.47421 8.15462C2.87088 7.88398 3.31184 7.77657 3.78679 7.72723C4.23963 7.68019 4.83768 7.68021 5.50619 7.68023C6.27914 7.68023 6.72221 7.61628 7.08663 7.46563C7.44922 7.31574 7.80717 7.04954 8.34663 6.49869L8.34664 6.49869C9.39659 5.42655 10.2892 4.51511 10.9916 3.9756Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M16.3935 8.20504C16.8325 7.87003 17.4601 7.95439 17.7951 8.39347C18.5519 9.38539 19.0001 10.6418 19.0001 12.0001C19.0001 13.3583 18.5519 14.6147 17.7951 15.6066C17.4601 16.0457 16.8325 16.1301 16.3935 15.7951C15.9544 15.4601 15.87 14.8325 16.205 14.3935C16.699 13.746 17.0001 12.9149 17.0001 12.0001C17.0001 11.0852 16.699 10.2541 16.205 9.60664C15.87 9.16756 15.9544 8.54004 16.3935 8.20504Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M19.3247 6.26245C19.7321 5.8895 20.3646 5.91738 20.7376 6.32472C22.1408 7.8573 23 9.83247 23 12C23 14.1675 22.1408 16.1427 20.7376 17.6753C20.3646 18.0826 19.7321 18.1105 19.3247 17.7376C18.9174 17.3646 18.8895 16.7321 19.2625 16.3247C20.3609 15.125 21 13.621 21 12C21 10.379 20.3609 8.87497 19.2625 7.6753C18.8895 7.26796 18.9174 6.63541 19.3247 6.26245Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14 14.8135V9.18646C14 6.04126 14 4.46866 13.0747 4.0773C12.1494 3.68593 11.0603 4.79793 8.88232 7.02192C7.75439 8.17365 7.11085 8.42869 5.50604 8.42869C4.10257 8.42869 3.40084 8.42869 2.89675 8.77262C1.85035 9.48655 2.00852 10.882 2.00852 12C2.00852 13.118 1.85035 14.5134 2.89675 15.2274C3.40084 15.5713 4.10257 15.5713 5.50604 15.5713C7.11085 15.5713 7.75439 15.8264 8.88232 16.9781C11.0603 19.2021 12.1494 20.3141 13.0747 19.9227C14 19.5313 14 17.9587 14 14.8135Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17 9C17.6254 9.81968 18 10.8634 18 12C18 13.1366 17.6254 14.1803 17 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M20 7C21.2508 8.36613 22 10.1057 22 12C22 13.8943 21.2508 15.6339 20 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
