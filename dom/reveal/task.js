document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = function () {
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('reveal_active');
            } else {
                reveals[i].classList.remove('reveal_active');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', revealOnScroll);

    revealOnScroll();
});