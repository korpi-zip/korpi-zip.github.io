# Instrucciones para Completar la Sección "Proyectos Convocatoria Minciencias"

## 📋 Resumen
Se ha creado una nueva sección en tu página web para mostrar los proyectos de la Convocatoria Minciencias. Esta sección incluye dos proyectos:

1. **Sistema Automatizado de Alimentación para Gatos**
2. **Sistema de Información para el Cuidado de Adultos Mayores** (Hogar Gloria)

## 🖼️ Pasos para Agregar Imágenes

### 1. Preparar las imágenes
- Guarda las imágenes de tus proyectos en formato `.jpg`, `.png` o `.webp`
- Tamaño recomendado: 800x600 píxeles o similar (formato horizontal)
- Optimiza las imágenes para web (peso recomendado: < 500KB cada una)

### 2. Copiar las imágenes
Coloca las imágenes en la carpeta: `assets/images/`

Nombres recomendados:
- `alimentador-gatos.jpg` (o .png)
- `signos-vitales.jpg` (o .png)

### 3. Actualizar las rutas en el HTML
Abre el archivo `index.html` y busca estas líneas (aproximadamente línea 88 y 115):

**Para el proyecto del alimentador de gatos:**
```html
<img src="./assets/images/alimentador-gatos-placeholder.jpg"
```
Reemplaza `alimentador-gatos-placeholder.jpg` por el nombre real de tu imagen:
```html
<img src="./assets/images/alimentador-gatos.jpg"
```

**Para el proyecto de signos vitales:**
```html
<img src="./assets/images/signos-vitales-placeholder.jpg"
```
Reemplaza `signos-vitales-placeholder.jpg` por el nombre real de tu imagen:
```html
<img src="./assets/images/signos-vitales.jpg"
```

## 🔗 Pasos para Agregar Links a los Repositorios

### 1. Obtén las URLs de tus repositorios
- Ve a GitHub y copia las URLs completas de los repositorios
- Ejemplo: `https://github.com/tu-usuario/nombre-del-repo`

### 2. Actualizar los links en el HTML
Busca estas líneas en `index.html`:

**Para el alimentador de gatos (aproximadamente línea 106):**
```html
<a href="#" class="repo-link" target="_blank" rel="noopener noreferrer">
```
Reemplaza `#` con la URL de tu repositorio:
```html
<a href="https://github.com/tu-usuario/alimentador-gatos" class="repo-link" target="_blank" rel="noopener noreferrer">
```

**Para signos vitales (aproximadamente línea 133):**
```html
<a href="#" class="repo-link" target="_blank" rel="noopener noreferrer">
```
Reemplaza `#` con la URL de tu repositorio:
```html
<a href="https://github.com/tu-usuario/signos-vitales-hogar-gloria" class="repo-link" target="_blank" rel="noopener noreferrer">
```

### 3. Opcional: Eliminar las notas de ayuda
Una vez que agregues los links reales, puedes eliminar las líneas que dicen:
```html
<span class="link-note">(Agrega el link aquí)</span>
```

## ✏️ Personalizar Descripciones (Opcional)

Si deseas cambiar las descripciones de los proyectos, busca los elementos con clase `project-description` en el HTML y edita el texto a tu gusto.

## 🎨 Estilo de las Imágenes

Las imágenes se mostrarán en un espacio de 300px de altura mínima. Si no hay imagen, aparecerá un placeholder con un ícono y texto indicativo.

## 🧪 Probar tu Página

Después de hacer los cambios:
1. Abre `index.html` en tu navegador
2. Navega a la sección "Proyectos Convocatoria Minciencias"
3. Verifica que las imágenes se muestren correctamente
4. Haz clic en los enlaces para asegurarte de que dirijan a los repositorios correctos

## 📱 Vista Responsiva

La sección está optimizada para verse bien en dispositivos móviles. En pantallas pequeñas, las tarjetas de proyectos se mostrarán de forma vertical (imagen arriba, contenido abajo).

## 💡 Consejos Adicionales

- Puedes agregar más tecnologías en los badges modificando las etiquetas `<span class="tech-badge">`
- Si tienes más de dos proyectos de Minciencias, puedes duplicar la estructura de una tarjeta `.minciencias-card`
- Los colores y animaciones ya están configurados para que coincidan con el resto de tu sitio web

---

¿Necesitas ayuda adicional? Revisa los comentarios en el código HTML o contacta con el desarrollador.
