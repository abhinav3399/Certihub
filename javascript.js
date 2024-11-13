// Scroll to top functionality
const backToTopBtn = document.getElementById('back-to-top');

// Show back-to-top button when scrolled down 100px
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
};

// Scroll back to top when the button is clicked
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});

// Testimonial Carousel or Course Carousel (if applicable)
const testimonials = document.querySelectorAll('.review');
let testimonialIndex = 0;

// Show next testimonial
function showNextTestimonial() {
  testimonials[testimonialIndex].classList.remove('active');
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  testimonials[testimonialIndex].classList.add('active');
}

// Show previous testimonial
function showPrevTestimonial() {
  testimonials[testimonialIndex].classList.remove('active');
  testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  testimonials[testimonialIndex].classList.add('active');
}

// Automatically move to the next testimonial every 5 seconds
setInterval(showNextTestimonial, 5000);

// Search functionality for courses
const searchInput = document.getElementById('search-input');
const courseCards = document.querySelectorAll('.course-card');

searchInput.addEventListener('input', function() {
  const query = searchInput.value.toLowerCase();
  
  courseCards.forEach(card => {
    const title = card.querySelector('h3').innerText.toLowerCase();
    
    if (title.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Apply Fade-in animation on scroll for elements
const fadeInElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', function() {
  fadeInElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (elementPosition < viewportHeight - 100) {
      element.classList.add('fade-in-visible');
    } else {
      element.classList.remove('fade-in-visible');
    }
  });
});

// Smooth Scroll to Anchor Links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();

    const targetId = anchor.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50, // Adjust for header height
      behavior: 'smooth'
    });
  });
});


// Open the Modal when Login/Register Button is clicked
loginRegisterBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close the Modal when the close button (x) is clicked
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the Modal if the user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Switch to Login Tab
loginTab.addEventListener('click', function() {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
});

// Switch to Register Tab
registerTab.addEventListener('click', function() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
});

// Dummy form submission behavior
document.getElementById('login-form-action').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Login Form Submitted!");
    modal.style.display = 'none';
});

document.getElementById('register-form-action').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Register Form Submitted!");
    modal.style.display = 'none';
});
// Get all necessary elements
const loginRegisterBtn = document.getElementById('login-register-btn');
const modal = document.getElementById('login-register-modal');
const closeModalBtn = document.getElementById('close-modal');
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Open the login/register modal
loginRegisterBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Close the modal when the close button (X) is clicked
closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Switch to the login form
loginTab.addEventListener('click', function() {
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
  loginTab.classList.add('active');
  registerTab.classList.remove('active');
});

// Switch to the register form
registerTab.addEventListener('click', function() {
  registerForm.style.display = 'block';
  loginForm.style.display = 'none';
  registerTab.classList.add('active');
  loginTab.classList.remove('active');
});

// Handle login form submission
document.getElementById('login-form-action').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  if (email && password) {
    alert("Login Successful!");
    modal.style.display = 'none'; // Close the modal after successful login
  } else {
    alert("Please enter both email and password.");
  }
});

// Handle register form submission
document.getElementById('register-form-action').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page
  const name = registerForm.querySelector('input[type="text"]').value;
  const email = registerForm.querySelector('input[type="email"]').value;
  const password = registerForm.querySelector('input[type="password"]').value;

  if (name && email && password) {
    alert("Registration Successful!");
    modal.style.display = 'none'; // Close the modal after successful registration
  } else {
    alert("Please fill in all fields.");
  }
});
