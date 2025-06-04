import EdgeIcon from '@assets/icons/extra/edge.svg'
import FirefoxIcon from '@assets/icons/extra/firefox.svg'
import LinuxIcon from '@assets/icons/extra/linux.svg'
import OperaIcon from '@assets/icons/extra/opera.svg'
import SafariIcon from '@assets/icons/extra/safari.svg'
import RoundIcon from '@components/RoundIcon'
import AndroidIcon from '@hugeicons/AndroidIcon'
import AppleIcon from '@hugeicons/AppleIcon'
import ChromeIcon from '@hugeicons/ChromeIcon'
import DeviceAccessIcon from '@hugeicons/DeviceAccessIcon'
import WindowsOldIcon from '@hugeicons/WindowsOldIcon'
import type { NU } from '@utils/types'
export function getDate(n: number | undefined) {
  if (!n) return 'Unknown'
  return 'On ' + new Date(n).toLocaleString()
}

export function getDeviceIcon(os: string | NU, name: string | NU) {
  if (os?.includes('Android')) return <RoundIcon Icon={AndroidIcon} className='bg-green-500' />
  else if (os?.includes('iOS')) return <RoundIcon Icon={AppleIcon} className='bg-black' />
  else if (name?.includes('Chrome')) return <RoundIcon Icon={ChromeIcon} className='bg-blue-500' />
  else if (name?.includes('Edge')) return <RoundIcon Icon={EdgeIcon} className='bg-cyan-500' />
  else if (name?.includes('Opera')) return <RoundIcon Icon={OperaIcon} className='bg-rose-600' />
  else if (name?.includes('Firefox')) return <RoundIcon Icon={FirefoxIcon} className='bg-orange-500' />
  else if (name?.includes('Safari')) return <RoundIcon Icon={SafariIcon} className='bg-blue-500' />
  else if (os?.includes('Windows')) return <RoundIcon Icon={WindowsOldIcon} className='bg-blue-500' />
  else if (os?.includes('Linux')) return <RoundIcon Icon={LinuxIcon} className='bg-black' />
  else return <RoundIcon Icon={DeviceAccessIcon} className='bg-rose-500' />
}

export function getOSIcon(os: string | NU) {
  if (os?.includes('Android')) return <RoundIcon Icon={AndroidIcon} className='bg-green-500' />
  else if (os?.includes('iOS')) return <RoundIcon Icon={AppleIcon} className='bg-black' />
  else if (os?.includes('Windows')) return <RoundIcon Icon={WindowsOldIcon} className='bg-blue-500' />
  else if (os?.includes('Linux')) return <RoundIcon Icon={LinuxIcon} className='bg-black' />
  else return <RoundIcon Icon={DeviceAccessIcon} className='bg-rose-500' />
}
