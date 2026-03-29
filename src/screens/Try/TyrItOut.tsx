import { Gap12, Gap20 } from '@components/Gap'
import KeyboardAvoid from '@components/KeyboardAvoid'
import RoundIcon, { type GradientName } from '@components/RoundIcon'
import { PaddingTop } from '@components/SafePadding'
import Search from '@components/Search'
import SearchableBackHeader from '@components/SearchableBackHeader'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import ArtificialIntelligence04Icon from '@hugeicons/ArtificialIntelligence04Icon'
import Calendar03Icon from '@hugeicons/Calendar03Icon'
import ColorsIcon from '@hugeicons/ColorsIcon'
import ComputerIcon from '@hugeicons/ComputerIcon'
import Database02Icon from '@hugeicons/Database02Icon'
import Image02Icon from '@hugeicons/Image02Icon'
import ListSettingIcon from '@hugeicons/ListSettingIcon'
import LockPasswordIcon from '@hugeicons/LockPasswordIcon'
import MapsLocation02Icon from '@hugeicons/MapsLocation02Icon'
import MathIcon from '@hugeicons/MathIcon'
import NeuralNetworkIcon from '@hugeicons/NeuralNetworkIcon'
import PaintBoardIcon from '@hugeicons/PaintBoardIcon'
import ReactIcon from '@hugeicons/ReactIcon'
import Rocket01Icon from '@hugeicons/Rocket01Icon'
import Setting07Icon from '@hugeicons/Setting07Icon'
import SoftwareLicenseIcon from '@hugeicons/SoftwareLicenseIcon'
import TestTube01Icon from '@hugeicons/TestTube01Icon'
import { HugeIconProps } from '@hugeicons/constants'
import { Group } from '@shopify/react-native-skia'
import { Colors } from '@utils/colors'
import { Bold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { delayedFadeAnimationSearch, exiting, layout } from '@utils/utils'
import React, { useMemo } from 'react'
import { TouchableOpacity, View, useColorScheme } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import { RootStackParamList } from '../../../App'

type Tool = {
  title: string
  Icon: React.FC<HugeIconProps>
  to?: keyof RootStackParamList // Ensure 'to' is correctly typed
  arrow?: boolean
  gradient?: GradientName
  className?: string
}

type Group = {
  title: string
  tools: Tool[]
  startText?: string
  endText?: string
}

const tools: Group[] = [
  {
    startText: 'Here are some tools related to computer science. You can try them out and see how they work.',
    title: 'Tools',
    tools: [
      { title: 'RN Skia', Icon: ReactIcon, to: 'Skia', gradient: 'blue' },
      { title: 'Your Age', Icon: Calendar03Icon, to: 'YourAge', gradient: 'rose' },
      { title: 'Random Color', Icon: PaintBoardIcon, to: 'RandomColor', gradient: 'orange' },
      { title: 'Gradient Colors', Icon: ColorsIcon, gradient: 'green' },
      { title: 'Location Speed Meter', Icon: Rocket01Icon, gradient: 'yellow', to: 'LocationSpeed' },
      { title: 'Location Notes', Icon: MapsLocation02Icon, gradient: 'accent', to: 'LocationNotes' },
      { title: 'Random Password', Icon: LockPasswordIcon, gradient: 'slate', to: 'RandomPassword' },
    ],
  },
  {
    title: 'Others',
    tools: [
      // { title: 'Animations', Icon: Timer02Icon, to: 'Animations', gradient: 'red' },
      { title: 'Test Screen', Icon: TestTube01Icon, to: 'Test', gradient: 'purple' },
    ],
    endText: 'Just for testing purposes. You can try them out and see how they work.',
  },
  {
    title: 'Computer Science',
    tools: [
      { title: 'Operating System', Icon: SoftwareLicenseIcon, className: 'bg-black' },
      { title: 'Compiler Design', Icon: Setting07Icon, gradient: 'slate' },
      { title: 'Computer Networks', Icon: NeuralNetworkIcon, gradient: 'green' },
      { title: 'Artificial Intelligence', Icon: ArtificialIntelligence04Icon, gradient: 'rose' },
      { title: 'Software Engineering', Icon: ComputerIcon, gradient: 'orange' },
      { title: 'Database Management', Icon: Database02Icon, gradient: 'slate' },
      { title: 'Image Processing', Icon: Image02Icon, gradient: 'yellow' },
      { title: 'Numerical Methods', Icon: MathIcon, gradient: 'blue' },
    ],
    endText:
      'Some of these applications are in development and may not work as expected. You can try them out and see how they work.',
  },
]

function searchTools(searchTerm: string): Group[] {
  const lowerCaseSearchTerm = searchTerm.toLowerCase().trim()
  if (!searchTerm) return tools
  const result: Group[] = []
  for (const group of tools) {
    const filteredTools = group.tools.filter((tool) => tool.title.toLowerCase().includes(lowerCaseSearchTerm))
    if (filteredTools.length > 0) result.push({ ...group, tools: filteredTools })
  }
  return result
}
export default function TyrItOut({ navigation }: NavProp) {
  const theme = useColorScheme()
  const [search, setSearch] = React.useState('')
  const searchedTools = useMemo(() => searchTools(search), [search])

  return (
    <SettWrapper
      title='Try it out'
      Header={
        <SearchableBackHeader
          title='Try it out'
          navigation={navigation}
          onChangeText={(text) => setSearch(text)}
          value={search}
          placeholder='Search tools'
        />
      }
    >
      {/* <KeyboardAvoid className='flex-1 bg-zinc-100 dark:bg-black' contentContainerStyle={{ paddingBottom: 50 }}> */}
      <Gap20>
        {searchedTools.map((group, index) => (
          <Gap12 key={index}>
            {group.startText && <SettText>{group.startText}</SettText>}
            <SettGroup title={group.title}>
              {group.tools.map((tool, i) => (
                <Animated.View
                  key={i}
                  entering={delayedFadeAnimationSearch(search, i)}
                  exiting={exiting}
                  layout={layout}
                >
                  <SettOption
                    title={tool.title}
                    Icon={<RoundIcon Icon={tool.Icon} gradient={tool.gradient} className={tool.className} />}
                    arrow={tool.arrow ?? true}
                    // Update onPress handlers to correctly navigate using the 'to' property
                    onPress={() => tool.to && navigation.navigate(tool.to as any)}
                  />
                </Animated.View>
              ))}
            </SettGroup>
            {group.endText && <SettText>{group.endText}</SettText>}
          </Gap12>
        ))}
        {searchedTools.length === 0 && (
          <SettText className='text-center'>No tools found. Try searching for something else.</SettText>
        )}
      </Gap20>
      {/* </KeyboardAvoid> */}
    </SettWrapper>
  )
}

function delayedFadeAnimation(search: string, i: number) {
  return FadeIn.duration(250).delay(search.trim().length === 0 ? Math.min((i + 1) * 25, 500) : 20)
}
