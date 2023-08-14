const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let countdownInterval;
let remainingTime = 0;

function startCountdown(duration) {
  const startTime = Date.now();
  remainingTime = duration;

  updateDisplay();

  countdownInterval = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    remainingTime = Math.max(duration - Math.floor(elapsedTime / 1000), 0);
    updateDisplay();

    if (remainingTime === 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
}

function resetCountdown() {
  clearInterval(countdownInterval);
  remainingTime = 0;
  updateDisplay();
}

function updateDisplay() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  minutesDisplay.textContent = minutes.toString().padStart(2, '0');
  secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

startButton.addEventListener('click', () => startCountdown(300)); // Set initial duration in seconds
stopButton.addEventListener('click', stopCountdown);
resetButton.addEventListener('click', resetCountdown);
