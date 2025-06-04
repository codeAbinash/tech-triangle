
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

export default function MusicNote04Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12.5 3L12.5 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.5 17C12.5 19.2091 10.7091 21 8.5 21C6.29086 21 4.5 19.2091 4.5 17C4.5 14.7909 6.29086 13 8.5 13C10.7091 13 12.5 14.7909 12.5 17Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.5 3C16.366 3 19.5 6.13401 19.5 10C18 8.5 14.0556 6.26667 12.5 8.44444" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Circle cx="8" cy="17" r="4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 17V3C14.3333 3 19.2 4.4 20 10C19 9 15 7 12 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 2C11.4477 2 11 2.44772 11 3V13.0747C10.2001 12.4931 9.21549 12.15 8.15078 12.15C5.4722 12.15 3.30078 14.3214 3.30078 17C3.30078 19.6786 5.4722 21.85 8.15078 21.85C10.8294 21.85 13.0008 19.6786 13.0008 17C13.0008 16.9706 13.0005 16.9413 13 16.912V10.4361C14.1512 9.45324 15.4303 9.29384 16.5856 9.48639C17.8964 9.70485 18.9516 10.3658 19.2929 10.7071C19.5973 11.0115 20.0622 11.0869 20.4472 10.8944C20.8322 10.7019 21.0508 10.2847 20.9899 9.85858C20.5461 6.75178 18.9519 4.75754 17.1217 3.56265C15.3269 2.39091 13.3302 2 12 2Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12.5 3L12.5 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M12.5 17C12.5 19.2091 10.7091 21 8.5 21C6.29086 21 4.5 19.2091 4.5 17C4.5 14.7909 6.29086 13 8.5 13C10.7091 13 12.5 14.7909 12.5 17Z" fill={color}/>
<Path d="M12.5 17C12.5 19.2091 10.7091 21 8.5 21C6.29086 21 4.5 19.2091 4.5 17C4.5 14.7909 6.29086 13 8.5 13C10.7091 13 12.5 14.7909 12.5 17Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.5 3C16.366 3 19.5 6.13401 19.5 10C18 8.5 14.0556 6.26667 12.5 8.44444" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12.5 3L12.5 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12.5 17C12.5 19.2091 10.7091 21 8.5 21C6.29086 21 4.5 19.2091 4.5 17C4.5 14.7909 6.29086 13 8.5 13C10.7091 13 12.5 14.7909 12.5 17Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M12.5 3C16.366 3 19.5 6.13401 19.5 10C18 8.5 14.0556 6.26667 12.5 8.44444" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14.6952 2.30606L14.755 2.32365C18.0744 3.29725 20.5 6.36464 20.5 10.0012C20.5 10.4056 20.2564 10.7703 19.8827 10.925C19.509 11.0798 19.0789 10.9943 18.7929 10.7083C18.1412 10.0565 16.9075 9.20939 15.6937 8.78919C14.6015 8.41109 13.9056 8.48251 13.5 8.82432L13.5 17.0012C13.5 19.7626 11.2614 22.0012 8.5 22.0012C5.73858 22.0012 3.5 19.7626 3.5 17.0012C3.5 14.2397 5.73858 12.0012 8.5 12.0012C9.62561 12.0012 10.6643 12.3731 11.5 13.0008V8.45725C11.4999 8.44892 11.4999 8.44059 11.5 8.43226V5.00116L11.5 4.93629V4.93628C11.4998 4.50611 11.4996 4.06207 11.5656 3.69193C11.6462 3.23941 11.8422 2.78264 12.3012 2.4389C12.7212 2.12438 13.1687 2.02927 13.6247 2.06607C13.9754 2.09438 14.358 2.20689 14.6952 2.30606Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M3.5 16.9688C3.5 19.7302 5.73858 21.9688 8.5 21.9688C11.2614 21.9688 13.5 19.7302 13.5 16.9688C13.5 14.2073 11.2614 11.9688 8.5 11.9688C5.73858 11.9688 3.5 14.2073 3.5 16.9688Z" fill={color}/>
<Path opacity="0.4" d="M14.755 2.29222L14.6952 2.27463C14.358 2.17546 13.9754 2.06295 13.6247 2.03464C13.1687 1.99784 12.7212 2.09295 12.3012 2.40746C11.8422 2.75121 11.6462 3.20797 11.5656 3.6605C11.4996 4.03064 11.4998 4.47468 11.5 4.90485L11.5 8.40083C11.4999 8.40916 11.4999 8.41749 11.5 8.42582V12.9692C12.7144 13.8814 13.5 15.3337 13.5 16.9695V8.79289C13.9056 8.45108 14.6015 8.37965 15.6937 8.75775C16.9075 9.17795 18.1412 10.0251 18.7929 10.6768C19.0789 10.9628 19.509 11.0484 19.8827 10.8936C20.2564 10.7388 20.5 10.3742 20.5 9.96972C20.5 6.33321 18.0744 3.26581 14.755 2.29222Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M11.9715 17.0106C11.9715 19.2214 10.187 21.0137 7.98576 21.0137C5.78449 21.0137 4 19.2214 4 17.0106C4 14.7999 5.78449 13.0076 7.98576 13.0076C10.187 13.0076 11.9715 14.7999 11.9715 17.0106Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.9696 17.0536V10.0994M11.9696 10.0994V3.01172C16.6508 3.18845 19.6805 6.38945 19.9996 9.94231C20.0078 10.0344 19.8957 10.0851 19.8275 10.0231C17.5305 7.93543 12.8041 8.31689 11.9696 10.0994Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12.75 17.0103C12.7445 19.6289 10.62 21.7501 8 21.7501C5.37665 21.7501 3.25 19.6235 3.25 17.0001C3.25 14.3768 5.37665 12.2501 8 12.2501C9.02487 12.2501 9.97394 12.5747 10.75 13.1267L10.75 2.25H12.75C14.6016 2.25 16.4845 3.26688 17.9306 4.47461C19.5699 5.8437 20.7501 7.78885 20.7501 10C20.7501 10.3033 20.5673 10.5768 20.2871 10.6929C20.0068 10.809 19.6842 10.7448 19.4697 10.5303C19.2064 10.267 18.7342 9.99111 18.092 9.77013C17.4619 9.55333 16.7238 9.40866 15.9817 9.36981C14.5494 9.29481 13.3542 9.61672 12.7501 10.2654V17L12.75 17.0103Z" fill={color}/>
</Svg>
)
}
