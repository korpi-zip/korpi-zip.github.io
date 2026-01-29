# Configuración de Formspree para el Formulario de Contacto

## Pasos para Configurar Formspree

### 1. Crear una cuenta en Formspree
1. Ve a [https://formspree.io/](https://formspree.io/)
2. Crea una cuenta gratuita (o inicia sesión si ya tienes una)
3. El plan gratuito permite hasta 50 envíos por mes

### 2. Crear un nuevo formulario
1. Una vez dentro de tu cuenta, haz clic en **"New Form"** o **"Crear Formulario"**
2. Asigna un nombre al formulario (ej: "Portafolio Contacto")
3. Formspree te generará un **Form ID** único

### 3. Configurar el Form ID en el código
1. Abre el archivo `script.js`
2. Busca la línea que dice:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
3. Reemplaza `YOUR_FORM_ID` con tu Form ID de Formspree
   - Ejemplo: `const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpzgqkny';`

### 4. Configurar el email de destino
1. En el panel de Formspree, ve a la configuración de tu formulario
2. En **"Email"** o **"Correo"**, agrega tu email: `santiescoal@gmail.com`
3. Guarda los cambios

### 5. Probar el formulario
1. Abre tu sitio web localmente o en GitHub Pages
2. Completa el formulario de contacto
3. Envía un mensaje de prueba
4. Verifica que recibas el email en `santiescoal@gmail.com`

## Estructura del Formulario

El formulario envía los siguientes campos:
- **name**: Nombre del remitente
- **email**: Email del remitente
- **message**: Mensaje

## Personalización Adicional (Opcional)

### Agregar más campos
Si quieres agregar más campos al formulario:

1. Agrega el campo en `index.html`:
   ```html
   <input type="text" name="subject" placeholder="Asunto" required>
   ```

2. Formspree recibirá automáticamente el nuevo campo

### Configurar notificaciones
En Formspree puedes:
- Configurar emails de notificación
- Agregar webhooks
- Configurar respuestas automáticas
- Ver estadísticas de envíos

## Solución de Problemas

### El formulario no envía
- Verifica que el Form ID sea correcto
- Asegúrate de que el email esté configurado en Formspree
- Revisa la consola del navegador (F12) para ver errores

### Límite de envíos alcanzado
- El plan gratuito permite 50 envíos/mes
- Considera actualizar a un plan de pago si necesitas más

### No recibes los emails
- Verifica la carpeta de spam
- Confirma que el email esté correctamente configurado en Formspree
- Revisa la configuración de email en Formspree

## Seguridad

- Formspree incluye protección contra spam automáticamente
- Los formularios están protegidos por reCAPTCHA (opcional)
- Puedes configurar whitelist de dominios en la configuración

## Enlaces Útiles

- [Documentación de Formspree](https://help.formspree.io/)
- [Panel de Formspree](https://formspree.io/forms)
- [Precios y Planes](https://formspree.io/plans)

---

**Nota**: Recuerda reemplazar `YOUR_FORM_ID` en `script.js` con tu Form ID real de Formspree para que el formulario funcione correctamente.
