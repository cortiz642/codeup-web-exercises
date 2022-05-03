
//create a function about yourself, save your YOU object in a variable
//named after you

// var chrisObject = { //curly brackets object literal
//     Age: 35, // "Age" is Property || "35" Values
//     Sports: ["soccer", "baseball", "ufc", "basketball"],
//
// }

//var frogs = {}; //another way of creating an empty object 1) object literal
// var whales = new Object(); // creating an empty object 2)creating a new object
// instance


///How to add values to an object /////

//how to add values to an object
// var anime = {}; //
// console.log(anime);
//
// //let's add a definition to the object
// anime.definition = "anime is a cool way of story telling?";
// console.log(anime);
//
// anime.characters = ["naruto", "ichigo", "avatar"];
// console.log(anime);
//
// anime.genres = ["shonen", "shojo", "seinen", "josei", "kodomomuke"];
//
// anime.noGenres = 5;
//
// //how to access specific values from an object
// console.log(anime);
//
// console.log(anime.noGenres); // dot notation
// console.log(anime["characters"]); //bracket notation
//
// // access nested values inside of objects
// console.log(anime.genres[2]); //If you want to access "seinen" within anime.genres

// var car = {
//     year: 2021,
//     make: "voltswagon",
//     model: "atlas",
//     has4Wheels: true,
//     leather: true,
//     wheels: 4,
//     doors: 4,
//     stereo: true,
//     radioStations: [136.0, 95.1, 101.1, 105.3, 96.1],
// }
//     console.log("I drive a " + car.year + " " + car.make + " and I like to listen to "
// , car.radioStations[0] + " " + car.radioStations[1]);
//
//     //accessing nested objects
// var states = { //OBJECT
//     texas: {
//         capital: "Austin",
//         weather: "always hot",
//         cities: [{
//             name: "San Antonio",
//             pop: 1.5,
//         }, {
//             name: "Austin",
//             pop: 6.6
//         }]
//     },
//     illinois: {
//         capital: "springfield",
//         weather: "always chilly"
//     },
//     kansas: {
//     capital: "topeka"
//     }
//
//
//
// }
// console.log(states.texas.cities[2].pop);

// write a function that prints out all the cities in the state of
// texas (based on the object).

//1. write a function that accepts an obj
//2. access cities from states obj
//3. loop through cities array --> object
//4. inside of loop, access 'name' from object we're currently on

// function printCities(statesObj) {
//     console.log(statesObj);
//     var txCities = statesObj.texas.cities;
//     txCities.forEach(function (obj) { //This is the loop "forEach"
//         console.log(obj.name);
//     })
//
// }

//bonus check to see if it's a string or not

//adding functionality mean implementing properties of the object

// var bicycle = {
//     pedals: 2,
//     color: "blue",
//     height: [37, 39, 43],
//     rideBike: function () { // function becomes method that lives inside objects
//         return "pedal with your feet in circles and make the bike go."
//     }
// }
//     addsPedals: function(){
//         return bicycle.pedals + 4; // 6
//     }
// }
//
//     console.log(bicycle.color);
//     console.log(bicycle.rideBike());
//     console.log(bicycle.addPedals());


//todo: create a method on your YOU object, that returns your age -10 years;

var chrisObject = { //curly brackets object literal
    Age: 35, // "Age" is Property || "35" Values
    Sports: ["soccer", "baseball", "ufc", "basketball"],
    youngerMe: function () {
        return chrisObject.Age - 10;
    }
}
// console.log(chrisObject.youngerMe());
console.log(chrisObject)