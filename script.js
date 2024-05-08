function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 9) + 1;
    if (computerChoice <= 3) {
        computerChoice = 'rock';
    }
    else if (computerChoice > 3 && computerChoice <= 6) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt('Rock, Paper, or Scissors?')
    return humanChoice.toLowerCase; 
}

function playRound(computerChoice, humanChoice) {
    console.log(computerChoice, humanChoice)
    if (computerChoice === 'rock' && humanChoice === 'rock') {
        console.log('Draw!')
    }
    else if (computerChoice == 'rock' && humanChoice == 'paper') {
        console.log('The humie wins!')
        return humanScore ++;
    }
}

let humanScore = 0;

let computerScore = 0;

let computerChoice = getComputerChoice();

let humanChoice = getHumanChoice();

playRound(computerChoice, humanChoice);

console.log(humanScore);