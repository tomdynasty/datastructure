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
    // check if index is Valid
    if (index < 0 || index > this.length) return null;
    let node  = new ListNode(item);
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

// create two list nodes
const node1 = new ListNode(2);
const node2 = new ListNode(5);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

// put two list nodes in linked list object
const list = new LinkedList(node1);

// test the methods
console.log('0. show list: ', list);
console.log('1. list last node is: ', list.getLast()); 
console.log('2. list first node is: ', list.getFirst()); 
console.log('3. list size:', list.size()); 
list.clear();
console.log('4. after clear, this list size is: ', list.size());
console.log('5. after clear, this list content is: ', list);

list.append(99);
console.log('6. append new node at empty list: ', list);
list.append(100);
console.log('7. append new node at list: ', list);

list.removeAt(1);
console.log('8. show list after remove: ', list);

list.removeAt(0);
console.log('9. show list after remove the first node: ', list);

list.insertAt(0, 200);
console.log('10. show list after insert item at empty list: ', list);

list.insertAt(0, 255);
console.log('11. show list after insert item at first: ', list);

list.insertAt(1, 288);
console.log('12. show list after insert item at last: ', list);