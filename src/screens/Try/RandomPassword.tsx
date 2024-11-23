import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import Range from '@components/Range'
import { Check, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { Txt } from '@components/Text'
import Clipboard from '@react-native-clipboard/clipboard'
import { Medium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { ToastAndroid, TouchableOpacity } from 'react-native'

const MAX = 50
const MIN = 4
const INITIAL = 20

export default function RandomPassword({ navigation }: NavProp) {
  const [len, setLen] = useState<number>(INITIAL)

  const [generatedPassword, setGeneratedPassword] = useState('')

  const [lowercase, setLo] = useState(true)
  const [uppercase, setUp] = useState(true)
  const [numerical, setNum] = useState(true)
  const [special, setSp] = useState(true)

  function generatePassword() {
    console.log(len)
    setGeneratedPassword(
      randomPass({
        len,
        lowercase,
        uppercase,
        numerical,
        special,
      }),
    )
  }

  useEffect(() => {
    setGeneratedPassword(
      randomPass({
        len,
        lowercase,
        uppercase,
        numerical,
        special,
      }),
    )
  }, [len, lowercase, numerical, special, uppercase])
  return (
    <SettWrapper navigation={navigation} title='Random Password'>
      <Gap12>
        <SettText className='mt-3'>Here you will set some options to generate a random password</SettText>
        <SettGroup title='Password Length'>
          <MemoRange setVal={setLen} initial={INITIAL} max={MAX} min={MIN} Bottom={BottomPart} />
        </SettGroup>

        <SettGroup title='Password Contains'>
          <SettOption
            onPress={() => setLo(!lowercase)}
            title='Lowercase Characters'
            Icon={<Check checked={lowercase} />}
          />
          <SettOption
            onPress={() => setUp(!uppercase)}
            title='Uppercase Characters'
            Icon={<Check checked={uppercase} />}
          />
          <SettOption
            onPress={() => setNum(!numerical)}
            title='Numerical Characters'
            Icon={<Check checked={numerical} />}
          />
          <SettOption onPress={() => setSp(!special)} title='Special Characters' Icon={<Check checked={special} />} />
        </SettGroup>
        <SettGroup>
          {generatedPassword ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                Clipboard.setString(generatedPassword)
                ToastAndroid.show('Password Copied', ToastAndroid.SHORT)
              }}
            >
              <Medium className='px-5 py-3 text-xs text-accent' numberOfLines={1}>
                {generatedPassword}
              </Medium>
            </TouchableOpacity>
          ) : (
            <Medium className='px-5 py-3 text-xs text-red-500'>Please select at least one of the above options.</Medium>
          )}
        </SettGroup>
        <SettText className='text-center'>Tap to copy the password</SettText>

        <SettGroup className='px-5 py-5'>
          <Btn title='Generate Password' onPress={generatePassword} />
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}

const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMERICAL = '0123456789'
const SPECIAL = '~@#$%^&*()_+{}":><?/*'

type randomPassParams = {
  len: number
  lowercase: boolean
  uppercase: boolean
  numerical: boolean
  special: boolean
}

function randomPass({ len, lowercase, uppercase, numerical, special }: randomPassParams) {
  const pass = []
  if (lowercase) pass.push(LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)])
  if (uppercase) pass.push(UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)])
  if (numerical) pass.push(NUMERICAL[Math.floor(Math.random() * NUMERICAL.length)])
  if (special) pass.push(SPECIAL[Math.floor(Math.random() * SPECIAL.length)])

  const remaining = len + -lowercase + -uppercase + -numerical + -special

  const chars =
    (lowercase ? LOWERCASE : '') +
    (uppercase ? UPPERCASE : '') +
    (numerical ? NUMERICAL : '') +
    (special ? SPECIAL : '')

  for (let i = 0; i < remaining; i++) {
    pass.push(chars[Math.floor(Math.random() * chars.length)])
  }

  pass.sort(() => Math.random() - 0.5)

  return pass.join('')
}

type MemoRangeTypes = {
  setVal: (x: number) => void
  initial: number
  max: number
  min: number
  Left?: React.ReactNode
  Right?: React.ReactNode
  Bottom?: ({ val }: { val: number }) => JSX.Element | null
}

const MemoRange = memo(({ setVal, initial, max, min, Left, Right, Bottom }: MemoRangeTypes) => {
  const [len, setLen] = useState<number>((initial - min) / (max - min))

  const getCurrVal = useCallback((x: number) => Math.floor(min + x * (max - min)), [max, min])

  useEffect(() => {
    const timer = setTimeout(() => setVal(getCurrVal(len)), 50)
    return () => clearTimeout(timer)
  }, [getCurrVal, len, setVal])

  return (
    <>
      <Range
        value={len}
        setValue={setLen}
        Left={Left === undefined ? <Txt>{min}</Txt> : Left}
        Right={Right === undefined ? <Txt>{max}</Txt> : Right}
      />
      {Bottom ? <Bottom val={getCurrVal(len)} /> : null}
    </>
  )
})

function BottomPart({ val }: { val: number }) {
  return <Txt className='pb-2 text-center'>Password Length {val}</Txt>
}
