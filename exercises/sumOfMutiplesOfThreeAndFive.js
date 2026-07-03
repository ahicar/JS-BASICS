// create function called sum, give it a limit and this function will return the sum of all the multiples of 3 and 5. 

// console.log(sum(10)); // 33

//multiples of 3 and 5 below 10 are 3, 5, 6, and 9. Their sum is 23.
//result should include the limit number if it is a multiple of 3 or 5.

function sum(limit) {
  let sum = 0;
  
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

module.exports = sum;