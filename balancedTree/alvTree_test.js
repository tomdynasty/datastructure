import ALVTree from './avlTree.js';

const alvTree = new ALVTree();

alvTree.insert(50);
alvTree.insert(40);
alvTree.insert(30);

// should be a balanced tree
//    40
//  /    \
// 30    50
// console.log(alvTree);

alvTree.insert(20);
alvTree.insert(10);
//        40
//      /    \
//     20    50
//   /   \     \
//  10   30
// console.log(alvTree.root.left);

alvTree.delete(30);
alvTree.delete(50);
//    20
//  /    \
// 10    40
console.log(alvTree);
