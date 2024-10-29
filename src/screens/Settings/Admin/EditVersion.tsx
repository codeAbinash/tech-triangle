import versionStore from '@/zustand/versionStore'
import {
  FolderFileStorageSolidIcon,
  PlusSignSolidIcon,
  Setting07SolidIcon,
  StarOffSolidIcon,
  StarSolidIcon,
  StarsSolidIcon,
} from '@assets/icons/icons'
import Btn from '@components/Button'
import { Gap12 } from '@components/Gap'
import { Input } from '@components/Input'
import Press from '@components/Press'
import RoundedIcon from '@components/RoundedIcon'
import { Check, SettGroup, SettOption, SettText, SettWrapper } from '@components/Settings'
import SingleSkeleton from '@components/SingleSkeleton'
import { ColorList } from '@utils/colors'
import { SemiBold } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React, { useState } from 'react'
import { View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'

export default function EditVersion({ navigation }: NavProp) {
  const data = versionStore((state) => state.version)
  // const data = undefined // versionStore((state) => state.version)
  const [version, setVersion] = useState(data?.version || '')
  const [versionCode, setVersionCode] = useState((data?.versionCode || '').toString())
  const [size, setSize] = useState(data?.size || '')
  const [features, setFeatures] = useState(data?.features || [])
  const [forceUpdate, setForceUpdate] = useState<boolean>(data?.forceUpdate || false)

  return (
    <SettWrapper navigation={navigation} title='Edit Version'>
      <Gap12>
        <SettText className='mt-3'>Edit the details of the latest version of the app from here.</SettText>
        <SettGroup title={`Version (${data?.version})`}>
          {!data ? (
            <SingleSkeleton n={1} />
          ) : (
            <Input
              Icon={
                <Press
                  activeScale={0.9}
                  onPress={() => {
                    // Patch this
                    const split = version.split('.')
                    const lastSegment = split[split.length - 2] ?? '0'
                    const newVersion = parseInt(lastSegment, 10) + 1
                    split[split.length - 2] = newVersion.toString()
                    setVersion(split.join('.'))
                  }}
                >
                  <RoundedIcon Icon={StarSolidIcon} />
                </Press>
              }
              value={version}
              onChangeText={setVersion}
              Right={
                <Press
                  activeScale={0.9}
                  onPress={() => {
                    // Patch this
                    const split = version.split('.')
                    const lastSegment = split[split.length - 1] ?? '0'
                    const newVersion = parseInt(lastSegment, 10) + 1
                    split[split.length - 1] = newVersion.toString()
                    setVersion(split.join('.'))
                  }}
                >
                  <RoundedIcon Icon={PlusSignSolidIcon} />
                </Press>
              }
            />
          )}
        </SettGroup>
        <SettGroup title={`Version Code (${data?.versionCode})`}>
          {!data ? (
            <SingleSkeleton n={1} />
          ) : (
            <Input
              Icon={
                <Press activeScale={0.9} onPress={() => setVersionCode((parseInt(versionCode, 10) - 1).toString())}>
                  <RoundedIcon Icon={Setting07SolidIcon} className='bg-slate-500' />
                </Press>
              }
              value={versionCode}
              onChangeText={setVersionCode}
              Right={
                <Press activeScale={0.9} onPress={() => setVersionCode((parseInt(versionCode, 10) + 1).toString())}>
                  <RoundedIcon Icon={PlusSignSolidIcon} className='bg-gray-500' />
                </Press>
              }
            />
          )}
        </SettGroup>

        <SettGroup title={`Size (${data?.size})`}>
          {!data ? (
            <SingleSkeleton n={1} />
          ) : (
            <Input
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
                <Animated.View key={i} entering={FadeIn}>
                  <Input
                    Icon={
                      <View
                        className='flex items-center justify-center'
                        style={{
                          height: 28,
                          width: 28,
                          borderRadius: 10,
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
                </Animated.View>
              ))}
              <SettOption
                title='Add more features'
                className='text-accent'
                Icon={<RoundedIcon Icon={StarsSolidIcon} />}
                onPress={() => setFeatures([...features, ''])}
              />
            </>
          )}

          {/* <Input
                Icon={<RoundedIcon Icon={Setting07SolidIcon} className='bg-slate-500' />}
                // value={features}
                // onChangeText={setFeatures}
              />
              <Input
                Icon={<RoundedIcon Icon={Setting07SolidIcon} className='bg-slate-500' />}
                // value={features}
                // onChangeText={setFeatures}
              /> */}
        </SettGroup>

        <SettGroup title={`Force Update (${data?.forceUpdate ? 'Yes' : 'No'})`}>
          {!data ? (
            <SingleSkeleton n={2} />
          ) : (
            <>
              <SettOption
                title='Yes'
                Icon={<RoundedIcon Icon={StarSolidIcon} />}
                onPress={() => setForceUpdate(true)}
                Right={<Check checked={forceUpdate} />}
              />
              <SettOption
                title='No'
                Icon={<RoundedIcon Icon={StarOffSolidIcon} className='bg-red-500' />}
                onPress={() => setForceUpdate(false)}
                Right={<Check checked={!forceUpdate} />}
              />
            </>
          )}
        </SettGroup>
      </Gap12>
      <View className='mt-2 px-5 pb-10'>
        <Btn
          title='Save Changes'
          onPress={() => console.log('Save')}
          disabled={!version || !versionCode || !size || !features.length}
        />
      </View>
    </SettWrapper>
  )
}
