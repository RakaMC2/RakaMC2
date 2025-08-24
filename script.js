const avatars = document.querySelectorAll('.avatar-image');
const decorations = document.querySelectorAll('.decoration');

// Avatar Click Effects
avatars.forEach(avatar => {
    avatar.addEventListener('click', function() {
        // Rotation effect
        this.style.transform = 'scale(1.2) rotate(360deg)';
        
        // Reset after animation
        setTimeout(() => {
            this.style.transform = '';
        }, 500);
        
        // Add temporary glow effect
        this.classList.add('glow-effect');
        setTimeout(() => {
            this.classList.remove('glow-effect');
        }, 1000);
    });
    
    // Double click for special effect
    avatar.addEventListener('dblclick', function() {
        this.style.animation = 'bounce 0.6s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });
});

// Mouse parallax effect for decorations
window.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth) - 0.5;
    const mouseY = (e.clientY / window.innerHeight) - 0.5;
    
    decorations.forEach((decoration, index) => {
        const speed = (index + 1) * 0.5;
        const x = mouseX * speed * 20;
        const y = mouseY * speed * 20;
        
        decoration.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Smooth scroll to top when clicking title
document.querySelector('.title').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add bounce animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    .glow-effect {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 
                    0 0 40px rgba(255, 255, 255, 0.6), 
                    0 0 60px rgba(255, 255, 255, 0.4) !important;
    }
    
    @keyframes bounce {
        0%, 20%, 60%, 100% { transform: translateY(0); }
        40% { transform: translateY(-20px); }
        80% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 Minecraft Avatar Layout loaded successfully!');
    
    // Add entrance animation
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});