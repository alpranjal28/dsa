function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(15));

// big o of this function is O(n)
// where n is the integer for which we want to find the factorial
