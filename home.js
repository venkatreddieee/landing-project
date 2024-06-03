document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('form-body').style.display = 'flex';
    document.getElementById('overlay-form').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('form-body').style.display = 'none';
    document.getElementById('overlay-form').style.display = 'none';
});


let currentIndex = 0;

function scrollGallery(index) {
    const gallery = document.querySelector('.image-gallery');
    const cardWidth = document.querySelector('.image-card').offsetWidth;
    currentIndex = index;
    gallery.style.transform = `translateX(${-currentIndex * (cardWidth * 3 + cardWidth / 2)}px)`;

    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Initial gallery setup
scrollGallery(0);

document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");
    const displayedImage = document.getElementById("displayedImage");

    projectCards.forEach(card => {
        card.addEventListener("click", function() {
            // Remove the active class from all cards
            projectCards.forEach(card => card.classList.remove("active"));

            // Add the active class to the clicked card
            card.classList.add("active");

            // Update the displayed image source
            const newImageSrc = card.getAttribute("data-image-src");
            displayedImage.src = newImageSrc;
        });
    });
});


