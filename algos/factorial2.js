function factorial(n) {
  totalArray = [1, 2];
  total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * i;
    totalArray[i] = total;
  }
  return total, " + ", totalArray;
}

console.log(factorial(5));
