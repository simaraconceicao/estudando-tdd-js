function createQueue() {
    return {
        elements: [],
        size() {
          return this.elements.length
        },
        add(e) {
          return this.elements.push(e)
        },peek() {
            return this.elements[0]
        },
        dequeue() {
          if (this.size() === 0) {
            throw new Error()
          }
          return this.elements.shift()
        },
    }
}

module.exports = { createQueue }
