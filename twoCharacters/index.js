/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(str) {
    // Write your code here
    // ex: 'beabeefeab'
    // 最終只剩下兩個字母
    // 1. 計算各個字母所擁有的數量  
    //   {'a':2, 'b':3, 'e':4, 'f':1}
    
    let charMap = {};
    for (let char of str) {
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }
    
    // 2. 依照數量，算出所有可能性的排列組合
    //   組合: {a f}, {a, b}, {b, e} => 數量相減 === +-1  ex: a-f: 1
    //   取得 charMap 所有的 keys
    //   用 loop 的方式，計算所有可能性的組合
    const keys = Object.keys(charMap);
    let combinations = [];
    for (let i = 0; i < keys.length; i++) {
        for (let j = i+1; j < keys.length; j++) {
            if (Math.abs(charMap[keys[i]] - charMap[keys[j]]) === 1) {
                combinations.push([keys[i], keys[j]])
            }
        }
    }
    console.log(combinations);

    // combinations = [ [ 'b', 'e' ], [ 'b', 'a' ], [ 'a', 'f' ] ]
    // 3. 找出字串裡是 alternative 且為最長的字串長度 
    //   3-1最大數量長度預設是: 0
    //   3-2 取得 combinations 每個組合，並 filter 只有在 str 裡面的資料
    //   3-3 確認移除的排列組合是否為 alternative 的排序
    //    如果是 alternative 的排列且比最大數量大，就設定為最大數量
    //    如果不是 alternative 組合，就不做事
    let maxStrLength = 0;
    const filterResults = combinations.map(arr => {
        // console.log(str.split("").filter(c => {
        //     return c === arr[0] || c === arr[1]
        // }));
        return str.split("").filter(c => {
            return c === arr[0] || c === arr[1]
        })
    })
    
    filterResults.forEach(res => {
        if (isAlternative(res) && res.length > maxStrLength) {
            maxStrLength = res.length
        }
    })
    return maxStrLength
}

function isAlternative(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            continue
        } else {
            return false;
        }
    }
    return true;
}

const str = "asdcbsdcagfsdbgdfanfghbsfdab";
const result = alternate(str);
console.log(result);
// adsf = > ad,  as, af, ds, df, sf