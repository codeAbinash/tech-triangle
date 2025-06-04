
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

export default function SoundcloudIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M8 6V19M5.00018 9.87917V18.9079M2 11.6296V17.1574" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17.4776 10.6001C17.485 10.6 17.4925 10.6 17.5 10.6C19.9853 10.6 22 12.4804 22 14.8C22 17.1196 19.9853 19 17.5 19H14M17.4776 10.6001C17.4924 10.4463 17.5 10.2907 17.5 10.1333C17.5 7.29827 15.0376 5 12 5H11V19M17.4776 10.6001C17.3753 11.6589 16.9286 12.625 16.2428 13.4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M8 6V19M5.00018 9.87917V18.9079M2 11.6296V17.1574" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11 19V5.04196C14.6494 4.6168 18.1357 7.48297 17.5072 10.8882M17.5072 10.8882C17.354 11.7184 16.9562 12.5805 16.2567 13.4349M17.5072 10.8882C18.5516 10.4674 21.2759 11.1258 21.8891 13.9569C22.5814 17.1529 19.8883 19 17.7884 19H14.0626" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M8 5.25C8.41421 5.25 8.75 5.58579 8.75 6V19C8.75 19.4142 8.41421 19.75 8 19.75C7.58579 19.75 7.25 19.4142 7.25 19V6C7.25 5.58579 7.58579 5.25 8 5.25ZM5.00018 9.12917C5.41439 9.12917 5.75018 9.46496 5.75018 9.87917V18.9079C5.75018 19.3221 5.41439 19.6579 5.00018 19.6579C4.58597 19.6579 4.25018 19.3221 4.25018 18.9079V9.87917C4.25018 9.46496 4.58597 9.12917 5.00018 9.12917ZM2 10.8796C2.41421 10.8796 2.75 11.2154 2.75 11.6296V17.1574C2.75 17.5716 2.41421 17.9074 2 17.9074C1.58579 17.9074 1.25 17.5716 1.25 17.1574V11.6296C1.25 11.2154 1.58579 10.8796 2 10.8796Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M18.3311 10.0242C18.3113 8.41548 17.5222 6.98476 16.3507 5.96338C14.9466 4.7393 12.9535 4.05932 10.9132 4.29702C10.5351 4.34107 10.25 4.66135 10.25 5.04198V19C10.25 19.4142 10.5858 19.75 11 19.75H17.7884C19.0364 19.75 20.4279 19.2096 21.4199 18.2035C22.4383 17.1707 23.0244 15.6552 22.6221 13.7981C22.2644 12.1466 21.2754 11.0987 20.2082 10.5389C19.6005 10.2202 18.9356 10.0456 18.3311 10.0242Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M17.5 10.1333C17.5 7.29827 15.0376 5 12 5C11.4477 5 11 5.44772 11 6V19H14H17.5C19.9853 19 22 17.1196 22 14.8C22 12.4804 19.9853 10.6 17.5 10.6L17.4776 10.6001C17.4924 10.4463 17.5 10.2907 17.5 10.1333Z" fill={color}/>
<Path d="M8 6V19M5.00018 9.87917V18.9079M2 11.6296V17.1574" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17.4776 10.6001C17.485 10.6 17.4925 10.6 17.5 10.6C19.9853 10.6 22 12.4804 22 14.8C22 17.1196 19.9853 19 17.5 19H14M17.4776 10.6001C17.4924 10.4463 17.5 10.2907 17.5 10.1333C17.5 7.29827 15.0376 5 12 5V5C11.4477 5 11 5.44772 11 6V19M17.4776 10.6001C17.3753 11.6589 16.9286 12.625 16.2428 13.4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M8 6V19M5.00018 9.87917V18.9079M2 11.6296V17.1574" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M17.4776 10.6001C17.485 10.6 17.4925 10.6 17.5 10.6C19.9853 10.6 22 12.4804 22 14.8C22 17.1196 19.9853 19 17.5 19H14M17.4776 10.6001C17.4924 10.4463 17.5 10.2907 17.5 10.1333C17.5 7.29827 15.0376 5 12 5V5C11.4477 5 11 5.44772 11 6V19M17.4776 10.6001C17.3753 11.6589 16.9286 12.625 16.2428 13.4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10.25 6C10.25 5.0335 11.0335 4.25 12 4.25C15.3215 4.25 18.1146 6.71493 18.2452 9.89994C20.7562 10.2389 22.75 12.2646 22.75 14.8C22.75 17.5817 20.3499 19.75 17.5 19.75H11C10.5858 19.75 10.25 19.4142 10.25 19V6Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8 5.25C8.41421 5.25 8.75 5.58579 8.75 6V19C8.75 19.4142 8.41421 19.75 8 19.75C7.58579 19.75 7.25 19.4142 7.25 19V6C7.25 5.58579 7.58579 5.25 8 5.25ZM5.00018 9.12917C5.4144 9.12917 5.75018 9.46496 5.75018 9.87917V18.9079C5.75018 19.3221 5.4144 19.6579 5.00018 19.6579C4.58597 19.6579 4.25018 19.3221 4.25018 18.9079V9.87917C4.25018 9.46496 4.58597 9.12917 5.00018 9.12917ZM2 10.8796C2.41421 10.8796 2.75 11.2154 2.75 11.6296V17.1574C2.75 17.5716 2.41421 17.9074 2 17.9074C1.58579 17.9074 1.25 17.5716 1.25 17.1574V11.6296C1.25 11.2154 1.58579 10.8796 2 10.8796Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M10.25 6C10.25 5.0335 11.0335 4.25 12 4.25C15.3215 4.25 18.1146 6.71493 18.2452 9.89994C20.7562 10.2389 22.75 12.2646 22.75 14.8C22.75 17.5817 20.3499 19.75 17.5 19.75H11C10.5858 19.75 10.25 19.4142 10.25 19V6Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8 5.25C8.41421 5.25 8.75 5.58579 8.75 6V19C8.75 19.4142 8.41421 19.75 8 19.75C7.58579 19.75 7.25 19.4142 7.25 19V6C7.25 5.58579 7.58579 5.25 8 5.25ZM5.00018 9.12917C5.4144 9.12917 5.75018 9.46496 5.75018 9.87917V18.9079C5.75018 19.3221 5.4144 19.6579 5.00018 19.6579C4.58597 19.6579 4.25018 19.3221 4.25018 18.9079V9.87917C4.25018 9.46496 4.58597 9.12917 5.00018 9.12917ZM2 10.8796C2.41421 10.8796 2.75 11.2154 2.75 11.6296V17.1574C2.75 17.5716 2.41421 17.9074 2 17.9074C1.58579 17.9074 1.25 17.5716 1.25 17.1574V11.6296C1.25 11.2154 1.58579 10.8796 2 10.8796Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M8.00702 6.09009V19M5.00345 9.94239V18.9086M1.99951 11.6807V17.1702" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M11.051 18.9807L10.9868 5.04191C14.6407 4.61733 18.1314 7.47956 17.5021 10.8801M17.5021 10.8801C17.3487 11.7091 16.9505 12.5701 16.25 13.4233M17.5021 10.8801C18.5478 10.4599 21.2755 11.1174 21.8895 13.9446C22.5827 17.1361 19.8862 18.9807 17.7836 18.9807H14.0533" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M7.25 19.75V6H8.75V19.75H7.25Z" fill={color}/>
<Path d="M4.25018 19.6579V9.87917H5.75018V19.6579H4.25018Z" fill={color}/>
<Path d="M1.25 17.9074V11.6296H2.75V17.9074H1.25Z" fill={color}/>
<Path d="M12 4.25C15.3215 4.25 18.1146 6.71493 18.2452 9.89994C20.7562 10.2389 22.75 12.2646 22.75 14.8C22.75 17.5817 20.3499 19.75 17.5 19.75H10.25V4.25H12Z" fill={color}/>
</Svg>
)
}
