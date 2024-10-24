import authStore from '@/zustand/authStore'
// import hcWithType from '../../../tech-triangle-web/dist/app/rpc/hcWithType'
import hcWithType from '../rpc/hcWithType'

//@ts-ignore
// import { hc } from '../../node_modules/hono/dist/client/client'
import { hc } from 'hono/dist/client/client'
import { WEB } from './constants'

const address = WEB
// const address = 'http://192.168.137.40:3000/'

let client = (hc as typeof hcWithType)(address, {
  headers() {
    const { token } = authStore.getState()
    if (!token)
      return {
        Authorization: '',
      }
    return {
      Authorization: `Bearer ${token}`,
    }
  },
})

// export function getClient() {
//   const { token } = authStore()
//   if (!token) return client
//   else
//     return (hc as typeof hcWithType)(address, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
// }

export function updateClientHeader(token: string) {
  client = (hc as typeof hcWithType)(address, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export { client }
