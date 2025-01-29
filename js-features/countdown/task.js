let timerValue = parseInt(document.getElementById("timer")?.textContent) || 10;

const countdown = setInterval(() => {
    if (timerValue <= 0) {
        clearInterval(countdown); 
        alert("Вы победили в конкурсе!");
    } else {
        timerValue--;
        document.getElementById("timer").textContent = timerValue;
    }
}, 1000);