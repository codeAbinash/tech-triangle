
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function MoonCloudIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M1.37498 16.625C1.37498 13.842 3.35162 11.5214 5.97798 10.9895C6.51229 8.07956 9.06083 5.875 12.125 5.875C15.5108 5.875 18.2677 8.56724 18.3719 11.9277C20.9176 12.2903 22.875 14.4791 22.875 17.125C22.875 20.0245 20.5245 22.375 17.625 22.375H7.12498C3.94934 22.375 1.37498 19.8006 1.37498 16.625Z" fill={color}/>
<Path d="M3.60235 8.83488C3.35215 8.39727 3.20336 7.92884 3.14882 7.45682C4.2892 7.78584 5.5565 7.66651 6.66628 7.01948C7.77558 6.37274 8.50844 5.32681 8.79432 4.16956C9.16398 4.45033 9.48526 4.80976 9.73209 5.24148C9.90942 5.55165 10.0353 5.87623 10.1132 6.20586C10.7335 5.99507 11.3977 5.87908 12.0885 5.87512C11.9705 5.31677 11.7652 4.76801 11.4683 4.24881C10.7187 2.93759 9.51824 2.04614 8.17687 1.6634C7.8544 1.57138 7.50727 1.64713 7.25244 1.86511C6.99762 2.0831 6.86902 2.41431 6.90997 2.74714C7.03309 3.74774 6.56555 4.76312 5.65894 5.29169C4.7544 5.81906 3.65981 5.71859 2.87159 5.11697C2.60422 4.9129 2.25218 4.85691 1.93469 4.96796C1.61721 5.07901 1.37682 5.34223 1.29494 5.66846C0.954292 7.02578 1.11669 8.5168 1.86609 9.82755C2.36903 10.7072 3.07403 11.3973 3.88822 11.8721C4.50851 11.4489 5.21593 11.1439 5.97806 10.9896C6.00386 10.8491 6.03435 10.7102 6.06937 10.5732C5.07003 10.3992 4.15103 9.79456 3.60235 8.83488Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17.4776 12.0001C17.485 12 17.4925 12 17.5 12C19.9853 12 22 14.0147 22 16.5C22 18.9853 19.9853 21 17.5 21H7C4.23858 21 2 18.7614 2 16C2 13.4003 3.98398 11.2641 6.52042 11.0227M17.4776 12.0001C17.4924 11.8354 17.5 11.6686 17.5 11.5C17.5 8.46243 15.0376 6 12 6C9.12324 6 6.76233 8.20862 6.52042 11.0227M17.4776 12.0001C17.3753 13.1345 16.9286 14.1696 16.2428 15M6.52042 11.0227C6.67826 11.0077 6.83823 11 7 11C8.12582 11 9.16474 11.3721 10.0005 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11 5.53058C10.9061 5.04705 10.7328 4.5707 10.4752 4.12013C9.85932 3.04292 8.87603 2.31347 7.77746 2C7.94723 3.37965 7.30486 4.79173 6.03759 5.53058C4.77033 6.26942 3.23814 6.12516 2.13984 5.28687C1.85939 6.40434 1.99332 7.62899 2.6092 8.7062C3.44206 10.1629 4.94685 10.9839 6.5 11" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}
