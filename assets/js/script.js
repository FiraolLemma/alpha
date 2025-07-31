// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const nav = document.querySelector('nav');
  
  mobileMenuBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    this.classList.toggle('fa-times');
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
      mobileMenuBtn.classList.remove('fa-times');
    });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form submission
  const registrationForm = document.getElementById('registration-form');
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const language = document.getElementById('language').value;
      const interest = document.getElementById('interest').value;
      
      // Here you would typically send this data to your server
      console.log('Form submitted:', { name, email, phone, language, interest });
      
      // Show success message
      alert('Thank you for your registration! We will contact you soon.');
      registrationForm.reset();
    });
  }
  
  // Initialize testimonial slider (you would need a slider library like Swiper for full functionality)
  // This is a basic implementation
  const testimonialSlider = document.querySelector('.testimonial-slider');
  if (testimonialSlider) {
    let currentSlide = 0;
    const slides = testimonialSlider.children;
    const totalSlides = slides.length;
    
    function showSlide(index) {
      for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = 'none';
      }
      slides[index].style.display = 'block';
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
    
    // Show first slide initially
    showSlide(0);
    
    // Auto-rotate slides every 5 seconds
    setInterval(nextSlide, 5000);
  }
});