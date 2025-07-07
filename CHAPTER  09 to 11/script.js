
// ===============** CHAPTER 09 to 11 (USER INPUT & CONDITIONALSTATEMENT )**==================

// ===========** (QUESTION 01)**===========
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
 //===========** (ANSWER 01)**===========
//  var city = prompt("Enter your city", "....")
//  if( city === "karachi"){
//      alert("welcome to the city of lights")
//  }



// =======** (QUESTION 02)**========
//  2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
 //===========** (ANSWER 02)**===========
// var gander = prompt("enter your gender", " ....")
// if(gander === "male" ){
//     alert("Good Morning Sir");
                  
// }else if(gander === "female"){
 
//   alert("Good Morning mam");
// }else{
//     alert("u r not allow")
// }



// ==========** (QUESTION 03)**===========            
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
 //===========** (ANSWER 03)**===========
//  var traffic = prompt("Enter your favr color");
//  if(traffic.toLowerCase() === "red"){
//     alert("Must Stop");
//  }else if (traffic.toLowerCase() === "yellow") {
//     alert("Ready to move");
// } else if (traffic.toLowerCase() === "green") {
//     alert("Move now");
// }




// =========** (QUESTION 04)**=========
//  4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
  //===========** (ANSWER 04)**===========
// var fuel = prompt("enter you fuel in litres");
// if(fuel < 0.25){
//       alert("Please refill the fuel in your car")
// }else{
//    alert("good fuel")
// }




 // ===========** (QUESTION 05)**===========
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }


// =========** (QUESTION 06)**==========
//   6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
 //===========** (ANSWER 06)**===========
// var result = +prompt("enter your marks");
// var eng = 49;
// var urdu = 67;
// var math = 89;
// var totalmMark = 300;
// document.write("Total Marks=" +totalmMark + "<br>" ) ;
// var obtainMarks = eng + urdu + math;
// document.write("OBtain Marks=" + obtainMarks + "<br>"  ) ;
// var persontage = obtainMarks * totalmMark / 100;
// document.write("Persontage=" +persontage + "<br>"  ) ;
// var garde = "B";
// document.write("Grade=" + "B"+ "<br>"  ) ;
// document.write("Rewards= +"  + " you need to improve") ;




// =========** (QUESTION 07)**==========
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
  //===========** (ANSWER 07)**===========
//  var secretNum = 7;
//  var num = +prompt("Guess the scret number");
//  if (secretNum === num){
//     alert("Bingo! Correct answer")
//  }else{
//     alert("Close enough to the correct answer")
//  }


// =========** (QUESTION 08)**==========
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
//===========** (ANSWER 08)**===========
//  var num = prompt("enter your num", "356787898");
//  alert(num*3);


// =========** (QUESTION 09)**========
// 9. Write a program that checks whether the given input is an
// even number or an odd number.
 //===========** (ANSWER 09)**===========
//  var num = +prompt("Enter your number");
// if (num *2 ){
//     alert("its even number")
// }else if(num *7){
//     alert("its odd number")
   
// }

// ===========** (QUESTION 10)**============
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
 //===========** (ANSWER 10)**===========
//  var temp = +prompt("Enter wethear temprature", "60...");
//  if ( temp > 40){
//     alert("t is too hot outside");
//  }else if (temp > 30){
//      alert("The Weather today is Normal");

//  }else if (temp > 20){
//      alert("Today’s Weather is cool.");

//  }else if (temp > 10){
//      alert("TOMG! Today’s weather is so Cool");

//  }


// ==========** (QUESTION 11)**========
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
  //===========** (ANSWER 11)**===========
//  var calculate = + prompt("enter your number" )








              



