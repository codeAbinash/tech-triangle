
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

export default function CloudIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5.853 8.36454C3.22664 8.89643 1.25 11.217 1.25 14C1.25 17.1756 3.82436 19.75 7 19.75H17.5C20.3995 19.75 22.75 17.3995 22.75 14.5C22.75 11.8541 20.7927 9.66534 18.2469 9.30273C18.1428 5.94224 15.3858 3.25 12 3.25C8.93585 3.25 6.38731 5.45456 5.853 8.36454Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227C3.98398 9.26407 2 11.4003 2 14C2 16.7614 4.23858 19 7 19H17.5C19.9853 19 22 16.9853 22 14.5C22 12.0147 19.9853 10 17.5 10L17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5Z" fill={color}/>
<Path d="M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M17.4776 10.5001C17.485 10.5 17.4925 10.5 17.5 10.5C19.9853 10.5 22 12.5147 22 15C22 17.4853 19.9853 19.5 17.5 19.5H7C4.23858 19.5 2 17.2614 2 14.5C2 11.9003 3.98398 9.76407 6.52042 9.5227M17.4776 10.5001C17.4924 10.3354 17.5 10.1686 17.5 10C17.5 6.96243 15.0376 4.5 12 4.5C9.12324 4.5 6.76233 6.70862 6.52042 9.5227M17.4776 10.5001C17.3753 11.6345 16.9286 12.6696 16.2428 13.5M6.52042 9.5227C6.67826 9.50768 6.83823 9.5 7 9.5C8.12582 9.5 9.16474 9.87209 10.0005 10.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M6.5 9.5227C6.74235 6.70862 9.10766 4.5 11.9898 4.5C15.033 4.5 17.5 6.96243 17.5 10C17.5 11.3296 17.0273 12.5491 16.2405 13.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M1.25 14.5C1.25 11.717 3.22664 9.39643 5.853 8.86454C6.38731 5.95456 8.93585 3.75 12 3.75C15.3858 3.75 18.1428 6.44224 18.2469 9.80273C20.7927 10.1653 22.75 12.3541 22.75 15C22.75 17.8995 20.3995 20.25 17.5 20.25H7C3.82436 20.25 1.25 17.6756 1.25 14.5Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M1.25 14.5C1.25 11.717 3.22664 9.39643 5.853 8.86454C6.38731 5.95456 8.93585 3.75 12 3.75C15.3858 3.75 18.1428 6.44224 18.2469 9.80273C20.7927 10.1653 22.75 12.3541 22.75 15C22.75 17.8995 20.3995 20.25 17.5 20.25H7C3.82436 20.25 1.25 17.6756 1.25 14.5Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M1.25 14.5C1.25 11.717 3.22664 9.39643 5.853 8.86454C6.38731 5.95456 8.93585 3.75 12 3.75C15.3858 3.75 18.1428 6.44224 18.2469 9.80273C20.7927 10.1653 22.75 12.3541 22.75 15C22.75 17.8995 20.3995 20.25 17.5 20.25H7C3.82436 20.25 1.25 17.6756 1.25 14.5Z" fill={color}/>
</Svg>
)
}
