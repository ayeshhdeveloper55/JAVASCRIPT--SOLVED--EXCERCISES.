// ============** CHAPTER 14 T0 16 (ARRAY)**=================

// ===========** (QUESTION 01)**=============
// 1. Declare an empty array using JS literal notation to store
// student names in future.
// ===========** (ANSWER  01)**=============
// var studentNamesLiteral = [];   


// ===========** (QUESTION 02)**=============
// 2. Declare an empty array using JS object notation to store
// student names in future.
// ===========** (ANSWER  02)**=============
// var studentNamesObject = new Array();


// ===========** (QUESTION 03)**=============
// 3. Declare and initialize a strings array.
// ===========** (ANSWER  03)**=============
// var stringArray = ["apple", "banana", "cherry"];


// ===========** (QUESTION 04)**=============
//4. Declare and initialize a numbers array.
// ===========** (ANSWER  04)**=============
// var numberArray = [1, 2, 3, 4, 5];



// ===========** (QUESTION 05)**=============
//5. Declare and initialize a boolean array.
// ===========** (ANSWER  05)**=============
// var booleanArray = [true, false, true, true];



// ===========** (QUESTION 06)**=============
//6.Declare and initialize a mixed array. 
// ===========** (ANSWER  06)**=============
// var mixedArray = ["text", 42, true, null, {name: "John"}];



// ===========** (QUESTION 07)**=============
// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:
// ===========** (ANSWER  07)**=============
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// for(var i=0;i<qualifications.length;i++){
//     document.write(i+")" + qualifications[i] + "<br>");
// }



// ===========** (QUESTION 08)**=============
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:
// ===========** (ANSWER  08)**=============



// ===========** (QUESTION 09)**=============
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// ===========** (ANSWER  09)**=============




// ===========** (QUESTION 10)**=============
// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.
// ===========** (ANSWER  10)**=============
// var studentScores = [450, 380, 420];
// studentScores.sort(function(a, b) {
//     return a - b;
// });
// document.write("Sorted Scores: " + studentScores.join(", ") + "<br>");


// ===========** (QUESTION 11)**=============
// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.
// ===========** (ANSWER  11)**=============

// var Citi = cities.slice(0, 3);
// document.write(" secelebtd Citi: " + Citi.join(", ") + "<br>");



// ===========** (QUESTION 12)**=============
//12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// ===========** (ANSWER  12)**=============
// var arr = ["This ", " is ", " my ", " cat"];
// var str = arr.join("");
// document.write("Array:"+arr+"<br>")
// document.write("String: " + str + "<br>"




// ===========** (QUESTION 13)**=============
//13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)
// ===========** (ANSWER  13)**=============




// ===========** (QUESTION 14)**=============
// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out).
// ===========** (ANSWER  14)**=============


// ===========** (QUESTION 15)**=============
// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method:
// ===========** (ANSWER  15)**=============

// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (var i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");