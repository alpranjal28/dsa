//const array with random two digit numbers positive and negative, 10 elements
//this array is unsorted
const array = [-5, 2, 10, 4, 6, 8, 1, 3, 9, 7];

/**
 * This function sorts an array using the bubble sort algorithm.
 * The bubble sort algorithm works by swapping adjacent elements if they are in the wrong order.
 * The algorithm repeats this process until the array is sorted.
 * The time complexity of this algorithm is O(n^2), where n is the length of the array.
 */
function bubbleSort(array) {
  //swapped is a boolean that keeps track of whether any swaps were made in the current iteration
  let swapped;
  do {
    //set swapped to false, if it stays false, the array is sorted and we can exit the loop
    swapped = false;
    //loop through the array, at each index, compare the current element to the next element
    for (let i = 0; i < array.length - 1; i++) {
      //if the current element is greater than the next element, swap them
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        //set swapped to true so the loop will continue
        swapped = true;
      }
    }
    //if no swaps were made in the current iteration, the array is sorted and we can exit the loop
  } while (swapped);
  return array;
}

console.log(bubbleSort(array));
