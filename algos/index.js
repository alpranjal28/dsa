// linear time complexity
function summationLinear(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// O(n)->linear
console.log(summationLinear(1));
console.log(summationLinear(8));
console.log(summationLinear(10));

// constant time complexity
// O(1)->constant
function summationConstant(n) {
  return (n * (n + 1)) / 2;
}
console.log(summationConstant(1));
console.log(summationConstant(8));
console.log(summationConstant(10));
