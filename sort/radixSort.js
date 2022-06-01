const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

export default function radixSort(arr) {
    if (arr.length < 2) return arr;
    let maxValue = arr[0];

    // 1. get Max Value digit
    // ex: 1234 => 4 / 223455 => 6 / 101 => 3
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    
    const iterationCount = maxValue.toString().length

    for (let digit = 0; digit < iterationCount; digit++) {
        // 2. each digit has its own array space(bucketArr)
        // length 10: index range from 0 to 9
        // ex: [3, 10, 2] 
        // digit0 => [0]: [10], [2]: [2], [3]: [3]
        const bucketArr = Array.from({length: 10}, () => [])
        // 3. push value in the bucket array according to its calculated digit
        // ex: [3, 10, 2] 
        // digit0 => [0]: [10], [2]: [2], [3]: [3] ===flat===> [10, 2, 3]
        // digit1 => [0]: [2, 3], [1]: [10]        ===flat===> [2, 3, 10]    
        for (let i = 0; i < arr.length; i++) {
            const digitValue = Math.floor(arr[i] / Math.pow(10, digit)) % 10;
            bucketArr[digitValue].push(arr[i]);
        }
        arr = bucketArr.flat();
    }
    return arr;    
}

console.log(radixSort(unsortedArr));