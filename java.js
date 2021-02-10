console.log(this);
var playerChoice = prompt("Choose R,P,or S");
var wins =0;
var losses = 0;
var ties =0;
var choices = ["R", "P", "S"];

var ai = {
    rng: Math.floor(Math.random()*3),

    aiChoice: function() {
        return choices[this.rng]
    }
}

var comChoice = ai.aiChoice();

console.log(comChoice, playerChoice);
function checkplayagain() {
    var playAgain = confirm("Do you want to play again?"); 
    
}

function start() {
    var startPrompt = confirm("Doy ou want to play?")
    if(startPrompt) {
    
    }
}

function gameLogic() {
    if (comChoice === playerChoice) {
    ties++
    alert("TIE!")
    alert("Score: ties: "+ ties  + "wins: " + wins + "Losses: " +losses)
    }

    if (comChoice === "R" && playerChoice === "P") {
    wins++;
    alert("You win!")
    alert("Score: ties: "+ ties  + "wins: " + wins + "Losses: " +losses)
    }else if (comChoice === "S" && playerChoice === "R") {
    wins++;
    alert("You win!")
    alert("Score: ties: "+ ties  + "wins: " + wins + "Losses: " +losses)
    }else if(comChoice === "P" && playerChoice === "S") {
    wins++;
    alert("You win!")
    alert("Score: ties: "+ ties  + "wins: " + wins + "Losses: " +losses)
    }

    if (comChoice === "R" && playerChoice === "S") {
    losses++;
    alert("You lose!")
    alert("Score: ties: "+ ties  + "wins: " + wins + "Losses: " +losses)
    }else if (comChoice === "S" && playerChoice === "P") {
    losses++;
    alert("You lose!")
    alert("Score: ties: "+ ties  + "wins: " + wins + "Losses: " +losses)
    }else if(comChoice === "P" && playerChoice === "R") {
    losses++;
    alert("You lose!")
    alert("Score: ties: "+ ties  + "wins: " + wins + "Losses: " +losses)
    }
  
}

checkplayagain();




