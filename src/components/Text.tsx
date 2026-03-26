import { Medium } from '@utils/fonts'
import { useMemo } from 'react'
import { type TextProps, View } from 'react-native'
import { MAIN_TEXT_SIZE } from './values'

export function TxtAcc({ children, size, style, ...rest }: TextProps & { size?: number }) {
  return (
    <Medium className='text-accent' style={[{ fontSize: size || MAIN_TEXT_SIZE }, style]} {...rest}>
      {children}
    </Medium>
  )
}

type TxtProps = TextProps & {
  size?: number
  skeleton?: boolean | string | number | object | undefined | null
}

export function Txt({ children, size, style, skeleton, ...rest }: TxtProps) {
  if (skeleton) return <TxtSkeleton />
  return (
    <Medium className='text-zinc-500' style={[{ fontSize: size || MAIN_TEXT_SIZE }, style]} {...rest}>
      {children}
    </Medium>
  )
}

export function TxtSkeleton() {
  const width = useMemo(() => Math.random() * 50 + 30, [])
  return <View className='rounded-md bg-zinc-200 dark:bg-zinc-800' style={{ height: 16, width: width }} />
}
