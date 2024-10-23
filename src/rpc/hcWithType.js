import { hc } from 'hono/client'
// assign the client to a variable to calculate the type when compiling
const client = hc('')
export const hcWithType = (...args) => hc(...args)
export default hcWithType
// WARNING: DO NOT USE this before compiling
// Instead use ./client.ts to get the client
