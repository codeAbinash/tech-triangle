
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function StarOffIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.29289 1.29284C1.68342 0.902319 2.31658 0.902319 2.70711 1.29284L22.7071 21.2928C23.0976 21.6834 23.0976 22.3165 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70706C0.902369 2.31653 0.902369 1.68337 1.29289 1.29284Z" fill={color}/>
<Path d="M11.9961 1.2499C13.0454 1.2499 13.8719 2.04243 14.3995 3.11182L16.1616 6.66506C16.215 6.77503 16.3417 6.92988 16.5321 7.07154C16.7223 7.21305 16.9086 7.29111 17.0311 7.31171L20.2207 7.84603C21.3729 8.03964 22.3386 8.60439 22.6521 9.5878C22.9653 10.5704 22.5064 11.5915 21.6778 12.4215L21.677 12.4224L19.1991 14.9208C19.0873 15.0335 19.0314 15.0899 19.0208 15.0988C18.8717 15.2236 18.7861 15.2238 18.6365 15.0995C18.6258 15.0907 18.5992 15.064 18.5459 15.0107L8.91586 5.3807C8.76876 5.2336 8.6952 5.16005 8.67958 5.06475C8.66395 4.96944 8.71017 4.87625 8.80259 4.68988L9.58562 3.11087L9.58632 3.10948C10.119 2.04098 10.948 1.2499 11.9961 1.2499Z" fill={color}/>
<Path d="M6.96132 7.31209L6.96233 7.31192C7.07056 7.29314 7.12467 7.28376 7.14303 7.28285C7.23815 7.27815 7.26744 7.28743 7.34249 7.34604C7.35698 7.35736 7.37533 7.37571 7.41203 7.4124L19.5451 19.5455C19.617 19.6174 19.653 19.6533 19.6752 19.7002C19.6974 19.7472 19.7022 19.7942 19.7116 19.8884C19.8135 20.9037 19.6083 21.8366 18.8771 22.3741C17.9667 23.0432 16.7227 22.7466 15.5925 22.0735L12.6026 20.2889C12.477 20.2139 12.2614 20.1531 12.0011 20.1531C11.7427 20.1531 11.5226 20.2131 11.3888 20.2909L11.3869 20.292L8.40288 22.0731C7.27405 22.7486 6.03154 23.0399 5.12111 22.3701C4.21449 21.7031 4.11214 20.4299 4.40711 19.1446L5.1159 16.0546L5.11633 16.0526C5.14741 15.9106 5.14133 15.6907 5.0728 15.4493C5.0038 15.2063 4.89379 15.0198 4.79558 14.9208L2.31585 12.4205C1.49265 11.5905 1.03521 10.5703 1.34595 9.58916C1.65759 8.60515 2.62143 8.0397 3.77433 7.84596L6.96132 7.31209Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M18.5038 14.5L21.1477 11.8925C22.616 10.4206 22.1366 8.92853 20.099 8.58575L16.9128 8.05143C16.3734 7.9607 15.7342 7.48687 15.4945 6.99288L13.7366 3.44418C12.7877 1.51861 11.2296 1.51861 10.2707 3.44418L9.5 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7.29561 7.99998C7.22668 8.02267 7.15848 8.04006 7.09201 8.05144L3.90008 8.58576C1.85885 8.92853 1.38856 10.4206 2.84945 11.8925L5.33095 14.3927C5.7512 14.8161 5.98134 15.6327 5.85126 16.2175L5.14083 19.3125C4.58049 21.7522 5.88128 22.7099 8.02257 21.4296L11.0144 19.6452C11.5647 19.3226 12.4553 19.3226 12.9956 19.6452L15.9874 21.4296C18.1387 22.7099 19.4295 21.7623 18.8691 19.3125L18.7974 19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2 2L22 22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}
