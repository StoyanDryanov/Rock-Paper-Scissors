const choices = ['Rock', 'Paper', 'Scissors'];
var playerWins = 0;
var computerWins = 0;

let getComputerChoice = () => {
    return choices[Math.floor(Math.random() * 3)]
};

let playRound = () => {
    let computer = getComputerChoice().toLowerCase();
    let player = prompt('Enter rock paper or scissors.').toLowerCase();

    if (player === computer) {
        console.log(`Tie! You both used ${computerSelection}!`)
        playerWins++;
        computerWins++;
    } else if (player === 'rock' && computer === 'paper') {
        console.log('You lose! Paper beats Rock!');
        computerWins++;
    } else if (player === 'rock' && computer === 'scissors') {
        console.log('You win! Rock beats Scissors!');
        playerWins++;
    } else if (player === 'paper' && computer === 'rock') {
        console.log('You win! Paper beats Rock!');
        playerWins++;
    } else if (player === 'paper' && computer === 'scissors') {
        console.log('You lose! Scissors beat Paper!');
        computerWins++;
    } else if (player === 'scissors' && computer === 'rock') {
        console.log('You lose! Rock beats Scissors!');
        computerWins++;
    } else if (player === 'scissors' && computer === 'paper') {
        console.log('You win! Scissors beat Paper!');
        playerWins++;
    }
}

let game = () => {
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (computerWins > playerWins) {
        console.log('You lost the game!')
    } else {
        console.log('You won the game!')
    }
}
