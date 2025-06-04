import { Gap12, Gap20 } from '@components/Gap'
import KeyboardAvoid from '@components/KeyboardAvoid'
import RoundIcon from '@components/RoundIcon'
import { PaddingTop } from '@components/SafePadding'
import Search from '@components/Search'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import ArtificialIntelligence04Icon from '@hugeicons/ArtificialIntelligence04Icon'
import Calendar03Icon from '@hugeicons/Calendar03Icon'
import ColorsIcon from '@hugeicons/ColorsIcon'
import ComputerIcon from '@hugeicons/ComputerIcon'
import { HugeIconProps } from '@hugeicons/constants'
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
import { Group } from '@shopify/react-native-skia'
import { Colors } from '@utils/colors'
import { Bold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { delayedFadeAnimationSearch, exiting, layout } from '@utils/utils'
import type { RootStackParamList } from 'App'
import React, { useMemo } from 'react'
import { TouchableOpacity, View, useColorScheme } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'

type Tool = {
  title: string
  Icon: React.FC<HugeIconProps>
  to?: keyof RootStackParamList // Ensure 'to' is correctly typed
  arrow?: boolean
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
      { title: 'RN Skia', Icon: ReactIcon, to: 'Skia', className: 'bg-blue-500' },
      { title: 'Your Age', Icon: Calendar03Icon, to: 'YourAge', className: 'bg-rose-500' },
      { title: 'Random Color', Icon: PaintBoardIcon, to: 'RandomColor', className: 'bg-orange-500' },
      { title: 'Gradient Colors', Icon: ColorsIcon, className: 'bg-green-500' },
      { title: 'Location Speed Meter', Icon: Rocket01Icon, className: 'bg-yellow-500', to: 'LocationSpeed' },
      { title: 'Location Notes', Icon: MapsLocation02Icon, className: 'bg-accent', to: 'LocationNotes' },
      { title: 'Random Password', Icon: LockPasswordIcon, className: 'bg-slate-500', to: 'RandomPassword' },
    ],
  },
  {
    title: 'Others',
    tools: [
      // { title: 'Animations', Icon: Timer02Icon, to: 'Animations', className: 'bg-red-500' },
      { title: 'Test Screen', Icon: TestTube01Icon, to: 'Test', className: 'bg-purple-500' },
    ],
    endText: 'Just for testing purposes. You can try them out and see how they work.',
  },
  {
    title: 'Computer Science',
    tools: [
      { title: 'Operating System', Icon: SoftwareLicenseIcon, className: 'bg-black' },
      { title: 'Compiler Design', Icon: Setting07Icon, className: 'bg-slate-500' },
      { title: 'Computer Networks', Icon: NeuralNetworkIcon, className: 'bg-green-500' },
      { title: 'Artificial Intelligence', Icon: ArtificialIntelligence04Icon, className: 'bg-rose-500' },
      { title: 'Software Engineering', Icon: ComputerIcon, className: 'bg-orange-500' },
      { title: 'Database Management', Icon: Database02Icon, className: 'bg-slate-500' },
      { title: 'Image Processing', Icon: Image02Icon, className: 'bg-yellow-500' },
      { title: 'Numerical Methods', Icon: MathIcon, className: 'bg-blue-500' },
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
    <>
      <PaddingTop />
      <View className='px-5 pb-3'>
        <View className='my-1 flex-row items-center justify-between'>
          <Bold className='mb-1 mt-2 text-xl text-gray-800 dark:text-gray-200'>Try it out</Bold>
          <TouchableOpacity
            activeOpacity={0.6}
            className='p-2.5 pb-3.5 pr-0.5 pt-2'
            onPress={() => navigation.navigate('Settings')}
          >
            <ListSettingIcon size={23} color={theme === 'dark' ? Colors.zinc['300'] : Colors.zinc['700']} />
          </TouchableOpacity>
        </View>
        <Search placeholder='Search tools' value={search} onChangeText={setSearch} />
      </View>
      <KeyboardAvoid className='flex-1 bg-zinc-100 pt-4 dark:bg-black' contentContainerStyle={{ paddingBottom: 50 }}>
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
                      Icon={<RoundIcon Icon={tool.Icon} className={tool.className} />}
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
      </KeyboardAvoid>
    </>
  )
}

function delayedFadeAnimation(search: string, i: number) {
  return FadeIn.duration(250).delay(search.trim().length === 0 ? Math.min((i + 1) * 25, 500) : 20)
}
