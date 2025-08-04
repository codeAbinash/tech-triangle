
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function KeyboardIcon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M9.45109 6.25H14.5489C16.1512 6.24999 17.4205 6.24998 18.4248 6.36868C19.4557 6.49054 20.3044 6.74638 21.0134 7.3282C21.2539 7.52558 21.4744 7.74612 21.6718 7.98663C22.2536 8.69558 22.5095 9.54428 22.6313 10.5753C22.75 11.5794 22.75 12.8488 22.75 14.451V14.4511V14.549V14.5491C22.75 16.1513 22.75 17.4206 22.6313 18.4248C22.5095 19.4557 22.2536 20.3044 21.6718 21.0134C21.4744 21.2539 21.2539 21.4744 21.0134 21.6718C20.3044 22.2536 19.4557 22.5095 18.4248 22.6313C17.4206 22.75 16.1511 22.75 14.5489 22.75H14.5489H9.45099H9.45097C7.84877 22.75 6.57944 22.75 5.57525 22.6313C4.54428 22.5095 3.69558 22.2536 2.98663 21.6718C2.74612 21.4744 2.52559 21.2539 2.3282 21.0134C1.74638 20.3044 1.49055 19.4557 1.36868 18.4248C1.24998 17.4205 1.24999 16.1512 1.25 14.5489V14.5489V14.4511V14.4511C1.24999 12.8488 1.24998 11.5795 1.36868 10.5753C1.49055 9.54428 1.74638 8.69558 2.3282 7.98663C2.52558 7.74612 2.74612 7.52558 2.98663 7.3282C3.69558 6.74638 4.54428 6.49054 5.57525 6.36868C6.57947 6.24998 7.84883 6.24999 9.45109 6.25ZM6 12C6 11.4477 6.44772 11 7 11H8C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13H7C6.44771 13 6 12.5523 6 12ZM10.5 12C10.5 11.4477 10.9477 11 11.5 11H12.5C13.0523 11 13.5 11.4477 13.5 12C13.5 12.5523 13.0523 13 12.5 13H11.5C10.9477 13 10.5 12.5523 10.5 12ZM16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H16ZM6 17C6 16.4477 6.44772 16 7 16L17 16C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18L7 18C6.44771 18 6 17.5523 6 17Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M15 2C15 1.44772 14.5523 1 14 1C13.4477 1 13 1.44772 13 2V2.9C13 2.95523 12.9552 2.99974 12.9 3.00246C11.8419 3.05455 11 3.92896 11 5V6.25H13V5.1C13 5.04477 13.0448 5.00026 13.1 4.99754C14.1581 4.94545 15 4.07104 15 3V2Z" fill={color}/>
</Svg>
)
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
