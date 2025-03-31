$(document).ready(function () {
    const flipbook = $('#flipbook');

    // Function to resize the flipbook
    const resizeFlipbook = () => {
        const viewportWidth = $(window).width(); // 100% width
        const viewportHeight = $(window).height(); // 100% height
        const size = Math.min(viewportWidth, viewportHeight); // Keep it square

        flipbook.turn('size', size, size); // Update dimensions
    };

    // Initialize the flipbook
    flipbook.turn({
        width: $(window).width(),
        height: $(window).height(),
        autoCenter: true,
        gradients: true,
        acceleration: true,
        pages: 19,
        display: 'single' // Single-page view
    });

    // Add event listener for keyboard navigation
    $(document).keydown(function (e) {
        if (e.key === "ArrowLeft") {
            flipbook.turn("previous"); // Turn to the previous page
        } else if (e.key === "ArrowRight") {
            flipbook.turn("next"); // Turn to the next page
        }
    });

    // Resize the flipbook dynamically
    $(window).resize(resizeFlipbook);

    // Perform initial resizing
    resizeFlipbook();
});
