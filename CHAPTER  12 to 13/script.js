
// ====** CHAPTER 12 T0 13 ( IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS )**====

// ===========** (QUESTION 01)**=============
// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122)
// ===========** (ANSWER  01)**=============
// function checkCharacterType(char) {
//     if (char.length !== 1) {
//         return "Please enter a single character";
//     }
    
//    var code = char.charCodeAt(0);
//     if (code >= 48 && code <= 57) {
//         return "It's a number";
//     } else if (code >= 65 && code <= 90) {
//         return "It's an uppercase letter";
//     } else if (code >= 97 && code <= 122) {
//         return "It's a lowercase letter";
//     } else {
//         return "It's not a number or letter";
//     }
// }




 // ===========** (QUESTION 02)**=============
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// ===========** (ANSWER  02)**=============
// function compareIntegers(num1, num2) {
//     if (num1 > num2) {
//         return `${num1} is larger than ${num2}`;
//     } else if (num2 > num1) {
//         return `${num2} is larger than ${num1}`;
//     } else {
//         return "Both numbers are equal";
//     }
// }




// ===========** (QUESTION 03)**=============
// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.
// ===========** (ANSWER  03)**=============
// function checkNumberSign(num) {
//     if (num > 0) {
//         return "Positive number";
//     } else if (num < 0) {
//         return "Negative number";
//     } else {
//         return "Zero";
//     }
// }


// ===========** (QUESTION 04)**=============
// 4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise
// ===========** (ANSWER  04)**=============
// function isVowel(char) {
//     if (char.length !== 1) {
//         return false;
//     }
    
//     const lowerChar = char.toLowerCase();
//     return ['a', 'e', 'i', 'o', 'u'].includes(lowerChar);
// }


// ===========** (QUESTION 05)**=============
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise
// ===========** (ANSWER  05)**=============
// function validatePassword() {
//     const correctPassword = "Secure123";
//     const userPassword = prompt("Enter your password:");
    
//     if (!userPassword) {
//         alert("Please enter your password");
//     } else if (userPassword === correctPassword) {
//         alert("Correct! The password you entered matches the original password");
//     } else {
//         alert("Incorrect password");
//     }
// }

// ===========** (QUESTION 06)**=============
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// ===========** (ANSWER  06)**=============
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }




// ===========** (QUESTION 07)**=============
// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statement
// ===========** (ANSWER  07)**=============
// function getGreeting(hour) {
//     if (hour >= 5 && hour < 12) {
//         return "Good morning";
//     } else if (hour >= 12 && hour < 18) {
//         return "Good afternoon";
//     } else if (hour >= 18 && hour < 22) {
//         return "Good evening";
//     } else {
//         return "Good night";
//     }
// }
