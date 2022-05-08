import ThreadedNode from './threadedNode.js';

export default class ThreadedBinaryTree {
  constructor() {
    // root of a threaded binary tree
    this.root = null;
  }
  // Insert a Node in Binary Threaded Tree
  insert(iKey) {
    // searching for a node with given value
    let ptr = this.root;
    // parent of key to be inserted
    let par = null;

    while (ptr != null) {
      // If key already exists, return
      if (iKey === ptr.info) {
        console.log(`Duplicate Key ${iKey}!`);
        return this.root;
      }

      // update parent pointer
      par = ptr;

      // moving on left subtree
      if (iKey < ptr.info) {
        if (ptr.leftThread === false) ptr = ptr.left;
        else break;
      } else {
        if (ptr.rightThread === false) ptr = ptr.right;
        else break;
      }
    }

    // Create a new node
    const temp = new ThreadedNode();
    temp.info = iKey;
    temp.leftThread = true;
    temp.rightThread = true;

    if (par === null) {
      this.root = temp;
      temp.left = null;
      temp.right = null;
    // if iKey is smaller than parent info, then
    // iKey on the left  
    } else if (iKey < par.info) {
      temp.left  = par.left;
      temp.right = par;
      par.leftThread = false;
      par.left = temp;
    // else
    // iKey on the right  
    } else {
      temp.left = par;
      temp.right = par.right;
      par.rightThread = false;
      par.right = temp;
    }
    return this.root;
  }

  // Return inorder successor using rightThread
  inorderSuccessor(ptr) {
    // If rightThread is set, we can quickly find
    if (ptr.rightThread === true) {
      return ptr.right;
    }
    // Else return leftmost child of right subtree
    ptr = ptr.right;
    while (ptr.leftThread === false) {
      ptr = ptr.left;
    }
    return ptr;
  }

  // print the threaded tree
  inorder(root) {
    if (root === null) {
      console.log("Tree is empty");
    }

    // Reach leftmost node of
    let ptr = root;
    while (ptr.leftThread === false) {
      ptr = ptr.left;
    }
    // One by One print successor
    while (ptr != null) {
      console.log(`${ptr.info}`  );
      ptr = this.inorderSuccessor(ptr);
    }
  }
}
