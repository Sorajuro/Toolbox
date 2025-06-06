function convert() {
  const from = document.getElementById("convert-from").value;
  const to = document.getElementById("convert-to").value;
  const value = parseFloat(document.getElementById("input-value").value);
  let resultText = "";

  if (isNaN(value)) {
    resultText = "Please enter a valid number.";
  } else {
    if (from === "kg" && to === "lb") {
      resultText = `${value} kg = ${(value * 2.20462).toFixed(2)} lb`;
    } else if (from === "m" && to === "ft") {
      resultText = `${value} m = ${(value * 3.28084).toFixed(2)} ft`;
    } else {
      resultText = "Conversion not supported.";
    }
  }

  document.getElementById("result").textContent = resultText;
}

function calculate() {
  const input = document.getElementById("calc-input").value;
  try {
    const result = Function('"use strict"; return (' + input + ')')();
    document.getElementById("calc-result").textContent = `Result: ${result}`;
  } catch {
    document.getElementById("calc-result").textContent = "Invalid expression.";
  }
}

let timerInterval;
let timeLeft = 0;

function startTimer() {
  const minutes = parseInt(document.getElementById("timer-mins").value);
  if (isNaN(minutes) || minutes <= 0) return;
  timeLeft = minutes * 60;
  updateTimer();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("⏰ Time's up!");
    }
    updateTimer();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateTimer() {
  const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const sec = String(timeLeft % 60).padStart(2, '0');
  document.getElementById("timer-display").textContent = `${min}:${sec}`;
}

function calculatePercentage() {
  const base = parseFloat(document.getElementById("base-value").value);
  const perc = parseFloat(document.getElementById("percentage").value);
  if (isNaN(base) || isNaN(perc)) {
    document.getElementById("percentage-result").textContent = "Invalid input.";
    return;
  }
  const result = (base * perc / 100).toFixed(2);
  document.getElementById("percentage-result").textContent = `${perc}% of ${base} = ${result}`;
}

function cleanText() {
  const text = document.getElementById("text-input").value;
  const cleaned = text.trim().replace(/\s+/g, " ");
  document.getElementById("text-result").textContent = cleaned;
}