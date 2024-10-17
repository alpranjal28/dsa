/**
 * A circular queue is a data structure that uses a single array to store the queue.
 * The front and rear of the queue are connected to form a circle.
 * When the rear of the queue reaches the end of the array, it wraps around to the beginning of the array.
 * When the front of the queue reaches the beginning of the array, it wraps around to the end of the array.
 * This allows the queue to be used as a circular buffer, where the oldest element is discarded when the queue is full.
 * The size of the queue is fixed and must be specified when the queue is created.
 * The queue is full when the number of elements in the queue is equal to the size of the queue.
 * The queue is empty when the number of elements in the queue is 0.
 * The queue can be used to implement a queue data structure with a fixed size.
 * The queue can also be used to implement a circular buffer data structure.
 */

class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.size = size;
  }

  enqueue(item) {
    if (this.queue.length === this.size) {
      this.queue.shift();
    }
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }
}