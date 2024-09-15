// Image slideshow JavaScript
const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function cycleImages() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Cycle every 5 seconds
setInterval(cycleImages, 5000);
