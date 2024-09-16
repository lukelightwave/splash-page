// Contact Page: Cycling Background Images
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
setInterval(changeContactBackground, 5000); // Change every 5 seconds
