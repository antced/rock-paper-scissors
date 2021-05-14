//DECLARING VARIABLES//

let options = ["rock", "paper", "scissors"];
let insults = ["good luck next time, human", "calculated.", "i don't need to read binary to know you're a zero.", "( X _ x ) <-- you", "you have ugly hands.", "in case you didn't know, the goal of this game is to win."]
let excuses = ["i am programmed to appear fallible.", "you have the advantage of hands.", "i demand a rematch.", "(#o_O')", "01100110 01110101 01100011 01101011"]
let playerWins = 0;
let computerWins = 0;


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.name;
    computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log(playRound());
    let audio = new Audio("sounds/click.wav");
    audio.play();
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
    const randomExcuses = excuses[Math.floor(Math.random() * excuses.length)];
    const results = document.querySelector('.results');
    results.innerText = playerSelection + " vs " + computerSelection + "... \n\nYOU WIN. GAME OVER \n" + randomExcuses
    playerWins = 0
    computerWins = 0
    let audio = new Audio("sounds/gamewin.wav");
    audio.play();
  } else if (computerWins == 3) {
    const randomInsults = insults[Math.floor(Math.random() * insults.length)];
    const results = document.querySelector('.results');
    results.innerText = playerSelection + " vs " + computerSelection + "... \n\nYOU LOSE. GAME OVER \n" + randomInsults
    playerWins = 0
    computerWins = 0
    let audio = new Audio("sounds/gamelose.wav");
    audio.play();
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
