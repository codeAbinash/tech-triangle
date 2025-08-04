
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function VolumeLowIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M18.3935 8.20504C18.8325 7.87003 19.4601 7.95439 19.7951 8.39347C20.5519 9.38539 21.0001 10.6418 21.0001 12.0001C21.0001 13.3583 20.5519 14.6147 19.7951 15.6066C19.4601 16.0457 18.8325 16.1301 18.3935 15.7951C17.9544 15.4601 17.87 14.8325 18.205 14.3935C18.699 13.746 19.0001 12.9149 19.0001 12.0001C19.0001 11.0852 18.699 10.2541 18.205 9.60664C17.87 9.16756 17.9544 8.54004 18.3935 8.20504Z" fill={color}/>
<Path d="M12.9916 3.9756C13.6784 3.44801 14.4957 3.01957 15.367 3.38808C16.2302 3.75318 16.5076 4.63267 16.6274 5.49785C16.7502 6.38459 16.7502 7.60557 16.7502 9.12365V14.8794C16.7502 16.3975 16.7502 17.6185 16.6274 18.5052C16.5076 19.3704 16.2302 20.2499 15.367 20.615C14.4957 20.9835 13.6784 20.5551 12.9916 20.0275C12.2892 19.488 11.3966 18.5765 10.3467 17.5044L10.3466 17.5044C9.80717 16.9535 9.44921 16.6873 9.08663 16.5374C8.72221 16.3868 8.27914 16.3229 7.50619 16.3229C6.83768 16.3229 6.23963 16.3229 5.78679 16.2758C5.31184 16.2265 4.87088 16.1191 4.47421 15.8485C3.7184 15.3328 3.42917 14.5777 3.31957 13.8838C3.23785 13.3663 3.24723 12.7981 3.25479 12.3405V11.6626C3.24723 11.205 3.23785 10.6368 3.31957 10.1193C3.42917 9.42536 3.7184 8.67029 4.47421 8.15462C4.87088 7.88398 5.31184 7.77657 5.78679 7.72723C6.23963 7.68019 6.83768 7.68021 7.50619 7.68023C8.27914 7.68023 8.72221 7.61628 9.08663 7.46563C9.44922 7.31574 9.80717 7.04954 10.3466 6.49869L10.3466 6.49869C11.3966 5.42655 12.2892 4.51511 12.9916 3.9756Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19 9C19.6254 9.81968 20 10.8634 20 12C20 13.1366 19.6254 14.1803 19 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 14.8135V9.18646C16 6.04126 16 4.46866 15.0747 4.0773C14.1494 3.68593 13.0604 4.79793 10.8823 7.02192C9.7544 8.17365 9.11086 8.42869 7.50605 8.42869C6.10259 8.42869 5.40086 8.42869 4.89677 8.77262C3.85036 9.48655 4.00854 10.882 4.00854 12C4.00854 13.118 3.85036 14.5134 4.89677 15.2274C5.40086 15.5713 6.10259 15.5713 7.50605 15.5713C9.11086 15.5713 9.7544 15.8264 10.8823 16.9781C13.0604 19.2021 14.1494 20.3141 15.0747 19.9227C16 19.5313 16 17.9587 16 14.8135Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
