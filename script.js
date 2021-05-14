//DECLARING VARIABLES//

let options = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.name;
    computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log(playRound());
  });
});
//PLAY ROUND FUNCTION//


function playRound() {
    if (((playerSelection === "rock") && (computerSelection === "scissors")) ||
      ((playerSelection === "paper") && (computerSelection === "rock")) ||
      ((playerSelection === "scissors") && (computerSelection === "paper"))) {
      playerWins++
      const results = document.querySelector('.results');
      results.innerText = playerSelection + " vs " + computerSelection + "... \n\nhuman wins. score: " + playerWins + " | " + computerWins
    } else if (playerSelection === computerSelection) {
      const results = document.querySelector('.results');
      results.innerText = playerSelection + " vs " + computerSelection + "... \n\nit's a tie. score: " + playerWins + " | " + computerWins
    } else {
      computerWins++
      const results = document.querySelector('.results');
      results.innerText = playerSelection + " vs " + computerSelection + "... \n\ncomputer wins. score: " + playerWins + " | " + computerWins
    }
    gameOver()
}

function gameOver(){
  if (playerWins == 3) {
    const results = document.querySelector('.results');
    results.innerText = playerSelection + " vs " + computerSelection + "... \n\nYOU WIN. GAME OVER \ni am programmed to appear fallible."
    playerWins = 0
    computerWins = 0
  } else if (computerWins == 3) {
    const results = document.querySelector('.results');
    results.innerText = playerSelection + " vs " + computerSelection + "... \n\nYOU LOSE. GAME OVER \ngood luck next time, human."
    playerWins = 0
    computerWins = 0
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
