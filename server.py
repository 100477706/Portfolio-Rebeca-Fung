import http.server
import socketserver
import os
import json
from urllib.parse import urlparse, parse_qs
from datetime import datetime
import socket

PORT = 3000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Redirigir raíz a index.html
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()
    
    def do_POST(self):
        if self.path == '/api/enviar-correo':
            content_length = int(self.headers['Content-Length'])
            body = self.rfile.read(content_length).decode('utf-8')
            data = json.loads(body)
            
            try:
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                response = json.dumps({
                    'message': 'Mensaje recibido. Para completar la configuración del correo, por favor sigue las instrucciones en server.py'
                })
                self.wfile.write(response.encode('utf-8'))
                
                print("\n" + "="*60)
                print("MENSAJE RECIBIDO DEL FORMULARIO")
                print("="*60)
                print(f"Nombre: {data.get('nombre')}")
                print(f"Email: {data.get('email')}")
                print(f"Teléfono: {data.get('telefono')}")
                print(f"Asunto: {data.get('asunto')}")
                print(f"Mensaje:\n{data.get('mensaje')}")
                print(f"Fecha: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")
                print("="*60 + "\n")
                
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                response = json.dumps({'message': 'Error al procesar el mensaje'})
                self.wfile.write(response.encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

def get_local_ip():
    """Obtener la dirección IP local"""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        # Conecta a un servidor DNS público (no necesita que esté disponible)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "127.0.0.1"

if __name__ == "__main__":
    # Crear manejador con el directorio actual
    handler = MyHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), handler) as httpd:
            local_ip = get_local_ip()
            
            print("\n" + "="*70)
            print("SERVIDOR WEB INICIADO CORRECTAMENTE ✓")
            print("="*70)
            print(f"\n📱 Accede a tu portfolio en:")
            print(f"\n   🔗 Local:    http://localhost:{PORT}")
            print(f"   🌐 Red:      http://{local_ip}:{PORT}")
            print(f"\n   🔗 Navegador recomendado: Chrome, Firefox, Edge")
            print("\n📝 NOTA IMPORTANTE SOBRE EL FORMULARIO DE CONTACTO:")
            print("   El formulario recibe los mensajes correctamente.")
            print("   Para enviar emails automáticamente, necesitarías configurar")
            print("   un servicio de email (Gmail, SendGrid, etc.)")
            print("\n   Por ahora, los mensajes se mostrarán en esta consola.")
            print("\n🛑 Para detener el servidor: Presiona Ctrl+C")
            print("="*70 + "\n")
            
            httpd.serve_forever()
            
    except OSError as e:
        print(f"\n❌ Error: No se pudo iniciar el servidor en puerto {PORT}")
        print(f"   Detalles: {e}")
        print(f"\n   Posibles soluciones:")
        print(f"   1. El puerto {PORT} ya está en uso")
        print(f"   2. Verifica que no haya otro servidor corriendo")
        print(f"   3. Intenta con un puerto diferente cambiando PORT = 8000")
