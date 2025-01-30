document.addEventListener("DOMContentLoaded", () => {
    let deadCounter = document.getElementById("dead");
    let lostCounter = document.getElementById("lost");
    let dead = 0;
    let lost = 0;

    const getHole = index => document.getElementById(`hole${index}`);

    for (let i = 1; i <= 9; i++) {
        let hole = getHole(i);
        hole.addEventListener("click", () => {
            if (hole.classList.contains("hole_has-mole")) {
                dead++;
                deadCounter.textContent = dead;
            } else {
                lost++;
                lostCounter.textContent = lost;
            }

            if (dead === 10) {
                alert("Поздравляем! Вы победили!");
                resetGame();
            } else if (lost === 5) {
                alert("Игра окончена! Вы проиграли.");
                resetGame();
            }
        });
    }

    function resetGame() {
        dead = 0;
        lost = 0;
        deadCounter.textContent = dead;
        lostCounter.textContent = lost;
    }
});