import Node from './node.js';

export default class BinarySearchTree {
  constructor() {
    // root of a binary search tree
    this.root = null;
  }
    // function to be implemented
    insert (data) {
      const newNode = new Node(data);

      // root is null then node will
      // be added to the tree and made root.
      if (this.root === null) {
        this.root = newNode;
      } else {
        // find the correct position in the
        // tree and add the node
        this.insertNode(this.root, newNode);
      }
    }

    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data
    insertNode(node, newNode) {
       // if the data is less than the node
       // data move left of the tree
       if (newNode.data < node.data) {
         if (node.left === null) {
           node.left = newNode;
         } else {
           // if left is not null recur until
           // null is found
           this.insertNode(node.left, newNode);
         }
       }
       // if the data is more than the node
       // data move right of the tree
       else {
          if(node.right === null) {
            node.right = newNode
          } else {
            this.insertNode(node.right, newNode);
          }
       }
    }


    // remove(data)
                 
 
    // Helper function
    // findMinNode()
    // getRootNode()
    // inOrder(node)
    // preOrder(node)
    // postOrder(node)
    // search(node, data)

}