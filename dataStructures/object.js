const obj = {
  firstName: "John",
  age: 30,
  gender: "male",
  "address-key": "123 Main St",
  sayHello: function () {
    console.log("Hello", this.firstName);
  },
};

console.log("obj", obj);
console.log("obj.firstName", obj.firstName);
console.log("obj.age", obj[`age`]);
console.log("obj.address-key", obj[`address-key`]);
console.log("obj.sayHello", obj.sayHello);
obj.sayHello();

// using object destructuring
const { firstName, age } = obj;
console.log("firstName", firstName);
console.log("age", age);

// using object spread
const newObj = { ...obj, race: "white" };
console.log("newObj", newObj);

// delete a key from the object
delete newObj.race;
console.log("newObj after deleting race key", newObj);

// freeze the object, no new keys can be added and existing keys cannot be deleted or changed
Object.freeze(newObj);
// trying to change the race key will not work
newObj.race = "black";
console.log("newObj after attempting to change race key", newObj);

// get the keys of an object
const keys = Object.keys(newObj);
console.log("keys of newObj", keys);

// get the values of an object
const values = Object.values(newObj);
console.log("values of newObj", values);

// get the entries of an object
const entries = Object.entries(newObj);
console.log("entries of newObj", entries);

// get the size of an object    
const size = Object.keys(newObj).length;
console.log("size of newObj", size);
