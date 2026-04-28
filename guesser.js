let number2guess = Math.floor(Math.random()*100) + 1;
let attempts = 0;

const input = document.getElementById("guessInput");
const button = document.getElementById("guessBtn");
const secrettext = document.getElementById("secretMessage");
let message = document.getElementById("result");
const attemptsText = document.getElementById("attempts");
secrettext.textContent = btoa("My Name Is Anderdingus")
button.addEventListener("click", function () {
  let guess = Number(input.value);
  attempts++;
  
  if (guess === number2guess) {
    message.textContent = "Nice! your answer was right!!!";
  } else if (guess > number2guess) {
    message.textContent = "Too high!";
  } else if (guess < number2guess) {
    message.textContent = "Too low!";
  }
  
  attemptsText.textContent = `Attempts: ${attempts}`;
});
