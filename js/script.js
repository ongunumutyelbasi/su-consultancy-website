document.addEventListener('DOMContentLoaded', () => {
    // 1. Get DOM elements
    const sliderTrack = document.querySelector('.slider-track');
    const projectItems = document.querySelectorAll('.project-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Initialize the current project index
    let currentIndex = 0;
    const totalItems = projectItems.length;

    // 2. Define the function to update the slider position
    function updateSlider() {
        // Calculate the distance to move (Current Index * 100% of item width)
        const offset = -currentIndex * 100;
        // Apply the transform to the track element
        sliderTrack.style.transform = `translateX(${offset}%)`;
    }

    // 3. Add event listeners for the navigation buttons
    
    // NEXT button logic
    nextBtn.addEventListener('click', () => {
        // Increment the index, but wrap around to 0 if it goes past the last item
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider();
    });

    // PREV button logic
    prevBtn.addEventListener('click', () => {
        // Decrement the index, but wrap around to the last item if it goes below 0
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateSlider();
    });

    // OPTIONAL: Add a simple Back-to-Top button functionality (like on the real site)
    // You'd need an actual button in your HTML for this, but here is the JS:
    
    // For a real-world scenario, you would target an element in your HTML.
    // For simplicity, let's just log a message when the user clicks 'Contact Us'
    const contactLink = document.querySelector('nav ul li:last-child a');
    contactLink.addEventListener('click', (e) => {
        e.preventDefault(); // Stop the link from navigating away
        console.log("Contact form would open or page would scroll to contact section here!");
    });
});