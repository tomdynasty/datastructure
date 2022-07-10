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

// for detailed algorithm, please see the maxSubArr.md
// time complexity: O(nlogn)
// divide and conquer
const maxSubArrayWithOnlogn = (arr) => {
    return maxSubArr(arr);

    function maxSubArr(arr) {
        // base case
        if (arr.length === 1) return arr[0];
        if (arr.length === 0){
            return -Infinity;
        }

        let mid = Math.floor((arr.length-1)/2);
        // (a) Recursively calculate the maximum subarray sum in left half
        let lMaxSumInSubArr = maxSubArr(arr.slice(0, mid));
        // (b) Recursively calculate the maximum subarray sum in right half
        let rMaxSumInSubArr = maxSubArr(arr.slice(mid+1, arr.length));

        // (c) Recursively calculate the maximum subarray sum such that the subarray crosses the midpoint
        let lMaxContiguousSum = 0,
            rMaxContiguousSum = 0;

        // (c-1) Find the maximum sum starting from midpoint and ending at some point on left of mid
        for (let i = mid - 1, currentContiguousSum = 0; i >= 0; i--) {
            currentContiguousSum += arr[i];
            lMaxContiguousSum = Math.max(lMaxContiguousSum, currentContiguousSum);
        }
        // (c-2) Find the maximum sum starting from mid+1 and endinng with some point on right of mid+1
        for (let i = mid + 1, currentContiguousSum = 0; i < arr.length; i++) {
            currentContiguousSum += arr[i];
            rMaxContiguousSum = Math.max(rMaxContiguousSum,currentContiguousSum);
        }

        return Math.max(
            // The maximum sum from a contiguous subarray that traverses the midpoint
            lMaxContiguousSum + arr[mid] + rMaxContiguousSum,
            lMaxSumInSubArr,
            rMaxSumInSubArr
        )
    }
   
}

const arr = [0, -1, 3, 4, 0, 5, -3, 9];
const result = maxSubArrayWithOnlogn(arr);
console.log(result);