// Select the element that has the animation
const animatedText = document.querySelector('.text-animation');
const menuItems = document.querySelectorAll(".menu a");

// Remove the class that contains the animation (if you want to disable it)
animatedText.classList.remove('text-animation');

// Select the hamburger menu and the menu section
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

// Add a click event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active'); // Toggle the 'active' class on the menu
});

// Close the menu after clicking any menu item
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.remove('active'); // Remove the 'active' class to close the menu
  });
});
