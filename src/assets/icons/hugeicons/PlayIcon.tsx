
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

export default function PlayIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M7.5241 19.0621C6.85783 19.4721 6 18.9928 6 18.2104V5.78956C6 5.00724 6.85783 4.52789 7.5241 4.93791L17.6161 11.1483C18.2506 11.5388 18.2506 12.4612 17.6161 12.8517L7.5241 19.0621Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5.25 5.78987C5.25 4.42081 6.7512 3.58195 7.91717 4.29947L18.0091 10.5099C19.1196 11.1933 19.1196 12.8074 18.0091 13.4907L7.91717 19.7011C6.7512 20.4187 5.25 19.5798 5.25 18.2107V5.78987Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" fill={color}/>
<Path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C18.9635 11.4312 19 11.7156 19 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M13.9405 6.337C15.5735 7.26468 16.8567 7.99369 17.7709 8.66148C18.6913 9.33386 19.3721 10.0366 19.6159 10.9632C19.7947 11.6426 19.7947 12.3574 19.6159 13.0368C19.3721 13.9634 18.6913 14.6661 17.7709 15.3385C16.8567 16.0063 15.5735 16.7353 13.9406 17.663L13.9406 17.663C12.3632 18.5591 11.033 19.3148 10.0232 19.7444C9.0053 20.1773 8.07729 20.3968 7.17536 20.1412C6.51252 19.9533 5.90941 19.5968 5.42356 19.1066C4.76419 18.4414 4.49951 17.5219 4.37429 16.4154C4.24998 15.3169 4.24999 13.879 4.25 12.0501V12.0501V11.9499V11.9499C4.24999 10.121 4.24998 8.68309 4.37429 7.58464C4.49951 6.4781 4.76419 5.55861 5.42356 4.89335C5.90941 4.40317 6.51252 4.04666 7.17536 3.85883C8.07729 3.60325 9.0053 3.82269 10.0232 4.25565C11.033 4.68516 12.3632 5.44084 13.9405 6.337Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M13.9405 6.337C15.5735 7.26468 16.8567 7.99369 17.7709 8.66148C18.6913 9.33386 19.3721 10.0366 19.6159 10.9632C19.7947 11.6426 19.7947 12.3574 19.6159 13.0368C19.3721 13.9634 18.6913 14.6661 17.7709 15.3385C16.8567 16.0063 15.5735 16.7353 13.9406 17.663L13.9406 17.663C12.3632 18.5591 11.033 19.3148 10.0232 19.7444C9.0053 20.1773 8.07729 20.3968 7.17536 20.1412C6.51252 19.9533 5.90941 19.5968 5.42356 19.1066C4.76419 18.4414 4.49951 17.5219 4.37429 16.4154C4.24998 15.3169 4.24999 13.879 4.25 12.0501V12.0501V11.9499V11.9499C4.24999 10.121 4.24998 8.68309 4.37429 7.58464C4.49951 6.4781 4.76419 5.55861 5.42356 4.89335C5.90941 4.40317 6.51252 4.04666 7.17536 3.85883C8.07729 3.60325 9.0053 3.82269 10.0232 4.25565C11.033 4.68516 12.3632 5.44084 13.9405 6.337Z" fill={color}/>
<Path d="M17.7713 8.66271C18.6918 9.33509 19.3725 10.0379 19.6164 10.9644C19.7952 11.6439 19.7952 12.3586 19.6164 13.0381C19.3725 13.9646 18.6918 14.6674 17.7713 15.3398C16.8572 16.0075 15.574 16.7365 13.9411 17.6642L13.941 17.6642C12.3637 18.5604 11.0335 19.3161 10.0237 19.7456C9.00576 20.1785 8.07776 20.398 7.17582 20.1424C6.51298 19.9546 5.90987 19.5981 5.42403 19.1079C4.76465 18.4426 4.49997 17.5231 4.37475 16.4166C4.29889 15.7463 4.26933 14.9495 4.25781 14.0146L16.1055 7.58588C16.7533 7.97227 17.3094 8.32531 17.7713 8.66271Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M5 20V4L19 12L5 20Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M4.62355 3.35132C4.85479 3.21713 5.13998 3.21617 5.3721 3.34882L19.3721 11.3488C19.6058 11.4824 19.75 11.7309 19.75 12C19.75 12.2691 19.6058 12.5177 19.3721 12.6512L5.3721 20.6512C5.13998 20.7838 4.85479 20.7829 4.62355 20.6487C4.39232 20.5145 4.25 20.2674 4.25 20V4C4.25 3.73265 4.39232 3.48551 4.62355 3.35132Z" fill={color}/>
</Svg>
)
}
