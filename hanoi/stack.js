const stack = [];
const hanoi = (n, start, temp, end) => {
    // base case: move from start to end
    if (n === 1) {
        stack.push([n, start, end]);
        return;
    }

    // 1. recursive
    hanoi(n-1, start, end, temp);

    // 2. move from start to end
    stack.push([n, start, end]);

    // 3. recursive
    hanoi(n-1, temp, start, end);
}

hanoi(2, "A", "B", "C");

stack.forEach(arr => {
    const [n, start, end] = arr;
    console.log(`${start}----${n}---->${end}`)
})