const arr = [-5, 2, 4, 6, 10];

/**
 * This function performs a binary search on a sorted array.
 * It takes in an array and a target value and returns the index of the target if found, -1 otherwise.
 * The time complexity of this function is O(log(n)), where n is the length of the array.
 * The space complexity is O(1), since we only use a few variables to keep track of the search.
 */
function binarySearch(array, target) {
  // Initialize the left and right indices to the start and end of the array, respectively.
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  // Loop until the left index is greater than the right index.
  while (leftIndex <= rightIndex) {
    // Calculate the middle index of the array.
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    // If the target is equal to the value at the middle index, return the middle index.
    if (target === array[middleIndex]) return middleIndex;
    // If the target is less than the value at the middle index, search the left half of the array.
    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      // If the target is greater than the value at the middle index, search the right half of the array.
      leftIndex = middleIndex + 1;
    }
  }
  // If the target is not found, return -1.
  return -1;
}

// Test the binarySearch function
console.log(binarySearch(arr, -5));
console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 11));

