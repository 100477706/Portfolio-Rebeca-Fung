╔══════════════════════════════════════════════════════════════════════════════╗
║                     PORTFOLIO WEB - INFORMACIÓN DE ACCESO                     ║
╚══════════════════════════════════════════════════════════════════════════════╝

✅ SERVIDOR INICIADO CORRECTAMENTE

📍 DIRECCIÓN PARA ACCEDER A TU PORTFOLIO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   🔗 LOCAL (en tu máquina):
      http://localhost:3000
   
   🌐 RED (desde otro dispositivo):
      http://172.31.176.1:3000

   Notas:
   - Toma un poco de tiempo para que el servidor responda en la primera carga
   - Si no funciona con 172.31.176.1, intenta con tu IP local real
   - Para encontrar tu IP en Windows, abre CMD y ejecuta: ipconfig

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 CARACTERÍSTICAS IMPLEMENTADAS:

✓ Portada elegante con gradiente y animaciones
✓ Navegación fija que aparece al hacer scroll
✓ Sección de Fotografía con 2 carruseles automáticos:
  - Bloque de EVENTOS (cambio automático cada 5 segundos)
  - Bloque de PAISAJES (cambio automático cada 5 segundos)
✓ Botones para navegar manualmente entre fotos
✓ Indicadores de posición en los carruseles
✓ Formulario de contacto completo
✓ Diseño responsive para móviles, tablets y escritorio
✓ Animaciones suaves y transiciones

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🖼️  PERSONALIZACIÓN:

Para cambiar las imágenes de los carruseles:
1. Abre el archivo: index.html
2. Busca las secciones "carrusel-eventos" y "carrusel-paisajes"
3. Reemplaza las URLs de placeholder.com con tus fotos
4. Coloca tus imágenes en una carpeta /images y referencia localmente

Ejemplo: src="images/evento1.jpg"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 FORMULARIO DE CONTACTO:

Actualmente, el formulario muestra mensajes recibidos en la consola del servidor.
Para recibir emails reales, puedes:

Opción 1: Configurar Gmail (requiere contraseña de app):
- Edita server.py y busca EMAIL_CONFIG
- Sigue: https://support.google.com/accounts/answer/185833
- Reemplaza los valores de sender_email, sender_password y recipient_email

Opción 2: Usar un servicio como SendGrid, Mailgun, etc.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📂 ESTRUCTURA DE ARCHIVOS:

Portfolio-Rebeca-Fung/
├── index.html          (Página principal - estructura HTML)
├── styles.css          (Estilos y diseño)
├── script.js           (Funcionalidad de carruseles y formulario)
├── server.py           (Servidor web local)
├── requirements.txt    (Dependencias)
└── README.md           (Este archivo)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎨 COLORES UTILIZADOS:

Primario:     #2D3436 (Gris oscuro)
Secundario:   #FF6B9D (Rosa / Magenta)
Acento:       #6C5B7B (Púrpura)
Fondo claro:  #F5F6FA (Gris muy claro)

Puedes cambiar estos colores en el archivo styles.css buscando :root

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛑 DETENER EL SERVIDOR:

En VS Code:
1. Busca el terminal donde está corriendo el servidor
2. Presiona Ctrl+C para detenerlo

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 PRÓXIMOS PASOS:

1. Abre tu navegador y ve a: http://localhost:3000
2. Prueba el carrusel de fotos (automático y botones)
3. Prueba el menú de navegación
4. Prueba el formulario de contacto
5. Personaliza las imágenes y colores según tus necesidades

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

¿Necesitas ayuda? Revisa:
- Consola de navegador (F12) para errores JavaScript
- Terminal de VS Code para errores del servidor
- Los comentarios en los archivos de código

¡Disfruta tu portfolio! 🎉
