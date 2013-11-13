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

var objConstructor = function(NFLteam,NFLState,NFLconference) {
    
    this.team = NFLteam;
    this.teamstate = NFLState;
    this.conference = NFLconference
    this.playoff = false;
    this.myMethod = function(){
        this.playoff = true;
    };
    
};

var createNFL = function(){
    
    for (var i = 0; i < jsonDataNFL.NFL.length; i++ ){
        
        team = jsonDataNFL.NFL[i].team;
        teamstate = jsonDataNFL.NFL[i].teamstate;
        conference = jsonDataNFL.NFL[i].conference;
        
        if (i === 0) {
            objNewTeam = new objConstructor(team,teamstate,conference)
        }else{
            objNewTeamTwo = new objConstructor(team,teamstate,conference)
        };
    };
};


myJSONFunction();

createNFL();

objNewTeam.myMethod();
console.log("This year it is", objNewTeam.playoff, "that the", objNewTeam.team, "are going to the playoffs");

//objNewTeamTwo.myMethod();
console.log("This year it is", objNewTeamTwo.playoff, "that the", objNewTeamTwo.team, "are going to the playoffs");


