const str = "Hello World";
const str2 = "123456789";

// make a function to get the sum of str2
function getSum(str2) {
  let sum = 0;
  for (let i = 0; i < str2.length; i++) {
    sum += parseInt(str2[i]);
  }
  return sum;
}

console.log(getSum(str2));
