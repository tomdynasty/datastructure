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


    remove(data) {
      this.root = this.removeNode(this.root, data);
    }

    // Method to remove node with a
    // given data
    removeNode(node, key) {
      if (node === null) {
        return null;
      } else if (key < node.data) {
        node.left = this.removeNode(node.left, key);
        return node;
      } else if (key > node.data) {
        node.right = this.removeNode(node.right, key);
        return node;
      // if data is similar to the root's data
      // then delete this node
      } else {
        // delete node with no children
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        } else if (node.left === null) {
          node = node.right
          return node;
        } else if (node.right === null) {
          // delete node with one left children
          node = node.left;
          return node;
        }
      }
    }

    findMinNode(node) {
      if (node.left === null) {
        return node;
      }
      return this.findMinNode(node.left);
    }
                 
 
    // Helper function
    // getRootNode()
    // inOrder(node)
    // preOrder(node)
    // postOrder(node)
    // search(node, data)

}