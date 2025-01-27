import { Colors } from '@utils/colors'
import { SemiBold } from '@utils/fonts'
import { cn, layout } from '@utils/utils'
import { View, ViewProps } from 'react-native'
import Animated from 'react-native-reanimated'

type SettGroupProps = ViewProps & {
  title?: string
  accent?: string
}
export default function SettGroup({ children, title, className, accent = Colors.accent, ...rest }: SettGroupProps) {
  return (
    <Animated.View className={cn('bg-white py-3 dark:bg-zinc-950', className)} layout={layout} {...rest}>
      {title && (
        <SemiBold
          className={'px-6 pb-1.5 pt-0.5 text-accent'}
          style={{ textTransform: 'none', opacity: 1, fontSize: 10, color: accent, marginBottom: 5 }}
        >
          {title}
        </SemiBold>
      )}
      <View style={{ gap: 8 }}>{children}</View>
    </Animated.View>
  )
}
