import {
  BabyBoyDressIcon,
  BabyGirlDressIcon,
  BirthdayCakeIcon,
  RulerIcon,
  TextFontIcon,
  TextIcon,
  TextNumberSignIcon,
  WeightScale01Icon,
} from '@assets/icons/icons'
import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import { Check, ic, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import type { NavProp } from '@utils/types'
import React, { useState } from 'react'
import { View } from 'react-native'

export default function YourProfile({ navigation }: NavProp) {
  const [gender, setGender] = useState<'Male' | 'Female' | null>(null)

  return (
    <SettWrapper navigation={navigation} title='Your Profile'>
      <Gap12>
        <SettText className='mt-3'>Enter your details below to get the best experience from the app.</SettText>
        <SettGroup title='First and Last Name'>
          <Input placeholder='First Name' Icon={<TextFontIcon {...ic} />} />
          <Input placeholder='Last Name' Icon={<TextIcon {...ic} />} />
        </SettGroup>
        <SettGroup title='What do you want to be called?'>
          <Input placeholder='Nickname' Icon={<TextNumberSignIcon {...ic} />} />
        </SettGroup>
        <SettGroup title='Birthday'>
          <Input placeholder='dd-mm-yy' keyboardType='number-pad' Icon={<BirthdayCakeIcon {...ic} />} />
        </SettGroup>
        <SettGroup title='Height and Weight'>
          <Input placeholder='Height in cm' keyboardType='number-pad' Icon={<RulerIcon {...ic} />} />
          <Input placeholder='Weight in kg' keyboardType='number-pad' Icon={<WeightScale01Icon {...ic} />} />
        </SettGroup>
        <SettGroup title='Gender'>
          <SettOption
            title='Male'
            Icon={<BabyBoyDressIcon {...ic} />}
            Right={<Check checked={gender === 'Male'} />}
            onPress={() => setGender('Male')}
          />
          <SettOption
            title='Female'
            Icon={<BabyGirlDressIcon {...ic} />}
            Right={<Check checked={gender === 'Female'} />}
            onPress={() => setGender('Female')}
          />
        </SettGroup>
        {/* <SettGroup title='Set a username'>
          <Input placeholder='Username' Icon={<UserIcon {...ic} />} />
        </SettGroup>
        <SettGroup title='What is your email address?'>
          <Input placeholder='Email Address' keyboardType='email-address' Icon={<Mail01Icon {...ic} />} />
        </SettGroup>
        <SettGroup title='Set a password'>
          <Input placeholder='Password' secureTextEntry />
          <Input placeholder='Confirm Password' secureTextEntry />
        </SettGroup> */}
        <SettGroup className='pb-5 pt-5'>
          <SettText>These information are stored locally on your device and are not shared with anyone.</SettText>
          <View className='p-5'>
            <Btn title='Save Changes' onPress={() => {}} />
          </View>
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
