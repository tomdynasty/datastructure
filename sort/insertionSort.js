// export default function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//       let j = i - 1;
//       const current = arr[i];
//       for (;j >= 0 && arr[j] > current; j--) {
//           // if inner arr[j] is greater than arr[i](current)
//           // then shift arr[j] value to the right
//           arr[j + 1]  = arr[j];
//       }
//       // insert current at correct position 
//       arr[j+1] = current;
//   }
//   return arr;
// }

// while version
export default function insertionSort(arr) {
    // outer start from index 1
    for (let i = 1; i < arr.length; i++) {
        // inner start from index i - 1
        let j = i - 1;
        let current = arr[i];
        while (j >= 0 && arr[j] > current) {
            // if inner is greater than outer
            // change inner j = j+1
            arr[j+1] = arr[j];
            j--;
        }
        // finally switch current value at j + 1
        arr[j+1] = current; 
    }
    return arr;
}

console.log(insertionSort([5, 3, 6, 1, 4])); // [1, 3, 4, 5, 6]