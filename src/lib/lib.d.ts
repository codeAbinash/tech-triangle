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
