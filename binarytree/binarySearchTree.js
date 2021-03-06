import Node from './node.js';

export default class BinarySearchTree {
  constructor() {
    // root of a binary search tree
    this.root = null;
    // for inOrder / preOrder / postOrder
    this.orderStack = [];
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
        // Deleting node with two children
        // 1. find minimum number  
        // 2. replace root node data with right minimum data
        // 3. node right points to right nodes list where delete right minimum node
        const aux = this.findMinNode(node.right);
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);

        return node;
      }
    }

    findMinNode(node) {
      if (node.left === null) {
        return node;
      }
      return this.findMinNode(node.left);
    }
                 
 
    // Helper function
    // returns root of the tree
    getRootNode() {
        return this.root;
    }

    showOrderNode(node) {
      let newNode = new Node();
      newNode.data = node.data;
      if (node.left != null) {
        newNode.left = node.left.data;
      }
      if (node.right != null) {
        newNode.right = node.right.data;    
      }
      this.orderStack.push(newNode);
    }

    inOrder(node) {
      if (node !== null) {
        this.inOrder(node.left);
        this.showOrderNode(node);
        this.inOrder(node.right);
      }
    }

    preOrder(node) {
      if (node !== null) {
        this.showOrderNode(node);
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
    }
    postOrder(node) {
      if (node !== null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        this.showOrderNode(node);
      }
    }

    printOrderNode() {
      console.table(this.orderStack)
    }

    search(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return this.search(node.left, data);
      } else if (data > node.data) {
        return this.search(node.right, data);
      }
      return node;
    }

    levelOrder(node) {
      const queue = []
      while (node) {
        console.log(node.data);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
        if (queue.length === 0) {
          return;
        }
        node = queue[0];
        queue.shift();
      }
    }

}