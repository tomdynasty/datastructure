import Node from './node.js';

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(item) {
    const { coefficient, expo } = item;
    let node = new Node(coefficient, expo);
    if (!this.head) {
      this.head = node;
    } else {
      let tail = this.head;
      while(tail.next !== null) {
        tail = tail.next;
      }
      tail.next = node;
    }
  }

  removeAt(index) {
    // check if index is Valid
    if (index < 0 || index > this.length) return null;
    let current = this.head,
        prev = null,
        idx = 0;

    // if remove first node    
    if (index === 0) {
      // point to the head to next node1
      this.head = current.next;
      return;
    }

    // find the index
    while (idx++ < index) {
      // set prev node as current
      prev = current;
      // and move the current to the next node
      current = current.next
    }
    // index found, link prev.next & current.next
    prev.next = current.next;
  }

  insertAt(index, item) {
    const { coefficient, expo } = item;

    // check if index is Valid
    if (index < 0 || index > this.length) return null;
    let node = new Node(coefficient, expo);
    let current = this.head,
        prev = null,
        idx = 0;
    // if insert item before first node  
    if (index === 0) {
      this.head = node;
      node.next = current;
      return;
    }

    while (idx++ < index) {
      prev = current;
      current = current.next;
    }
    // index found, insert item
    prev.next = node;
    node.next = current;
  }

  size() {
    let count = 0;
    let node = this.head;;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }
}
