import AppIconRound from '@assets/icons/icon_round.svg'
// import { client } from '@utils/client'
import { APP_VERSION } from '@utils/data'
import { SemiBold } from '@utils/fonts'
import React, { version } from 'react'
import { View } from 'react-native'
//@ts-ignore
// import { hc } from '../../../../node_modules/hono/dist/client/client'

// import hcWithType from './hcWithType'

// const c = hcWithType('https://techtriangle.vercel.app/')

// import { x } from '../../../../../tech-triangle-web/test'
// import hcWithType from '../../../../../tech-triangle-web/app/rpc/hcWithType'

// export const client = hcWithType('https://techtriangle.vercel.app/')

export default function About() {
  // const [version, setVersion] = useState('')

  // async function loadVersion() {
  //   const res = await c.api.version.$get()
  //   // const res = await client.api.version.$get()
  //   const v = await res.json()
  //   setVersion(v.data?.version)
  // }
  // useEffect(() => {
  //   loadVersion()
  //   // console.log(x)
  // }, [])

  return (
    <View className='flex-1 items-center justify-center'>
      <AppIconUI />
      <SemiBold className='text-base text-black dark:text-white'>Tech Triangle</SemiBold>
      <SemiBold className='text-xs text-black/50 dark:text-white'>v{APP_VERSION}</SemiBold>
      <SemiBold className='text-xs text-black/50 dark:text-white'>v{version}</SemiBold>
    </View>
  )
}

export function AppIconUI() {
  return (
    <View className='flex-row items-center justify-center'>
      <View className='my-5 bg-appIconBg p-1' style={{ borderRadius: 28 }}>
        <AppIconRound width={100} height={100} />
      </View>
    </View>
  )
}
