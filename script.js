document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const fadeSections = document.querySelectorAll(
  '.scroll-fade, .scroll-fade-left, .scroll-fade-right, .scroll-fade-up'
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
  entry.target.classList.add('visible');
    } else {
  entry.target.classList.remove('visible');
} });
}, {
  threshold: 0.1
});

fadeSections.forEach(section => {
  observer.observe(section);
});
