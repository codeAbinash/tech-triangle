import { BirthdayCakeIcon, RulerIcon, WeightScale01Icon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import { ic, SettGroup, SettText, SettWrapper } from '@components/Settings'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function YourProfile({ navigation }: NavProp) {
  return (
    <SettWrapper navigation={navigation} title='Your Profile'>
      <Gap12>
        <SettText className='mt-3'>Enter your details below to get the best experience from the app.</SettText>
        <SettGroup title='Your First and Last Name'>
          <Input placeholder='First Name' />
          <Input placeholder='Last Name' />
        </SettGroup>
        <SettGroup title='What do you want to be called?'>
          <Input placeholder='Nickname' />
        </SettGroup>
        <SettGroup title='Birthday'>
          <Input placeholder='dd-mm-yy' keyboardType='number-pad' Icon={<BirthdayCakeIcon {...ic} />} />
        </SettGroup>
        <SettGroup title='Height and Weight'>
          <Input placeholder='Height in cm' keyboardType='number-pad' Icon={<RulerIcon {...ic} />} />
          <Input placeholder='Weight in kg' keyboardType='number-pad' Icon={<WeightScale01Icon {...ic} />} />
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
      </Gap12>
      <SettText>These information are stored locally on your device and are not shared with anyone.</SettText>
      {/* <View className='p-5'>
        <Btn title='Save Changes' onPress={() => {}} />
      </View> */}
    </SettWrapper>
  )
}
