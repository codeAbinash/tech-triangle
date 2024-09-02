import { Delete02Icon, FloppyDiskIcon } from '@assets/icons/icons'
import BackHeader from '@components/BackHeader'
import FabIcon from '@components/FabIcon'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import { ic, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import { TxtAcc } from '@components/Text'
import type { RouteProp } from '@react-navigation/native'
import { Colors } from '@utils/colors'
import { Medium } from '@utils/fonts'
import S, { ls, type StorageKeys } from '@utils/storage'
import type { StackNav } from '@utils/types'
import { toReadableSize } from '@utils/utils'
import React, { useEffect, useState } from 'react'
import { Alert, Text, ToastAndroid, View } from 'react-native'

type ParamList = {
  MMKVDataEditor: MMKVDataEditorParamList
}

export type MMKVDataEditorParamList = {
  key?: StorageKeys
  new?: boolean
}

export default function MMKVDataEditor({
  navigation,
  route,
}: {
  navigation: StackNav
  route: RouteProp<ParamList, 'MMKVDataEditor'>
}) {
  const isNew = route.params.new === true
  const [key, setKey] = useState(route.params.key || '')
  const [value, setValue] = useState('')

  useEffect(() => {
    if (!isNew) {
      if (key) setValue(S.get(key as StorageKeys) || '')
    }
  }, [])

  function save() {
    if (key.length === 0) {
      ToastAndroid.show('Key cannot be empty', ToastAndroid.SHORT)
      return
    }
    ls.set(key as StorageKeys, value)
    ToastAndroid.show('Data saved', ToastAndroid.SHORT)
    navigation.goBack()
  }

  function deleteData() {
    Alert.alert('Delete data', 'Are you sure you want to delete this data?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          ls.delete(key as StorageKeys)
          navigation.goBack()
        },
      },
    ])
  }

  return (
    <>
      <SettWrapper
        navigation={navigation}
        title={isNew ? (key ? key : 'New MMKV data') : key}
        Header={
          <BackHeader
            navigation={navigation}
            title={isNew ? 'New MMKV data' : key}
            Right={<TxtAcc onPress={save}>Save</TxtAcc>}
          />
        }
      >
        <Gap12>
          <SettText className='mt-3'>Make sure you click on the save icon to save the data.</SettText>
          {isNew && (
            <>
              <SettGroup title='Key'>
                <Input
                  placeholder='Enter a key'
                  value={key}
                  pointerEvents='none'
                  selectTextOnFocus={false}
                  onChangeText={setKey}
                />
              </SettGroup>
              <SettText>
                Key is the identifier of the data. It must be unique. If the key already exists, the data will be
                overwritten and
                <Text className={key.length === 0 ? 'text-red-500' : ''}> cannot be empty.</Text>
              </SettText>
            </>
          )}

          {!isNew && (
            <SettGroup>
              <SettOption
                title='Delete this data'
                className='text-red-500'
                Icon={<Delete02Icon {...ic} className='text-red-500' />}
                onPress={deleteData}
                Right={<Medium className='text-red-500'>{toReadableSize(value?.length || 0)}</Medium>}
              />
            </SettGroup>
          )}
          <SettText>
            Be careful when {!isNew ? 'editing' : ' adding'} MMKV data. Wrong data can cause the app to crash. And make
            all data unreadable.
          </SettText>
          <SettGroup title='Value'>
            <Input
              placeholder='Enter a value'
              value={value}
              onChangeText={setValue}
              multiline
              style={{ fontFamily: 'monospace', fontWeight: 'bold', lineHeight: 24 }}
              autoCorrect={false}
            />
          </SettGroup>
        </Gap12>
        <SettText>You may need to restart the app to see the changes in the app.</SettText>
        <View className='h-12'></View>
      </SettWrapper>
      <FabIcon Icon={<FloppyDiskIcon height={25} width={25} color={Colors.white} />} onPress={save} />
    </>
  )
}
