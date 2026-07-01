
// let x = 10;
// let y = 5;

//arithmetic operators
// console.log(x + y); // Addition
// console.log(x - y); // Subtraction
// console.log(x * y); // Multiplication
// console.log(x / y); // Division
// console.log(x % y); // Modulus (Remainder)  
// console.log(x ** y); // Exponentiation (x raised to the power of y)

//_________________________________
//increment and decrement operators
// console.log(++x); // Pre-increment: increments x by 1 and returns the new value
// console.log(x++); // Post-increment: returns the current value of x, then increments it by 1
// console.log(--y); // Pre-decrement: decrements y by 1 and returns the new value
// console.log(y--); // Post-decrement: returns the current value of y, then decrements it by 1  

// x = x + 5;
// x += 5; // Equivalent to x = x + 5
// y = y - 2;
// y -= 2; // Equivalent to y = y - 2

// x = x * 3;
// x *= 3; // Equivalent to x = x * 3

// y = y / 2;
// y /= 2; // Equivalent to y = y / 2

// x = x % 4;
// x %= 4; // Equivalent to x = x % 4

// // x = x ** 2;
// x **= 2; // Equivalent to x = x ** 2        
// console.log(x); 

//________________________________
//Comparison operators
// let x = 3;

//relational operators
// console.log (x > 0);
// console.log (x < 0);
// console.log (x >= 3);
// console.log (x <= 3);
//________________________________
// //equality operators

// //strict equality (===) and strict inequality (!==) operators compare both value and data type. They do not perform type coercion. For example, 3 === '3' would return false because the types are different (number vs string).
// console.log (x === 3);
// console.log (x !== 3);

// //lose equality (==) and inequality (!=) operators compare values for equality or inequality, but they do not consider the data type. They perform type coercion if the types are different. For example, 3 == '3' would return true because the string '3' is coerced to a number before comparison.
// console.log (x == 3);
// console.log (x != 3);
// //examples of type coercion with equality operators
// console.log(1 ==1); // true
// console.log(1 == '1'); // true, because '1' is coerced to 1
// console.log(1 === '1'); // false, because the types are different

//________________________________
//ternary operator
// let age = 20;
// let canVote = (age >= 18) ? "Yes" : "No";
// console.log(canVote); // Output: Yes

//________________________________
//logical operators
// let a = true;
// let b = false;

// console.log(a && b); // Logical AND: returns true if both operands are true
// console.log(a || b); // Logical OR: returns true if at least one operand is true
// console.log(!a);     // Logical NOT: returns the opposite boolean value

//logical operators with non-boolean values
// console.log(0 && "Hello"); // returns 0 (falsy value)
// console.log(1 && "Hello"); // returns "Hello" (truthy value)
// console.log(0 || "Hello"); // returns "Hello" (truthy value)
// console.log(1 || "Hello"); // returns 1 (truthy value)
// console.log(!0);           // returns true (opposite of falsy value)
// console.log(!1);           // returns false (opposite of truthy value)

//short-circuit evaluation
// let x = 0;
// let y = 5;

// console.log(x && y); // returns 0 (falsy value), short-circuits and does not evaluate y
// console.log(x || y); // returns 5 (truthy value), short-circuits and does not evaluate y
// false || false || 1; // returns 1 (truthy value), short-circuits and does not evaluate the last operand

//________________________________
