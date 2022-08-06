// method1 two loop
// Time complexity: O (n^2)
// Space complexity: O (1)
// two loop (i, j)
// second loop (two situations)
   // if arr[j] + diff === arr[i]
   // if arr[j] - diff === arr[i]
// function findPairByDiffVal(arr, diff) {
//     // 若要計算重複的值才需要 sort
//     arr.sort();
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[j] - diff === arr[i]) {
//                 const isExisted = result.some(el => el[0] === arr[i] && el[1] === arr[j]);
//                 if (!isExisted) {
//                     result.push([arr[i], arr[j]]);
//                 }
//             }
//         }
//     }
//     return result;
// }

// Method2: sort + binary search
// O(nlogn)
// 1. sort the non-decreasing order
// 2. binary search
// function findPairByDiffVal(arr, diff) {
//     arr.sort((a,b) => a-b);
//     const result = [];

//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         if (arr[left] + diff === arr[right]) {
//             result.push([arr[left], arr[right]]);
//         }
//         left++
//     }
//     return result;
// }



// Method3: Hash
// loop
// x = value - diff && y = value + diff
// check if x is in hash 
// check if y is the hash
// add element in the array
// O (n)   
function findPairByDiffVal(arr, diff) {
    let s = new Set();
    let result = [];
    // [1, 7, 5, 9, 2, 12, 3],2
    for (let i = 0; i < arr.length; i++) {
        const x = arr[i] + diff;
        const y = arr[i] - diff;
        if (s.has(x)) {
            result.push([x, arr[i]]);
        } 
        if (s.has(y)) {
            result.push([y, arr[i]]);
        }
        s.add(arr[i]);
    }
    return result;
}

// example1
// [ [ 3, 1 ], [ 5, 3 ], [ 7, 5 ], [ 9, 7 ] ]
// const arr = [1, 7, 5, 9, 2, 12, 3];
// const diff = 2;

// example2
// []
// const arr = [1, 4];
// const diff = 2;

// example3
// []
// const arr = [1, 3, 4, 2];
// const diff = 2;

// example4 - duplicate
// []
const arr = [1, 3, 3, 2];
const diff = 2;
const result = findPairByDiffVal(arr, diff);
console.log(result);