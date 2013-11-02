/**
 * @author Mike
 */
var TattooArtist = "Nick Smoove";
var ShopName = "\"Nick Smoove\" Tattoo Parlor";
var GetTattoo = true; 
var StartPrice = 50;
var NumTattoo

console.log ("Hello everyone my name is " + TattooArtist +" from Washington, DC.");
console.log("I'm the owner of " + ShopName + " currently in Orlando, Fl");
console.log("It is " + GetTattoo+ " that you want a tattoo today.");
console.log("The starting price for any tattoo is $" + StartPrice +"");

GetTattoo = confirm("Do you want a tattoo today?");

if (GetTattoo === true){
	var YourPrice = parseInt(prompt("How much money do you have?"));
	
	if(YourPrice >= 50){
		console.log("I would love to do some art for you today!");
	}else{
		console.log("You should save some money and call me again later");
	};
}else{
	NumTattoo = prompt("Do you have tattoos?","Yes or No");
	if(NumTattoo === "No"){
		console.log("Lets get some more ink on that body of yours ");
	}
	else if (NumTattoo === "Yes") {
		console.log("I got several tattoos too lets see some of yours");
	};
};

