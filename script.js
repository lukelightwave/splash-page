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

// Image slideshow for Services Page (background image cycling)
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
const hoverTextContainer = document.querySelector('.services-hover-text'); // Get the container for hover text

servicesButtons.forEach(button => {
    // Mouseover event to show hover text
    button.addEventListener('mouseover', function() {
        hoverText.textContent = this.dataset.description; // Set the description text
        hoverTextContainer.classList.add('show-hover-text'); // Make the text visible
    });

    // Mouseout event to clear hover text when mouse leaves
    button.addEventListener('mouseout', function() {
        hoverTextContainer.classList.remove('show-hover-text'); // Hide the text again
        hoverText.textContent = ''; // Clear the text
    });
});

// JavaScript for cycling the background images from "workbg-images" folder
const slideshowImages = [
    "workbg-images/background1.jpg",
    "workbg-images/background2.jpg",
    "workbg-images/background3.jpg", // Add more images as needed
];

let currentImageIndex = 0;
const slideshowElement = document.querySelector('.slideshow');

function changeBackground() {
    // Remove the current active image
    const activeImage = document.querySelector('.slideshow img.active');
    if (activeImage) {
        activeImage.classList.remove('active');
    }

    // Create new image element
    const img = document.createElement('img');
    img.src = slideshowImages[currentImageIndex];
    img.classList.add('active');
    slideshowElement.appendChild(img);

    // Cycle through the images
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
}

// Initially load the first background image
changeBackground();

// Change the background image every 5 seconds
setInterval(changeBackground, 5000);
// JavaScript for cycling the background images for the Contact page
const contactSlideshowImages = [
    "contact-image/contact-image1.jpg",
    "contact-image/contact-image2.jpg",
    "contact-image/contact-image3.jpg",
    "contact-image/contact-image4.jpg",
    "contact-image/contact-image5.jpg",
];

let contactCurrentImageIndex = 0;
const contactSlideshowElement = document.querySelector('.slideshow');

function changeContactBackground() {
    // Remove the current active image
    const activeImage = document.querySelector('.slideshow img.active');
    if (activeImage) {
        activeImage.classList.remove('active');
    }

    // Create new image element
    const img = document.createElement('img');
    img.src = contactSlideshowImages[contactCurrentImageIndex];
    img.classList.add('active');
    contactSlideshowElement.appendChild(img);

    // Cycle through the images
    contactCurrentImageIndex = (contactCurrentImageIndex + 1) % contactSlideshowImages.length;
}

// Initially load the first background image
changeContactBackground();

// Change the background image every 5 seconds
setInterval(changeContactBackground, 5000);



