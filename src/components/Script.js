// script.js
const button = document.getElementById('fadeButton');

function handleScroll() {
    const scrollPosition = window.scrollY;
    const buttonPosition = button.offsetTop;

    if (scrollPosition > buttonPosition - window.innerHeight / 2) {
        button.classList.add('fade-in');
    }
}

window.addEventListener('scroll', handleScroll);


export default handleScroll;