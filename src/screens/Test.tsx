import SettWrapper from '@components/Settings/SettWrapper'
import { MarkdownTextInput, parseExpensiMark } from '@expensify/react-native-live-markdown'
import { Colors } from '@utils/colors'
import { H } from '@utils/dimensions'
import { MEDIUM } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { useState } from 'react'

export default function Test({ navigation }: NavProp) {
  const [text, setText] = useState('')
  return (
    <>
      <SettWrapper navigation={navigation} title='Test Markdown' className='px-2'>
        <MarkdownTextInput
          value={text}
          onChangeText={setText}
          keyboardType='twitter'
          className='text'
          parser={parseExpensiMark}
          numberOfLines={100}
          style={{ ...MEDIUM, flex: 1, textAlignVertical: 'top', height: H - 100 }}
          selectionColor={Colors.accent + '77'}
          cursorColor={Colors.accent}
          multiline
        />
      </SettWrapper>
    </>
  )
}
