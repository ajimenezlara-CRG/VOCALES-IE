# 📘 Vocales E e I — App Web Educativa (PWA)

Aplicación web interactiva para practicar las vocales **E** e **I** mediante palabras, iconos y audio.  
Diseñada para niños y adultos que están aprendiendo a leer o reforzando la discriminación auditiva y visual.

Funciona como **PWA (Progressive Web App)**:  
✔️ Se instala como una app en iPhone y Android  
✔️ Funciona sin conexión  
✔️ Se actualiza automáticamente cuando se suben cambios  
✔️ No necesita permisos especiales  

---

## 🚀 Características

- 10 palabras aleatorias por partida  
- Iconos SVG integrados (sin imágenes externas)  
- Definiciones en **negrita** para mayor claridad  
- Botones para completar la palabra con *e* o *i*  
- Voz integrada (speechSynthesis)  
- Sonidos de acierto y error  
- Estadísticas acumuladas (localStorage)  
- Funciona offline gracias al Service Worker  
- Compatible con iOS, Android, Windows, macOS y Linux  

---

## 📱 Instalación como App

### **iPhone / iPad (Safari)**

1. Abre la URL del proyecto.
2. Pulsa el botón **Compartir**.
3. Selecciona **Añadir a pantalla de inicio**.
4. La app aparecerá como una aplicación más.

### **Android (Chrome)**

1. Abre la URL del proyecto.
2. Chrome mostrará un banner: **Instalar aplicación**.
3. Si no aparece: menú ⋮ → **Añadir a pantalla de inicio**.

---

## 🛠 Archivos principales

| Archivo | Función |
|--------|---------|
| `index.html` | Interfaz y lógica principal de la app |
| `manifest.webmanifest` | Configuración de la PWA |
| `service-worker.js` | Caché offline + actualización automática |
| `icon-192.png` | Icono para Android y PWA |
| `icon-512.png` | Icono de alta resolución |

---

## 🔄 Actualización automática

El archivo `service-worker.js` está configurado para:

- Cachear los archivos esenciales  
- Detectar cambios en el repositorio  
- Actualizar la app automáticamente  
- Activarse sin esperar a que el usuario cierre la app  

Para forzar una nueva versión, solo cambia el número:

```js
const CACHE_NAME = 'vocales-ei-v4';
