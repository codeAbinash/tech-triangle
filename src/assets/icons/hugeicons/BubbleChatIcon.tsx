
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

export default function BubbleChatIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5759 2.40213 14.9412 3.06417 16.2246C3.32379 16.7279 3.40711 17.3096 3.24438 17.8521L2.53365 20.2212C2.3048 20.984 3.01602 21.6952 3.77882 21.4664L6.14794 20.7556C6.69036 20.5929 7.27207 20.6762 7.77536 20.9358C9.05879 21.5979 10.4241 22 12 22Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M11.75 1C5.81294 1 1 5.81294 1 11.75C1 13.4637 1.43976 14.9462 2.14763 16.3185C2.33161 16.6751 2.37501 17.0566 2.27601 17.3866L1.56528 19.7557C1.1648 21.0906 2.40942 22.3352 3.74433 21.9347L6.11345 21.224C6.44343 21.125 6.82487 21.1684 7.18153 21.3524C8.5538 22.0602 10.0363 22.5 11.75 22.5C17.6871 22.5 22.5 17.6871 22.5 11.75C22.5 5.81294 17.6871 1 11.75 1ZM7.75 10.75C7.19772 10.75 6.75 11.1977 6.75 11.75C6.75 12.3023 7.19772 12.75 7.75 12.75H7.75897C8.31125 12.75 8.75897 12.3023 8.75897 11.75C8.75897 11.1977 8.31125 10.75 7.75897 10.75H7.75ZM11.7455 10.75C11.1932 10.75 10.7455 11.1977 10.7455 11.75C10.7455 12.3023 11.1932 12.75 11.7455 12.75H11.7545C12.3068 12.75 12.7545 12.3023 12.7545 11.75C12.7545 11.1977 12.3068 10.75 11.7545 10.75H11.7455ZM15.741 10.75C15.1887 10.75 14.741 11.1977 14.741 11.75C14.741 12.3023 15.1887 12.75 15.741 12.75H15.75C16.3023 12.75 16.75 12.3023 16.75 11.75C16.75 11.1977 16.3023 10.75 15.75 10.75H15.741Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z" fill={color}/>
<Path d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path opacity="0.4" d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.25 11.5667C1.25 5.83838 6.09523 1.25 12 1.25C17.9048 1.25 22.75 5.83838 22.75 11.5667C22.75 17.295 17.9048 21.8834 12 21.8834C11.3041 21.8843 10.6103 21.8199 9.92698 21.6916C9.68979 21.647 9.53909 21.6189 9.42696 21.6036C9.34334 21.5907 9.25931 21.6219 9.22775 21.6391C9.11322 21.6935 8.96068 21.7744 8.72714 21.8986C7.29542 22.66 5.62504 22.93 4.01396 22.6303C3.75381 22.5819 3.5384 22.4 3.44713 22.1517C3.35586 21.9033 3.40224 21.6252 3.56917 21.4199C4.03697 20.8445 4.35863 20.1513 4.50088 19.4052C4.53937 19.2 4.45227 18.9213 4.18451 18.6494C2.36972 16.8065 1.25 14.3144 1.25 11.5667ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H8.00897C8.56126 13 9.00897 12.5523 9.00897 12C9.00897 11.4477 8.56126 11 8.00897 11H8ZM11.9955 11C11.4432 11 10.9955 11.4477 10.9955 12C10.9955 12.5523 11.4432 13 11.9955 13H12.0045C12.5568 13 13.0045 12.5523 13.0045 12C13.0045 11.4477 12.5568 11 12.0045 11H11.9955ZM14.991 12C14.991 11.4477 15.4387 11 15.991 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H15.991C15.4387 13 14.991 12.5523 14.991 12Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M12 1.25C6.09523 1.25 1.25 5.83838 1.25 11.5667C1.25 14.3144 2.36972 16.8065 4.18451 18.6494C4.45227 18.9213 4.53937 19.2 4.50088 19.4052C4.35863 20.1513 4.03697 20.8445 3.56917 21.4199C3.40224 21.6252 3.35586 21.9033 3.44713 22.1517C3.5384 22.4 3.75381 22.5819 4.01396 22.6303C5.62504 22.93 7.29542 22.66 8.72714 21.8986C8.96068 21.7744 9.11322 21.6935 9.22775 21.6391C9.25931 21.6219 9.34334 21.5907 9.42696 21.6036C9.53909 21.6189 9.68979 21.647 9.92698 21.6916C10.6103 21.8199 11.3041 21.8843 12 21.8834C17.9048 21.8834 22.75 17.295 22.75 11.5667C22.75 5.83838 17.9048 1.25 12 1.25Z" fill={color}/>
<Path d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H8.00897C8.56126 13 9.00897 12.5523 9.00897 12C9.00897 11.4477 8.56126 11 8.00897 11H8Z" fill={color}/>
<Path d="M11.9955 11C11.4432 11 10.9955 11.4477 10.9955 12C10.9955 12.5523 11.4432 13 11.9955 13H12.0045C12.5568 13 13.0045 12.5523 13.0045 12C13.0045 11.4477 12.5568 11 12.0045 11H11.9955Z" fill={color}/>
<Path d="M15.991 11C15.4387 11 14.991 11.4477 14.991 12C14.991 12.5523 15.4387 13 15.991 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H15.991Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M11.9909 12H11.9999M15.9864 12H15.9954M7.99536 12H8.00433" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
<Path d="M12 21.0008C17.5216 21.0008 21.9978 16.7474 21.9978 11.5004C21.9978 6.25349 17.5216 2 12 2C6.47837 2 2.0022 6.25349 2.0022 11.5004C2.0022 14.1771 3.16355 16.5063 5.00624 18.286L4.00525 21.9796C4.00305 21.9878 4.0113 21.9948 4.019 21.9914L7.99487 20.2078C9.22111 20.7179 10.5758 21.0008 12 21.0008Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.10029 1.25 1.25 5.80369 1.25 11.5C1.25 14.2189 2.36071 16.6855 4.16134 18.5143L3.25001 22.75L8.01735 21.0233C9.25046 21.4925 10.5948 21.75 12 21.75C17.8997 21.75 22.75 17.1963 22.75 11.5C22.75 5.80369 17.8997 1.25 12 1.25ZM9.00897 11H7V13H9.00897V11ZM13.0045 13V11H10.9955V13H13.0045ZM17 11H14.991V13H17V11Z" fill={color}/>
</Svg>
)
}
