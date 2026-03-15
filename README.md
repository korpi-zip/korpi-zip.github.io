# Portafolio Personal - Santiago Escobar

Portafolio profesional moderno y responsivo que se actualiza dinámicamente con los repositorios públicos de GitHub. Compatible 100% con GitHub Pages.

## Características

✨ **Actualizaciones automáticas** desde GitHub API  
🎨 **Diseño moderno** con paleta Neon/Tech  
🌓 **Modo claro/oscuro** con persistencia  
📱 **Completamente responsive**  
⚡ **Animaciones suaves** y transiciones elegantes  
🔧 **Sin dependencias externas** (HTML, CSS, JS puro)  
💻 **Optimizado para desarrolladores**  
🚀 **Listo para GitHub Pages**

## Estructura

```
korpi-zip.github.io/
├── index.html          # Estructura HTML
├── styles.css          # Estilos con variables CSS
├── script.js           # Lógica y API de GitHub
├── assets/             # Imágenes e iconos
│   ├── icons/
│   └── images/
└── README.md           # Este archivo
```

## Instalación

1. **Clonar o descargar** este repositorio
2. **Abrir** `index.html` en tu navegador
3. **Personalizar** según tus datos (ver próxima sección)

## Personalización

### Cambiar usuario de GitHub

En `script.js`, línea 1:
```javascript
const GITHUB_USER = 'tu-usuario-github'; // Cambiar aquí
```

### Editar información personal

En `index.html`:

- **Nombre**: Busca "Santiago Escobar" y reemplaza
- **Descripción hero**: Edita el párrafo en la sección `.hero-subtitle`
- **Sobre mí**: Modifica el contenido en la sección `#about`
- **Habilidades**: Actualiza los badges en `.skills-badges`
- **Timeline**: Edita los items en `.timeline-item`
- **Email de contacto**: Cambia el `href="mailto:tu@email.com"`
- **LinkedIn**: Actualiza el link de LinkedIn en la sección de contacto

### Personalizar colores

En `styles.css`, variables CSS (`:root`):
```css
:root {
    --primary: #00d4ff;      /* Color principal (cian) */
    --secondary: #ff006e;    /* Color secundario (magenta) */
    --accent: #8b5cf6;       /* Color acentuado (púrpura) */
    --bg-dark: #0f0f1e;      /* Fondo oscuro */
    /* ... más variables */
}
```

También puedes modificar los valores en `body.light-mode` para el tema claro.

### Agregar descripciones automáticas personalizadas

En `script.js`, objeto `keywords` dentro de `generateDescription()`:
```javascript
const keywords = {
    'test': 'Suite de testing automatizado para validación de código.',
    'api': 'Interfaz REST robusta y escalable.',
    // Agrega más descripciones específicas
};
```

## Características avanzadas

### GitHub API
- Carga automática de repositorios públicos
- Filtra forks automáticamente
- Ordena por fecha de actualización
- Extrae lenguajes de programación (top 5)
- Genera descripciones si no existen
- Optimizado con `Promise.all` para cargar lenguajes en paralelo

### Animaciones
- Fade in al cargar
- Slide in en el hero
- Float del ícono tech
- Hover effects en tarjetas
- Scroll animations con IntersectionObserver
- Animaciones escalonadas en las tarjetas de proyectos

### Tema oscuro/claro
- Alternancia con botón en navbar
- Persistencia en localStorage
- Transiciones suaves
- Paletas optimizadas para cada modo
- Compatible con preferencias del sistema (futuro)

## Desplegar

### GitHub Pages (Recomendado)

1. **Sube los archivos** a un repositorio llamado `tu-usuario.github.io`
2. Ve a **Settings** > **Pages** en tu repositorio
3. Selecciona la rama `main` (o `master`)
4. El sitio se desplegará automáticamente en `https://tu-usuario.github.io`

**Nota**: Si tu repositorio se llama diferente, el sitio estará en `https://tu-usuario.github.io/nombre-repo/`

### Netlify

1. Conecta tu repositorio en [netlify.com](https://netlify.com)
2. Selecciona la rama `main`
3. Deploy automático en cada push

### Vercel

1. Carga el repositorio en [vercel.com](https://vercel.com)
2. Vercel detecta automáticamente la estructura
3. Se despliega al hacer push

## Compatibilidad

Este proyecto es compatible con:
- ✅ GitHub Pages (100%)
- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Dispositivos móviles y tablets
- ✅ Sin necesidad de build process
- ✅ Sin dependencias de Node.js

### Tecnologías utilizadas
- HTML5 semántico
- CSS3 con variables CSS
- JavaScript ES6+ (async/await, fetch API)
- Font Awesome (CDN) para iconos
- IntersectionObserver API para animaciones

## Optimizaciones sugeridas

- 🖼️ Agregar imagen de perfil en hero
- 📊 Añadir estadísticas (commits, stars, etc.) desde GitHub API
- 🎬 Incluir videos o demos de proyectos
- 📈 Implementar analytics con Google Analytics
- ♿ Mejorar accesibilidad (ARIA labels adicionales)
- 🔍 SEO optimizado para buscadores (meta tags)
- ⚡ Lazy loading de imágenes si se agregan
- 🔄 Service Worker para modo offline

## Solución de problemas

### Los proyectos no se cargan
- Verifica que el usuario de GitHub sea correcto en `script.js`
- Revisa la consola del navegador para errores
- Asegúrate de que la API de GitHub esté accesible (puede haber rate limiting)

### El tema no persiste
- Verifica que localStorage esté habilitado en tu navegador
- Revisa la consola para errores de JavaScript

### Las animaciones no funcionan
- Verifica que tu navegador soporte IntersectionObserver
- Navegadores muy antiguos pueden no soportar esta API

## Licencia

GNU AGPLv3 - Copyleft fuerte: si distribuyes o publicas versiones modificadas (incluido como servicio web), debes mantener el codigo fuente abierto bajo la misma licencia. Consulta el archivo LICENSE para el texto completo.

---

**Actualizado**: 2024  
**Desarrollado con ❤️ por Santiago Escobar**
