class Node {
  constructor(value) {
    if (value === null || value === undefined)
      throw new Error("Initialise node with a 'valid' value")
    this.value = value
    this.next = null
  }
}

// FIFO
class Queue {
  constructor(value) {
    const newNode = new Node(value)
    this.first = newNode
    this.last = this.first
    this.length = 1
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (!this.length) {
      this.first = newNode
      this.last = this.first
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return this
  }

  dequeue() {
    let temp = this.first
    if (!this.length) return undefined
    else {
      this.first = temp.next
      temp.next = null
    }
    this.length--
    return temp
  }
}

try {
  const q1 = new Queue(1)
  q1.enqueue(2)
  q1.enqueue(3)
  console.log(q1.dequeue())
  console.log(q1.dequeue())
  console.log(q1.dequeue())
  console.log(q1.dequeue())
  console.log(q1)
} catch (error) {
  console.log(error.message)
}
