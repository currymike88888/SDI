//var NFLObjectsfunction = function()
//{    
//    for (var i = 0; i > jsonDataNFL.NFL.length; i++)
//    {
//        
//            
//            for (var key in jsonDataNFL.NFL[i]) 
//             {
//                
//                console.log("The", key, "is", jsonDataNFL.NFL[i][key], ".");
//            
//             }  
//
//    };
//    
//};    
//console.log("Hello")
//NFLObjectsfunction();
//console.log("Hello")
//
//
var team;
var teamstate;
var conference;


var myJSONFunction = function()
{
    
    for (var i = 0; i < jsonDataNFL.NFL.length; i++)
    {
        
        for (var key in jsonDataNFL.NFL[i])
        {
            
            console.log("The",  key, "is", jsonDataNFL.NFL[i][key], "." );
            
            
        }
    }
};

var createNFL = function() {
    
    
}

myJSONFunction();

