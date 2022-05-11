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

//Play 5 rounds of Rock-Paper-Scissors
function game() {
    let countWin = 0;
    let countLose = 0;
    //play 5 rounds
    for (let i = 0; i < 5; i++) {
        //get input from user
        let playerSelection = prompt("Choose: Rock, Paper, or Scissors");
        let output = playRound(playerSelection, computerPlay());
        //output outcome of round
        console.log(output);
        //keep count of how many times the player wins and loses
        if (output.includes("You Win!")) {
            countWin++;
        }
        else if (output.includes("You Lose")) {
            countLose++;
        }
    }

    //Output if the player wins or loses after 5 rounds
    if (countWin > countLose) {
        return "You are the winner!";
    }
    else if (countLose > countWin) {
        return "You are the Loser!";
    }
    else {
        return "You tied!"
    }
}

//Call game function
console.log(game());
