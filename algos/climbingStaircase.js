/**
 * This function calculates the number of ways to climb a staircase of n steps.
 * It uses the Fibonacci sequence to calculate the number of ways.
 * The Fibonacci sequence is a sequence of numbers in which each number is the sum of the two preceding numbers.
 * The number of ways to climb a staircase of n steps is the nth number in the Fibonacci sequence.
 */
function climbingStaircase(n) {
  // Initialize an array to hold the number of ways to climb a staircase of n steps.
  const numberOfWays = [1, 2];
  // Loop through the array and calculate the number of ways to climb a staircase of n steps.
  for (let i = 2; i < n; i++) {
    // The number of ways to climb a staircase of i steps is the sum of the number of ways to climb a staircase of (i - 1) steps and (i - 2) steps.
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
  }
  // Print the number of ways to climb a staircase of n steps.
  console.log(numberOfWays);
  // Return the number of ways to climb a staircase of n steps.
  return numberOfWays[n - 1];
}
// Test the function with n = 5.
console.log(climbingStaircase(5));

/**
 * This function uses the Fibonacci sequence to calculate the number of ways to climb a staircase of n steps.
 * The Fibonacci sequence is a sequence of numbers in which each number is the sum of the two preceding numbers.
 * The number of ways to climb a staircase of n steps is the nth number in the Fibonacci sequence.
 */
function climbingStaircaseFibonacci(n) {
  // An array to hold the number of ways to climb a staircase of n steps.
  const result = [1, 2];
  // Loop through the array and calculate the number of ways to climb a staircase of n steps.
  for (let i = 2; i < n; i++) {
    // The number of ways to climb a staircase of i steps is the sum of the number of ways to climb a staircase of (i - 1) steps and (i - 2) steps.
    result[i] = result[i - 1] + result[i - 2];
  }
  // Return the number of ways to climb a staircase of n steps.
  return result;
}
// Test the function with n = 5.
console.log("using fibonacci sequence -", climbingStaircaseFibonacci(5));


