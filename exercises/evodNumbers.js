 //function showNumbers and limit to number
 //if number shown is odd, log number and odd, if even, log number and even

showNumbers (10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
}

module.exports = { showNumbers };