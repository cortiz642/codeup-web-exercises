//function --> js keyword
//name of the function --> camelcase, totally up to you
// () --> potentially hold parameters
// (parameter1, parameter2) -->

printsMyName();

// TODO: write a function that prints out 'firstName age" to the
// console. replace firstName and age with your actual firstName and age

function doMathThings(){
    //code lives here
    var result = 4 + 8 +2;
    console.log("result: ", result);
    return result

};

console.log("after function runs: ", doMathThings());

function doSomething(){

}

// global scope

var myNotes = "my notes";
var isColdOutside = false; //This variable
var temp = 86;
var isACWorking = false;

// functions
// TODO: write a function that takes in the isColdOutside and returns a
// string that says "you'll need a jacket" if it IS cold outside.

// isColdOutside -- the variable we'll be using to verify whether or
// not to print out "you'll need a jacket // argument
// name of funtion
// do we need parameters? yes!
// what are parameters?
// what are we naming the parameters
// how do we use parameters inside of a function
// pass in variable we're actually going to be using inside of our
// function
// return something from function
// what's being returnedz/ a phrase / returning a "string"
// where is the string being defined? we can create a variable or
// return the string directly
// if/else -- check to see if isColdOutside is true, if it is, return
// string
// if it's false return ...??? // exit the function

// 1. write a function
// 2. function needs parameter(s)
// 3. call the function
// 4. pass in the argument (isColdOutside)
// 5. inside of function: check IF isColdOutside == true return string/
// else exit out of function

var finalString = "You'll need a jacket";
// parameter - placeholder, not a string
function isCold(jacket) {
    console.log(jacket) // false
    if(jacket === true){
        return "you'll need a jacket";
    }else {
        return;
    }

}

// argument - the actual values being passed in to be used in the function
isCold(isColdOutside);
// console.log(isCold(isColdOutside));
//block scope??

// FUNCTIONS
//function without parameters
// TODO: write a function that adds 4 + 19 and returns the sum;

function addNumbers(){
    console.log(4 + 19);
    var sum = 4+19;
    return sum;
    return 4 + 19;


}

//returnSum(); // does this display anything on the console?
// console.log(returnSum()) // does this display anything? Y --> the
// thing/value getting returened

// functions with 1 parameter/argument that doesn't return anything
// TODO: write a function that adds num1 to 25;
// 1. write a function
// 2. add num1 + 25
// 3. call the function
// 4. create a num1 variable (outside of my function -globally)
// 5. pass in num1 as an argument to the function
// // what is the argument? the value being passed in to the fn --> num1
// // whewre do we pass in an argument? --> passed when we
// // CALL(invoke) the function
// // how will we reference those arguments inside of my function? -->
// parameters? placeholder for the actual value
// // where do parameters get created? right after the name of the fn
// in parentheses
// // where/how do we use them? we now reference the values being
// brought in as arguments, by calling their param names

var num1 = 18;
var num2 = 24;
var sum = sumVar();

console.log("num1: ", num1);
console.log("num2: ", num2);

function sumVar(param){
    console.log("param: ", param)
    console.log(param + 25);
    return param + 25; //
}

sumVar(num1);
sumVar(num2);
//console.log("sum: ", sum);

sumVar(num1);

// to see parameter within chrome console.log("param: ", param)

