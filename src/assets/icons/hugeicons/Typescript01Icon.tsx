
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

export default function Typescript01Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2.5 12.0001C2.5 7.52178 2.5 5.28261 3.89124 3.89136C5.28249 2.50012 7.52166 2.50012 12 2.50012C16.4783 2.50012 18.7175 2.50012 20.1088 3.89136C21.5 5.28261 21.5 7.52178 21.5 12.0001C21.5 16.4785 21.5 18.7176 20.1088 20.1089C18.7175 21.5001 16.4783 21.5001 12 21.5001C7.52166 21.5001 5.28249 21.5001 3.89124 20.1089C2.5 18.7176 2.5 16.4785 2.5 12.0001Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M18 12.0001H16.2C15.5373 12.0001 15 12.5374 15 13.2001V13.8001C15 14.4629 15.5373 15.0001 16.2 15.0001H16.8C17.4627 15.0001 18 15.5374 18 16.2001V16.8001C18 17.4629 17.4627 18.0001 16.8 18.0001H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.5 12.0001H10.5M12.5 12.0001H10.5M10.5 12.0001V18.0001" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.5 2.5C20.6046 2.5 21.5 3.39543 21.5 4.5V19.5C21.5 20.6046 20.6046 21.5 19.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H19.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M18 12.0001H16C15.4477 12.0001 15 12.4478 15 13.0001V14.0001C15 14.5524 15.4477 15.0001 16 15.0001H17C17.5523 15.0001 18 15.4478 18 16.0001V17.0001C18 17.5524 17.5523 18.0001 17 18.0001H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.5 12.0001H10.5M12.5 12.0001H10.5M10.5 12.0001V18.0001" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M4.5 1.75C2.98122 1.75 1.75 2.98122 1.75 4.5L1.75 19.5C1.75 21.0188 2.98122 22.25 4.5 22.25L19.5 22.25C21.0188 22.25 22.25 21.0188 22.25 19.5L22.25 4.5C22.25 2.98122 21.0188 1.75 19.5 1.75L4.5 1.75ZM7.75 12C7.75 11.5858 8.08579 11.25 8.5 11.25H12.5C12.9142 11.25 13.25 11.5858 13.25 12C13.25 12.4142 12.9142 12.75 12.5 12.75H11.25V18C11.25 18.4142 10.9142 18.75 10.5 18.75C10.0858 18.75 9.75 18.4142 9.75 18V12.75H8.5C8.08579 12.75 7.75 12.4142 7.75 12ZM14.25 13C14.25 12.0335 15.0335 11.25 16 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H16C15.8619 12.75 15.75 12.8619 15.75 13V14C15.75 14.1381 15.8619 14.25 16 14.25H17C17.9665 14.25 18.75 15.0335 18.75 16V17C18.75 17.9665 17.9665 18.75 17 18.75H15C14.5858 18.75 14.25 18.4142 14.25 18C14.25 17.5858 14.5858 17.25 15 17.25H17C17.1381 17.25 17.25 17.1381 17.25 17V16C17.25 15.8619 17.1381 15.75 17 15.75H16C15.0335 15.75 14.25 14.9665 14.25 14V13Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M2.5 12.0001C2.5 7.52178 2.5 5.28261 3.89124 3.89136C5.28249 2.50012 7.52166 2.50012 12 2.50012C16.4783 2.50012 18.7175 2.50012 20.1088 3.89136C21.5 5.28261 21.5 7.52178 21.5 12.0001C21.5 16.4785 21.5 18.7176 20.1088 20.1089C18.7175 21.5001 16.4783 21.5001 12 21.5001C7.52166 21.5001 5.28249 21.5001 3.89124 20.1089C2.5 18.7176 2.5 16.4785 2.5 12.0001Z" fill={color}/>
<Path d="M2.5 12.0001C2.5 7.52178 2.5 5.28261 3.89124 3.89136C5.28249 2.50012 7.52166 2.50012 12 2.50012C16.4783 2.50012 18.7175 2.50012 20.1088 3.89136C21.5 5.28261 21.5 7.52178 21.5 12.0001C21.5 16.4785 21.5 18.7176 20.1088 20.1089C18.7175 21.5001 16.4783 21.5001 12 21.5001C7.52166 21.5001 5.28249 21.5001 3.89124 20.1089C2.5 18.7176 2.5 16.4785 2.5 12.0001Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M18 12.0001H16.2C15.5373 12.0001 15 12.5374 15 13.2001V13.8001C15 14.4629 15.5373 15.0001 16.2 15.0001H16.8C17.4627 15.0001 18 15.5374 18 16.2001V16.8001C18 17.4629 17.4627 18.0001 16.8 18.0001H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.5 12.0001H10.5M12.5 12.0001H10.5M10.5 12.0001V18.0001" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2.5 12.0001C2.5 7.52178 2.5 5.28261 3.89124 3.89136C5.28249 2.50012 7.52166 2.50012 12 2.50012C16.4783 2.50012 18.7175 2.50012 20.1088 3.89136C21.5 5.28261 21.5 7.52178 21.5 12.0001C21.5 16.4785 21.5 18.7176 20.1088 20.1089C18.7175 21.5001 16.4783 21.5001 12 21.5001C7.52166 21.5001 5.28249 21.5001 3.89124 20.1089C2.5 18.7176 2.5 16.4785 2.5 12.0001Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path opacity="0.4" d="M18 12.0001H16.2C15.5373 12.0001 15 12.5374 15 13.2001V13.8001C15 14.4629 15.5373 15.0001 16.2 15.0001H16.8C17.4627 15.0001 18 15.5374 18 16.2001V16.8001C18 17.4629 17.4627 18.0001 16.8 18.0001H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M8.5 12.0001H10.5M12.5 12.0001H10.5M10.5 12.0001V18.0001" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12.0572 1.75012C14.2479 1.75011 15.9686 1.7501 17.312 1.93072C18.6886 2.1158 19.7809 2.50284 20.6391 3.36104C21.4973 4.21923 21.8843 5.31149 22.0694 6.68815C22.25 8.03156 22.25 9.86658 22.25 12.0573V12.0573C22.25 14.248 22.25 15.9687 22.0694 17.3121C21.8843 18.6888 21.4973 19.781 20.6391 20.6392C19.7809 21.4974 18.6886 21.8844 17.312 22.0695C15.9686 22.2501 14.1335 22.2501 11.9428 22.2501H11.9428H11.9428C9.7521 22.2501 8.03144 22.2501 6.68802 22.0695C5.31137 21.8844 4.21911 21.4974 3.36091 20.6392C2.50272 19.781 2.11568 18.6888 1.93059 17.3121C1.74998 15.9687 1.74999 14.248 1.75 12.0573V12.0573C1.74999 9.86659 1.74998 8.03156 1.93059 6.68815C2.11568 5.31149 2.50272 4.21923 3.36091 3.36104C4.21911 2.50284 5.31137 2.1158 6.68802 1.93072C8.03144 1.7501 9.86647 1.75011 12.0572 1.75012ZM14.25 13.2001C14.25 12.1232 15.123 11.2501 16.2 11.2501H18C18.4142 11.2501 18.75 11.5859 18.75 12.0001C18.75 12.4143 18.4142 12.7501 18 12.7501H16.2C15.9515 12.7501 15.75 12.9516 15.75 13.2001V13.8001C15.75 14.0487 15.9515 14.2501 16.2 14.2501H16.8C17.877 14.2501 18.75 15.1232 18.75 16.2001V16.8001C18.75 17.8771 17.877 18.7501 16.8 18.7501H15C14.5858 18.7501 14.25 18.4143 14.25 18.0001C14.25 17.5859 14.5858 17.2501 15 17.2501H16.8C17.0485 17.2501 17.25 17.0487 17.25 16.8001V16.2001C17.25 15.9516 17.0485 15.7501 16.8 15.7501H16.2C15.123 15.7501 14.25 14.8771 14.25 13.8001V13.2001ZM8.5 11.2501C8.08579 11.2501 7.75 11.5859 7.75 12.0001C7.75 12.4143 8.08579 12.7501 8.5 12.7501H9.75V18.0001C9.75 18.4143 10.0858 18.7501 10.5 18.7501C10.9142 18.7501 11.25 18.4143 11.25 18.0001V12.7501H12.5C12.9142 12.7501 13.25 12.4143 13.25 12.0001C13.25 11.5859 12.9142 11.2501 12.5 11.2501H8.5Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M12.0572 1.75012C14.2479 1.75011 15.9686 1.7501 17.312 1.93072C18.6886 2.1158 19.7809 2.50284 20.6391 3.36104C21.4973 4.21923 21.8843 5.31149 22.0694 6.68815C22.25 8.03156 22.25 9.86658 22.25 12.0573V12.0573C22.25 14.248 22.25 15.9687 22.0694 17.3121C21.8843 18.6888 21.4973 19.781 20.6391 20.6392C19.7809 21.4974 18.6886 21.8844 17.312 22.0695C15.9686 22.2501 14.1335 22.2501 11.9428 22.2501H11.9428C9.7521 22.2501 8.03144 22.2501 6.68802 22.0695C5.31137 21.8844 4.21911 21.4974 3.36091 20.6392C2.50272 19.781 2.11568 18.6888 1.93059 17.3121C1.74998 15.9687 1.74999 14.248 1.75 12.0573C1.74999 9.86659 1.74998 8.03156 1.93059 6.68815C2.11568 5.31149 2.50272 4.21923 3.36091 3.36104C4.21911 2.50284 5.31137 2.1158 6.68802 1.93072C8.03144 1.7501 9.86647 1.75011 12.0572 1.75012Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M14.25 13.2001C14.25 12.1232 15.123 11.2501 16.2 11.2501H18C18.4142 11.2501 18.75 11.5859 18.75 12.0001C18.75 12.4143 18.4142 12.7501 18 12.7501H16.2C15.9515 12.7501 15.75 12.9516 15.75 13.2001V13.8001C15.75 14.0487 15.9515 14.2501 16.2 14.2501H16.8C17.877 14.2501 18.75 15.1232 18.75 16.2001V16.8001C18.75 17.8771 17.877 18.7501 16.8 18.7501H15C14.5858 18.7501 14.25 18.4143 14.25 18.0001C14.25 17.5859 14.5858 17.2501 15 17.2501H16.8C17.0485 17.2501 17.25 17.0487 17.25 16.8001V16.2001C17.25 15.9516 17.0485 15.7501 16.8 15.7501H16.2C15.123 15.7501 14.25 14.8771 14.25 13.8001V13.2001Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M7.75 12.0001C7.75 11.5859 8.08579 11.2501 8.5 11.2501H12.5C12.9142 11.2501 13.25 11.5859 13.25 12.0001C13.25 12.4143 12.9142 12.7501 12.5 12.7501H11.25V18.0001C11.25 18.4143 10.9142 18.7501 10.5 18.7501C10.0858 18.7501 9.75 18.4143 9.75 18.0001V12.7501H8.5C8.08579 12.7501 7.75 12.4143 7.75 12.0001Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21 3.00012H3V21.0001H21V3.00012Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M18 12.0001H16.2C15.5373 12.0001 15 12.5374 15 13.2001V13.8001C15 14.4629 15.5373 15.0001 16.2 15.0001H16.8C17.4627 15.0001 18 15.5374 18 16.2001V16.8001C18 17.4629 17.4627 18.0001 16.8 18.0001H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
<Path d="M8.5 12.0001H10.5M12.5 12.0001H10.5M10.5 12.0001V18.0001" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M2.25 3.00012C2.25 2.58591 2.58579 2.25012 3 2.25012H21C21.4142 2.25012 21.75 2.58591 21.75 3.00012V21.0001C21.75 21.4143 21.4142 21.7501 21 21.7501H3C2.58579 21.7501 2.25 21.4143 2.25 21.0001V3.00012ZM14.25 13.2001C14.25 12.1232 15.123 11.2501 16.2 11.2501H18.75V12.7501H16.2C15.9515 12.7501 15.75 12.9516 15.75 13.2001V13.8001C15.75 14.0487 15.9515 14.2501 16.2 14.2501H16.8C17.877 14.2501 18.75 15.1232 18.75 16.2001V16.8001C18.75 17.8771 17.877 18.7501 16.8 18.7501H14.25V17.2501H16.8C17.0485 17.2501 17.25 17.0487 17.25 16.8001V16.2001C17.25 15.9516 17.0485 15.7501 16.8 15.7501H16.2C15.123 15.7501 14.25 14.8771 14.25 13.8001V13.2001ZM13.25 11.2501H7.75V12.7501H9.75V18.7501H11.25V12.7501H13.25V11.2501Z" fill={color}/>
</Svg>
)
}
