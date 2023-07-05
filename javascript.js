function getComputerChoice() {
    let num = Math.random();
    let choice = "";

    if (num <= 0.33333) {
        choice = "rock";
    }
    else if (num > 0.33333 && num <= 0.66666) {
        choice = "paper";
    }

    else if (num > 0.66666) {
        choice = "scissors";
    }
    console.log(num);
    return choice;
}

function playRound(computerSelection, playerSelection){
    playerSelection = playerSelection.toLowerCase();
    let str = "";
    let result = "";
    if (playerSelection === "rock" && computerSelection === "rock") {
        str = "You both selected rock! It's a tie!";
        console.log(str);
        result = "tie";      
       
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
        str = "Paper beats rock! You lose!";
        console.log(str);
        result = "loss";

    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        str = "Rock beats scissors! You win!";
        console.log(str);
        result = "win"; 
    }
    
    if (playerSelection === "paper" && computerSelection === "paper") {
        str = "You both selected paper! It's a tie!";
        console.log(str);
        result = "tie";       
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        str = "Paper beats rock! You win!";
        console.log(str);
        result = "win"; 
    }

    if (playerSelection === "paper" && computerSelection === "scissors") {
        str = "Scissors beats paper! You lose!";
        console.log(str);
        result = "loss";
    }

    if (playerSelection === "scissors" && computerSelection === "scissors") {
        str = "You both selected scissors! It's a tie!";
        console.log(str);
        result = "tie"; 

    }
    
    if (playerSelection === "scissors" && computerSelection === "rock") {
        str = "Rock beats scissors! You lose!";
        console.log(str);
        result = "loss";  
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        str = "Scissors beats paper! You win!";
        console.log(str);
        result = "win"; 
    }
    
    return result;

}

function game() {
    wins = 0;
    losses = 0;
    ties = 0;
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors! Enter your selection:");
        let result = playRound(getComputerChoice(), playerSelection);
        if(result === "win"){
            wins++;
        }
        if(result === "loss"){
            losses++;
        }
        if(result === "tie"){
            ties++;
        }
        
    }

    console.log("You won " + wins + " times, lost " + losses + " times, and tied " + ties + " times." )


}

game();





