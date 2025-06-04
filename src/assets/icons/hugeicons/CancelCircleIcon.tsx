
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

export default function CancelCircleIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14.9994 15L9 9M9.00064 15L15 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15.5 15.5L8.50076 8.5M8.50151 15.5L15.5008 8.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12ZM8.29293 8.29286C8.68348 7.90235 9.31664 7.90239 9.70714 8.29293L12 10.586L14.2929 8.29293C14.6834 7.90239 15.3165 7.90235 15.7071 8.29286C16.0976 8.68336 16.0976 9.31652 15.7071 9.70707L13.4141 12.0003L15.7065 14.2929C16.097 14.6835 16.097 15.3166 15.7064 15.7071C15.3159 16.0976 14.6827 16.0976 14.2922 15.7071L12 13.4146L9.70779 15.7071C9.31728 16.0976 8.68412 16.0976 8.29357 15.7071C7.90303 15.3166 7.90299 14.6835 8.2935 14.2929L10.5859 12.0003L8.29286 9.70707C7.90235 9.31652 7.90239 8.68336 8.29293 8.29286Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill={color}/>
<Path d="M14.9994 15L9 9M9.00064 15L15 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M14.9994 15L9 9M9.00064 15L15 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM15.7071 9.70713C16.0976 9.31662 16.0976 8.68345 15.7071 8.29292C15.3166 7.90238 14.6835 7.90236 14.2929 8.29287L11.9998 10.5858L9.70708 8.29326C9.31655 7.90275 8.68338 7.90277 8.29287 8.29331C7.90236 8.68385 7.90238 9.31701 8.29292 9.70752L10.5855 12L8.29292 14.2925C7.90238 14.683 7.90236 15.3162 8.29287 15.7067C8.68338 16.0972 9.31655 16.0972 9.70708 15.7067L11.9998 13.4142L14.2929 15.7071C14.6835 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3165 16.0976 14.6834 15.7071 14.2929L13.4141 12L15.7071 9.70713Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M15.7071 8.29292C16.0976 8.68345 16.0976 9.31662 15.7071 9.70713L13.4141 12L15.7071 14.2929C16.0976 14.6834 16.0976 15.3165 15.7071 15.7071C15.3166 16.0976 14.6835 16.0976 14.2929 15.7071L11.9998 13.4142L9.70708 15.7067C9.31655 16.0972 8.68338 16.0972 8.29287 15.7067C7.90236 15.3162 7.90238 14.683 8.29292 14.2925L10.5855 12L8.29292 9.70752C7.90238 9.31701 7.90236 8.68385 8.29287 8.29331C8.68338 7.90277 9.31655 7.90275 9.70708 8.29326L11.9998 10.5858L14.2929 8.29287C14.6835 7.90236 15.3166 7.90238 15.7071 8.29292Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15.9991 16L8 8M8.00085 16L16 8" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM15.293 7.29285L11.9998 10.5858L8.70714 7.29337L7.29297 8.70763L10.5855 12L7.29297 15.2923L8.70714 16.7066L11.9998 13.4141L15.293 16.7071L16.7071 15.2928L13.414 12L16.7071 8.70711L15.293 7.29285Z" fill={color}/>
</Svg>
)
}
