import { SUB_TEXT_SIZE } from '@components/values'
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
    <Animated.View
      className={cn('bg-card py-3 mx-3.5 ', className)}
      layout={layout}
      {...rest}
      style={{
        borderRadius: 20,
      }}
    >
      {title && (
        <SemiBold
          className={'px-5 pb-1.5 text-accent'}
          style={{ textTransform: 'none', opacity: 1, fontSize: SUB_TEXT_SIZE, color: accent, marginBottom: 5 }}
        >
          {title}
        </SemiBold>
      )}
      <View style={{ gap: 8 }}>{children}</View>
    </Animated.View>
  )
}
