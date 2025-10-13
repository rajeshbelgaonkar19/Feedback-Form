document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animation
    // This will animate the form sliding up and fading in
    gsap.to(".form-container", {
        duration: 1,      // Animation lasts 1 second
        opacity: 1,       // Fade in to full opacity
        y: 0,             // Move to its original position (from translateY(30px) in CSS)
        ease: "power3.out" // An easing function for a smooth effect
    });

    // You can also add more animations here for individual elements
    gsap.from(".form-group", {
        duration: 0.8,
        opacity: 0,
        x: -20, // Slide in from the left
        stagger: 0.2, // Animate each .form-group 0.2s after the previous one
        delay: 0.5 // Start this animation 0.5s after the page loads
    });

    // Simple Form Validation (Optional but recommended)
    const form = document.getElementById('feedbackForm');
    form.addEventListener('submit', function(event) {
        const rating = document.querySelector('input[name="rating"]:checked');
        if (!rating) {
            alert('Please select a star rating!');
            event.preventDefault(); // Stop the form from submitting
        }
    });
});