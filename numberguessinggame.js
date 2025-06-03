var answer = Math.floor(Math.random() * 1000) + 1;
var attempts = 0;

function guessNumber() {
  var guess = parseInt(document.getElementById("guess").value);
  /*https://www.w3schools.com/jsref/jsref_parseint.asp, I used this feature to convert a string into an integer.*/
  attempts++;

  if (isNaN(guess)) {
    /*https://www.w3schools.com/jsref/jsref_isnan_number.asp, I used this feature to check if the input is a value or not.*/
    document.getElementById("msg").textContent = "Please enter a number!";
  } else if (guess < answer) {
    document.getElementById("msg").textContent = "Higher!";
  } else if (guess > answer) {
    document.getElementById("msg").textContent = "Lower!";
  } else {
    document.getElementById("msg").textContent = "Correct!";
    alert("You win! The number was " + answer);
    document.getElementById("resetBtn").style.display = "inline";
    /*https://www.geeksforgeeks.org/html-dom-style-display-property/, I used this feature to make the reset button appear on the page.*/
  }

  document.getElementById("attempts").textContent = "Attempts: " + attempts;
  document.getElementById("guess").value = "";
}

function resetGame() {
  answer = Math.floor(Math.random() * 1000) + 1;
  attempts = 0;
  document.getElementById("attempts").textContent = "Attempts: 0";
  document.getElementById("msg").textContent = "";
  document.getElementById("guess").value = "";
  document.getElementById("resetBtn").style.display = "none";
}

document.getElementById("btn").onclick = guessNumber;
document.getElementById("resetBtn").onclick = resetGame;

document.getElementById("resetBtn").style.display = "none";
