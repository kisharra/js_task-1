document.addEventListener('DOMContentLoaded', () => {
    function initRotators() {
        const rotators = document.querySelectorAll('.rotator');
        rotators.forEach(rotator => startRotator(rotator));
    }

    function startRotator(rotator) {
        let cases = Array.from(rotator.querySelectorAll('.rotator__case'));
        let currentIndex = cases.findIndex(item => item.classList.contains('rotator__case_active'));

        if (currentIndex === -1) {
            currentIndex = 0;
            cases[currentIndex].classList.add('rotator__case_active');
        }

        function rotate() {
            cases[currentIndex].classList.remove('rotator__case_active');
            cases[currentIndex].style.color = '';

            currentIndex = (currentIndex + 1) % cases.length;
            cases[currentIndex].classList.add('rotator__case_active');

            const color = cases[currentIndex].getAttribute('data-color');
            if (color) {
                cases[currentIndex].style.color = color;
            }

            const speed = parseInt(cases[currentIndex].getAttribute('data-speed')) || 1000;

            setTimeout(() => {
                rotate();
            }, speed);
        }

        rotate();
    }

    initRotators();
});