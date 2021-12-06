class Node {
  constructor(value) {
    if (value === null || value === undefined)
      throw new Error("Provide a valid 'value' to initialise a node")
    this.prev = null
    this.value = value
    this.next = null
  }
}

class DLinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
}
