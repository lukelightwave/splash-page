const imageCount = 17; // Total number of images
const slideshowContainer = document.querySelector('.slideshow');

// Dynamically add images to the slideshow
for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement('img');
    img.src = `images/image${i}.jpg`; // Ensure images are in the 'images' folder
    if (i === 1) img.classList.add('active');
    slideshowContainer.appendChild(img);
}

let current = 0;
const images = document.querySelectorAll('.slideshow img');

setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % imageCount;
    images[current].classList.add('active');
}, 5000); // 5000 milliseconds = 5 seconds
