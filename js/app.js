const wrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
const totalSlides = slides.length;

function updateSlide(index) {
    wrapper.style.transform = `translateX(-${index * 100}%)`;

    // Atualizar pontos
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide(currentSlide);
}

// Eventos
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        updateSlide(i);
    });
});

setInterval(nextSlide, 5000);

// Menu lateral mobile
const navbar = document.getElementById('main-nav');

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

function openSidebar() {
    navbar.classList.add('show');
}

function closeSidebar() {
    navbar.classList.remove('show');
}

const accordion = document.getElementsByClassName('accordion-box');


for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}


// Carrossel de Imagens da Página Inicial
