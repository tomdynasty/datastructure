import insertionSort from './insertionSort.js';
import mergeSort from './mergeSort.js';
import radixSort from './radixSort.js';
import quickSort from './quickSort.js';

const internalSort = (arr) => (
    arr.sort(function(a, b) {
        return a - b;
    })
)

const generateRandNumArr = (num) => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        let result = Math.floor(Math.random() * 1000) + 1;
        arr.push(result);
    }
    return arr
}

const pressureTest = (sortFunc) => {
    const sortResult = [];
    sortResult.push(`pressureTest: ${sortFunc.name}-milliseconds`)
    const numList = [100, 500, 1000, 5000, 10000, 50000]

    numList.forEach((num) => {
        const arr = generateRandNumArr(num);
        let startTime = performance.now();
        sortFunc(arr);
        let endTime = performance.now();
        sortResult[num] = endTime - startTime;
    })

    console.table(sortResult);
}

pressureTest(insertionSort);
pressureTest(mergeSort);
pressureTest(radixSort);
pressureTest(quickSort);
pressureTest(internalSort);

// random num sort speed greatest test
// internalSort > mergeSort > quickSort == radixSort > insertionSort (slow)
