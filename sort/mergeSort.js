function mergeSortedArr(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftElement = leftArr[leftIndex];
        const rightElement = rightArr[rightIndex];

        if (leftElement > rightElement) {
            result.push(rightElement);
            rightIndex++;
        } else {
            result.push(leftElement);
            leftIndex++;
        }
    }
    return [...result, ...rightArr.slice(rightIndex), ...leftArr.slice(leftIndex)];
}


export default function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex);

    return mergeSortedArr(
        mergeSort(leftArr),
        mergeSort(rightArr)
    )
}

const arr = [10, 2, 20 , 30, 40, 50, 60, 7, 100, 99, 7];
const result = mergeSort(arr);
// 2 7 7 10 20 30 40 50 60 99 100
console.log(result);