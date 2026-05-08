/**
 * Implement a scrolling gallery in each project
 */
document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
    const carousel = wrapper.querySelector('.media-carousel');

    wrapper.querySelector('.carousel-btn.left').addEventListener('click', () => {
        carousel.scrollBy({ left: -400, behavior: 'smooth' });
    });

    wrapper.querySelector('.carousel-btn.right').addEventListener('click', () => {
        carousel.scrollBy({ left: 400, behavior: 'smooth' });
    });
});
