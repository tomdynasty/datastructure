import Node from "./Node.js";

// create a two-dimensional array
const createTwoDimensionalArray = (size) => {
  return new Array(size).fill(0).map(() => new Array(size).fill(0));;
}

// create a Valid move func
const isValidMove = (i, j, borderSize, arr) => {
  return i >= 0 &&
  j >= 0 &&
  i < borderSize &&
  j < borderSize &&
  arr[i][j] === 0;
}

// print final knight movable two-dimensional array
const printFinalKnightArr = (arr) => {
  arr.forEach((row) => {
    row.forEach((element) => {
      process.stdout.write(element >= 10 ? 
        `${element.toString()}  ` :
        `${element.toString()}   `
      );
    })
    process.stdout.write("\n");
  })
}

const isReachable = (arr, size) => {
    // Initially starting at (0, 0).
    let i = 0;
    let j = 0

    const stack = [];
    let maxArrLength = 0;
    let finalArray = null;
    arr[0][0] = 1;
    let tempNode = new Node(i, j);
    stack.push(tempNode);
    
    while (stack.length !== 0) {
        // Pop the top node and move to the
        // left, right, top, down or retract
        // back according the value of node's
        // dir variable.
        tempNode = stack[stack.length - 1];
        const direction = tempNode.getDirection();
        i = tempNode.getX();
        j = tempNode.getY();

        // Increment the direction and
        // push the node in the stack again.
        tempNode.setDirection(tempNode.getDirection() + 1);
        stack.pop();
        stack.push(tempNode);

        // If all cells filled
        // return true
        if (stack.length === size * size) {
          return [true, finalArray];
        }

        switch (direction) {
          case 0:
            if (isValidMove(i+1, j-2, size, arr)) {
               const temp1 = new Node(i+1, j-2);        
               stack.push(temp1);
               arr[i+1][j-2] = stack.length;
            }
            break;
          case 1:
            if (isValidMove(i+2, j-1, size, arr)) {
               const temp1 = new Node(i+2, j-1);        
               stack.push(temp1);
               arr[i+2][j-1] = stack.length;
            }            
            break;
          case 2:
            if (isValidMove(i+2, j+1, size, arr)) {
               const temp1 = new Node(i+2, j+1);        
               stack.push(temp1);
               arr[i+2][j+1] = stack.length;
            }               
            break; 
          case 3:
            if (isValidMove(i+1, j+2, size, arr)) {
               const temp1 = new Node(i+1, j+2);        
               stack.push(temp1);
               arr[i+1][j+2] = stack.length;
            }               
            break; 
          case 4:
            if (isValidMove(i-1, j+2, size, arr)) {
               const temp1 = new Node(i-1, j+2);        
               stack.push(temp1);
               arr[i-1][j+2] = stack.length;
            }               
            break; 
          case 5:
            if (isValidMove(i-2, j+1, size, arr)) {
               const temp1 = new Node(i-2, j+1);        
               stack.push(temp1);
               arr[i-2][j+1] = stack.length;
            }                
            break; 
          case 6:
            if (isValidMove(i-2, j-1, size, arr)) {
               const temp1 = new Node(i-2, j-1);        
               stack.push(temp1);
               arr[i-2][j-1] = stack.length;
            }            
            break; 
          case 7:
            if (isValidMove(i-1, j-2, size, arr)) {
               const temp1 = new Node(i-1, j-2);
               stack.push(temp1);
               arr[i-1][j-2] = stack.length;
            }             
            break;
          // If none of the direction can take
          // retract back
          // to the path where the knight came from.            
          default:
            console.log('invalid move')
            stack.pop();
            arr[i][j] = 0
            break;                                                  
        }

        // if current stack length is greater than max length
        // maxLength is stack length
        if (stack.length > maxArrLength) {
          maxArrLength = stack.length;
          finalArray = JSON.parse(JSON.stringify(arr));
        }
        // console.log((JSON.stringify(arr)));
        console.log(finalArray, stack.length, maxArrLength);
    }
    // If the stack is empty and
    // no path is found return false.
    return [false, finalArray];
}

const knight = (size) => {
    if (size === 1) {
      console.log("All Path could be filled");
      console.log(1);
      return;
    }
    const emptyArr = createTwoDimensionalArray(size);

    const [isAllOK, arr] = isReachable(emptyArr, size)
    if (isAllOK) {
      console.log("All Path could be filled");
    } else {
      console.log("Some of Paths could not be filled")
    }
   
    printFinalKnightArr(arr);
  }

knight(4);