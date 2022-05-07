import BinarySearchTree from  './binarySearchTree.js';

// create an object for the BinarySearchTree
const BST = new BinarySearchTree();
 
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
                         
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17
 
let root = BST.getRootNode();
             
// prints 5 7 9 10 13 15 17 22 25 27
BST.inOrder(root);
             
// Removing node with no children
BST.remove(5);
             
             
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17
             
                         
root = BST.getRootNode();
             
// prints 7 9 10 13 15 17 22 25 27
BST.inOrder(root);
             
// Removing node with one child
BST.remove(7);
             
//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17
             
             
root = BST.getRootNode();
 
// prints 9 10 13 15 17 22 25 27
BST.inOrder(root);
             
// Removing node with two children
BST.remove(15);
     
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
 
root = BST.getRootNode();
console.log("inorder traversal");
 
// prints 9 10 13 17 22 25 27
BST.inOrder(root);
             
console.log("postorder traversal");
BST.postOrder(root);
console.log("preorder traversal");
BST.preOrder(root);
console.log("levelorder traversal");
// prints 17 10 25 9 13 22 27
BST.levelOrder(root);