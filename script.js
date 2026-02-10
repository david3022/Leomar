
// Animación al entrar en viewport
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));

// Animaciones hover adicionales
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.filter = 'brightness(1.2)';
    img.style.transform = 'scale(1.03)';
    img.style.transition = 'all 0.3s ease';
  });
  img.addEventListener('mouseout', () => {
    img.style.filter = 'brightness(1)';
    img.style.transform = 'scale(1)';
  });
});
