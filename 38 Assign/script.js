// =============================CHAPTERS 35 to 38==============================
// ============================FUNCTION========================================

// ******************************QUESTION 01*********************************
// 1. Write a function that displays current date & time in your 
// browser
// **************************ANSWER 01**********************************
// function showDateTime() {
//   var now = new Date();
//   document.write("Current Date and Time: " + now);
// }
// showDateTime();


// ******************************QUESTION 02*********************************
// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.
// **************************ANSWER 02**********************************
// function greetUser(firstName, lastName) {
//   var fullName = firstName + " " + lastName;
//   alert("Hello, " + fullName + "!");
// }
// greetUser("Ayesha", "Asghar");


// ******************************QUESTION 03*********************************
// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.
// **************************ANSWER 03**********************************
// function addNumbers() {
//   var num1 = +prompt("Enter first number:");
//   var num2 = +prompt("Enter second number:");
//   var sum = num1 + num2;
//   return sum;
// }
// var result = addNumbers();
// document.write("Sum is: " + result);


// ******************************QUESTION 04*********************************
// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.
// **************************ANSWER 04**********************************
// function calculator(num1, num2, operator) {
//   if (operator === '+') {
//     return num1 + num2;
//   } else if (operator ===  '-') {
//     return num1 - num2;
//   } else if (operator ===  '*') {
//     return num1 * num2;
//   } else if (operator ===  '/') {
//     return num1 / num2;
//   } else {
//     return "Invalid operator";
//   }
// }

// var result = calculator(10, 5,   '+');



// ******************************QUESTION 05*********************************
// 5. Write a function that squares its argument.
// **************************ANSWER 05**********************************
// function square(num) {
//   return num * num;
// }
// document.write("Square is: " + square(4));

// ******************************QUESTION 06*********************************
// 6. Write a function that computes factorial of a number.
// rowser.
// **************************ANSWER 06**********************************
// function factorial(n) {
//   var fact = 1;
//   for (var i = 1; i <= n; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// document.write("Factorial: " + factorial(5));



// ******************************QUESTION 07*********************************
// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.
// **************************ANSWER 07**********************************
// function countNumbers(start, end) {
//   for (var i = start; i <= end; i++) {
//     document.write(i + "<br>");
//   }
// }
// countNumbers(1, 10);

// ******************************QUESTION 08*********************************
// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// **************************ANSWER 08**********************************
// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(x) {
//     return x * x;
//   }
//   var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//   return hypotenuse;
// }
// document.write("Hypotenuse: " + calculateHypotenuse(3, 4));



// ******************************QUESTION 09*********************************
// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// **************************ANSWER 09**********************************
// function rectangleArea(width, height) {
//   return width * height;
// }
// document.write("Area (values): " + rectangleArea(10, 5) + "<br>");
// var w = 7;
// var h = 3;
// document.write("Area (variables): " + rectangleArea(w, h));



// ******************************QUESTION 10*********************************

// **************************ANSWER 10**********************************
// function isPalindrome(str) {
//   var reversed = str.split('').reverse().join('');
//   return str === reversed;
// }
// document.write("Is Palindrome: " + isPalindrome("madam"));



// ******************************QUESTION 11*********************************
// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// **************************ANSWER 11**********************************
// function capitalizeWords(str) {
//   var words = str.split(" ");
//   for (var i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" ");
// }
// document.write(capitalizeWords("the quick brown fox"));



// ******************************QUESTION 12*********************************

// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// **************************ANSWER 12**********************************
// function findLongestWord(str) {
//   var words = str.split(" ");
//   var longest = words[0];
//   for (var i = 1; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i];
//     }
//   }
//   return longest;
// }
// document.write("Longest word: " + findLongestWord("Web Development Tutorial"));



// ******************************QUESTION 13*********************************
// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 


// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'
// **************************ANSWER 13**********************************



// function countLetter(str, letter) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === letter.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }
// document.write("Occurrences: " + countLetter("JSResourceS.com", "o"));
// ******************************QUESTION 14*********************************

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
// **************************ANSWER 14**********************************
// function calc(radius) {
//   var circumference = 2 * Math.PI * radius;
//   document.write("The circumference is " + circumference.toFixed(2) + "<br>");
// }

// function calcArea(radius) {
//   var area = Math.PI * radius * radius;
//   document.write("The area is " + area.toFixed(2));
// }
// calc(5);
// calcArea(5);




















