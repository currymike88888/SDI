//Michael Curry
//November 21, 2013
//Scalable Data Inf. SDI 1311
//Practical Exam
//Problem 1



var userNum = prompt("What is your phone number?","ex.XXX-XXX-XXXX");


var funcNumber = function(userNum){

    checkDash = userNum.indexOf("-");
    checkLastDash = userNum.lastIndexOf("-");
    //checks for the index place of the first and last "-"
    
    numb1 = userNum.substr(0,3);
    numb2 = userNum.substr(4,3);
    numb3 = userNum.substr(8,4);
    //returning the 3 individual pieces of the phone number with the dash 
    
    
    console.log(checkDash);
    console.log(checkLastDash);
    //my own console to check the index of the two "-"
    
    num1 = isNaN(numb1);
    num2 = isNaN(numb2);
    num3 = isNaN(numb3);
    //checking if the individaul pieces of input are numbers if they are numbers the return will be false
    //if there is anything besides numbers entered the return will be true
    
    console.log(num1);
    console.log(num2);
    console.log(num3);
    //my personal console log
    
    
    if (checkDash === 3 && checkLastDash === 7) {
        
        if (num1 === false && num2 === false && num3 === false) {
            
            return "This is a number and is formatted correctly";
            //if the "-" is in the third and seventh index and
            // if the three individual pieces of input is numbers the above will run 
        }else{
            
            return "Formatted correctly but this isnt a phone number";
            //if the "-" is in the third and seventh index but the
            //input entered is not numbers the above will run 
        }
        
    
}else{
    
     return "The phone number formatt is invalid/ or isnt a phone number";
     //if the formatt is wrong 
    
    };
};

var myPhone= funcNumber(userNum);
console.log(myPhone);
console.log(userNum);