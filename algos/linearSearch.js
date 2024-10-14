// Create an array of numbers to search through
const arr = [-5, 2, 10, 4, 6];

/**
 * Linear search algorithm
 * @param {Array<Number>} array - The array to search through
 * @param {Number} target - The number to search for
 * @returns {Number} The index of the target number if found, -1 otherwise
 */
function linearSearch(array, target) {
  // Loop through the array and check if the current element is the target
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  // If the target is not found, return -1
  return -1;
}

// Test the linearSearch function
console.log(linearSearch(arr, 10)); // 2
console.log(linearSearch(arr, 6)); // 4
console.log(linearSearch(arr, 20)); // -1

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
