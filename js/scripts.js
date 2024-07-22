document.addEventListener('DOMContentLoaded', function() {
  // Desplazamiento suave para los enlaces de navegación
  const links = document.querySelectorAll('#top-nav ul li a');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 60, // Ajuste por el menú fijo
        behavior: 'smooth'
      });
    });
  });

  // Resaltar enlace activo basado en el scroll
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('#top-nav ul li a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 70) { // Ajuste por el menú fijo
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Botón para desplazarse al inicio
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Mostrar/ocultar el botón "Ir arriba" basado en el scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
});
