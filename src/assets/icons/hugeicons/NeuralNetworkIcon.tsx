
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function NeuralNetworkIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 1.75C10.7574 1.75 9.75 2.75736 9.75 4C9.75 4.0142 9.75013 4.02836 9.75039 4.0425L6.56356 5.6822C6.05963 5.11059 5.32193 4.75 4.5 4.75C2.98122 4.75 1.75 5.98122 1.75 7.5C1.75 9.01223 2.97062 10.2394 4.48037 10.2499L7.06846 17.1515C6.27776 17.6345 5.75 18.5056 5.75 19.5C5.75 21.0188 6.98122 22.25 8.5 22.25C10.0188 22.25 11.25 21.0188 11.25 19.5C11.25 19.3014 11.2289 19.1077 11.189 18.9211L14.9502 16.1002C15.2816 15.8516 15.3487 15.3815 15.1002 15.0502C14.8517 14.7188 14.3816 14.6516 14.0502 14.9002L10.4723 17.5836C9.97689 17.0739 9.2856 16.7555 8.51992 16.7501L5.93177 9.84834C6.72234 9.3653 7.25 8.49427 7.25 7.5C7.25 7.34185 7.23665 7.18682 7.21102 7.03597L10.2837 5.455C10.5059 5.7168 10.7868 5.9271 11.1062 6.06549L10.3793 9.33671C9.43853 9.60614 8.75 10.4727 8.75 11.5C8.75 12.7426 9.75736 13.75 11 13.75C11.9591 13.75 12.7781 13.1499 13.1018 12.3047L15.794 12.5361C16.0496 14.0759 17.3877 15.25 19 15.25C20.7949 15.25 22.25 13.7949 22.25 12C22.25 10.2051 20.7949 8.75 19 8.75C18.5312 8.75 18.0855 8.84928 17.6829 9.02795L14.1617 4.62639C14.2192 4.42755 14.25 4.21737 14.25 4C14.25 2.75736 13.2426 1.75 12 1.75ZM13.2412 5.87698C13.0525 6.002 12.8439 6.09933 12.6211 6.16317L11.8941 9.43466C12.4819 9.68946 12.9395 10.1878 13.1398 10.8024L15.8944 11.0392C16.0203 10.6316 16.2243 10.2582 16.4889 9.93662L13.2412 5.87698Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21.5 12C21.5 13.3807 20.3807 14.5 19 14.5C17.6193 14.5 16.5 13.3807 16.5 12C16.5 10.6193 17.6193 9.5 19 9.5C20.3807 9.5 21.5 10.6193 21.5 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M13.5 4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4C10.5 3.17157 11.1716 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12.5 11.5C12.5 12.3284 11.8284 13 11 13C10.1716 13 9.5 12.3284 9.5 11.5C9.5 10.6716 10.1716 10 11 10C11.8284 10 12.5 10.6716 12.5 11.5Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M6.5 7.5C6.5 8.60457 5.60457 9.5 4.5 9.5C3.39543 9.5 2.5 8.60457 2.5 7.5C2.5 6.39543 3.39543 5.5 4.5 5.5C5.60457 5.5 6.5 6.39543 6.5 7.5Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M10.5 19.5C10.5 20.6046 9.60457 21.5 8.5 21.5C7.39543 21.5 6.5 20.6046 6.5 19.5C6.5 18.3954 7.39543 17.5 8.5 17.5C9.60457 17.5 10.5 18.3954 10.5 19.5Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M13.5 5L17.5 10M14.5 15.5L10.5 18.5M8 17.5L5 9.5M6.31298 6.65431L10.5 4.5M12.5 11.5L16.505 11.8443" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 5.5L11 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}
