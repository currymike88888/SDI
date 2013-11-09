//
//
//
//

//Family House Members

var family = ["Michael", "Vernell", "Charlotte", "Kayla"];

var jobs = ["a Full Time Student","Retired", "a Case Manager", "a Teacher"];

var occuptions = function(arrayNames, arrayJobs) {
    
    for (var i = 0; i < arrayNames.length; i++){
        
        var Kjob;
        
        console.log(arrayNames[i], "is" , arrayJobs[i],".");
        };
        
        
        arrayJobs.push("a Doctor");
        console.log("Kayla's son " + arrayNames[arrayNames.length - 1] + " wants to be " + arrayJobs[arrayJobs.length - 1] + "." );
        
        Kjob = arrayJobs.pop();
        
        console.log("Just making sure Im " + Kjob + ".")
        
        return Kjob;
}

var returnedLiving = occuptions(family, jobs);

console.log("I can't wait until Keion is " +returnedLiving+ ".");