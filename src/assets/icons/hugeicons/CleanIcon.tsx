
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function CleanIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M10.3287 21.728C10.5402 21.7803 10.764 21.7381 10.9419 21.6123C11.0581 21.5302 11.3471 21.2821 11.5075 21.1276C11.8281 20.8187 12.2521 20.3567 12.6881 19.7283C13.5624 18.4679 14.4855 16.4641 14.7154 13.7893C14.7566 13.3186 14.7944 12.8862 14.6214 12.4172C14.4484 11.9483 14.1093 11.6138 13.7341 11.2435C13.3879 10.9007 12.9908 10.5078 12.7233 10.2908C12.4399 10.0609 12.1298 9.86627 11.7462 9.78618C11.3466 9.70273 10.9516 9.77552 10.5755 9.88401C10.2047 9.99094 9.75202 10.1646 9.20853 10.3731C6.91712 11.252 5.09785 11.1125 3.27614 10.3911C3.03559 10.2959 2.76292 10.3313 2.55473 10.4849C2.34654 10.6385 2.23222 10.8886 2.25226 11.1465C2.5108 14.4739 3.42352 16.8707 4.86851 18.5737C6.31516 20.2786 8.22723 21.2079 10.3287 21.728ZM10.0077 15.5527C10.3129 15.2727 10.3334 14.7983 10.0534 14.493C9.7734 14.1878 9.29896 14.1673 8.99372 14.4473C7.88485 15.4645 6.41711 15.7718 5.14988 15.8C4.52419 15.8139 3.97118 15.759 3.57527 15.7004C3.4122 15.6763 3.27701 15.6517 3.17578 15.6316C3.3963 16.219 3.65161 16.7588 3.93997 17.2545C4.30407 17.2885 4.72604 17.3098 5.18325 17.2996C6.62644 17.2675 8.51861 16.9187 10.0077 15.5527Z" fill={color}/>
<Path d="M21.4774 3.93537C21.8559 3.53319 21.8367 2.90032 21.4345 2.5218C21.0324 2.14329 20.3995 2.16246 20.021 2.56464L13.5957 9.39149C13.9138 9.66306 14.3674 10.1119 14.6624 10.404C14.7723 10.5121 14.9003 10.6378 15.0323 10.7832L21.4774 3.93537Z" fill={color}/>
<Path d="M9 7.5C9 8.32843 8.32843 9 7.5 9C6.67157 9 6 8.32843 6 7.5C6 6.67157 6.67157 6 7.5 6C8.32843 6 9 6.67157 9 7.5Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M11 3C11.5523 3 12 3.4264 12 3.95238V4.04762C12 4.5736 11.5523 5 11 5C10.4477 5 10 4.5736 10 4.04762V3.95238C10 3.4264 10.4477 3 11 3Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21 3L13 11.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.44573 11.0854C6.96539 12.0368 4.98269 11.8736 3 11.0885C3.50059 17.531 6.50414 20.0089 10.5089 21C10.5089 21 13.5261 18.8664 13.961 13.8074C14.0081 13.2595 14.0317 12.9856 13.9178 12.6769C13.8038 12.3682 13.5802 12.1468 13.1329 11.704C12.3973 10.9757 12.0295 10.6116 11.5929 10.5204C11.1564 10.4293 10.5862 10.648 9.44573 11.0854Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4.5 16.4464C4.5 16.4464 7 16.9286 9.5 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.5 7.25C8.5 7.94036 7.94036 8.5 7.25 8.5C6.55964 8.5 6 7.94036 6 7.25C6 6.55964 6.55964 6 7.25 6C7.94036 6 8.5 6.55964 8.5 7.25Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M11 4V4.1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
