(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */


    //////////////////////////////////////////////////////////////////////
// ELEMENT
///////////////////////////////ADD ELEMENT///////////////////////////////////////

    //element added should be .unshift to add "The Sun" to the beginning
        //1. Arrays are created already
        //2. console.log variable planets to print all arrays
        //3. add "The Sun" to the beginning of arrays planets.unshift('The Sun')

    console.log("My Original Planets")
    //will print "My Original Planets" as a string
    console.log(planets);
    //will print original array
    console.log("Adding 'The Sun' to the beginning of the planets array.");
    //will print string after original array is printed
    planets.unshift('The Sun')
    //.unshift adds "The Sun" to the beginning of the list
    console.log(planets);
    //prints the result

///////////////////////////////ADD ELEMENT////////////////////////////////////////

    //element added should be .push to add "Pluto" to end of array
    //use variable planets.push('Pluto')

    console.log('Adding "Pluto" to the end of the planets array.');
    //prints as a string
    planets.push("Pluto");
    //.push will add "Pluto" to the end of the array
    console.log(planets);
    //prints result

////////////////////////////////REMOVING ELEMENT//////////////////////////////////////

    console.log('Removing "The Sun" from the beginning of the planets array.');
    //prints as a string
    var removedfirstItem = planets.shift()
    //created variable to remove "The Sun" by utilizing .shift method
    //which removes first item in array
    console.log(planets);
    //prints result

//////////////////////////////REMOVING ELEMENT////////////////////////////////////////

    console.log('Removing "Pluto" from the end of the planets array.');
    //prints string
    var removedlastItem = planets.pop();
    //created variable to remove "Pluto" by utilizing .pop method
    //this removes last item in array
    console.log(planets);
    //prints result

/////////////////////////////LOCATING ARRAY ELEMENT/////////////////////////////////////////

    console.log('Finding and logging the index of "Earth" in the planets array.');
    //prints string
    var index = planets.indexOf('Earth');
    //created variable to locate an element within the array by utilizing .indexOf
    //it starts searching from the beginning
    console.log(index);
    //prints result

////////////////////////////REVERSE ORDER//////////////////////////////////////////

    console.log("Reversing the order of the planets array.");
    //prints string
    planets.reverse();
    //utilized .reverse method to reverse array elements order from Z-A
    console.log(planets);
    //prints result

////////////////////////////SORTING ORDER//////////////////////////////////////////

    console.log("Sorting the planets array.");
    //prints string
    planets.sort();
    //utilized .sort method to sort array elements order from A-Z
    console.log(planets);
    //prints result
})();
