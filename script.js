const GITHUB_USER = 'korpi-zip';
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos`;

const I18N = {
    es: {
        'nav.featured': 'Destacados',
        'nav.allProjects': 'Todos mis proyectos',
        'nav.about': 'Sobre mi',
        'nav.contact': 'Contacto',
        'hero.title': 'Hola, soy Santiago Escobar',
        'hero.role': 'Estudiante de Ingenieria de Sistemas y Computacion',
        'hero.subtitle': 'Desarrollo y prototipo soluciones con software, IoT e inteligencia artificial.',
        'hero.cta': 'Ver proyectos',
        'sections.featured': 'Proyectos Destacados',
        'sections.allProjects': 'Todos mis proyectos',
        'featured.brief.problem': 'Problema:',
        'featured.brief.approach': 'Enfoque:',
        'featured.brief.impact': 'Aporte a calidad de vida:',
        'featured.pawplay.title': 'PawPlay Feeder',
        'featured.pawplay.summary': 'Automatizando la alimentacion de gatos de forma gamificada para activar sus instintos.',
        'featured.pawplay.problem': 'Muchos gatos de interior enfrentan sedentarismo y obesidad por rutinas de alimentacion poco estimulantes.',
        'featured.pawplay.approach': 'PawPlay Feeder combina automatizacion de comida con dinamicas de interaccion para activar conducta y movimiento.',
        'featured.pawplay.impact': 'Promueve habitos mas saludables, reduce riesgos asociados al sobrepeso y mejora el bienestar diario de la mascota.',
        'featured.pawplay.tech1': 'Arduino',
        'featured.pawplay.tech2': 'IoT',
        'featured.pawplay.tech3': 'Automatizacion',
        'featured.pawplay.tech4': 'Sensores',
        'featured.vitalcare.title': 'VitalCarePro',
        'featured.vitalcare.summary': 'Monitoreo inteligente de adultos mayores para un cuidado continuo, claro y oportuno.',
        'featured.vitalcare.problem': 'El seguimiento manual de pacientes suele ser fragmentado y dificulta decisiones oportunas en cuidado geriatrico y familiar.',
        'featured.vitalcare.approach': 'Plataforma con captura IoT de signos vitales y apoyo de IA para convertir datos clinicos en reportes claros para cuidadores y profesionales.',
        'featured.vitalcare.impact': 'Mejora el acompanamiento del paciente, facilita intervenciones tempranas y da mayor tranquilidad a familias y equipos de cuidado.',
        'featured.vitalcare.tech1': 'Sistema de Informacion',
        'featured.vitalcare.tech2': 'Salud Digital',
        'featured.vitalcare.tech3': 'Monitoreo',
        'featured.vitalcare.tech4': 'IoT',
        'featured.mcp.title': 'MCP SmartHome',
        'featured.mcp.summary': 'Control inteligente del hogar con IA via MCP, permitiendo gestionar dispositivos con lenguaje natural y recibir respuestas claras en el mismo formato.',
        'featured.mcp.problem': 'Los hogares inteligentes suelen exigir multiples apps y comandos tecnicos, lo que dificulta una experiencia fluida para usuarios no especializados.',
        'featured.mcp.approach': 'Uso de IA por medio de MCP para orquestar diferentes dispositivos desde instrucciones en lenguaje natural, con retroalimentacion contextual tambien en lenguaje natural.',
        'featured.mcp.impact': 'Introduce una interaccion mas intuitiva e innovadora, reduce friccion en tareas diarias y mejora la experiencia del usuario con herramientas modernas de IA.',
        'featured.mcp.tech1': 'MCP',
        'featured.mcp.tech2': 'IA',
        'featured.mcp.tech3': 'Lenguaje Natural',
        'featured.mcp.tech4': 'IoT',
        'featured.mcp.tech5': 'Integracion Inteligente',
        'featured.micelial.title': 'Micelial Spread',
        'featured.micelial.summary': 'Proyecto de biomimetica que toma inspiracion en la organizacion de los hongos para disenar algoritmos bioinspirados de formacion eficiente de redes y rutas.',
        'featured.micelial.problem': 'Disenar redes y rutas eficientes en entornos dinamicos y cambiantes es complejo, especialmente cuando las condiciones varian como ocurre en el suelo o en sistemas sociales humanos.',
        'featured.micelial.approach': 'Observacion de como los hongos estructuran sus redes miceliales para replicar ese fenomeno en una simulacion computacional y construir un algoritmo bioinspirado adaptable.',
        'featured.micelial.impact': 'Propone estrategias de conexion mas resilientes y eficientes que pueden aplicarse a escenarios tecnologicos y sociales donde se requiere adaptacion continua.',
        'featured.micelial.tech1': 'Biomimetica',
        'featured.micelial.tech2': 'Algoritmos Bioinspirados',
        'featured.micelial.tech3': 'Simulacion',
        'featured.micelial.tech4': 'Redes Adaptativas',
        'projects.loading': 'Cargando proyectos...',
        'projects.loadError': 'No se pudieron cargar los proyectos. Por favor, intenta mas tarde.',
        'projects.repoFallback': 'Descripcion no disponible',
        'projects.genericProject': 'Proyecto',
        'projects.collaborative': 'Colaborativo',
        'projects.collaborativeTitle': 'Proyecto colaborativo',
        'common.viewRepository': 'Ver repositorio',
        'about.title': 'Sobre mi',
        'about.profile': 'Perfil',
        'about.description': 'Estudiante de Ingenieria de Computacion con experiencia en el desarrollo de soluciones de software innovadoras tanto en backend como en frontend, aplicando de forma efectiva tecnologias modernas como inteligencia artificial e internet de las cosas. He estado involucrado en todas las etapas del desarrollo de software (requerimientos, diseno, implementacion, pruebas y despliegue) asegurando coherencia tecnica y entrega de valor en cada iteracion y en el producto final. Me interesa crear software practico, de alta calidad y orientado a resolver problemas reales, integrando hardware y software cuando el proyecto lo requiere.',
        'about.cvTitle': 'Descargar hoja de vida / Download curriculum vitae',
        'about.cvEs': 'CV en Espanol',
        'about.cvEn': 'CV in English',
        'about.education': 'Educacion',
        'about.educationItem1': 'Universidad de Caldas | 9no semestre',
        'about.educationItem2': 'SENA',
        'about.languages': 'Idiomas',
        'about.english': 'Ingles',
        'about.spanish': 'Espanol',
        'about.spanishLevel': 'Nativo (C2)',
        'skills.softTitle': 'Habilidades Blandas',
        'skills.techTitle': 'Habilidades Tecnicas',
        'contact.title': 'Contacto',
        'contact.namePlaceholder': 'Tu nombre',
        'contact.emailPlaceholder': 'Tu email',
        'contact.messagePlaceholder': 'Tu mensaje',
        'contact.nameAria': 'Nombre',
        'contact.emailAria': 'Email',
        'contact.messageAria': 'Mensaje',
        'contact.send': 'Enviar',
        'contact.sending': 'Enviando...',
        'contact.requiredError': 'Por favor, completa todos los campos requeridos.',
        'contact.success': 'Mensaje enviado exitosamente! Te contactare pronto.',
        'contact.fieldError': 'Error al enviar el mensaje. Por favor, verifica los campos.',
        'contact.sendError': 'Error al enviar el mensaje. Por favor, intenta nuevamente.',
        'contact.connectionError': 'Error de conexion. Por favor, intenta nuevamente o contactame directamente por email.',
        'footer.license': 'Licencia AGPLv3.',
        'footer.viewLicense': 'Ver licencia',
        'modal.prev': 'Anterior',
        'modal.next': 'Siguiente',
        'gallery.playVideo': 'Reproducir video',
        'theme.aria': 'Cambiar tema',
        'language.aria': 'Cambiar idioma'
    },
    en: {
        'nav.featured': 'Featured',
        'nav.allProjects': 'All my projects',
        'nav.about': 'About me',
        'nav.contact': 'Contact',
        'hero.title': 'Hi, I am Santiago Escobar',
        'hero.role': 'Computer Systems and Engineering Student',
        'hero.subtitle': 'I build and prototype solutions with software, IoT, and artificial intelligence.',
        'hero.cta': 'View projects',
        'sections.featured': 'Featured Projects',
        'sections.allProjects': 'All My Projects',
        'featured.brief.problem': 'Problem:',
        'featured.brief.approach': 'Approach:',
        'featured.brief.impact': 'Quality-of-life impact:',
        'featured.pawplay.title': 'PawPlay Feeder',
        'featured.pawplay.summary': 'Automating cat feeding through gamification to activate their natural instincts.',
        'featured.pawplay.problem': 'Many indoor cats face sedentary lifestyles and obesity due to feeding routines that do not stimulate behavior and movement.',
        'featured.pawplay.approach': 'PawPlay Feeder combines food automation with interaction dynamics to encourage activity and motion.',
        'featured.pawplay.impact': 'It promotes healthier habits, reduces overweight-related risks, and improves the pet\'s daily well-being.',
        'featured.pawplay.tech1': 'Arduino',
        'featured.pawplay.tech2': 'IoT',
        'featured.pawplay.tech3': 'Automation',
        'featured.pawplay.tech4': 'Sensors',
        'featured.vitalcare.title': 'VitalCarePro',
        'featured.vitalcare.summary': 'Smart monitoring for older adults to enable continuous, clear, and timely care.',
        'featured.vitalcare.problem': 'Manual patient follow-up is often fragmented and makes timely decisions harder in geriatric and family care.',
        'featured.vitalcare.approach': 'A platform that captures vital signs with IoT and uses AI support to transform clinical data into clear reports for caregivers and professionals.',
        'featured.vitalcare.impact': 'It improves patient support, enables earlier interventions, and provides greater peace of mind for families and care teams.',
        'featured.vitalcare.tech1': 'Information System',
        'featured.vitalcare.tech2': 'Digital Health',
        'featured.vitalcare.tech3': 'Monitoring',
        'featured.vitalcare.tech4': 'IoT',
        'featured.mcp.title': 'MCP SmartHome',
        'featured.mcp.summary': 'Smart home control powered by AI through MCP, enabling natural-language commands and responses.',
        'featured.mcp.problem': 'Smart homes often require multiple apps and technical commands, creating friction for non-specialized users.',
        'featured.mcp.approach': 'AI via MCP orchestrates different devices from natural-language instructions, with contextual responses in natural language as well.',
        'featured.mcp.impact': 'It introduces a more intuitive and innovative interaction model, reduces daily-task friction, and improves user experience with modern AI tools.',
        'featured.mcp.tech1': 'MCP',
        'featured.mcp.tech2': 'AI',
        'featured.mcp.tech3': 'Natural Language',
        'featured.mcp.tech4': 'IoT',
        'featured.mcp.tech5': 'Smart Integration',
        'featured.micelial.title': 'Micelial Spread',
        'featured.micelial.summary': 'A biomimicry project inspired by fungal organization to design bio-inspired algorithms for efficient network and route formation.',
        'featured.micelial.problem': 'Designing efficient networks and routes in dynamic, changing environments is complex, especially when conditions vary as in soil or human social systems.',
        'featured.micelial.approach': 'Observation of how fungi structure mycelial networks to replicate that phenomenon in a computational simulation and build an adaptable bio-inspired algorithm.',
        'featured.micelial.impact': 'It proposes more resilient and efficient connection strategies that can be applied to technological and social scenarios requiring continuous adaptation.',
        'featured.micelial.tech1': 'Biomimicry',
        'featured.micelial.tech2': 'Bio-inspired Algorithms',
        'featured.micelial.tech3': 'Simulation',
        'featured.micelial.tech4': 'Adaptive Networks',
        'projects.loading': 'Loading projects...',
        'projects.loadError': 'Projects could not be loaded. Please try again later.',
        'projects.repoFallback': 'Description not available',
        'projects.genericProject': 'Project',
        'projects.collaborative': 'Collaborative',
        'projects.collaborativeTitle': 'Collaborative project',
        'common.viewRepository': 'View repository',
        'about.title': 'About me',
        'about.profile': 'Profile',
        'about.description': 'Computer Engineering student with experience building innovative software solutions in both backend and frontend, effectively applying modern technologies such as artificial intelligence and the Internet of Things. I have worked across all software development stages (requirements, design, implementation, testing, and deployment), ensuring technical coherence and value delivery in every iteration and final product. I am interested in building practical, high-quality software focused on solving real problems, integrating hardware and software when needed.',
        'about.cvTitle': 'Download curriculum vitae',
        'about.cvEs': 'CV in Spanish',
        'about.cvEn': 'CV in English',
        'about.education': 'Education',
        'about.educationItem1': 'University of Caldas | 9th semester',
        'about.educationItem2': 'SENA',
        'about.languages': 'Languages',
        'about.english': 'English',
        'about.spanish': 'Spanish',
        'about.spanishLevel': 'Native (C2)',
        'skills.softTitle': 'Soft Skills',
        'skills.techTitle': 'Technical Skills',
        'contact.title': 'Contact',
        'contact.namePlaceholder': 'Your name',
        'contact.emailPlaceholder': 'Your email',
        'contact.messagePlaceholder': 'Your message',
        'contact.nameAria': 'Name',
        'contact.emailAria': 'Email',
        'contact.messageAria': 'Message',
        'contact.send': 'Send',
        'contact.sending': 'Sending...',
        'contact.requiredError': 'Please complete all required fields.',
        'contact.success': 'Message sent successfully! I will contact you soon.',
        'contact.fieldError': 'Error sending message. Please check the fields.',
        'contact.sendError': 'Error sending message. Please try again.',
        'contact.connectionError': 'Connection error. Please try again or contact me directly by email.',
        'footer.license': 'AGPLv3 License.',
        'footer.viewLicense': 'View license',
        'modal.prev': 'Previous',
        'modal.next': 'Next',
        'gallery.playVideo': 'Play video',
        'theme.aria': 'Toggle theme',
        'language.aria': 'Switch language'
    }
};

let currentLanguage = localStorage.getItem('language') || 'es';

function t(key) {
    return (I18N[currentLanguage] && I18N[currentLanguage][key]) || key;
}

function applyTranslations() {
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const value = t(key);
        if (value) {
            el.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        el.setAttribute('placeholder', t(key));
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
        const key = el.dataset.i18nAriaLabel;
        el.setAttribute('aria-label', t(key));
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.dataset.i18nTitle;
        el.setAttribute('title', t(key));
    });

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) themeToggle.setAttribute('aria-label', t('theme.aria'));

    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.setAttribute('aria-label', t('language.aria'));
        languageToggle.classList.toggle('lang-es', currentLanguage === 'es');
        languageToggle.classList.toggle('lang-en', currentLanguage === 'en');
    }
}

function initLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    if (!languageToggle) return;

    applyTranslations();

    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        localStorage.setItem('language', currentLanguage);
        applyTranslations();
        loadProjects();
    });
}

// Repositorios colaborativos adicionales
const COLLABORATIVE_REPOS = [
    'Davidrc26/backend_PAL',
    'Davidrc26/gui-park',
    'Davidrc26/ms-logic-park',
    'Davidrc26/ms-notifications-park',
    'JojhanPerezArroyave/pawplay-feeder'
];

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
    const description = repo.description || t('projects.repoFallback');
    const repoName = escapeHtml(repo.name);
    const repoDescription = escapeHtml(description);
    const repoUrl = repo.html_url;
    const isCollaborative = repo.isCollaborative || false;

    return `
        <div class="project-card ${isCollaborative ? 'collaborative' : ''}">
            <div class="project-header">
                <h3 class="project-title">${repoName}</h3>
                ${isCollaborative ? `<span class="collaborative-badge" title="${escapeHtml(t('projects.collaborativeTitle'))}"><i class="fas fa-users"></i> ${escapeHtml(t('projects.collaborative'))}</span>` : ''}
            </div>
            <p class="project-description">${repoDescription}</p>
            <div class="project-languages">
                ${languages.length > 0 
                    ? languages.map(lang => `<span class="language-badge">${escapeHtml(lang)}</span>`).join('')
                    : `<span class="language-badge">${escapeHtml(t('projects.genericProject'))}</span>`
                }
            </div>
            <a href="${repoUrl}" target="_blank" class="repo-link project-link" rel="noopener noreferrer">
                <i class="fab fa-github"></i> ${escapeHtml(t('common.viewRepository'))}
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

    grid.innerHTML = `<div class="loading">${escapeHtml(t('projects.loading'))}</div>`;
    
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
        grid.innerHTML = `<div class="loading">${escapeHtml(t('projects.loadError'))}</div>`;
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
    toggle.setAttribute('aria-label', t('theme.aria'));

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        toggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        toggle.setAttribute('aria-label', t('theme.aria'));
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
            showFormStatus(t('contact.requiredError'), 'error');
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
                showFormStatus(t('contact.success'), 'success');
                form.reset();
            } else {
                const data = await response.json();
                if (data.errors) {
                    showFormStatus(t('contact.fieldError'), 'error');
                } else {
                    showFormStatus(t('contact.sendError'), 'error');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            showFormStatus(t('contact.connectionError'), 'error');
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
    profileImg.src = './assets/images/profile.png';
    
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

// Funcionalidad de modal para imágenes y videos de proyectos destacados
function initImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.getElementById('modalPrev');
    const nextBtn = document.getElementById('modalNext');

    let activeItems = [];
    let currentIndex = -1;

    function showItem(index) {
        if (!activeItems.length) return;

        currentIndex = (index + activeItems.length) % activeItems.length;
        const item = activeItems[currentIndex];
        if (item.type === 'image') {
            modalImg.src = item.src;
            modalImg.alt = item.alt;
            modalImg.style.display = '';
            modalVideo.pause();
            modalVideo.src = '';
            modalVideo.style.display = 'none';
        } else {
            modalImg.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = item.src;
            modalVideo.play();
        }
    }

    function openGallery(items, index) {
        activeItems = items;
        modal.classList.add('show');
        const hasNavigation = activeItems.length > 1;
        prevBtn.style.display = hasNavigation ? 'flex' : 'none';
        nextBtn.style.display = hasNavigation ? 'flex' : 'none';
        document.body.style.overflow = 'hidden';
        showItem(index);
    }

    function buildCardItems(card) {
        const items = [];

        card.querySelectorAll('.featured-image .project-img, .featured-image .video-thumb').forEach(el => {
            if (el.classList.contains('video-thumb')) {
                if (el.dataset.video) {
                    items.push({ type: 'video', src: el.dataset.video, el });
                }
            } else if (el.src) {
                items.push({ type: 'image', src: el.src, alt: el.alt, el });
            }
        });

        return items;
    }

    // Cada proyecto destacado tiene navegación circular propia.
    document.querySelectorAll('#proyectos-destacados .featured-card').forEach(card => {
        const cardItems = buildCardItems(card);
        if (!cardItems.length) return;

        cardItems.forEach((item, idx) => {
            item.el.addEventListener('click', function () {
                openGallery(cardItems, idx);
            });
        });
    });

    // Botones de navegación
    prevBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        showItem(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        showItem(currentIndex + 1);
    });

    // Cerrar con el botón X
    closeBtn.addEventListener('click', closeModal);

    // Cerrar al hacer clic en el fondo
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    // Teclas: ESC cierra, flechas navegan
    document.addEventListener('keydown', function (e) {
        if (!modal.classList.contains('show')) return;
        if (e.key === 'Escape') closeModal();
        if (activeItems.length > 1 && currentIndex >= 0) {
            if (e.key === 'ArrowRight') showItem(currentIndex + 1);
            if (e.key === 'ArrowLeft')  showItem(currentIndex - 1);
        }
    });

    function closeModal() {
        modal.classList.remove('show');
        modalVideo.pause();
        modalVideo.src = '';
        modalVideo.style.display = 'none';
        modalImg.style.display = '';
        activeItems = [];
        currentIndex = -1;
        document.body.style.overflow = '';
    }
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    loadProjects();
    initThemeToggle();
    initContactForm();
    initScrollAnimation();
    updateCurrentYear();
    loadProfileImage();
    initImageModal();
});
