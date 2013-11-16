//Problem 1

var enterNum = "";
var decimalPlace ="";

var dPlaces = function(enterNum, decimalPlace){
    
    var finalPlace = enterNum.toFixed(decimalPlace);
    
    return finalPlace
    
};

enterNum = parseFloat(prompt("Enter any number here","1234.56"));
decimalPlace = parseInt(prompt("How many demical places do you want to represent?"));

var returnValue = dPlaces(enterNum,decimalPlace);

console.log(returnValue);


//Problem 2

var myString = "";

var strToNum = function(myString){
    
    var isReal = isNaN(myString)
    var newNumber = Number(myString)
    
    
    if (myString >= 0 || myString <= 0) {
        
        console.log("You have enter a valid number and you new number is:" , newNumber , ".");
    
    }else{
        
        console.log("This is not a number");
    
    };
    
};

myString = prompt("What is your number?");

console.log(myString);

strToNum(myString);

//Problem 3

var first = prompt("Whats the first date you want to compare?")
var second = prompt("Whats the second date you want to compare?")

var firstDate = new Date(first);
var secondDate = new Date(second);
var hoursDays = "";

var inBetween = function(firstDate, secondDate, hoursDays){
    
    var theTime = firstDate - secondDate;

    
    if (hoursDays === "Days") {
        
        var actualTime =  Math.round ((((theTime /1000) /60) /60) /24);
        
        console.log("There is:", actualTime , "days between" , firstDate,  "and" , secondDate, ".");
 
    }else if (hoursDays === "Hours"){
        
        var actualTime2 = Math.round (((theTime /1000) /60) /60);
        
        console.log("There is:", actualTime2 , "hours between" , firstDate,  "and" , secondDate, ".");
    
    }else{
        
        console.log("Please enter Hours or Days as displayed")
    };
    
    
};


var hoursDays = prompt("Would you like your difference in Hours or Days","Hours or Days")


inBetween(firstDate, secondDate, hoursDays);
