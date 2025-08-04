
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function Saturn01Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2.05961 17.2685C1.77478 17.884 1.55764 18.4688 1.4206 19.0099C1.15873 20.0437 1.10952 21.2604 1.92658 22.076C2.64872 22.7969 3.68697 22.8359 4.59452 22.6667C5.53931 22.4905 6.62348 22.0434 7.76378 21.4159C10.0562 20.1543 12.7795 18.0495 15.4168 15.4119C18.054 12.7743 20.158 10.0511 21.4184 7.75919C22.0454 6.61918 22.4919 5.53527 22.6674 4.59076C22.836 3.68333 22.7959 2.64518 22.0734 1.92399C21.2526 1.10459 20.0277 1.15925 18.9878 1.42625C18.4542 1.56323 17.8783 1.77768 17.2723 2.05787C17.9754 2.43135 18.6341 2.87722 19.2385 3.38554C19.3191 3.36111 19.3976 3.33909 19.4739 3.31951C20.3787 3.08717 20.6532 3.26816 20.6925 3.30736C20.7227 3.33752 20.8745 3.54034 20.7456 4.2337C20.6237 4.88998 20.2835 5.76667 19.7057 6.81726C18.5567 8.90653 16.5793 11.4846 14.0345 14.0298C11.4897 16.575 8.91136 18.5533 6.82138 19.7034C5.77045 20.2817 4.89319 20.6226 4.23619 20.7452C3.54195 20.8746 3.33805 20.7231 3.30752 20.6926C3.2691 20.6543 3.08881 20.3845 3.31542 19.4898C3.33633 19.4073 3.36009 19.3222 3.38673 19.2346C2.87861 18.6302 2.43292 17.9715 2.05961 17.2685Z" fill={color}/>
<Path d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 14.829 3.45489 17.3767 5.3795 19.1577C5.60297 19.0508 5.84279 18.9277 6.09858 18.7869C8.10753 17.6813 10.653 15.7381 13.1977 13.193C15.7424 10.6479 17.6847 8.10277 18.789 6.09465C18.9289 5.84032 19.0513 5.60181 19.1577 5.3795C17.3766 3.45489 14.829 2.25 12 2.25Z" fill={color}/>
<Path d="M20.5937 7.39036C18.9129 10.3554 16.2327 13.3644 14.7888 14.7839C12.236 17.3371 9.62648 19.3686 7.43471 20.6173C8.79669 21.3404 10.3505 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 10.3326 21.3314 8.76292 20.5937 7.39036Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M5.63604 18.3638C4.00736 16.7351 3 14.4851 3 11.9999C3 7.02929 7.02944 2.99986 12 2.99986C14.4853 2.99986 16.7353 4.00721 18.364 5.63589M20.2941 8.49986C20.7487 9.57574 21 10.7584 21 11.9999C21 16.9704 16.9706 20.9999 12 20.9999C10.7586 20.9999 9.57589 20.7485 8.5 20.2939" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15.8292 3.82152C18.5323 2.13939 20.7205 1.51937 21.6005 2.39789C23.1408 3.93544 20.0911 9.48081 14.7889 14.7838C9.48663 20.0868 3.93971 23.1394 2.39946 21.6018C1.52414 20.728 2.13121 18.5599 3.79165 15.8774" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
