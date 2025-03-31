$(document).ready(function () {
    const flipbook = $('#flipbook');

    // Function to resize the flipbook
    const resizeFlipbook = () => {
        const viewportWidth = $(window).width(); // 80% of viewport width
        const viewportHeight = $(window).height(); // 80% of viewport height
        const size = Math.min(viewportWidth, viewportHeight); // Keep it square

        flipbook.turn('size', size, size); // Update dimensions
    };

    // Initialize the flipbook
    flipbook.turn({
        width: $(window).width(), // Start with 80% width
        height: $(window).height(), // Start with 80% height
        autoCenter: true,
        gradients: true,
        acceleration: true,
        pages: 19,
        display: 'single' // Single-page view
    });

    // Resize the flipbook dynamically
    $(window).resize(resizeFlipbook);

    // Perform initial resizing when the page loads
    resizeFlipbook();
});
