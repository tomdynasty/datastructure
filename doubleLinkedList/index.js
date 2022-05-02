import DoublyLinkedList from './doublyLinkedList.js';

const myDoublyList = new DoublyLinkedList(10);

myDoublyList.append(5);                     // 10 <--> 5

myDoublyList.append(16);                    // 10 <--> 5 <--> 16

myDoublyList.prepend(1);                    // 1 <--> 10 <--> 5 <--> 16

myDoublyList.insert(2, 99);                 // 1 <--> 10 <--> 99 <--> 5 <--> 16
myDoublyList.insert(20, 88);                // Invalid index. Current length is 5.
myDoublyList.insert(5, 80);                 // 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80
myDoublyList.insert(0, 80);                 // 80 <--> 1 <--> 10 <--> 99 <--> 5 <--> 16 <--> 80