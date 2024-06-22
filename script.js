function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 9) + 1;
    if (computerChoice <= 3) {
        return 'rock';
    }
    else if (computerChoice > 3 && computerChoice <= 6) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
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
    else if (computerChoice == 'rock' && humanChoice == 'scissors') {
        console.log('The computer wins!')
        return computerScore ++;
    }
    else if (computerChoice == 'paper' && humanChoice == 'rock') {
        console.log('The computer wins!')
        return computerScore ++;
    }
    else if (computerChoice == 'paper' && humanChoice == 'paper') {
        console.log('Draw!')
    }
    else if (computerChoice == 'paper' && humanChoice == 'scissors') {
        console.log('The humie wins!')
        return humanScore ++;
    }
    else if (computerChoice == 'scissors' && humanChoice == 'rock') {
        console.log('The humie wins!')
        return humanScore ++;
    }
    else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        console.log('The computer wins!')
        return computerScore ++;
    }
    else if (computerChoice == 'scissors' && humanChoice == 'scissors') {
        console.log('Draw!')
    }
    else {
        console.log('Invalid input')
    }
}

let humanScore = 0;

let computerScore = 0;

let humanChoice = null;

const choices = document.querySelectorAll('.choice')

choices.forEach(choice => {
    choice.addEventListener('click', function() {
        humanChoice = this.textContent;
        playRound(getComputerChoice(), humanChoice);
    });
});
