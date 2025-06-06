import { profileStore } from '@/zustand/profileStore-x'

import Check from '@components/Check'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import RoundIcon from '@components/RoundIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import { Txt } from '@components/Text'
import BabyBoyDressIcon from '@hugeicons/BabyBoyDressIcon'
import BabyGirlDressIcon from '@hugeicons/BabyGirlDressIcon'
import BirthdayCakeIcon from '@hugeicons/BirthdayCakeIcon'
import RulerIcon from '@hugeicons/RulerIcon'
import TextFontIcon from '@hugeicons/TextFontIcon'
import TextIcon from '@hugeicons/TextIcon'
import TextNumberSignIcon from '@hugeicons/TextNumberSignIcon'
import WeightScale01Icon from '@hugeicons/WeightScale01Icon'
import type { NavProp } from '@utils/types'

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
    <SettWrapper title='Your Profile'>
      <Gap12>
        <SettText className='mt-3'>Enter your details below to get the best experience from the app.</SettText>
        <SettGroup title='First and Last Name'>
          <Input
            placeholder='First Name'
            Icon={<RoundIcon Icon={TextFontIcon} className='bg-blue-500' />}
            value={firstName}
            onChangeText={setFirstName}
          />
          <Input
            placeholder='Last Name'
            Icon={<RoundIcon Icon={TextIcon} className='bg-rose-500' />}
            value={lastName}
            onChangeText={setLastName}
          />
        </SettGroup>
        <SettText>Your name is used to personalize your experience in the app.</SettText>
        <SettGroup title='What do you want to be called?'>
          <Input
            placeholder='Nickname'
            Icon={<RoundIcon Icon={TextNumberSignIcon} className='bg-accent' />}
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
            Icon={<RoundIcon Icon={BirthdayCakeIcon} className='bg-green-500' />}
            value={birthday}
            onChangeText={setBirthday}
          />
        </SettGroup>
        <SettText>Please enter your birthday in the format dd-mm-yy.</SettText>
        <SettGroup title='Height and Weight'>
          <Input
            placeholder='Height in cm'
            keyboardType='number-pad'
            Icon={<RoundIcon Icon={RulerIcon} className='bg-accent' />}
            value={height}
            onChangeText={setHeight}
            Right={<Txt>cm</Txt>}
          />
          <Input
            placeholder='Weight in kg'
            keyboardType='number-pad'
            Icon={<RoundIcon Icon={WeightScale01Icon} className='bg-amber-500' />}
            value={weight}
            onChangeText={setWeight}
            Right={<Txt>kg</Txt>}
          />
        </SettGroup>
        <SettText>Your height and weight are used to calculate your BMI and other health-related information.</SettText>
        <SettGroup title='Gender'>
          <SettOption
            title='Male'
            Icon={<RoundIcon Icon={BabyBoyDressIcon} className='bg-blue-500' />}
            Right={<Check checked={gender === 'Male'} />}
            onPress={() => setGender('Male')}
          />
          <SettOption
            title='Female'
            Icon={<RoundIcon Icon={BabyGirlDressIcon} className='bg-rose-500' />}
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
