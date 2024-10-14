/**
 * This function uses a recursive approach to calculate the nth Fibonacci number.
 * The base case is when n is 0 or 1, in which case the function returns n.
 * Otherwise, the function calls itself with n-1 and n-2, and returns the sum of
 * the two results.
 *
 * The time complexity of this function is O(2^n), which is very inefficient.
 * The space complexity is O(n), since the function uses a stack to store the
 * results of the recursive calls.
 */
function recursiveFibonacci(n) {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
// test cases with 0,1,6 as input
console.log("recursiveFibonacci of 0", recursiveFibonacci(0)); // 0
console.log("recursiveFibonacci of 1", recursiveFibonacci(1)); // 1
console.log("recursiveFibonacci of 5", recursiveFibonacci(5)); // 5
console.log("recursiveFibonacci of 6", recursiveFibonacci(6)); // 8
console.log("recursiveFibonacci of 16", recursiveFibonacci(16)); // 987

// big o of this function is O(2^n)
// where n is the number of elements in the array
// and the time complexity is O(2^n)
