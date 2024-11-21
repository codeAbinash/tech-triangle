import React from 'react'
import { View } from 'react-native'
import { Box, BoxInput, styles } from './Box'

type ProcessUI = {
  arrivalTime: string
  burstTime: string
  name: string
}

export default function ProcessForm({
  processes,
  setProcesses,
}: {
  processes: ProcessUI[]
  setProcesses: React.Dispatch<React.SetStateAction<ProcessUI[]>>
}) {
  function set(index: number, fn: (value: ProcessUI) => void) {
    const newProcesses = [...processes]
    if (newProcesses[index]) fn(newProcesses[index])
    setProcesses(newProcesses)
  }

  return (
    <View className='px-5'>
      <View className='mt-1 flex-row justify-between'>
        <Box text='Process' />
        <Box text='Arrival Time' />
        <Box text='Burst Time' />
      </View>
      <View>
        {processes.map((process, index) => (
          <View key={index} className='w-full flex-row justify-between' style={styles.row}>
            <BoxInput
              value={process.name}
              onChangeText={(text) => set(index, (_) => (process.name = text))}
              placeholder={'P' + (index + 1)}
            />
            <BoxInput
              value={process.arrivalTime}
              onChangeText={(text) => set(index, (_) => (process.arrivalTime = text))}
              placeholder='0'
              keyboardType='numeric'
            />
            <BoxInput
              value={process.burstTime}
              onChangeText={(text) => set(index, (_) => (process.burstTime = text))}
              placeholder='0'
              keyboardType='numeric'
            />
          </View>
        ))}
      </View>
    </View>
  )
}
