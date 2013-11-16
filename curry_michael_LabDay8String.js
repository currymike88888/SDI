// Problem 1

var myEmail = "currymike89@gmail.com"

var vaildMail = function(findChar)

{
    
    var checkAt = findChar.indexOf("@");
    var checkSpace = findChar.indexOf(" ");
    var checkDot = findChar.indexOf(".");
    
    if (checkSpace > -1)
    {
        console.log("Type in email without spaces")
        //console.log("Found a space at index " +checkSpace+"." )
    
    }
    
    else if (checkAt > -1 && checkDot > -1)
    {
        console.log("Correct email format!")
        //console.log(" There was @ and dot included at index "+checkAt+ " and " +checkDot+ ".")
    
    }
    
    else
    {
        
        console.log("This is not a valid email!")
    
    }
    
};

vaildMail(myEmail);

//Problem 2

var names = "Charlotte,Kayla,Vernell,Michael";
var NewMark = "/";
var sign = ",";

var splitNames = function(names,NewMark,sign) {
    
    
    var newStr = "";
    
    
    var splitNew = names.split(sign)
    
    
    
    console.log()
    
    for (var i = 0; i < splitNew.length; i++){
        
       
        
            
            var newStr = newStr + splitNew[i] + NewMark ;
        
           

        }
        
    
    console.log(newStr);

}


splitNames(names,NewMark,sign);











