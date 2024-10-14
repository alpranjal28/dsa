const arr = [-5, 2, 4, 6, 10];

/**
 * This function takes an array and a target value and returns the index of the target if found, -1 otherwise.
 * It works by recursively searching the array, splitting it in half each time until the target is found or the array is empty.
 */
function recursiveBinarySearch(array, target) {
  /**
   * The search function takes the array, target, and the left and right index of the array to search.
   * It returns the index of the target if found, -1 otherwise.
   */
  return search(
    array,
    target,
    (leftIndex = 0),
    (rightIndex = array.length - 1)
  );
}

/**
 * The search function takes the array, target, left index and right index and returns the index of the target if found, -1 otherwise.
 * It works by recursively searching the array, splitting it in half each time until the target is found or the array is empty.
 */
function search(array, target, leftIndex, rightIndex) {
  // If the left index is greater than the right index, return -1 since the target was not found.
  if (leftIndex > rightIndex) return -1;
  // Calculate the middle index of the array.
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  // If the target is equal to the value at the middle index, return the middle index.
  if (target === array[middleIndex]) return middleIndex;
  // If the target is less than the value at the middle index, search the left half of the array.
  if (target < array[middleIndex]) {
    return search(array, target, leftIndex, middleIndex - 1);
  } else {
    // If the target is greater than the value at the middle index, search the right half of the array.
    return search(array, target, middleIndex + 1, rightIndex);
  }
}

console.log(recursiveBinarySearch(arr, -5));
console.log(recursiveBinarySearch(arr, 10));
console.log(recursiveBinarySearch(arr, 6));
console.log(recursiveBinarySearch(arr, 11));

// big-O is O(log(n))