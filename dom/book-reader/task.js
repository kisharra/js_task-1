document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    const fontSizeLinks = document.querySelectorAll('.font-size');

    fontSizeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            fontSizeLinks.forEach(l => l.classList.remove('font-size_active'));

            this.classList.add('font-size_active');

            book.classList.remove('book_fs-big', 'book_fs-small');

            if (this.hasAttribute('data-size')) {
                book.classList.add(`book_fs-${this.getAttribute('data-size')}`);
            }
        });
    });
});