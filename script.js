function play(userChoice) {
  var choices = ["rock", "paper", "scissors"];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  var result = getGameResult(userChoice, computerChoice);

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = `You chose ${userChoice}. The computer chose ${computerChoice}. ${result}`;
}

function getGameResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}
