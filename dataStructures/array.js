const arr = [1, 2, 3, 4, 5];

//push: adds a new element to the end of the array
arr.push(6);
console.log("push: adds a new element to the end of the array", arr);

//pop: removes the last element of the array and returns it
arr.pop();
console.log("pop: removes the last element of the array and returns it", arr);

//unshift: adds a new element to the beginning of the array
arr.unshift(0);
console.log("unshift: adds a new element to the beginning of the array", arr);

//shift: removes the first element of the array and returns it
arr.shift();
console.log("shift: removes the first element of the array and returns it", arr);

//map: applies a function to each element of the array and returns a new array
const arr2 = arr.map((item) => {
  return item * 2;
});
console.log("map: applies a function to each element of the array and returns a new array", arr2);

//filter: applies a function to each element of the array and returns a new array of elements that pass the test
const arr3 = arr.filter((item) => {
  return item > 2;
});
console.log("filter: applies a function to each element of the array and returns a new array of elements that pass the test", arr3);

//reduce: applies a function to each element of the array and returns a value
const arr4 = arr.reduce((acc, item) => {
  return acc + item;
}, 0);
console.log("reduce: applies a function to each element of the array and returns a value", arr4);

//concat: returns a new array with the elements of the original array and the elements of the arrays passed as arguments
const arr5 = arr.concat(arr2, arr3);
console.log("concat: returns a new array with the elements of the original array and the elements of the arrays passed as arguments", arr5);

//slice: returns a shallow copy of a portion of an array into a new array object
const arr6 = arr.slice(0, 3);
console.log("slice: returns a shallow copy of a portion of an array into a new array object", arr6);

//find: returns the first element in the array that satisfies the provided testing function
const arr8 = arr.find((item) => {
  return item > 2;
});
console.log("find: returns the first element in the array that satisfies the provided testing function", arr8);

//forEach: executes a provided function once per array element
arr.forEach((item) => {
  console.log(item);
});

//splice: changes the content of an array by removing or replacing existing elements and/or adding new elements
console.log(arr);
const arr7 = arr.splice(0, 3);
console.log("splice: changes the content of an array by removing or replacing existing elements and/or adding new elements", arr7);
console.log(arr);

