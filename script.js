// Scroll-spy: highlight active nav link based on scroll
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    function onScroll() {
        let scrollPosition = window.scrollY + 100; // Adjust offset if needed

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', onScroll);
});


document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('.productsScroll');
    const nextButton = document.querySelector('.nextButton');
    const prevButton = document.querySelector('.prevButton');

    nextButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 320, behavior: 'smooth' }); // 320px or card width + gap
    });

    prevButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -320, behavior: 'smooth' });
    });
});

// Show and Hide All Products

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.viewAllProducts');
  const hiddenSection = document.querySelector('.hideProducts');

  toggleBtn.addEventListener('click', function () {
    const isVisible = hiddenSection.style.display === 'block';

    if (isVisible) {
      hiddenSection.style.display = 'none';
      toggleBtn.textContent = 'View All Products';
    } else {
      hiddenSection.style.display = 'block';
      toggleBtn.textContent = 'Show Less';
    }
  });
});
