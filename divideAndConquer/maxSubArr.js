// O(n^3)
const maxSubArrayWithO3 = (arr) => {
    let maxSum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
             let sum = 0;
             for (let k = i; k <= j;k++) {
                sum = sum +  arr[k];
                if (sum > maxSum)
                    maxSum = sum;
             }
        }
    }
    return maxSum;
}
// O(n^2)
const maxSubArrayWithO2 = (arr) => {
    let maxSum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum = sum +  arr[j];
            if (sum > maxSum)
                maxSum = sum;
        }
    }
    return maxSum;
}

const arr = [0, -1, 3, 4, 0, 5, -3, 9];
const result = maxSubArrayWithO2(arr);
console.log(result);