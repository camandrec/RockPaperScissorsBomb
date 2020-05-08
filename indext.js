const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
      }
  else {
    console.log('Error, please add a valid US english word');
  };
};

//console.log(getUserChoice('scisors'))

const getComputerChoice = () => {
  switch(Math.floor(Math.random() * (2-0+1)+0)) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
  default:
    return 'scissors';
};
};

//console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
  switch(userChoice === computerChoice) {
  case true:
    return 'The game is a tie.';
    break;
  default:
      if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
          return 'Computer won.'
        }
        else {
          return 'The user won.'
        }
      }
      else if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
          return 'Computer won.'
        }
        else {
          return 'The user won.'
        }
      }
      else if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
          return 'Computer won.'
        }
        else {
          return 'The user won.'
        }
      }
      else {
        return 'The user won.'
      }
};
};

let a;
const playGame = (a) => {
  userChoice = getUserChoice(a);
  computerChoice = getComputerChoice();
  console.log(`The user choosed ${userChoice}`);
  console.log(`The computer choosed ${computerChoice}`);
  return console.log(determineWinner(userChoice,computerChoice))
}

playGame('scissors')