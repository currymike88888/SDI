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



var myString = "";


var strToNum = function(myString){
    
    
    var newNumber = parseFloat(myString)
    
    return newNumber;
};


myString = prompt("Enter a number!");
var returnString = strToNum(myString);
console.log("Your old number:", myString, "Your new number", returnString, ".");


var firstDate = new Date(first);
var secondDate = new Date(second);
var hoursDays = "";
var returnedTime = "";

var inBetween = function(firstDate, secondDate, hoursDays){
    
    var theTime = Math.abs(secondDate - firstDate);

    
    if (hoursDays === "Days") {
        
        var actualTime =  Math.round ((((theTime /1000) /60) /60) /24);
        
 
    }else if (hoursDays === "Hours"){
        
        var actualTime = Math.round (((theTime /1000) /60) /60);

    };
    
    return actualTime;
    
};


var first = prompt("Enter a date you want to compare?")
var second = prompt("Whats the second date you want to compare it to?")
var hoursDays = prompt("Would you like your difference in Hours or Days","Hours or Days")

var returnedTime = inBetween(firstDate, secondDate, hoursDays);

console.log("The difference is " , returnedTime , " ", hoursDays , ".")


















