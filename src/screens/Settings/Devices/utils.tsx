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
  if (os?.includes('Android')) return <RoundIcon Icon={AndroidIcon} gradient='green' />
  else if (os?.includes('iOS')) return <RoundIcon Icon={AppleIcon} className='bg-black' />
  else if (name?.includes('Chrome')) return <RoundIcon Icon={ChromeIcon} gradient='blue' />
  else if (name?.includes('Edge')) return <RoundIcon Icon={EdgeIcon} gradient='cyan' />
  else if (name?.includes('Opera')) return <RoundIcon Icon={OperaIcon} gradient='rose' />
  else if (name?.includes('Firefox')) return <RoundIcon Icon={FirefoxIcon} gradient='orange' />
  else if (name?.includes('Safari')) return <RoundIcon Icon={SafariIcon} gradient='blue' />
  else if (os?.includes('Windows')) return <RoundIcon Icon={WindowsOldIcon} gradient='blue' />
  else if (os?.includes('Linux')) return <RoundIcon Icon={LinuxIcon} className='bg-black' />
  else return <RoundIcon Icon={DeviceAccessIcon} gradient='rose' />
}

export function getOSIcon(os: string | NU) {
  if (os?.includes('Android')) return <RoundIcon Icon={AndroidIcon} gradient='green' />
  else if (os?.includes('iOS')) return <RoundIcon Icon={AppleIcon} className='bg-black' />
  else if (os?.includes('Windows')) return <RoundIcon Icon={WindowsOldIcon} gradient='blue' />
  else if (os?.includes('Linux')) return <RoundIcon Icon={LinuxIcon} className='bg-black' />
  else return <RoundIcon Icon={DeviceAccessIcon} gradient='rose' />
}
