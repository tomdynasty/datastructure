import Node from './node.js';
import LinkedList from './linkedList.js';


const createPolyNomial1 = () => {
  const node1 = new Node(2, 4);
  const node2 = new Node(1, 2);
  node1.next = node2;

  const linkedList = new LinkedList(node1);
  return linkedList;
}

const createPolyNomial2 = () => {
  const node1 = new Node(6, 3);
  const node2 = new Node(2, 2);
  const node3 = new Node(1, 0);
  node1.next = node2;
  node2.next = node3;

  const linkedList = new LinkedList(node1);
  return linkedList;
}

let p1 = createPolyNomial1();
let p2 = createPolyNomial2();

// add two polynomial
const addPolynomial = (p1, p2) => {
  const p3 = new LinkedList();
  let ptr1 = p1.head;
  let ptr2 = p2.head;

  while (ptr1 !== null && p2 !== null) {
    if (ptr1.expo === ptr2.expo) {
      const coefficient = ptr1.coefficient + ptr2.coefficient;
      const expo = ptr1.expo;
      const item = { coefficient, expo }
      p3.append(item);
      ptr1 = ptr1.next;
      ptr2 = ptr2.next;
    } else if (ptr1.expo > ptr2.expo) {
      const coefficient = ptr1.coefficient;
      const expo = ptr1.expo;
      const item = { coefficient, expo }
      p3.append(item);
      ptr1 = ptr1.next;
    } else if (ptr1.expo < ptr2.expo) {
      const coefficient = ptr2.coefficient;
      const expo = ptr2.expo;
      const item = { coefficient, expo }
      p3.append(item);
      ptr2 = ptr2.next;
    }
  }

  while (ptr1 !== null) {
    const coefficient = ptr1.coefficient;
    const expo = ptr1.expo;
    const item = { coefficient, expo }
    p3.append(item);
    ptr1 = ptr1.next;
  }

  while (ptr2 !== null) {
    const coefficient = ptr2.coefficient;
    const expo = ptr2.expo;
    const item = { coefficient, expo }
    p3.append(item);
    ptr2 = ptr2.next;
  }

  return p3;
}

console.log(addPolynomial(p1, p2));


