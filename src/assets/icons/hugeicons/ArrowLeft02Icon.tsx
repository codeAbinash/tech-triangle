
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

export default function ArrowLeft02Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M3.99982 11.9998L19.9998 11.9998" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M8.99996 16.9998L4 11.9997L9 6.99976" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M4 12H20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M8.2929 17.7071C8.68342 18.0976 9.31659 18.0976 9.70711 17.7071C10.0976 17.3166 10.0976 16.6834 9.7071 16.2929L6.41419 13L20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L6.41423 11L9.70707 7.7071C10.0976 7.31657 10.0976 6.68341 9.70706 6.29289C9.31653 5.90237 8.68337 5.90237 8.29285 6.2929L3.29823 11.2876C3.27977 11.3058 3.26202 11.3247 3.24501 11.3442C3.17745 11.4219 3.12387 11.5074 3.08425 11.5976C3.03045 11.7199 3.00042 11.855 3 11.997L3 12C3 12.0031 3.00001 12.0062 3.00004 12.0093C3.00118 12.135 3.02554 12.2553 3.06904 12.3659C3.11782 12.4902 3.19243 12.6067 3.2929 12.7071L8.2929 17.7071Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M3.9996 11.9998H19.9996M3.9996 11.9998C3.99961 13.3174 8.9994 17 8.9994 17M3.9996 11.9998C3.99959 10.6822 8.99944 7 8.99944 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M3.99982 11.9998L19.9998 11.9998" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z" fill={color}/>
<Path d="M5.02786 12C5.12116 12.1548 5.31675 12.4329 5.53062 12.6749C5.95637 13.1568 6.5431 13.7072 7.1556 14.2389C7.76313 14.7664 8.3736 15.2564 8.83397 15.6156C9.06363 15.7948 9.45995 16.0942 9.59308 16.1948C10.0377 16.5223 10.1327 17.1483 9.8052 17.5929C9.47769 18.0376 8.85169 18.1326 8.40699 17.8051L8.40328 17.8023C8.2589 17.6933 7.84028 17.3771 7.60352 17.1923C7.1264 16.82 6.48686 16.307 5.84439 15.7492C5.20689 15.1957 4.54362 14.5784 4.03187 13.9992C3.777 13.7108 3.53856 13.4082 3.35842 13.1094C3.19484 12.838 3.00002 12.4432 3 12C3.00002 11.5569 3.19484 11.162 3.35842 10.8906C3.53856 10.5918 3.777 10.2892 4.03186 10.0008C4.54362 9.4216 5.20689 8.80434 5.84439 8.25084C6.48686 7.69303 7.1264 7.18002 7.60352 6.80767C7.84028 6.62291 8.25863 6.30693 8.40301 6.19788L8.40699 6.19487C8.85169 5.86736 9.47769 5.96236 9.8052 6.40706C10.1327 6.85173 10.0377 7.47768 9.59308 7.80521C9.45995 7.90576 9.06363 8.20515 8.83397 8.38437C8.3736 8.74365 7.76313 9.23357 7.1556 9.76105C6.5431 10.2928 5.95637 10.8432 5.53062 11.3251C5.31675 11.5671 5.12116 11.8452 5.02786 12Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z" fill={color}/>
<Path d="M5.02786 12C5.12116 12.1548 5.31675 12.4329 5.53062 12.6749C5.95637 13.1568 6.5431 13.7072 7.1556 14.2389C7.76313 14.7664 8.3736 15.2564 8.83397 15.6156C9.06363 15.7948 9.45995 16.0942 9.59308 16.1948C10.0377 16.5223 10.1327 17.1483 9.8052 17.5929C9.47769 18.0376 8.85169 18.1326 8.40699 17.8051L8.40328 17.8023C8.2589 17.6933 7.84028 17.3771 7.60352 17.1923C7.1264 16.82 6.48686 16.307 5.84439 15.7492C5.20689 15.1957 4.54362 14.5784 4.03187 13.9992C3.777 13.7108 3.53856 13.4082 3.35842 13.1094C3.19484 12.838 3.00002 12.4432 3 12C3.00002 11.5569 3.19484 11.162 3.35842 10.8906C3.53856 10.5918 3.777 10.2892 4.03186 10.0008C4.54362 9.4216 5.20689 8.80434 5.84439 8.25084C6.48686 7.69303 7.1264 7.18002 7.60352 6.80767C7.84028 6.62291 8.25863 6.30693 8.40301 6.19788L8.40699 6.19487C8.85169 5.86736 9.47769 5.96236 9.8052 6.40706C10.1327 6.85173 10.0377 7.47768 9.59308 7.80521C9.45995 7.90576 9.06363 8.20515 8.83397 8.38437C8.3736 8.74365 7.76313 9.23357 7.1556 9.76105C6.5431 10.2928 5.95637 10.8432 5.53062 11.3251C5.31675 11.5671 5.12116 11.8452 5.02786 12Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M20 11.9998L4.44345 11.9997M8.99996 16.9998L4 11.9997L9 6.99976" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M9.47311 18L10.8811 16.5858L7.31169 13.0006L20.4998 13.0006V11.0006L7.31125 11.0006L10.8812 7.41422L9.47323 6L3.49985 12.0003L9.47311 18Z" fill={color}/>
</Svg>
)
}
