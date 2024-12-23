

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');


slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => currentSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'block' : 'none';
    });
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

// Initial display
showSlide(slideIndex);

// Auto slide
setInterval(() => {
    moveSlide(1);
}, 2000);
