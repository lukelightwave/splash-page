// Identify the page by its URL or title
const pageTitle = document.title;
const pageUrl = window.location.pathname;

// Declare an empty array for the slideshow images
let slideshowImages = [];

// Determine which page we are on and load the correct images for the background
if (pageUrl.includes("index.html") || pageTitle.includes("Lightwave Post")) {  // Detect the Splash Page based on URL or title
    slideshowImages = [
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg",
        "images/image4.jpg",
        "images/image5.jpg",
        "images/image6.jpg",
        "images/image7.jpg",
        "images/image8.jpg",
        "images/image9.jpg",
        "images/image10.jpg",
        "images/image11.jpg",
        "images/image12.jpg",
        "images/image13.jpg",
        "images/image14.jpg",
        "images/image15.jpg",
        "images/image16.jpg"
    ];
    console.log("Splash page detected, cycling images from 'images/'");
} else if (pageTitle.includes("Work")) {
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
