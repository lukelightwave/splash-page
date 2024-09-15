// Image slideshow for Splash Page (if applicable)
const splashImages = document.querySelectorAll('.slideshow img');
let splashCurrentIndex = 0;

function cycleSplashImages() {
    if (splashImages.length > 0) {
        splashImages[splashCurrentIndex].classList.remove('active');
        splashCurrentIndex = (splashCurrentIndex + 1) % splashImages.length;
        splashImages[splashCurrentIndex].classList.add('active');
    }
}

// Cycle every 5 seconds for Splash Page (if applicable)
setInterval(cycleSplashImages, 5000);


// Image slideshow for About Page (if applicable)
const aboutImages = document.querySelectorAll('.slideshow img');
let aboutCurrentIndex = 0;

function cycleAboutImages() {
    if (aboutImages.length > 0) {
        aboutImages[aboutCurrentIndex].classList.remove('active');
        aboutCurrentIndex = (aboutCurrentIndex + 1) % aboutImages.length;
        aboutImages[aboutCurrentIndex].classList.add('active');
    }
}

// Cycle every 5 seconds for About Page (if applicable)
setInterval(cycleAboutImages, 5000);


// Image slideshow for Contact Page (append this code)
const contactImages = document.querySelectorAll('.slideshow img');
let contactCurrentIndex = 0;

function cycleContactImages() {
    if (contactImages.length > 0) {
        contactImages[contactCurrentIndex].classList.remove('active');
        contactCurrentIndex = (contactCurrentIndex + 1) % contactImages.length;
        contactImages[contactCurrentIndex].classList.add('active');
    }
}

// Cycle every 5 seconds for Contact Page
setInterval(cycleContactImages, 5000);

// Image slideshow for Services Page
const servicesImages = document.querySelectorAll('.slideshow img');
let servicesCurrentIndex = 0;

function cycleServicesImages() {
    if (servicesImages.length > 0) {
        servicesImages[servicesCurrentIndex].classList.remove('active');
        servicesCurrentIndex = (servicesCurrentIndex + 1) % servicesImages.length;
        servicesImages[servicesCurrentIndex].classList.add('active');
    }
}

// Cycle every 5 seconds for the Services page
setInterval(cycleServicesImages, 5000);

// Hover text functionality
const servicesButtons = document.querySelectorAll('.services-btn');
const hoverText = document.getElementById('hover-text');

servicesButtons.forEach(button => {
    button.addEventListener('mouseover', function() {
        hoverText.textContent = this.dataset.text; // Display button-specific text in the center
        document.querySelector('.services-hover-text').style.visibility = 'visible';
    });

    button.addEventListener('mouseout', function() {
        document.querySelector('.services-hover-text').style.visibility = 'hidden';
    });
});

