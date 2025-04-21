document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".featured");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1  
    });
  
    items.forEach(item => observer.observe(item));
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
  
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
    });
  
    closeMenu.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
    });
  });
  