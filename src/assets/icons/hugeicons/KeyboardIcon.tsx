
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

export default function KeyboardIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14.5 7H9.5C6.21252 7 4.56878 7 3.46243 7.90796C3.25989 8.07418 3.07418 8.25989 2.90796 8.46243C2 9.56878 2 11.2125 2 14.5C2 17.7875 2 19.4312 2.90796 20.5376C3.07418 20.7401 3.25989 20.9258 3.46243 21.092C4.56878 22 6.21252 22 9.5 22H14.5C17.7875 22 19.4312 22 20.5376 21.092C20.7401 20.9258 20.9258 20.7401 21.092 20.5376C22 19.4312 22 17.7875 22 14.5C22 11.2125 22 9.56878 21.092 8.46243C20.9258 8.25989 20.7401 8.07418 20.5376 7.90796C19.4312 7 17.7875 7 14.5 7Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M12 7V5C12 4.44772 12.4477 4 13 4C13.5523 4 14 3.55228 14 3V2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7 12L8 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.5 12L12.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 12L17 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7 17L17 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19 7H5C3.34315 7 2 8.34315 2 10V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V10C22 8.34315 20.6569 7 19 7Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M12 7V5.53078C12 4.92498 12.4123 4.39693 13 4.25V4.25C13.5877 4.10307 14 3.57502 14 2.96922V2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7 12L8 12M11.5 12L12.5 12M16 12L17 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7 17L17 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M14 1.125C14.5523 1.125 15 1.57272 15 2.125V3.09422C15 4.15889 14.2754 5.08692 13.2425 5.34514C13.1 5.38078 13 5.50885 13 5.65578V7.125C13 7.67728 12.5523 8.125 12 8.125C11.4477 8.125 11 7.67728 11 7.125V5.65578C11 4.59111 11.7246 3.66308 12.7575 3.40486C12.9 3.36922 13 3.24115 13 3.09422V2.125C13 1.57272 13.4477 1.125 14 1.125Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 10.125C1.25 8.05393 2.92893 6.375 5 6.375H19C21.0711 6.375 22.75 8.05393 22.75 10.125V19.125C22.75 21.1961 21.0711 22.875 19 22.875H5C2.92893 22.875 1.25 21.1961 1.25 19.125V10.125ZM17 13.125H16C15.4477 13.125 15 12.6773 15 12.125C15 11.5727 15.4477 11.125 16 11.125H17C17.5523 11.125 18 11.5727 18 12.125C18 12.6773 17.5523 13.125 17 13.125ZM6 12.125C6 11.5727 6.44772 11.125 7 11.125H8C8.55228 11.125 9 11.5727 9 12.125C9 12.6773 8.55228 13.125 8 13.125H7C6.44772 13.125 6 12.6773 6 12.125ZM10.5 12.125C10.5 11.5727 10.9477 11.125 11.5 11.125H12.5C13.0523 11.125 13.5 11.5727 13.5 12.125C13.5 12.6773 13.0523 13.125 12.5 13.125H11.5C10.9477 13.125 10.5 12.6773 10.5 12.125ZM7 16.125C6.44772 16.125 6 16.5727 6 17.125C6 17.6773 6.44772 18.125 7 18.125L17 18.125C17.5523 18.125 18 17.6773 18 17.125C18 16.5727 17.5523 16.125 17 16.125L7 16.125Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M14.5 7H9.5C6.21252 7 4.56878 7 3.46243 7.90796C3.25989 8.07418 3.07418 8.25989 2.90796 8.46243C2 9.56878 2 11.2125 2 14.5C2 17.7875 2 19.4312 2.90796 20.5376C3.07418 20.7401 3.25989 20.9258 3.46243 21.092C4.56878 22 6.21252 22 9.5 22H14.5C17.7875 22 19.4312 22 20.5376 21.092C20.7401 20.9258 20.9258 20.7401 21.092 20.5376C22 19.4312 22 17.7875 22 14.5C22 11.2125 22 9.56878 21.092 8.46243C20.9258 8.25989 20.7401 8.07418 20.5376 7.90796C19.4312 7 17.7875 7 14.5 7Z" fill={color}/>
<Path d="M14.5 7H9.5C6.21252 7 4.56878 7 3.46243 7.90796C3.25989 8.07418 3.07418 8.25989 2.90796 8.46243C2 9.56878 2 11.2125 2 14.5C2 17.7875 2 19.4312 2.90796 20.5376C3.07418 20.7401 3.25989 20.9258 3.46243 21.092C4.56878 22 6.21252 22 9.5 22H14.5C17.7875 22 19.4312 22 20.5376 21.092C20.7401 20.9258 20.9258 20.7401 21.092 20.5376C22 19.4312 22 17.7875 22 14.5C22 11.2125 22 9.56878 21.092 8.46243C20.9258 8.25989 20.7401 8.07418 20.5376 7.90796C19.4312 7 17.7875 7 14.5 7Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M12 7V5C12 4.44772 12.4477 4 13 4C13.5523 4 14 3.55228 14 3V2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7 12L8 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M11.5 12L12.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16 12L17 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M7 17L17 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M14.5 7H9.5C6.21252 7 4.56878 7 3.46243 7.90796C3.25989 8.07418 3.07418 8.25989 2.90796 8.46243C2 9.56878 2 11.2125 2 14.5C2 17.7875 2 19.4312 2.90796 20.5376C3.07418 20.7401 3.25989 20.9258 3.46243 21.092C4.56878 22 6.21252 22 9.5 22H14.5C17.7875 22 19.4312 22 20.5376 21.092C20.7401 20.9258 20.9258 20.7401 21.092 20.5376C22 19.4312 22 17.7875 22 14.5C22 11.2125 22 9.56878 21.092 8.46243C20.9258 8.25989 20.7401 8.07418 20.5376 7.90796C19.4312 7 17.7875 7 14.5 7Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M12 7V5C12 4.44772 12.4477 4 13 4C13.5523 4 14 3.55228 14 3V2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M7 12L8 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M11.5 12L12.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M16 12L17 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M7 17L17 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M9.45109 6.25H14.5489C16.1512 6.24999 17.4205 6.24998 18.4248 6.36868C19.4557 6.49054 20.3044 6.74638 21.0134 7.3282C21.2539 7.52558 21.4744 7.74612 21.6718 7.98663C22.2536 8.69558 22.5095 9.54428 22.6313 10.5753C22.75 11.5794 22.75 12.8488 22.75 14.451V14.4511V14.549V14.5491C22.75 16.1513 22.75 17.4206 22.6313 18.4248C22.5095 19.4557 22.2536 20.3044 21.6718 21.0134C21.4744 21.2539 21.2539 21.4744 21.0134 21.6718C20.3044 22.2536 19.4557 22.5095 18.4248 22.6313C17.4206 22.75 16.1511 22.75 14.5489 22.75H14.5489H9.45099H9.45097C7.84877 22.75 6.57944 22.75 5.57525 22.6313C4.54428 22.5095 3.69558 22.2536 2.98663 21.6718C2.74612 21.4744 2.52559 21.2539 2.3282 21.0134C1.74638 20.3044 1.49055 19.4557 1.36868 18.4248C1.24998 17.4205 1.24999 16.1512 1.25 14.5489V14.5489V14.4511V14.4511C1.24999 12.8488 1.24998 11.5795 1.36868 10.5753C1.49055 9.54428 1.74638 8.69558 2.3282 7.98663C2.52558 7.74612 2.74612 7.52558 2.98663 7.3282C3.69558 6.74638 4.54428 6.49054 5.57525 6.36868C6.57947 6.24998 7.84883 6.24999 9.45109 6.25ZM6 12C6 11.4477 6.44772 11 7 11H8C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13H7C6.44771 13 6 12.5523 6 12ZM10.5 12C10.5 11.4477 10.9477 11 11.5 11H12.5C13.0523 11 13.5 11.4477 13.5 12C13.5 12.5523 13.0523 13 12.5 13H11.5C10.9477 13 10.5 12.5523 10.5 12ZM16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H16ZM6 17C6 16.4477 6.44772 16 7 16L17 16C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18L7 18C6.44771 18 6 17.5523 6 17Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M15 2C15 1.44772 14.5523 1 14 1C13.4477 1 13 1.44772 13 2V2.9C13 2.95523 12.9552 2.99974 12.9 3.00246C11.8419 3.05455 11 3.92896 11 5V6.25H13V5.1C13 5.04477 13.0448 5.00026 13.1 4.99754C14.1581 4.94545 15 4.07104 15 3V2Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M14.5489 6.25H9.45109C7.84883 6.24999 6.57947 6.24998 5.57525 6.36868C4.54428 6.49054 3.69558 6.74638 2.98663 7.3282C2.74612 7.52558 2.52558 7.74612 2.3282 7.98663C1.74638 8.69558 1.49055 9.54428 1.36868 10.5753C1.24998 11.5795 1.24999 12.8488 1.25 14.4511V14.5489C1.24999 16.1512 1.24998 17.4205 1.36868 18.4248C1.49055 19.4557 1.74638 20.3044 2.3282 21.0134C2.52558 21.2539 2.74612 21.4744 2.98663 21.6718C3.69558 22.2536 4.54428 22.5095 5.57525 22.6313C6.57945 22.75 7.84878 22.75 9.45099 22.75H14.5489C16.1511 22.75 17.4206 22.75 18.4248 22.6313C19.4557 22.5095 20.3044 22.2536 21.0134 21.6718C21.2539 21.4744 21.4744 21.2539 21.6718 21.0134C22.2536 20.3044 22.5095 19.4557 22.6313 18.4248C22.75 17.4206 22.75 16.1512 22.75 14.549V14.4511C22.75 12.8489 22.75 11.5794 22.6313 10.5753C22.5095 9.54428 22.2536 8.69558 21.6718 7.98663C21.4744 7.74612 21.2539 7.52558 21.0134 7.3282C20.3044 6.74638 19.4557 6.49054 18.4248 6.36868C17.4205 6.24998 16.1512 6.24999 14.5489 6.25Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13L8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11H7ZM11.5 11C10.9477 11 10.5 11.4477 10.5 12C10.5 12.5523 10.9477 13 11.5 13L12.5 13C13.0523 13 13.5 12.5523 13.5 12C13.5 11.4477 13.0523 11 12.5 11H11.5ZM15 12C15 11.4477 15.4477 11 16 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H16C15.4477 13 15 12.5523 15 12ZM7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18L17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16L7 16Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M15 2C15 1.44772 14.5523 1 14 1C13.4477 1 13 1.44772 13 2V2.9C13 2.95523 12.9552 2.99974 12.9 3.00246C11.8419 3.05455 11 3.92896 11 5V6.25H13V5.1C13 5.04477 13.0448 5.00026 13.1 4.99754C14.1581 4.94545 15 4.07104 15 3V2Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 8H2V22H22V8Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M12 8V5H14V2" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M6 12.5L8 12.5M11 12.5H13M16 12.5L18 12.5M6 17.5L18 17.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M15 5.75H13V6.75H22C22.4142 6.75 22.75 7.08579 22.75 7.5V21.5C22.75 21.9142 22.4142 22.25 22 22.25H2C1.58579 22.25 1.25 21.9142 1.25 21.5V7.5C1.25 7.08579 1.58579 6.75 2 6.75H11V3.75H13V1.75H15V5.75ZM11 13H13V11H11V13ZM16 13H18V11H16V13ZM6 13H8V11H6V13ZM6 18H18V16L6 16V18Z" fill={color}/>
</Svg>
)
}
