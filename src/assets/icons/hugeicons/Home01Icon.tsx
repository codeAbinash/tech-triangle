
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function Home01Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 1.75C12.7872 1.75 13.4813 2.01975 14.2119 2.45996C14.9179 2.88535 15.7234 3.51175 16.7265 4.29199L16.7578 4.31641L18.7578 5.87207L19.6299 6.55566C20.4227 7.19264 20.9798 7.72021 21.3174 8.41016L21.3965 8.58496C21.7653 9.46446 21.75 10.4822 21.75 11.9893V14.5576C21.75 16.1592 21.75 17.4378 21.6152 18.4404C21.4846 19.4121 21.2165 20.223 20.6269 20.877L20.5049 21.0049C19.8297 21.68 18.9766 21.9759 17.9404 22.1152C16.9378 22.25 15.6591 22.25 14.0576 22.25H9.94235C8.34076 22.25 7.06218 22.25 6.05954 22.1152C5.08787 21.9846 4.27692 21.7165 3.62301 21.127L3.49509 21.0049C2.81998 20.3298 2.52405 19.4767 2.38473 18.4404C2.28242 17.6794 2.25787 16.7596 2.25192 15.6602L2.24997 14.5V11.9893C2.24997 10.3817 2.23258 9.33028 2.68259 8.41016C3.13269 7.49024 3.97332 6.85894 5.24216 5.87207L7.24216 4.31641L7.96872 3.75293C8.66073 3.22012 9.25301 2.78235 9.78805 2.45996C10.5187 2.01974 11.2128 1.75002 12 1.75ZM15.789 16.3857C15.471 15.9773 14.899 15.883 14.4697 16.1523L14.3857 16.2109C13.765 16.694 12.9316 17 12 17C11.1847 16.9999 10.4445 16.7661 9.85641 16.3838L9.61423 16.2109L9.53024 16.1523C9.1009 15.8832 8.52891 15.9772 8.21091 16.3857C7.89294 16.7944 7.94189 17.3726 8.30856 17.7227L8.38571 17.7891L8.57223 17.9277C9.52254 18.6047 10.7167 18.9999 12 19C13.3686 19 14.636 18.5505 15.6142 17.7891L15.6914 17.7227C16.0582 17.3725 16.1072 16.7945 15.789 16.3857Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15.0002 17C14.2007 17.6224 13.1504 18 12.0002 18C10.8499 18 9.79971 17.6224 9.00018 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
