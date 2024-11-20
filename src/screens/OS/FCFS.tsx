import { PlaySolidIcon } from '@assets/icons/icons'
import { Gap12 } from '@components/Gap'
import Press from '@components/Press'
import { SettText, SettWrapper } from '@components/Settings'
import { Colors } from '@utils/colors'
import { Medium, PoppinsMedium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React, { useEffect } from 'react'
import { Alert, StyleSheet, View, type TextInputProps } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated'
import { firstComeFirstServe, type Process } from '../../lib/fcfs'

type ProcessUI = {
  arrivalTime: string
  burstTime: string
  name: string
}

function Box({ text }: { text: string }) {
  return (
    <Medium
      className='rounded-lg bg-white py-4 text-center text-xs text-black dark:bg-zinc-900 dark:text-white'
      style={styles.box}
    >
      {text}
    </Medium>
  )
}

function BoxInput({ value, onChangeText, placeholder, ...rest }: TextInputProps) {
  return (
    <TextInput
      cursorColor={Colors.accent}
      value={value}
      placeholderTextColor={Colors.zinc[400]}
      className='rounded-lg bg-white px-2 text-center text-xs dark:bg-zinc-900 dark:text-white'
      style={styles.box}
      onChangeText={onChangeText}
      placeholder={placeholder}
      selectionColor={Colors.accent + '55'}
      autoComplete='off'
      numberOfLines={1}
      {...rest}
    />
  )
}

const defaultProcesses: ProcessUI[] = [
  { arrivalTime: '', burstTime: '', name: 'P1' },
  { arrivalTime: '', burstTime: '', name: 'P2' },
  { arrivalTime: '', burstTime: '', name: 'P3' },
  { arrivalTime: '', burstTime: '', name: 'P4' },
]

const sampleProcesses: ProcessUI[] = [
  { arrivalTime: '4', burstTime: '2', name: 'P1' },
  { arrivalTime: '0', burstTime: '5', name: 'P2' },
  { arrivalTime: '2', burstTime: '3', name: 'P3' },
  { arrivalTime: '0', burstTime: '4', name: 'P4' },
  { arrivalTime: '1', burstTime: '6', name: 'P5' },
]

export default function FCFS({ navigation }: NavProp) {
  const [processes, setProcesses] = React.useState<ProcessUI[]>(defaultProcesses)

  function set(index: number, fn: (value: ProcessUI) => void) {
    const newProcesses = [...processes]
    if (newProcesses[index]) fn(newProcesses[index])
    setProcesses(newProcesses)
  }

  function onPlay() {
    // Check if all input fields are filled
    const validProcesses = processes.filter((process) => process.arrivalTime && process.burstTime)
    if (validProcesses.length === 0) return Alert.alert('Error', 'At least one process is required')

    const all: Process[] = []
    for (const process of validProcesses) {
      const arrivalTime = parseInt(process.arrivalTime, 10)
      const burstTime = parseInt(process.burstTime, 10)

      if (isNaN(arrivalTime) || isNaN(burstTime))
        return Alert.alert('Error in ' + process.name, 'Please enter a valid number')
      if (arrivalTime < 0) return Alert.alert('Error in ' + process.name, 'Please enter a positive arrival time')
      if (burstTime <= 0) return Alert.alert('Error in ' + process.name, 'Please enter a positive burst time')

      all.push({ arrivalTime, burstTime, name: process.name })
    }

    const chart = firstComeFirstServe(all)
    navigation.navigate('Chart', { title: 'FCFS Gantt Chart', chart: chart.chart, maxTime: chart.maxTime })
  }

  useEffect(() => {
    // Check if new row should be added
    const timer = setTimeout(() => {
      const lastRow = processes[processes.length - 1]
      if (lastRow && lastRow.arrivalTime && lastRow.burstTime) {
        setProcesses([...processes, { arrivalTime: '', burstTime: '', name: `P${processes.length + 1}` }])
      }
    }, 0)
    return () => clearTimeout(timer)
  }, [processes])

  return (
    <>
      <SettWrapper navigation={navigation} title='FCFS Process Scheduling'>
        <Gap12 className='pb-8'>
          <SettText className='mt-3'>
            FCFS (First Come First Serve) is a scheduling algorithm that schedules according to the arrival time of the
            processes.
          </SettText>
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
          <SettText>
            Any empty entry will be ignored. Press play to view the Gantt chart. Click Do you want to load a{' '}
            <Medium className='text-accent underline' onPress={() => setProcesses(sampleProcesses)}>
              Load sample{' '}
            </Medium>{' '}
            to see how it works.
          </SettText>
        </Gap12>
      </SettWrapper>
      <Animated.View
        entering={ZoomIn.duration(200)}
        exiting={ZoomOut.duration(200)}
        className='absolute bottom-7 right-5 z-10'
      >
        <Press
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 2,
              height: 2,
            },
            elevation: 6,
            shadowOpacity: 0.5,
            height: 60,
            width: 60,
          }}
          activeOpacity={0.9}
          activeScale={0.95}
          className='items-center justify-center rounded-full bg-accent'
          onPress={onPlay}
        >
          <PlaySolidIcon className='text-white' height={25} width={25} />
        </Press>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  row: { marginTop: `${(100 - 32 * 3) / 3}%` },
  box: { width: '32.3%', ...PoppinsMedium },
})
