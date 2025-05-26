const secret = 'asdf';
    let buffer = '';

    const randomLinks = [
      'https://www.youtube.com/watch?v=htX0c7m3ivA&ab_channel=IsuraMusic',
      'https://www.youtube.com/watch?v=PxRZ5RwwSFw&ab_channel=revemayuzumi',
      'https://www.youtube.com/watch?v=gFTicEWzKks&ab_channel=DJDESA',
    ];

    document.addEventListener('keydown', e => {
      buffer += e.key.toLowerCase();                
      if (buffer.length > secret.length) {
        buffer = buffer.slice(buffer.length - secret.length);
      }
     
      if (buffer === secret) {
        const url = randomLinks[Math.floor(Math.random() * randomLinks.length)];
        window.location.href = url;                  
      }
    });

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('.page');
  if (page) page.classList.add('visible');
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('nav a[href$=".html"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (!href.startsWith('#') && href.endsWith('.html')) {
      e.preventDefault();
      const page = document.querySelector('.page');
      if (page) {
        page.classList.remove('visible');      
        page.addEventListener('transitionend', () => {
          window.location.href = href;          
        }, { once: true });
      } else {
        window.location.href = href;
      }
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
    }
  });
}, {
  threshold: 0.1
});

fadeSections.forEach(section => {
  observer.observe(section);
});

document.addEventListener('click', () => {
  const audio = document.getElementById('bg-music');
  if (audio && audio.muted) {
    audio.muted = false;
    audio.volume = 0.2;
    audio.play();
  }
});
