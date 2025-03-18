// Back-to-Top Button Functionality
window.addEventListener('scroll', () => {
    const button = document.querySelector('.back-to-top');
    if (window.scrollY > 200) {
      button.style.display = 'block'; // Show the button when scrolled down
    } else {
      button.style.display = 'none'; // Hide the button when at the top
    }
  });
  
  // Smooth Scroll to Top
  document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  });