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
      const isNew = APP_VERSION_CODE < data.data?.versionCode
      setVersion({
        features: data.data?.features,
        forceUpdate: data.data?.forceUpdate,
        size: data.data?.size,
        version: data.data?.version,
        versionCode: data.data?.versionCode,
      })
      if (isNew) {
        console.log('New Version Available')
        if (data.data?.forceUpdate) {
          console.log('Force Update')
          navigation.reset({
            index: 0,
            routes: [{ name: 'Update', params: data.data }],
          })
        } else {
          console.log('Update Available')
        }
      }
    }
  }, [data, navigation, setVersion])

  return null
}
