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
 
