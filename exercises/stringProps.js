// create a function that is called show properties which takes an object and logs all the properties of the object that are of type string


const obj = {
  name: "John",
  age: 30,
  city: "New York",
  isStudent: false
};

showStringProperties(obj);

function showStringProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key);
    }
  }
}   

module.exports = { showStringProperties };