// const all: Process[] = [
//   { arrivalTime: 1, burstTime: 1, name: 'P1' },
//   { arrivalTime: 5, burstTime: 5, name: 'P2' },
//   { arrivalTime: 7, burstTime: 2, name: 'P3' },
//   { arrivalTime: 7, burstTime: 4, name: 'P4' },
//   { arrivalTime: 42, burstTime: 6, name: 'P5' },
// ]

import type { Chart, Process } from './lib'

/**
 *
 * @param processes
 * @returns The chart of the processes
 */
export default function firstComeFirstServe(processes: Process[]) {
  processes.sort((a, b) => a.arrivalTime - b.arrivalTime)
  const chart: Chart[] = []
  let currentTime = 0
  // Loop through each process
  for (const process of processes) {
    // If the process has not arrived yet
    if (currentTime < process.arrivalTime) {
      // Add a blank space to the chart
      chart.push({
        name: 'idle',
        startTime: currentTime,
        endTime: process.arrivalTime,
        isBlank: true,
      })
      currentTime = process.arrivalTime
    }

    chart.push({
      name: process.name,
      startTime: currentTime,
      endTime: currentTime + process.burstTime,
    })
    currentTime += process.burstTime
  }

  return {
    maxTime: currentTime,
    chart,
  }
}
