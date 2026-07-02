//for-in
const human = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in human) {
  console.log(key + ": " + human[key]); // logs each key-value pair in the object
}


//for-of
const numbers = [10, 20, 30, 40, 50];

for (let num of numbers) {
  console.log(num); // logs each number in the array
}