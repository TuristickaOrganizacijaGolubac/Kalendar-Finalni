$(document).ready(function () {
    const flipbook = $('#flipbook');

    const resizeFlipbook = () => {
        const viewportWidth = $(window).width();
        const viewportHeight = $(window).height();
        const size = Math.min(viewportWidth, viewportHeight);
        flipbook.turn('size', size, size);
    };

    // Initialize the flipbook
    flipbook.turn({
        width: $(window).width(),
        height: $(window).height(),
        autoCenter: true,
        gradients: true,
        acceleration: true,
        pages: 19,
        display: 'single'
    });

    // Add keyboard navigation for flipping pages
    $(document).keydown(function (e) {
        if (e.key === 'ArrowLeft') {
            flipbook.turn('previous');
        } else if (e.key === 'ArrowRight') {
            flipbook.turn('next');
        }
    });

    // Dynamically resize the flipbook
    $(window).resize(resizeFlipbook);

    // Perform initial resizing
    resizeFlipbook();
});

