import authStore from '@/zustand/authStore'
// import hcWithType from '../../../tech-triangle-web/dist/app/rpc/hcWithType'
import hcWithType from '../rpc/hcWithType'

//@ts-ignore
// import { hc } from '../../node_modules/hono/dist/client/client'
import { hc } from 'hono/dist/client/client'
import { WEB } from './constants'

const address = WEB

export const client = (hc as typeof hcWithType)(address)

export function getClient() {
  const { token } = authStore()
  if (!token) return client
  else
    return (hc as typeof hcWithType)(address, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
}
