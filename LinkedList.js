class Node {
  constructor(value) {
    if (value === null || value === undefined)
      throw new Error("Provide a valid 'value' to initilaise a node")
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    // create a new node
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value)
    // adding a node to an empty linkedlist
    if (!this.length) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    // no items, cant pop
    if (!this.length) return undefined
    // one item in list
    if (this.length === 1) {
      let temp = this.head
      this.head = null
      this.tail = null
      this.length--
      return temp
    } else {
      let temp = this.head
      let prev = this.head
      while (temp.next) {
        prev = temp
        temp = temp.next
      }
      this.tail = prev
      this.tail.next = null
      this.length--
      return temp
    }
  }

  unshift(value) {
    const newNode = new Node(value)
    if (!this.length) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
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
      this.head = this.head.next
      temp.next = null
    }
    this.length--
    return temp
  }

  // zeroth index positions
  get(index) {
    if (index < 0 || index >= this.length) return undefined
    let temp = this.head
    if (index === 0) {
      temp.next = null
      return temp
    } else if (index === this.length - 1) return this.tail
    else {
      for (let i = 0; i < index; i++) {
        temp = temp.next
      }
    }
    temp.next = null
    return temp
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return undefined
    if (value === null || value === undefined)
      throw new Error('Please provide a valid value')
    let temp = this.head
    if (index === 0) {
      this.head.value = value
    } else if (index === this.length - 1) {
      this.tail.value = value
    } else {
      for (let i = 0; i < index; i++) {
        temp = temp.next
        temp.next.value = value
      }
    }
    return this
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return undefined
    if (value === null || value === undefined)
      throw new Error('Please provide a valid value')
    if (index === 0) return this.unshift(value)
    else if (index === this.length) return this.push(value)
    else {
      const newNode = new Node(value)
      let temp = this.head
      // move temp pointer to node before insert index
      for (let i = 0; i < index - 1; i++) {
        temp = temp.next
      }
      newNode.next = temp.next
      temp.next = newNode
      this.length++
      return this
    }
  }

  remove(index) {
    if (!this.length || index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    else if (index === this.length - 1) return this.pop()
    else {
      let prev,
        temp = this.head
      for (let i = 0; i < index; i++) {
        prev = temp
        temp = temp.next
      }
      prev.next = temp.next
      temp.next = null
      this.length--
      return temp
    }
  }

  reverse() {
    if (!this.length) return undefined
    else if (this.length === 1) return this
    else {
      let temp = this.head
      this.head = this.tail
      this.tail = temp

      let prev = null
      let next = temp.next

      for (let i = 0; i < this.length; i++) {
        next = temp.next
        temp.next = prev
        prev = temp
        temp = next
      }

      return this
    }
  }
}

// execute
try {
  const ll1 = new LinkedList(1)
  ll1.push(2)
  ll1.push(3)
  ll1.push(4)
  console.log(ll1.reverse())
  console.log(ll1)
} catch (error) {
  console.log(error.message + ' in linkedlist')
}
