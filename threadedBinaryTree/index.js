import ThreadedBinaryTree from './threadedBinaryTree.js';

const tree = new ThreadedBinaryTree();
let root = tree.root;

root = tree.insert(20);
root = tree.insert(10);
root = tree.insert(30);
root = tree.insert(5);
root = tree.insert(16);
root = tree.insert(14);
root = tree.insert(17);
root = tree.insert(13);

// 10  13 14 16 17 20 30
tree.inorder(root);