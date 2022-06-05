import BTNode from './binaryTreeNode.js';

export default class ALVTree {
    constructor() {
        this.root = null;
    }
    // 計算節點高度
    getNodeHeight(node) {
        if (!node) {
            return -1;
        }
        const leftHeight = this.getNodeHeight(node.left);
        const rightHeight = this.getNodeHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1; 
    }
    // 計算平衡因子
    getBinaryFactor(node) {
        return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    }
    // 左旋轉操作
    //    temp (node.left)
    //   /    \
    // 不動    node
    //        /    \
    //  temp.right  不動
    rightRotation(node) {
        const temp = node.left;
        node.left = temp.right;
        temp.right = node;
        return temp;
    }
    // 左旋轉操作
    leftRotation(node) {
        const temp = node.right;
        node.right = temp.left;
        temp.left = node;
        return node;
    }
    // 1. 若 BF > 1，則代表左子樹大於右子樹，需判斷是 `LL` 還是 `LR`
    //    - LR 型: 針對不平衡節點的左子節點執行左旋轉，變成 LL 型
    //    - LL 型: 對不平衡節點執行右旋轉 
    // 2. 若 BF < -1，則代表右子樹大於左子樹，需判斷是 `RR` 還是 `RL`
    //    - RL 型: 針對不平衡節點的右子節點執行右旋轉，變成 RR 型
    //    - RR 型: 對不平衡節點向左旋轉
    balance(node) {
        if (!node) {
            return node;
        }
        const nodeBF = this.getBinaryFactor(node);
        if (nodeBF > 1) {
            // 若小於 0，則代表為 LR 型
            if (this.getBinaryFactor(node.left) < 0) {
                node.left = this.leftRotation(node.left)
            }
            node = this.rightRotation(node);
        } else if (nodeBF < -1) {
            // 若大於於 0，則代表為 RL 型
            if (this.getBinaryFactor(node.right) > 0) {
                node.right = this.rightRotation(node.right);
            }
            node = this.leftRotation(node);
        }
        return node;
    }

    insert(data) {
        const insertHelper = (node) => {
            let currentNode = node;
            if (!currentNode) {
                return new BTNode(data);
            }
            if (data < currentNode.data) {
                currentNode.left = insertHelper(currentNode.left);
            } else if (data > currentNod.data) {
                currentNode.right = insertHelper(currentNode.right);
            }
            currentNode = this.balance(currentNode);
            return currentNode;
        }
        this.root = insertHelper(this.root);
    }

    delete(data) {
        const removeHelper = (data, node) => {
            let currentNode = node;

            if (!currentNode) {
                return false;
            }

            if (data < currentNode.data) {
                currentNode.left = removeHelper(data, currentNode.left);
            } else if (data > currentNode.data) {
                currentNode.right = removeHelper(data, currentNode.right);
            } else {
                if (!currentNode.left && !currentNode.right) {
                    return null;
                }
                if (!currentNode.left) {
                    return currentNode.right;
                }
                if (!currentNode.right) {
                    return currentNode.left;
                }
                const aux = this.findMin(currentNode.right);
                currentNode.data = aux.data;
                currentNode.right = removeHelper(aux.data, currentNode.right);
            }
            currentNode = this.balance(currentNode);
            return currentNode;
        }
        this.root = removeHelper(data, this.root);
    } 

    findMin(node = this.root) {
        let currentNode = node;
        while (currentNode && currentNode.left ) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    findMax(node = this.root) {
        let currentNode = node;
        while (currentNode && currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode;
    }
}