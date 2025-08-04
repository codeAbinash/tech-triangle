
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, HugeIconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Partial<Record<Variant, React.FC<HugeIconProps>>> = { 
	'solid-rounded': SolidRounded,
	'stroke-rounded': StrokeRounded,
}

export default function WeightScale01Icon({ variant, ...rest }: HugeIconProps) {
  const selectedVariant = variant || defaultVariant
  const Component = iconMap[selectedVariant] || iconMap[defaultVariant] || StrokeRounded
  return <Component {...rest} />
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M4.24976 15C4.24976 10.7198 7.71955 7.25 11.9998 7.25C16.28 7.25 19.7498 10.7198 19.7498 15V18.8889C19.7498 20.0451 19.5676 21.0796 18.8754 21.7989C18.1769 22.5247 17.1348 22.75 15.8886 22.75H8.11087C6.95464 22.75 5.92016 22.5678 5.2009 21.8757C4.47503 21.1771 4.24976 20.1351 4.24976 18.8889V15ZM11.9998 11.75C10.2048 11.75 8.74976 13.2051 8.74976 15C8.74976 15.4142 8.41397 15.75 7.99976 15.75C7.58554 15.75 7.24976 15.4142 7.24976 15C7.24976 12.3766 9.3764 10.25 11.9998 10.25C14.6231 10.25 16.7498 12.3766 16.7498 15C16.7498 15.4142 16.414 15.75 15.9998 15.75C15.5855 15.75 15.2498 15.4142 15.2498 15C15.2498 13.2051 13.7947 11.75 11.9998 11.75ZM13.6707 15.3356C13.856 14.9651 13.7058 14.5146 13.3353 14.3293C12.9648 14.1441 12.5143 14.2943 12.3291 14.6648L11.3291 16.6648C11.1439 17.0352 11.294 17.4857 11.6645 17.671C12.035 17.8562 12.4855 17.7061 12.6707 17.3356L13.6707 15.3356Z" fill={color}/>
<Path d="M18.7261 1.25C19.0375 1.24996 19.3324 1.24992 19.5674 1.27662C19.8012 1.3032 20.164 1.37197 20.4349 1.67057C20.5589 1.80726 20.6525 1.97081 20.706 2.15085C20.8269 2.55702 20.6733 2.90898 20.5628 3.11537C20.4533 3.31992 20.1931 3.68867 20.0221 3.93101C19.6021 4.52742 19.2746 4.99249 18.7965 5.29516C18.6396 5.39455 18.4731 5.47864 18.2998 5.54645C17.7765 5.75111 17.1984 5.75066 16.438 5.75007H7.562C6.80156 5.75066 6.22352 5.75111 5.70022 5.54645C5.52685 5.47864 5.36041 5.39455 5.20344 5.29516C4.72541 4.99249 4.39791 4.52744 3.97792 3.93103C3.80686 3.68868 3.5467 3.31992 3.4372 3.11537C3.32672 2.90898 3.1731 2.55703 3.29393 2.15085C3.34749 1.97081 3.44103 1.80726 3.56507 1.67057C3.83601 1.37197 4.19881 1.3032 4.43261 1.27662C4.66757 1.24992 4.96251 1.24996 5.27392 1.25H18.7261Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M10 4C10.5523 4 11 4.44772 11 5V8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8V5C9 4.44772 9.44772 4 10 4ZM14 4C14.5523 4 15 4.44772 15 5V8C15 8.55228 14.5523 9 14 9C13.4477 9 13 8.55228 13 8V5C13 4.44772 13.4477 4 14 4Z" fill={color}/>
</Svg>
)
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19 15V18.8889C19 21.1138 18.2644 22 15.8889 22H8.11111C5.88617 22 5 21.2644 5 18.8889V15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M12 17L13 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M16.3124 5H7.68756C6.80396 5 6.36216 5 5.97341 4.84796C5.84428 4.79746 5.72076 4.73499 5.60466 4.66148C5.25513 4.44018 5.01007 4.09284 4.51994 3.39815C4.13795 2.85675 3.94696 2.58604 4.0128 2.3647C4.03364 2.29467 4.07039 2.22977 4.1205 2.17455C4.27889 2 4.6232 2 5.31184 2H18.6882C19.3768 2 19.7211 2 19.8795 2.17455C19.9296 2.22977 19.9664 2.29467 19.9872 2.3647C20.053 2.58604 19.862 2.85675 19.4801 3.39815C18.9899 4.09283 18.7449 4.44019 18.3953 4.66148C18.2792 4.73499 18.1557 4.79746 18.0266 4.84796C17.6378 5 17.196 5 16.3124 5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M14 8V5M10 8V5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}
