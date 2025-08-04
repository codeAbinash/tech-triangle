
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function PlayIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M13.9405 6.337C15.5735 7.26468 16.8567 7.99369 17.7709 8.66148C18.6913 9.33386 19.3721 10.0366 19.6159 10.9632C19.7947 11.6426 19.7947 12.3574 19.6159 13.0368C19.3721 13.9634 18.6913 14.6661 17.7709 15.3385C16.8567 16.0063 15.5735 16.7353 13.9406 17.663L13.9406 17.663C12.3632 18.5591 11.033 19.3148 10.0232 19.7444C9.0053 20.1773 8.07729 20.3968 7.17536 20.1412C6.51252 19.9533 5.90941 19.5968 5.42356 19.1066C4.76419 18.4414 4.49951 17.5219 4.37429 16.4154C4.24998 15.3169 4.24999 13.879 4.25 12.0501V12.0501V11.9499V11.9499C4.24999 10.121 4.24998 8.68309 4.37429 7.58464C4.49951 6.4781 4.76419 5.55861 5.42356 4.89335C5.90941 4.40317 6.51252 4.04666 7.17536 3.85883C8.07729 3.60325 9.0053 3.82269 10.0232 4.25565C11.033 4.68516 12.3632 5.44084 13.9405 6.337Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}
