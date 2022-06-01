export default function quickSort(arr) {
    // edge case
    if (arr.length <= 1) {
        return arr
    }
    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];
    // left & right
    // value is great than pivot is on the right
    // value is less than pivot is on the left
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [10, 2, 20 , 30, 40, 50, 60, 7];
const result = quickSort(arr);
// 2 7 10 20 30 40 50 60 
console.log(result);