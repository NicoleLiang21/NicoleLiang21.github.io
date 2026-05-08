/**
 * Implement a scrolling gallery in each project
 */
document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
    const LEFT_ZONE = 80;
    const RIGHT_ZONE = 80;

    const leftBtn = wrapper.querySelector('.carousel-btn.left');
    const rightBtn = wrapper.querySelector('.carousel-btn.right');
    const carousel = wrapper.querySelector('.media-carousel');

    const items = Array.from(wrapper.querySelectorAll('.media-item'));
    let index = 0;

    function clamp(v) {
        return Math.min(1, Math.max(0, v));
    }

    function scrollToIndex(i) {
    index = Math.max(0, Math.min(i, items.length - 1));

    items[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
    });
}

    // Hover to reveal
    wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;

        const LEFT_ZONE = 120;
        const RIGHT_ZONE = 120;

        // base visibility (always show both when inside wrapper)
        const base = 0.5;

        // edge emphasis (independent)
        const leftBoost = Math.max(0, 1 - x / LEFT_ZONE);
        const rightBoost = Math.max(0, 1 - (rect.width - x) / RIGHT_ZONE);

        const leftAlpha = base + leftBoost;
        const rightAlpha = base + rightBoost;

        leftBtn.style.opacity = leftAlpha;
        rightBtn.style.opacity = rightAlpha;

        leftBtn.style.pointerEvents = leftAlpha > 0 ? 'auto' : 'none';
        rightBtn.style.pointerEvents = rightAlpha > 0 ? 'auto' : 'none';
    });

    wrapper.addEventListener('mouseleave', () => {
        leftBtn.style.opacity = 0;
        rightBtn.style.opacity = 0;
        leftBtn.style.pointerEvents = 'none';
        rightBtn.style.pointerEvents = 'none';
    });

    // Click to scroll
    leftBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToIndex(index - 1);
    });

    rightBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToIndex(index + 1);
    });
});
