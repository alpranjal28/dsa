function isPrimeUnoptimized(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
// problems faced with unoptimized function
// 1. time complexity
// 2. space complexity
// 3. memory usage

// test cases
console.log(isPrimeUnoptimized(15));
console.log(isPrimeUnoptimized(23));
console.log(isPrimeUnoptimized(321));
console.log(isPrimeUnoptimized(4));
console.log(isPrimeUnoptimized(5));

function isPrimeOptimized(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// test cases optimized
console.log("isPrimeOptimized", isPrimeOptimized(15));
console.log("isPrimeOptimized", isPrimeOptimized(23));
console.log("isPrimeOptimized", isPrimeOptimized(321));
console.log("isPrimeOptimized", isPrimeOptimized(4));
console.log("isPrimeOptimized", isPrimeOptimized(5));

// square root, in mathematics, is the largest integer that can be expressed as a product of two positive integers
function isPrimeOptimized2(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// test cases optimized
console.log("isPrimeOptimized2", isPrimeOptimized2(15));
console.log("isPrimeOptimized2", isPrimeOptimized2(23));
console.log("isPrimeOptimized2", isPrimeOptimized2(321));
console.log("isPrimeOptimized2", isPrimeOptimized2(4));
console.log("isPrimeOptimized2", isPrimeOptimized2(5));

// prime number test cases which returns true


// big o of this function is O(sqrt(n))
// where n is the number for which we want to check if it is prime
