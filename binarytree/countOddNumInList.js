// [ example 1 ]
// Input 3 3 5 9 5
// Output example
// node  left  right
//  9    null  null

// [ example 2 ]
// Input 5 9 3 3
// Output example
// node  left  right
//  5    null   9
//  9    null   null

// [ example 3 ]
// Input 5 9 3 3
// Output example
// node  left  right
//  5    null   9
//  9    null   null

import BinarySearchTree from  './binarySearchTree.js';

const countOddNum = (nums) => {
  const BST = new BinarySearchTree();
  for (let i = 0; i < nums.length; i++) { 
    // if num not exists, insert    
    if (BST.search(BST.root, nums[i]) === null) {
        BST.insert(nums[i]);
        continue;
    }
    // if num exists, remove
    BST.removeNode(BST.root, nums[i]);

  }

  BST.inOrder(BST.root);
  BST.printOrderNode();
}

const nums = [5, 9, 3, 3];
countOddNum(nums);

