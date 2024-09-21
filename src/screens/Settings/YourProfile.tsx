import { profileStore } from '@/zustand/profileStore'
import {
  BabyBoyDressSolidIcon,
  BabyGirlDressSolidIcon,
  BirthdayCakeSolidIcon,
  RulerSolidIcon,
  TextFontSolidIcon,
  TextNumberSignSolidIcon,
  TextSolidIcon,
  WeightScale01SolidIcon,
} from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundedIcon from '@components/RoundedIcon'
import { Check, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { Txt } from '@components/Text'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function YourProfile({ navigation }: NavProp) {
  const firstName = profileStore((s) => s.firstName)
  const setFirstName = profileStore((s) => s.setFirstName)
  const lastName = profileStore((s) => s.lastName)
  const setLastName = profileStore((s) => s.setLastName)
  const nickName = profileStore((s) => s.nickName)
  const setNickName = profileStore((s) => s.setNickName)
  const birthday = profileStore((s) => s.birthday)
  const setBirthday = profileStore((s) => s.setBirthday)
  const height = profileStore((s) => s.height)
  const setHeight = profileStore((s) => s.setHeight)
  const weight = profileStore((s) => s.weight)
  const setWeight = profileStore((s) => s.setWeight)
  const gender = profileStore((s) => s.gender)
  const setGender = profileStore((s) => s.setGender)

  return (
    <SettWrapper navigation={navigation} title='Your Profile'>
      <Gap12>
        <SettText className='mt-3'>Enter your details below to get the best experience from the app.</SettText>
        <SettGroup title='First and Last Name'>
          <Input
            placeholder='First Name'
            Icon={<RoundedIcon Icon={TextFontSolidIcon} className='bg-blue-500' />}
            value={firstName}
            onChangeText={setFirstName}
          />
          <Input
            placeholder='Last Name'
            Icon={<RoundedIcon Icon={TextSolidIcon} className='bg-rose-500' />}
            value={lastName}
            onChangeText={setLastName}
          />
        </SettGroup>
        <SettText>Your name is used to personalize your experience in the app.</SettText>
        <SettGroup title='What do you want to be called?'>
          <Input
            placeholder='Nickname'
            Icon={<RoundedIcon Icon={TextNumberSignSolidIcon} className='bg-accent' />}
            value={nickName}
            onChangeText={setNickName}
          />
        </SettGroup>
        <SettText>
          This is the name that will be displayed in the app. You can use your real name or a nickname.
        </SettText>
        <SettGroup title='Birthday'>
          <Input
            placeholder='dd-mm-yy'
            keyboardType='number-pad'
            Icon={<RoundedIcon Icon={BirthdayCakeSolidIcon} className='bg-green-500' />}
            value={birthday}
            onChangeText={setBirthday}
          />
        </SettGroup>
        <SettText>Please enter your birthday in the format dd-mm-yy.</SettText>
        <SettGroup title='Height and Weight'>
          <Input
            placeholder='Height in cm'
            keyboardType='number-pad'
            Icon={<RoundedIcon Icon={RulerSolidIcon} className='bg-accent' />}
            value={height}
            onChangeText={setHeight}
            Right={<Txt>cm</Txt>}
          />
          <Input
            placeholder='Weight in kg'
            keyboardType='number-pad'
            Icon={<RoundedIcon Icon={WeightScale01SolidIcon} className='bg-amber-500' />}
            value={weight}
            onChangeText={setWeight}
            Right={<Txt>kg</Txt>}
          />
        </SettGroup>
        <SettText>Your height and weight are used to calculate your BMI and other health-related information.</SettText>
        <SettGroup title='Gender'>
          <SettOption
            title='Male'
            Icon={<RoundedIcon Icon={BabyBoyDressSolidIcon} className='bg-blue-500' />}
            Right={<Check checked={gender === 'Male'} />}
            onPress={() => setGender('Male')}
          />
          <SettOption
            title='Female'
            Icon={<RoundedIcon Icon={BabyGirlDressSolidIcon} className='bg-rose-500' />}
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
        {/* <SettGroup className='pb-2 pt-5'> */}
        <SettText>These information are stored locally on your device and are not shared with anyone.</SettText>
        {/* <View className='p-5'>
            <Btn title='Save Changes' onPress={handelPress} />
          </View>
        </SettGroup> */}
      </Gap12>
    </SettWrapper>
  )
}
