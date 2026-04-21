import versionStore from '@/zustand/versionStore'
import { useQuery } from '@tanstack/react-query'
import { client } from '@utils/client'
import { APP_VERSION_CODE } from '@utils/constants'
import type { NavProp } from '@utils/types'
import { useEffect } from 'react'

export default function CheckVersion({ navigation }: NavProp) {
  const { data } = useQuery({
    queryKey: ['checkVersion'],
    queryFn: async () => await (await client.api.version.$get()).json(),
  })

  const setVersion = versionStore((state) => state.setVersion)

  useEffect(() => {
    if (data && data.status) {
      const isForceUpdate = APP_VERSION_CODE < Number(data.data?.criticalVersionCode)

      // Update the local version store
      setVersion({
        features: data.data?.features || [],
        size: data.data?.size.toString() || '0',
        version: data.data?.version.toString() || '0.0.0',
        versionCode: Number(data.data?.versionCode),
        criticalVersionCode: Number(data.data?.criticalVersionCode),
      })

      if (isForceUpdate) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Update', params: data.data ?? {} }],
        })
      }
    }
  }, [data, navigation, setVersion])

  return null
}
