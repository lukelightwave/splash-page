// Identify the page by its title
const pageTitle = document.title;

// Declare an empty array for the slideshow images
let slideshowImages = [];

// Determine which page we are on and load the correct images for the background
if (pageTitle.includes("Work")) {
    slideshowImages = [
        "workbg-images/background1.jpg",
        "workbg-images/background2.jpg",
        "workbg-images/background3.jpg"
    ];
    console.log("Work page detected, cycling workbg-images");
} else if (pageTitle.includes("Services")) {
    slideshowImages = [
        "services-hover-images/service-image1.jpg",
        "services-hover-images/service-image2.jpg",
        "services-hover-images/service-image3.jpg",
        "services-hover-images/service-image4.jpg",
        "services-hover-images/service-image5.jpg"
    ];
    console.log("Services page detected, cycling services-hover-images");
} else if (pageTitle.includes("Contact")) {
    slideshowImages = [
        "contact-image/contact-image1.jpg",
        "contact-image/contact-image2.jpg",
        "contact-image/contact-image3.jpg",
        "contact-image/contact-image4.jpg",
        "contact-image/contact-image5.jpg"
    ];
    console.log("Contact page detected, cycling contact-image");
} else if (pageTitle.includes("Splash")) {  // Ensure splash page is detected
    slideshowImages = [
        "splash-images/image1.jpg",  // Replace with actual image paths
        "splash-images/image2.jpg",
        "splash-images/image3.jpg"
    ];
    console.log("Splash page detected, cycling splash-images");
}

// Slideshow logic
let currentImageIndex = 0;
const slideshowElement = document.querySelector('.slideshow');

function changeBackground() {
    const activeImage = document.querySelector('.slideshow img.active');
    if (activeImage) {
        activeImage.classList.remove('active');
    }

    const img = document.createElement('img');
    img.src = slideshowImages[currentImageIndex];
    img.classList.add('active');
    slideshowElement.appendChild(img);

    console.log("Displaying image: ", img.src);  // Debugging line

    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
}

// Start the slideshow if there are images to cycle through
if (slideshowImages.length > 0) {
    changeBackground();
    setInterval(changeBackground, 5000); // Change background every 5 seconds
} else {
    console.log("No images found for slideshow");
}

// Hover text functionality for Services buttons
const servicesButtons = document.querySelectorAll('.services-btn');
const hoverText = document.getElementById('hover-text');
const hoverTextContainer = document.querySelector('.services-hover-text');

servicesButtons.forEach(button => {
    button.addEventListener('mouseover', function() {
        hoverText.textContent = this.dataset.description; // Set the description text
        hoverTextContainer.classList.add('show-hover-text'); // Make the text visible
    });

    button.addEventListener('mouseout', function() {
        hoverTextContainer.classList.remove('show-hover-text'); // Hide the text again
        hoverText.textContent = ''; // Clear the text
    });
});
