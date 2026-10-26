# Portafolio Lucciano Zepeda — V04 · Pink Motion

Sitio estático, en español, listo para GitHub Pages. Identidad basada en la referencia enviada: estética editorial-experimental, tipografía contundente, fondo negro, fucsia y violeta. La escultura fluida es una ilustración SVG original de carácter provisional, no una copia de la referencia.

## Contenido
- `index.html`: portada y secciones principales.
- `style.css`: estilos, paleta, tipografía y diseño responsivo.
- `script.js`: pequeña lógica de la página.
- `assets/fluido.svg`: ilustración abstracta de la portada, sustituible por recurso 3D final.
- `assets/favicon.svg`: ícono provisional LZ.
- `proyectos/`: páginas individuales de La Oficina, LEMU, BRICK y DANE.
- `cv/`: CV real en español e inglés.

## Subir a GitHub

1. Abre tu repositorio `https://github.com/javiera-atala/lucciano`.
2. Descomprime el ZIP **en tu equipo**.
3. Sube **todo el contenido** de la carpeta `lucciano-v04` a la raíz del repositorio. Reemplaza los archivos existentes y conserva la estructura `assets/`, `cv/` y `proyectos/`. Lo más sencillo para sustituir carpetas completas es GitHub Desktop o git local.
4. Confirma los cambios (`Commit changes`) en `main`.
5. Si GitHub Pages ya está habilitado en `main` / `(root)`, abre `https://javiera-atala.github.io/lucciano/`.
6. Si no aparece la actualización, revisa `Settings > Pages` y realiza una recarga sin caché.

**No subas el ZIP como si fuera el sitio** y no crees una carpeta extra alrededor de `index.html`.

## Aspectos pendientes antes de considerar la web definitiva
- Confirmar que DANE corresponde al proyecto que Lucciano quiere exhibir, y cuál fue su rol.
- Reemplazar las cuatro portadas tipográficas temporales por piezas reales con autorización.
- Completar casos de estudio con contexto, proceso, autoría y resultados comprobables.
- Comprobar LinkedIn, correo y CV.
- Sustituir ilustración SVG provisional por una pieza 3D original si Lucciano lo desea.
- La disponibilidad laboral no se afirma como hecho verificable en el sitio: confirmar su estado antes de publicar el texto del pie de portada.

## Edición futura
- Cambiar textos y tarjetas: `index.html`.
- Cambiar colores, tamaños y efectos: `style.css` (paleta en `:root`).
- Cambiar contenido de cada caso: `proyectos/*.html`.
- Reemplazar visual abstracto: `assets/fluido.svg`.

No requiere build, Node, bases de datos ni pago de hosting.
