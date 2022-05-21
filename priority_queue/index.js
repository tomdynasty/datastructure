import PriorityQueue from './PriorityQueue.js';

const priorityQueue = new PriorityQueue();
console.log("[Is Queue empty]:", priorityQueue.isEmpty());
console.log("[check front Element]:", priorityQueue.front());

// add elements to the queue
priorityQueue.enqueue("Tom", 2);
priorityQueue.enqueue("Jerry", 1);
priorityQueue.enqueue("Hanna", 1);
priorityQueue.enqueue("Sunny", 2);
priorityQueue.enqueue("Sharon", 3);

// print Jerry  Hanna  Tom  Sunny  Sharon
console.log("[priority queue order]:", priorityQueue.printPQueue());

// print Jerry
console.log("[get front element]:", priorityQueue.front().element);
// print Sharon
console.log("[get rear element]:", priorityQueue.rear().element);

// print  Hanna  Tom  Sunny  Sharon
priorityQueue.dequeue();
console.log("[priority queue order after dequeue]:",priorityQueue.printPQueue());

// Adding another element to the queue
priorityQueue.enqueue("Jimmy", 2);

// print  Hanna  Tom  Sunny Jimmy  Sharon
console.log("[priority queue order after enqueue]:",priorityQueue.printPQueue());
