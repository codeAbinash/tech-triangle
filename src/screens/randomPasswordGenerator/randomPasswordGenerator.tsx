import { Setting07SolidIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import RoundedIcon from '@components/RoundedIcon'
import { ic, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import type { NavProp } from '@utils/types'
import React from 'react'

export default function randomPasswordGenerator({ navigation }: NavProp) {
  function generatePassword(
    length: number,
    useUppercase: boolean,
    useLowercase: boolean,
    useNumbers: boolean,
    useSpecial: boolean,
    specificChars: string = '',
  ) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const special = '!@#$%^&*()_+~`|}{[]:;?><,./-='

    let all = ''
    let password = ''

    if (useUppercase) {
      all += uppercase
      password += uppercase[Math.floor(Math.random() * uppercase.length)]
    }

    if (useLowercase) {
      all += lowercase
      password += lowercase[Math.floor(Math.random() * lowercase.length)]
    }

    if (useNumbers) {
      all += numbers
      password += numbers[Math.floor(Math.random() * numbers.length)]
    }

    if (useSpecial) {
      all += special
      password += special[Math.floor(Math.random() * special.length)]
    }

    if (specificChars) {
      password += specificChars
      all += specificChars
    }

    for (let i = password.length; i < length; i++) {
      password += all[Math.floor(Math.random() * all.length)]
    }

    password = password
      .split('')
      .sort(() => 0.5 - Math.random())
      .join('')

    return password
  }

  return (
    <SettWrapper navigation={navigation} title='Blank Settings'>
      <Gap12>
        <SettText className='mt-3'>Beginning Text</SettText>
        <SettGroup title='Sample title'>
          <SettOption
            title='A blank setting'
            Icon={<RoundedIcon Icon={Setting07SolidIcon} className='bg-slate-500' />}
            arrow
          />
        </SettGroup>
        <SettText>Sample text</SettText>
      </Gap12>
      <SettText>End Text</SettText>
    </SettWrapper>
  )
}
