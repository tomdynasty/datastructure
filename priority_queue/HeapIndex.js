import MaxBinaryHeap from './maxBinaryHeap.js';

const heap = new MaxBinaryHeap();
heap.insert(1);
heap.insert(10);
heap.insert(3);
heap.insert(2);
// 10 2 3 1
console.log(heap);

heap.removeMax();
// 3 2 1
console.log(heap);