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

// Hover text functionality for Services buttons
const servicesButtons = document.querySelectorAll('.services-btn');
const hoverText = document.getElementById('hover-text');
const slideshowContainer = document.querySelector('.slideshow');

// Function to clear the "active" state on all buttons
function clearActiveState() {
    servicesButtons.forEach(button => {
        button.classList.remove('active');
    });
}

servicesButtons.forEach(button => {
    // Mouseover event to show hover text and background
    button.addEventListener('mouseover', function() {
        if (!this.classList.contains('active')) { // Only show hover effect if not active
            hoverText.textContent = this.dataset.description; // Show button description
            slideshowContainer.style.backgroundImage = `url(${this.dataset.bg})`; // Change the background image
            slideshowContainer.style.backgroundSize = 'cover';
            slideshowContainer.style.backgroundPosition = 'center';
            slideshowContainer.style.transition = 'background-image 0.5s ease-in-out'; // Smooth transition
        }
    });

    // Click event to make button stay white and display persistent text and background
    button.addEventListener('click', function() {
        clearActiveState(); // Clear previous active buttons
        this.classList.add('active'); // Make clicked button active
        hoverText.textContent = this.dataset.description; // Show persistent text for this button
        slideshowContainer.style.backgroundImage = `url(${this.dataset.bg})`; // Set background to match button
    });

    // Mouseout event to clear hover effect but not for active buttons
    button.addEventListener('mouseout', function() {
        if (!this.classList.contains('active')) { // Only reset hover effect if not active
            slideshowContainer.style.backgroundImage = ''; // Clear background image
        }
    });
});



