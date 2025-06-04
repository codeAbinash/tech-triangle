
import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
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

export default function CelsiusIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="5" cy="6" r="2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21 7C20.9557 6.3469 20.8561 5.88667 20.6321 5.5C20.3679 5.04394 19.9878 4.66523 19.5301 4.40192C18.8315 4 17.8936 4 16.0177 4C14.1419 4 13.2039 4 12.5053 4.40192C12.0476 4.66523 11.6676 5.04394 11.4033 5.5C11 6.19615 11 7.13077 11 9V15C11 16.8692 11 17.8038 11.4033 18.5C11.6676 18.9561 12.0476 19.3348 12.5053 19.5981C13.2039 20 14.1419 20 16.0177 20C17.8936 20 18.8315 20 19.5301 19.5981C19.9878 19.3348 20.3679 18.9561 20.6321 18.5C20.8561 18.1133 20.9557 17.6531 21 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21 7V7C21 5.34315 19.6569 4 18 4H14C12.3431 4 11 5.34315 11 7V17C11 18.6569 12.3431 20 14 20H18C19.6569 20 21 18.6569 21 17V17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7C5.55228 7 6 6.55228 6 6C6 5.44772 5.55228 5 5 5ZM2 6C2 4.34315 3.34315 3 5 3C6.65685 3 8 4.34315 8 6C8 7.65685 6.65685 9 5 9C3.34315 9 2 7.65685 2 6Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M10 7C10 4.79086 11.7909 3 14 3H18C20.2091 3 22 4.79086 22 7C22 7.55228 21.5523 8 21 8C20.4477 8 20 7.55228 20 7C20 5.89543 19.1046 5 18 5H14C12.8954 5 12 5.89543 12 7V17C12 18.1046 12.8954 19 14 19H18C19.1046 19 20 18.1046 20 17C20 16.4477 20.4477 16 21 16C21.5523 16 22 16.4477 22 17C22 19.2091 20.2091 21 18 21H14C11.7909 21 10 19.2091 10 17V7Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle opacity="0.4" cx="5" cy="6" r="2" fill={color}/>
<Circle cx="5" cy="6" r="2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21 7C20.9557 6.3469 20.8561 5.88667 20.6321 5.5C20.3679 5.04394 19.9878 4.66523 19.5301 4.40192C18.8315 4 17.8936 4 16.0177 4C14.1419 4 13.2039 4 12.5053 4.40192C12.0476 4.66523 11.6676 5.04394 11.4033 5.5C11 6.19615 11 7.13077 11 9V15C11 16.8692 11 17.8038 11.4033 18.5C11.6676 18.9561 12.0476 19.3348 12.5053 19.5981C13.2039 20 14.1419 20 16.0177 20C17.8936 20 18.8315 20 19.5301 19.5981C19.9878 19.3348 20.3679 18.9561 20.6321 18.5C20.8561 18.1133 20.9557 17.6531 21 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle opacity="0.4" cx="5" cy="6" r="2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21 7C20.9557 6.3469 20.8561 5.88667 20.6321 5.5C20.3679 5.04394 19.9878 4.66523 19.5301 4.40192C18.8315 4 17.8936 4 16.0177 4C14.1419 4 13.2039 4 12.5053 4.40192C12.0476 4.66523 11.6676 5.04394 11.4033 5.5C11 6.19615 11 7.13077 11 9V15C11 16.8692 11 17.8038 11.4033 18.5C11.6676 18.9561 12.0476 19.3348 12.5053 19.5981C13.2039 20 14.1419 20 16.0177 20C17.8936 20 18.8315 20 19.5301 19.5981C19.9878 19.3348 20.3679 18.9561 20.6321 18.5C20.8561 18.1133 20.9557 17.6531 21 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M4.99997 5C4.44768 5 3.99997 5.44772 3.99997 6C3.99997 6.55228 4.44768 7 4.99997 7C5.55225 7 5.99997 6.55228 5.99997 6C5.99997 5.44772 5.55225 5 4.99997 5ZM1.99997 6C1.99997 4.34315 3.34312 3 4.99997 3C6.65682 3 7.99997 4.34315 7.99997 6C7.99997 7.65685 6.65682 9 4.99997 9C3.34312 9 1.99997 7.65685 1.99997 6Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M15.9718 3H16.0636C16.9625 2.99998 17.7038 2.99997 18.3053 3.05429C18.9306 3.11077 19.5022 3.23217 20.0288 3.53514C20.6383 3.88581 21.1449 4.39045 21.4973 4.99867C21.8351 5.58172 21.9496 6.22287 21.9977 6.93236C22.035 7.48338 21.6186 7.96035 21.0676 7.99771C20.5166 8.03507 20.0396 7.61866 20.0023 7.06764C19.9618 6.47094 19.8771 6.19161 19.7668 6.00133C19.5907 5.69744 19.3372 5.44465 19.0314 5.26871C18.8594 5.16975 18.6127 5.09019 18.1254 5.04619C17.6245 5.00095 16.974 5 16.0177 5C15.0614 5 14.4108 5.00095 13.91 5.04619C13.4227 5.09019 13.176 5.16975 13.004 5.26871C12.6982 5.44465 12.4446 5.69744 12.2686 6.00133C12.1699 6.17157 12.0904 6.41604 12.0463 6.90068C12.0009 7.3992 12 8.04692 12 9V15C12 15.9531 12.0009 16.6008 12.0463 17.0993C12.0904 17.584 12.1699 17.8284 12.2686 17.9987C12.4446 18.3026 12.6982 18.5554 13.004 18.7313C13.176 18.8303 13.4227 18.9098 13.91 18.9538C14.4108 18.999 15.0614 19 16.0177 19C16.974 19 17.6245 18.999 18.1254 18.9538C18.6127 18.9098 18.8594 18.8303 19.0314 18.7313C19.3372 18.5554 19.5907 18.3026 19.7668 17.9987C19.8771 17.8084 19.9618 17.5291 20.0023 16.9324C20.0396 16.3813 20.5166 15.9649 21.0676 16.0023C21.6186 16.0397 22.035 16.5166 21.9977 17.0676C21.9496 17.7771 21.8351 18.4183 21.4973 19.0013C21.1449 19.6096 20.6383 20.1142 20.0288 20.4649C19.5022 20.7678 18.9306 20.8892 18.3053 20.9457C17.7038 21 16.9625 21 16.0636 21H15.9717C15.0729 21 14.3316 21 13.7301 20.9457C13.1048 20.8892 12.5332 20.7678 12.0066 20.4649C11.3971 20.1142 10.8905 19.6096 10.5381 19.0013C10.2333 18.4754 10.1113 17.9045 10.0545 17.2805C9.99994 16.6806 9.99995 15.9415 9.99997 15.0462V8.95382C9.99995 8.05848 9.99994 7.31937 10.0545 6.71952C10.1113 6.0955 10.2333 5.52459 10.5381 4.99867C10.8905 4.39045 11.3971 3.88581 12.0066 3.53514C12.5332 3.23217 13.1048 3.11077 13.7301 3.05429C14.3316 2.99997 15.0729 2.99998 15.9718 3Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M4.99997 5C4.44768 5 3.99997 5.44772 3.99997 6C3.99997 6.55228 4.44768 7 4.99997 7C5.55225 7 5.99997 6.55228 5.99997 6C5.99997 5.44772 5.55225 5 4.99997 5ZM1.99997 6C1.99997 4.34315 3.34312 3 4.99997 3C6.65682 3 7.99997 4.34315 7.99997 6C7.99997 7.65685 6.65682 9 4.99997 9C3.34312 9 1.99997 7.65685 1.99997 6Z" fill={color}/>
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M15.9718 3H16.0636C16.9625 2.99998 17.7038 2.99997 18.3053 3.05429C18.9306 3.11077 19.5022 3.23217 20.0288 3.53514C20.6383 3.88581 21.1449 4.39045 21.4973 4.99867C21.8351 5.58172 21.9496 6.22287 21.9977 6.93236C22.035 7.48338 21.6186 7.96035 21.0676 7.99771C20.5166 8.03507 20.0396 7.61866 20.0023 7.06764C19.9618 6.47094 19.8771 6.19161 19.7668 6.00133C19.5907 5.69744 19.3372 5.44465 19.0314 5.26871C18.8594 5.16975 18.6127 5.09019 18.1254 5.04619C17.6245 5.00095 16.974 5 16.0177 5C15.0614 5 14.4108 5.00095 13.91 5.04619C13.4227 5.09019 13.176 5.16975 13.004 5.26871C12.6982 5.44465 12.4446 5.69744 12.2686 6.00133C12.1699 6.17157 12.0904 6.41604 12.0463 6.90068C12.0009 7.3992 12 8.04692 12 9V15C12 15.9531 12.0009 16.6008 12.0463 17.0993C12.0904 17.584 12.1699 17.8284 12.2686 17.9987C12.4446 18.3026 12.6982 18.5554 13.004 18.7313C13.176 18.8303 13.4227 18.9098 13.91 18.9538C14.4108 18.999 15.0614 19 16.0177 19C16.974 19 17.6245 18.999 18.1254 18.9538C18.6127 18.9098 18.8594 18.8303 19.0314 18.7313C19.3372 18.5554 19.5907 18.3026 19.7668 17.9987C19.8771 17.8084 19.9618 17.5291 20.0023 16.9324C20.0396 16.3813 20.5166 15.9649 21.0676 16.0023C21.6186 16.0397 22.035 16.5166 21.9977 17.0676C21.9496 17.7771 21.8351 18.4183 21.4973 19.0013C21.1449 19.6096 20.6383 20.1142 20.0288 20.4649C19.5022 20.7678 18.9306 20.8892 18.3053 20.9457C17.7038 21 16.9625 21 16.0636 21H15.9717C15.0729 21 14.3316 21 13.7301 20.9457C13.1048 20.8892 12.5332 20.7678 12.0066 20.4649C11.3971 20.1142 10.8905 19.6096 10.5381 19.0013C10.2333 18.4754 10.1113 17.9045 10.0545 17.2805C9.99994 16.6806 9.99995 15.9415 9.99997 15.0462V8.95382C9.99995 8.05848 9.99994 7.31937 10.0545 6.71952C10.1113 6.0955 10.2333 5.52459 10.5381 4.99867C10.8905 4.39045 11.3971 3.88581 12.0066 3.53514C12.5332 3.23217 13.1048 3.11077 13.7301 3.05429C14.3316 2.99997 15.0729 2.99998 15.9718 3Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21 7V4.01C21 4.00448 20.9955 4 20.99 4H11V20H20.99C20.9955 20 21 19.9955 21 19.99V17" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7C5.55228 7 6 6.55228 6 6C6 5.44772 5.55228 5 5 5ZM2 6C2 4.34315 3.34315 3 5 3C6.65685 3 8 4.34315 8 6C8 7.65685 6.65685 9 5 9C3.34315 9 2 7.65685 2 6Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M10 3H21C21.5523 3 22 3.44772 22 4V7H20V5H12V19H20V17H22V20C22 20.5523 21.5523 21 21 21H10V3Z" fill={color}/>
</Svg>
)
}
