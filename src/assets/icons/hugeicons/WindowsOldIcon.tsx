
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

export default function WindowsOldIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14.0136 3.99538L8.01361 4.99036C5.61912 5.38744 4.42188 5.58597 3.71094 6.421C3 7.25602 3 8.46368 3 10.879L3 13.121C3 15.5363 3 16.744 3.71094 17.579C4.42188 18.414 5.61913 18.6126 8.01361 19.0096L14.0136 20.0046C17.2567 20.5424 18.8782 20.8113 19.9391 19.9171C21 19.023 21 17.3873 21 14.116V9.88402C21 6.6127 21 4.97704 19.9391 4.08286C18.8782 3.18868 17.2567 3.45758 14.0136 3.99538Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11 4.5V19.5M3 12H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M18.6712 3.02771L4.6712 5.36104C3.70683 5.52177 3 6.35615 3 7.33383V16.6667C3 17.6443 3.70683 18.4787 4.6712 18.6395L18.6712 20.9728C19.8903 21.176 21 20.2359 21 19V5.00049C21 3.76462 19.8903 2.82453 18.6712 3.02771Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11 4.5V19.5M3 12H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10.25 3.66913L4.5479 4.61948C3.22189 4.84048 2.25 5.98775 2.25 7.33206V11.25H10.25V3.66913Z" fill={color}/>
<Path d="M2.25 12.75V16.6649C2.25 18.0092 3.22189 19.1565 4.5479 19.3775L10.25 20.3278V12.75H2.25Z" fill={color}/>
<Path d="M11.75 20.5778L18.5479 21.7108C20.2241 21.9902 21.75 20.6976 21.75 18.9982V12.75H11.75V20.5778Z" fill={color}/>
<Path d="M21.75 11.25V4.99873C21.75 3.29939 20.2241 2.00678 18.5479 2.28614L11.75 3.41913V11.25H21.75Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M21 14.116C21 17.3873 21 19.023 19.9391 19.9171C18.8783 20.8113 17.2567 20.5424 14.0136 20.0046H14.0136L11 19.5V12H3V10.879C3 8.46368 3 7.25602 3.71094 6.421C4.42188 5.58597 5.61912 5.38744 8.01361 4.99036L11 4.5V12H21V14.116Z" fill={color}/>
<Path d="M14.0136 3.99538L8.01361 4.99036C5.61912 5.38744 4.42188 5.58597 3.71094 6.421C3 7.25602 3 8.46368 3 10.879L3 13.121C3 15.5363 3 16.744 3.71094 17.579C4.42188 18.414 5.61913 18.6126 8.01361 19.0096L14.0136 20.0046C17.2567 20.5424 18.8782 20.8113 19.9391 19.9171C21 19.023 21 17.3873 21 14.116V9.88402C21 6.6127 21 4.97704 19.9391 4.08286C18.8782 3.18868 17.2567 3.45758 14.0136 3.99538Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11 4.5V19.5M3 12H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14.0136 3.99538L8.01361 4.99036C5.61912 5.38744 4.42188 5.58597 3.71094 6.421C3 7.25602 3 8.46368 3 10.879L3 13.121C3 15.5363 3 16.744 3.71094 17.579C4.42188 18.414 5.61913 18.6126 8.01361 19.0096L14.0136 20.0046C17.2567 20.5424 18.8782 20.8113 19.9391 19.9171C21 19.023 21 17.3873 21 14.116V9.88402C21 6.6127 21 4.97704 19.9391 4.08286C18.8782 3.18868 17.2567 3.45758 14.0136 3.99538Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M11 4.5V19.5M3 12H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M10.25 3.85925L7.84227 4.25852C6.68636 4.45019 5.7502 4.60542 5.01793 4.82233C4.25565 5.04813 3.62542 5.36451 3.13988 5.93479C2.654 6.50547 2.44343 7.17723 2.34471 7.964C2.24997 8.71899 2.24998 9.66386 2.25 10.8293V10.8293V10.8293V11.25H10.25V3.85925ZM2.25 12.75V13.1707V13.1707V13.1707C2.24998 14.3361 2.24997 15.281 2.34471 16.036C2.44343 16.8228 2.654 17.4945 3.13988 18.0652C3.62542 18.6355 4.25566 18.9519 5.01793 19.1777C5.75021 19.3946 6.68639 19.5498 7.84231 19.7415L10.25 20.1407V12.75H2.25ZM11.75 20.3895L13.9497 20.7543C15.5213 21.0149 16.7803 21.2237 17.7767 21.2477C18.806 21.2724 19.6923 21.1061 20.4225 20.4906C21.1534 19.8745 21.4649 19.0301 21.6099 18.0139C21.75 17.0313 21.75 15.7607 21.75 14.1761V12.75H11.75V20.3895ZM21.75 11.25V9.82392C21.75 8.23929 21.75 6.96867 21.6099 5.98609C21.4649 4.96987 21.1534 4.12549 20.4225 3.50939C19.6923 2.89391 18.806 2.72759 17.7767 2.75234C16.7803 2.77629 15.5213 2.98509 13.9497 3.24573L11.75 3.6105V11.25H21.75Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M20.4225 3.50744C21.1534 4.12353 21.4649 4.96792 21.6099 5.98414C21.75 6.96672 21.75 8.23734 21.75 9.82196V11.998H11V20.2632L7.84231 19.7395C6.68639 19.5479 5.75021 19.3926 5.01793 19.1757C4.25566 18.9499 3.62542 18.6335 3.13988 18.0632C2.654 17.4926 2.44343 16.8208 2.3447 16.034C2.24997 15.279 2.24998 14.3342 2.25 13.1687V13.1687V11.998L11 11.998V3.73292L13.9497 3.24378C15.5213 2.98313 16.7803 2.77433 17.7767 2.75038C18.806 2.72564 19.6923 2.89196 20.4225 3.50744Z" fill={color}/>
<Path d="M21.75 14.1736C21.75 15.7582 21.75 17.0289 21.6099 18.0114C21.4649 19.0277 21.1534 19.872 20.4225 20.4881C19.6923 21.1036 18.806 21.2699 17.7767 21.2452C16.7803 21.2212 15.5213 21.0124 13.9497 20.7518L11 20.2627V11.9975L2.25 11.9975V10.8269V10.8268C2.24998 9.6614 2.24997 8.71653 2.3447 7.96154C2.44343 7.17478 2.654 6.50302 3.13988 5.93233C3.62542 5.36206 4.25565 5.04567 5.01793 4.81987C5.7502 4.60296 6.68636 4.44773 7.84227 4.25607L11 3.73242V11.9975H21.75V14.1736Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21 3L3 5.5V18.5L21 21V3Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M11 4.5V19.5M3 12H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M10.25 3.82918L2.25 4.92775V11.25H10.25V3.82918Z" fill={color}/>
<Path d="M2.25 12.75V19.0723L10.25 20.1708V12.75H2.25Z" fill={color}/>
<Path d="M11.75 20.3768L21.75 21.75V12.75H11.75V20.3768Z" fill={color}/>
<Path d="M21.75 11.25V2.25L11.75 3.6232V11.25H21.75Z" fill={color}/>
</Svg>
)
}
