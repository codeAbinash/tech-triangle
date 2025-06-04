
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

export default function ViewIcon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12 5C16.1818 5 19.764 9.01321 21.2572 10.9622C21.7314 11.5813 21.7314 12.4187 21.2572 13.0378C19.764 14.9868 16.1818 19 12 19C7.81823 19 4.23598 14.9868 2.74283 13.0378C2.26856 12.4187 2.26857 11.5813 2.74283 10.9622C4.23598 9.01321 7.81823 5 12 5Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M22.3815 12.1545L22.3754 12.1633C22.2302 12.372 21.8157 12.9676 21.5581 13.3017C21.0364 13.9783 20.2801 14.8824 19.3424 15.7891C17.4969 17.5738 14.814 19.5 11.75 19.5C8.68603 19.5 6.00305 17.5738 4.15756 15.7891C3.21994 14.8824 2.46362 13.9783 1.94192 13.3017C1.68461 12.968 1.27049 12.373 1.12481 12.1636L1.12477 12.1636L1.11818 12.1541C0.960607 11.9077 0.960607 11.5923 1.11818 11.3459L1.12475 11.3365C1.27037 11.1272 1.68457 10.532 1.94192 10.1983C2.46362 9.52169 3.21994 8.61758 4.15756 7.71086C6.00305 5.92619 8.68603 4 11.75 4C14.814 4 17.4969 5.92619 19.3424 7.71086C20.2801 8.61758 21.0364 9.52169 21.5581 10.1983C21.8155 10.5321 22.2298 11.1275 22.3754 11.3366L22.3818 11.3459C22.5394 11.5923 22.5391 11.9082 22.3815 12.1545ZM11.75 15.5C9.67893 15.5 8 13.8211 8 11.75C8 9.67893 9.67893 8 11.75 8C13.8211 8 15.5 9.67893 15.5 11.75C15.5 13.8211 13.8211 15.5 11.75 15.5Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C7.31078 5 3.8221 9.12944 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C16.6892 19 20.1779 14.8706 21.544 12.955C21.848 12.5287 22 12.3155 22 12ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9Z" fill={color}/>
<Path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke={color} strokeWidth={strokeWidth}/>
<Path opacity="0.4" d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M5.52031 6.71298C7.22595 5.38141 9.42944 4.25 12 4.25C14.5706 4.25 16.774 5.38141 18.4797 6.71298C20.1869 8.04576 21.4487 9.61974 22.1546 10.6095L22.2078 10.6837C22.461 11.0358 22.75 11.4378 22.75 12C22.75 12.5622 22.461 12.9642 22.2078 13.3163L22.1546 13.3905C21.4487 14.3803 20.1869 15.9542 18.4797 17.287C16.774 18.6186 14.5706 19.75 12 19.75C9.42944 19.75 7.22595 18.6186 5.52031 17.287C3.81313 15.9542 2.55126 14.3803 1.84541 13.3905L1.79219 13.3163C1.53904 12.9642 1.25 12.5622 1.25 12C1.25 11.4378 1.53904 11.0358 1.79219 10.6837L1.84541 10.6095C2.55126 9.61974 3.81313 8.04576 5.52031 6.71298ZM8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M12 4.25C9.42944 4.25 7.22595 5.38141 5.52031 6.71298C3.81313 8.04576 2.55126 9.61974 1.84541 10.6095L1.79219 10.6837C1.53904 11.0358 1.25 11.4378 1.25 12C1.25 12.5622 1.53904 12.9642 1.79219 13.3163L1.84541 13.3905C2.55126 14.3803 3.81313 15.9542 5.52031 17.287C7.22595 18.6186 9.42944 19.75 12 19.75C14.5706 19.75 16.774 18.6186 18.4797 17.287C20.1869 15.9542 21.4487 14.3803 22.1546 13.3905L22.2078 13.3163C22.461 12.9642 22.75 12.5622 22.75 12C22.75 11.4378 22.461 11.0358 22.2078 10.6837L22.1546 10.6095C21.4487 9.61974 20.1869 8.04576 18.4797 6.71298C16.774 5.38141 14.5706 4.25 12 4.25Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12C15.5 13.933 13.933 15.5 12 15.5Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M12 5C17.5228 5 22 12 22 12C22 12 17.5228 19 12 19C6.47715 19 2 12 2 12C2 12 6.47715 5 12 5Z" stroke={color} strokeWidth={strokeWidth}/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M22.5789 12.253C22.3217 12.635 21.8796 13.2917 21.6816 13.5517C21.1666 14.2283 20.4201 15.1324 19.4945 16.0391C17.6728 17.8238 15.0244 19.75 11.9999 19.75C8.97538 19.75 6.32696 17.8238 4.50524 16.0391C3.5797 15.1324 2.83313 14.2283 2.31814 13.5517C2.12021 13.2917 1.67811 12.6351 1.42091 12.2531C1.34289 12.1372 1.28189 12.0466 1.24988 12C1.28189 11.9534 1.34289 11.8628 1.42091 11.7469C1.67811 11.3649 2.12021 10.7083 2.31814 10.4483C2.83313 9.77169 3.5797 8.86758 4.50524 7.96086C6.32696 6.17619 8.97538 4.25 11.9999 4.25C15.0244 4.25 17.6728 6.17619 19.4945 7.96086C20.4201 8.86758 21.1666 9.77169 21.6816 10.4483C21.8796 10.7083 22.3217 11.365 22.5789 11.747C22.6569 11.8628 22.7179 11.9534 22.7499 12C22.7179 12.0466 22.6569 12.1372 22.5789 12.253ZM11.9999 15.5C10.0669 15.5 8.49988 13.933 8.49988 12C8.49988 10.067 10.0669 8.5 11.9999 8.5C13.9329 8.5 15.4999 10.067 15.4999 12C15.4999 13.933 13.9329 15.5 11.9999 15.5Z" fill={color}/>
</Svg>
)
}
