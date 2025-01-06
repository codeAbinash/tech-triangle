import type { Process } from '@/lib/lib'
import shortestJobFirst from '@/lib/sjf'
import { Gap12 } from '@components/Gap'
import { SettText, SettWrapper } from '@components/Settings'
import { Medium } from '@utils/fonts'
import type { NavProp } from '@utils/types'
import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import ProcessForm from './components/ProcessForm'
import RunButton from './components/RunButton'
import popupStore from '@/zustand/popupStore'

const defaultProcesses = [
  { arrivalTime: '', burstTime: '', name: 'P1' },
  { arrivalTime: '', burstTime: '', name: 'P2' },
  { arrivalTime: '', burstTime: '', name: 'P3' },
  { arrivalTime: '', burstTime: '', name: 'P4' },
]

const sampleProcesses = [
  { arrivalTime: '4', burstTime: '2', name: 'P1' },
  { arrivalTime: '0', burstTime: '5', name: 'P2' },
  { arrivalTime: '2', burstTime: '3', name: 'P3' },
  { arrivalTime: '0', burstTime: '4', name: 'P4' },
  { arrivalTime: '1', burstTime: '6', name: 'P5' },
  { arrivalTime: '', burstTime: '', name: 'P6' },
]

export default function SJF({ navigation }: NavProp) {
  const [processes, setProcesses] = React.useState(defaultProcesses)
  const alert = popupStore((store) => store.alert)

  function onPlay() {
    const validProcesses = processes.filter((p) => p.arrivalTime && p.burstTime)
    if (validProcesses.length === 0) return alert('Error', 'At least one process is required')

    const all: Process[] = validProcesses.map((p) => ({
      arrivalTime: parseInt(p.arrivalTime, 10),
      burstTime: parseInt(p.burstTime, 10),
      name: p.name,
    }))

    const chart = shortestJobFirst(all)
    navigation.navigate('Chart', { title: 'SJF Gantt Chart', chart: chart.chart, maxTime: chart.maxTime })
  }

  useEffect(() => {
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
      <SettWrapper navigation={navigation} title='SJF Process Scheduling'>
        <Gap12 className='pb-8'>
          <SettText className='mt-3'>
            SJF (Shortest Job First) is a scheduling algorithm that selects the process with the smallest burst time.
          </SettText>
          <ProcessForm processes={processes} setProcesses={setProcesses} />
          <SettText>
            Any empty entry will be ignored. Press play to view the Gantt chart. Click to see how it works.
          </SettText>
          <SettText className='text-accent underline' onPress={() => setProcesses(sampleProcesses)}>
            Load sample data?
          </SettText>
        </Gap12>
      </SettWrapper>
      <RunButton onPlay={onPlay} />
    </>
  )
}
