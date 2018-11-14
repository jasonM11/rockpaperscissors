// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";

var computerChoice = "";

var winner = "";
$("#shoot").click(function(){
    userChoice = $("#input").val();

    $("#userChoice").text(userChoice);
        var randomNumber = Math.random();
        if(randomNumber<.3333) {
            
            computerChoice = "rock";
        } else if (randomNumber>.3333&& randomNumber<.6666) {
            
            computerChoice = "paper";
        } else if (randomNumber>.6666&& randomNumber<1){
            
            computerChoice = "scissors";
        }
        $("#computerChoice").text(computerChoice);
        
        
    
});





 
 


// DOCUMENT READY FUNCTION BELOW

