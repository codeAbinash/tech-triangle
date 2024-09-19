import {
  ArtificialIntelligence04SolidIcon,
  Calendar03SolidIcon,
  ColorsSolidIcon,
  ComputerSolidIcon,
  DashboardSpeed01SolidIcon,
  Database02SolidIcon,
  Image02SolidIcon,
  ListSettingIcon,
  LockPasswordSolidIcon,
  MapsLocation02SolidIcon,
  MathSolidIcon,
  NeuralNetworkSolidIcon,
  PaintBoardSolidIcon,
  Setting07SolidIcon,
  Settings01Icon,
  SoftwareLicenseSolidIcon,
  TestTube01SolidIcon,
  Timer02SolidIcon,
} from '@assets/icons/icons'
import { Gap12, Gap20 } from '@components/Gap'
import KeyboardAvoidingContainer from '@components/KeyboardAvoidingContainer'
import RoundedIcon from '@components/RoundedIcon'
import { PaddingTop } from '@components/SafePadding'
import Search from '@components/Search'
import { SettGroup, SettOption, SettText } from '@components/Settings'
import { Group } from '@shopify/react-native-skia'
import { Colors } from '@utils/colors'
import { Bold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import type { RootStackParamList } from 'App'
import React, { useMemo } from 'react'
import { useColorScheme, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { FadeIn } from 'react-native-reanimated'
import type { SvgProps } from 'react-native-svg'

type Tool = {
  title: string
  Icon: React.FC<SvgProps>
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
      { title: 'Your Age', Icon: Calendar03SolidIcon, to: 'YourAge', className: 'bg-rose-500' },
      { title: 'Random Color', Icon: PaintBoardSolidIcon, to: 'RandomColor', className: 'bg-orange-500' },
      { title: 'Gradient Colors', Icon: ColorsSolidIcon, className: 'bg-green-500' },
      { title: 'Location Speed Meter', Icon: DashboardSpeed01SolidIcon, className: 'bg-blue-500' },
      { title: 'Coordinate Notes', Icon: MapsLocation02SolidIcon, to: 'CoordinateNotes', className: 'bg-yellow-500' },
      { title: 'Random Password', Icon: LockPasswordSolidIcon, className: 'bg-slate-500', to: 'RandomPassword' },
    ],
  },
  {
    title: 'Others',
    tools: [
      { title: 'Animations', Icon: Timer02SolidIcon, to: 'Animations', className: 'bg-red-500' },
      { title: 'Test Screen', Icon: TestTube01SolidIcon, to: 'Test', className: 'bg-purple-500' },
    ],
    endText: 'Just for testing purposes. You can try them out and see how they work.',
  },
  {
    title: 'Computer Science',
    tools: [
      { title: 'Operating System', Icon: SoftwareLicenseSolidIcon, className: 'bg-black' },
      { title: 'Compiler Design', Icon: Setting07SolidIcon, className: 'bg-slate-500' },
      { title: 'Computer Networks', Icon: NeuralNetworkSolidIcon, className: 'bg-green-500' },
      { title: 'Artificial Intelligence', Icon: ArtificialIntelligence04SolidIcon, className: 'bg-rose-500' },
      { title: 'Software Engineering', Icon: ComputerSolidIcon, className: 'bg-orange-500' },
      { title: 'Database Management', Icon: Database02SolidIcon, className: 'bg-slate-500' },
      { title: 'Image Processing', Icon: Image02SolidIcon, className: 'bg-yellow-500' },
      { title: 'Numerical Methods', Icon: MathSolidIcon, className: 'bg-blue-500' },
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
        <View className='flex-row items-center justify-between'>
          <Bold className='text-xl text-gray-800 dark:text-gray-200'>Try it out</Bold>
          <TouchableOpacity
            activeOpacity={0.6}
            className='p-2.5 pb-3.5 pr-0.5 pt-2'
            onPress={() => navigation.navigate('Settings')}
          >
            <ListSettingIcon
              height={23}
              width={23}
              color={theme === 'dark' ? Colors.zinc['300'] : Colors.zinc['700']}
            />
          </TouchableOpacity>
        </View>
        <Search placeholder='Search tools' value={search} onChangeText={setSearch} />
      </View>
      <KeyboardAvoidingContainer
        className='flex-1 bg-zinc-100 pt-4 dark:bg-black'
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <Gap20>
          {searchedTools.map((group, index) => (
            <Gap12 key={index}>
              {group.startText && <SettText>{group.startText}</SettText>}
              <SettGroup title={group.title}>
                {group.tools.map((tool, i) => (
                  <Animated.View key={i} entering={delayedFadeAnimation(search, i)}>
                    <SettOption
                      key={i}
                      title={tool.title}
                      Icon={<RoundedIcon Icon={tool.Icon} className={tool.className} />}
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
      </KeyboardAvoidingContainer>
    </>
  )
}

function delayedFadeAnimation(search: string, i: number) {
  return FadeIn.duration(250).delay(search.trim().length === 0 ? Math.min((i + 1) * 25, 500) : 20)
}
