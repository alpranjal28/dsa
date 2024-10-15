// Maps are collections of key-value pairs, where each key is unique and maps to a specific value
// Maps are iterable, meaning they can be looped over with a for-of loop
// Maps have a size property, which returns the number of key-value pairs in the map
// Maps have a clear() method, which removes all the key-value pairs from the map
// Maps have a delete() method, which removes a specific key-value pair from the map
// Maps have a get() method, which returns the value associated with a given key
// Maps have a has() method, which returns a boolean indicating whether a given key is in the map
// Maps have a set() method, which adds a new key-value pair to the map

// Create a new Map with key-value pairs
const map = new Map([["a", 1], ["b", 2], ["c", 3]]);

// Iterate over the Map using a for-of loop
for (const [key, value] of map) {
  // Log each key-value pair, using template literals to insert the values
  console.log(`${key}, ${value}`);
}

// Add a new key-value pair
map.set("d", 4);

// Remove a key-value pair
map.delete("b");

console.log("updated map", map);


// Check if a key exists in the Map
console.log(map.has("a")); // true
console.log(map.has("e")); // false
