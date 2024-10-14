/**
 * The insertion sort algorithm works by iterating through the array and inserting each element into its proper place in the sorted portion of the array.
 * The time complexity of this algorithm is O(n^2) in the worst case.
 * The space complexity is O(1) since we only use a few variables to keep track of the sorted portion of the array.
 *
 * @param {Array<Number>} array - The array to sort
 */
const array = [-5, 20, 10, 4, 6, 8, 1, 3, 9, 7];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // keep track of the current element to insert
    let numToInsert = array[i];
    let j = i - 1; //sorted element index

    // shift elements to the right until we find the proper place to insert
    while (j >= 0 && array[j] > numToInsert) {
      array[j + 1] = array[j];
      j = j - 1;
    }

    // insert the current element into its proper place
    array[j + 1] = numToInsert;
  }
}
insertionSort(array);
console.log(array);

function insertionSortReverse(array) {
  for (let i = 1; i < array.length; i++) {
    // pick value at index[1] (not index[0]) and store it in a variable
    const elementToinsert = array[i]; //array[1]

    // assume the previous index ie. index[0] is sorted
    // this will be used to check index at each iteration
    let sortedIndex = i - 1; //array[0]

    // while sorted index is greater than or equal to 0
    // means sortedIndex value can go all the way to zero
    // if a value greater/smaller is not found and put it in index[0]
    // &&
    // if elementToinsert ie. value of the index at current for loop
    // is greater than the value of previous sortedIndex, the while loop will continue
    while (sortedIndex >= 0 && elementToinsert > array[sortedIndex]) {
      // value of the element to be sorted is > value of the sorted element
      array[sortedIndex + 1] = array[sortedIndex]; //moved value of sortedIndex element to right
      sortedIndex--; // move to the smaller sorted index at each iteration
      // until this function finds a smaller value, keeps reducing sortedIndex
    }
    // the sorted index at this point is assigned the value stored at elementToInsert
    array[sortedIndex + 1] = elementToinsert;
  }
}

insertionSortReverse(array); // mutate the array
console.log(array); // print the array
