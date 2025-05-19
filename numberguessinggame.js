var answer = Math.floor(Math.random() * 1000) + 1;
var attempts = 0;

function guessNumber() {
  var guess = parseInt(document.getElementById("guess").value);
  attempts++;

  if (isNaN(guess)) {
    document.getElementById("msg").textContent = "Please enter a number!";
  } else if (guess < answer) {
    document.getElementById("msg").textContent = "Higher!";
  } else if (guess > answer) {
    document.getElementById("msg").textContent = "Lower!";
  } else {
    document.getElementById("msg").textContent = "Correct!";
    alert("You win! The number was " + answer);
    document.getElementById("resetBtn").style.display = "inline";
    <!--https://www.geeksforgeeks.org/html-dom-style-display-property/, I used this feature to make the reset button appear on the page.-->
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
