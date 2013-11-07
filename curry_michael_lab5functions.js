//Michael Curry Jr
//Scalable Data Infrastructures
//Functions 
//Lab Day 5

var firstNumber = "";
var secondNumber = "";
var whichMath = "";

//global variables 

firstNumber = parseFloat(prompt("First Number"));
whichMath = prompt("What would you like to do with these numbers?" ,"ex. +, -, * or /");
secondNumber = parseFloat(prompt("Second Number?"));

// functions
var division = function(firstNumber, secondNumber, whichMath)
{
	if (whichMath === "/" && secondNumber != 0)
        {
		var outcome = firstNumber/secondNumber;
		
		console.log("The quotinent is " + outcome);
		
		return outcome;
        }
        else if (secondNumber === 0)
        {
            console.log("Sorry can't divide by 0! Try again");
        };
};

var add = function(firstNumber, secondNumber, whichMath)
{

	if (whichMath === "+")
        {
		var outcome = firstNumber+secondNumber;
		
                console.log("The sum is " + outcome);
		
                return outcome;
	};
};

var subtract = function(firstNumber, secondNumber, whichMath)
{
	if (whichMath === "-")
        {
		var outcome = firstNumber-secondNumber;
		
		console.log("The difference is "+ outcome);
		
		return outcome;
	};
};

var multiplication = function(firstNumber, secondNumber, whichMath)
{

	if (whichMath === "*")
        {
		var outcome = firstNumber*secondNumber;
		
		console.log("The product is " +outcome);
	
		return outcome;
	};
};

//note: calling a function
division(firstNumber, secondNumber, whichMath);
add(firstNumber, secondNumber, whichMath);
subtract(firstNumber, secondNumber, whichMath);
multiplication(firstNumber, secondNumber, whichMath);