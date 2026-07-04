 

//solution a
function maxOfTwo(a, b) {
  return a > b ? a : b; // This is the correct implementation of the maxOfTwo function
}

//solution b
let number = max (3, 5);
console.log(number); // This will log 5, which is the maximum of 3 and 5 

function max(a, b) {
    if (a > b) return a;
    else return b;   // This is the correct implementation of the max function   
}


module.exports = {
  maxOfTwo,
  max,
};