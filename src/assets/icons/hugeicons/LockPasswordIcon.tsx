
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

export default function LockPasswordIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M17.9998 9H6C4.89536 9 3.9999 9.89554 4 11.0002L4.00083 20.0002C4.00093 21.1047 4.89633 22 6.00083 22H17.9998C19.1044 22 19.9998 21.1046 19.9998 20V11C19.9998 9.89543 19.1044 9 17.9998 9Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.5 8.99805V6.49805C16.5 4.01277 14.4853 1.99805 12 1.99805C9.51472 1.99805 7.5 4.01277 7.5 6.49805V8.99805" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12.0001 3.24902C10.0671 3.24902 8.50012 4.81603 8.50012 6.74902V8.25098L15.5001 8.25098V6.74902C15.5001 4.81603 13.9331 3.24902 12.0001 3.24902ZM6.50012 6.74902V8.25098H6.00012C4.48124 8.25098 3.24998 9.48235 3.25012 11.0012L3.25095 20.0012C3.25109 21.5199 4.48227 22.751 6.00095 22.751L17.9999 22.751C19.5187 22.751 20.7499 21.5198 20.7499 20.001V11.001C20.7499 9.48219 19.5187 8.25098 17.9999 8.25098H17.5001V6.74902C17.5001 3.71146 15.0377 1.24902 12.0001 1.24902C8.96256 1.24902 6.50012 3.71146 6.50012 6.74902ZM17.0001 15.4912C17.0001 14.9389 16.5524 14.4912 16.0001 14.4912C15.4478 14.4912 15.0001 14.9389 15.0001 15.4912V15.5012C15.0001 16.0535 15.4478 16.5012 16.0001 16.5012C16.5524 16.5012 17.0001 16.0535 17.0001 15.5012V15.4912ZM12.0001 14.4912C12.5524 14.4912 13.0001 14.9389 13.0001 15.4912V15.5012C13.0001 16.0535 12.5524 16.5012 12.0001 16.5012C11.4478 16.5012 11.0001 16.0535 11.0001 15.5012V15.4912C11.0001 14.9389 11.4478 14.4912 12.0001 14.4912ZM9.00012 15.4912C9.00012 14.9389 8.55241 14.4912 8.00012 14.4912C7.44784 14.4912 7.00012 14.9389 7.00012 15.4912V15.5012C7.00012 16.0535 7.44784 16.5012 8.00012 16.5012C8.55241 16.5012 9.00012 16.0535 9.00012 15.5012V15.4912Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z" fill={color}/>
<Path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M16 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M12 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M8 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 3.25C10.067 3.25 8.5 4.817 8.5 6.75V8.31016C9.61773 8.27048 10.7654 8.25 12 8.25C13.2346 8.25 14.3823 8.27048 15.5 8.31016V6.75C15.5 4.817 13.933 3.25 12 3.25ZM6.5 6.75V8.52712C4.93233 9.00686 3.74925 10.3861 3.52452 12.0552C3.37636 13.1556 3.25 14.3118 3.25 15.5C3.25 16.6882 3.37636 17.8444 3.52452 18.9448C3.79609 20.9618 5.46716 22.5555 7.52522 22.6501C8.95364 22.7158 10.4042 22.75 12 22.75C13.5958 22.75 15.0464 22.7158 16.4748 22.6501C18.5328 22.5555 20.2039 20.9618 20.4755 18.9448C20.6236 17.8444 20.75 16.6882 20.75 15.5C20.75 14.3118 20.6236 13.1556 20.4755 12.0552C20.2508 10.3861 19.0677 9.00686 17.5 8.52712V6.75C17.5 3.71243 15.0376 1.25 12 1.25C8.96243 1.25 6.5 3.71243 6.5 6.75ZM17 15.4902C17 14.9379 16.5523 14.4902 16 14.4902C15.4477 14.4902 15 14.9379 15 15.4902V15.5002C15 16.0525 15.4477 16.5002 16 16.5002C16.5523 16.5002 17 16.0525 17 15.5002V15.4902ZM12 14.4902C12.5523 14.4902 13 14.9379 13 15.4902V15.5002C13 16.0525 12.5523 16.5002 12 16.5002C11.4477 16.5002 11 16.0525 11 15.5002V15.4902C11 14.9379 11.4477 14.4902 12 14.4902ZM9 15.4902C9 14.9379 8.55228 14.4902 8 14.4902C7.44772 14.4902 7 14.9379 7 15.4902V15.5002C7 16.0525 7.44772 16.5002 8 16.5002C8.55228 16.5002 9 16.0525 9 15.5002V15.4902Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M7.52522 8.34988C8.95364 8.28422 10.4042 8.25 12 8.25C13.5958 8.25 15.0464 8.28422 16.4748 8.34989C18.5328 8.4445 20.2039 10.0382 20.4755 12.0552C20.6236 13.1556 20.75 14.3118 20.75 15.5C20.75 16.6882 20.6236 17.8444 20.4755 18.9448C20.2039 20.9618 18.5328 22.5555 16.4748 22.6501C15.0464 22.7158 13.5958 22.75 12 22.75C10.4042 22.75 8.95364 22.7158 7.52522 22.6501C5.46716 22.5555 3.79609 20.9618 3.52452 18.9448C3.37636 17.8444 3.25 16.6882 3.25 15.5C3.25 14.3118 3.37636 13.1556 3.52452 12.0552C3.79609 10.0382 5.46716 8.4445 7.52522 8.34988Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M16 14.4902C16.5523 14.4902 17 14.9379 17 15.4902V15.5002C17 16.0525 16.5523 16.5002 16 16.5002C15.4477 16.5002 15 16.0525 15 15.5002V15.4902C15 14.9379 15.4477 14.4902 16 14.4902Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 14.4902C12.5523 14.4902 13 14.9379 13 15.4902V15.5002C13 16.0525 12.5523 16.5002 12 16.5002C11.4477 16.5002 11 16.0525 11 15.5002V15.4902C11 14.9379 11.4477 14.4902 12 14.4902Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8 14.4902C8.55228 14.4902 9 14.9379 9 15.4902V15.5002C9 16.0525 8.55228 16.5002 8 16.5002C7.44772 16.5002 7 16.0525 7 15.5002V15.4902C7 14.9379 7.44772 14.4902 8 14.4902Z" fill={color}/>
<Path d="M8.5 6.75C8.5 4.817 10.067 3.25 12 3.25C13.933 3.25 15.5 4.817 15.5 6.75V8.31016C15.827 8.32177 16.1515 8.33502 16.4748 8.34988C16.8298 8.3662 17.1732 8.42712 17.5 8.52712V6.75C17.5 3.71243 15.0376 1.25 12 1.25C8.96243 1.25 6.5 3.71243 6.5 6.75V8.52712C6.82676 8.42712 7.17023 8.3662 7.52522 8.34988C7.84854 8.33502 8.17299 8.32177 8.5 8.31016V6.75Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M20 9H4V22H20V9Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M16 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="square"/>
<Path d="M12 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="square"/>
<Path d="M8 15.49V15.5" stroke={color} strokeWidth="2" strokeLinecap="square"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 3.25C10.067 3.25 8.5 4.817 8.5 6.75V9.25H6.5V6.75C6.5 3.71243 8.96243 1.25 12 1.25C15.0376 1.25 17.5 3.71243 17.5 6.75V9.25H15.5V6.75C15.5 4.817 13.933 3.25 12 3.25Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M3.25 8.25L20.75 8.25L20.75 22.75L3.25 22.75L3.25 8.25ZM17 16.5002V14.4902H15V16.5002H17ZM13 14.4902V16.5002H11V14.4902L13 14.4902ZM9 16.5002V14.4902L7 14.4902V16.5002H9Z" fill={color}/>
</Svg>
)
}
