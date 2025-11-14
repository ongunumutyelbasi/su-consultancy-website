document.addEventListener('DOMContentLoaded', () => {
    const backToTopLink = document.getElementById('back-to-top-link');
    
    // Check if the link element exists before adding the listener
    if (backToTopLink) {
        backToTopLink.addEventListener('click', (event) => {
            // Prevent the default anchor link behavior (instant jump)
            event.preventDefault(); 
            
            // Scroll the window smoothly to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});