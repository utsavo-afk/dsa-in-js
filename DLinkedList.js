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

  push(value) {
    const newNode = new Node(value)
    if (!this.length) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.length) return undefined
    let temp = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null

      temp.prev = null
    }
    this.length--

    return temp
  }

  unshift(value) {
    const newNode = new Node(value)
    if (!this.length) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return this
  }

  shift() {
    if (!this.length) return undefined
    let temp = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = temp.next
      this.head.prev = null
    }
    temp.next = null
    temp.prev = null
    this.length--
    return temp
  }

  get(index) {
    if (!this.length || index < 0 || index >= this.length) return undefined
    let temp = this.head
    if (index > 0) {
      for (let i = 0; i < index; i++) {
        temp = temp.next
      }
    }
    temp.prev = null
    temp.next = null
    return temp
  }

  set(index, value) {
    if (!this.length || index < 0 || index >= this.length) return undefined
    if (value === null || value === undefined)
      throw new Error('Please provide a valid value')
    let temp = this.head
    if (index === 0) this.head.value = value
    else if (index === this.length - 1) this.tail.value = value
    else {
      for (let i = 0; i < index; i++) {
        temp = temp.next
      }
      temp.next.value = value
    }
    return this
  }
}

try {
  const dll1 = new DLinkedList(1)
  dll1.push(2)
  dll1.push(3)
  dll1.push(4)
  dll1.set(3, 'xyz')
  console.log(dll1)
} catch (error) {
  console.log(error.message)
}
