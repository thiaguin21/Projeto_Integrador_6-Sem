// Carrossel de Clientes
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    // Garantir que o índice seja cíclico
    if (index >= totalSlides / 3) currentSlide = 0;
    if (index < 0) currentSlide = Math.ceil(totalSlides / 3) - 1;

    // Atualizar a posição das imagens
    const offset = -currentSlide * 900; // 900px (300px por imagem * 3 imagens visíveis)
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}px)`;
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

//login
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});