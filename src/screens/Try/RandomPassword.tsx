import { Gap12 } from '@components/Gap'
import Range from '@components/Range'
import { SettGroup, SettText, SettWrapper } from '@components/Settings'
import { Txt } from '@components/Text'
import type { NavProp } from '@utils/types'
import React, { useState } from 'react'
import { View } from 'react-native'

const MIN = 1
const MAX = 49
function getCurrVal(len: number) {
  return Math.floor(len * MAX + MIN)
}

export default function RandomPassword({ navigation }: NavProp) {
  const [len, setLen] = useState<number>(10 / 50)

  return (
    <SettWrapper navigation={navigation} title='Random Password'>
      <Gap12>
        <SettText className='mt-3'>Here you will set some options to generate a random password</SettText>
        <SettGroup title='Password Length'>
          <View>
            <Range value={len} setValue={setLen} Left={<Txt>1</Txt>} Right={<Txt>50</Txt>} />
            <Txt className='pb-2 text-center'>Length {getCurrVal(len)}</Txt>
          </View>
        </SettGroup>
      </Gap12>
    </SettWrapper>
  )
}
