import Press from '@components/Press'
import { useNavigation } from '@react-navigation/native'
import { Medium } from '@utils/fonts'
import { StackNav, type NavProp } from '@utils/types'
import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'

interface StoryProps {
  text: string
  bgColor: string
}

const stories: StoryProps[] = [
  {
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat maiores deserunt blanditiis rem! Soluta nostrum cupiditate doloribus numquam iure adipisci.',
    bgColor: 'bg-gray-950',
  },
  {
    text: 'Another story text goes here.',
    bgColor: 'bg-blue-950',
  },
  {
    text: 'Story 3 text.',
    bgColor: 'bg-red-950',
  },
  {
    text: 'Story 4 text.',
    bgColor: 'bg-green-950',
  },
  {
    text: 'Story 5 text.',
    bgColor: 'bg-yellow-950',
  },
  {
    text: 'Story 6 text.',
    bgColor: 'bg-purple-950',
  },
  {
    text: 'Story 7 text.',
    bgColor: 'bg-pink-950',
  },
]

function Story({ text, bgColor }: StoryProps) {
  const navigation = useNavigation<StackNav>()
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      // activeScale={0.95}
      onPress={() => navigation.navigate('Story')}
      className={'h-16 w-16 items-center justify-center rounded-full border-2 border-accent p-0.5'}
    >
      <View className={`h-full w-full items-center justify-center rounded-full ${bgColor}`}>
        <Medium
          className='w-9 text-center text-xs text-white'
          style={{ fontSize: 3.5, lineHeight: 4.3 }}
          numberOfLines={8}
        >
          {text}
        </Medium>
      </View>
    </TouchableOpacity>
  )
}

function StoryArea({ navigation }: NavProp) {
  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 18,
          gap: 8,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {stories.map((story, index) => (
          <Story key={index} text={story.text} bgColor={story.bgColor} />
        ))}
      </ScrollView>
    </View>
  )
}

export default StoryArea
