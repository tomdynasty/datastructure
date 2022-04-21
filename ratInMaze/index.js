import Node from './Node.js';

// create a two-dimensional array
const createTwoDimensionalVisitedArray = (row, column) => {
  return new Array(row).fill('').map(() => new Array(column).fill(false));;
}

/**
 * check if maze could be reachable
 * @param {array} maze 
 * @param {integer} targetX 
 * @param {integer} targetY 
 * @param {integer} row 
 * @param {integer} column 
 * @return {boolean}
 */
const isReachable = (maze, targetX, targetY, row, column) => {
    const visited = createTwoDimensionalVisitedArray(row, column);
    // Initially starting at (0, 0).
    let i = 0;
    let j = 0;

    const stack = [];
    const tempNode = new Node(i, j);
    stack.push(tempNode);

    while (stack.length !== 0) {
        // Pop the top node and move to the
        // left, right, top, down or retract
        // back according the value of node's
        // dir variable.
        const temp = stack[stack.length-1];
        const direction = temp.getDirection();
        i = temp.getX();
        j = temp.getY();

        // Increment the direction and
        // push the node in the stack again.
        temp.setDirection(temp.getDirection() + 1);
        stack.pop();
        stack.push(temp);

        // If we reach the target coordinates
        // return true
        if (i == targetX && j == targetY) {
            return true;
        }

        if (direction == 0) {
            // Checking the Up direction.
            if ((i - 1 >= 0) &&
                (maze[i - 1][j] === 1) &&
                (!visited[i - 1][j])) {
                  const temp1 = new Node(i - 1, j);
                  visited[i - 1][j] = true;
                  stack.push(temp1);
            }
        } else if (direction == 1) {
              // Checking the left direction
              if ((j - 1 >= 0) &&
                  (maze[i][j - 1] == 1) &&
                  (!visited[i][j - 1]))  {
                  const temp1 = new Node(i, j - 1);
                  visited[i][j - 1] = true;
                  stack.push(temp1);
              }
          }
          else if (direction == 2)
          {
              // Checking the down direction
              if ((i + 1 < row) &&
                  (maze[i + 1][j] == 1) &&
                  (!visited[i + 1][j])) {
                  const temp1 = new Node(i + 1, j);
                  visited[i + 1][j] = true;
                  stack.push(temp1);
              }
          }
          else if (direction == 3)
          {
              // Checking the right direction
              if ((j + 1 < column) &&
                  (maze[i][j + 1] == 1) &&
                  (!visited[i][j + 1])) {
                  const temp1 = new Node(i, j + 1);
                  visited[i][j + 1] = true;
                  stack.push(temp1);
              }
          } 
          // If none of the direction can take
          // the rat to the Food, retract back
          // to the path where the rat came from.
          else {
              visited[temp.getX()][temp.getY()] = false;
              stack.pop();
          }
    }
    // If the stack is empty and
    // no path is found return false.
    return false;
}


const ratInMaze = () => {
const row = 4;
const column = 5;

const maze = [
  [1, 0, 1, 1, 0],
  [1, 1, 1, 0, 1],
  [0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1],
];

  const targetX = 2;
  const targetY = 3;

  if (isReachable(maze, targetX, targetY, row, column)) {
    console.log("Path Found!");
  } else {
    console.log("No Path Found!");
  }
}


// 嘗試所有可能的路徑 (while return 條件)
  // - 當找到目標時，return true
  // - 當 stack 為空代表找不到目標，return false
// 使用 stack 暫存物目前的路徑與方向
  // - 找到路，就 push 
  // - 找不到路，就 pop，並取得 stack 的資料往下個方向走
  // - 使用 2D 陣列記錄已經造訪的位置，以避免進入曾走過的死路

ratInMaze();
