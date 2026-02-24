// Variável para pontuação
let score = 0;

// Menu Mobile Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scroll para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Adicionar smooth scroll aos links do nav
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
        
        // Fechar menu mobile se estiver aberto
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});


function playSound() {
    
    try {
    
        // Mostrar mensagem
        showMessage('🎮 Let\'s-a-go!');
    } catch (error) {
        showMessage('🎮 Let\'s-a-go!');
    }
}





   // Mostrar mensagem temporária
function showMessage(message) {
    // Criar elemento de mensagem
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(230, 0, 18, 0.95);
        color: white;
        padding: 20px 40px;
        border-radius: 15px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        animation: fadeInOut 1.5s ease-out;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    `;
    
    document.body.appendChild(messageDiv);
    
    // Remover após animação
    setTimeout(() => {
        messageDiv.remove();
    }, 1500);
}



// Animações ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observar elementos
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.character-card, .item-card, .stat-item');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});



// Adicionar estilos de animação dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
        }
        80% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
    
    @keyframes starFall {
        to {
            top: 100vh;
            transform: rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;


