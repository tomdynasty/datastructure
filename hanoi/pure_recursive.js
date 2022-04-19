const hanoi = (n, from, temp, to) => {
  if (n === 1) {
    console.log(`n=${n}, ${from} ----> ${to}`);
    return;
  }
  hanoi(n-1, from, to, temp);
  console.log(`n=${n}, ${from} ----> ${to}`);
  hanoi(n-1, temp, from, to);
}

hanoi(3, 'A', 'B', 'C');
