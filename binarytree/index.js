import BinarySearchTree from './binarySearchTree.js';

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(18);
tree.insert(22);
tree.insert(16);

// console.log(tree.root);
// Node {
//   data: 10,
//   left: null,
//   right: Node {
//     data: 20,
//     left: Node { data: 18, left: [Node], right: null },
//     right: Node { data: 22, left: null, right: null }
//   }
// }

tree.remove(16);
console.log(tree.root);
// Node {
//   data: 10,
//   left: null,
//   right: Node {
//     data: 20,
//     left: Node { data: 18, left: null, right: null },
//     right: Node { data: 22, left: null, right: null }
//   }
// }