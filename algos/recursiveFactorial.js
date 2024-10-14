
/**
 * This function uses a recursive approach to calculate the factorial of a given number.
 * The base case is when n is 0 or 1, in which case the function returns n.
 * Otherwise, the function calls itself with n-1 and returns the product of n and the result of the recursive call.
 * The time complexity of this function is O(n), since the function calls itself n times.
 * The space complexity is O(n), since the function uses a stack to store the results of the recursive calls.
 */
function recursiveFactorial(n) {
  if (n <= 1) return 1;
  return n * recursiveFactorial(n - 1);
}

// multiple test case
console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(3)); // 3 * 2 * 1 = 6
console.log(recursiveFactorial(5)); // 5 * 4 * 3 * 2 * 1 = 120
console.log(recursiveFactorial(10)); // 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800

// big o of this function is O(n)
