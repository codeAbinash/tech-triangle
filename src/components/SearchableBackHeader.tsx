import Cancel01Icon from '@hugeicons/Cancel01Icon'
import Search01Icon from '@hugeicons/Search01Icon'
import { Colors } from '@utils/colors'
import { SemiBold } from '@utils/fonts'
import type { StackNav } from '@utils/types'
import { useRef, useState } from 'react'
import { type TextInput, View, useColorScheme } from 'react-native'
import Animated, { FadeIn, FadeInRight, FadeOut, FadeOutRight, ZoomIn } from 'react-native-reanimated'
import BackHeader from './BackHeader'
import HeaderSearch from './HeaderSearch'
import Press from './Press'
import { HEADING_SIZE } from './values'

const SEARCH_ENTER = FadeInRight.duration(250)
const SEARCH_EXIT = FadeOutRight.duration(200)
const TITLE_ENTER = FadeIn.duration(300)
const TITLE_EXIT = FadeOut.duration(150)
const ICON_ENTER = ZoomIn.duration(200)
const ICON_SIZE = 20
const BUTTON_SIZE = 42

type SearchableBackHeaderProps = {
  navigation?: StackNav
  title?: string
  onBackPress?: () => void
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
}

function AnimatedTitle({ title }: { title?: string }) {
  return (
    <Animated.View entering={TITLE_ENTER} exiting={TITLE_EXIT}>
      <SemiBold
        style={{ fontSize: HEADING_SIZE, textAlign: 'center', paddingBottom: 5 }}
        className='text'
        numberOfLines={1}
      >
        {title}
      </SemiBold>
    </Animated.View>
  )
}

export default function SearchableBackHeader({
  navigation,
  title,
  onBackPress,
  value,
  onChangeText,
  placeholder = 'Search',
}: SearchableBackHeaderProps) {
  const [searching, setSearching] = useState(false)
  const searchRef = useRef<TextInput>(null)
  const scheme = useColorScheme()
  const iconColor = scheme === 'dark' ? Colors.zinc[200] : Colors.zinc[800]

  const openSearch = () => {
    setSearching(true)
    setTimeout(() => searchRef.current?.focus(), 200)
  }

  const closeSearch = () => {
    onChangeText('')
    setSearching(false)
  }

  const center = searching ? (
    <Animated.View entering={SEARCH_ENTER} exiting={SEARCH_EXIT} className='flex-1'>
      <HeaderSearch ref={searchRef} value={value} onChangeText={onChangeText} placeholder={placeholder} />
    </Animated.View>
  ) : (
    <AnimatedTitle title={title} />
  )

  const icon = searching ? (
    <Cancel01Icon size={ICON_SIZE} color={iconColor} strokeWidth={2.2} />
  ) : (
    <Search01Icon size={ICON_SIZE} color={iconColor} strokeWidth={2.2} />
  )

  return (
    <BackHeader
      navigation={navigation}
      onBackPress={onBackPress ? onBackPress : navigation?.goBack}
      Center={
        <View className='mx-3 flex-1 justify-center' style={{ height: BUTTON_SIZE }}>
          {center}
        </View>
      }
      Right={
        <Press
          className='items-center justify-center rounded-full bg-card'
          style={{ width: BUTTON_SIZE, height: BUTTON_SIZE }}
          onPress={searching ? closeSearch : openSearch}
          activeOpacity={0.93}
          activeScale={0.92}
        >
          <Animated.View key={searching ? 'close' : 'search'} entering={ICON_ENTER}>
            {icon}
          </Animated.View>
        </Press>
      }
    />
  )
}
