// Get the hamburger and nav-links elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Add a click event listener to the hamburger menu
hamburger.addEventListener("click", () => {
  // Toggle the "active" class on the nav-links to show/hide menu
  navLinks.classList.toggle("active");
});
