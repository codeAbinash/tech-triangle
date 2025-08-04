
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function ViewOffSlashIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 4.25C11.0058 4.25 10.0648 4.41965 9.18654 4.70497C8.93836 4.78559 8.74992 4.98943 8.689 5.24317C8.62807 5.49691 8.70342 5.76408 8.88794 5.9486L18.9086 15.9693C19.2008 16.2614 19.6741 16.2623 19.9673 15.9713C20.9298 15.016 21.7239 13.9948 22.2078 13.3163C22.461 12.9642 22.75 12.5622 22.75 12C22.75 11.4378 22.4077 10.9616 22.1546 10.6095C21.4487 9.61974 20.1869 8.04576 18.4797 6.71298C16.774 5.38141 14.5706 4.25 12 4.25ZM7.27775 6.21709C7.02388 5.96322 6.62572 5.92487 6.32806 6.12561C4.20574 7.55694 2.60227 9.54781 1.79219 10.6837C1.53904 11.0358 1.25 11.4378 1.25 12C1.25 12.5622 1.59226 13.0384 1.84541 13.3905C2.55126 14.3803 3.81313 15.9542 5.52031 17.287C7.22595 18.6186 9.42944 19.75 12 19.75C14.1829 19.75 16.1016 18.9335 17.6719 17.8744C17.8576 17.7491 17.9776 17.5475 17.9991 17.3245C18.0206 17.1015 17.9413 16.8806 17.7829 16.7223L7.27775 6.21709ZM9.52944 9.5C8.8934 10.136 8.5 11.0147 8.5 11.9853C8.5 13.9264 10.0736 15.5 12.0147 15.5C12.9853 15.5 13.864 15.1066 14.5 14.4706L9.52944 9.5Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.439 15.439C20.3636 14.5212 21.0775 13.6091 21.544 12.955C21.848 12.5287 22 12.3155 22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M6.74742 6.74742C4.73118 8.1072 3.24215 9.94266 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C13.9908 19 15.7651 18.2557 17.2526 17.2526" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M3 3L21 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
