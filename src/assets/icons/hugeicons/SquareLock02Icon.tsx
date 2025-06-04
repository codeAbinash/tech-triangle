
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

export default function SquareLock02Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 16.5V14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97626 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97626 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 16.5V14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.5 9V6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5V9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18 9H6.00019C4.89554 9 4.00008 9.89554 4.00018 11.0002L4.00102 20.0002C4.00112 21.1047 4.89652 22 6.00102 22H18C19.1046 22 20 21.1046 20 20V11C20 9.89543 19.1046 9 18 9Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M6.5 6.5C6.5 3.46243 8.96243 1 12 1C15.0376 1 17.5 3.46243 17.5 6.5V9C17.5 9.55228 17.0523 10 16.5 10C15.9477 10 15.5 9.55228 15.5 9V6.5C15.5 4.567 13.933 3 12 3C10.067 3 8.5 4.567 8.5 6.5V9C8.5 9.55228 8.05228 10 7.5 10C6.94772 10 6.5 9.55228 6.5 9V6.5Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M6 8.25C4.48112 8.25 3.24986 9.48137 3.25 11.0003L3.25083 20.0003C3.25097 21.5189 4.48215 22.75 6.00083 22.75H17.9998C19.5186 22.75 20.7498 21.5188 20.7498 20V11C20.7498 9.48122 19.5186 8.25 17.9998 8.25H6ZM13 14.5C13 13.9477 12.5523 13.5 12 13.5C11.4477 13.5 11 13.9477 11 14.5V16.5C11 17.0523 11.4477 17.5 12 17.5C12.5523 17.5 13 17.0523 13 16.5V14.5Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M4.26781 18.8447C4.49269 20.515 5.87612 21.8235 7.55965 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.26781 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.26781 18.8447Z" fill={color}/>
<Path d="M12 16.5V14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M12 16.5V14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z" stroke={color} strokeWidth={strokeWidth}/>
<Path opacity="0.4" d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 3.25C10.067 3.25 8.49999 4.817 8.49999 6.75V8.31016C9.61772 8.27048 10.7654 8.25 12 8.25C13.2346 8.25 14.3823 8.27048 15.5 8.31016V6.75C15.5 4.817 13.933 3.25 12 3.25ZM6.49999 6.75V8.52712C4.93232 9.00686 3.74924 10.3861 3.52451 12.0552C3.37635 13.1556 3.24999 14.3118 3.24999 15.5C3.24999 16.6882 3.37636 17.8444 3.52451 18.9448C3.79608 20.9618 5.46715 22.5555 7.52521 22.6501C8.95364 22.7158 10.4042 22.75 12 22.75C13.5958 22.75 15.0464 22.7158 16.4748 22.6501C18.5328 22.5555 20.2039 20.9618 20.4755 18.9448C20.6236 17.8444 20.75 16.6882 20.75 15.5C20.75 14.3118 20.6236 13.1556 20.4755 12.0552C20.2507 10.3861 19.0677 9.00686 17.5 8.52712V6.75C17.5 3.71243 15.0376 1.25 12 1.25C8.96243 1.25 6.49999 3.71243 6.49999 6.75ZM13 14.5C13 13.9477 12.5523 13.5 12 13.5C11.4477 13.5 11 13.9477 11 14.5V16.5C11 17.0523 11.4477 17.5 12 17.5C12.5523 17.5 13 17.0523 13 16.5V14.5Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M7.52522 8.34988C8.95364 8.28422 10.4042 8.25 12 8.25C13.5958 8.25 15.0464 8.28422 16.4748 8.34989C18.5328 8.4445 20.2039 10.0382 20.4755 12.0552C20.6236 13.1556 20.75 14.3118 20.75 15.5C20.75 16.6882 20.6236 17.8444 20.4755 18.9448C20.2039 20.9618 18.5328 22.5555 16.4748 22.6501C15.0464 22.7158 13.5958 22.75 12 22.75C10.4042 22.75 8.95364 22.7158 7.52522 22.6501C5.46716 22.5555 3.79609 20.9618 3.52452 18.9448C3.37636 17.8444 3.25 16.6882 3.25 15.5C3.25 14.3118 3.37636 13.1556 3.52452 12.0552C3.79609 10.0382 5.46716 8.4445 7.52522 8.34988Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 13.5C12.5523 13.5 13 13.9477 13 14.5V16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5V14.5C11 13.9477 11.4477 13.5 12 13.5Z" fill={color}/>
<Path d="M8.49999 6.75C8.49999 4.817 10.067 3.25 12 3.25C13.933 3.25 15.5 4.817 15.5 6.75V8.31016C15.827 8.32177 16.1515 8.33502 16.4748 8.34988C16.8298 8.3662 17.1732 8.42712 17.5 8.52712V6.75C17.5 3.71243 15.0376 1.25 12 1.25C8.96243 1.25 6.49999 3.71243 6.49999 6.75V8.52712C6.82675 8.42712 7.17022 8.3662 7.52521 8.34988C7.84853 8.33502 8.17298 8.32177 8.49999 8.31016V6.75Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 17V14" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M16.5096 9.00695V6.53096C16.5096 3.96521 14.5644 1.99915 12.1305 1.99915C9.69662 1.99915 7.55999 3.96521 7.55999 6.53096L7.44034 9.00695M4.00195 9.00695H19.9971V22.0008H4.00315L4.00195 9.00695Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M20.75 8.25H3.25V22.75H20.75V8.25ZM13 17V14H11V17H13Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 3.25C10.067 3.25 8.5 4.817 8.5 6.75V9.25H6.5V6.75C6.5 3.71243 8.96243 1.25 12 1.25C15.0376 1.25 17.5 3.71243 17.5 6.75V9.25H15.5V6.75C15.5 4.817 13.933 3.25 12 3.25Z" fill={color}/>
</Svg>
)
}
