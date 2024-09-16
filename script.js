// Identify the page by its title
const pageTitle = document.title;

// Declare an empty array for the slideshow images
let slideshowImages = [];

// Check the page title to determine which images to load
if (pageTitle.includes("Work")) {
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
