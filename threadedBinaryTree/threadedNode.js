export default class ThreadedNode {
  constructor() {
    this.left = null;
    this.right = null;
    this.info = 0;

    // False if left pointer points to predecessor
    // in Inorder traversal
    this.leftThread = false;

    // False if right pointer points to successor
    // in Inorder traversal
    this.rightThread = false;
  }
}