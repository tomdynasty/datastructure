import ListNode from './ListNode.js';

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(item) {
    let node = new ListNode(item);
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

// create two list nodes
const node1 = new ListNode(2);
const node2 = new ListNode(5);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

// put two list nodes in linked list object
const list = new LinkedList(node1);

// test the methods
console.log('list last node is', list.getLast()); 
console.log('list first node is', list.getFirst()); 
console.log('list size:', list.size()); 
list.clear();
console.log('after clear, this list size is ', list.size());
console.log('after clear, this list content is', list);

list.append(99);
console.log('append new node at empty list', list);
list.append(100);

console.log('append new node at list', list);