  // Mobile menu toggle
    document.getElementById('menu-toggle').addEventListener('click', function() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('open');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          const menu = document.getElementById('mobile-menu');
          menu.classList.remove('open');
        }
      });
    });
    
    // Animation on scroll
    function animateOnScroll() {
      const elements = document.querySelectorAll('.animate-fadein');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }
    
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);