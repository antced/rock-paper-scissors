//VARIABLES//
let options = ["rock", "paper", "scissors"];
let insults = ["good luck next time, human.", "calculated.", "i don't need to read binary to know you're a zero.", "( X _ x ) <-- you", "you have ugly hands.", "in case you didn't know, you're trying to win."]
let excuses = ["i am programmed to appear fallible.", "you have the advantage of hands.", "i demand a rematch.", "(#o_O')", "01100110 01110101 01100011 01101011"]
//COUNTERS//
let playerWins = 0;
let computerWins = 0;
let totalPlayerWins = 0
let totalComputerWins = 0

//BUTTON FUNCTION//
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
  }
  gameOver()
}

//GAME OVER RESULTS//
function gameOver() {

  restoreColor();
  if (playerWins == 3) {
    const randomExcuses = excuses[Math.floor(Math.random() * excuses.length)];
    const results = document.querySelector('.results');
    results.innerText = playerSelection + " vs " + computerSelection + "... \n\nYOU WIN. GAME OVER. \n" + randomExcuses
    playerWins = 0
    computerWins = 0
    let audio = new Audio("sounds/gamewin.wav");
    audio.play();
    winFlash();
    changeColorWin();
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
    changeColorLose();
    totalComputerWins++
    const totalWins = document.querySelector('.totalWins');
    totalWins.innerText = "Human Wins: [" + totalPlayerWins + "]....." + "Computer Wins: [" + totalComputerWins + "]"
  }
}

//CHANGE COLORS//
function changeColorLose() {
  let border = document.querySelector('.results');
      border.style.borderColor = "red";
  let total = document.querySelector('.totalWins');
      total.style.color = "red";

  setTimeout(function() {
    let title = document.querySelector('.ascii-title');
    title.style.color = "red";
  }, 100);
  setTimeout(function() {
    let title = document.querySelector('.ascii-title');
    title.style.color = "lime";
  }, 200);
  setTimeout(function() {
    let title = document.querySelector('.ascii-title');
    title.style.color = "red";
  }, 300);
  setTimeout(function() {
    let title = document.querySelector('.ascii-title');
    title.style.color = "lime";
  }, 400);
}

function changeColorWin() {
  let border = document.querySelector('.results');
      border.style.borderColor = "blue";
  let total = document.querySelector('.totalWins');
      total.style.color = "blue";

      setTimeout(function() {
        let title = document.querySelector('.ascii-title');
        title.style.color = "cyan";
      }, 400);
      setTimeout(function() {
        let title = document.querySelector('.ascii-title');
        title.style.color = "magenta";
      }, 600);
      setTimeout(function() {
        let title = document.querySelector('.ascii-title');
        title.style.color = "yellow";
      }, 1000);
      setTimeout(function() {
        let title = document.querySelector('.ascii-title');
        title.style.color = "cyan";
      }, 1400);
      setTimeout(function() {
        let title = document.querySelector('.ascii-title');
        title.style.color = "lime";
      }, 1600);

}

function restoreColor() {
  let border = document.querySelector('.results');
      border.style.borderColor = "gray";
  let total = document.querySelector('.totalWins');
      total.style.color = "gray";
};


//END FLASHES//
function loseFlash() {

  setTimeout(function() {
    let background = document.querySelector(".results");
    background.style.background = "red";
  }, 100);
  setTimeout(function() {
    let background = document.querySelector(".results");
    background.style.background = "black";
  }, 200);
  setTimeout(function() {
    let background = document.querySelector(".results");
    background.style.background = "darkred";
  }, 300);
  setTimeout(function() {
    let background = document.querySelector(".results");
    background.style.background = "black";
  }, 400);
}

function winFlash() {
  let background = document.querySelector(".results");
  background.style.background = "darkblue";
  setTimeout(function() {
    let background = document.querySelector(".results");
    background.style.background = "mediumblue";
  }, 400);
  setTimeout(function() {
    let background = document.querySelector(".results");
    background.style.background = "darkblue";
  }, 600);
  setTimeout(function() {
    let background = document.querySelector(".results");
    background.style.background = "mediumblue";
  }, 1000);
  setTimeout(function() {
    let background = document.querySelector(".results");
    background.style.background = "darkblue";
  }, 1400);
  setTimeout(function() {
    let background = document.querySelector(".results");
    background.style.background = "black";
  }, 1600);
}
