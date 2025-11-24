// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Form Submission - Show read-only message
function showReadOnlyMessage() {
    alert('This is a read-only portfolio. To contact Abhranil, please use the provided contact information.');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
    } else {
        header.style.backgroundColor = 'var(--primary)';
    }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showReadOnlyMessage();
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Disable drag and drop
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});

// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener('keydown', function(e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
        showReadOnlyMessage();
    }
});
