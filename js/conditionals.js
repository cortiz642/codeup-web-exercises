// "use strict";

/* ########################################################################## */

// /**
// Research parameters and variables within functions and conditions
// Information can flow inward not outward
// Lookup functional programming
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//      // 1. create a function named function analyzeColor("midnight blue")
//     // 2. return a message referencing the color to something
//     // 3. return a string

//
// var color = prompt("What is your favorite color");
// var myColor = ['blue','yellow','red','green'];
// var analyzeColor1 = ("blue");
// var myColor2 = ("yellow");
// var myColor3 = ("red");
// var myColor4 = ("green");

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// function analyzeColor(inputColor) {
//     if (inputColor === 'blue') {
//         console.log("blue is the color of a car");
//     } else if (inputColor === 'yellow') {
//         console.log("yellow is the color of some snow");
//     } else if (inputColor === 'red') {
//         console.log("red is the color of roses");
//     } else if (inputColor === 'green') {
//         console.log("green is the color of grass");
//     } else {
//         console.log("Pick another color");
//     }
// }
// analyzeColor(colors);





// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
//
// function analyzeColor(inputColor) {
//     if (inputColor === 'blue') {
//         console.log("blue is the color of a car");
//     } else if (inputColor === 'yellow') {
//         console.log("yellow is the color of some snow");
//     } else if (inputColor === 'red') {
//         console.log("red is the color of roses");
//     } else if (inputColor === 'green') {
//         console.log("green is the color of grass");
//     } else {
//         console.log("Pick another color");
//     }
// }
//     analyzeColor(randomColor);
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */

// switch (analyzeColor) {
//
//     case "blue":
//         console.log("1. first case ---");
//         alert("What a coincidence, that's my favorite color!");
//         break;
//     case "yellow":
//         alert("Are you sure");
//         break;
//     default:
//         alert(analyzeColor + "isn't my favorite, but it's all good!");
//         break;

// }
// /**


//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */

// var color = prompt("What is your favorite color");
// function analyzeColor(inputColor) {
//     if (inputColor === 'blue') {
//         alert("blue is the color of a car");
//     } else if (inputColor === 'yellow') {
//         alert("yellow is the color of some snow");
//     } else if (inputColor === 'red') {
//         alert("red is the color of roses");
//     } else if (inputColor === 'green') {
//         alert("green is the color of grass");
//     } else {
//         alert("Pick another color");
//     }
// }
//     analyzeColor(color);


// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
// var luckyNumber = Math.floor(Math.random() * 6);
// var price = prompt("Enter total amount!");
// var discount = ['.1', '.25', '.35', '.5'];
// var disPrice = calculateTotal(luckyNumber, price);
// var myDisc = (price - disPrice);
// // var luckyNumber = [Math.floor(Math.random() * number.length)];
// function calculateTotal(luckyNumber, totalAmount){
//     var myResult = (luckyNumber);
//     console.log(myResult)
//     if(luckyNumber === 1){
//         return(totalAmount * .1);
//     }else if(luckyNumber === 2){
//         return(totalAmount * .25);
//     }else if(luckyNumber === 3){
//         return(totalAmount * .35);
//     }else if(luckyNumber === 4){
//         return(totalAmount * .5);
//     }else {
//         return(totalAmount * 1)
//     }
// }
// console.log(myDisc);
//     calculateTotal(luckyNumber, discount);
// var number = [0, .1, .25, .35, .5, 100];
// var randomNumber = number[Math.floor(Math.random() * number.length)];
// // var myNumber = randomNumber
// console.log(randomNumber);
// var zero = 0;
// var one = .1;
// var two = .25;
// var three = .35;
// var four = .5;
// var five = 1;
// var totalBill = 100
// function calculateTotal(randomNumber, totalBill){
//     return (1 - randomNumber) * totalBill
// }
// console.log(calculateTotal(randomNumber, totalBill));
// if (myNumber === zero){
//  (1 - zero)
//  (console.log(zero);
// }else if(myColor === analyzeColor1){
//  console.log("blue is the color of a car");
//  console.log(analyzeColor1);
//}else if(myColor === analyzeColor2){
//  console.log("yellow is the color of some snow");
//  console.log(analyzeColor2);
//}else if(myColor === analyzeColor3){
//  console.log("red is the color of roses");
//  console.log(analyzeColor3);
//}else if(myColor === analyzeColor4){
//  console.log("green is the color of grass");
//  console.log(analyzeColor4);
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// // var luckyNumber = Math.floor(Math.random() * 6);
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */

// 1. Prompt user to confirm yes or no to enter a number
// 2. Prompt user to input a number (if the clicked ok)
// 3. Prompt user with three alerts
//  alert1) whether the number they input was even or odd
//  alert2) what there number plus 100 is
//  alert3) is the total number negative or positive
// 4. Make an alert if the user inputs the wrong data type such as a letter, user won't
// be able to go further until done so.

var text;
