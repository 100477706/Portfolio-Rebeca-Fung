// Variables para carruseles
const carruseles = {
    'carrusel-eventos': {
        currentIndex: 0,
        autoPlayInterval: null
    },
    'carrusel-paisajes': {
        currentIndex: 0,
        autoPlayInterval: null
    }
};

// Inicializar carruseles
document.addEventListener('DOMContentLoaded', function() {
    initializeCarruseles();
    setupNavigation();
    setupForm();
    setupAutoPlay();
});

// Inicializar carruseles con indicadores
function initializeCarruseles() {
    Object.keys(carruseles).forEach(carruselId => {
        updateCarrusel(carruselId);
        createIndicators(carruselId);
    });
}

// Crear indicadores para cada carrusel
function createIndicators(carruselId) {
    const carrusel = document.getElementById(carruselId);
    const images = carrusel.querySelectorAll('.carrusel-img');
    const indicatorsContainer = document.getElementById(`indicators-${carruselId.split('-')[1]}`);
    
    images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) {
            indicator.classList.add('active');
        }
        indicator.addEventListener('click', () => {
            carruseles[carruselId].currentIndex = index;
            updateCarrusel(carruselId);
            resetAutoPlay(carruselId);
        });
        indicatorsContainer.appendChild(indicator);
    });
}

// Actualizar posición del carrusel
function updateCarrusel(carruselId) {
    const carrusel = document.getElementById(carruselId);
    const images = carrusel.querySelectorAll('.carrusel-img');
    const index = carruseles[carruselId].currentIndex;
    
    carrusel.style.transform = `translateX(-${index * 100}%)`;
    
    // Actualizar indicadores
    const type = carruselId.split('-')[1];
    const indicators = document.querySelectorAll(`#indicators-${type} .indicator`);
    indicators.forEach((ind, i) => {
        ind.classList.remove('active');
        if (i === index) {
            ind.classList.add('active');
        }
    });
}

// Siguiente slide
function nextSlide(carruselId) {
    const carrusel = document.getElementById(carruselId);
    const images = carrusel.querySelectorAll('.carrusel-img');
    const totalImages = images.length;
    
    carruseles[carruselId].currentIndex = (carruseles[carruselId].currentIndex + 1) % totalImages;
    updateCarrusel(carruselId);
    resetAutoPlay(carruselId);
}

// Slide anterior
function previousSlide(carruselId) {
    const carrusel = document.getElementById(carruselId);
    const images = carrusel.querySelectorAll('.carrusel-img');
    const totalImages = images.length;
    
    carruseles[carruselId].currentIndex = (carruseles[carruselId].currentIndex - 1 + totalImages) % totalImages;
    updateCarrusel(carruselId);
    resetAutoPlay(carruselId);
}

// Auto-play de carruseles
function setupAutoPlay() {
    Object.keys(carruseles).forEach(carruselId => {
        startAutoPlay(carruselId);
    });
}

function startAutoPlay(carruselId) {
    carruseles[carruselId].autoPlayInterval = setInterval(() => {
        nextSlide(carruselId);
    }, 5000); // Cambiar cada 5 segundos
}

function resetAutoPlay(carruselId) {
    clearInterval(carruseles[carruselId].autoPlayInterval);
    startAutoPlay(carruselId);
}

// Navegación - mostrar navbar al hacer scroll
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const heroBottom = heroSection.offsetHeight;
        
        if (window.scrollY > heroBottom * 0.3) {
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    });
}

// Scroll suave a secciones
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Formulario de contacto
function setupForm() {
    const form = document.getElementById('contactoForm');
    
    // Si usa Formspree, el formulario se enviará automáticamente
    // No necesitas lógica especial aquí
    form.addEventListener('submit', function() {
        // Mostrar mensaje mientras se envía
        console.log('Formulario enviándose...');
    });
}

// Active nav links cuando se hace scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
