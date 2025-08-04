
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function NaturalFoodIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M9.41349 18.7979C11.0244 20.8537 13.9216 21.2297 16.2684 19.637C16.9726 19.1591 17.4974 18.4915 17.9366 17.7981C18.2478 17.3069 18.5419 16.7582 18.8271 16.2262L18.8271 16.2262C18.9376 16.0201 19.0467 15.8164 19.155 15.6196C19.9622 14.1526 20.8179 12.8805 22.3032 12.2264C22.5236 12.1294 22.684 11.9325 22.7343 11.697C22.7847 11.4616 22.719 11.2162 22.5577 11.0375C20.5576 8.82189 18.2697 8.08606 16.1863 8.12647C14.1349 8.16627 12.3177 8.95528 11.1714 9.73326C8.86742 11.2969 7.75625 14.2979 8.45903 16.8753C10.1027 15.1345 11.8398 13.8759 13.5368 12.9888C14.0262 12.7329 14.6304 12.9223 14.8863 13.4117C15.1421 13.9012 14.9528 14.5054 14.4633 14.7612C12.7986 15.6314 11.0562 16.9226 9.41349 18.7979Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8.48361 2.0992C8.56071 1.85321 8.50606 1.58487 8.3389 1.38861C8.17175 1.19236 7.91552 1.09571 7.6604 1.13267C3.10225 1.79306 1.53039 5.48692 1.28415 7.48909C1.03027 9.5534 2.21753 11.4879 4.07725 12.1513C3.94848 10.5577 3.98877 9.08628 4.1392 7.76207C4.20153 7.21331 4.69692 6.81899 5.24567 6.88133C5.79443 6.94366 6.18875 7.43905 6.12642 7.98781C5.97947 9.28141 5.94704 10.7436 6.1023 12.3453C7.96662 12.0594 9.4763 10.5129 9.72059 8.52665C9.80101 7.87273 9.66966 7.25809 9.48603 6.70493C9.35708 6.31649 9.18374 5.9098 9.02169 5.5296L9.02167 5.52957C8.96073 5.38659 8.90139 5.24736 8.84661 5.11426C8.42279 4.08457 8.15228 3.15649 8.48361 2.0992Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M4.07724 12.1513C4.26932 14.5286 4.83761 17.1778 5.97771 20.0156C5.69067 20.4483 5.40954 20.9004 5.13523 21.3729C4.85794 21.8505 5.02033 22.4625 5.49796 22.7398C5.97558 23.0171 6.58757 22.8547 6.86486 22.3771C7.66646 20.9964 8.52516 19.8121 9.41297 18.7985C9.19518 18.5207 9.0009 18.2122 8.83465 17.8737C8.67639 17.5515 8.55141 17.2175 8.45826 16.8761C8.09757 17.2581 7.74138 17.6634 7.3911 18.0931C6.67013 16.0341 6.2729 14.1054 6.10229 12.3453C5.73527 12.4016 5.3545 12.4091 4.96694 12.3614C4.6567 12.3233 4.35924 12.2519 4.07724 12.1513Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M5.05857 11.7421C6.97712 11.9781 8.73113 10.5535 8.97628 8.56018C9.22142 6.56689 6.93885 4.64584 7.76802 2C3.66477 2.59449 2.25056 5.90113 2.02862 7.70572C1.78348 9.69901 3.14003 11.5062 5.05857 11.7421Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M7 20C5.07536 15.3242 4.76992 11.1941 5.13275 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.50786 17.6681C10.6828 20.0602 13.5206 20.7199 15.8463 19.1415C18.172 17.5631 18.5378 13.1898 22 11.6651C18.3054 7.57247 13.6971 9.04998 11.5916 10.4789C9.26587 12.0573 8.33296 15.276 9.50786 17.6681Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M6 22C8.37778 17.9044 11.2644 15.43 14 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
