
import React from 'react'
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Polygon, Polyline, RadialGradient, Rect, Stop } from 'react-native-svg'
import { Variant, IconProps, defaultStrokeWidth, defaultVariant, defaultColor, defaultSize } from './constants'

const iconMap: Record<Variant, React.FC<IconProps>> = {
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

export default function LatitudeIcon({ variant, ...rest }: IconProps) {
  const Component = iconMap[variant || defaultVariant]
  return <Component {...rest} />
}

function StrokeRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: IconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M22 12L2 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M20 7L4 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M20 17L4 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function StrokeStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: IconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M3.5 7H20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M2 12H22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M3.5 17H20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidStandard({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: IconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.04483 13C1.1394 14.0495 1.38137 15.0564 1.74987 16H22.2501C22.6186 15.0564 22.8606 14.0495 22.9551 13H1.04483ZM22.9551 11C22.8606 9.95055 22.6186 8.94359 22.2501 8H1.74987C1.38137 8.94359 1.1394 9.95055 1.04483 11H22.9551ZM2.77892 6H21.2211C19.2584 2.98979 15.8615 1 12 1C8.13843 1 4.74162 2.98979 2.77892 6ZM21.2211 18H2.77892C4.74162 21.0102 8.13843 23 12 23C15.8615 23 19.2584 21.0102 21.2211 18Z" fill={color}/>
</Svg>
)
}

function DuotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: IconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path opacity="0.4" d="M22 12C22 10.1786 21.513 8.47087 20.6622 7H3.33784C2.48698 8.47087 2 10.1786 2 12C2 13.8214 2.48697 15.5291 3.33783 17H20.6622C21.513 15.5291 22 13.8214 22 12Z" fill={color}/>
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17C5.06687 19.989 8.29859 22 12 22C15.7014 22 18.9331 19.989 20.6622 17C21.513 15.5291 22 13.8214 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path d="M22 12L2 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M20 7L4 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M20 17L4 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M20 17L4 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function TwotoneRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: IconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth}/>
<Path opacity="0.4" d="M22 12L2 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M20 7L4 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
<Path opacity="0.4" d="M20 17L4 17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
)
}

function SolidRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: IconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M1.86874 13C1.55761 13 1.40204 13 1.31224 13.1049C1.22244 13.2097 1.24545 13.3576 1.29146 13.6533C1.39717 14.3327 1.56701 14.991 1.79465 15.6221C1.8593 15.8014 1.89162 15.891 1.96922 15.9455C2.04682 16 2.14578 16 2.34371 16H21.6584C21.8564 16 21.9553 16 22.0329 15.9455C22.1105 15.891 22.1429 15.8014 22.2075 15.6221C22.4351 14.991 22.605 14.3327 22.7107 13.6533C22.7567 13.3576 22.7797 13.2097 22.6899 13.1049C22.6001 13 22.4445 13 22.1334 13H1.86874ZM22.1334 11C22.4445 11 22.6001 11 22.6899 10.8951C22.7797 10.7903 22.7567 10.6424 22.7107 10.3467C22.605 9.66734 22.4351 9.00897 22.2075 8.37786C22.1429 8.19863 22.1105 8.10901 22.0329 8.0545C21.9553 8 21.8564 8 21.6584 8H2.34371C2.14578 8 2.04682 8 1.96922 8.0545C1.89162 8.10901 1.8593 8.19863 1.79465 8.37786C1.56701 9.00897 1.39717 9.66735 1.29146 10.3467C1.24545 10.6424 1.22244 10.7903 1.31224 10.8951C1.40204 11 1.55761 11 1.86874 11H22.1334ZM3.69247 5.09792C3.37995 5.46772 3.22369 5.65261 3.30431 5.82631C3.38493 6 3.63687 6 4.14075 6H19.8614C20.3653 6 20.6172 6 20.6978 5.82631C20.7785 5.65261 20.6222 5.46772 20.3097 5.09792C18.3218 2.74565 15.3375 1.25 12.0011 1.25C8.66466 1.25 5.68039 2.74565 3.69247 5.09792ZM20.3097 18.9021C20.6222 18.5323 20.7785 18.3474 20.6978 18.1737C20.6172 18 20.3653 18 19.8614 18H4.14075C3.63687 18 3.38493 18 3.30431 18.1737C3.22369 18.3474 3.37995 18.5323 3.69247 18.9021C5.68039 21.2544 8.66466 22.75 12.0011 22.75C15.3375 22.75 18.3218 21.2544 20.3097 18.9021Z" fill={color}/>
</Svg>
)
}

function BulkRounded({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: IconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<G opacity="0.4">
<Path d="M1.86746 13C1.55633 13 1.40076 13 1.31096 13.1049C1.22116 13.2097 1.24416 13.3576 1.29018 13.6533C1.39589 14.3327 1.56573 14.991 1.79337 15.6221C1.85802 15.8014 1.89034 15.891 1.96794 15.9455C2.04554 16 2.1445 16 2.34243 16H21.6572C21.8551 16 21.9541 16 22.0317 15.9455C22.1093 15.891 22.1416 15.8014 22.2062 15.6221C22.4339 14.991 22.6037 14.3327 22.7094 13.6533C22.7554 13.3576 22.7784 13.2097 22.6886 13.1049C22.5988 13 22.4433 13 22.1321 13H1.86746Z" fill={color}/>
<Path d="M22.1321 11C22.4433 11 22.5988 11 22.6886 10.8951C22.7784 10.7903 22.7554 10.6424 22.7094 10.3467C22.6037 9.66734 22.4339 9.00897 22.2062 8.37786C22.1416 8.19863 22.1093 8.10901 22.0317 8.0545C21.9541 8 21.8551 8 21.6572 8H2.34243C2.1445 8 2.04554 8 1.96794 8.0545C1.89034 8.10901 1.85802 8.19863 1.79337 8.37786C1.56573 9.00897 1.39589 9.66735 1.29018 10.3467C1.24416 10.6424 1.22116 10.7903 1.31096 10.8951C1.40076 11 1.55633 11 1.86746 11H22.1321Z" fill={color}/>
<Path d="M3.69118 5.09792C3.37867 5.46772 3.22241 5.65261 3.30303 5.82631C3.38365 6 3.63559 6 4.13946 6H19.8601C20.364 6 20.6159 6 20.6966 5.82631C20.7772 5.65261 20.6209 5.46772 20.3084 5.09792C18.3205 2.74565 15.3362 1.25 11.9998 1.25C8.66337 1.25 5.67911 2.74565 3.69118 5.09792Z" fill={color}/>
<Path d="M20.3084 18.9021C20.6209 18.5323 20.7772 18.3474 20.6966 18.1737C20.6159 18 20.364 18 19.8601 18H4.13946C3.63559 18 3.38365 18 3.30303 18.1737C3.22241 18.3474 3.37867 18.5323 3.69119 18.9021C5.67911 21.2544 8.66337 22.75 11.9998 22.75C15.3362 22.75 18.3205 21.2544 20.3084 18.9021Z" fill={color}/>
</G>
<Path d="M1.86764 13C1.55651 13 1.40094 13 1.31114 13.1049C1.22134 13.2097 1.24435 13.3576 1.29036 13.6533C1.39608 14.3327 1.56591 14.991 1.79355 15.6221C1.8582 15.8014 1.89052 15.891 1.96812 15.9455C2.04572 16 2.14469 16 2.34261 16H21.6573C21.8553 16 21.9542 16 22.0318 15.9455C22.1094 15.891 22.1418 15.8014 22.2064 15.6221C22.434 14.991 22.6039 14.3327 22.7096 13.6533C22.7556 13.3576 22.7786 13.2097 22.6888 13.1049C22.599 13 22.4434 13 22.1323 13H1.86764Z" fill={color}/>
<Path d="M22.1323 11C22.4434 11 22.599 11 22.6888 10.8951C22.7786 10.7903 22.7556 10.6424 22.7096 10.3467C22.6039 9.66734 22.434 9.00897 22.2064 8.37786C22.1418 8.19863 22.1094 8.10901 22.0318 8.0545C21.9542 8 21.8553 8 21.6573 8H2.34261C2.14469 8 2.04572 8 1.96812 8.0545C1.89052 8.10901 1.8582 8.19863 1.79355 8.37786C1.56591 9.00897 1.39608 9.66735 1.29036 10.3467C1.24435 10.6424 1.22134 10.7903 1.31114 10.8951C1.40094 11 1.55651 11 1.86764 11H22.1323Z" fill={color}/>
</Svg>
)
}

function StrokeSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: IconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M22 12L2 12" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M21 7L3 7" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
<Path d="M21 17L3 17" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
</Svg>
)
}

function SolidSharp({ size = defaultSize, color = defaultColor, strokeWidth = defaultStrokeWidth, className, style }: IconProps) {
  return (<Svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path d="M1.25 13C1.38279 14.4334 1.79823 15.7854 2.44029 17H21.5597C22.2018 15.7854 22.6172 14.4334 22.75 13H1.25Z" fill={color}/>
<Path d="M22.75 11C22.6172 9.56655 22.2018 8.21463 21.5597 7H2.44029C1.79823 8.21463 1.38279 9.56655 1.25 11H22.75Z" fill={color}/>
<Path d="M3.80618 5H20.1938C18.2138 2.70422 15.2775 1.25 12 1.25C8.72253 1.25 5.78616 2.70422 3.80618 5Z" fill={color}/>
<Path d="M20.1938 19H3.80618C5.78616 21.2958 8.72253 22.75 12 22.75C15.2775 22.75 18.2138 21.2958 20.1938 19Z" fill={color}/>
</Svg>
)
}
