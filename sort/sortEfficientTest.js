import insertionSort from './insertionSort.js';
import mergeSort from './mergeSort.js';
import radixSort from './radixSort.js';
import quickSort from './quickSort.js';

const pressureTest = (num) => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        let result = Math.floor(Math.random() * 1000) + 1;
        arr.push(result);
    }
    return arr
}

const insertionSortResult = [];
insertionSortResult.push('pressureTest: insertSort-milliseconds')
const numList = [100, 500, 1000, 5000, 10000, 50000];
numList.forEach((num) => {
    const arr = pressureTest(num);
    let startTime = performance.now();
    insertionSort(arr);
    let endTime = performance.now();
    insertionSortResult[num] = endTime - startTime;
})

console.table(insertionSortResult)


const mergeSortResult = [];
mergeSortResult.push('pressureTest: mergeSort-milliseconds');
numList.forEach((num) => {
    const arr = pressureTest(num);
    let startTime = performance.now();
    mergeSort(arr)
    let endTime = performance.now();
    mergeSortResult[num] = endTime - startTime;
})

console.table(mergeSortResult)

const internalSort = [];
internalSort.push('pressureTest: internalSort-milliseconds');
numList.forEach((num) => {
    const arr = pressureTest(num);
    let startTime = performance.now();
    arr.sort(function(a, b) {
        return a - b;
    });
    let endTime = performance.now();
    internalSort[num] = endTime - startTime;
})

console.table(internalSort)

const radixSortResult = [];
radixSortResult.push('pressureTest: radixSort-milliseconds');
numList.forEach((num) => {
    const arr = pressureTest(num);
    let startTime = performance.now();
    radixSort(arr);
    let endTime = performance.now();
    radixSortResult[num] = endTime - startTime;
})

console.table(radixSortResult);

const quickSortResult = [];
quickSortResult.push('pressureTest: quickSort-milliseconds');
numList.forEach((num) => {
    const arr = pressureTest(num);
    let startTime = performance.now();
    quickSort(arr);
    let endTime = performance.now();
    quickSortResult[num] = endTime - startTime;
})

console.table(quickSortResult);
