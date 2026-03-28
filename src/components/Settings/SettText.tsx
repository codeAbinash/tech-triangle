import { SMALL_TEXT_SIZE } from '@components/values'
import { F, Medium } from '@utils/fonts'
import { cn } from '@utils/utils'
import { TextProps } from 'react-native'

export default function SettText({ children, className, ...rest }: TextProps) {
  const newLocal = cn('px-5 text-zinc-500 dark:text-zinc-500', className)
  return (
    <Medium className={newLocal} {...rest} style={{ fontSize: 12, lineHeight: 12 * 1.5 }}>
      {children}
    </Medium>
  )
}
