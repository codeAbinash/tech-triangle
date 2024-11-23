export class MinPriorityQueue<T> {
  private heap: { element: T; priority: number }[] = []

  constructor(private priorityFn: (element: T) => number) {}

  enqueue(element: T) {
    const priority = this.priorityFn(element)
    this.heap.push({ element, priority })
    this.bubbleUp()
  }

  dequeue(): T | undefined {
    if (this.size() === 0) return undefined
    const min = this.heap[0]!.element
    const end = this.heap.pop()
    if (this.size() > 0 && end) {
      this.heap[0] = end
      this.bubbleDown()
    }
    return min
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  size(): number {
    return this.heap.length
  }

  private bubbleUp() {
    let index = this.heap.length - 1
    const element = this.heap[index]!
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.heap[parentIndex]!
      if (element.priority >= parent.priority) break
      this.heap[index] = parent
      index = parentIndex
    }
    this.heap[index] = element
  }

  private bubbleDown() {
    let index = 0
    const length = this.heap.length
    const element = this.heap[0]!
    while (true) {
      const leftChildIndex = 2 * index + 1
      const rightChildIndex = 2 * index + 2
      let leftChild: any, rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex]!
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]!
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild!.priority)
        ) {
          swap = rightChildIndex
        }
      }

      if (swap === null) break
      if (swap !== null) {
        this.heap[index] = this.heap[swap]!
      }
      index = swap
    }
    this.heap[index] = element
  }
}
