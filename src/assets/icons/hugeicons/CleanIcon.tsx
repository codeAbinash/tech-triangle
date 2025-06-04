
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

export default function CleanIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
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

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21 2.99951L13 11.4995" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.5 10.4995C9 11.9995 6 11.9995 3 11.0885C3.50059 17.531 6.50414 20.0089 10.5089 21C10.5089 21 14 17.9995 14 12.9995L11.5 10.4995Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4.5 16.4459C4.5 16.4459 7.5 16.9995 10 14.4995" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.5 7.24951C8.5 7.93987 7.94036 8.49951 7.25 8.49951C6.55964 8.49951 6 7.93987 6 7.24951C6 6.55916 6.55964 5.99951 7.25 5.99951C7.94036 5.99951 8.5 6.55916 8.5 7.24951Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11 3.99951V4.09951" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M21.4356 2.5218C21.8377 2.90032 21.8569 3.53319 21.4784 3.93537L14.8289 11.0004L13.4141 9.58556L20.022 2.56464C20.4005 2.16246 21.0334 2.14329 21.4356 2.5218ZM11.1141 9.8569C11.4092 9.67983 11.787 9.72634 12.0303 9.96969L14.5303 12.4697C14.671 12.6103 14.75 12.8011 14.75 13C14.75 15.6795 13.814 17.8177 12.8877 19.2772C12.4241 20.0075 11.9599 20.573 11.6089 20.9585C11.4396 21.1445 11.1279 21.4442 11.0102 21.5573L11.01 21.5575L11.01 21.5575L10.9977 21.5693C10.8136 21.7275 10.5643 21.7869 10.3287 21.7285C8.22723 21.2085 6.31516 20.2792 4.86851 18.5743C4.55974 18.2104 4.27528 17.8148 4.01631 17.3852C4.46585 17.4158 5.01987 17.425 5.62737 17.3722C7.1693 17.2381 9.14788 16.694 10.5761 14.9802C10.8412 14.662 10.7982 14.189 10.48 13.9239C10.1618 13.6587 9.6889 13.7017 9.42373 14.0199C8.35191 15.3061 6.83049 15.7619 5.49742 15.8778C4.83657 15.9353 4.24455 15.9066 3.81796 15.8632C3.76922 15.8583 3.72288 15.8545 3.67748 15.8508H3.67747H3.67746C3.53541 15.8392 3.40251 15.8283 3.23357 15.7848C2.72636 14.4883 2.39274 12.9551 2.25226 11.1471C2.23306 10.9001 2.33712 10.6595 2.5303 10.5043C2.72348 10.3491 2.98083 10.2994 3.21793 10.3714C6.09614 11.2454 8.85755 11.2108 11.1141 9.8569ZM5 6.5C5 5.67157 5.67157 5 6.5 5C7.32843 5 8 5.67157 8 6.5C8 7.32843 7.32843 8 6.5 8C5.67157 8 5 7.32843 5 6.5ZM12 3.95238C12 3.4264 11.5523 3 11 3C10.4477 3 10 3.4264 10 3.95238V4.04762C10 4.5736 10.4477 5 11 5C11.5523 5 12 4.5736 12 4.04762V3.95238Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M9.44573 11.0854C6.96539 12.0368 4.98269 11.8736 3 11.0885C3.50059 17.531 6.50414 20.0089 10.5089 21C10.5089 21 13.5261 18.8664 13.961 13.8074C14.0081 13.2595 14.0317 12.9856 13.9178 12.6769C13.8038 12.3682 13.5802 12.1468 13.1329 11.704C12.3973 10.9757 12.0295 10.6116 11.5929 10.5204C11.1564 10.4293 10.5862 10.648 9.44573 11.0854Z" fill={color}/>
<Path d="M21 3L13 11.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.44573 11.0854C6.96539 12.0368 4.98269 11.8736 3 11.0885C3.50059 17.531 6.50414 20.0089 10.5089 21C10.5089 21 13.5261 18.8664 13.961 13.8074C14.0081 13.2595 14.0317 12.9856 13.9178 12.6769C13.8038 12.3682 13.5802 12.1468 13.1329 11.704C12.3973 10.9757 12.0295 10.6116 11.5929 10.5204C11.1564 10.4293 10.5862 10.648 9.44573 11.0854Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4.5 16.4464C4.5 16.4464 7 16.9286 9.5 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.5 7.25C8.5 7.94036 7.94036 8.5 7.25 8.5C6.55964 8.5 6 7.94036 6 7.25C6 6.55964 6.55964 6 7.25 6C7.94036 6 8.5 6.55964 8.5 7.25Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M11 4V4.1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21 3L13 11.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M9.44573 11.0854C6.96539 12.0368 4.98269 11.8736 3 11.0885C3.50059 17.531 6.50414 20.0089 10.5089 21C10.5089 21 13.5261 18.8664 13.961 13.8074C14.0081 13.2595 14.0317 12.9856 13.9178 12.6769C13.8038 12.3682 13.5802 12.1468 13.1329 11.704C12.3973 10.9757 12.0295 10.6116 11.5929 10.5204C11.1564 10.4293 10.5862 10.648 9.44573 11.0854Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M4.5 16.4464C4.5 16.4464 7 16.9286 9.5 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M8.5 7.25C8.5 7.94036 7.94036 8.5 7.25 8.5C6.55964 8.5 6 7.94036 6 7.25C6 6.55964 6.55964 6 7.25 6C7.94036 6 8.5 6.55964 8.5 7.25Z" stroke={color} strokeWidth={strokeWidth}/>
<Path opacity="0.4" d="M11 4V4.1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
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

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M10.9419 21.6123C10.764 21.7381 10.5402 21.7803 10.3287 21.728C8.22723 21.2079 6.31516 20.2786 4.86851 18.5737C3.42352 16.8707 2.5108 14.4739 2.25226 11.1465C2.23222 10.8886 2.34654 10.6385 2.55473 10.4849C2.76292 10.3313 3.03559 10.2959 3.27614 10.3911C5.09785 11.1125 6.91712 11.252 9.20853 10.3731C9.75202 10.1646 10.2047 9.99094 10.5755 9.88401C10.9516 9.77552 11.3466 9.70273 11.7462 9.78618C12.1298 9.86627 12.4399 10.0609 12.7233 10.2908C12.9908 10.5078 13.3879 10.9007 13.7341 11.2435C14.1093 11.6138 14.4484 11.9483 14.6214 12.4172C14.7944 12.8862 14.7566 13.3186 14.7154 13.7893C14.4855 16.4641 13.5624 18.4679 12.6881 19.7283C12.2521 20.3567 11.8281 20.8187 11.5075 21.1276C11.3471 21.2821 11.0581 21.5302 10.9419 21.6123Z" fill={color}/>
<Path d="M10.0534 14.493C10.3334 14.7983 10.3129 15.2727 10.0077 15.5527C8.51861 16.9187 6.62644 17.2675 5.18325 17.2996C4.72604 17.3098 4.30407 17.2885 3.93997 17.2545C3.65161 16.7588 3.3963 16.219 3.17578 15.6316C3.27701 15.6517 3.4122 15.6763 3.57527 15.7004C3.97118 15.759 4.52419 15.8139 5.14988 15.8C6.41711 15.7718 7.88485 15.4645 8.99372 14.4473C9.29896 14.1673 9.7734 14.1878 10.0534 14.493Z" fill={color}/>
<Path d="M21.4774 3.93537C21.8559 3.53319 21.8367 2.90032 21.4345 2.5218C21.0324 2.14329 20.3995 2.16246 20.021 2.56464L13.5957 9.39149C13.9138 9.66306 14.3674 10.1119 14.6624 10.404C14.7723 10.5121 14.9003 10.6378 15.0323 10.7832L21.4774 3.93537Z" fill={color}/>
<Path d="M9 7.5C9 8.32843 8.32843 9 7.5 9C6.67157 9 6 8.32843 6 7.5C6 6.67157 6.67157 6 7.5 6C8.32843 6 9 6.67157 9 7.5Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M11 3C11.5523 3 12 3.4264 12 3.95238V4.04762C12 4.5736 11.5523 5 11 5C10.4477 5 10 4.5736 10 4.04762V3.95238C10 3.4264 10.4477 3 11 3Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21 3L13 11.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M11.5 10.5C9 12 6 12 3 11.089C3.50059 17.5315 6.50414 20.0094 10.5089 21.0005C10.5089 21.0005 14 18 14 13L11.5 10.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M4.5 16.4464C4.5 16.4464 7.5 17 10 14.5" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M8.5 7.25C8.5 7.94036 7.94036 8.5 7.25 8.5C6.55964 8.5 6 7.94036 6 7.25C6 6.55964 6.55964 6 7.25 6C7.94036 6 8.5 6.55964 8.5 7.25Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M11 4V4.1" stroke={color} strokeWidth="2" strokeLinecap="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14.7476 11.0614L21.7506 3.62073L20.2942 2.25L13.3223 9.65766L14.7476 11.0614Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.8999 19.2628C13.8202 17.8349 14.75 15.4392 14.75 12.8178L11.6369 9.75195L11.1381 10.0467C8.89633 11.3713 6.15309 11.4051 3.29382 10.55L2.25 10.2379L2.33451 11.309C2.4714 13.0439 2.79288 14.5202 3.28062 15.773C3.37397 15.7773 3.48263 15.7811 3.60448 15.7833C4.05595 15.7914 4.68228 15.7775 5.37997 15.6902C6.80067 15.5125 8.39512 15.0456 9.47005 13.9707L10.5307 15.0314C9.10565 16.4564 7.11029 16.9855 5.56617 17.1786C4.98621 17.2512 4.45262 17.2785 4.01014 17.2841C4.28765 17.754 4.59598 18.1833 4.93354 18.5751C6.37067 20.2431 8.27016 21.1522 10.3578 21.661L10.7309 21.752C10.7309 21.752 11.9531 20.7319 12.8999 19.2628Z" fill={color}/>
<Path d="M9 7.50195C9 8.33038 8.32843 9.00195 7.5 9.00195C6.67157 9.00195 6 8.33038 6 7.50195C6 6.67353 6.67157 6.00195 7.5 6.00195C8.32843 6.00195 9 6.67353 9 7.50195Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M11 3.00195C11.5523 3.00195 12 3.42835 12 3.95433V4.04957C12 4.57556 11.5523 5.00195 11 5.00195C10.4477 5.00195 10 4.57556 10 4.04957V3.95433C10 3.42835 10.4477 3.00195 11 3.00195Z" fill={color}/>
</Svg>
)
}
