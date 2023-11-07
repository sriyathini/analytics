// Function to check if the button is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const button = document.querySelector('.scroll-fade');
    if (isElementInViewport(button)) {
        button.classList.add('fade-in');
    }
}

// Add a scroll event listener
window.addEventListener('scroll', handleScroll);
