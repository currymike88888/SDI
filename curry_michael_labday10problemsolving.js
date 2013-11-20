//Lab 10
//Problem Solving
//Michael Curry 
//Problem 1

alert("Problem 1");
var number1 = 3;
var number2 = 5;

var funcNumber = function(argNum1, argNum2)
{
	var myTotal1 = 0;
	var myTotal2 = 0;
	
	var num1Array = [];
	var num2Array = [];
	
	var i = 1;
	
	multNum1 = 0;
	multNum2 = 0;
	
	while (multNum1 < 1000)
	{
		multNum1 = argNum1 * i;
		
		
		//console.log(argNum1 + " x " + i + " = " + multNum1);
		
		num1Array.push(multNum1);
		
		multNum1++;
		i++;
		
	};
	var i = 1;
	while (multNum2 < 1000)
	{
		multNum2 = argNum2 * i;
		
		//console.log(argNum2 + " x " + i + " = " + multNum2);
		
		num2Array.push(multNum2);
		
		multNum2++;
		i++;
		
	};
	for (var i = 0; i<num1Array.length; i++)
	{
		myTotal1 += num1Array[i];
	}
	for (var i = 0; i<num2Array.length; i++)
	{
		myTotal2 += num2Array[i];	
	}
	console.log("The sum of ALL the answers for 3 is " + myTotal1);
	console.log("The sum of ALL the answers for 5 is " + myTotal2);
	console.log("The total is " + (myTotal1 + myTotal2))
	
};

funcNumber(number1, number2);


//////////////////////////////////////////////////////////////////////////////////////////

var i;
var fib = [];
var fiboSeq = [];

var fibo = function(argFib) {
	
	
	argFib[0] = 0;
	argFib[1] = 1;
	for ( i = 2; i <= 35; i++) {

		argFib[i] = argFib[i - 2] + argFib[i - 1];
		
	fiboSeq.push(argFib[i]);
	
	
	};
	
	for (i = 0; i < fiboSeq.length; i++){
		
		while ( fiboSeq[i] % 2) {
			fiboSeq.splice(i, 1);
		};
		
	};
return fiboSeq;
};



fibo(fib);
console.log(fiboSeq);

