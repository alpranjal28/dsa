// A queue is a data structure that follows the First In First Out (FIFO) principle, meaning that the first item added to the queue is the first item to be removed.
// Queues are iterable, meaning they can be looped over with a for-of loop.
// Queues have a size property, which returns the number of items in the queue.
// Queues have an enqueue() method, which adds a new item to the end of the queue.
// Queues have a dequeue() method, which removes the front item from the queue and returns it.
// Queues have a peek() method, which returns the front item from the queue without removing it.
// Queues have an isEmpty() method, which returns a boolean indicating whether the queue is empty.

// usecases of queue
// 1. when you want to perform operations in FIFO order
// 2. when you want to process items in the order they were added
// 3. when you want to prioritize items in the order they were added

// Create a new Queue
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
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
console.log("Queue: ", queue);

// Check if the Queue is empty
console.log("Is queue empty? ", queue.isEmpty()); // false

// Get the size of the Queue
console.log("Size of queue: ", queue.size()); // 4

// Remove an item from the Queue
const removedItem = queue.dequeue();
console.log("Removed item: ", removedItem); // 1

// Peek at the next item in the Queue
const nextItem = queue.peek();
console.log("Next item: ", nextItem); // 2

// Log the Queue to the console
console.log("Queue: ", queue);