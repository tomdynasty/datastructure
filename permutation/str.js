const permutation = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        // 兩份資料: 
        // 1. 被移除當前 index 的陣列
        // 2. 把第一步驟移除的 index 的資料，放到另一個陣列裡面
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        // 用遞迴的方式，往下找出所有可能的
        permute(curr, m.concat(next))
     }
   }
 }

 permute(inputArr)

 return result;
}

let array = ['a', 'b', 'c'];
const result = permutation(array);
console.log(result);
