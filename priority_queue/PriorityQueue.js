class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // functions to be implemented
    enqueue(element, priority) {
        const qElement = new QElement(element, priority);
        let contain = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        // if the element have the highest priority
        // it is added at the end of the queue
        if (!contain) {
            this.items.push(qElement);
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return "underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    rear() {
        // returns the lowest priority
        // element of the queue
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[this.items.length - 1]
    }

    printPQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i].element + "  ";
        }
        return str;
    }
}