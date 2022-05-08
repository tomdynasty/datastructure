import ThreadedBinaryTree from './threadedBinaryTree.js';

const tree = new ThreadedBinaryTree();
tree.root;

tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(5);
tree.insert(16);
tree.insert(14);
tree.insert(17);
tree.insert(13);
// output: Duplicate key 13 !
tree.insert(13);

// 10  13 14 16 17 20 30
tree.inorder(tree.root);