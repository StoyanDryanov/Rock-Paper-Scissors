const choices = ['Rock', 'Paper', 'Scissors'];
var playerWins = 0;
var computerWins = 0;

let getComputerChoice = () => {
    return choices[Math.floor(Math.random() * 3)]
};

let playRound = (playerChoice) => {
    let computer = getComputerChoice();
    let player = playerChoice;

    if (player === computer) {
        return `Tie! You both used ${computer}!`;
    } else if (player === 'Rock' && computer === 'Paper') {
        computerWins++;
        return 'You lose! Paper beats Rock!';
    } else if (player === 'Rock' && computer === 'Scissors') {
        playerWins++;
        return 'You win! Rock beats Scissors!';
    } else if (player === 'Paper' && computer === 'Rock') {
        playerWins++;
        return 'You win! Paper beats Rock!';
    } else if (player === 'Paper' && computer === 'Scissors') {
        computerWins++;
        return 'You lose! Scissors beat Paper!';
    } else if (player === 'Scissors' && computer === 'Rock') {
        computerWins++;
        return 'You lose! Rock beats Scissors!';
    } else if (player === 'Scissors' && computer === 'Paper') {
        playerWins++;
        return 'You win! Scissors beat Paper!';
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(option => {
    option.addEventListener('click', (e) => {
        const scoreMessage = document.querySelector('.score-message');
        const score = document.querySelector('.score');
        const winner = document.querySelector('.winner');
        
        winner.textContent = '';
        scoreMessage.textContent = playRound(option.classList.value);
        score.textContent = `${playerWins} - ${computerWins}`;
        if (playerWins === 5 && computerWins < 5) {
            winner.textContent = 'You Win!';
            playerWins = 0;
            computerWins = 0;
        } else if (computerWins === 5 && playerWins < 5) {
            winner.textContent = 'You Lose!';
            playerWins = 0;
            computerWins = 0;
        }
    })
})