//DECLARING VARIABLES//

let options = ["rock", "paper", "scissors"];
let insults = ["good luck next time, human.", "calculated.", "i don't need to read binary to know you're a zero.", "( X _ x ) <-- you", "you have ugly hands.", "in case you didn't know, you're trying to win."]
let excuses = ["i am programmed to appear fallible.", "you have the advantage of hands.", "i demand a rematch.", "(#o_O')", "01100110 01110101 01100011 01101011"]
let playerWins = 0;
let computerWins = 0;
let totalPlayerWins = 0
let totalComputerWins = 0


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
      let audio = new Audio("sounds/win.wav");
      audio.play();
    } else if (playerSelection === computerSelection) {
      const results = document.querySelector('.results');
      results.innerText = playerSelection + " vs " + computerSelection + "... \n\nit's a tie. score: " + playerWins + " | " + computerWins
      let audio = new Audio("sounds/tie.wav");
      audio.play();
    } else {
      computerWins++
      const results = document.querySelector('.results');
      results.innerText = playerSelection + " vs " + computerSelection + "... \n\ncomputer wins. score: " + playerWins + " | " + computerWins
      let audio = new Audio("sounds/click.wav");
      audio.play();
      // backFlash()
    }
    gameOver()
}

function gameOver(){


  if (playerWins == 3) {
    const randomExcuses = excuses[Math.floor(Math.random() * excuses.length)];
    const results = document.querySelector('.results');
    results.innerText = playerSelection + " vs " + computerSelection + "... \n\nYOU WIN. GAME OVER. \n" + randomExcuses
    playerWins = 0
    computerWins = 0
    let audio = new Audio("sounds/gamewin.wav");
    audio.play();
    winFlash();
    totalPlayerWins++
    const totalWins = document.querySelector('.totalWins');
    totalWins.innerText = "Human Wins: [" + totalPlayerWins + "]....." + "Computer Wins: [" + totalComputerWins + "]"
  } else if (computerWins == 3) {
    const randomInsults = insults[Math.floor(Math.random() * insults.length)];
    const results = document.querySelector('.results');
    results.innerText = playerSelection + " vs " + computerSelection + "... \n\nYOU LOSE. GAME OVER. \n" + randomInsults
    playerWins = 0
    computerWins = 0
    let audio = new Audio("sounds/gamelose.wav");
    audio.play();
    loseFlash();
    totalComputerWins++
    const totalWins = document.querySelector('.totalWins');
    totalWins.innerText = "Human Wins: [" + totalPlayerWins + "]....." + "Computer Wins: [" + totalComputerWins + "]"
  }
}

function backFlash() {
  let background = document.querySelector("html");
  background.style.background = "darkred";
  setTimeout(function () {
    background.style.background = "black";
  }, 50);
}

function loseFlash() {
  setTimeout(function () {
    let background = document.querySelector("html");
    background.style.background = "red";
  }, 100);
  setTimeout(function () {
    let background = document.querySelector("html");
    background.style.background = "black";
  }, 200);
  setTimeout(function () {
    let background = document.querySelector("html");
    background.style.background = "darkred";
  }, 300);
  setTimeout(function () {
    let background = document.querySelector("html");
    background.style.background = "black";
  }, 400);
}

function winFlash() {
    let background = document.querySelector("html");
    background.style.background = "darkblue";
  setTimeout(function () {
    let background = document.querySelector("html");
    background.style.background = "mediumblue";
  }, 500);
  setTimeout(function () {
    let background = document.querySelector("html");
    background.style.background = "darkblue";
  }, 1000);
  setTimeout(function () {
    let background = document.querySelector("html");
    background.style.background = "black";
  }, 1500);
}
