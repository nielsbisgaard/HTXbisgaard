// Få reklame1 til at følge musen
/*const reklame1 = document.getElementById('reklame1');
if (reklame1) {
    document.addEventListener('mousemove', function(e) {
        reklame1.style.left = (e.clientX + 20) + 'px';
        reklame1.style.top = (e.clientY + 20) + 'px';
    });
}*/

// Galleri slideshow/carousel
const slides = document.querySelectorAll('.gallery-slide');
let currentSlide = 0;
let prevSlide = null;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev');
        if (i === index) {
            slide.classList.add('active');
        } else if (i === prevSlide) {
            slide.classList.add('prev');
        }
    });
}

function nextSlide() {
    prevSlide = currentSlide;
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Skift billede hver 3. sekund
}
