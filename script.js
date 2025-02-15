let index = 0;
const carousel = document.querySelector('.carousel');
const totalMovies = document.querySelectorAll('.movies').length;
const visibleMovies = 4;
const movieWidth = 100 / visibleMovies;

function moveSlide(step) {
    const maxIndex = totalMovies - visibleMovies;
    index += step;
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;
    carousel.style.transform = `translateX(-${index * movieWidth}%)`;
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}