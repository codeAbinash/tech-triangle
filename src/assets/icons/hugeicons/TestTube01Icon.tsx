
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function TestTube01Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M7 2.25C7 1.69772 7.44772 1.25 8 1.25L16 1.25C16.5523 1.25 17 1.69772 17 2.25C17 2.80228 16.5523 3.25 16 3.25L8 3.25C7.44772 3.25 7 2.80228 7 2.25Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.52995 1.24988C10.0669 1.24988 10.5022 1.68742 10.5022 2.22715V4.65687L10.5022 4.78963C10.5024 6.37129 10.5025 7.34069 10.264 8.28066C10.052 9.11617 9.66276 9.8838 9.04803 11.024C9.89101 11.1428 10.8946 11.6878 12 12.3182C13.7323 13.3061 14.9845 13.0842 15.7565 12.5105L15.2552 11.585L15.1919 11.4681C14.4366 10.0739 13.9742 9.22019 13.7358 8.28066C13.4973 7.34069 13.4974 6.37129 13.4976 4.78964V4.78963L13.4976 4.65687V2.22715C13.4976 1.68742 13.9329 1.24988 14.4698 1.24988C15.0067 1.24988 15.442 1.68742 15.442 2.22715V4.65687C15.442 6.41258 15.4489 7.12373 15.6199 7.79761C15.791 8.47197 16.1249 9.10287 16.963 10.6504L18.1091 12.7666L18.1091 12.7666C19.1133 14.6209 19.9208 16.1118 20.3587 17.3175C20.8068 18.5511 20.9666 19.7474 20.3116 20.8403L20.3094 20.8439L20.2963 20.8657L20.294 20.8694C19.6329 21.951 18.5021 22.372 17.1988 22.5628C15.9205 22.7499 14.2129 22.7499 12.0836 22.7499H12.0836H12.0836H12.0836H11.9162H11.9162H11.9161H11.9161C9.78685 22.7499 8.07929 22.7499 6.80096 22.5628C5.49763 22.372 4.36688 21.951 3.70573 20.8694L3.70351 20.8657L3.69033 20.8439L3.68815 20.8403C3.03313 19.7474 3.193 18.5511 3.64105 17.3175C4.07896 16.1117 4.88644 14.6208 5.89068 12.7666L7.03675 10.6504C7.87489 9.10287 8.20875 8.47197 8.37986 7.79761C8.55084 7.12373 8.55774 6.41258 8.55774 4.65687V2.22715C8.55774 1.68742 8.99301 1.24988 9.52995 1.24988ZM8.03417 16.2613C7.89188 15.7278 8.20701 15.1795 8.73804 15.0365L8.74668 15.0342C9.27771 14.8913 9.82354 15.2078 9.96583 15.7413C10.1081 16.2748 9.79299 16.8231 9.26196 16.9661L9.25332 16.9684C8.72229 17.1113 8.17646 16.7947 8.03417 16.2613ZM14.7379 17.0365C14.2069 17.1795 13.8918 17.7278 14.034 18.2613C14.1763 18.7947 14.7222 19.1113 15.2532 18.9684L15.2618 18.9661C15.7929 18.8231 16.108 18.2748 15.9657 17.7413C15.8234 17.2078 15.2776 16.8913 14.7466 17.0342L14.7379 17.0365Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14.5405 2V4.48622C14.5405 6.23417 14.5405 7.10814 14.7545 7.94715C14.9685 8.78616 15.3879 9.55654 16.2267 11.0973L17.3633 13.1852C19.5008 17.1115 20.5696 19.0747 19.6928 20.53L19.6792 20.5522C18.7896 22 16.5264 22 12 22C7.47357 22 5.21036 22 4.3208 20.5522L4.30725 20.53C3.43045 19.0747 4.49918 17.1115 6.63666 13.1852L7.7733 11.0973C8.61209 9.55654 9.03149 8.78616 9.24548 7.94715C9.45947 7.10814 9.45947 6.23417 9.45947 4.48622V2" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M9 16.002L9.00868 15.9996" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M15 18.002L15.0087 17.9996" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8 2L16 2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.5 11.5563C8.5 10.4029 10.0994 11.2343 12 12.3182C14.5 13.7439 16 12.65 16.5 11.6152" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}
