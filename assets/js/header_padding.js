document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main_header');
    const mainContent = document.getElementById('main_content');

    /**
     * Adjusts the top padding of the main content to prevent overlap with the fixed header.
     **/
    function adjustPadding() {
        const headerHeight = header.offsetHeight;
        const screenWidth = window.innerWidth;

        if (screenWidth < 640) { // Tailwind's sm breakpoint is 640px
            mainContent.style.paddingTop = `${headerHeight}px`;
        } else {
            mainContent.style.paddingTop = '0';
        }
    }

    window.addEventListener('resize', adjustPadding);
    adjustPadding(); // Initial call on page load
});