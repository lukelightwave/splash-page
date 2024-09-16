// Services Page: Cycling Background Images
const servicesSlideshowImages = [
    "services-hover-images/service-image1.jpg",
    "services-hover-images/service-image2.jpg",
    "services-hover-images/service-image3.jpg",
    "services-hover-images/service-image4.jpg",
    "services-hover-images/service-image5.jpg",
];

let servicesCurrentImageIndex = 0;
const servicesSlideshowElement = document.querySelector('.slideshow');

function changeServicesBackground() {
    const activeImage = document.querySelector('.slideshow img.active');
    if (activeImage) {
        activeImage.classList.remove('active');
    }

    const img = document.createElement('img');
    img.src = servicesSlideshowImages[servicesCurrentImageIndex];
    img.classList.add('active');
    servicesSlideshowElement.appendChild(img);

    servicesCurrentImageIndex = (servicesCurrentImageIndex + 1) % servicesSlideshowImages.length;
}

changeServicesBackground();
setInterval(changeServicesBackground, 5000); // Change every 5 seconds
