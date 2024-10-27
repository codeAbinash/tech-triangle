import React, { useMemo } from 'react'
import { View } from 'react-native'
import { RoundedIconSkeleton } from './RoundedIcon'
import { Skeleton } from './Skeleton'

export default function SingleSkeleton({ n }: { n: number }) {
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

  return (
    <Skeleton>
      <View className='flex-row items-center px-6' style={{ marginVertical: 3 }}>
        <RoundedIconSkeleton />
        <View className='ml-4 flex-1'>
          <View style={{ width: `${randomWidth1}%` }} className='h-4 rounded-md bg-zinc-200 dark:bg-zinc-800' />
        </View>
      </View>
    </Skeleton>
  )
}
