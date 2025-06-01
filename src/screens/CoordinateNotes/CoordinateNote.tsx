import SettWrapper from '@components/Settings/SettWrapper'
import { RouteProp } from '@react-navigation/native'
import { LocationNote } from '@screens/CoordinateNotes/coordinateNotesStore'
import { Medium } from '@utils/fonts'
import type { StackNav } from '@utils/types'

type ParamList = {
  CoordinateNote: CoordinateNoteParamList
}

export type CoordinateNoteParamList = {
  data: LocationNote
}

type CoordinateNoteProps = {
  route: RouteProp<ParamList, 'CoordinateNote'>
  navigation: StackNav
}

export default function CoordinateNote({ navigation, route }: CoordinateNoteProps) {
  const data = route.params.data

  return (
    <>
      <SettWrapper navigation={navigation} title={data.title}>
        <Medium>{JSON.stringify(data, null, 2)}</Medium>
      </SettWrapper>
    </>
  )
}
