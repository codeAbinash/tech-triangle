
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

export default function Tick01Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M5 14C5 14 7 14.5 8.5 17.5C8.5 17.5 14.0588 8.33333 19 6.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M19.9378 5.65241C20.1299 6.1702 19.8659 6.7457 19.3481 6.93782C18.2893 7.33068 17.1276 8.14841 15.9516 9.22885C14.7868 10.299 13.6643 11.574 12.6796 12.8107C11.6968 14.0449 10.8633 15.2254 10.2753 16.0981C9.98166 16.5339 9.75008 16.8917 9.59261 17.1394C9.51389 17.2632 9.45374 17.3594 9.41368 17.424L9.36885 17.4966L9.35809 17.5142L9.35569 17.5182C9.16686 17.8294 8.82329 18.0143 8.45951 17.9994C8.09567 17.9846 7.76866 17.7732 7.60581 17.4475C6.92848 16.0928 6.15935 15.3411 5.59956 14.934C5.31727 14.7287 5.08223 14.6067 4.93004 14.5391C4.85386 14.5052 4.79837 14.485 4.76806 14.4747C4.75528 14.4703 4.74701 14.4678 4.74357 14.4668C4.2162 14.3269 3.89733 13.7888 4.03009 13.2577C4.16404 12.7219 4.70698 12.3962 5.24277 12.5301C5.26751 12.5366 5.24397 12.5304 5.24397 12.5304L5.24521 12.5307L5.24783 12.5314L5.25365 12.5329L5.26751 12.5366C5.27773 12.5394 5.28991 12.5428 5.30396 12.5469C5.33206 12.5551 5.36767 12.5662 5.41014 12.5805C5.49507 12.6093 5.60755 12.6516 5.74231 12.7115C6.01199 12.8313 6.37071 13.0218 6.77591 13.3165C7.31867 13.7113 7.93487 14.2857 8.52893 15.1112C8.55757 15.0684 8.58683 15.0249 8.6167 14.9805C9.22537 14.0772 10.0905 12.8515 11.115 11.5648C12.1376 10.2807 13.3313 8.92028 14.5985 7.75607C15.8545 6.60213 17.2406 5.58653 18.6524 5.06272C19.1702 4.87061 19.7457 5.13462 19.9378 5.65241Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M8.5 18C8.5 18 14.0588 8.83333 19 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19.9375 6.15241C20.1297 6.6702 19.8657 7.2457 19.3479 7.43782C18.289 7.83068 17.1274 8.64841 15.9514 9.72885C14.7866 10.799 13.6641 12.074 12.6793 13.3107C11.6965 14.5449 10.8631 15.7254 10.2751 16.5981C9.98143 17.0339 9.74984 17.3917 9.59237 17.6394C9.51365 17.7632 9.45351 17.8594 9.41344 17.924L9.36861 17.9966L9.35785 18.0142L9.35545 18.0182C9.17177 18.3209 8.84114 18.5048 8.48701 18.5002C8.13282 18.4956 7.8075 18.304 7.63176 17.9964C6.68252 16.3352 5.89836 15.5873 5.42654 15.257C5.19208 15.0929 5.03257 15.0302 4.96242 15.0079C4.94586 15.0026 4.93369 14.9994 4.92605 14.9976C4.4083 14.9597 4 14.5277 4 14.0003C4 13.448 4.44772 13.0003 5 13.0003C5.118 13.0082 5.39696 13.0397 5.56883 13.102C5.84243 13.1891 6.18292 13.3452 6.57346 13.6185C7.13325 14.0104 7.79014 14.6389 8.5059 15.6453C8.54176 15.5916 8.57862 15.5367 8.61646 15.4805C9.22514 14.5772 10.0902 13.3515 11.1148 12.0648C12.1374 10.7807 13.3311 9.42028 14.5983 8.25607C15.8543 7.10213 17.2404 6.08653 18.6521 5.56272C19.1699 5.37061 19.7454 5.63462 19.9375 6.15241Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M4 14.5C4 13.9477 4.44772 13.5 5 13.5C5.56536 13.5019 6.12449 13.804 6.57346 14.1183C7.35164 14.663 8.31748 15.665 9.36824 17.5039C9.64225 17.9834 9.47566 18.5942 8.99614 18.8682C8.51662 19.1423 7.90577 18.9757 7.63176 18.4961C6.68252 16.835 5.89836 16.087 5.42654 15.7567C5.13674 15.5539 4.96606 15.5069 4.92605 15.4973C4.4083 15.4595 4 15.0274 4 14.5Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M19.9375 6.65241C20.1297 7.1702 19.8656 7.7457 19.3479 7.93782C18.289 8.33068 17.1274 9.14841 15.9514 10.2289C14.7866 11.299 13.6641 12.574 12.6793 13.8107C11.6965 15.0449 10.8631 16.2254 10.2751 17.0981C9.96009 17.5656 9.64872 18.0366 9.35545 18.5182C9.06904 18.9903 8.45366 19.1417 7.98147 18.8553C7.50923 18.569 7.35856 17.954 7.64493 17.4817C7.73053 17.3426 7.817 17.2041 7.90464 17.0663C8.07046 16.8055 8.31177 16.4327 8.61646 15.9805C9.22513 15.0772 10.0902 13.8515 11.1148 12.5648C12.1374 11.2807 13.3311 9.92028 14.5983 8.75607C15.8542 7.60213 17.2404 6.58653 18.6521 6.06272C19.1699 5.87061 19.7454 6.13462 19.9375 6.65241Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M5 14C5 14 7 14.5 8.5 17.5C8.5 17.5 14.0588 8.33333 19 6.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M20.249 6.64431L19.3115 6.99573C18.2526 7.39262 17.091 8.21873 15.915 9.31024C14.7502 10.3914 13.6277 11.6795 12.643 12.9288C11.6602 14.1757 10.8267 15.3683 10.2387 16.2499C9.94505 16.6902 9.47655 17.4343 9.31908 17.6845L8.37935 19.25L7.5692 17.6131C6.89187 16.2446 6.12274 15.4851 5.56295 15.0739C5.28066 14.8664 4.93773 14.6669 4.70899 14.6025L3.75095 14.3605L4.23602 12.4003L5.20616 12.6453C5.80572 12.7935 6.33409 13.1421 6.7393 13.4398C7.28206 13.8386 7.89826 14.4189 8.49231 15.2529L8.58009 15.1209C9.18876 14.2083 10.0539 12.97 11.0784 11.6702C12.101 10.3728 13.2947 8.9985 14.5619 7.82237C15.8179 6.65661 17.204 5.6306 18.6158 5.10142L19.5533 4.75L20.249 6.64431Z" fill={color}/>
</Svg>
)
}
