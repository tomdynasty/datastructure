const remainderStack = [];
const numToBinary = (num) => {
  divideBy2(num);
  const result = resultToString(remainderStack);
  console.log(result);
}

const divideBy2 = (num) => {
  while (num > 0) {
    const remainder = Math.floor(num % 2); // 取/2的餘數
    remainderStack.push(remainder)			   // 堆疊餘數進去
    num = Math.floor(num /2) // input的數字/2後取無條件捨去後的商
  }
}

const resultToString = () => {
  let result = '';
  while (remainderStack.length !== 0) {
    result += remainderStack.pop().toString();
  }
  return result;
}

numToBinary(8);