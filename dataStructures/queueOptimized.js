/**
 * Optimized Queue implementation
 *
 * Instead of using an array to store the items, we use an object to store the items.
 * The keys of the object are the indices of the items in the array.
 * The values of the object are the actual items.
 *
 * This allows us to use the object's key lookup to remove items from the queue in O(1) time.
 * The tradeoff is that we have to keep track of the size of the queue separately.
 *
 * This implementation is useful when the queue is very large and we need to remove items from the middle of the queue frequently.
 */

// time complexity: O(1) ie constant for all operations

// Create a new Queue
class Queue {
  constructor() {
    this.items = {};
    this.size = 0;
    this.front = 0;
    this.rear = 0;
  }

  /**
   * Add an item to the end of the queue
   * @param {*} item The item to add
   */
  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
    this.size++;
    console.log(`Enqueued item ${item}`);
  }

  /**
   * Remove an item from the front of the queue
   * @returns {*} The item removed from the front of the queue
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    this.size--;
    console.log(`Dequeued item ${item}`);
    return item;
  }

  /**
   * Check if the queue is empty
   * @returns {boolean} True if the queue is empty, false otherwise
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Get the size of the queue
   * @returns {number} The size of the queue
   */
  getSize() {
    return this.size;
  }

  /**
   * Get the item at the front of the queue without removing it
   * @returns {*} The item at the front of the queue
   */
  peek() {
    return this.items[this.front];
  }

  /**
   * Clear the queue
   */
  clear() {
    this.items = {};
    this.size = 0;
    this.front = 0;
    this.rear = 0;
  }

  /**
   * Log the queue to the console
   */
  log() {
    console.log(this.items);
  }
}

// Create a new Queue
const queue = new Queue();

// Add some items to the Queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

// Log the Queue to the console
queue.log();

// Check if the Queue is empty
console.log(`Queue is empty? ${queue.isEmpty()}`); // false

// Get the size of the Queue
console.log(`Queue size: ${queue.getSize()}`); // 4

// Remove an item from the Queue
const removedItem = queue.dequeue();
console.log(`Removed item: ${removedItem}`); // 1

// Log the Queue to the console
queue.log();

// Peek at the next item in the Queue
const nextItem = queue.peek();
console.log(`Next item: ${nextItem}`); // 2