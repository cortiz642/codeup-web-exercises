function lifeInWeeks(age) {
    var user = prompt("What is your name?")
    var ages = prompt("How old are you?")


    var yearsRemaining = 90 - ages;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    alert("user " + "You have " + days + " days, " + weeks + " weeks and, " + months + " months left");

}
lifeInWeeks();