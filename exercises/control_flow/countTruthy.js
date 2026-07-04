// create a function caled countTruthy which takes an array and returns a number of truthy elements in this array

const array = [0, null, undefined, '', 2, 3, 'hello', false, true];

console.log(countTruthy(array)); // should log 4, since there are 4 truthy elements in the array (2, 3, 'hello', true)


function countTruthy(array) {
  let count = 0;
  for (let element of array)  
     if (element) 
      count++;
  return count;
}

module.exports = countTruthy;