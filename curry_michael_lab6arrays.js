//
//
//
//

//Family House Members

var family = ["Michael", "Vernell", "Charlotte", "Kayla"];

var jobs = ["a Full Time Student","Retired", "a Case Manager", "a Teacher"];

var occuptions = function(arrayNames, arrayJobs) {
    
    for (var i = 0; i < arrayNames.length && i < arrayJobs.length; i++){
        
        console.log(arrayNames[i], "is" , arrayJobs[i],".");
        } 
}

var returnedLiving = occuptions(family, jobs)

console.log(returnedLiving)