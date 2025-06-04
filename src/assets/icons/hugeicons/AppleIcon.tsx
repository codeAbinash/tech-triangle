
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

export default function AppleIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 5.75C12 3.75 13.5 1.75 15.5 1.75C15.5 3.75 14 5.75 12 5.75Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M12.5 8.09001C11.9851 8.09001 11.5867 7.92646 11.1414 7.74368C10.5776 7.51225 9.93875 7.25 8.89334 7.25C7.02235 7.25 4 8.74945 4 12.7495C4 17.4016 7.10471 22.25 9.10471 22.25C9.77426 22.25 10.3775 21.9871 10.954 21.7359C11.4815 21.5059 11.9868 21.2857 12.5 21.2857C13.0132 21.2857 13.5185 21.5059 14.046 21.7359C14.6225 21.9871 15.2257 22.25 15.8953 22.25C17.2879 22.25 18.9573 19.8992 20 16.9008C18.3793 16.2202 17.338 14.618 17.338 12.75C17.338 11.121 18.2036 10.0398 19.5 9.25C18.5 7.75 17.0134 7.25 15.9447 7.25C14.8993 7.25 14.2604 7.51225 13.6966 7.74368C13.2514 7.92646 13.0149 8.09001 12.5 8.09001Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 5.75C12 3.75 13.5 1.75 15.5 1.75C15.5 3.75 14 5.75 12 5.75Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M12.5 8.09001C11.9851 8.09001 11.5867 7.92646 11.1414 7.74368C10.5776 7.51225 9.93875 7.25 8.89334 7.25C7.02235 7.25 4 8.74945 4 12.7495C4 17.4016 7.10471 22.25 9.10471 22.25C9.77426 22.25 10.3775 21.9871 10.954 21.7359C11.4815 21.5059 11.9868 21.2857 12.5 21.2857C13.0132 21.2857 13.5185 21.5059 14.046 21.7359C14.6225 21.9871 15.2257 22.25 15.8953 22.25C17.2879 22.25 18.9573 19.8992 20 16.9008C18.3793 16.2202 17.338 14.618 17.338 12.75C17.338 11.121 18.2036 10.0398 19.5 9.25C18.5 7.75 17.0134 7.25 15.9447 7.25C14.8993 7.25 14.2604 7.51225 13.6966 7.74368C13.2514 7.92646 13.0149 8.09001 12.5 8.09001Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 6.25C12 4.25 13.5 2.25 15.5 2.25C15.5 4.25 14 6.25 12 6.25Z" fill={color}/>
<Path d="M12.5 7.59001C11.9851 7.59001 11.5867 7.42646 11.1414 7.24368C10.5776 7.01225 9.93875 6.75 8.89334 6.75C7.02235 6.75 4 8.24945 4 12.2495C4 16.9016 7.10471 21.75 9.10471 21.75C9.77426 21.75 10.3775 21.4871 10.954 21.2359C11.4815 21.0059 11.9868 20.7857 12.5 20.7857C13.0132 20.7857 13.5185 21.0059 14.046 21.2359C14.6225 21.4871 15.2257 21.75 15.8953 21.75C17.2879 21.75 18.9573 19.3992 20 16.4008C18.3793 15.7202 17.338 14.118 17.338 12.25C17.338 10.621 18.2036 9.53982 19.5 8.75C18.5 7.25 17.0134 6.75 15.9447 6.75C14.8993 6.75 14.2604 7.01225 13.6966 7.24368C13.2514 7.42646 13.0149 7.59001 12.5 7.59001Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M12.5 8.09001C11.9851 8.09001 11.5867 7.92646 11.1414 7.74368C10.5776 7.51225 9.93875 7.25 8.89334 7.25C7.02235 7.25 4 8.74945 4 12.7495C4 17.4016 7.10471 22.25 9.10471 22.25C9.77426 22.25 10.3775 21.9871 10.954 21.7359C11.4815 21.5059 11.9868 21.2857 12.5 21.2857C13.0132 21.2857 13.5185 21.5059 14.046 21.7359C14.6225 21.9871 15.2257 22.25 15.8953 22.25C17.2879 22.25 18.9573 19.8992 20 16.9008C18.3793 16.2202 17.338 14.618 17.338 12.75C17.338 11.121 18.2036 10.0398 19.5 9.25C18.5 7.75 17.0134 7.25 15.9447 7.25C14.8993 7.25 14.2604 7.51225 13.6966 7.74368C13.2514 7.92646 13.0149 8.09001 12.5 8.09001Z" fill={color}/>
<Path d="M12 5.75C12 3.75 13.5 1.75 15.5 1.75C15.5 3.75 14 5.75 12 5.75Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M12.5 8.09001C11.9851 8.09001 11.5867 7.92646 11.1414 7.74368C10.5776 7.51225 9.93875 7.25 8.89334 7.25C7.02235 7.25 4 8.74945 4 12.7495C4 17.4016 7.10471 22.25 9.10471 22.25C9.77426 22.25 10.3775 21.9871 10.954 21.7359C11.4815 21.5059 11.9868 21.2857 12.5 21.2857C13.0132 21.2857 13.5185 21.5059 14.046 21.7359C14.6225 21.9871 15.2257 22.25 15.8953 22.25C17.2879 22.25 18.9573 19.8992 20 16.9008C18.3793 16.2202 17.338 14.618 17.338 12.75C17.338 11.121 18.2036 10.0398 19.5 9.25C18.5 7.75 17.0134 7.25 15.9447 7.25C14.8993 7.25 14.2604 7.51225 13.6966 7.74368C13.2514 7.92646 13.0149 8.09001 12.5 8.09001Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M12 5.75C12 3.75 13.5 1.75 15.5 1.75C15.5 3.75 14 5.75 12 5.75Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M12.5 8.09001C11.9851 8.09001 11.5867 7.92646 11.1414 7.74368C10.5776 7.51225 9.93875 7.25 8.89334 7.25C7.02235 7.25 4 8.74945 4 12.7495C4 17.4016 7.10471 22.25 9.10471 22.25C9.77426 22.25 10.3775 21.9871 10.954 21.7359C11.4815 21.5059 11.9868 21.2857 12.5 21.2857C13.0132 21.2857 13.5185 21.5059 14.046 21.7359C14.6225 21.9871 15.2257 22.25 15.8953 22.25C17.2879 22.25 18.9573 19.8992 20 16.9008C18.3793 16.2202 17.338 14.618 17.338 12.75C17.338 11.121 18.2036 10.0398 19.5 9.25C18.5 7.75 17.0134 7.25 15.9447 7.25C14.8993 7.25 14.2604 7.51225 13.6966 7.74368C13.2514 7.92646 13.0149 8.09001 12.5 8.09001Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 6.25C12 4.25 13.5 2.25 15.5 2.25C15.5 4.25 14 6.25 12 6.25Z" fill={color}/>
<Path d="M12.5 7.59001C11.9851 7.59001 11.5867 7.42646 11.1414 7.24368C10.5776 7.01225 9.93875 6.75 8.89334 6.75C7.02235 6.75 4 8.24945 4 12.2495C4 16.9016 7.10471 21.75 9.10471 21.75C9.77426 21.75 10.3775 21.4871 10.954 21.2359C11.4815 21.0059 11.9868 20.7857 12.5 20.7857C13.0132 20.7857 13.5185 21.0059 14.046 21.2359C14.6225 21.4871 15.2257 21.75 15.8953 21.75C17.2879 21.75 18.9573 19.3992 20 16.4008C18.3793 15.7202 17.338 14.118 17.338 12.25C17.338 10.621 18.2036 9.53982 19.5 8.75C18.5 7.25 17.0134 6.75 15.9447 6.75C14.8993 6.75 14.2604 7.01225 13.6966 7.24368C13.2514 7.42646 13.0149 7.59001 12.5 7.59001Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 6.25C12 4.25 13.5 2.25 15.5 2.25C15.5 4.25 14 6.25 12 6.25Z" fill={color}/>
<Path opacity="0.4" d="M12.5 7.59001C11.9851 7.59001 11.5867 7.42646 11.1414 7.24368C10.5776 7.01225 9.93875 6.75 8.89334 6.75C7.02235 6.75 4 8.24945 4 12.2495C4 16.9016 7.10471 21.75 9.10471 21.75C9.77426 21.75 10.3775 21.4871 10.954 21.2359C11.4815 21.0059 11.9868 20.7857 12.5 20.7857C13.0132 20.7857 13.5185 21.0059 14.046 21.2359C14.6225 21.4871 15.2257 21.75 15.8953 21.75C17.2879 21.75 18.9573 19.3992 20 16.4008C18.3793 15.7202 17.338 14.118 17.338 12.25C17.338 10.621 18.2036 9.53982 19.5 8.75C18.5 7.25 17.0134 6.75 15.9447 6.75C14.8993 6.75 14.2604 7.01225 13.6966 7.24368C13.2514 7.42646 13.0149 7.59001 12.5 7.59001Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 5.75C12 3.75 13.5 1.75 15.5 1.75C15.5 3.75 14 5.75 12 5.75Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12.5 8.09001C11.9851 8.09001 11.5867 7.92646 11.1414 7.74368C10.5776 7.51225 9.93875 7.25 8.89334 7.25C7.02235 7.25 4 8.74945 4 12.7495C4 17.4016 7.10471 22.25 9.10471 22.25C9.77426 22.25 10.3775 21.9871 10.954 21.7359C11.4815 21.5059 11.9868 21.2857 12.5 21.2857C13.0132 21.2857 13.5185 21.5059 14.046 21.7359C14.6225 21.9871 15.2257 22.25 15.8953 22.25C17.2879 22.25 18.9573 19.8992 20 16.9008C18.3793 16.2202 17.338 14.618 17.338 12.75C17.338 11.121 18.2036 10.0398 19.5 9.25C18.5 7.75 17.0134 7.25 15.9447 7.25C14.8993 7.25 14.2604 7.51225 13.6966 7.74368C13.2514 7.92646 13.0149 8.09001 12.5 8.09001Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 6.25C12 4.25 13.5 2.25 15.5 2.25C15.5 4.25 14 6.25 12 6.25Z" fill={color}/>
<Path d="M12.5 7.59001C11.9851 7.59001 11.5867 7.42646 11.1414 7.24368C10.5776 7.01225 9.93875 6.75 8.89334 6.75C7.02235 6.75 4 8.24945 4 12.2495C4 16.9016 7.10471 21.75 9.10471 21.75C9.77426 21.75 10.3775 21.4871 10.954 21.2359C11.4815 21.0059 11.9868 20.7857 12.5 20.7857C13.0132 20.7857 13.5185 21.0059 14.046 21.2359C14.6225 21.4871 15.2257 21.75 15.8953 21.75C17.2879 21.75 18.9573 19.3992 20 16.4008C18.3793 15.7202 17.338 14.118 17.338 12.25C17.338 10.621 18.2036 9.53982 19.5 8.75C18.5 7.25 17.0134 6.75 15.9447 6.75C14.8993 6.75 14.2604 7.01225 13.6966 7.24368C13.2514 7.42646 13.0149 7.59001 12.5 7.59001Z" fill={color}/>
</Svg>
)
}
