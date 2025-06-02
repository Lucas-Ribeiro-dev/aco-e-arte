document.addEventListener('DOMContentLoaded', () => {
    // Slider
    const wrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlide(index) {
        if (wrapper) {
            wrapper.style.transform = `translateX(-${index * 100}%)`;
        }

        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    if (nextBtn && prevBtn && wrapper && slides.length > 0) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlide(currentSlide);
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlide(currentSlide);
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                currentSlide = i;
                updateSlide(i);
            });
        });

        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlide(currentSlide);
        }, 5000);
    }

    // Menu lateral mobile
    const navbar = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('nav a');
    const openBtn = document.getElementById('open-sidebar-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');

    function openSidebar() {
        if (navbar) navbar.classList.add('show');
    }

    function closeSidebar() {
        if (navbar) navbar.classList.remove('show');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    if (openBtn) openBtn.addEventListener('click', openSidebar);
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);

    // Acordeão 
    const accordion = document.getElementsByClassName('accordion-box');
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    //  Galeria
    const overlay = document.getElementById('imgOverlay');
    const overlayImg = document.getElementById('overlayImg');
    const images = document.querySelectorAll('.portfolio-item img');

    if (overlay && overlayImg && images.length > 0) {
        images.forEach(img => {
            img.addEventListener('click', () => {
                overlay.style.display = 'flex';
                overlayImg.src = img.src;
                overlayImg.alt = img.alt;
            });
        });

        overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
            overlayImg.src = '';
        });
    }
});
