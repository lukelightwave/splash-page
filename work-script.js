// Work Page: Cycling Background Images
const workSlideshowImages = [
    "workbg-images/background1.jpg",
    "workbg-images/background2.jpg",
    "workbg-images/background3.jpg",
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
setInterval(changeWorkBackground, 5000); // Change every 5 seconds
