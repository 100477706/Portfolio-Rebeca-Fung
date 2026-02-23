╔══════════════════════════════════════════════════════════════════════════════╗
║              GUÍA DE PERSONALIZACIÓN DEL PORTFOLIO                            ║
╚══════════════════════════════════════════════════════════════════════════════╝

Aquí encontrarás todas las instrucciones para personalizar tu portfolio.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 1. CONFIGURAR EL FORMULARIO DE CONTACTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tu formulario está configurado con Formspree (servicio gratuito).
Actualmente usa un ID de ejemplo. Aquí te muestro cómo cambiarla:

PASO 1: Ve a https://formspree.io
PASO 2: Crea una cuenta gratis (con tu email de Gmail)
PASO 3: Crea un nuevo formulario
PASO 4: Copia tu código de formulario que se parece a:
        https://formspree.io/f/xxxxxxxx
        
PASO 5: Abre index.html y busca la línea:
        <form class="contacto-form" id="contactoForm" action="https://formspree.io/f/xvgzqqdj"

PASO 6: Reemplaza "xvgzqqdj" con tu código

Ejemplo:
  DE: action="https://formspree.io/f/xvgzqqdj"
  A:  action="https://formspree.io/f/abc123def"

¡Listo! Cuando envíen el formulario, recibirás emails en tu cuenta de Formspree.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🖼️  2. CAMBIAR LAS IMÁGENES DEL CARRUSEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OPCIÓN A: Usar fotos locales
─────────────────────────────

1. Coloca tus imágenes en: Portfolio-Rebeca-Fung/images/
   Estructura recomendada:
   - images/eventos/evento1.jpg
   - images/eventos/evento2.jpg
   - images/paisajes/paisaje1.jpg
   - etc.

2. Abre index.html
3. Busca "carrusel-eventos" y "carrusel-paisajes"
4. Reemplaza las líneas:
   DE: <img src="https://via.placeholder.com/600x400/FF6B9D/FFFFFF?text=Evento+1" ...>
   A:  <img src="images/eventos/evento1.jpg" ...>

Ejemplo completo:
  DE: <img src="https://via.placeholder.com/600x400/FF6B9D/FFFFFF?text=Evento+1" alt="Evento 1" class="carrusel-img">
  A:  <img src="images/eventos/boda.jpg" alt="Boda" class="carrusel-img">

OPCIÓN B: Usar fotos de Internet
────────────────────────────────

1. Obtén la URL de una imagen (click derecho > Copiar URL de imagen)
2. Reemplaza el src de la etiqueta img:
   <img src="https://ejemplo.com/mi-foto.jpg" alt="Mi foto" class="carrusel-img">

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 3. CAMBIAR COLORES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Abre el archivo: styles.css

Busca la sección :root (está al inicio) y verás:

:root {
    --primary-color: #2D3436;      (Gris oscuro)
    --secondary-color: #FF6B9D;    (Rosa/Magenta)
    --accent-color: #6C5B7B;       (Púrpura)
    --text-color: #2D3436;         (Color del texto)
    --light-bg: #F5F6FA;           (Fondo claro)
    --white: #FFFFFF;              (Blanco)
}

Cambia los códigos de color (formato hexadecimal #XXXXXX):

Ejemplo: Cambiar color principal a azul
  DE: --primary-color: #2D3436;
  A:  --primary-color: #0066CC;

Sitios recomendados para buscar códigos de color:
- https://colorpicker.com
- https://www.color-hex.com
- https://coolors.co

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✏️  4. CAMBIAR TEXTOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Abre index.html y busca estos textos para cambiarlos:

Portada:
  - <h1 class="hero-title">Rebeca Fung</h1>
  - <p class="hero-subtitle">Fotografía Profesional</p>
  - <p class="hero-description">Capturando momentos, creando historias</p>

Secciones:
  - <h3 class="block-title">Eventos</h3>
  - <h3 class="block-title">Paisajes</h3>

Contacto:
  - <p id="email-display">contact@example.com</p>
  - <p>Tu localización aquí</p>

Simplemente reemplaza el texto entre las etiquetas con lo que desees.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️  5. CAMBIAR VELOCIDAD DE CARRUSEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Abre script.js

Busca esta línea (aproximadamente línea 68):
  }, 5000); // Cambiar cada 5 segundos

5000 = milisegundos (5000ms = 5 segundos)

Cambiar velocidad:
  3000 = 3 segundos (más rápido)
  8000 = 8 segundos (más lento)
  10000 = 10 segundos (muy lento)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔧 6. AGREGAR MÁS FOTOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Para agregar más imágenes al carrusel:

1. Abre index.html
2. Busca <div class="carrusel" id="carrusel-eventos">
3. Agrega más líneas de <img> dentro:

Ejemplo: Agregar una 5ª foto de eventos
  Agregar esta línea:
  <img src="images/eventos/evento5.jpg" alt="Evento 5" class="carrusel-img">

Puedes agregar cuantas fotos quieras.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 7. INFORMACIÓN DE CONTACTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Abre index.html y busca la sección "contacto-info"

Cambia:
  <p id="email-display">contact@example.com</p>
  Por tu email real

  <p>Tu localización aquí</p>
  Por tu ciudad/ubicación real

Para agregar más información (teléfono, redes sociales, etc.):

Agrega un nuevo bloque info-item:
  
  <div class="info-item">
      <h4>Teléfono</h4>
      <p>+1 (555) 123-4567</p>
  </div>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 8. ARCHIVOS CLAVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- index.html      → Estructura y contenido (textos, imágenes)
- styles.css      → Estilos visuales y colores
- script.js       → Funcionalidad (carruseles, animaciones)
- server.py       → Servidor web (no necesitas editar)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 CONSEJOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Guarda copias de tus archivos antes de hacer cambios grandes
✓ Prueba los cambios en el navegador presionando Ctrl+R para recargar
✓ Si algo se ve mal, usa F12 para abrir las herramientas de desarrollador
✓ Los cambios en CSS se ven inmediatamente al recargar
✓ Los cambios en HTML requieren recargar también
✓ Si el servidor deja de funcionar, ejecuta: python server.py de nuevo

¡Diviértete personalizando tu portfolio! 🎉
