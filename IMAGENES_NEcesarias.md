# 📸 Lista de Imágenes Necesarias para el Portafolio

## ✅ Imágenes que DEBES agregar en `assets/images/`

### 1. **Foto de Perfil** (Opcional pero recomendado)
- **Nombre del archivo**: `profile.jpg` o `profile.png`
- **Ruta completa**: `assets/images/profile.jpg`
- **Tamaño recomendado**: 400x400px o 600x600px (cuadrada)
- **Formato**: JPG (mejor compresión) o PNG (mejor calidad)
- **Peso máximo**: 200KB (optimizar para web)
- **Uso**: Se mostrará en la sección Hero reemplazando el ícono de código
- **Nota**: Si no la agregas, se mostrará el ícono de código por defecto

### 2. **Favicon** (Recomendado)
- **Nombre del archivo**: `favicon.ico`
- **Ruta completa**: `assets/images/favicon.ico`
- **Tamaño**: 32x32px o 16x16px
- **Formato**: ICO (recomendado) o PNG
- **Uso**: Icono que aparece en la pestaña del navegador
- **Alternativas opcionales**:
  - `favicon-32x32.png` (32x32px)
  - `favicon-16x16.png` (16x16px)

### 3. **Open Graph Image** (Opcional)
- **Nombre del archivo**: `og-image.jpg` o `og-image.png`
- **Ruta completa**: `assets/images/og-image.jpg`
- **Tamaño recomendado**: 1200x630px (formato 1.91:1)
- **Formato**: JPG o PNG
- **Peso máximo**: 300KB
- **Uso**: Imagen que se muestra al compartir el portafolio en redes sociales (Facebook, Twitter, LinkedIn, etc.)
- **Nota**: Si no la agregas, las redes sociales usarán una imagen por defecto

## 📁 Estructura Final de Carpetas

```
korpi-zip.github.io/
├── assets/
│   └── images/
│       ├── profile.jpg          ← AGREGAR AQUÍ
│       ├── favicon.ico          ← AGREGAR AQUÍ
│       ├── favicon-32x32.png    ← Opcional
│       ├── favicon-16x16.png    ← Opcional
│       └── og-image.jpg         ← AGREGAR AQUÍ (opcional)
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 🎨 Herramientas Recomendadas para Crear/Optimizar Imágenes

### Para Favicon:
- [Favicon Generator](https://favicon.io/) - Genera favicons desde texto o imagen
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Generador completo de favicons

### Para Optimizar Imágenes:
- [TinyPNG](https://tinypng.com/) - Comprime PNG y JPG sin perder calidad
- [Squoosh](https://squoosh.app/) - Compresor avanzado de imágenes
- [ImageOptim](https://imageoptim.com/) - Para Mac

### Para Open Graph Image:
- [Canva](https://www.canva.com/) - Crea imágenes 1200x630px fácilmente
- [Figma](https://www.figma.com/) - Herramienta de diseño profesional

## ⚠️ Notas Importantes

1. **Todas las imágenes son opcionales**: El portafolio funcionará perfectamente sin ellas
2. **Rutas relativas**: Todas las rutas están configuradas para funcionar en GitHub Pages
3. **Optimización**: Siempre optimiza las imágenes antes de subirlas para mejorar el rendimiento
4. **Nombres exactos**: Usa los nombres exactos especificados para que funcionen correctamente
5. **GitHub Pages**: Las imágenes se cargarán automáticamente cuando subas los archivos al repositorio

## ✅ Checklist

- [ ] Agregar `profile.jpg` en `assets/images/`
- [ ] Agregar `favicon.ico` en `assets/images/`
- [ ] Agregar `og-image.jpg` en `assets/images/` (opcional)
- [ ] Optimizar todas las imágenes
- [ ] Verificar que los nombres de archivo sean exactos
- [ ] Probar localmente antes de subir a GitHub

## 🚀 Compatibilidad con GitHub Pages

✅ **Todo está configurado para funcionar en GitHub Pages:**
- Rutas relativas (`./assets/images/...`)
- URLs absolutas para Open Graph (con dominio completo)
- Sin dependencias de build process
- Compatible con estructura estática de GitHub Pages
