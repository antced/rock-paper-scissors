//DECLARING VARIABLES//

let options = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.name;
    console.log(playRound());
  });
});
//PLAY ROUND FUNCTION//

function playRound() {

  const computerSelection = options[Math.floor(Math.random() * options.length)];

  if (((playerSelection === "rock") && (computerSelection === "scissors")) ||
    ((playerSelection === "paper") && (computerSelection === "rock")) ||
    ((playerSelection === "scissors") && (computerSelection === "paper"))) {
    playerWins++
    const results = document.querySelector('.results');
    results.innerText = playerSelection + " vs " + computerSelection + "... \n\nyou win! score: " + playerWins + " | " + computerWins
  } else if (playerSelection === computerSelection) {
    const results = document.querySelector('.results');
    results.innerText = playerSelection + " vs " + computerSelection + "... \n\nyou tie! score: " + playerWins + " | " + computerWins
  } else {
    computerWins++
    const results = document.querySelector('.results');
    results.innerText = playerSelection + " vs " + computerSelection + "... \n\nyou lose! score: " + playerWins + " | " + computerWins
  }

}

// function loopGame() {
//   for (let i = 0; i < 5; i++) {
//     console.log(playRound(), playerWins, computerWins)
//   }
//   if (playerWins > computerWins) {
//     console.log("You win!")
//   } else {
//     console.log("You lose!")
//   }
// }


//CALLS//

// console.log(playRound(), playerWins, computerWins)
// console.log(playRound(), playerWins, computerWins)
// console.log(playRound(), playerWins, computerWins)
// console.log(playRound(), playerWins, computerWins)
// console.log(playRound(), playerWins, computerWins)
