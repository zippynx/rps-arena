const CHOICES = ['rock', 'paper', 'scissors'];
const BEATS = { rock: 'scissors', scissors: 'paper', paper: 'rock' };

let yourScore = 0;
let opponentScore = 0;
let busy = false;

const choicesEl = document.getElementById('choices');
const yourChoiceImg = document.getElementById('your-choice');
const opponentChoiceImg = document.getElementById('opponent-choice');
const opponentWrapper = document.getElementById('opponent-wrapper');
const resultMsg = document.getElementById('result-message');
const yourScoreEl = document.getElementById('your-score');
const opponentScoreEl = document.getElementById('opponent-score');
const resetBtn = document.getElementById('reset-btn');

CHOICES.forEach(choice => {
    const img = document.createElement('img');
    img.src = `${choice}.png`;
    img.alt = choice;
    img.title = choice.charAt(0).toUpperCase() + choice.slice(1);
    img.addEventListener('click', () => selectChoice(choice));
    choicesEl.appendChild(img);
});

function selectChoice(you) {
    if (busy) return;
    busy = true;
    choicesEl.classList.add('disabled');

    const opponent = CHOICES[Math.floor(Math.random() * CHOICES.length)];

    yourChoiceImg.src = `${you}.png`;
    opponentChoiceImg.removeAttribute('src');
    opponentWrapper.classList.add('thinking');
    
    resultMsg.textContent = 'Thinking...';
    resultMsg.className = '';

    setTimeout(() => {
        opponentWrapper.classList.remove('thinking');
        opponentChoiceImg.src = `${opponent}.png`;

        if (you === opponent) {
            resultMsg.textContent = 'Draw!';
            resultMsg.className = 'draw';
        } else if (BEATS[you] === opponent) {
            yourScore++;
            resultMsg.textContent = 'You win!';
            resultMsg.className = 'win';
        } else {
            opponentScore++;
            resultMsg.textContent = 'Opponent wins!';
            resultMsg.className = 'lose';
        }

        yourScoreEl.textContent = yourScore;
        opponentScoreEl.textContent = opponentScore;

        busy = false;
        choicesEl.classList.remove('disabled');
    }, 700);
}

function resetGame() {
    yourScore = 0;
    opponentScore = 0;
    yourScoreEl.textContent = '0';
    opponentScoreEl.textContent = '0';
    yourChoiceImg.removeAttribute('src');
    opponentChoiceImg.removeAttribute('src');
    opponentWrapper.classList.remove('thinking');
    resultMsg.textContent = 'Pick a choice below';
    resultMsg.className = '';
}

resetBtn.addEventListener('click', resetGame);