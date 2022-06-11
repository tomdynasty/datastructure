import { NodeColor } from "./NodeColor.js";
import RBTNode from "./RBTNode.js";

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  replaceParent(curNode, newNode) {
    const { parent } = curNode;
    if (!parent) {
      this.root = newNode;
    } else if (curNode === parent.left) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  }

  leftRotation(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;

    // 如果是 parent 會是紅色
    // 如果是 grandparent 也需要 recolor 成紅色
    // 所以就
    console.log(temp.color, 'temp before');
    console.log(node.color, 'node before');
    temp.color = node.color;
    node.color = NodeColor.RED;
    console.log(temp.color, 'temp after');
    console.log(node.color, 'node after');

    // 因為是 double linked (parent / child) 所以兩邊都要交換
    // 讓 parent 的小孩交換
    this.replaceParent(node, temp);
    // 讓左邊 child(current) 的 parent 交換
    temp.parent = node.parent;
    node.parent = temp;
    // 讓右邊 child(current) 的 parent 也要交換
    if (node.right) {
      node.right.parent = node;
    }
  }

  rightRotation(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;

    // 更新顏色
    console.log(temp.color, 'temp before');
    console.log(node.color, 'node before');
    temp.color = node.color;
    node.color = NodeColor.RED;
    console.log(temp.color, 'temp after');
    console.log(node.color, 'node after');

    // 更新父節點
    this.replaceParent(node, temp);
    temp.parent = node.parent;
    node.parent = temp;
    if (node.left) {
      node.left.parent = node;
    }
  }

  isRed(node) {
    return node ? node.color : false;
  }

  flipColor(node) {
    node.color = NodeColor.RED;
    node.left.color = NodeColor.BLACK;
    node.right.color = NodeColor.BLACK;
  }

  insert(data) {
    const insertHelper = (node) => {
      const curNode = node;
      if (data < curNode.data) {
        if (curNode.left) {
          insertHelper(curNode.left);
        } else {
          curNode.left = new RBTNode(data);
          curNode.left.parent = curNode;
          this.insertFixup(curNode.left);
        } 
      } else if (data > curNode.data) {
        if (curNode.right) {
          insertHelper(curNode.right);
        } else {
          curNode.right = new RBTNode(data);
          curNode.right.parent = curNode;
          this.insertFixup(curNode.right);
        }
      }
    };
    if (!this.root) {
      this.root = new RBTNode(data);
      this.insertFixup(this.root);
    } else {
      insertHelper(this.root);
    }
  }

  insertFixup(node) {
    let curNode = node;
    while (this.isRed(curNode.parent) && curNode.parent.parent) {
      const { parent } = curNode;
      const grandparent = parent.parent;

      if (parent === grandparent.left) {
        // uncle is red  
        if (this.isRed(grandparent.right)) {
          this.flipColor(grandparent);
        // uncle is black  
        } else {
          // LR
          if (curNode === parent.right) {
            this.leftRotation(parent);
          }
          // LL
          this.rightRotation(grandparent);
        }
      } else {
        if (this.isRed(grandparent.left)) {
          this.flipColor(grandparent);
          curNode = grandparent;
        } else {
          if (curNode === parent.left) {
            this.rightRotation(parent);
          }
          this.leftRotation(grandparent);
        }
      }
      curNode = grandparent;
    }
    this.root.color = NodeColor.BLACK;
  }
  
  preOrderTraversal() {
    const temp = [];
    preHelper(this.root);
    return temp;

    function preHelper(node) {
      if (node) {
        temp.push(node.data);
        preHelper(node.left);
        preHelper(node.right);
      }
    }
  }
  
  inOrderTraversal() {
    const temp = [];
    inHelper(this.root);
    return temp;

    function inHelper(node) {
      if (node) {
        inHelper(node.left);
        temp.push(node.data);
        inHelper(node.right);
      }
    };
  }

  postOrderTraversal() {
    const temp = [];
    postHelper(this.root);
    return temp;

    function postHelper(node) {
      if (node) {
        postHelper(node.left);
        postHelper(node.right);
        temp.push(node.data);
      }
    };
  }
  
  levelorderTraversal() {
    const temp = [];
    const queue = [];

    if (this.root) {
      queue.push(this.root);
    }

    while (queue.length) {
      const subTemp = [];
      const len = queue.length;

      for (let i = 0; i < len; i += 1) {
        const node = queue.shift();
        subTemp.push(node.data);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }

      temp.push(subTemp);
    }
    return temp;
  }
}


const rbtTree = new RedBlackTree();
rbtTree.insert(50);
rbtTree.insert(75);
rbtTree.insert(25);
rbtTree.insert(20); // uncle is red -> flipColor
rbtTree.insert(10); // uncle is black -> LL -> gradparent right Rotation
console.log(rbtTree.root);
console.log(rbtTree.inOrderTraversal());