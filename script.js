// script.js

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function changeSlide(direction) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

// Filter functionality
function filterItems(category) {
    const items = document.querySelectorAll('.products .product');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});