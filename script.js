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
setInterval(cycleSplashImages, 5000); // Cycle every 5 seconds for Splash Page


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
setInterval(cycleAboutImages, 5000); // Cycle every 5 seconds for About Page


// Image slideshow for Contact Page - Only use the array-based logic
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
    const activeImage = document.querySelector('.slideshow img.active');
    if (activeImage) {
        activeImage.classList.remove('active');
    }

    const img = document.createElement('img');
    img.src = contactSlideshowImages[contactCurrentImageIndex];
    img.classList.add('active');
    contactSlideshowElement.appendChild(img);

    contactCurrentImageIndex = (contactCurrentImageIndex + 1) % contactSlideshowImages.length;
}
changeContactBackground();
setInterval(changeContactBackground, 5000); // Cycle every 5 seconds for Contact Page


// Cycle every 5 seconds for the Services page (Add actual code here if needed)
setInterval(cycleServicesImages, 5000); // This function is not defined in your snippet


// JavaScript for cycling the background images from "workbg-images" folder (Work Page)
const workSlideshowImages = [
    "workbg-images/background1.jpg",
    "workbg-images/background2.jpg",
    "workbg-images/background3.jpg", // Add more images as needed
];

let workCurrentImageIndex = 0;
const workSlideshowElement = document.querySelector('.slideshow');

function changeWorkBackground() {
    const activeImage = document.querySelector('.slideshow img.active');
    if (activeImage) {
        activeImage.classList.remove('active');
    }

    const img = document.createElement('img');
    img.src = workSlideshowImages[workCurrentImageIndex];
    img.classList.add('active');
    workSlideshowElement.appendChild(img);

    workCurrentImageIndex = (workCurrentImageIndex + 1) % workSlideshowImages.length;
}
changeWorkBackground();
setInterval(changeWorkBackground, 5000); // Cycle every 5 seconds for Work Page


// Hover text functionality for Services buttons
const servicesButtons = document.querySelectorAll('.services-btn');
const hoverText = document.getElementById('hover-text');
const hoverTextContainer = document.querySelector('.services-hover-text');

servicesButtons.forEach(button => {
    button.addEventListener('mouseover', function() {
        hoverText.textContent = this.dataset.description;
        hoverTextContainer.classList.add('show-hover-text');
    });

    button.addEventListener('mouseout', function() {
        hoverTextContainer.classList.remove('show-hover-text');
        hoverText.textContent = '';
    });
});
