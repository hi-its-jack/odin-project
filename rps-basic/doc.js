function playGame() {

//START SCORES
    let playerScore = 0;
    let computerScore = 0;

//ROUND WINNER
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        function playRound(playerSelection, computerSelection) {
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();

            if (playerSelection === computerSelection) {
                return (`You tied! You both chose ${playerSelection}`)
            } else if (
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")
            ) {
                playerScore++;
                return `You picked ${playerSelection} and the computer picked ${computerSelection}. You win!`
            } else {
                computerScore++;
                return `You picked ${playerSelection} and the computer picked ${computerSelection}. You lose!`
            }
        }

    }

//FINAL WINNER
    let winner;
    if (playerScore > computerScore) {
        winner = "You win!";
    } else if (playerScore < computerScore) {
        winner = "You lose!";
    } else {
        winner = "It's a tie!";
    }

    console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
    console.log(winner);
}

//COMPUTER CHOICE
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

playGame();