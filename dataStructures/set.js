// Create a new Set
const set = new Set();

// Add some values to the set, including a number, an array, an object, and a duplicate
set.add(1);
set.add(2);
set.add([3, 4]);
set.add({ name: "John" });
set.add(3);
set.add(3);

// Log the set to the console
console.log(set);

// Check if the set has certain values
console.log(set.has(2)); // true
console.log(set.has(4)); // false

// Remove a value from the set
set.delete(3);
console.log(set);

// size of the set
console.log(set.size);

// clear the set
set.clear();
console.log(set);


