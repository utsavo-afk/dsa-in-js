class Node {
  constructor(value) {
    if (value === null || value === undefined)
      throw new Error("Initialise node with a 'valid' value")
    this.value = value
    this.next = null
  }
}

// LIFO
class Stack {
  constructor(value) {
    const newNode = new Node(value)
    this.top = newNode
    this.height = 1
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.height) {
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
    this.height++
    return this
  }

  pop() {
    let temp = this.top
    if (!this.height) return undefined
    else {
      temp = this.top
      this.top = temp.next
      temp.next = null
    }
    this.height--
    return temp
  }
}

try {
  const s1 = new Stack(1)
  s1.push(2)
  s1.push(3)
  console.log(s1.pop())
  console.log(s1.pop())
  console.log(s1.pop())
  console.log(s1.pop())
  s1.push('a')
  s1.push('b')
  s1.push('c')
  console.log(s1)
} catch (error) {
  console.log(error.message)
}
