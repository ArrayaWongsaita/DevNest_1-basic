const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

let count = 0;

increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

function updateDisplay() {
  countDisplay.textContent = count;
  countDisplay.style.color =
    count > 0 ? '#22c55e' : count < 0 ? '#ef4444' : '#f8fafc';
}


