const array = [-5, 20, 10, 4, 6, 8, 1, 3, 9, 7];

/**
 * This function takes an array and returns a sorted array using the merge sort algorithm.
 * The time complexity of this algorithm is O(n log n) in the worst case.
 * The space complexity is O(n) since we create a new array to store the sorted elements.
 */
function mergeSort(array) {
  /**
   * If the array has only one element or is empty, return the array as it is already sorted.
   */
  if (array.length < 2) return array;

  /**
   * Calculate the middle index of the array.
   */
  const mid = Math.floor(array.length / 2);
  /**
   * Split the array into two halves, the left half and the right half.
   */
  const leftArr = array.slice(0, mid);
  const rightArr = array.slice(mid);
  /**
   * Recursively call mergeSort on the left and right halves and merge the results.
   */
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

/**
 * This function takes two sorted arrays and merges them into a single sorted array.
 * The time complexity of this algorithm is O(n) since we only iterate through the arrays once.
 * The space complexity is O(n) since we create a new array to store the merged elements.
 */
function merge(left, right) {
  /**
   * Create a new array to store the merged elements.
   */
  const sortedArr = [];

  /**
   * Iterate through the left and right arrays and add the smaller element to the sorted array.
   */
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  /**
   * Add any remaining elements from the left and right arrays to the sorted array.
   */
  return [...sortedArr, ...left, ...right]; // important order!!
}

/**
 * Print the sorted array to the console.
 */
console.log(mergeSort(array));
