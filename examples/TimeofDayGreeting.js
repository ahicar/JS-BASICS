 //hour
 //if hour is between 6am and 12pm: good morning!
 //if hour is between 12pm and 6pm: good afternoon!
 //if hour is between 6pm and 12am: good evening!
 //if hour is between 12am and 6am: good night!

 let hour = new Date().getHours();

 if (hour >= 6 && hour < 12) {
     console.log("Good morning!");
 } else if (hour >= 12 && hour < 18) {
     console.log("Good afternoon!");
 } else if (hour >= 18 && hour < 24) {
     console.log("Good evening!");
 } else {
     console.log("Good night!");
 }  
 
//second example

if (monthNumber === 1){
    console.log(`month name is: January`);
} else if (monthNumber === 2){
    console.log(`month name is: February`);
} else if (monthNumber === 3){
    console.log(`month name is: March`);
} else if (monthNumber === 4){
    console.log(`month name is: April`);
} else if (monthNumber === 5){
    console.log(`month name is: May`);
} else if (monthNumber === 6){
    console.log(`month name is: June`);
} else if (monthNumber === 7){
    console.log(`month name is: July`);
} else if (monthNumber === 8){
    console.log(`month name is: August`);
} else if (monthNumber === 9){
    console.log(`month name is: September`);
} else if (monthNumber === 10){
    console.log(`month name is: October`);
} else if (monthNumber === 11){
    console.log(`month name is: November`);
} else if (monthNumber === 12){
    console.log(`month name is: December`);
}   