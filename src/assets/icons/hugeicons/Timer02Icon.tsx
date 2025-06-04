
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

export default function Timer02Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2 22H13C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.36745 4 4.49744 7.50005 4 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M18.5 5.5L19.5 4.5M5.5 4.5L6.5 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.5001 9.00003L13.5608 11.9394M13.5608 11.9394C13.2893 11.6679 12.9143 11.5 12.5001 11.5C11.6717 11.5 11.0001 12.1716 11.0001 13C11.0001 13.8285 11.6717 14.5 12.5001 14.5C13.3285 14.5 14.0001 13.8285 14.0001 13C14.0001 12.5858 13.8322 12.2108 13.5608 11.9394Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M12.5 3.5V2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10.5 2H14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2 15H5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2 19H7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M18 5.5L19.5 4.5M5.5 4.5L7 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2 22H13.1111C18.0203 22 22 17.9706 22 13C22 8.02944 18.0203 4 13.1111 4C8.5782 4 4.83777 7.4354 4.29099 11.875" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M13 4V2M10.5 2H15.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.5 9L13.5607 11.9393M13.5607 11.9393C13.2892 11.6679 12.9142 11.5 12.5 11.5C11.6716 11.5 11 12.1716 11 13C11 13.8284 11.6716 14.5 12.5 14.5C13.3284 14.5 14 13.8284 14 13C14 12.5858 13.8321 12.2108 13.5607 11.9393Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2 15H5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2 19H7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M4.67685 3.94541C4.9832 3.48588 5.60407 3.3617 6.0636 3.66806L7.5636 4.66806C8.02312 4.97441 8.1473 5.59528 7.84095 6.05481C7.53459 6.51434 6.91372 6.63851 6.4542 6.33216L4.9542 5.33216C4.49467 5.0258 4.37049 4.40493 4.67685 3.94541ZM20.3409 3.94541C20.6473 4.40493 20.5231 5.0258 20.0636 5.33216L18.5636 6.33216C18.1041 6.63851 17.4832 6.51434 17.1768 6.05481C16.8705 5.59528 16.9947 4.97441 17.4542 4.66806L18.9542 3.66806C19.4137 3.3617 20.0346 3.48588 20.3409 3.94541Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.9921 5.3154C8.98008 5.3154 5.76262 8.08979 5.27562 12.044C5.20811 12.5922 4.70903 12.9818 4.16089 12.9143C3.61274 12.8468 3.22311 12.3477 3.29062 11.7996C3.89717 6.87463 7.93836 3.3154 12.9921 3.3154C18.4653 3.3154 22.9921 7.53571 22.9921 13.0468C22.9921 18.5579 18.5931 23.0001 13.1199 23.0001H2.00879C1.4565 23.0001 1.00879 22.5524 1.00879 22.0001C1.00879 21.4478 1.4565 21.0001 2.00879 21.0001H13.1199C17.4651 21.0001 20.9921 17.4768 20.9921 13.0468C20.9921 8.61679 17.3374 5.3154 12.9921 5.3154Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.50879 2C9.50879 1.44772 9.9565 1 10.5088 1H15.5088C16.0611 1 16.5088 1.44772 16.5088 2C16.5088 2.55228 16.0611 3 15.5088 3H14.0088V4C14.0088 4.55228 13.5611 5 13.0088 5C12.4565 5 12.0088 4.55228 12.0088 4V3H10.5088C9.9565 3 9.50879 2.55228 9.50879 2Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M17.2159 8.29289C17.6064 8.68342 17.6064 9.31658 17.2159 9.70711L14.8364 12.0866C14.9476 12.3696 15.0088 12.6779 15.0088 13C15.0088 14.3807 13.8895 15.5 12.5088 15.5C11.1281 15.5 10.0088 14.3807 10.0088 13C10.0088 11.6193 11.1281 10.5 12.5088 10.5C12.8309 10.5 13.1392 10.5612 13.4222 10.6724L15.8017 8.29289C16.1922 7.90237 16.8254 7.90237 17.2159 8.29289Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M1.00879 15C1.00879 14.4477 1.4565 14 2.00879 14H5.00879C5.56107 14 6.00879 14.4477 6.00879 15C6.00879 15.5523 5.56107 16 5.00879 16H2.00879C1.4565 16 1.00879 15.5523 1.00879 15Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M1.00879 18.5C1.00879 17.9477 1.4565 17.5 2.00879 17.5H7.00879C7.56107 17.5 8.00879 17.9477 8.00879 18.5C8.00879 19.0523 7.56107 19.5 7.00879 19.5H2.00879C1.4565 19.5 1.00879 19.0523 1.00879 18.5Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M13 22C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.02944 4 4 8.02944 4 13C4 17.9706 8.02944 22 13 22ZM13.5607 11.9393C13.8321 12.2108 14 12.5858 14 13C14 13.8284 13.3284 14.5 12.5 14.5C11.6716 14.5 11 13.8284 11 13C11 12.1716 11.6716 11.5 12.5 11.5C12.9142 11.5 13.2892 11.6679 13.5607 11.9393Z" fill={color}/>
<Path d="M2 22H13C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.36745 4 4.49744 7.50005 4 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M18.5 5.5L19.5 4.5M5.5 4.5L6.5 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M16.5001 9.00003L13.5608 11.9394M13.5608 11.9394C13.2893 11.6679 12.9143 11.5 12.5001 11.5C11.6717 11.5 11.0001 12.1716 11.0001 13C11.0001 13.8285 11.6717 14.5 12.5001 14.5C13.3285 14.5 14.0001 13.8285 14.0001 13C14.0001 12.5858 13.8322 12.2108 13.5608 11.9394Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M12.5 3.5V2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10.5 2H14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2 15H5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2 19H7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2 22H13C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.36745 4 4.49744 7.50005 4 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M18.5 5.5L19.5 4.5M5.5 4.5L6.5 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M16.5001 9.00003L13.5608 11.9394M13.5608 11.9394C13.2893 11.6679 12.9143 11.5 12.5001 11.5C11.6717 11.5 11.0001 12.1716 11.0001 13C11.0001 13.8285 11.6717 14.5 12.5001 14.5C13.3285 14.5 14.0001 13.8285 14.0001 13C14.0001 12.5858 13.8322 12.2108 13.5608 11.9394Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M12.5 3.5V2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M10.5 2H14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M2 15H5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2 19H7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M4.79302 3.91789C5.18354 3.52737 5.8167 3.52737 6.20723 3.91789L7.20723 4.91789C7.59775 5.30842 7.59775 5.94158 7.20723 6.33211C6.8167 6.72263 6.18354 6.72263 5.79302 6.33211L4.79302 5.33211C4.40249 4.94158 4.40249 4.30842 4.79302 3.91789ZM20.2072 3.91789C20.5978 4.30842 20.5978 4.94158 20.2072 5.33211L19.2072 6.33211C18.8167 6.72263 18.1835 6.72263 17.793 6.33211C17.4025 5.94158 17.4025 5.30842 17.793 4.91789L18.793 3.91789C19.1835 3.52737 19.8167 3.52737 20.2072 3.91789Z" fill={color}/>
<Path d="M17.2071 8.41789C17.5976 8.80842 17.5976 9.44158 17.2071 9.83211L14.8276 12.2116C14.9388 12.4946 15 12.8029 15 13.125C15 14.5057 13.8807 15.625 12.5 15.625C11.1193 15.625 10 14.5057 10 13.125C10 11.7443 11.1193 10.625 12.5 10.625C12.8221 10.625 13.1304 10.6862 13.4134 10.7974L15.7929 8.41789C16.1834 8.02737 16.8166 8.02737 17.2071 8.41789Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.5 2.125C9.5 1.57272 9.94772 1.125 10.5 1.125H14.5C15.0523 1.125 15.5 1.57272 15.5 2.125C15.5 2.67728 15.0523 3.125 14.5 3.125H13.5V3.625C13.5 4.17728 13.0523 4.625 12.5 4.625C11.9477 4.625 11.5 4.17728 11.5 3.625V3.125H10.5C9.94772 3.125 9.5 2.67728 9.5 2.125Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.9773 5.325C8.94624 5.325 5.58436 8.36561 5.15317 12.2571C5.09387 12.7923 4.61091 13.1783 4.07444 13.1191C3.53798 13.0599 3.15116 12.5781 3.21046 12.0429C3.75155 7.15949 7.95376 3.375 12.9773 3.375C18.3746 3.375 22.75 7.74022 22.75 13.125C22.75 18.5098 18.3746 22.875 12.9773 22.875H2.22727C1.68754 22.875 1.25 22.4385 1.25 21.9C1.25 21.3615 1.68754 20.925 2.22727 20.925H12.9773C17.2951 20.925 20.7955 17.4328 20.7955 13.125C20.7955 8.81718 17.2951 5.325 12.9773 5.325ZM1.25 15.075C1.25 14.5365 1.68754 14.1 2.22727 14.1H5.15909C5.69882 14.1 6.13636 14.5365 6.13636 15.075C6.13636 15.6135 5.69882 16.05 5.15909 16.05H2.22727C1.68754 16.05 1.25 15.6135 1.25 15.075ZM1.25 18.4875C1.25 17.949 1.68754 17.5125 2.22727 17.5125H7.11364C7.65337 17.5125 8.09091 17.949 8.09091 18.4875C8.09091 19.026 7.65337 19.4625 7.11364 19.4625H2.22727C1.68754 19.4625 1.25 19.026 1.25 18.4875Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M4.79302 3.91789C5.18354 3.52737 5.8167 3.52737 6.20723 3.91789L7.20723 4.91789C7.59775 5.30842 7.59775 5.94158 7.20723 6.33211C6.8167 6.72263 6.18354 6.72263 5.79302 6.33211L4.79302 5.33211C4.40249 4.94158 4.40249 4.30842 4.79302 3.91789ZM20.2072 3.91789C20.5978 4.30842 20.5978 4.94158 20.2072 5.33211L19.2072 6.33211C18.8167 6.72263 18.1835 6.72263 17.793 6.33211C17.4025 5.94158 17.4025 5.30842 17.793 4.91789L18.793 3.91789C19.1835 3.52737 19.8167 3.52737 20.2072 3.91789Z" fill={color}/>
<Path opacity="0.4" d="M17.2071 8.41789C17.5976 8.80842 17.5976 9.44158 17.2071 9.83211L14.8276 12.2116C14.9388 12.4946 15 12.8029 15 13.125C15 14.5057 13.8807 15.625 12.5 15.625C11.1193 15.625 10 14.5057 10 13.125C10 11.7443 11.1193 10.625 12.5 10.625C12.8221 10.625 13.1304 10.6862 13.4134 10.7974L15.7929 8.41789C16.1834 8.02737 16.8166 8.02737 17.2071 8.41789Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M9.5 2.125C9.5 1.57272 9.94772 1.125 10.5 1.125H14.5C15.0523 1.125 15.5 1.57272 15.5 2.125C15.5 2.67728 15.0523 3.125 14.5 3.125H13.5V3.625C13.5 4.17728 13.0523 4.625 12.5 4.625C11.9477 4.625 11.5 4.17728 11.5 3.625V3.125H10.5C9.94772 3.125 9.5 2.67728 9.5 2.125Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12.9773 5.325C8.94624 5.325 5.58436 8.3656 5.15317 12.2571C5.09387 12.7923 4.61091 13.1783 4.07444 13.1191C3.53798 13.0599 3.15116 12.5781 3.21046 12.0429C3.75155 7.15949 7.95376 3.375 12.9773 3.375C18.3746 3.375 22.75 7.74022 22.75 13.125C22.75 18.5098 18.3746 22.875 12.9773 22.875H2.22727C1.68754 22.875 1.25 22.4385 1.25 21.9C1.25 21.3615 1.68754 20.925 2.22727 20.925H12.9773C17.2951 20.925 20.7955 17.4328 20.7955 13.125C20.7955 8.81718 17.2951 5.325 12.9773 5.325Z" fill={color}/>
<Path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M1.25 15.0766C1.25 14.5381 1.68754 14.1016 2.22727 14.1016H5.15909C5.69882 14.1016 6.13636 14.5381 6.13636 15.0766C6.13636 15.615 5.69882 16.0516 5.15909 16.0516H2.22727C1.68754 16.0516 1.25 15.615 1.25 15.0766ZM1.25 18.4891C1.25 17.9506 1.68754 17.5141 2.22727 17.5141H7.11364C7.65337 17.5141 8.09091 17.9506 8.09091 18.4891C8.09091 19.0275 7.65337 19.4641 7.11364 19.4641H2.22727C1.68754 19.4641 1.25 19.0275 1.25 18.4891Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M2 22H13C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.36745 4 4.49744 7.50005 4 12" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M18.5 5.5L20 4M6 4L7.5 5.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M16.5001 9.00003L13.5608 11.9394M13.5608 11.9394C13.2893 11.6679 12.9143 11.5 12.5001 11.5C11.6717 11.5 11.0001 12.1716 11.0001 13C11.0001 13.8285 11.6717 14.5 12.5001 14.5C13.3285 14.5 14.0001 13.8285 14.0001 13C14.0001 12.5858 13.8322 12.2108 13.5608 11.9394Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M12.5 3.5V2M9.5 2H15.5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M2 15H5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M2 18.5H7" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M9.14453 2.91304H11.0493V3.97634C9.79307 4.16567 8.61329 4.60057 7.56248 5.23104L6.48554 4.14941L5.13867 5.50214L6.01621 6.3835C4.35006 7.9061 3.22039 10.0083 2.9601 12.3732L4.85333 12.5834C5.27354 8.76559 8.54979 5.78261 12.4781 5.78261C16.686 5.78261 20.0972 9.2086 20.0972 13.4348C20.0972 17.661 16.686 21.087 12.4781 21.087H2.00195V23H12.4781C17.738 23 22.002 18.7175 22.002 13.4348C22.002 10.651 20.8179 8.14491 18.928 6.39692L19.8189 5.50214L18.472 4.14941L17.3887 5.23741C16.0822 4.44624 14.5712 3.96123 12.9541 3.8813V2.91304H14.8588V1H9.14453V2.91304ZM12.002 11.0438C12.3088 11.0438 12.6024 11.1023 12.8719 11.2087L15.1381 8.93262L16.485 10.2853L14.2188 12.5614C14.3247 12.8321 14.383 13.1269 14.383 13.4351C14.383 14.7557 13.317 15.8264 12.002 15.8264C10.6871 15.8264 9.62109 14.7557 9.62109 13.4351C9.62109 12.1144 10.6871 11.0438 12.002 11.0438ZM4.8591 16.3043H2.00195V14.3913H4.8591V16.3043ZM2.00195 19.6522H6.76386V17.7391H2.00195V19.6522Z" fill={color}/>
</Svg>
)
}
