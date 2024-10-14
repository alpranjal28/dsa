/**
 * The Tower of Hanoi is a mathematical puzzle where we have three rods and n disks.
 * The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:
 * 1. Only one disk can be moved at a time.
 * 2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack.
 * 3. No disk may be placed on top of a smaller disk.
 * @param {Number} n - The number of disks
 * @param {String} fromRod - The rod where disks are initially located
 * @param {String} toRod - The rod where disks need to be moved
 * @param {String} usingRod - The rod which is used as auxiliary
 */
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  // Base case: if there is only one disk, move it from fromRod to toRod
  if (n === 1) {
    console.log(`move disk1 from ${fromRod} to ${toRod}`);
    return;
  }

  // Move n-1 disks from fromRod to usingRod, using toRod as auxiliary
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);

  // Move the nth disk from fromRod to toRod
  console.log(`move disk${n} from ${fromRod} to ${toRod}`);

  // Move n-1 disks from usingRod to toRod, using fromRod as auxiliary
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

// Example with 3 disks
towerOfHanoi(3, "A", "C", "B");

