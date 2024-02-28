document.getElementById("IncrementBtn").addEventListener("click",incrementCounter);
document.getElementById("DecrementBtn").addEventListener("click",decrementCounter);
document.getElementById("resetBtn").addEventListener("click",resetCounter);

let counterDisplay = document.getElementById("counterDisplay");
let counterValue = 0;

function updateCounterDisplay(){
    counterDisplay.textContent = counterValue;
}

function incrementCounter(){
    counterValue++;
    updateCounterDisplay();
}

function decrementCounter(){
    counterValue--;
    updateCounterDisplay();
}

function resetCounter(){
    counterValue = 0;
    updateCounterDisplay();
}