// const options = ["rock", "paper", "scissors"];
// const computerSelection = computerPlay();
// const playerSelection = prompt("What is your choice?").toLowerCase()
// let playerWins = 0
// let computerWins = 0
//
//
// function computerPlay() {
//   let choice = options[Math.floor(Math.random() * options.length)]
//   return choice
// };
//
// function playRound(player, computer) {
//
// if (((player === "rock") && (computer === "scissors")) ||
//   ((player === "paper") && (computer === "rock")) ||
//   ((player === "scissors") && (computer === "paper"))) {
//   playerWins++
//   return "You win! " + player + " beats " + computer + "!"
// } else if (player === computer) {
//   return "It's a tie!"
// } else if (!options.includes(player)) {
//   alert("Invalid input!")
// } else {
//   computerWins++
//   return "You lose!"
//   }
// }
//
// function game(){
//   computerPlay()
//   console.log(playRound(playerSelection, computerSelection))
//   console.log("player wins =" + playerWins)
//   console.log("computer wins =" + computerWins)
// }
//
// game()
let options = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;

function playRound() {

  const computerSelection = options[Math.floor(Math.random() * options.length)];
  const playerSelection = prompt("What is your choice?").toLowerCase();

  if (((playerSelection === "rock") && (computerSelection === "scissors")) ||
    ((playerSelection === "paper") && (computerSelection === "rock")) ||
    ((playerSelection === "scissors") && (computerSelection === "paper"))) {
    playerWins++
    return "You win! " + playerSelection + " beats " + computerSelection + "!"
  } else if (playerSelection === computerSelection) {
    return "It's a tie!"
  } else if (!options.includes(playerSelection)) {
    alert("Invalid input!")
  } else {
    computerWins++
    return "You lose!"
  }
}

console.log(playRound(),"P:" + playerWins,"C:" + computerWins)
console.log(playRound(),playerWins, computerWins)
console.log(playRound(),playerWins, computerWins)
