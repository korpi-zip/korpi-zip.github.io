const GITHUB_USER = 'korpi-zip';
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos`;

// Repositorios colaborativos adicionales
const COLLABORATIVE_REPOS = [
    'Davidrc26/backend_PAL',
    'Davidrc26/gui-park',
    'Davidrc26/ms-logic-park',
    'Davidrc26/ms-notifications-park',
    'JojhanPerezArroyave/pawplay-feeder'
];

// Descripciones auto-generadas para repos sin descripción
const autoDescriptions = {
    'test': 'Suite de testing automatizado para validación de código.',
    'api': 'Interfaz REST robusta y escalable.',
    'bot': 'Bot automatizado con funcionalidades avanzadas.',
    'tool': 'Herramienta útil para optimizar procesos.',
    'cli': 'Interfaz de línea de comandos intuitiva y poderosa.',
    'lib': 'Librería reutilizable y bien documentada.',
    'server': 'Servidor backend con arquitectura moderna.',
    'app': 'Aplicación completa y funcional.',
    'default': 'Proyecto interesante con código de alta calidad.'
};

// Función para generar descripción basada en el nombre
function generateDescription(repoName) {
    const keywords = {
        'test': 'Suite de testing automatizado para validación de código.',
        'api': 'Interfaz REST robusta y escalable.',
        'bot': 'Bot automatizado con funcionalidades avanzadas.',
        'tool': 'Herramienta útil para optimizar procesos.',
        'cli': 'Interfaz de línea de comandos intuitiva y poderosa.',
        'lib': 'Librería reutilizable y bien documentada.',
        'server': 'Servidor backend con arquitectura moderna.',
        'app': 'Aplicación completa y funcional.',
        'portfolio': 'Portafolio personal con diseño moderno.',
        'website': 'Sitio web con funcionalidades avanzadas.',
        'script': 'Script de automatización eficiente.',
        'automation': 'Sistema de automatización de procesos.',
        'backend': 'Aplicación backend con arquitectura escalable.',
        'frontend': 'Interfaz de usuario moderna y responsive.',
        'fullstack': 'Aplicación full-stack completa.',
        'docker': 'Configuración Docker para despliegue.',
        'config': 'Configuración y scripts de setup.',
        'utils': 'Utilidades y funciones auxiliares.',
        'demo': 'Proyecto de demostración.',
        'example': 'Ejemplo de implementación.'
    };

    const lowerName = repoName.toLowerCase();
    
    for (const [key, desc] of Object.entries(keywords)) {
        if (lowerName.includes(key)) {
            return desc;
        }
    }

    return autoDescriptions['default'];
}

// Obtener repositorios de GitHub
async function fetchGitHubRepos() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error fetching repos: ${response.status}`);
        }
        
        let repos = await response.json();

        // Filtrar forks
        repos = repos.filter(repo => !repo.fork);

        // Ordenar por fecha de actualización (más recientes primero)
        repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        return repos;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}

// Obtener repositorios colaborativos específicos
async function fetchCollaborativeRepos() {
    const repos = [];
    
    for (const repoPath of COLLABORATIVE_REPOS) {
        try {
            const response = await fetch(`https://api.github.com/repos/${repoPath}`);
            if (response.ok) {
                const repo = await response.json();
                // Marcar como colaborativo
                repo.isCollaborative = true;
                repos.push(repo);
            }
        } catch (error) {
            console.error(`Error fetching collaborative repo ${repoPath}:`, error);
        }
    }
    
    return repos;
}

// Obtener lenguajes de un repositorio
async function getRepoLanguages(repoUrl) {
    try {
        const response = await fetch(repoUrl);
        if (!response.ok) {
            return [];
        }
        
        const languages = await response.json();
        // Ordenar por porcentaje y tomar los top 5
        const sortedLanguages = Object.entries(languages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([lang]) => lang);
        
        return sortedLanguages;
    } catch (error) {
        console.error('Error fetching languages:', error);
        return [];
    }
}

// Crear tarjeta de proyecto
function createProjectCard(repo, languages = []) {
    const description = repo.description || generateDescription(repo.name);
    const repoName = escapeHtml(repo.name);
    const repoDescription = escapeHtml(description);
    const repoUrl = repo.html_url;
    const isCollaborative = repo.isCollaborative || false;

    return `
        <div class="project-card ${isCollaborative ? 'collaborative' : ''}">
            <div class="project-header">
                <h3 class="project-title">${repoName}</h3>
                ${isCollaborative ? '<span class="collaborative-badge" title="Proyecto colaborativo"><i class="fas fa-users"></i> Colaborativo</span>' : ''}
            </div>
            <p class="project-description">${repoDescription}</p>
            <div class="project-languages">
                ${languages.length > 0 
                    ? languages.map(lang => `<span class="language-badge">${escapeHtml(lang)}</span>`).join('')
                    : '<span class="language-badge">Proyecto</span>'
                }
            </div>
            <a href="${repoUrl}" target="_blank" class="project-link" rel="noopener noreferrer">
                Ver en GitHub →
            </a>
        </div>
    `;
}

// Función auxiliar para escapar HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Cargar y mostrar proyectos
async function loadProjects() {
    const grid = document.getElementById('projectsGrid');
    
    if (!grid) {
        console.error('Projects grid not found');
        return;
    }

    grid.innerHTML = '<div class="loading">Cargando proyectos...</div>';
    
    // Obtener repositorios propios y colaborativos en paralelo
    const [ownRepos, collaborativeRepos] = await Promise.all([
        fetchGitHubRepos(),
        fetchCollaborativeRepos()
    ]);

    // Combinar ambos arrays y eliminar duplicados (por URL)
    const allRepos = [...ownRepos];
    const ownRepoUrls = new Set(ownRepos.map(r => r.html_url));
    
    collaborativeRepos.forEach(repo => {
        if (!ownRepoUrls.has(repo.html_url)) {
            allRepos.push(repo);
        }
    });

    if (allRepos.length === 0) {
        grid.innerHTML = '<div class="loading">No se pudieron cargar los proyectos. Por favor, intenta más tarde.</div>';
        return;
    }

    // Ordenar todos los repos por fecha de actualización (más recientes primero)
    allRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    // Optimización: obtener lenguajes en paralelo para todos los repos
    const reposWithLanguages = await Promise.all(
        allRepos.map(async (repo) => {
            const languages = await getRepoLanguages(repo.languages_url);
            return { repo, languages };
        })
    );

    let cardsHTML = '';

    for (const { repo, languages } of reposWithLanguages) {
        cardsHTML += createProjectCard(repo, languages);
    }

    grid.innerHTML = cardsHTML;
    
    // Agregar animación a las tarjetas
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s backwards`;
    });
}

// Modo oscuro/claro
function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    
    if (!toggle) {
        console.error('Theme toggle button not found');
        return;
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        toggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

// Formulario de contacto con Formspree
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) {
        console.error('Contact form not found');
        return;
    }

    // IMPORTANTE: Reemplaza 'YOUR_FORM_ID' con tu ID de Formspree
    // Obtén tu ID en: https://formspree.io/forms
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqjjkdb';
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    const formStatus = document.getElementById('formStatus');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validar campos
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'var(--secondary)';
            } else {
                input.style.borderColor = 'var(--border-color)';
            }
        });

        if (!isValid) {
            showFormStatus('Por favor, completa todos los campos requeridos.', 'error');
            return;
        }

        // Deshabilitar botón y mostrar loading
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-flex';
        formStatus.textContent = '';
        formStatus.className = 'form-status';

        try {
            const formData = new FormData(form);
            
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showFormStatus('¡Mensaje enviado exitosamente! Te contactaré pronto.', 'success');
                form.reset();
            } else {
                const data = await response.json();
                if (data.errors) {
                    showFormStatus('Error al enviar el mensaje. Por favor, verifica los campos.', 'error');
                } else {
                    showFormStatus('Error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            showFormStatus('Error de conexión. Por favor, intenta nuevamente o contáctame directamente por email.', 'error');
        } finally {
            // Rehabilitar botón
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
        }
    });

    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = 'block';
        
        // Ocultar mensaje después de 5 segundos si es éxito
        if (type === 'success') {
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    }
}

// Animación al hacer scroll
function initScrollAnimation() {
    // Verificar si IntersectionObserver está disponible
    if (!('IntersectionObserver' in window)) {
        console.warn('IntersectionObserver not supported');
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observar elementos
    const elementsToAnimate = document.querySelectorAll('.project-card, .section-title, .about-text, .skills, .contact-content');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Actualizar año en el footer
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Cargar imagen de perfil si existe
function loadProfileImage() {
    const heroImage = document.getElementById('heroImage');
    if (!heroImage) return;

    const profileImg = new Image();
    // Usar ruta relativa compatible con GitHub Pages
    profileImg.src = './assets/images/profile.jpg';
    
    profileImg.onload = () => {
        // Si la imagen existe, reemplazar el ícono
        heroImage.innerHTML = '';
        heroImage.style.backgroundImage = `url(${profileImg.src})`;
        heroImage.style.backgroundSize = 'cover';
        heroImage.style.backgroundPosition = 'center';
        heroImage.classList.add('profile-image');
    };
    
    profileImg.onerror = () => {
        // Si no existe, mantener el ícono por defecto
        // No hacer nada, el ícono ya está en el HTML
    };
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initThemeToggle();
    initContactForm();
    initScrollAnimation();
    updateCurrentYear();
    loadProfileImage();
});
