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
}

const selector = (val) => {
    return val;
}
const minHeap = new MinnBinaryHeap(selector);
minHeap.insert(10);
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);
// 1 10
console.log(minHeap);