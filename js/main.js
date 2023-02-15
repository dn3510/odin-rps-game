// Rock, Paper, Scissors
let playerPoint = 0;
let computerPoint = 0;
let winner = '';

// Get DOM Elements
const rockImage = document.getElementById('rockImage');
const paperImage = document.getElementById('paperImage');
const scissorsImage = document.getElementById('scissorsImage');
const playerPointDisplay = document.getElementById('playerPoint');
const computerPointDisplay = document.getElementById('computerPoint');
const playerChoiceString = document.getElementById('playSelect');
const computerChoiceString = document.getElementById('compSelect');
const whoWinsString = document.getElementById('whoWins');
const rpsGame = document.querySelector('#rps-game');
const gameMessage = document.querySelector('.gameWinner');
const restartBtn = document.querySelector('#playAgain');
const exitBtn = document.querySelector('#playExit');

// Events
rockImage.addEventListener('click', () => handleClick('rock'));
paperImage.addEventListener('click', () => handleClick('paper'));
scissorsImage.addEventListener('click', () => handleClick('scissors'));
restartBtn.addEventListener('click', () => clickRestart('button'));
exitBtn.addEventListener('click', () => close_window('button'));

let playerChoice;
const handleClick = (playerChoice) => {
	if (endGame()) {
		if (computerPoint > playerPoint) {
			openMessage();
			gameMessage.textContent = 'Player Lost...';
		} else if (computerPoint < playerPoint) {
			openMessage();
			gameMessage.textContent = 'Player Wins...';
		}
		return;
	}
	const computerChoice = getComputerChoice();
	pointUpdate(playerChoice, computerChoice);
	determineWinner(playerChoice, computerChoice);
};

const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random() * 3);
	const rpsArray = ['rock', 'paper', 'scissors'];
	return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
	const winner =
		player === computer
			? 'Tie game!'
			: player === 'rock' && computer === 'paper'
			? `Player: ${player}\nComputer: ${computer}\nComputer wins!`
			: player === 'paper' && computer === 'scissors'
			? `Player: ${player}\nComputer: ${computer}\nComputer wins!`
			: player === 'scissors' && computer === 'rock'
			? `Player: ${player}\nComputer: ${computer}\nComputer wins!`
			: `Player: ${player}\nComputer: ${computer}\nPlayer wins!`;

	return winner;
};

const pointUpdate = (playerChoice, computerChoice) => {
	if (playerChoice === computerChoice) {
		whoWinsString.textContent = 'Tie Game!';
	} else if (
		(playerChoice === 'rock' && computerChoice === 'paper') ||
		(playerChoice === 'paper' && computerChoice === 'scissors') ||
		(playerChoice === 'scissors' && computerChoice === 'rock')
	) {
		computerPoint = computerPoint + 1;
		whoWinsString.textContent = 'Computer Wins!';
	} else if (
		(computerChoice === 'rock' && playerChoice === 'paper') ||
		(computerChoice === 'paper' && playerChoice === 'scissors') ||
		(computerChoice === 'scissors' && playerChoice === 'rock')
	) {
		playerPoint = playerPoint + 1;
		whoWinsString.textContent = 'Player Wins!';
	}
	playerPointDisplay.textContent = `${playerPoint}`;
	computerPointDisplay.textContent = `${computerPoint}`;
	playerChoiceString.textContent = `${playerChoice.toUpperCase()}`;
	computerChoiceString.textContent = `${computerChoice.toUpperCase()}`;

	return computerPoint, playerPoint;
};

const endGame = () => {
	return computerPoint === 5 || playerPoint === 5;
};

const openMessage = () => {
	rpsGame.style.display = 'block';
};

const clickRestart = () => {
	rpsGame.style.display = 'none';
	document.location.reload();
};

function close_window() {
	close();
}
