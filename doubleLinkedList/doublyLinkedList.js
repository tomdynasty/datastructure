import Node from './Node.js';

export default class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    }
    this.length = 1;
    this.tail = this.head;
  }

  printList() {
    const array = [];
    let currentList = this.head;
    while (currentList != null) {
      array.push(currentList.value);
      currentList = currentList.next;
    }

    console.log(array.join(' <--> '));
    return this;
  }

  // Insert node at the end of the list
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;

    this.length++;
    this.printList();
  }

  // Insert node at the start of the list
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;

    this.length++;
    this.printList();
  }

  // Insert node at a given index
  insert(index, value) {
    if (index < 0 || index > this.length + 1) {
            console.log(`Invalid index. Current length is ${this.length}.`);
      return this;
    }

    if (index === 0) {
      this.prepend(value);
      return this;
    }
    
    if (index === this.length) {
      this.append(value);
      return this;
    }

    const newNode = new Node(value);
    let previousNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      previousNode = previousNode.next;
    }

    const nextNode = previousNode.next;

    newNode.next = nextNode;
    previousNode.next = newNode;
    newNode.previous = previousNode;
    nextNode.previous = newNode;

    this.length++;
    this.printList();
  }
}
