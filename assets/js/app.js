



// preloader work
  window.addEventListener('load', () => {
  const fill = document.querySelector('.loading-bar-fill');

  // Animate loading bar fill
  fill.style.transition = 'width 1.5s ease';
  fill.style.width = '100%';

  // Remove preloader after animation
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 2500); // match animation duration
});

// preloader end
  document.addEventListener('DOMContentLoaded', function() {
    
  
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.set('.logo img, .left h1, .left p, .left button, .right img', {
      opacity: 0,
      y: 50
    });
    
    gsap.set('.heading, .sub-heading', {
      opacity: 0,
      y: 30
    });
    
    gsap.set('.card', {
      opacity: 0,
      y: 50,
      scale: 0.95
    });
    
    gsap.set('.image-side .phones, .content-side h2, .content-side > p, .feature', {
      opacity: 0,
      x: 0
    });
    
    gsap.set('.image-side .phones', { x: -50 });
    gsap.set('.content-side h2', { x: 50 });
    gsap.set('.content-side > p', { x: 50 });
    gsap.set('.feature', { x: 50 });
    
    gsap.set('.install-title, .install-desc', {
      opacity: 0,
      y: 30
    });
    
    gsap.set('.install-step', {
      opacity: 0,
      scale: 0.8
    });
    
    gsap.set('.install-box', {
      opacity: 0,
      y: 40
    });
    
    gsap.set('.banner-content h1, .banner-content p, .banner-content button, .banner2 .right img', {
      opacity: 0,
      y: 40
    });
    
    gsap.set('.testimonial-title', {
      opacity: 0,
      y: 30
    });
    
    gsap.set('.testicards', {
      opacity: 0,
      y: 50,
      scale: 0.95
    });
    
    gsap.set('.footer-banner-content h1, .footer-banner-content p, .footer-banner-content .image, .footer-banner .right img', {
      opacity: 0,
      y: 40
    });
    
    const heroTl = gsap.timeline();
    heroTl
      .to('.logo img', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'back.out(0.7)'
      })
      .to('.left h1', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4')
      .to('.left p', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6')
      .to('.left button', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'back.out(0.5)'
      }, '-=0.4')
      .to('.right img', {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'elastic.out(1, 0.5)'
      }, '-=0.5');
    
    gsap.to('.heading, .sub-heading', {
      scrollTrigger: {
        trigger: '.service',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
    
    gsap.to('.card', {
      scrollTrigger: {
        trigger: '.cards',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.15,
      ease: 'back.out(0.6)'
    });
    
    gsap.to('.image-side .phones', {
      scrollTrigger: {
        trigger: '.section3',
        start: 'top 75%',
        end: 'bottom 50%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out'
    });
    
    gsap.to('.content-side h2', {
      scrollTrigger: {
        trigger: '.section3',
        start: 'top 75%',
        end: 'bottom 50%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
    
    gsap.to('.content-side > p', {
      scrollTrigger: {
        trigger: '.section3',
        start: 'top 75%',
        end: 'bottom 50%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      x: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power2.out'
    });
    
    gsap.to('.feature', {
      scrollTrigger: {
        trigger: '.section3',
        start: 'top 75%',
        end: 'bottom 50%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      x: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out'
    });
    
    gsap.to('.install-title, .install-desc', {
      scrollTrigger: {
        trigger: '.install-wrap',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
    
    gsap.to('.install-step', {
      scrollTrigger: {
        trigger: '.install-steps',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: 'back.out(0.5)'
    });
    
    gsap.to('.install-box', {
      scrollTrigger: {
        trigger: '.install-boxes',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out'
    });
    
    gsap.to('.banner-content h1', {
      scrollTrigger: {
        trigger: '.banner2',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
    
    gsap.to('.banner-content p', {
      scrollTrigger: {
        trigger: '.banner2',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power2.out'
    });
    
    gsap.to('.banner-content button', {
      scrollTrigger: {
        trigger: '.banner2',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.4,
      ease: 'back.out(0.6)'
    });
    
    gsap.to('.banner2 .right img', {
      scrollTrigger: {
        trigger: '.banner2',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay: 0.3,
      ease: 'elastic.out(1, 0.5)'
    });
    
    gsap.to('.testimonial-title', {
      scrollTrigger: {
        trigger: '.testimonial-section',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
    
    gsap.to('.testicards', {
      scrollTrigger: {
        trigger: '.testimonial-grid',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: 'back.out(0.5)'
    });
    
    gsap.to('.footer-banner-content h1', {
      scrollTrigger: {
        trigger: '.footer-banner',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
    
    gsap.to('.footer-banner-content p', {
      scrollTrigger: {
        trigger: '.footer-banner',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power2.out'
    });
    
    gsap.to('.footer-banner-content .image', {
      scrollTrigger: {
        trigger: '.footer-banner',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.4,
      ease: 'back.out(0.6)'
    });
    
    gsap.to('.footer-banner .right img', {
      scrollTrigger: {
        trigger: '.footer-banner',
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay: 0.3,
      ease: 'elastic.out(1, 0.5)'
    });
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
    
    const cards = document.querySelectorAll('.card, .install-box, .testicards');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.2)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
    
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
      feature.addEventListener('mouseenter', () => {
        gsap.to(feature, {
          scale: 1.02,
          boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      feature.addEventListener('mouseleave', () => {
        gsap.to(feature, {
          scale: 1,
          boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
    
    const logo = document.querySelector('.logo img');
    if(logo) {
      logo.addEventListener('mouseenter', () => {
        gsap.to(logo, {
          scale: 1.05,
          rotation: 2,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      logo.addEventListener('mouseleave', () => {
        gsap.to(logo, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }
    
  });
