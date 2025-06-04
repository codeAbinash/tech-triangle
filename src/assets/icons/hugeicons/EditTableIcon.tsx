
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

export default function EditTableIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2.5 9L21.5 9" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M2.5 13L16.5 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M2.5 17H12" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12 21.5L12 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M18.6014 19.6832L20.8308 17.4538C21.1423 17.1424 21.298 16.9867 21.3812 16.8187C21.5396 16.4991 21.5396 16.1239 21.3812 15.8043C21.298 15.6363 21.1423 15.4806 20.8308 15.1692C20.5194 14.8577 20.3637 14.702 20.1957 14.6188C19.8761 14.4604 19.5009 14.4604 19.1813 14.6188C19.0133 14.702 18.8576 14.8577 18.5462 15.1692L16.1155 17.5999C15.4028 18.3126 15.0464 18.6689 14.8262 19.1056C14.7582 19.2404 14.7003 19.3802 14.6531 19.5237C14.5 19.9881 14.5 20.4921 14.5 21.5L15.155 21.4064C16.1514 21.2641 16.6496 21.1929 17.0917 20.9718C17.5339 20.7508 17.8897 20.3949 18.6014 19.6832Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2.5 9L21.5 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2.5 13L16.5 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2.5 17H12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 21.5L12 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21.5 16.5L19.5 14.5L14.5 19.5V21.5H16.5L21.5 16.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M21.5 12V5.5C21.5 3.84315 20.1569 2.5 18.5 2.5H5.5C3.84315 2.5 2.5 3.84315 2.5 5.5V18.5C2.5 20.1569 3.84315 21.5 5.5 21.5H12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22.2 17.2L20.2 15.2L15.2 20.2V22.2H17.2L22.2 17.2Z" fill={color}/>
<Path d="M5.44995 1.7C3.37888 1.7 1.69995 3.37893 1.69995 5.45V7.2H22.2V5.45C22.2 3.37893 20.521 1.7 18.45 1.7H5.44995Z" fill={color}/>
<Path d="M22.2 8.7H12.7V12.2H22.2V8.7Z" fill={color}/>
<Path d="M16.4322 17.2L19.9322 13.7H12.7V17.2H16.4322Z" fill={color}/>
<Path d="M14.9322 18.7H12.7V22.2H13.95V19.6822L14.9322 18.7Z" fill={color}/>
<Path d="M11.2 13.7V17.2H1.69995V13.7H11.2Z" fill={color}/>
<Path d="M1.70815 18.7H11.2V22.2H5.44995C3.46289 22.2 1.8368 20.6545 1.70815 18.7Z" fill={color}/>
<Path d="M11.2 12.2H1.69995V8.7H11.2V12.2Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2.5 9L21.5 9" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M2.5 13L16.5 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M2.5 17H12" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12 21.5L12 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M18.6014 19.6832L20.8308 17.4538C21.1423 17.1424 21.298 16.9867 21.3812 16.8187C21.5396 16.4991 21.5396 16.1239 21.3812 15.8043C21.298 15.6363 21.1423 15.4806 20.8308 15.1692C20.5194 14.8577 20.3637 14.702 20.1957 14.6188C19.8761 14.4604 19.5009 14.4604 19.1813 14.6188C19.0133 14.702 18.8576 14.8577 18.5462 15.1692L16.1155 17.5999C15.4028 18.3126 15.0464 18.6689 14.8262 19.1056C14.7582 19.2404 14.7003 19.3802 14.6531 19.5237C14.5 19.9881 14.5 20.4921 14.5 21.5L15.155 21.4064C16.1514 21.2641 16.6496 21.1929 17.0917 20.9718C17.5339 20.7508 17.8897 20.3949 18.6014 19.6832Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
<Path opacity="0.4" d="M2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C12.9247 21.5 13.754 21.5 14.5 21.4878C14.5 20.488 14.5006 19.9862 14.6531 19.5237C14.7003 19.3802 14.7582 19.2404 14.8263 19.1056C15.0464 18.6689 15.4028 18.3126 16.1155 17.5999L18.5462 15.1692C18.8576 14.8577 19.0133 14.702 19.1813 14.6188C19.5009 14.4604 19.8761 14.4604 20.1957 14.6188C20.3637 14.702 20.5194 14.8577 20.8308 15.1692C21.1423 15.4806 21.3567 15.778 21.44 15.946C21.5 14.8661 21.5 13.5708 21.5 12C21.5 10.8633 21.5 9.87091 21.4773 9H2.52275C2.5 9.87091 2.5 10.8633 2.5 12Z" fill={color}/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M2.5 13H16.5M3 17H12M12 21.5L12 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2.5 9L21.5 9" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M18.6014 19.6832L20.8308 17.4538C21.1423 17.1424 21.298 16.9867 21.3812 16.8187C21.5396 16.4991 21.5396 16.1239 21.3812 15.8043C21.298 15.6363 21.1423 15.4806 20.8308 15.1692C20.5194 14.8577 20.3637 14.702 20.1957 14.6188C19.8761 14.4604 19.5009 14.4604 19.1813 14.6188C19.0133 14.702 18.8576 14.8577 18.5462 15.1692L16.1155 17.5999C15.4028 18.3126 15.0464 18.6689 14.8262 19.1056C14.7582 19.2404 14.7003 19.3802 14.6531 19.5237C14.5 19.9881 14.5 20.4921 14.5 21.5L15.155 21.4064C16.1514 21.2641 16.6496 21.1929 17.0917 20.9718C17.5339 20.7508 17.8897 20.3949 18.6014 19.6832Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.3514 20.433L21.5808 18.2036C21.8923 17.8922 22.048 17.7364 22.1312 17.5685C22.2896 17.2489 22.2896 16.8736 22.1312 16.554C22.048 16.3861 21.8923 16.2304 21.5808 15.9189C21.2694 15.6075 21.1137 15.4518 20.9457 15.3686C20.6261 15.2102 20.2509 15.2102 19.9313 15.3686C19.7633 15.4518 19.6076 15.6075 19.2962 15.9189L16.8655 18.3496C16.1528 19.0623 15.7964 19.4187 15.5762 19.8553C15.5082 19.9902 15.4503 20.13 15.4031 20.2735C15.25 20.7379 15.25 21.2419 15.25 22.2498L15.905 22.1562C16.9014 22.0139 17.3996 21.9427 17.8417 21.7216C18.2839 21.5006 18.6397 21.1447 19.3514 20.433Z" fill={color}/>
<Path d="M12.0572 1.75C9.86647 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.83382 7.40785 1.7889 8.26881 1.76805 9.25H22.232C22.2111 8.26881 22.1662 7.40785 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z" fill={color}/>
<Path d="M22.2484 10.75H12.75V13.25H22.2488C22.25 12.8706 22.25 12.4751 22.25 12.063V12.0523C22.25 11.6028 22.25 11.1683 22.2484 10.75Z" fill={color}/>
<Path d="M15.8441 17.25L18.3037 14.7901C18.3166 14.777 18.3298 14.7637 18.3434 14.75H12.75L12.75 17.25H15.8441Z" fill={color}/>
<Path d="M14.4918 18.75H12.75V22.2496C13.0936 22.2492 13.4272 22.2481 13.7503 22.2456L13.7501 22.0797C13.7491 21.2407 13.7482 20.5036 13.9787 19.8042C14.0493 19.5901 14.1357 19.3815 14.2372 19.1802C14.3126 19.0305 14.398 18.8879 14.4918 18.75Z" fill={color}/>
<Path d="M11.25 18.75V22.2498C9.38519 22.2479 7.88649 22.2305 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.82616 20.1043 2.47434 19.4787 2.24033 18.75H11.25Z" fill={color}/>
<Path d="M1.92242 17.25H11.25L11.25 14.75H1.7667C1.78637 15.7 1.82919 16.5287 1.92242 17.25Z" fill={color}/>
<Path d="M11.25 13.25H1.75121C1.75 12.8688 1.75 12.4715 1.75 12.0574C1.75 11.6062 1.75 11.1698 1.75157 10.75H11.25V13.25Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.3514 20.433L21.5808 18.2036C21.8923 17.8922 22.048 17.7364 22.1312 17.5685C22.2896 17.2489 22.2896 16.8736 22.1312 16.554C22.048 16.3861 21.8923 16.2304 21.5808 15.9189C21.2694 15.6075 21.1137 15.4518 20.9457 15.3686C20.6261 15.2102 20.2509 15.2102 19.9313 15.3686C19.7633 15.4518 19.6076 15.6075 19.2962 15.9189L16.8655 18.3496C16.1528 19.0623 15.7964 19.4187 15.5762 19.8553C15.5082 19.9902 15.4503 20.13 15.4031 20.2735C15.25 20.7379 15.25 21.2419 15.25 22.2498L15.905 22.1562C16.9014 22.0139 17.3996 21.9427 17.8417 21.7216C18.2839 21.5006 18.6397 21.1447 19.3514 20.433Z" fill={color}/>
<Path d="M1.76879 9.25C1.75874 9.72286 1.75429 10.2236 1.75231 10.75H11.2507V13.25H1.75195C1.75365 13.7808 1.75771 14.2802 1.76744 14.75H11.2507L11.2507 17.25H1.92316L1.93133 17.312C2.00109 17.8308 2.09953 18.3093 2.24107 18.75H11.2507V22.2498C11.4763 22.25 11.7072 22.25 11.9436 22.25C12.2183 22.25 12.4875 22.25 12.7507 22.2496V18.75H14.4915C14.8098 18.2819 15.2255 17.8672 15.6843 17.4095L15.8438 17.25H12.7507L12.7507 14.75H18.3431C18.5684 14.5228 18.8861 14.2126 19.2653 14.0248C20.0045 13.6584 20.8725 13.6584 21.6118 14.0248C21.847 14.1413 22.0586 14.305 22.2392 14.4667C22.2453 14.0807 22.2482 13.6754 22.2495 13.25H12.7507V10.75H22.2492C22.2472 10.2236 22.2427 9.72286 22.2327 9.25H1.76879Z" fill={color}/>
<Path opacity="0.4" d="M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75C9.86647 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.86647 1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25C12.576 22.25 13.1795 22.25 13.75 22.2456C13.749 21.4079 13.7483 20.5024 13.9784 19.8042C14.049 19.5901 14.1354 19.3815 14.2369 19.1802C14.5685 18.5226 15.0903 18.002 15.6843 17.4095L18.3034 14.7901C18.5304 14.5606 18.8633 14.2239 19.2653 14.0248C20.0045 13.6584 20.8725 13.6584 21.6118 14.0248C21.8467 14.1412 22.0581 14.3046 22.2385 14.4661C22.25 13.7343 22.25 12.9334 22.25 12.0572C22.25 9.86649 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M11.5 20.5H2.5V2.5H20.5V11.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="round"/>
<Path d="M2.5 8.5H20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M2.5 12.5L16.5 12.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M2.5 16.5H11.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M11.5 20.5L11.5 8.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
<Path d="M21.5 16.5L19.5 14.5L14.5 19.5V21.5H16.5L21.5 16.5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21.75 16.75L19.75 14.75L14.75 19.75V21.75H16.75L21.75 16.75Z" fill={color}/>
<Path d="M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V9.25L2.25 9.25V3Z" fill={color}/>
<Path d="M19.1289 13.25H12.75V10.75H21.6289L19.1289 13.25Z" fill={color}/>
<Path d="M12.75 14.75H17.6289L15.1289 17.25H12.75L12.75 14.75Z" fill={color}/>
<Path d="M11.25 18.75V21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V18.75H11.25Z" fill={color}/>
<Path d="M11.25 17.25H2.25V14.75L11.25 14.75L11.25 17.25Z" fill={color}/>
<Path d="M11.25 13.25L2.25 13.25V10.75H11.25V13.25Z" fill={color}/>
</Svg>
)
}
