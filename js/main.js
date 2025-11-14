document.addEventListener('DOMContentLoaded', function() {
    // --- 1. Header Scroll Logic ---
    const header = document.getElementById('mainHeader');
    const scrollThreshold = 50; 
    
    // --- 2. Parallax Target ---
    const parallaxTarget = document.querySelector('.video-background-wrap video'); 
    
    // We don't need initialHeroTop for the standard parallax effect.
    
    // Use a variable to track the animation frame
    let rAF;

    function handleScroll() {
        // Cancel any pending frame to ensure only the latest scroll position is used
        if (rAF) {
            cancelAnimationFrame(rAF);
        }

        // Request a new frame to run the position update only when the browser is ready
        rAF = requestAnimationFrame(updateParallax);
    }

    function updateParallax() {
        const scrollPos = window.scrollY;

        // --- Header Logic ---
        if (header) {
             if (scrollPos > scrollThreshold) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        }
       
        // --- Parallax Logic (Movement in the same direction, but slower) ---
        if (parallaxTarget) {
            // Speed must be low (0.01 to 0.05) for a very slow effect.
            const speed = -0.2; 
            
            // CRITICAL FIX: The video only moves by a small fraction of the scroll distance.
            // When you scroll down (scrollPos increases), yOffset increases, 
            // causing a positive (downward) translation.
            const yOffset = scrollPos * speed;
            
            // Combine CSS translateX(-50%) for horizontal centering 
            // with the new, simple translateY (yOffset).
            parallaxTarget.style.transform = `translateX(-50%) translateY(${yOffset}px) scale(1.05)`;
        }
    }

    // Attach listener for both scroll and resize
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); 
    
    // Call once on load
    handleScroll(); 
});