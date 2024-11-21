import type { Chart, Process } from './lib'
import { MinPriorityQueue } from './MinPriorityQueue'

function comparator(a: Process, b: Process) {
  return a.arrivalTime === b.arrivalTime ? a.burstTime - b.burstTime : a.arrivalTime - b.arrivalTime
}

export default function shortestJobFirst(processes: Process[]) {
  const chart: Chart[] = []
  // Priority queue to store processes by burst time
  const queue = new MinPriorityQueue<Process>((p) => p.burstTime)
  // Sort processes by arrival time
  processes.sort(comparator)

  let currentTime = 0,
    i = 0

  while (i < processes.length || queue.size() > 0) {
    if (queue.isEmpty()) {
      queue.enqueue(processes[i]!)
      i++
      continue
    }

    const next = queue.dequeue()!

    if (currentTime < next.arrivalTime) {
      chart.push({
        name: 'idle',
        startTime: currentTime,
        endTime: next.arrivalTime,
        isBlank: true,
      })
      currentTime = next.arrivalTime
    }

    chart.push({
      name: next.name,
      startTime: currentTime,
      endTime: currentTime + next.burstTime,
    })

    currentTime += next.burstTime

    while (i < processes.length && processes[i]!.arrivalTime <= currentTime) {
      queue.enqueue(processes[i]!)
      i++
    }
  }
  return {
    chart,
    maxTime: currentTime,
  }
}

// const all: Process[] = [
//   { arrivalTime: 1, burstTime: 7, name: 'P0' },
//   { arrivalTime: 2, burstTime: 5, name: 'P1' },
//   { arrivalTime: 3, burstTime: 1, name: 'P2' },
//   { arrivalTime: 4, burstTime: 2, name: 'P3' },
//   { arrivalTime: 5, burstTime: 8, name: 'P4' },
// ]

// console.log(shortestJobFirst(all))
