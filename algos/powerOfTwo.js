function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}

// test cases
console.log("isPowerOfTwo", isPowerOfTwo(1));
console.log("isPowerOfTwo", isPowerOfTwo(2));
console.log("isPowerOfTwo", isPowerOfTwo(3));
console.log("isPowerOfTwo", isPowerOfTwo(4));
console.log("isPowerOfTwo", isPowerOfTwo(5));

// big o of this function is O(log(n))
// where n is the number for which we want to check if it is power of two
