// Function to get the computer's choice
function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
  
  // Function to determine the winner
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie, great minds think alike!";
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
      return "I win!";
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      return "I win!";
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      return "I win!";
    } else {
      return "You win! Best two out of three?";
    }
  }
  
  // Function to play the game
  function playGame(userChoice) {
    var computerChoice = getComputerChoice();
    var result = determineWinner(userChoice, computerChoice);
    document.getElementById('result').innerHTML = result;
  }
  
  // Event listeners for the user's choice
  document.getElementById('rock').addEventListener('click', function() {
    playGame('rock');
  });
  
  document.getElementById('paper').addEventListener('click', function() {
    playGame('paper');
  });
  
  document.getElementById('scissors').addEventListener('click', function() {
    playGame('scissors');
  });
