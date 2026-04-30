let number2guess = Math.floor(Math.random()*100) + 1;
let attempts = 0;
let attempts2 = 0;


const ginput = document.getElementById("guessInput");

const gbutton = document.getElementById("guessBtn");

const ninput = document.getElementById("myName");

const nbutton = document.getElementById("GuessName")

const secrettext = document.getElementById("secretMessage");

let message = document.getElementById("result");

let attemptsText = document.getElementById("attempts");

let message2 = document.getElementById("result2");

let attemptsText2 = document.getElementById("attempts2");

secrettext.textContent = btoa("My Name Is Anderdingus");

gbutton.addEventListener("click", function () {
  let guess = Number(ginput.value);
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

nbutton.addEventListener("click", function () {
  let g2 = ninput.value
  if (g2 === "Anthony Glenn III") {
    message2.textContent = "Congrats!"
  } else if (!g2 || g2.trim().length === 0) {
    message2.textContent = "Please Put Text In Your Guess."
  } else {
    message2.textContent = "Try Again!"
  }
  
  attempts2++;
  attemptsText2.textContent = `Attempts: ${attempts2}`
});

