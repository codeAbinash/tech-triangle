
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function LocationOffline01Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z" fill={color}/>
<Path d="M2.99714 7.08468C1.57518 10.4086 2.34496 13.2373 3.94771 15.6595C5.26177 17.6454 7.17835 19.4178 8.90742 21.0168L8.90824 21.0175C9.23754 21.3221 9.56043 21.6207 9.87066 21.9129L9.87231 21.9145C10.4473 22.4528 11.2112 22.75 12.0015 22.75C12.7919 22.75 13.5558 22.4528 14.1308 21.9144C14.4243 21.6396 14.7286 21.3592 15.039 21.0732C15.9118 20.2691 16.8334 19.4199 17.7027 18.5208C17.891 18.3261 17.9852 18.2287 17.9842 18.1059C17.9831 17.9831 17.886 17.886 17.6918 17.6918L14.6393 14.6393C14.4757 14.4757 14.3939 14.3939 14.2966 14.3791C14.1993 14.3643 14.0845 14.4244 13.8551 14.5447C13.3006 14.8355 12.6695 15 12 15C9.79086 15 8 13.2091 8 11C8 10.3305 8.16449 9.69936 8.45528 9.14489C8.57559 8.91546 8.63575 8.80075 8.62092 8.70342C8.60609 8.60609 8.52429 8.52429 8.36069 8.36069L5.03439 5.03439C4.82029 4.82029 4.71323 4.71323 4.57776 4.72198C4.44229 4.73073 4.35385 4.84553 4.17695 5.07514C3.70675 5.68545 3.30801 6.35798 2.99714 7.08468Z" fill={color}/>
<Path d="M20.0582 15.6609C21.6591 13.2362 22.4261 10.4045 21.0059 7.08468C19.478 3.51303 15.8277 1.25 12.0015 1.25C10.2695 1.25 8.57342 1.71376 7.094 2.55275C6.80849 2.71466 6.66573 2.79562 6.64576 2.94294C6.62579 3.09025 6.74678 3.21125 6.98877 3.45323L10.4766 6.94111C10.5998 7.06426 10.6614 7.12584 10.736 7.14721C10.8106 7.16859 10.9054 7.14667 11.0949 7.10283C11.3857 7.03556 11.6887 7 12 7C14.2091 7 16 8.79086 16 11C16 11.3113 15.9644 11.6143 15.8972 11.9051C15.8533 12.0946 15.8314 12.1894 15.8528 12.264C15.8742 12.3386 15.9357 12.4002 16.0589 12.5233L19.2678 15.7322C19.4424 15.9069 19.5298 15.9942 19.6341 16.006C19.6756 16.0107 19.7207 16.0061 19.7604 15.9932C19.8602 15.9608 19.9262 15.8608 20.0582 15.6609Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17.5 17.6461C16.2676 18.9628 14.8763 20.1884 13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C4.02067 6.59797 4.46666 5.63512 5 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M7 3.48631C8.46914 2.53477 10.213 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C21.6603 10.5221 20.8796 13.1643 19.2612 15.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M9 9C8.66525 9.53668 8.5 10.3209 8.5 11C8.5 12.933 10.067 14.5 12 14.5C12.6598 14.5 13.4732 14.3174 14 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M11.5 7.53544C11.6633 7.51209 11.8302 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11C15.5 11.1698 15.4879 11.3367 15.4646 11.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M2 2L22 22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
