const f = new Intl.RelativeTimeFormat('en-us', { numeric: 'auto', style: 'long' })

const MIN = 60
const HOUR = MIN * 60
const DAY = HOUR * 24
const MONTH = DAY * 30
const YEAR = DAY * 365

const units: { unit: Intl.RelativeTimeFormatUnit; value: number }[] = [
  { unit: 'year', value: YEAR },
  { unit: 'month', value: MONTH },
  { unit: 'day', value: DAY },
  { unit: 'hour', value: HOUR },
  { unit: 'minute', value: MIN },
  { unit: 'second', value: 1 },
]

export function getRelativeTime(date1: number | undefined, date2: number = new Date().getTime()) {
  if (!date1) return 'Unknown Time'
  const diffInSeconds = (date1 - date2) / 1000
  for (const { unit, value } of units) {
    const relativeValue = diffInSeconds / value
    if (Math.abs(relativeValue) >= 1) {
      return f.format(Math.round(relativeValue), unit)
    }
  }
  return f.format(0, 'second')
}
