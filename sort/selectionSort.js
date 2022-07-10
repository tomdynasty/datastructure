//  find the minimum value, and put it in the left
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        // 先預設第一個是最小的
        let min = arr[i];
        let minIndex = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        // ES6 的用法，交換兩個數值
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}

console.log(selectionSort([5, 3, 6, 1, 4])); // [1, 3, 4, 5, 6]
