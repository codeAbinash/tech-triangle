
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function Rocket01Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M21.7111 2.28786C21.3886 1.9654 21.0188 1.82469 20.6204 1.77438C20.2836 1.73186 19.8373 1.7538 19.4305 1.7738C16.9895 1.89321 14.5994 2.62958 12.7565 4.4725L11.271 5.95808C10.6226 6.6064 10.3246 6.89207 10.0492 7.03313C9.85811 7.13096 9.63647 7.17883 9.06475 7.07016C8.58833 6.95093 7.99153 6.80156 7.43448 6.8005C6.82087 6.79934 6.18163 6.96939 5.64025 7.51077C5.1237 8.02731 4.74999 8.63466 4.75 9.34301C4.75001 10.0513 5.12372 10.6587 5.64025 11.1752L12.8237 18.3587C13.3402 18.8752 13.9476 19.2489 14.6559 19.2489C15.3643 19.2489 15.9716 18.8752 16.4881 18.3587C17.0295 17.8173 17.1996 17.178 17.1984 16.5644C17.1974 16.0074 17.048 15.4106 16.9288 14.9342C16.8201 14.3624 16.868 14.1408 16.9658 13.9497C17.1068 13.6743 17.3925 13.3763 18.0408 12.728L19.5264 11.2424C21.3693 9.39947 22.1057 7.00938 22.2251 4.56845C22.2451 4.16164 22.2671 3.71535 22.2245 3.37855C22.1742 2.98009 22.0335 2.61032 21.7111 2.28786ZM16.9961 6C16.4438 6 15.9961 6.44772 15.9961 7C15.9961 7.55228 16.4438 8 16.9961 8H17.0051C17.5574 8 18.0051 7.55228 18.0051 7C18.0051 6.44772 17.5574 6 17.0051 6H16.9961Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M5.27175 13.0263C5.64275 13.3973 5.64275 13.9988 5.27175 14.3698L3.37175 16.2698C3.00075 16.6408 2.39925 16.6408 2.02825 16.2698C1.65725 15.8988 1.65725 15.2973 2.02825 14.9263L3.92825 13.0263C4.29925 12.6553 4.90075 12.6553 5.27175 13.0263ZM6.77825 15.8763C7.14925 15.5053 7.75075 15.5053 8.12175 15.8763C8.49275 16.2473 8.49275 16.8488 8.12175 17.2198L3.37175 21.9698C3.00075 22.3408 2.39925 22.3408 2.02825 21.9698C1.65725 21.5988 1.65725 20.9973 2.02825 20.6263L6.77825 15.8763ZM10.9718 18.7263C11.3427 19.0973 11.3427 19.6988 10.9718 20.0698L9.07175 21.9698C8.70075 22.3408 8.09925 22.3408 7.72825 21.9698C7.35725 21.5988 7.35725 20.9973 7.72825 20.6263L9.62825 18.7263C9.99925 18.3553 10.6008 18.3553 10.9718 18.7263Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M11.8013 6.48949L13.2869 5.00392C14.9596 3.3312 17.1495 2.63737 19.4671 2.52399C20.3686 2.47989 20.8193 2.45784 21.1807 2.81928C21.5422 3.18071 21.5201 3.63143 21.476 4.53289C21.3626 6.8505 20.6688 9.04042 18.9961 10.7131L17.5105 12.1987C16.2871 13.4221 15.9393 13.77 16.1961 15.097C16.4496 16.1107 16.6949 17.0923 15.9578 17.8294C15.0637 18.7235 14.2481 18.7235 13.354 17.8294L6.17058 10.646C5.27649 9.75188 5.27646 8.9363 6.17058 8.04219C6.90767 7.30509 7.88929 7.55044 8.90297 7.80389C10.23 8.06073 10.5779 7.71289 11.8013 6.48949Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M16.9959 7H17.0049" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2.5 21.5L7.5 16.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M8.5 21.5L10.5 19.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M2.5 15.5L4.5 13.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}
