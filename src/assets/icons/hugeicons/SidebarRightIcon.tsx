
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

export default function SidebarRightIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2 12C2 8.3109 2 6.46633 2.81382 5.1588C3.1149 4.67505 3.48891 4.2543 3.91891 3.91557C5.08116 3.00003 6.72077 3.00003 10 3.00003H14C17.2792 3.00003 18.9188 3.00003 20.0811 3.91557C20.5111 4.2543 20.8851 4.67505 21.1862 5.1588C22 6.46633 22 8.3109 22 12C22 15.6892 22 17.5337 21.1862 18.8413C20.8851 19.325 20.5111 19.7458 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7458 3.1149 19.325 2.81382 18.8413C2 17.5337 2 15.6892 2 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M14.5 3.00003L14.5 21" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M18 7.00006H19M18 10.0001H19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M20 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M14.5 3L14.5 21" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M18 7.00006L19 6.99994M18 10H19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M4 2.25H13.75L13.75 21.75H4C2.48122 21.75 1.25 20.5188 1.25 19V5C1.25 3.48122 2.48122 2.25 4 2.25ZM20 21.75H15.25L15.25 2.25H20C21.5188 2.25 22.75 3.48122 22.75 5V19C22.75 20.5188 21.5188 21.75 20 21.75ZM18.4808 7.75012L19.4808 7.75C19.895 7.74995 20.2308 7.41412 20.2307 6.99991C20.2307 6.58569 19.8948 6.24995 19.4806 6.25L18.4806 6.25012C18.0664 6.25017 17.7307 6.586 17.7307 7.00021C17.7308 7.41443 18.0666 7.75017 18.4808 7.75012ZM18.4807 9.25006C18.0665 9.25006 17.7307 9.58585 17.7307 10.0001C17.7307 10.4143 18.0665 10.7501 18.4807 10.7501H19.4807C19.8949 10.7501 20.2307 10.4143 20.2307 10.0001C20.2307 9.58585 19.8949 9.25006 19.4807 9.25006H18.4807Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M14 3.00003H10C6.72077 3.00003 5.08116 3.00003 3.91891 3.91557C3.48891 4.2543 3.1149 4.67505 2.81382 5.1588C2 6.46633 2 8.3109 2 12C2 15.6892 2 17.5337 2.81382 18.8413C3.1149 19.325 3.48891 19.7458 3.91891 20.0845C5.08116 21 6.72077 21 10 21H14L14.5 20.9999V3.00016L14 3.00003Z" fill={color}/>
<Path d="M2 12C2 8.3109 2 6.46633 2.81382 5.1588C3.1149 4.67505 3.48891 4.2543 3.91891 3.91557C5.08116 3.00003 6.72077 3.00003 10 3.00003H14C17.2792 3.00003 18.9188 3.00003 20.0811 3.91557C20.5111 4.2543 20.8851 4.67505 21.1862 5.1588C22 6.46633 22 8.3109 22 12C22 15.6892 22 17.5337 21.1862 18.8413C20.8851 19.325 20.5111 19.7458 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7458 3.1149 19.325 2.81382 18.8413C2 17.5337 2 15.6892 2 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M14.5 3.00003L14.5 21" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M18 7.00006H19M18 10.0001H19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2 12C2 8.3109 2 6.46633 2.81382 5.1588C3.1149 4.67505 3.48891 4.2543 3.91891 3.91557C5.08116 3.00003 6.72077 3.00003 10 3.00003H14C17.2792 3.00003 18.9188 3.00003 20.0811 3.91557C20.5111 4.2543 20.8851 4.67505 21.1862 5.1588C22 6.46633 22 8.3109 22 12C22 15.6892 22 17.5337 21.1862 18.8413C20.8851 19.325 20.5111 19.7458 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7458 3.1149 19.325 2.81382 18.8413C2 17.5337 2 15.6892 2 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M14.5 3.00003L14.5 21" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path opacity="0.4" d="M18 7.00006H19M18 10.0001H19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M9.95154 2.25003H12.75C13.2214 2.25003 13.4571 2.25003 13.6036 2.39648C13.75 2.54292 13.75 2.77863 13.75 3.25003L13.75 20.75C13.75 21.2214 13.75 21.4571 13.6036 21.6036C13.4571 21.75 13.2214 21.75 12.75 21.75H9.95145H9.95143H9.95141H9.95139H9.95137C8.35293 21.75 7.08651 21.7501 6.07727 21.6304C5.03896 21.5072 4.18587 21.2495 3.4548 20.6736C2.95374 20.2789 2.5222 19.7921 2.17708 19.2376C1.68205 18.4422 1.46162 17.5217 1.355 16.3837C1.24999 15.263 1.24999 13.8507 1.25 12.0395V12.0395V11.9606V11.9606C1.24999 10.1494 1.24999 8.73708 1.355 7.61635C1.46162 6.4784 1.68205 5.55783 2.17708 4.76249C2.5222 4.208 2.95374 3.72112 3.4548 3.32641C4.18587 2.75053 5.03896 2.49282 6.07727 2.36969C7.08654 2.25001 8.35302 2.25002 9.95153 2.25003H9.95154ZM16.2559 21.7341C16.8783 21.7188 17.431 21.6889 17.9227 21.6306C18.961 21.5075 19.8141 21.2497 20.5452 20.6739C21.0463 20.2792 21.4778 19.7923 21.8229 19.2378C22.3179 18.4424 22.5384 17.5219 22.645 16.3839C22.75 15.2632 22.75 13.8508 22.75 12.0397V11.9608C22.75 10.1496 22.75 8.7373 22.645 7.61656C22.5384 6.47861 22.3179 5.55804 21.8229 4.7627C21.4778 4.20821 21.0463 3.72133 20.5452 3.32662C19.8141 2.75074 18.961 2.49303 17.9227 2.3699C17.431 2.3116 16.8783 2.2817 16.2559 2.26637C15.7864 2.2548 15.5517 2.24902 15.4008 2.39618C15.25 2.54334 15.25 2.78167 15.25 3.25834V20.7421C15.25 21.2188 15.25 21.4571 15.4008 21.6043C15.5517 21.7515 15.7864 21.7457 16.2559 21.7341ZM17.75 6.96097C17.75 6.54675 18.0858 6.21097 18.5 6.21097H19.5C19.9142 6.21097 20.25 6.54675 20.25 6.96097C20.25 7.37518 19.9142 7.71097 19.5 7.71097H18.5C18.0858 7.71097 17.75 7.37518 17.75 6.96097ZM17.75 9.96097C17.75 9.54675 18.0858 9.21097 18.5 9.21097H19.5C19.9142 9.21097 20.25 9.54675 20.25 9.96097C20.25 10.3752 19.9142 10.711 19.5 10.711H18.5C18.0858 10.711 17.75 10.3752 17.75 9.96097Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M16.2559 21.7348C16.8783 21.7195 17.431 21.6896 17.9227 21.6313C18.961 21.5081 19.8141 21.2504 20.5452 20.6745C21.0463 20.2798 21.4778 19.793 21.8229 19.2385C22.3179 18.4431 22.5384 17.5225 22.645 16.3846C22.75 15.2639 22.75 13.8515 22.75 12.0403V11.9615C22.75 10.1503 22.75 8.73798 22.645 7.61724C22.5384 6.47929 22.3179 5.55872 21.8229 4.76338C21.4778 4.20888 21.0463 3.722 20.5452 3.3273C19.8141 2.75142 18.961 2.4937 17.9227 2.37058C17.431 2.31227 16.8783 2.28237 16.2559 2.26704C15.7864 2.25548 15.5517 2.2497 15.4008 2.39686C15.25 2.54401 15.25 2.78235 15.25 3.25902V20.7428C15.25 21.2195 15.25 21.4578 15.4008 21.605C15.5517 21.7521 15.7864 21.7464 16.2559 21.7348ZM17.75 6.96097C17.75 6.54675 18.0858 6.21097 18.5 6.21097H19.5C19.9142 6.21097 20.25 6.54675 20.25 6.96097C20.25 7.37518 19.9142 7.71097 19.5 7.71097H18.5C18.0858 7.71097 17.75 7.37518 17.75 6.96097ZM17.75 9.96097C17.75 9.54675 18.0858 9.21097 18.5 9.21097H19.5C19.9142 9.21097 20.25 9.54675 20.25 9.96097C20.25 10.3752 19.9142 10.711 19.5 10.711H18.5C18.0858 10.711 17.75 10.3752 17.75 9.96097Z" fill={color}/>
<Path opacity="0.4" d="M12.75 2.25006H9.95154C8.35303 2.25005 7.08654 2.25004 6.07727 2.36972C5.03896 2.49285 4.18587 2.75056 3.4548 3.32644C2.95374 3.72115 2.5222 4.20803 2.17708 4.76252C1.68205 5.55786 1.46162 6.47843 1.355 7.61638C1.24999 8.73711 1.24999 10.1494 1.25 11.9606V12.0395C1.24999 13.8507 1.24999 15.263 1.355 16.3837C1.46162 17.5217 1.68205 18.4423 2.17708 19.2376C2.5222 19.7921 2.95374 20.279 3.4548 20.6737C4.18587 21.2496 5.03896 21.5073 6.07727 21.6304C7.08652 21.7501 8.35298 21.7501 9.95145 21.7501H12.75C13.2214 21.7501 13.4571 21.7501 13.6036 21.6036C13.75 21.4572 13.75 21.2215 13.75 20.7501L13.75 3.25006C13.75 2.77866 13.75 2.54295 13.6036 2.39651C13.4571 2.25006 13.2214 2.25006 12.75 2.25006Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 3.00003H2V21H22V3.00003Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M14.5 3.00003L14.5 21" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M17 7.00006H19.5M17 10.0001H19.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M13.75 2.25003H2C1.58579 2.25003 1.25 2.58582 1.25 3.00003V21C1.25 21.4142 1.58579 21.75 2 21.75H13.75L13.75 2.25003Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M22 21.75H15.25V2.25H22C22.4142 2.25 22.75 2.58579 22.75 3V21C22.75 21.4142 22.4142 21.75 22 21.75ZM17.75 7.70544H20.25V6.20544H17.75V7.70544ZM17.75 10.7054H20.25V9.20544H17.75V10.7054Z" fill={color}/>
</Svg>
)
}
