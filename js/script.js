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
        } else if (randomNumber<.6666) {
            
            computerChoice = "paper";
        } else if ( randomNumber<1){
            
            computerChoice = "scissors";
        }
        $("#computerChoice").text(computerChoice);
        
        
        if((computerChoice==='rock'&& userChoice==='paper')|| (computerChoice==='paper'&& userChoice==='scissors')|| (computerChoice==='scissors'&& userChoice==='rock')){
            $('#result').html('User Wins');
        }
        else if (computerChoice===userChoice){ 
            $('#result').html('Tie');
        }
        else if (userChoice!=='rock' && userChoice !== 'paper' && userChoice !== 'scissors'){
            $('#result').html('Error');
        }  
        
        else {
            $('#result').html("Computer Wins")
        }
            
        
    
});





 
 


// DOCUMENT READY FUNCTION BELOW

