// TODO: Fizzbuzz Activity
// Print numbers 1-100
// if # is divisible by 3 use Fizz
// if # is divisible by 5 use Buzz
// if # is divisible by both 3 and 5 use FizzBuzz

// function fizzBuzz(){
//     for (var i = 1; i <= 100; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("FizzBuzz");
//         }else if (i % 3 === 0){
//             console.log("Fizz")
//         }else if (i % 5 === 0){
//             console.log("Buzz");
//         }else{
//             console.log(i); //print #'s 1-100
//         }
//     }
// }
// fizzBuzz();

// Imagine the supplied array is like a pack of cards. Write a function to
// shuffle an array in to a completely new and entirely random order, much like
// shuffling a pack of cards.
//     example input: [2,4,6,8]
// expected output: [4,2,8,6];

// function to shuffle an array in a new random order

// var cards = [2, 4, 6, 8];
// shuffle(cards);
// function shuffle(cards) {
//     cards.sort(() => Math.random());
//     console.log(cards);
// }

// let arr = [1, 2, 3];
// shuffle(arr);
// alert(arr);
// var random = cards[Math.floor(Math.random() * cards.length)];
// console.log(random);


// cntrl + command + spacebar = emojis

//////// MORNING WARMUP ///////////////
//1. Return a string in reverse
// ex. reverseString(‘hello’) === ‘olleh’
// let reverseString = (str) => {
//   return //Something
// };
// 2. Return true if palindrome and false if not
// ex. isPalindrome(‘racecar’) === ‘true’, isPalindrome(‘hello’) == false
// let isPalindrome = (str) => {
// };
// function reverseString(str){
//     return str;
//
// }
// reverseString("hello");

// var reverseString = input.split("").reverse().join("");

// var arr = [3,'g','s',5,'j',8,2,'d',6,'h',9,'l',5,'s',2,3];
// var numbersOnly = (val)=> {
//     if(typeof(val) === 'number'){
//         return val;
//     }
// }
// var number = arr.filter(numbersOnly);
// console.log(number);

//////////MORNING WARMUP 4/1/2022 //////////////////
//Write a function that returns the reading status of each of following books
// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: true,
//
//     }]
//         for (var i = 0; i < library.length; i++)
// {
//     var book = library[i].title + ' by ' + library[i].author + ".";
//     if (library[i].readingStatus) {
//         console.log("Already read " + book);
//     } else
//     {
//         console.log("You still need to read " + book);
//     }
// }

        //////MORNING WARMUP 4/4/2022 ///////////////////
// Write a JS code to return an array of only the  Even numbers from the  given array
// example input: [12,2,3,4,5,6,7,8,9]
// expected output: [2,2,4,6,8]

// function evenNum(array) {
//     var input = [12, 2, 3, 4, 5, 6, 7, 8, 9];
//     for(var i = 0; i < array.length; i++){
//         if(array[i] % 2 === 0){
//             console.log(input);
//         }
//     }
//     return input;


    /////////// MORNING WARMUP 4/5/2022 //////////////////////

//     example input: [1,2,3,4,5];
//     expected output: 15
//     some possible test cases to think about:
//         function should be called ‘sumArr’
// function should return a number
//     function should accept an array
//     function should return “sum not available” if array is empty
//     function should handle non-numbers

// }

//// Primary Answer //////
// var  sumArr = [1, 2, 3, 4, 5];
// var sum = 0;
//
// for(var i = 0; i <sumArr.length; i++){
//     sum += sumArr[i];
// }
// console.log(sum);
//
// //// Secondary Answer ///////
// var passedNumbers = [1,'2',3,4,5];
// var result = 0;
// function sumArr(input) {
//     input = passedNumbers.map(Number);
//     if (input === "") return "sum not available";
//     for (var i = 0; i < passedNumbers.length; i++) {
//         result += input[i];
//
//     } return result;
// }
// sumArr(passedNumbers);

///////////////////// MORNING WARMUP 4/6/2022 ///////////////////////////////
// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7
// some possible test cases to think about:
//     should be called ‘sortArr’
// function should return an array
// function should accept an array
// BONUS thoughts
// what would happen if you had negative numbers in your list
// can you sort and then remove any duplicates (would it be more/less efficient to remove duplicates and then sort?)
// if your array has non-numbers can you still sort the numbers? ex: input: [3,“b”,8,5,9,true”, 4,“xyz”] expected output: [3,4,5,8,9];

// var sortArr = [5, 8, 2, 6, 9, 3, 2];
// sortArr.sort();
// console.log(sortArr);


/////BONUS
// var sortArr = [3, "b", 8, 5, 9, "true”, 4,“xyz”];

/////// MORNING WARMUP 4/7/2022

// Write a function that accepts a string and returns a map with the strings character frequency.
//     example input: [“b”, “a”, “n”, “a”, “n”, “a”];
// expected output: { b: 1, a: 3, n: 2 }
// var input = ["b", "a", "n", "a", "n", "a"];
// console.log(input)
// // var input2 = input.map();
// if(input !== "string"){
//     var input2 = input.map();
// }else {
//
// }


//////////// PRACTICE FUNCTIONS FOR TEST PREP /////////////////////

// 1. Make a function named isOdd(number)
// function isOdd(number){
// }
// 2. Make a function named isEven(number)
// function isEven(number){
// }
// 3. Make a function named isMultipleOfFive(input)
// function isMultipleofFive(input){
// }
// 4. Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// function isMultipleOf(target, n){
//     if(target % n === 0){
//     return true;
//     }else {
//         return false;
//     }
// }
// 5. Make a function named isVowel(letter)
// function isVowel(letter){
//
// }
// 6. Write a function called first(input) that returns the first character in the provided string.
// function first(input){
//     // var string = "somebody";
//     console.log(input.charAt(0));
//
// }
// first("something");
// var firstChar = first.charAt(0);

// 7* Create a function that takes in two string inputs.
// -- If the second string input is present in the first, return the first input string with the second
// input string removed from it.
// -- If the second string input is present multiple times in the first, the second string will only be
// removed where it first occurs in the first string.
// -- If the second string input is not present in the first, return the first string as entered in the
// function.
//
// function input(str1, str2){
//
// }



// 8. Make a function named isSpace(letter) that returns if a character is a space character
//



// 9. Write a function named squareRoot(n) that returns the square root of the input
//


// 10* create a function that will return how many whitespace characters are at the beginning of a string
// (hint: use regex).
//
// 11. Write a function named invertSign(number) that returns a negative version of a postive number, a
// positve version of negative, and false for all else.
//
// 12. Write a function named getRandomQuote().
// //   Inside of the function, create an array of strings where each string is a quote or thought you find
// inspirational
// //   getRandomQuote should generate a random number between 0 and the array's length minus 1
// //   use the randomly generated number as your index
// //   return a random quote.
//
// 13. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers
//

//////////////////////  MORNING WARMUP 4/13/2022    ////////////////////////////////

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
//
// example input: [1, 2, 3], [3, 4, 5]
// expected output:
//     [ 1, 2, 3, 4, 5 ]

// function merge_array(arr1, arr2) {
    // var result_array = [];
    // var arr = arr1.concat(arr2);
    // var len = arr.length;
    // var assoc = {};
    //
    // while(len--){
    //     var item = arr[len];
    //
    //     if(!assoc[item]){
    //         result_array.unshift(item);
    //         assoc[item] = true;
    //     }
    // }
    // return result_array;

    // var arr1 = [1, 2, 3];
    // var arr2 = [3, 4, 5];
    // var arr3 = arr1.concat(arr2)
    // var arr4 = arr3.filter((item,pos)=>arr3.indexOf(item) === pos);
    // console.log(arr4);

/////////////////   MORNING WARMUP 4/18/2022    /////////////
//
// Rewrite the following using a for-loop:
// var i = 20;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }
// 2. Write a function that takes an object (a) as argument and returns an array with all object keys
// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']
// ------------------------
//     example input:{j:9,i:2,x:3,z:4}
// expected output: ['j','i','x','z']


/////////////////   MORNING WARMUP 4/19/2022    /////////////

// (hint hint hint: learn how to use a modulus)
// Write a function that iterates through numbers 1 and 15 and returns the numbers that are divisible by 3 (hint hint hint: learn how to use a modulus)
// 2. Extra Challenging - Set likely won’t be covered but it’s a useful tool in JS
// Write a function that takes a Set and an array as arguments. If not already existing, add each element in the array to the Set. Return the modified Set
//
// example input: new Set([1, 2, 3]), [4, 5, 6]
// expected output: new Set([1, 2, 3, 4, 5, 6 ])
// -------------------------
//     example input:new Set([1, 2, 3]), [2, 3]
// expected output: new Set([1, 2, 3])
// -------------------------

// var input=(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
//
//     var i = input;
//     for (var i = 1; i <= 15; i++) {
//         if (i % 3 === 0) {
//             return i % 3;
//         }
//     }


// const myset1 = new Set([1,2,3,]); [4,5,6]
// {
//     myset1.add(1)
//     myset1.add(2)
//     myset1.add(3)
//     myset1.add(4)
//     myset1.add(5)
//     myset1.add(6)
//
// }
// console.log(myset1);

// List the primitive data types in javascript
// 2. swap keys for values
// // Write a function that takes an object as argument
// // Swap the Javascript object's key with its values and return the resulting object
//
//     example input: {z:'a',y:'b',x:'c',w:'d'}
// expected output: {a:'z',b:'y',c:'x',d:'w'}
// -------------------------
//     example input:{2:'a',4:'b',6:'c',8:'d'}
// expected output: {a:'2',b:'4',c:'6',d:'8'}
// -------------------------

//////////      DAILY WARMUP    4/21/2022       //////////////////

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

// example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country:
//         'Thailand', continent: 'Asia' }]

// var input= [
//     {
//             city: 'Tokyo',
//             country: 'Japan',
//     },
//     {
//         city: 'Bangkok',
//         country: 'Thailand',
//
//
//
//     }
//
//     ];
//
// function verify(obj, str){
//     console.log(obj, str)
//
//     for(let i = 0; i < obj.length; i++){
//         console.log(obj[i])
//         obj[i].continent = str;
//         console.log(obj[i])
//     }
// }
//
// verify([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
// input.forEach(function (element:{continent:'Asia'}) {
//     element.Active = "false";
// });

// input.forEach(function(continent))
// input[0]['continent'] ='Asia'
// input[1]['continent'] ='Asia'
// console.log(input)





// 2. How can you add “strawberry” to the beginning, middle, and end of the following array?
// var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];


//////////////      MORNING WARMUP      4/22/2022       //////////////////

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

// function arr(a){
//     var removed = a.splice(2);
//     return removed
// }
// console.log(arr(["favorite", "movie", "watch"]));

// 2.Write an object that describes which brands own which cereals (you can be creative here) . After the object has been declared …
// A) add properties and values to the existing object
// B) re-assign 2 properties’ values

// var obj: {
//
//
// }

// Write a function that takes an array of numbers as argument and returns the number of negative values in the array
// example Input: [1,-2,2,-4]
// expected output: 2

// var arr = [1, -2, 2, -4];{
//
//     for(var i = 0; i <= arr.length; i++){
//         console.log(arr)
//
//     }
//
// }


/////////////       MORNING WARMUP 4/27/2022        //////////////////
// Write a function that takes two date instances as argument
// // It should return the number of days that lies between those dates
// example input: new Date('2020-06-11'), new Date('2020-06-01')
// expected output: 10
// var date1 = new Date('2020-06-01');
// var date2 = new Date('2020-06-11');
// var Difference_In_Time = date2.getTime() - date1.getTime();
// var Difference_In_Days = Difference_In_Time/ (1000 * 3600 * 24);
// document.write(date1 + date2 + Difference_In_Days);
// console.log(date1 + date2 + Difference_In_Days)
//

// 2. // Write a function that takes an array (a) and a number (b) as arguments
// // Sum up all array elements with a value greater than b
// // Return the sum
//
// example input: [1, 2, 3, 4, 5, 6, 7], 2
// expected output: 25
//
// var arr = (a);
// var num = (b);
// var input = [1, 2, 3, 4, 5, 6,7], 2

/////////       MORNING WARMUP 04/28/2022       //////////////

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

// example input: [1,2,3,4,5,6,7,8,9,10],3
// expected output: [3,6,9]

// function arr(a,b) {
//     // var input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3
//     const result = [];
//     for(let i = 2; i <a.length; i += b){
//         result.push(a[i]);
//     }
//     return result;
// }
// console.log(arr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],3))

/////////       MORNING WARMUP 5/3/2022     /////////////////
// Write a function that takes an object (a) as argument
// Return an array with all object keys

// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']

// var input: {
//     a:1,
//     b:2,
//     c:3,
//
//     return(input);
// }

/////////////       MORNING WARMUP 5/4/2022     ////////////////

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

// example input: 931
// expected output: [9,3,1]

// function num(931){
//
// }

function countOdds(arrNum){
    for(let i = 1; i < arrNum.length; i++){
        return arrNum[i] % 1;
    }
}
countOdds(1,2,3,4,5,6)
