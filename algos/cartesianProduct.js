/**
 * This function takes two arrays and returns a new array that is the cartesian product of the two.
 * The cartesian product of two arrays is an array of all possible pairs of elements from the two arrays.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} - The cartesian product of the two arrays.
 */
function cartesianProduct(arr1, arr2) {
  // create an empty array to store the result
  let product = [];
  // loop through the elements of the first array
  for (let i = 0; i < arr1.length; i++) {
    // loop through the elements of the second array
    for (let j = 0; j < arr2.length; j++) {
      // create a new array with the elements of the current pair
      product.push([arr1[i], arr2[j]]);
    }
  }
  // return the result
  return product;
}

// test the function
const array1 = [1, 2];
const array2 = [3, 4, 5];
console.log(cartesianProduct(array1, array2));
