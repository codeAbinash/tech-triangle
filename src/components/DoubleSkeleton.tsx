import { useMemo } from 'react'
import { View } from 'react-native'
import { RoundedIconSkeleton } from './RoundedIcon'
import { Skeleton } from './Skeleton'

export default function DoubleSkeleton({ n }: { n: number }) {
  const arr = useMemo(() => Array.from({ length: n }), [n])
  return (
    <>
      {arr.map((_, i) => (
        <UserSkeleton key={i} />
      ))}
    </>
  )
}

function UserSkeleton() {
  const randomWidth1 = useMemo(() => Math.random() * 50 + 30, []) // Random width between 30% and 80%
  const randomWidth2 = useMemo(() => Math.random() * 50 + 30, []) // Random width between 30% and 80%

  return (
    <Skeleton>
      <View className='my-2.5 flex-row items-center px-6'>
        <RoundedIconSkeleton />
        <View className='ml-4 flex-1'>
          <View style={{ width: `${randomWidth1}%` }} className='h-4 rounded-md bg-zinc-200 dark:bg-zinc-800' />
          <View
            style={{ width: `${randomWidth2}%` }}
            className='mt-1.5 h-3.5 rounded-md bg-zinc-200 dark:bg-zinc-800'
          />
        </View>
      </View>
    </Skeleton>
  )
}
