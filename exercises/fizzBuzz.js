//divisible by 3 => Fizz
//divisible by 5 => Buzz
//divisible by 3 and 5 => FizzBuzz
//not divisible by 3 or 5 => number itself
//not a number => "Not a number"

const output = fizzBuzz (15);
console.log(output);

function fizzBuzz (num) {
  if (typeof num !== "number") return "NaN";
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

module.exports = fizzBuzz;