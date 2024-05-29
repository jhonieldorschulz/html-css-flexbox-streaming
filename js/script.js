document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    let offset = 0;

    setInterval(() => {
        offset = (offset + 100) % (100 * carouselContainer.children.length);
        carouselContainer.style.transform = `translateX(-${offset}%)`;
    }, 3000);
});