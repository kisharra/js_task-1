document.addEventListener("DOMContentLoaded", () => {
    const cookie = document.getElementById("cookie");
    const counter = document.getElementById("clicker__counter");
    let clickCount = 0;
    let isBig = false;

    cookie.addEventListener("click", () => {
        clickCount++;
        counter.textContent = clickCount;
        
        // Изменение размера печеньки
        if (isBig) {
            cookie.style.width = "200px";
            cookie.style.height = "200px";
        } else {
            cookie.style.width = "220px";
            cookie.style.height = "220px";
        }
        isBig = !isBig;
    });
});
