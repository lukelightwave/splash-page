// Identify the page by its title
const pageTitle = document.title;

// Declare an empty array for the slideshow images
let slideshowImages = [];

// Check the page title to determine which images to load
if (pageTitle.includes("Contact")) {
    // Images for Contact Page
    slideshowImages = [
        "contact-image/contact-image1.jpg",
        "contact-image/contact-image2.jpg",
        "contact-image/contact-image3.jpg",
        "contact-image/contact-image4.jpg",
        "contact-image/contact-image5.jpg"
    ];
} else if (pageTitle.includes("Services")) {
    // Images for Services Page
    slideshowImages = [
        "services-hover-images/service-image1.jpg",
        "services-hover-images/service-image2.jpg",
        "services-hover-images/service-image3.jpg",
        "services-hover-images/service-image4.jpg",
        "services-hover-images/service-image5.jpg"
    ];
} else if (pageTitle.includes("Work")) {
    // Images for Work Page
    slideshowImages = [
        "workbg-images/background1.jpg",
        "workbg-images/background2.jpg",
        "workbg-images/background3.jpg"
    ];
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

    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
}

// Start the slideshow if there are images to cycle through
if (slideshowImages.length > 0) {
    changeBackground();
    setInterval(changeBackground, 5000); // Change background every 5 seconds
}
// Hover text functionality for Services buttons
const servicesButtons = document.querySelectorAll('.services-btn');
const hoverText = document.getElementById('hover-text');
const hoverTextContainer = document.querySelector('.services-hover-text');

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


