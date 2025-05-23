gsap.registerPlugin(ScrollTrigger);


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
  
  //scrollstuff
  const wipeTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#pinContainer",
      start: "top top",
      end: "+=400%",
      pin: true,
      scrub: true,
    }
  });
  
  wipeTimeline
  .fromTo(".panel.turqoise",    { x: "-110%" }, { x: "0%", ease: "none" })
  .fromTo(".panel.green",       { x: "110%" },  { x: "0%", ease: "none" })
  .fromTo(".panel.bordeaux",    { y: "-110%" }, { y: "0%", ease: "none" })
  .fromTo(".panel.yellow",      { x: "-110%" }, { x: "0%", ease: "none" })
  .fromTo(".panel.orange",      { x: "110%" },  { x: "0%", ease: "none" })
  .fromTo(".panel.red",         { y: "-110%" }, { y: "0%", ease: "none" })

  document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('hamburger');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
  });
  