import EdgeIcon from '@assets/icons/extra/edge.svg'
import FirefoxIcon from '@assets/icons/extra/firefox.svg'
import LinuxIcon from '@assets/icons/extra/linux.svg'
import OperaIcon from '@assets/icons/extra/opera.svg'
import SafariIcon from '@assets/icons/extra/safari.svg'
import {
  AndroidSolidIcon,
  AppleSolidIcon,
  ChromeSolidIcon,
  DeviceAccessSolidIcon,
  WindowsOldSolidIcon,
} from '@assets/icons/icons'
import RoundedIcon from '@components/RoundedIcon'
import type { NU } from '@utils/types'
import React from 'react'
export function getDate(n: number | undefined) {
  if (!n) return 'Unknown'
  return 'On ' + new Date(n).toLocaleString()
}

export function getDeviceIcon(os: string | NU, name: string | NU) {
  if (os?.includes('Android')) return <RoundedIcon Icon={AndroidSolidIcon} className='bg-green-500' />
  else if (os?.includes('iOS')) return <RoundedIcon Icon={AppleSolidIcon} className='bg-black' />
  else if (name?.includes('Chrome')) return <RoundedIcon Icon={ChromeSolidIcon} className='bg-blue-500' />
  else if (name?.includes('Edge')) return <RoundedIcon Icon={EdgeIcon} className='bg-cyan-500' />
  else if (name?.includes('Opera')) return <RoundedIcon Icon={OperaIcon} className='bg-rose-600' />
  else if (name?.includes('Firefox')) return <RoundedIcon Icon={FirefoxIcon} className='bg-orange-500' />
  else if (name?.includes('Safari')) return <RoundedIcon Icon={SafariIcon} className='bg-blue-500' />
  else if (os?.includes('Windows')) return <RoundedIcon Icon={WindowsOldSolidIcon} className='bg-blue-500' />
  else if (os?.includes('Linux')) return <RoundedIcon Icon={LinuxIcon} className='bg-black' />
  else return <RoundedIcon Icon={DeviceAccessSolidIcon} className='bg-rose-500' />
}

export function getOSIcon(os: string | NU) {
  if (os?.includes('Android')) return <RoundedIcon Icon={AndroidSolidIcon} className='bg-green-500' />
  else if (os?.includes('iOS')) return <RoundedIcon Icon={AppleSolidIcon} className='bg-black' />
  else if (os?.includes('Windows')) return <RoundedIcon Icon={WindowsOldSolidIcon} className='bg-blue-500' />
  else if (os?.includes('Linux')) return <RoundedIcon Icon={LinuxIcon} className='bg-black' />
  else return <RoundedIcon Icon={DeviceAccessSolidIcon} className='bg-rose-500' />
}
