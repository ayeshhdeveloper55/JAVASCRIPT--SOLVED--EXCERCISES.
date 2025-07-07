// STRING METHODS

// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name
// Get user inputs

    // var firstName = prompt("Enter your first name:");
    // var lastName = prompt("Enter your last name:");
    // var fullName = firstName + " " + lastName;
    // alert("Hello, " + fullName + "! Welcome ");
    // document.write("Hello, " + fullName + "! Welcome to our website.");



// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

    // var mobileModel = prompt("What is your favorite mobile phone model?");
    // var lengthOfModel = mobileModel.length;
    // document.write("Your favorite mobile phone model is: " + mobileModel + "<br>");
    // document.write("Length of input: " + lengthOfModel);




// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser
// var word = "Pakistani";
//     var indexN = word.indexOf("n");

//     document.write("Word: " + word + "<br>");
//     document.write("Index of 'n': " + indexN);


// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser
  // var message = "Hello World";
  //   var lastIndexL = message.lastIndexOf("l");

  //   document.write("Message: " + message + "<br>");
  //   document.write("Last index of 'l': " + lastIndexL);



// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.
// var word = "Pakistani";
//     var charAtIndex3 = word.charAt(3);

//     document.write("Word: " + word + "<br>");
//     document.write("Character at index 3: " + charAtIndex3);




// 6. Repeat Q1 using string concat() method.
// var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your last name:");

//     var fullName = firstName.concat(" ", lastName);

//     alert("Hello, " + fullName + "! Welcome ");
//     document.write("Hello, " + fullName + "! Glad to see you here.");


// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.
// var city = "Hyderabad";
//     var newCity = city.replace("Hyder", "Islam");

//     document.write("Original City: " + city + "<br>");
//     document.write("After Replacement: " + newCity);




// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;
  // var message = "Ali and Sami are best friends. They play cricket and football together.";
  //   var updatedMessage = message.replace(/and/g, "&");

  //   document.write("<b>Original Message:</b> " + message + "<br><br>");
  //   document.write("<b>Updated Message:</b> " + updatedMessage);




//9. Write a program that converts a string “472” to a number 
//72. Display the values & types in your browser.
//  var str = "472";
//     var num = Number(str);

//     document.write("Value: " + str + "<br>");
//     document.write("Type: " + typeof str + "<br><br>");

//     document.write("Value: " + num + "<br>");
//     document.write("Type: " + typeof num);
//   </script>




// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.
  // var userInput = prompt("Enter any text:");
  //   var upperCaseInput = userInput.toUpperCase();

  //   document.write("User Input: " + userInput + "<br>");
  //   document.write("Uppercase: " + upperCaseInput);


// 11. Write a program that takes user input. Convert and 
// show the input in title case.
// var userInput = prompt("Enter any text:");
    
//     // Convert to Title Case
// var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("User Input: " + userInput + "<br>");
// document.write("Title Case: " + titleCase);


// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;

//  var num = 35.36;
// var str = num.toString().replace(".", "");
// document.write("Original Number: " + num + "<br>");
// document.write("After removing dot: " + str);



// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


//  var username = prompt("Enter your username:");

   
//     var isValid = true;

//     for (var i = 0; i < username.length; i++) {
//       var charCode = username.charCodeAt(i);
//       if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         isValid = false;
//         break;
//       }
//     }

//     if (!isValid) {
//       alert("Please enter a valid username without special characters [@ . , !]");
//     } else {
//       alert("Username accepted: " + username);
//       document.write("Welcome, " + username + "!");
//     }




