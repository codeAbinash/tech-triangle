import { profileStore } from '@/zustand/profileStore-x'
import { Gap12 } from '@components/Gap'
import SettText from '@components/Settings/SettText'
import SettWrapper from '@components/Settings/SettWrapper'
import { Medium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React, { useCallback, useEffect, useMemo } from 'react'

export default function YourAge({ navigation }: NavProp) {
  const birthDay = profileStore((state) => state.birthday)
  const [second, setSecond] = React.useState(0)

  const dateData = useMemo(() => {
    const birthDateArray = birthDay.split('-')
    const date = +birthDateArray[0]!
    const month = +birthDateArray[1]!
    const year = +birthDateArray[2]!
    return { date, month, year }
  }, [birthDay])

  useEffect(() => {
    const timer = setTimeout(() => getAge(), 1000)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [second])

  const getAge = useCallback(() => {
    const { date, month, year } = dateData
    const today = new Date().getTime()
    const birthDate = new Date(year, month, date).getTime()
    setSecond(Math.floor((today - birthDate) / 1000))
  }, [dateData])

  useEffect(() => getAge(), [birthDay, getAge])
  return (
    <SettWrapper title='Your Age'>
      <Gap12>
        <SettText className='mt-3'>Here you can see your age in years, months, days etc.</SettText>
        <Medium className='mt-6 text-center text-3xl text-black/70 dark:text-white/70'>{second}s</Medium>
      </Gap12>
    </SettWrapper>
  )
}
