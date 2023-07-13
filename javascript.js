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
    
    const resultsDiv = document.querySelector('.round-result');
    const gameResultDiv = document.querySelector('.game-result');
    let str;
    if (playerSelection === "rock" && computerSelection === "rock") {
        resultsDiv.textContent = "You both selected rock! It's a tie!";
        console.log(str);
        ties++;      
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
        resultsDiv.textContent = "Paper beats rock! You lose!";
        console.log(str);
        losses++;
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        resultsDiv.textContent = "Rock beats scissors! You win!";
        console.log(str);
        wins++;
    }
    
    else if (playerSelection === "paper" && computerSelection === "paper") {
        resultsDiv.textContent = "You both selected paper! It's a tie!";
        console.log(str);
        ties++;      
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        resultsDiv.textContent = "Paper beats rock! You win!";
        console.log(str);
        wins++;
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        resultsDiv.textContent = "Scissors beats paper! You lose!";
        console.log(str);
        losses++;
    }

    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        resultsDiv.textContent = "You both selected scissors! It's a tie!";
        console.log(str);
        ties++; 
    }
    
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        resultsDiv.textContent = "Rock beats scissors! You lose!";
        console.log(str);
        losses++; 
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        resultsDiv.textContent = "Scissors beats paper! You win!";
        console.log(str);
        wins++; 
    }
    
    
    


    if(wins === 5) {
        gameResultDiv.textContent = "You were the first to 5 wins! You are the winner!";
        resetGame();
    }

    if(losses === 5) {
        gameResultDiv.textContent = "The computer was the first to 5 wins! You are the loser! Try again!";
        resetGame();
    }

}

function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;
}

function game() {
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");

    rockButton.addEventListener('click', () => {
        playRound(getComputerChoice(), 'rock')
    })

    paperButton.addEventListener('click', () => {
        playRound(getComputerChoice(), 'paper')
    })

    scissorsButton.addEventListener('click', () => {
        playRound(getComputerChoice(), 'scissors')
    })
}

let wins = 0;
let losses = 0;
let ties = 0;

game();








