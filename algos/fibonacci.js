function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    console.log(fib);
  }
  return fib;
}

console.log(fibonacci(5));
// console.log(fibonacci(8));
// console.log(fibonacci(10));

// big o of this function is O(n)
// where n is the number of elements in the array
