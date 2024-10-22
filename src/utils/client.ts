import hcWithType from '../../../tech-triangle-web/dist/app/rpc/hcWithType.js'

export const client = hcWithType('https://techtriangle.vercel.app/')

// async function load() {
//   const res = await client.api.$get()
//   const data = await res.json()
//   console.log(data)
// }

// load()

// async function getVersion() {
//   const res = await client.api.version.$get()
//   const data = await res.json()
//   console.log(data)
// }

// getVersion()
