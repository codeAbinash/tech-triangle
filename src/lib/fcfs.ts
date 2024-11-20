export type Process = {
  arrivalTime: number
  burstTime: number
  name: string
}

export type Chart = {
  name: string
  startTime: number
  endTime: number
  isBlank?: boolean
}

// const all: Process[] = [
//   { arrivalTime: 1, burstTime: 1, name: 'P1' },
//   { arrivalTime: 5, burstTime: 5, name: 'P2' },
//   { arrivalTime: 7, burstTime: 2, name: 'P3' },
//   { arrivalTime: 7, burstTime: 4, name: 'P4' },
//   { arrivalTime: 42, burstTime: 6, name: 'P5' },
// ]

/**
 *
 * @param processes
 * @returns The chart of the processes
 */
export function firstComeFirstServe(processes: Process[]) {
  processes.sort((a, b) => a.arrivalTime - b.arrivalTime)
  const chart: Chart[] = []
  let currentTime = 0
  // Loop through each process
  console.log(processes)
  for (const process of processes) {
    // If the process has not arrived yet
    if (currentTime < process.arrivalTime) {
      // Add a blank space to the chart
      chart.push({
        name: '',
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

  // Print chart
  console.log(chart)
  return {
    maxTime: currentTime,
    chart,
  }
}
