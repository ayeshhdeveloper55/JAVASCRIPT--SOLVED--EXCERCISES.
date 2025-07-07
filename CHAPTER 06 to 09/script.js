// EXCERCISE 06 t0 09 (MATH EXPRESSIONS)
// Question 01
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// ANSWSER 01
// var final = "Result:"
// document.write(final);
// var result = "10"
// document.write("The Value of a is :" + " " + result + "<br>");
// document.write("........................................." + "<br>");
// document.write("<br>")
// result++;
// document.write("The Value of a++ is :" + " " + result+ "<br>");
// document.write("Now the Value of a is :" + " " + result + "<br>");
// document.write("<br>")
// document.write("<br>")
// ++result;
// document.write("The Value of ++a is :" + " " + result+ "<br>");
// document.write("Now the Value of a is :" + " " + result + "<br>");
// document.write("<br>")
// document.write("<br>")
// result--;
// document.write("The Value of a-- is :" + " " + result+ "<br>");
// document.write("Now the Value of a is :" + " " + result + "<br>");
// document.write("<br>")
// document.write("<br>")
// --result;
// document.write("The Value of --a is :" + " " + result+ "<br>");
// document.write("Now the Value of a is :" + " " + result + "<br>");
// document.write("<br>")
// document.write("<br>")

// Question 02
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
    // 1
// --a - --b;
    // 1 - 0
// --a - --b + ++b;
//    1    - 0  + 1
// --a - --b + ++b + b--;
//    1  -   0  +  1  +  1
// ANSWSER 01
// var a = 2;
// var b = 1;
// document.write( --a - --b + ++b + b--) //3

//  Question 03
//  3. Write a program that takes input a name from user &
// greet the user.
// ANSWER 03
// var user = prompt('Enter you name' )

// Question 04
// 4. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
// ANSWSER 04
// var user = +prompt('Enter you number' ,'+92137698008 ')

// Question 05
// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
//  var subject1 = "English";
//   var subject2 = "Urdu";
//   var subject3 = "Math";
//   var totalMarksPerSubject = 100;
//   var marks1 = 56;
//   var marks2 =78;
//   var marks3 = 33;
//   var percent1 = (marks1 / totalMarksPerSubject) * 100;
//   var percent2 = (marks2 / totalMarksPerSubject) * 100;
//   var percent3 = (marks3 / totalMarksPerSubject) * 100;
//   var totalMarks = totalMarksPerSubject * 3;
//   var totalObtained = marks1 + marks2 + marks3;
//   var totalPercent = (totalObtained / totalMarks) * 100;
//    document.write("<table>");
//   document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
//   document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + percent1.toFixed(0) + "%</td></tr>");
//   document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + percent2.toFixed(0) + "%</td></tr>");
//   document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + percent3.toFixed(0) + "%</td></tr>");
//   document.write("<tr class='bold'><td></td><td>" + totalMarks + "</td><td>" + totalObtained + "</td><td>" + totalPercent.toFixed(0) + "%</td></tr>");
//   document.write("</table>");