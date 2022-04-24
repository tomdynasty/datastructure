// Javascript program for Knight Tour problem
let N = 3;

// create a Valid move func
const isSafe = (i, j, arr) => {
  return i >= 0 &&
  j >= 0 &&
  i < N &&
  j < N &&
  arr[i][j] === -1;
}

// create a two-dimensional array
const createTwoDimensionalArray = (size) => {
  return new Array(size).fill(0).map(() => new Array(size).fill(-1));;
}

// print final knight movable two-dimensional array
const printSolution = (arr) => {
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
 
// This function solves the Knight Tour problem
// using Backtracking.  This  function mainly
// uses solveKTUtil() to solve the problem. It
// returns false if no complete tour is possible,
// otherwise return true and prints the tour.
// Please note that there may be more than one
// solutions, this function prints one of the
// feasible solutions. 
function solveKT()
{
    const sol = createTwoDimensionalArray(N);
 
    // xMove[] and yMove[] define next move of Knight.
    // xMove[] is for next value of x coordinate
    // yMove[] is for next value of y coordinate
    let xMove = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
    let yMove = [ 1, 2, 2, 1, -1, -2, -2, -1 ];
 
    // Since the Knight is initially at the first block
    sol[0][0] = 0;
 
    // Start from 0,0 and explore all tours using
    // solveKTUtil()
    if (!solveKTUtil(0, 0, 1, sol, xMove, yMove))
    {
        console.log("Solution does not exist");
        return false;
    }
    else
        printSolution(sol);
 
    return true;
}
 
// A recursive utility function to solve Knight
// Tour problem
function solveKTUtil(x, y, movei, sol, xMove, yMove)
{
    let k, next_x, next_y;
    if (movei == N * N)
        return true;
 
    // Try all next moves from the
    // current coordinate x, y
    for(k = 0; k < 8; k++)
    {
        next_x = x + xMove[k];
        next_y = y + yMove[k];
         
        if (isSafe(next_x, next_y, sol))
        {
            sol[next_x][next_y] = movei;
            if (solveKTUtil(next_x, next_y, movei + 1,
                            sol, xMove, yMove))
                return true;
            else
                sol[next_x][next_y] = -1; // backtracking
        }
    }
    return false;
}
 
// Driver code
 
// Function Call
solveKT();
 
// This code is contributed by target_2