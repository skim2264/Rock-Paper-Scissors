//Computer chooses randomly between Rock, Paper, and Scissors
function computerPlay() {
    const RPS = ["Rock", "Paper", "Scissors"];
    let randindex = Math.floor(Math.random()*3);
    return RPS[randindex];
}

//Play a single round of Rock-Paper-Scissors
function playRound(playerSelection, computerSelection) {
    //change all inputs to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //compare players and computer selection and return who wins
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "You Tied! Both Played Rock";
        }
        else if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        }
        else {
            return "You Win! Rock beats Paper";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats Rock";
        }
        else if (computerSelection == "paper") {
            return "You Tied! Both played Paper";
        }
        else {
            return "You Lose! Scissors beat Paper";
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "paper") {
            return "You Win! Scissors beat Rock";
        }
        else {
            return "You Tied! Both played Scissors";
        }
    }
}

const container = document.querySelector('#buttons');
const buttons = document.querySelectorAll('button');

const display = document.querySelector('#display');
const roundResult = document.querySelector('#roundResult');
const score = document.querySelector('#score');
const playerScore = score.querySelector('#playerScore>p');
const compScore = score.querySelector('#compScore>p');
const finalResult = document.querySelector('#finalResult');

let countWinPlayer = 0;
let countWinComp = 0;
let outcome = '';


buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if ((countWinPlayer == 5) || (countWinComp == 5)) {
            location.reload();
        }
        outcome = playRound(btn.id, computerPlay());
        roundResult.innerHTML += outcome + "<br>";
        if (outcome.includes('You Win!')) {
            countWinPlayer++;
            playerScore.textContent = countWinPlayer;
            if (countWinPlayer == 5) {
                finalResult.textContent += 'You won 5 rounds!';
            }
        }
        else if (outcome.includes('You Lose!')) {
            countWinComp++;
            compScore.textContent = countWinComp;
            if (countWinComp == 5) {
                finalResult.textContent += 'You lost, computer won 5 rounds.';
            }
        }

    });
});


