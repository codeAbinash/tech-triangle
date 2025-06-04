
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

export default function NeuralNetworkIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
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

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
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

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 1.75C10.7574 1.75 9.75 2.75736 9.75 4C9.75 4.0142 9.75013 4.02836 9.75039 4.0425L6.56356 5.6822C6.05963 5.11059 5.32193 4.75 4.5 4.75C2.98122 4.75 1.75 5.98122 1.75 7.5C1.75 9.01223 2.97062 10.2394 4.48037 10.2499L7.06846 17.1515C6.27776 17.6345 5.75 18.5056 5.75 19.5C5.75 21.0188 6.98122 22.25 8.5 22.25C10.0188 22.25 11.25 21.0188 11.25 19.5C11.25 19.3014 11.2289 19.1077 11.189 18.9211L14.9502 16.1002C15.2816 15.8516 15.3487 15.3815 15.1002 15.0502C14.8517 14.7188 14.3816 14.6516 14.0502 14.9002L10.4723 17.5836C9.97689 17.0739 9.2856 16.7555 8.51992 16.7501L5.93177 9.84834C6.72234 9.3653 7.25 8.49427 7.25 7.5C7.25 7.34185 7.23665 7.18682 7.21102 7.03597L10.2837 5.455C10.5059 5.7168 10.7868 5.9271 11.1062 6.06549L10.3793 9.33671C9.43853 9.60614 8.75 10.4727 8.75 11.5C8.75 12.7426 9.75736 13.75 11 13.75C11.9591 13.75 12.7781 13.1499 13.1018 12.3047L15.794 12.5361C16.0496 14.0759 17.3877 15.25 19 15.25C20.7949 15.25 22.25 13.7949 22.25 12C22.25 10.2051 20.7949 8.75 19 8.75C18.5312 8.75 18.0855 8.84928 17.6829 9.02795L14.1617 4.62639C14.2192 4.42755 14.25 4.21737 14.25 4C14.25 2.75736 13.2426 1.75 12 1.75ZM13.2412 5.87698C13.0525 6.002 12.8439 6.09933 12.6211 6.16317L11.8941 9.43466C12.4819 9.68946 12.9395 10.1878 13.1398 10.8024L15.8944 11.0392C16.0203 10.6316 16.2243 10.2582 16.4889 9.93662L13.2412 5.87698Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M21.5 12C21.5 13.3807 20.3807 14.5 19 14.5C17.6193 14.5 16.5 13.3807 16.5 12C16.5 10.6193 17.6193 9.5 19 9.5C20.3807 9.5 21.5 10.6193 21.5 12Z" fill={color}/>
<Path opacity="0.4" d="M13.5 4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4C10.5 3.17157 11.1716 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4Z" fill={color}/>
<Path opacity="0.4" d="M12.5 11.5C12.5 12.3284 11.8284 13 11 13C10.1716 13 9.5 12.3284 9.5 11.5C9.5 10.6716 10.1716 10 11 10C11.8284 10 12.5 10.6716 12.5 11.5Z" fill={color}/>
<Path opacity="0.4" d="M6.5 7.5C6.5 8.60457 5.60457 9.5 4.5 9.5C3.39543 9.5 2.5 8.60457 2.5 7.5C2.5 6.39543 3.39543 5.5 4.5 5.5C5.60457 5.5 6.5 6.39543 6.5 7.5Z" fill={color}/>
<Path opacity="0.4" d="M10.5 19.5C10.5 20.6046 9.60457 21.5 8.5 21.5C7.39543 21.5 6.5 20.6046 6.5 19.5C6.5 18.3954 7.39543 17.5 8.5 17.5C9.60457 17.5 10.5 18.3954 10.5 19.5Z" fill={color}/>
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

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21.5 12C21.5 13.3807 20.3807 14.5 19 14.5C17.6193 14.5 16.5 13.3807 16.5 12C16.5 10.6193 17.6193 9.5 19 9.5C20.3807 9.5 21.5 10.6193 21.5 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M13.5 4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4C10.5 3.17157 11.1716 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12.5 11.5C12.5 12.3284 11.8284 13 11 13C10.1716 13 9.5 12.3284 9.5 11.5C9.5 10.6716 10.1716 10 11 10C11.8284 10 12.5 10.6716 12.5 11.5Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M6.5 7.5C6.5 8.60457 5.60457 9.5 4.5 9.5C3.39543 9.5 2.5 8.60457 2.5 7.5C2.5 6.39543 3.39543 5.5 4.5 5.5C5.60457 5.5 6.5 6.39543 6.5 7.5Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M10.5 19.5C10.5 20.6046 9.60457 21.5 8.5 21.5C7.39543 21.5 6.5 20.6046 6.5 19.5C6.5 18.3954 7.39543 17.5 8.5 17.5C9.60457 17.5 10.5 18.3954 10.5 19.5Z" stroke={color} strokeWidth={strokeWidth}/>
<Path opacity="0.4" d="M13.5 5L17.5 10M14.5 15.5L10.5 18.5M8 17.5L5 9.5M6.31298 6.65431L10.5 4.5M12.5 11.5L16.505 11.8443" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M12 5.5L11 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 1.75C10.7574 1.75 9.75 2.75736 9.75 4C9.75 4.0142 9.75013 4.02836 9.75039 4.0425L6.56356 5.6822C6.05963 5.11059 5.32193 4.75 4.5 4.75C2.98122 4.75 1.75 5.98122 1.75 7.5C1.75 9.01223 2.97062 10.2394 4.48037 10.2499L7.06846 17.1515C6.27776 17.6345 5.75 18.5056 5.75 19.5C5.75 21.0188 6.98122 22.25 8.5 22.25C10.0188 22.25 11.25 21.0188 11.25 19.5C11.25 19.3014 11.2289 19.1077 11.189 18.9211L14.9502 16.1002C15.2816 15.8516 15.3487 15.3815 15.1002 15.0502C14.8517 14.7188 14.3816 14.6516 14.0502 14.9002L10.4723 17.5836C9.97689 17.0739 9.2856 16.7555 8.51992 16.7501L5.93177 9.84834C6.72234 9.3653 7.25 8.49427 7.25 7.5C7.25 7.34185 7.23665 7.18682 7.21102 7.03597L10.2837 5.455C10.5059 5.7168 10.7868 5.9271 11.1062 6.06549L10.3793 9.33671C9.43853 9.60614 8.75 10.4727 8.75 11.5C8.75 12.7426 9.75736 13.75 11 13.75C11.9591 13.75 12.7781 13.1499 13.1018 12.3047L15.794 12.5361C16.0496 14.0759 17.3877 15.25 19 15.25C20.7949 15.25 22.25 13.7949 22.25 12C22.25 10.2051 20.7949 8.75 19 8.75C18.5312 8.75 18.0855 8.84928 17.6829 9.02795L14.1617 4.62639C14.2192 4.42755 14.25 4.21737 14.25 4C14.25 2.75736 13.2426 1.75 12 1.75ZM13.2412 5.87698C13.0525 6.002 12.8439 6.09933 12.6211 6.16317L11.8941 9.43466C12.4819 9.68946 12.9395 10.1878 13.1398 10.8024L15.8944 11.0392C16.0203 10.6316 16.2243 10.2582 16.4889 9.93662L13.2412 5.87698Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M15.75 12C15.75 10.2051 17.2051 8.75 19 8.75C20.7949 8.75 22.25 10.2051 22.25 12C22.25 13.7949 20.7949 15.25 19 15.25C17.2051 15.25 15.75 13.7949 15.75 12Z" fill={color}/>
<Path opacity="0.4" d="M9.75 4C9.75 2.75736 10.7574 1.75 12 1.75C13.2426 1.75 14.25 2.75736 14.25 4C14.25 5.24264 13.2426 6.25 12 6.25C10.7574 6.25 9.75 5.24264 9.75 4Z" fill={color}/>
<Path opacity="0.4" d="M8.75 11.5C8.75 10.2574 9.75736 9.25 11 9.25C12.2426 9.25 13.25 10.2574 13.25 11.5C13.25 12.7426 12.2426 13.75 11 13.75C9.75736 13.75 8.75 12.7426 8.75 11.5Z" fill={color}/>
<Path opacity="0.4" d="M1.75 7.5C1.75 5.98122 2.98122 4.75 4.5 4.75C6.01878 4.75 7.25 5.98122 7.25 7.5C7.25 9.01878 6.01878 10.25 4.5 10.25C2.98122 10.25 1.75 9.01878 1.75 7.5Z" fill={color}/>
<Path opacity="0.4" d="M5.75 19.5C5.75 17.9812 6.98122 16.75 8.5 16.75C10.0188 16.75 11.25 17.9812 11.25 19.5C11.25 21.0188 10.0188 22.25 8.5 22.25C6.98122 22.25 5.75 21.0188 5.75 19.5Z" fill={color}/>
<Path d="M13.2413 5.87745C13.6806 5.58633 14.0119 5.14508 14.1618 4.62686L17.683 9.02842C17.2171 9.23522 16.8088 9.54838 16.489 9.93709L13.2413 5.87745Z" fill={color}/>
<Path d="M11.1063 6.06596C11.3803 6.18467 11.6825 6.25047 12.0001 6.25047C12.2156 6.25047 12.4239 6.22019 12.6212 6.16364L11.8942 9.43513C11.6202 9.31633 11.3178 9.25047 11.0001 9.25047C10.7848 9.25047 10.5766 9.28071 10.3794 9.33718L11.1063 6.06596Z" fill={color}/>
<Path d="M9.75049 4.04297C9.76046 4.5812 9.95943 5.07322 10.2838 5.45547L7.21112 7.03644C7.1238 6.52261 6.89394 6.05731 6.56366 5.68267L9.75049 4.04297Z" fill={color}/>
<Path d="M4.48047 10.2504L7.06856 17.152C7.48556 16.8973 7.97569 16.7505 8.5001 16.7505C8.50675 16.7505 8.51339 16.7505 8.52002 16.7505L5.93187 9.84881C5.51482 10.1036 5.02461 10.2505 4.5001 10.2505C4.49355 10.2505 4.48701 10.2504 4.48047 10.2504Z" fill={color}/>
<Path d="M11.1891 18.9216C11.079 18.4078 10.8254 17.9473 10.4724 17.5841L14.0503 14.9006C14.3817 14.6521 14.8518 14.7193 15.1003 15.0506C15.3488 15.382 15.2817 15.8521 14.9503 16.1006L11.1891 18.9216Z" fill={color}/>
<Path d="M13.1019 12.3051L15.7941 12.5366C15.7652 12.3622 15.7501 12.1831 15.7501 12.0005C15.7501 11.666 15.8006 11.3433 15.8945 11.0397L13.1399 10.8028C13.2114 11.0225 13.2501 11.257 13.2501 11.5005C13.2501 11.784 13.1977 12.0553 13.1019 12.3051Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21.5 12C21.5 13.3807 20.3807 14.5 19 14.5C17.6193 14.5 16.5 13.3807 16.5 12C16.5 10.6193 17.6193 9.5 19 9.5C20.3807 9.5 21.5 10.6193 21.5 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M13.5 4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4C10.5 3.17157 11.1716 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M12.5 11.5C12.5 12.3284 11.8284 13 11 13C10.1716 13 9.5 12.3284 9.5 11.5C9.5 10.6716 10.1716 10 11 10C11.8284 10 12.5 10.6716 12.5 11.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M6.5 7.5C6.5 8.60457 5.60457 9.5 4.5 9.5C3.39543 9.5 2.5 8.60457 2.5 7.5C2.5 6.39543 3.39543 5.5 4.5 5.5C5.60457 5.5 6.5 6.39543 6.5 7.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M10.5 19.5C10.5 20.6046 9.60457 21.5 8.5 21.5C7.39543 21.5 6.5 20.6046 6.5 19.5C6.5 18.3954 7.39543 17.5 8.5 17.5C9.60457 17.5 10.5 18.3954 10.5 19.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M13.5 5L17.5 10M14.5 15.5L10.5 18.5M8 17.5L5 9.5M6.31298 6.65431L10.5 4.5M12.5 11.5L16.505 11.8443" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M12 6L11 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M9.75 4C9.75 2.75736 10.7574 1.75 12 1.75C13.2426 1.75 14.25 2.75736 14.25 4C14.25 4.21722 14.2192 4.42726 14.1618 4.62597L17.6832 9.02781C18.0857 8.84922 18.5313 8.75 19 8.75C20.7949 8.75 22.25 10.2051 22.25 12C22.25 13.7949 20.7949 15.25 19 15.25C17.3877 15.25 16.0496 14.076 15.794 12.5362L13.1018 12.3047C12.778 13.1499 11.9591 13.75 11 13.75C9.75736 13.75 8.75 12.7426 8.75 11.5C8.75 10.4677 9.44517 9.5978 10.3929 9.33286L11.2002 6.10369C10.842 5.96743 10.5276 5.74232 10.2839 5.45528L7.21108 7.03633C7.23667 7.18707 7.25 7.34198 7.25 7.5C7.25 8.4941 6.72252 9.36501 5.93218 9.84809L8.52042 16.7501C9.28605 16.7556 9.97727 17.0741 10.4726 17.5839L14.6507 14.4503L15.5507 15.6503L11.1891 18.9215C11.229 19.108 11.25 19.3016 11.25 19.5C11.25 21.0188 10.0188 22.25 8.5 22.25C6.98122 22.25 5.75 21.0188 5.75 19.5C5.75 18.5055 6.27795 17.6342 7.06887 17.1513L4.48087 10.2499C2.97089 10.2396 1.75 9.0124 1.75 7.5C1.75 5.98122 2.98122 4.75 4.5 4.75C5.32206 4.75 6.05987 5.1107 6.5638 5.68247L9.7504 4.04289C9.75013 4.02862 9.75 4.01433 9.75 4ZM11.9117 9.44236C12.491 9.69943 12.9416 10.194 13.1398 10.8024L15.8943 11.0393C16.0203 10.6315 16.2244 10.2581 16.4891 9.93635L13.2415 5.87678C13.087 5.9792 12.9191 6.06304 12.741 6.12513L11.9117 9.44236Z" fill={color}/>
</Svg>
)
}
