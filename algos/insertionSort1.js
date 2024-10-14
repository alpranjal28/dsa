const array = [-5, 20, 10, 4, 6, 8, 1, 3, 9, 7];

/**
 * Sorts an array in ascending order using the insertion sort algorithm.
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function insertionSortAscending(array) {
  for (let i = 1; i < array.length; i++) {
    let numToInsert = array[i]; // storage for the current element to insert
    let sortedIndex = i - 1; // start the search at the previous element

    // shift elements to the right until we find the proper place to insert
    while (sortedIndex >= 0 && array[sortedIndex] > numToInsert) {
      array[sortedIndex + 1] = array[sortedIndex];
      sortedIndex = sortedIndex - 1;
    }

    // insert the current element into its proper place
    array[sortedIndex + 1] = numToInsert;
  }
}

insertionSortAscending(array);
console.log(array);

function insertionSortDescending(array) {
  for (let i = 1; i < array.length; i++) {
    let numToInsert = array[i]; // storage for the current element to insert
    let sortedIndex = i - 1; // start the search at the previous element

    // shift elements to the right until we find the proper place to insert
    while (sortedIndex >= 0 && array[sortedIndex] < numToInsert) {
      array[sortedIndex + 1] = array[sortedIndex];
      sortedIndex--;
    }

    // insert the current element into its proper place
    array[sortedIndex + 1] = numToInsert;
  }
}

insertionSortDescending(array);
console.log(array);
