document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');

    if (button) {
        button.addEventListener('click', () => {
            window.location.href = 'lessons.html';
        });
    }
});