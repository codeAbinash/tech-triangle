import versionValidator from '@/zod/version'
import popupStore from '@/zustand/popupStore'
import versionStore from '@/zustand/versionStore'
import {
  FolderFileStorageSolidIcon,
  PlusSignSolidIcon,
  Setting07SolidIcon,
  StarSolidIcon,
  StarsSolidIcon,
} from '@assets/icons/icons'
import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import Press from '@components/Press'
import RoundedIcon from '@components/RoundedIcon'
import SettGroup from '@components/Settings/SettGroup'
import { SettOption } from '@components/Settings/SettOption'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import SingleSkeleton from '@components/SingleSkeleton'
import { queryClient } from '@query/index'
import { useMutation } from '@tanstack/react-query'
import { client } from '@utils/client'
import { ColorList } from '@utils/colors'
import { APP_VERSION, APP_VERSION_CODE } from '@utils/constants'
import { SemiBold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import { useCallback, useState } from 'react'
import { Text, ToastAndroid, View } from 'react-native'

type VersionData = {
  version: string
  versionCode: number
  updateSize: string
  features: string[]
  criticalVersionCode: number
}

export default function EditVersion({ navigation }: NavProp) {
  const alert = popupStore((state) => state.alert)
  const data = versionStore((state) => state.version)
  const [version, setVersion] = useState(data?.version || '')
  const [versionCode, setVersionCode] = useState((data?.versionCode || '').toString())
  const [size, setSize] = useState(data?.size || '')
  const [features, setFeatures] = useState(data?.features || [])
  const [criticalVersionCode, setCriticalVersionCode] = useState((data?.criticalVersionCode || '').toString())

  const { mutate, isPending } = useMutation({
    mutationKey: ['editVersion', version, versionCode, size, features],
    mutationFn: async (d: VersionData) => await (await client.api.admin.updateVersion.$post({ json: d })).json(),
    onSuccess: (d) => {
      if (!d || !d.status) return ToastAndroid.show('Failed to update version', ToastAndroid.SHORT)
      queryClient.invalidateQueries({ queryKey: ['checkVersion'] })
      ToastAndroid.show('Version updated successfully', ToastAndroid.SHORT)
      navigation.goBack()
    },
  })

  function handleSubmit() {
    alert('Update version?', generateVersionUpdateMessage(version, versionCode, data, criticalVersionCode, size), [
      { text: 'No, cancel' },
      { text: 'Yes, update', onPress: promptUpdate },
    ])
  }

  function promptUpdate() {
    const isGreater = parseInt(criticalVersionCode, 10) > APP_VERSION_CODE
    if (!isGreater) return update()

    alert(
      'Warning!',
      `You are about to set the critical version code to ${criticalVersionCode} which is greater than the current version code ${APP_VERSION_CODE}. This will force the users to update the app. Also this application cannot be opened until the update is done. Are you sure you have uploaded the new APK? Are you sure you want to force update?`,
      [{ text: 'No, cancel' }, { text: 'Yes, force update', onPress: update }],
    )
  }

  function update() {
    const newFeatures = features.filter((item) => item.trim() !== '')
    setFeatures(newFeatures)

    const { error, data: d } = versionValidator.safeParse({
      version,
      versionCode: parseInt(versionCode, 10),
      features: newFeatures,
      updateSize: size,
      criticalVersionCode: parseInt(criticalVersionCode, 10),
    })

    if (error) return ToastAndroid.show(error.errors[0]?.message || '', ToastAndroid.SHORT)
    mutate({
      ...d,
    })
  }

  const incrementMajorVersion = useCallback(() => {
    const split = version.split('.')
    split[split.length - 2] = (parseInt(split[split.length - 2] || '0', 10) + 1).toString()
    split[split.length - 1] = '0'
    setVersion(split.join('.'))
  }, [version])

  const incrementMinorVersion = useCallback(() => {
    const split = version.split('.')
    split[split.length - 1] = (parseInt(split.pop() || '0', 10) + 1).toString()
    setVersion(split.join('.'))
  }, [version])

  return (
    <SettWrapper navigation={navigation} title='Edit Version'>
      <Gap12>
        <View>
          <SettText className='mt-3'>
            Current APK version is <Text className='text-blue-500'>{APP_VERSION}</Text> and code is{' '}
            <Text className='text-blue-500'>{APP_VERSION_CODE}</Text>. You can update the version and code below.
          </SettText>
        </View>
        <SettGroup title={`Version (${data?.version || '  '})`}>
          {!data ? (
            <SingleSkeleton n={1} />
          ) : (
            <Input
              Icon={
                <Press activeScale={0.9} onPress={incrementMajorVersion}>
                  <RoundedIcon Icon={Setting07SolidIcon} className='bg-gray-500' />
                </Press>
              }
              placeholder='e.g. 2.6.8'
              value={version}
              onChangeText={setVersion}
              Right={
                <Press activeScale={0.9} onPress={incrementMinorVersion}>
                  <RoundedIcon Icon={PlusSignSolidIcon} className='bg-gray-500' />
                </Press>
              }
            />
          )}
        </SettGroup>
        <SettGroup title={`Version Code (${data?.versionCode || '  '})`}>
          {!data ? (
            <SingleSkeleton n={1} />
          ) : (
            <Input
              Icon={
                <Press activeScale={0.9} onPress={() => setVersionCode((parseInt(versionCode, 10) - 1).toString())}>
                  <RoundedIcon Icon={StarSolidIcon} />
                </Press>
              }
              placeholder='e.g. 268'
              value={versionCode}
              onChangeText={setVersionCode}
              Right={
                <Press activeScale={0.9} onPress={() => setVersionCode((parseInt(versionCode, 10) + 1).toString())}>
                  <RoundedIcon Icon={PlusSignSolidIcon} />
                </Press>
              }
            />
          )}
        </SettGroup>
        <SettGroup title={`Critical Version Code (${data?.criticalVersionCode || '  '})`}>
          {!data ? (
            <SingleSkeleton n={1} />
          ) : (
            <Input
              Icon={
                <Press
                  activeScale={0.9}
                  onPress={() => setCriticalVersionCode((parseInt(criticalVersionCode, 10) - 1).toString())}
                >
                  <RoundedIcon Icon={StarSolidIcon} className='bg-red-500' />
                </Press>
              }
              placeholder='e.g. 268'
              value={criticalVersionCode}
              onChangeText={setCriticalVersionCode}
              Right={
                <Press
                  activeScale={0.9}
                  onPress={() => setCriticalVersionCode((parseInt(criticalVersionCode, 10) + 1).toString())}
                >
                  <RoundedIcon Icon={PlusSignSolidIcon} className='bg-red-500' />
                </Press>
              }
            />
          )}
        </SettGroup>

        <SettGroup title={`Size (${data?.size || '  '})`}>
          {!data ? (
            <SingleSkeleton n={1} />
          ) : (
            <Input
              placeholder='e.g. 12 MB'
              Icon={<RoundedIcon Icon={FolderFileStorageSolidIcon} className='bg-yellow-500' />}
              value={size}
              onChangeText={setSize}
            />
          )}
        </SettGroup>

        <SettGroup title='Features'>
          {!data ? (
            <SingleSkeleton n={3} />
          ) : (
            <>
              {features.map((item, i) => (
                // <Animated.View key={i} entering={FadeIn}>
                <Input
                  key={i}
                  Icon={
                    <View
                      className='flex items-center justify-center'
                      style={{
                        height: 28,
                        width: 28,
                        borderRadius: 9.5,
                        backgroundColor: ColorList[i % ColorList.length],
                      }}
                    >
                      <SemiBold className='justify-center pt-0.5 text-center text-xs text-white'>{i + 1}</SemiBold>
                    </View>
                  }
                  value={item}
                  multiline
                  placeholder={`Feature description ${i + 1}`}
                  onChangeText={(text) => {
                    const newFeatures = [...features]
                    newFeatures[i] = text
                    setFeatures(newFeatures)
                  }}
                />
                // </Animated.View>
              ))}
              <SettOption
                title='Add more features'
                className='text-accent'
                Icon={<RoundedIcon Icon={StarsSolidIcon} />}
                onPress={() => setFeatures([...features, ''])}
              />
            </>
          )}
        </SettGroup>
      </Gap12>
      <View className='mt-2 px-5 pb-10'>
        <Btn title={isPending ? 'Updating...' : 'Update'} onPress={handleSubmit} disabled={isPending} />
      </View>
    </SettWrapper>
  )
}

function generateVersionUpdateMessage(
  version: string,
  versionCode: string,
  data: {
    versionCode: number
    criticalVersionCode: number
    version: string
    features: Array<string>
    size: string
  } | null,
  criticalVersionCode: string,
  size: string,
): string {
  return `version: ${data?.version} --> ${version}${data?.version === version ? '' : ' (changed)'}\nversionCode: ${data?.versionCode} --> ${versionCode}${data?.versionCode.toString() === versionCode ? '' : ' (changed)'}\ncriticalVCode: ${data?.criticalVersionCode} --> ${criticalVersionCode}${data?.criticalVersionCode.toString() === criticalVersionCode ? '' : ' (changed)'}\nSize: ${data?.size} --> ${size}${data?.size === size ? '' : ' (changed)'}`
}
// <SettGroup title={`Force Update (${data?.forceUpdate ? 'Yes' : 'No'})`}>
//   {!data ? (
//     <SingleSkeleton n={2} />
//   ) : (
//     <>
//       <SettOption
//         title='Yes'
//         Icon={<RoundedIcon Icon={StarSolidIcon} />}
//         onPress={() => setForceUpdate(true)}
//         Right={<Check checked={forceUpdate} />}
//       />
//       <SettOption
//         title='No'
//         Icon={<RoundedIcon Icon={StarOffSolidIcon} className='bg-red-500' />}
//         onPress={() => setForceUpdate(false)}
//         Right={<Check checked={!forceUpdate} />}
//       />
//     </>
//   )}
// </SettGroup>
