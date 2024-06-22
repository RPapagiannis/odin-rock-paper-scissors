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
    const results = document.querySelector('.score-box')

    const roundChoices = document.createElement('p');
    roundChoices.textContent = `human picks: ${humanChoice}, computer picks: ${computerChoice}`
    results.appendChild(roundChoices);

    const roundResult = document.createElement('p');

    if (computerChoice === 'rock' && humanChoice === 'rock') {
        roundResult.textContent = 'draw!'
        results.appendChild(roundResult);
    }
    else if (computerChoice == 'rock' && humanChoice == 'paper') {
        roundResult.textContent = 'the humie wins!'
        results.appendChild(roundResult);
        return humanScore++;
    }
    else if (computerChoice == 'rock' && humanChoice == 'scissors') {
        roundResult.textContent = 'the computer wins!'
        results.appendChild(roundResult);
        return computerScore++;
    }
    else if (computerChoice == 'paper' && humanChoice == 'rock') {
        roundResult.textContent = 'the computer wins!'
        results.appendChild(roundResult);
        return computerScore++;
    }
    else if (computerChoice == 'paper' && humanChoice == 'paper') {
        roundResult.textContent = 'draw'
        results.appendChild(roundResult);
    }
    else if (computerChoice == 'paper' && humanChoice == 'scissors') {
        roundResult.textContent = 'the humie wins!'
        results.appendChild(roundResult)
        return humanScore++;
    }
    else if (computerChoice == 'scissors' && humanChoice == 'rock') {
        roundResult.textContent = 'the humie wins!'
        results.appendChild(roundResult)
        return humanScore++;
    }
    else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        roundResult.textContent = 'the computer wins!'
        results.appendChild(roundResult)
        return computerScore++;
    }
    else if (computerChoice == 'scissors' && humanChoice == 'scissors') {
        roundResult.textContent = 'draw!'
        results.appendChild(roundResult)
    }
    else {
        roundResult.textContent = 'invalid input!'
        results.appendChild(roundResult)
    }
}

let humanScore = 0;

let computerScore = 0;

const choices = document.querySelectorAll('.choice')
const humanTally = document.querySelector('.human-score')
const computerTally = document.querySelector('.computer-score')

choices.forEach(choice => {
    choice.addEventListener('click', function () {
        const humanChoice = this.textContent;
        playRound(getComputerChoice(), humanChoice);
        humanTally.textContent = humanScore;
        computerTally.textContent = computerScore;
        if (humanScore == 5) {
            alert(`the human won!`)
        }
        else if (computerScore == 5) {
            alert('skynet wins the day!')
        }
    });
});


