import { CIcon, JavaIcon, JavaScriptIcon, KeyboardIcon, Setting07Icon, SidebarRightIcon, TextFontIcon, Typescript01Icon } from '@assets/icons/icons'
import Button from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import Search from '@components/Search'
import { Check, ic, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { Txt } from '@components/Text'
import { Toggle } from '@components/Toggle'
import { Colors } from '@utils/colors'
import type { NavProp } from '@utils/types'
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

export default function TestSettings({ navigation }: NavProp) {
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
    <SettWrapper navigation={navigation} title='Test Settings'>
      <Gap12>
        <SettText className='mt-3'>This is a test screen to show the different settings components</SettText>
        <SettGroup title='Colorful Toggles'>
          <SettOption
            activeOpacity={0.8}
            title='Sample toggle 1'
            onPress={() => setToggle1(!toggle1)}
            Icon={<SidebarRightIcon {...ic} />}
            Right={<Toggle isActive={toggle1} />}
          />
          <SettOption
            activeOpacity={0.8}
            title='Sample toggle 2'
            onPress={() => setToggle2(!toggle2)}
            Icon={<SidebarRightIcon {...ic} />}
            Right={<Toggle isActive={toggle2} color={Colors.blue[500]} />}
          />
        </SettGroup>
        <SettText>
          Here are the states of the toggles. You can also see the states of the toggles in the right side of the. Toggle one is{' '}
          <Text className='text-accent'>{toggle1 ? 'on' : 'off'}</Text> and toggle two is{' '}
          <Text className='text-accent'>{toggle2 ? 'on' : 'off'}</Text>.
        </SettText>
        <SettGroup title='Text Inputs'>
          <Input
            Icon={<KeyboardIcon {...ic} />}
            placeholder='Type something...'
            Right={<Txt size={15}>TS</Txt>}
            value={input1}
            onChangeText={setInput1}
          />
          <Input
            accent={Colors.red[500]}
            Icon={<TextFontIcon {...ic} />}
            placeholder='With red accent color...'
            onChangeText={setInput2}
            value={input2}
          />
        </SettGroup>
        <SettText>
          The value of the first input is <Text className='text-accent'>{input1 || 'Empty'}</Text>.
        </SettText>
        <SettGroup>
          <SettOption
            Icon={<Setting07Icon {...ic} />}
            title='Open Blank Settings '
            onPress={() => navigation.navigate('BlankSettings')}
            arrow
          ></SettOption>
        </SettGroup>
        <SettText>This button will take you to the blank settings screen. You can test the settings components there.</SettText>
        <SettGroup title='Your favorite Programming Language'>
          <SettOption
            title='JavaScript'
            Icon={<JavaScriptIcon {...ic} />}
            onPress={() => setOption1('JavaScript')}
            Right={<Check className='text-amber-500' checked={option1 === 'JavaScript'} />}
          />
          <SettOption
            title='TypeScript'
            Icon={<Typescript01Icon {...ic} />}
            onPress={() => setOption1('TypeScript')}
            Right={<Check checked={option1 === 'TypeScript'} />}
          />
          <SettOption
            title='C++'
            Icon={<CIcon {...ic} />}
            onPress={() => setOption1('C++')}
            Right={<Check className='text-blue-500' checked={option1 === 'C++'} />}
          />
          <SettOption
            title='Java'
            Icon={<JavaIcon {...ic} />}
            onPress={() => setOption1('Java')}
            Right={<Check className='text-red-500' checked={option1 === 'Java'} />}
          />
        </SettGroup>
        <SettText>
          Your favorite programming language is <Text className='text-accent'>{option1}</Text>.
        </SettText>
      </Gap12>
      <Gap12>
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
        <SettGroup title='Buttons' className='pb-5'>
          <Gap12 className='px-5'>
            <Button title='A test button' onPress={() => setButtonClickText('You clicked the button')} />
            <Button title='A blue button' className='bg-blue-500' onPress={() => setButtonClickText('You clicked the blue button')} />
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
