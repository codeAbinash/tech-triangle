import {
  CSolidIcon,
  JavaScriptSolidIcon,
  JavaSolidIcon,
  KeyboardIcon,
  MusicNote04SolidIcon,
  Setting07SolidIcon,
  SidebarRightSolidIcon,
  TextFontSolidIcon,
  Typescript01SolidIcon,
  VolumeHighIcon,
  VolumeLowIcon,
} from '@assets/icons/icons'
import Button from '@components/Button'
import Check from '@components/Check'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import Range from '@components/Range'
import RoundedIcon from '@components/RoundedIcon'
import Search from '@components/Search'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import { Txt } from '@components/Text'
import { Toggle } from '@components/Toggle'
import { Colors } from '@utils/colors'
import type { NavProp } from '@utils/types'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function UiAndComponents({ navigation }: NavProp) {
  const [toggle1, setToggle1] = useState(true)
  const [toggle2, setToggle2] = useState(true)
  const [option1, setOption1] = useState('TypeScript')
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [search, setSearch] = useState('')
  const [buttonClickText, setButtonClickText] = useState('')

  useEffect(() => {
    console.log(option1)
  }, [option1])

  return (
    <SettWrapper title='UI & Components'>
      <>
        <Gap12>
          <SettText className='mt-3'>This is a test screen to show the different settings components</SettText>
          <SettGroup title='Search bar'>
            <Gap12 className='px-5 pb-4'>
              <Search placeholder='Search placeholder' value={search} onChangeText={setSearch} />
            </Gap12>
          </SettGroup>
          <SettText>
            Here is a search bar with a placeholder of <Text className='text-accent'>{search || 'Nothing'}</Text>.
          </SettText>
        </Gap12>
        <Gap12>
          <SettGroup title='Colorful Toggles'>
            <SettOption
              activeOpacity={0.8}
              title='Sample toggle 1'
              onPress={() => setToggle1(!toggle1)}
              // Icon={<SidebarRightIcon {...ic} />}
              Icon={<RoundedIcon Icon={SidebarRightSolidIcon} className='bg-green-500' />}
              Right={<Toggle isActive={toggle1} />}
            />
            <SettOption
              activeOpacity={0.8}
              title='Sample toggle 2'
              onPress={() => setToggle2(!toggle2)}
              // Icon={<SidebarRightIcon {...ic} />}
              Icon={<RoundedIcon Icon={SidebarRightSolidIcon} className='bg-rose-500' />}
              Right={<Toggle isActive={toggle2} accent={Colors.blue[500]} />}
            />
          </SettGroup>
          <SettText>
            Here are the states of the toggles. You can also see the states of the toggles in the right side of the.
            Toggle one is <Text className='text-accent'>{toggle1 ? 'on' : 'off'}</Text> and toggle two is{' '}
            <Text className='text-accent'>{toggle2 ? 'on' : 'off'}</Text>.
          </SettText>
        </Gap12>

        <Gap12>
          <RangeSliderMemo />
          <RangeSliderMemo2 />
        </Gap12>

        <Gap12>
          <SettGroup title='Text Inputs'>
            <Input
              // Icon={<KeyboardIcon {...ic} />}
              Icon={<RoundedIcon Icon={KeyboardIcon} className='bg-accent' />}
              placeholder='Type something...'
              Right={<Txt size={15}>TS</Txt>}
              value={input1}
              onChangeText={setInput1}
            />
            <Input
              accent={Colors.rose[500]}
              Icon={<RoundedIcon Icon={TextFontSolidIcon} className='bg-rose-500' />}
              placeholder='With red accent color...'
              onChangeText={setInput2}
              value={input2}
            />
          </SettGroup>
          <SettText>
            The value of the first input is <Text className='text-accent'>{input1 || 'Empty'}</Text>.
          </SettText>
        </Gap12>

        <Gap12>
          <SettGroup title='Text area'>
            <Input
              placeholder='This is a input field with multiple lines. You can type as much as you want.'
              numberOfLines={8}
              multiline
            />
          </SettGroup>
          <SettText>
            This is a text area. You can type as much as you want. The text area is not limited to a single line. You
            can type multiple lines.
          </SettText>
        </Gap12>
        <Gap12>
          <SettGroup>
            <SettOption
              Icon={<RoundedIcon Icon={Setting07SolidIcon} className='bg-slate-500' />}
              title='Open Blank Settings '
              onPress={() => navigation.navigate('BlankSettings')}
              arrow
            ></SettOption>
          </SettGroup>
          <SettText>
            This button will take you to the blank settings screen. You can test the settings components there.
          </SettText>
        </Gap12>
        <Gap12>
          <SettGroup title='Your favorite Programming Language'>
            <SettOption
              title='TypeScript'
              Icon={<Typescript01SolidIcon color={colors.blue[500]} height={35} width={35} />}
              onPress={() => setOption1('TypeScript')}
              Right={<Check checked={option1 === 'TypeScript'} />}
            />
            <SettOption
              title='JavaScript'
              Icon={<JavaScriptSolidIcon color={colors.yellow[500]} height={35} width={35} />}
              onPress={() => setOption1('JavaScript')}
              Right={<Check className='text-amber-500' checked={option1 === 'JavaScript'} />}
            />
            <SettOption
              title='C++'
              Icon={<CSolidIcon color={colors.blue[500]} height={35} width={35} />}
              onPress={() => setOption1('C++')}
              Right={<Check className='text-blue-500' checked={option1 === 'C++'} />}
            />
            <SettOption
              title='Java'
              Icon={<RoundedIcon Icon={JavaSolidIcon} className='bg-rose-500' />}
              onPress={() => setOption1('Java')}
              Right={<Check className='text-red-500' checked={option1 === 'Java'} />}
            />
          </SettGroup>
          <SettText>
            Your favorite programming language is <Text className='text-accent'>{option1}</Text>.
          </SettText>
        </Gap12>
      </>

      <Gap12>
        <SettGroup title='Buttons' className='pb-5'>
          <Gap12 className='px-5'>
            <Button title='A test button' onPress={() => setButtonClickText('You clicked the button')} />
            <Button
              title='A blue button'
              className='bg-blue-500'
              onPress={() => setButtonClickText('You clicked the blue button')}
            />
          </Gap12>
        </SettGroup>
        <SettText>
          Here are some buttons. The text will change when you click on the button. The current text is{' '}
          <Text className='text-accent'>{buttonClickText || 'Nothing'}</Text>.
        </SettText>
      </Gap12>
    </SettWrapper>
  )
}

const RangeSliderMemo = () => {
  const [value, setValue] = React.useState(0.23)
  return (
    <SettGroup title='Range Slider'>
      <View className='px-2 pb-2'>
        <Range
          value={value}
          setValue={setValue}
          Left={<VolumeLowIcon color={Colors.accent} height={24} width={24} />}
          Right={<VolumeHighIcon color={Colors.accent} height={24} width={24} />}
        />
      </View>
      <SettText>
        The value of the range slider is <Text className='text-accent'>{value}</Text>.
      </SettText>
    </SettGroup>
  )
}

const RangeSliderMemo2 = () => {
  const [value, setValue] = React.useState(0.57)
  return (
    <SettGroup title='Range Slider' accent={Colors.rose[500]}>
      <View className='px-2.5 pb-2'>
        <Range
          value={value}
          setValue={setValue}
          accent={Colors.rose[500]}
          Left={<RoundedIcon Icon={MusicNote04SolidIcon} className='bg-rose-500' />}
        />
      </View>
      <SettText>
        The value of the range slider is <Text className='text-rose-500'>{value}</Text>.
      </SettText>
    </SettGroup>
  )
}
