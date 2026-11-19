# Portafolio de Voz — Dennys Marquez

Portafolio web bilingüe (ES/EN) de una sola página, listo para abrir en el navegador y desplegar como sitio estático. No necesita dependencias ni instalar Node.

## Comenzar

1. Abre `index.html` con Chrome, Edge o Firefox.
2. Alterna `ES / EN` para ver ambos idiomas.
3. Pulsa el control de cualquier muestra pendiente para previsualizar una grabación local. **Esto NO publica ni sube el archivo.**
4. Descarga el CV desde la sección Contacto.

## Cómo hacer que tus audios sean públicos

1. Graba o exporta tus demos reales en MP3 (ideal para web; guarda WAV de alta calidad para los clientes que lo soliciten).
2. Copia los audios a `assets/audio/` y usa estos nombres o los que prefieras:
   - `voz-natural.mp3`
   - `lectura-frases.mp3`
   - `mezcla-vocal.mp3`
   - `narracion.mp3`
3. Abre `app.js` y cambia las rutas vacías al principio:

```javascript
const publishedAudio = {
  natural: 'assets/audio/voz-natural.mp3',
  scripted: 'assets/audio/lectura-frases.mp3',
  mix: 'assets/audio/mezcla-vocal.mp3',
  expressive: 'assets/audio/narracion.mp3'
};
```

4. Abre `index.html` o despliega toda la carpeta a Cloudflare Pages, Netlify o GitHub Pages.
5. Al publicar, cambia el texto de aviso de muestras pendientes por información real si procede.

**Importante:** las grabaciones de clientes, pruebas de Shujiajia y trabajos para artistas locales pueden estar sujetos a condiciones de confidencialidad y derechos de autor. Publica solo muestras propias o con autorización del titular.

## Personalización

- `index.html`: estructura, enlaces de correo y CV, etiquetas y secciones.
- `styles.css`: paleta, tipografías y composición.
- `app.js`: textos ES/EN y reproductores.
- `assets/cv`: copias de los CV en PDF, ya incluidas.

El correo de contacto es `dennys.marquez.dev@gmail.com`. Verifícalo antes de publicar. No se inventaron reseñas, clientes, métricas ni audios. Las muestras se habilitan al cargar un archivo local o publicar una grabación real.

## Sugerencias de grabación

- **Voz natural:** 30–45 segundos de presentación espontánea.
- **Lectura de frases:** 30–45 segundos, dicción clara y ritmo natural.
- **Mezcla vocal:** 30–60 segundos de un trabajo con permiso para compartir.
- **Narración expresiva:** 30–45 segundos de texto original y distintas intenciones.

Para muestras de voz destinadas a IA, entrega audio sin procesar si el cliente lo exige; no añadas compresión, EQ ni masterización salvo indicación expresa.
