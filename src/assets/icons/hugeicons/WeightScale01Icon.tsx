
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

export default function WeightScale01Icon({ variant, ...rest }: HugeIconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
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

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M18 22C18.5523 22 19 21.5523 19 21V15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15V21C5 21.5523 5.44772 22 6 22H18Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M20 2H4L5.1094 3.6641C5.6658 4.4987 6.60249 5 7.60555 5H16.3944C17.3975 5 18.3342 4.4987 18.8906 3.6641L20 2Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M8 15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15M11.5 15.5L12.5 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M14 8V5M10 8V5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M3.33875 1.64611C3.46926 1.40224 3.7234 1.25 4 1.25H20C20.2766 1.25 20.5307 1.40224 20.6613 1.64611C20.7918 1.88997 20.7775 2.18588 20.624 2.41603L19.5146 4.08013C18.8191 5.12337 17.6483 5.75 16.3944 5.75H7.60555C6.35173 5.75 5.18086 5.12337 4.48536 4.08013L3.37596 2.41603C3.22254 2.18588 3.20823 1.88997 3.33875 1.64611Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M12 7.25C7.71979 7.25 4.25 10.7198 4.25 15L4.25 21C4.25 21.9665 5.0335 22.75 6 22.75L18 22.75C18.9665 22.75 19.75 21.9665 19.75 21L19.75 15C19.75 10.7198 16.2802 7.25 12 7.25ZM8.75 15C8.75 13.2051 10.2051 11.75 12 11.75C13.7949 11.75 15.25 13.2051 15.25 15C15.25 15.4142 15.5858 15.75 16 15.75C16.4142 15.75 16.75 15.4142 16.75 15C16.75 12.3766 14.6234 10.25 12 10.25C9.37665 10.25 7.25 12.3766 7.25 15C7.25 15.4142 7.58579 15.75 8 15.75C8.41421 15.75 8.75 15.4142 8.75 15ZM13.124 14.416C13.3538 14.0714 13.2607 13.6057 12.916 13.376C12.5714 13.1462 12.1057 13.2393 11.876 13.584L10.876 15.084C10.6462 15.4286 10.7393 15.8943 11.084 16.124C11.4286 16.3538 11.8943 16.2607 12.124 15.916L13.124 14.416Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M11 5V8H9V5H11ZM15 5V8H13V5H15Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M19 15V18.8889C19 21.1138 18.2644 22 15.8889 22H8.11111C5.88617 22 5 21.2644 5 18.8889V15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z" fill={color}/>
<Path d="M19 15V18.8889C19 21.1138 18.2644 22 15.8889 22H8.11111C5.88617 22 5 21.2644 5 18.8889V15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M12 17L13 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M16.3124 5H7.68756C6.80396 5 6.36216 5 5.97341 4.84796C5.84428 4.79746 5.72076 4.73499 5.60466 4.66148C5.25513 4.44018 5.01007 4.09284 4.51994 3.39815C4.13795 2.85675 3.94696 2.58604 4.0128 2.3647C4.03364 2.29467 4.07039 2.22977 4.1205 2.17455C4.27889 2 4.6232 2 5.31184 2H18.6882C19.3768 2 19.7211 2 19.8795 2.17455C19.9296 2.22977 19.9664 2.29467 19.9872 2.3647C20.053 2.58604 19.862 2.85675 19.4801 3.39815C18.9899 4.09283 18.7449 4.44019 18.3953 4.66148C18.2792 4.73499 18.1557 4.79746 18.0266 4.84796C17.6378 5 17.196 5 16.3124 5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M14 8V5M10 8V5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19 15V18.8889C19 21.1138 18.2644 22 15.8889 22H8.11111C5.88617 22 5 21.2644 5 18.8889V15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path opacity="0.4" d="M12 17L13 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path d="M16.3124 5H7.68756C6.80396 5 6.36216 5 5.97341 4.84796C5.84428 4.79746 5.72076 4.73499 5.60466 4.66148C5.25513 4.44018 5.01007 4.09284 4.51994 3.39815C4.13795 2.85675 3.94696 2.58604 4.0128 2.3647C4.03364 2.29467 4.07039 2.22977 4.1205 2.17455C4.27889 2 4.6232 2 5.31184 2H18.6882C19.3768 2 19.7211 2 19.8795 2.17455C19.9296 2.22977 19.9664 2.29467 19.9872 2.3647C20.053 2.58604 19.862 2.85675 19.4801 3.39815C18.9899 4.09283 18.7449 4.44019 18.3953 4.66148C18.2792 4.73499 18.1557 4.79746 18.0266 4.84796C17.6378 5 17.196 5 16.3124 5Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
<Path opacity="0.4" d="M14 8V5M10 8V5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M4.24976 15C4.24976 10.7198 7.71955 7.25 11.9998 7.25C16.28 7.25 19.7498 10.7198 19.7498 15V18.8889C19.7498 20.0451 19.5676 21.0796 18.8754 21.7989C18.1769 22.5247 17.1348 22.75 15.8886 22.75H8.11087C6.95464 22.75 5.92016 22.5678 5.2009 21.8757C4.47503 21.1771 4.24976 20.1351 4.24976 18.8889V15ZM11.9998 11.75C10.2048 11.75 8.74976 13.2051 8.74976 15C8.74976 15.4142 8.41397 15.75 7.99976 15.75C7.58554 15.75 7.24976 15.4142 7.24976 15C7.24976 12.3766 9.3764 10.25 11.9998 10.25C14.6231 10.25 16.7498 12.3766 16.7498 15C16.7498 15.4142 16.414 15.75 15.9998 15.75C15.5855 15.75 15.2498 15.4142 15.2498 15C15.2498 13.2051 13.7947 11.75 11.9998 11.75ZM13.6707 15.3356C13.856 14.9651 13.7058 14.5146 13.3353 14.3293C12.9648 14.1441 12.5143 14.2943 12.3291 14.6648L11.3291 16.6648C11.1439 17.0352 11.294 17.4857 11.6645 17.671C12.035 17.8562 12.4855 17.7061 12.6707 17.3356L13.6707 15.3356Z" fill={color}/>
<Path d="M18.7261 1.25C19.0375 1.24996 19.3324 1.24992 19.5674 1.27662C19.8012 1.3032 20.164 1.37197 20.4349 1.67057C20.5589 1.80726 20.6525 1.97081 20.706 2.15085C20.8269 2.55702 20.6733 2.90898 20.5628 3.11537C20.4533 3.31992 20.1931 3.68867 20.0221 3.93101C19.6021 4.52742 19.2746 4.99249 18.7965 5.29516C18.6396 5.39455 18.4731 5.47864 18.2998 5.54645C17.7765 5.75111 17.1984 5.75066 16.438 5.75007H7.562C6.80156 5.75066 6.22352 5.75111 5.70022 5.54645C5.52685 5.47864 5.36041 5.39455 5.20344 5.29516C4.72541 4.99249 4.39791 4.52744 3.97792 3.93103C3.80686 3.68868 3.5467 3.31992 3.4372 3.11537C3.32672 2.90898 3.1731 2.55703 3.29393 2.15085C3.34749 1.97081 3.44103 1.80726 3.56507 1.67057C3.83601 1.37197 4.19881 1.3032 4.43261 1.27662C4.66757 1.24992 4.96251 1.24996 5.27392 1.25H18.7261Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M10 4C10.5523 4 11 4.44772 11 5V8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8V5C9 4.44772 9.44772 4 10 4ZM14 4C14.5523 4 15 4.44772 15 5V8C15 8.55228 14.5523 9 14 9C13.4477 9 13 8.55228 13 8V5C13 4.44772 13.4477 4 14 4Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M4.24976 15C4.24976 10.7198 7.71955 7.25 11.9998 7.25C16.28 7.25 19.7498 10.7198 19.7498 15V18.8889C19.7498 20.0451 19.5676 21.0796 18.8754 21.7989C18.1769 22.5247 17.1348 22.75 15.8886 22.75H8.11087C6.95464 22.75 5.92016 22.5678 5.2009 21.8757C4.47503 21.1771 4.24976 20.1351 4.24976 18.8889V15Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M11.9998 11.75C10.2048 11.75 8.74976 13.2051 8.74976 15C8.74976 15.4142 8.41397 15.75 7.99976 15.75C7.58554 15.75 7.24976 15.4142 7.24976 15C7.24976 12.3766 9.3764 10.25 11.9998 10.25C14.6231 10.25 16.7498 12.3766 16.7498 15C16.7498 15.4142 16.414 15.75 15.9998 15.75C15.5855 15.75 15.2498 15.4142 15.2498 15C15.2498 13.2051 13.7947 11.75 11.9998 11.75Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M13.3353 14.3293C13.7058 14.5146 13.856 14.9651 13.6707 15.3356L12.6707 17.3356C12.4855 17.7061 12.035 17.8562 11.6645 17.671C11.294 17.4857 11.1439 17.0352 11.3291 16.6648L12.3291 14.6648C12.5143 14.2943 12.9648 14.1441 13.3353 14.3293Z" fill={color}/>
<Path d="M18.7261 1.25C19.0375 1.24996 19.3324 1.24992 19.5674 1.27662C19.8012 1.3032 20.164 1.37197 20.4349 1.67057C20.5589 1.80726 20.6525 1.97081 20.706 2.15085C20.8269 2.55702 20.6733 2.90898 20.5628 3.11537C20.4533 3.31992 20.1931 3.68867 20.0221 3.93101C19.6021 4.52742 19.2746 4.99249 18.7965 5.29516C18.6396 5.39455 18.4731 5.47864 18.2998 5.54645C17.7765 5.75111 17.1984 5.75066 16.438 5.75007H7.562C6.80156 5.75066 6.22352 5.75111 5.70022 5.54645C5.52685 5.47864 5.36041 5.39455 5.20344 5.29516C4.72541 4.99249 4.39791 4.52744 3.97792 3.93103C3.80686 3.68868 3.5467 3.31992 3.4372 3.11537C3.32672 2.90898 3.1731 2.55703 3.29393 2.15085C3.34749 1.97081 3.44103 1.80726 3.56507 1.67057C3.83601 1.37197 4.19881 1.3032 4.43261 1.27662C4.66757 1.24992 4.96251 1.24996 5.27392 1.25H18.7261Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M8.99951 7.85201V5C8.99951 4.44772 9.44723 4 9.99951 4C10.5518 4 10.9995 4.44772 10.9995 5V7.31392C10.2993 7.40413 9.62829 7.5878 8.99951 7.85201ZM12.9995 7.31392V5C12.9995 4.44772 13.4472 4 13.9995 4C14.5518 4 14.9995 4.44772 14.9995 5V7.85201C14.3707 7.5878 13.6998 7.40413 12.9995 7.31392Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M19 8H5V22H19V8Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M20 2H4L6 5H18L20 2Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M16 16C16 13.7909 14.2091 12 12 12C9.79086 12 8 13.7909 8 16" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M12 17L13 15" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M14 8V5M10 8V5" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: HugeIconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M3.33875 1.64611C3.46926 1.40224 3.7234 1.25 4 1.25H20C20.2766 1.25 20.5307 1.40224 20.6613 1.64611C20.7918 1.88997 20.7775 2.18588 20.624 2.41603L18.624 5.41603C18.4849 5.62467 18.2508 5.75 18 5.75H6C5.74924 5.75 5.51506 5.62467 5.37596 5.41603L3.37596 2.41603C3.22254 2.18588 3.20823 1.88997 3.33875 1.64611Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25L19 7.25C19.4142 7.25 19.75 7.58579 19.75 8V22C19.75 22.4142 19.4142 22.75 19 22.75L5 22.75C4.58579 22.75 4.25 22.4142 4.25 22L4.25 8ZM12 12.75C10.2051 12.75 8.75 14.2051 8.75 16H7.25C7.25 13.3766 9.37665 11.25 12 11.25C14.6234 11.25 16.75 13.3766 16.75 16H15.25C15.25 14.2051 13.7949 12.75 12 12.75ZM12.6698 17.3354L13.6698 15.3354L12.3281 14.6646L11.3281 16.6646L12.6698 17.3354Z" fill={color}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M11 5V8H9V5H11ZM15 5V8H13V5H15Z" fill={color}/>
</Svg>
)
}
