// it should always be a complete binary tree
// [ The root of the tree]:  in position 1 of the array.
// [ The left child of any given node at position n] : located at 2n.
// [ The right child of a node at position n ] : located at position 2n + 1.
// [ The parent of a node at position n ] : at position n/2.

// Operations
// 1. Insert element
// 2. Extract element
export default class MinnBinaryHeap {
    constructor(selector) {
        this.items = [];
        this.selector = selector;
    }

    insert(item) {
        let i = this.items.length;
        this.items.push(item)
        let parentIndex = Math.floor(((i + 1) / 2) - 1);
        if (parentIndex < 0) parentIndex = 0;

        let parentVal = this.selector(this.items[parentIndex]);
        const pushedVal = this.selector(this.items[i]);

        while (i > 0 && parentVal > pushedVal) {
            parentIndex = Math.floor(((i + 1) / 2) - 1);
            this.swap(i, parentIndex);
            i = parentIndex;

            parentVal = this.selector(
                this.items[Math.max(Math.floor((i + 1) / 2 - 1), 0)]
            );
        }
    }

    swap(index1, index2){
        let temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
        return this.items;
    }

    remove () {
        if (this.items.length <= 1) return this.items.pop();
        const ret = this.items[0]; // what we will return
        let temp = this.items.pop();
        this.items[0] = temp;  // Place last element in array at front
        let i = 0;

        while (true) {
            let rightChildIndex = (i + 1) * 2;
            let leftChildIndex = (i + 1) * 2 - 1;
            let lowest = rightChildIndex;

            if ((leftChildIndex >= this.items.length) &&
                (rightChildIndex >= this.items.length)) {
                break;
            }

            if (leftChildIndex >= this.items.length) lowest = rightChildIndex;
            if (rightChildIndex >= this.items.length) lowest = leftChildIndex;
            if ((!(leftChildIndex >= this.items.length)) &&
               (!(rightChildIndex >= this.items.length))) {
                lowest = this.selector(this.items[rightChildIndex]) < this.selector(this.items[leftChildIndex])
                ? rightChildIndex
                : leftChildIndex;
            } // Find the smallest child

            if (this.selector(this.items[i]) > this.selector(this.items[lowest])) {
                this.swap(i, lowest);
                i = lowest;
            } else {
                break;
            }
            return ret;
        }
    }
}

const selector = (val) => {
    return val;
}
const minHeap = new MinnBinaryHeap(selector);
minHeap.insert(13);
minHeap.insert(12);
minHeap.insert(11);
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);
// 1, 3 ,2, 13, 11, 12
console.log(minHeap);

// 3, 11, 12, 13
minHeap.remove();
minHeap.remove();
console.log(minHeap);
