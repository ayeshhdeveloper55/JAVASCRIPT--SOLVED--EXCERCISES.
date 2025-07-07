
// ============** CHAPTER 14 T0 16 (ARRAYS AND LOOP)**=================

// ===========** (QUESTION 01)**=============
// 1. Declare and initialize an empty multidimensional array.
// ===========** (ANSWER 01)**=============
// var emptyMultiArray = [];
// var emptyMultiArray = [[], [], []];




// ===========** (QUESTION 02)**=============
// 2. Declare and initialize a multidimensional array 
// representing the following matrix:
// ===========** (ANSWER 02)**=============
// var matri = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// console.log(matri[0][1]); 
// console.log(matri[2][3]); 



// ===========** (QUESTION 03)**=============
//3. Write a program to print numeric counting from 1 to 10.
// ===========** (ANSWER 03)**=============
// var  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Counting using for loop:");
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


// ===========** (QUESTION 04)**=============
//4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.
// Get user input for the number and table length
// ===========** (ANSWER 04)**=============
// var number = parseInt(prompt("Enter a number to show its multiplication table:"));
// var length = parseInt(prompt("Enter the length of the table:"));




// ===========** (QUESTION 05)**=============
// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]
// Initialize the fruits array
// ===========** (ANSWER 05)**=============
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// console.log("Printing fruits list:");
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }




// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// Initialize the array
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Get user input
const userInput = prompt("Welcome to ABC Bakery. What do you want to order today?").toLowerCase();

// Search for the item
let found = false;
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput) {
        found = true;
        break;
    }
}

// Display result
if (found) {
    alert(`Yes, ${userInput} is available in our bakery.`);
} else {
    alert(`Sorry, ${userInput} is not available in our bakery.`);
}



// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]
// Given array
// const numbers = [24, 53, 78, 91, 12];
// let largest = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }
// console.log(`The largest number in the array is: ${largest}`);