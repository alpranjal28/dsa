const array = [-5, 20, 10, 4, 6, 8, 1, 3, 9, 7];

/**
 * This function takes an array and returns a sorted array using the quick sort algorithm.
 * @param {Array<number>} array - the array to sort
 * @returns {Array<number>} - the sorted array
 */
function quickSort(array) {
  // if the array has only one element or is empty, return it as it is already sorted
  if (array.length < 2) return array;
  // pick the last element of the array as the pivot
  let pivot = array[array.length - 1];
  // create two empty arrays, one for elements less than the pivot and one for elements greater than the pivot
  let left = [];
  let right = [];

  // loop through the array and add each element to either the left or right array based on whether it is less than or greater than the pivot
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }
  // return the sorted array by recursively calling quickSort on the left and right arrays and concatenating the results with the pivot in the middle
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// print the sorted array
console.log(quickSort(array));
