
// for to while translation example
for (let monthNumber = 1; monthNumber <= 12; monthNumber++){
    console.log(`month number is: ${monthNumber}`);
}

let monthNumber = 1;
while (monthNumber <= 12) {
    console.log(`month number is: ${monthNumber}`);
    monthNumber++;
}

//_____another examples_____

let i = 14;
while ( i  >  10 && i <= 100) {
    console.log(i);
    i += 5; // this loop will print all numbers from 14 to 100 that are greater than 10 and less than or equal to 100, incrementing by 5 each time.
}

let i = 45;
while (i >= 36 && i < 144) {
    if (i / 36 === i % 6 !== i % 2  ) console.log(i); 
    i+=11; // this loop will print all numbers from 36 to 144 that are greater than or equal to 36 and less than 144, incrementing by 11 each time, and satisfying the condition i / 36 === i % 6 !== i % 2.
}