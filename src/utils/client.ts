import hcWithType from '../../../tech-triangle-web/dist/app/rpc/hcWithType'
//@ts-ignore
import { hc } from '../../node_modules/hono/dist/client/client'

export const client = (hc as typeof hcWithType)('https://techtriangle.vercel.app/')
