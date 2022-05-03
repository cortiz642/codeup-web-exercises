// TODO: write a conditional that prints "hey, she's my instructor" to the
//  console if the name provided is "Laura", but if the name provided
//  is "Kenneth", print out "oh, he's my instructor too!", if the name
//  is neither Laura nor Kenneth, print out "um I don't know them"

var Instructor = prompt("Who is your instructor?");

if(Instructor == "Laura"){
    console.log("She is my instructor")

}  else if (Instuctor === "Kenneth"){

}else {
    console.log("um I don't know them");
}


// todo: write a function that accepts a student's grade and returns
// whether or not that student is passing or failing. 70+ is passing
// 1. write a function
// 2. create a parameter for the studentGrade
// 3. return "passing" or "failing"
// // if studentGrade > 70 , save a string that says "passing"
// // if studentGrade < 70, save a string that says "failing"
// 4. call the function, pass in the argument (grade)

function isPassing(studentGrade){
    var result;


    if(studentGrade > 70){
        result = "passing";

    }else {
        result = "failing"
    }

        return result;

}

console.log(isPassing("78"));

//declaring a new variable, we haven't assigned any value to this
// variable yet. // variable is sitting inside of my function's scope
var result;

// if - js keyword // (studentGrade > 70) - conditional, checks to
// see if it's true or not // { - open up another code block for
// our if statement to run if the conditional is met
if(studentGrade > 70) {

    // inside of our if statemnet code block, which only runs if
    // the condition is met // result = "passing" --> re-assigning
    // the value of result from empty to "passing" ONLY if
    // studentGrade > 70
    result = "passing";

// } closing our if code block // else keyword run if any of the
    // previous conditions weren't ever met // { - open code block
    // for the else statement
}else {
    // result variable is breing re-assigned to the value of
    // "failing", but it's only being re-assigned IF it doesn't
    // meet any of the previous conditions
    result = "failing";
// } closing out our else statement code block
}

// return keyword - 1) returns a value (if there is a value to be
// returned) 2: exits our function
    return result;
// } - close out our function block of code
}

// alert() --> create a pop up in the browser displaying what's passed
// in into the parethesis
// isPassing(grade) // isPassing() --> make the function run the code
// inside of its block // grade is referencing the variable that was
// already declared AND it's passing the Value of that variable into
// // the function, so when inside of the function you reference the
// // parameter, you're


// .. Below is an example of Ternary
var success = confirm("is the operation successful?");
console.log(success);
var message = (success) ? "Operation was successful." : "Oops, something went wrong.";
console.log(message);


// SWITCH CASES
var pizzaPreferene = prompt("What kind of pizza do you like?"); // global scope
console.log(pizzaPreference);

switch(pizzaPreference) {

    case "pineapple and hot sauce":
        console.log("1. first case ---");
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + "isn't my favorite, but let's order some!");
        break;
}
