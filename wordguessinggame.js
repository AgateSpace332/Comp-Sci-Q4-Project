let word = "";
let attempts = 6;
let guessedLetters = [];
const words = ["happy", "paper", "letter", "water", "dress", "plant", "house", "music", "chair", "strong", "write", "small", "travel", "green"];

function startGame() {
    word = words[Math.floor(Math.random() * words.length)];
    /*https://www.w3schools.com/JS//js_random.asp, I used the word feature to pick a random word from the list and store it in the word variable.*/
    guessedLetters = [];
    attempts = 6;
    document.getElementById("attempts").textContent = attempts;
    displayWord();
    displayAlphabet();
}

function displayWord() {
    let wordDisplay = word.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
    /*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split, I used the word split feature to build a version of the word with guessed letters shown and the rest as underscores.*/
    document.getElementById('word').textContent = wordDisplay;
}

function displayAlphabet() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetDiv = document.getElementById('alphabet');
    alphabetDiv.innerHTML = '';
    for (let i = 0; i < alphabet.length; i++) {
        let letter = alphabet[i];
        let letterButton = document.createElement('span');
        letterButton.textContent = letter;
        letterButton.classList.add('letter');
        letterButton.onclick = () => guessLetter(letter, letterButton);
        /*https://www.w3schools.com/jsref/event_onclick.asp, I used this line so that when you click the button, the game runs a check with that letter and updates the button to show you already tried it.*/
        alphabetDiv.appendChild(letterButton);
    }
}

function guessLetter(letter, button) {
    button.classList.add('clicked');
    if (word.includes(letter)) {
        guessedLetters.push(letter);
    } else {
        attempts--;
        document.getElementById("attempts").textContent = attempts;
    }
    displayWord();

    if (attempts === 0) {
        /*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality, I used the strict equality feature to check if two values are exactly the same.*/
        alert("Game Over! The word was: " + word);
    } else if (!word.split('').some(letter => !guessedLetters.includes(letter))) {
        alert("You Win! The word was: " + word);
    }
}

startGame();
