document.addEventListener('DOMContentLoaded', () => {
    // --- GSAP Animations ---

    // Animation for background overlay (subtle fade in)
    gsap.from(".background-overlay", {
        duration: 2,
        opacity: 0,
        ease: "power2.out"
    });

    // Form container entrance animation
    gsap.to(".form-container", {
        duration: 1.2,
        opacity: 1,
        y: 0,
        ease: "power3.out",
        delay: 0.2 // Start after background
    });

    // Branding elements animation
    gsap.from(".header-branding", {
        duration: 1,
        opacity: 0,
        y: -30,
        ease: "power2.out",
        delay: 0.5 // Start after form container begins
    });

    // Form title animation
    gsap.from(".form-title", {
        duration: 0.8,
        opacity: 0,
        y: -20,
        ease: "power2.out",
        delay: 0.7
    });

    // Staggered animation for form groups
    gsap.from(".form-group", {
        duration: 0.8,
        opacity: 0,
        x: -20, // Slide in from the left
        stagger: 0.15, // Animate each .form-group 0.15s after the previous one
        delay: 0.9 // Start after title
    });

    // --- Conditional Textarea Logic ---
    const irritationNoRadio = document.getElementById('irritationNo');
    const irritationYesRadio = document.getElementById('irritationYes');
    const irritationSpecifyTextarea = document.getElementById('irritationSpecify');

    function toggleIrritationTextarea() {
        if (irritationYesRadio.checked) {
            irritationSpecifyTextarea.classList.remove('hidden-textarea');
            irritationSpecifyTextarea.classList.add('visible-textarea');
            irritationSpecifyTextarea.setAttribute('required', 'true'); // Make it required if 'Yes'
        } else {
            irritationSpecifyTextarea.classList.remove('visible-textarea');
            irritationSpecifyTextarea.classList.add('hidden-textarea');
            irritationSpecifyTextarea.removeAttribute('required'); // Not required if 'No'
            irritationSpecifyTextarea.value = ''; // Clear content when hidden
        }
    }

    // Add event listeners to the radio buttons
    if (irritationNoRadio && irritationYesRadio) {
        irritationNoRadio.addEventListener('change', toggleIrritationTextarea);
        irritationYesRadio.addEventListener('change', toggleIrritationTextarea);
        
        // Initial check
        toggleIrritationTextarea();
    }
});