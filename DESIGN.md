---
name: Pedro Roa – Computer Technology
description: Negro casi puro con cuadrícula tenue, Geist apretada, píldoras blancas y un único verde luminoso que solo se enciende cuando el visitante elige; los servicios flotan en 3D.
colors:
  ground: "#0a0a0a"
  surface: "#111214"
  surface-2: "#181a1d"
  ink: "#fafafa"
  ink-2: "#a3a6ab"
  rule: "#25272a"
  rail: "#3a3d42"
  stop-ring: "#8b8f95"
  accent: "#5cff9d"
  accent-ink: "#04130a"
typography:
  display:
    fontFamily: "Geist, Geist Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 5.2vw, 4.6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, Geist Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 6vw, 3.4rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Geist, Geist Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geist, Geist Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist, Geist Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.01em"
rounded:
  focus: "8px"
  brand: "10px"
  field: "12px"
  card: "14px"
  panel: "20px"
  pill: "999px"
spacing:
  gutter-sm: "20px"
  gutter-md: "32px"
  gutter-lg: "48px"
  max: "1180px"
  section: "88px"
  bar-h: "76px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  chip-service:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
    height: "36px"
  card-float:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  panel-terminal:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "30px 32px 28px"
  field:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    height: "50px"
    padding: "0 16px"
  banda:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    padding: "34px 48px"
  banda-hover:
    backgroundColor: "{colors.surface}"
  note-box:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "24px"
---

# Design System: Pedro Roa – Computer Technology

## Overview

**Creative North Star: "El Diagrama de Rutas, de noche"**

El sitio conserva la idea de un plano de rutas (síntomas como paradas, una estación final, Pedro), pero ahora la interfaz es monocroma: negro casi puro (#0a0a0a) con una cuadrícula de 56 px apenas visible detrás de la portada, texto blanco y una sola tipografía, Geist, fina y apretada. El color no vive en la interfaz: viene de las fotos de los servicios. El único color de marca es un verde luminoso que se enciende solo cuando el visitante elige algo.

La densidad es baja y la jerarquía sale del tamaño y del contraste (blanco frente a gris), no de mayúsculas ni de rótulos. Los servicios de la portada flotan como tarjetas inclinadas en perspectiva 3D, siguen al puntero y derivan despacio solas; son la única pieza espectacular, y todo lo demás es plano y quieto.

**Key Characteristics:**
- Interfaz monocroma sobre #0a0a0a; el verde (#5cff9d) aparece solo en paradas elegidas, puntos del mensaje, el orbe de la estación, foco y selección de texto.
- Geist variable, sentence case, tracking -0.04em en títulos.
- Botones en píldora blancos; el contorno fantasma como alternativa.
- Tarjetas de servicio en 3D con parallax por puntero y deriva lenta, detenida con `prefers-reduced-motion`.
- Móvil primero: barra fija inferior con WhatsApp y Llamar, objetivos de 44 px o más (salvo las excepciones anotadas abajo).

## Colors

Paleta de un solo tono neutro más un acento: negro, tres escalones de gris, texto blanco y un verde que se gana su aparición.

### Primary
- **Verde Estación** (accent): único acento. Parada elegida (relleno con halo), puntos de cada línea del mensaje, orbe de la estación, anillo de foco, borde de campo en foco y color de selección de texto.
- **Tinta Verde** (accent-ink): texto sobre selección en verde.

### Neutral
- **Negro Casi Puro** (ground): fondo de página, encabezado, cajón, barra fija y centro de las paradas.
- **Superficie** (surface): terminal, cajas de nota, marcos de foto, hover de bandas.
- **Superficie 2** (surface-2): enlace de navegación activo.
- **Blanco** (ink): texto principal, botones primarios, líneas del icono.
- **Gris Suave** (ink-2): párrafos de apoyo y metadatos.
- **Filete** (rule): divisores de 1 px y bordes de paneles.
- **Riel** (rail): línea vertical de 2 px que une paradas, pasos y modos; contorno de los chips de servicio.
- **Aro de Parada** (stop-ring): borde de 2 px de las paradas sin elegir.

### Named Rules
**The Verde-Que-Se-Gana Rule.** El verde solo se enciende como respuesta a una elección del visitante (parada, punto del mensaje) o como marca de la estación (orbe). No colorea titulares, botones, enlaces ni rellenos decorativos.
**The Interfaz-Monocroma Rule.** Todo lo demás es negro, gris o blanco; el color entra por las fotos y la esfera verde de las tarjetas de texto.

## Typography

**Display / Body / Label Font:** Geist variable 300–700 (con Geist Fallback de métricas ajustadas, Helvetica Neue, Arial)

**Character:** una sola familia que cambia de voz por tamaño y gris: títulos grandes, apretados y de peso medio; texto corrido en 400 con gris suave. Sentence case siempre.

### Hierarchy
- **Display** (500, clamp(2.6rem, 5.2vw, 4.6rem) en escritorio y 9.5vw hasta 5.2rem en celular, 0.98): h1 de portada; el h1 de servicio llega a 5rem; el h2 de cierre a 5rem.
- **Headline** (500, clamp(2rem, 6vw, 3.4rem), 1.02): h2 de sección; h3 de banda hasta 2.7rem.
- **Title** (500, 1.5rem, 1.02): pasos, modos, estaciones (hasta 2.2rem) y título de la terminal (2rem).
- **Body** (400, 1.0625rem, 1.6): texto corrido, máximo 64ch, gris suave en párrafos secundarios.
- **Label** (500, 0.95–1rem, -0.01em): botones, navegación, chips de servicio. Paradas en 1.1rem con tracking -0.02em.

### Named Rules
**The Apretado-Fino Rule.** Todo título de h1 a h4 va en peso 500 con tracking -0.04em y sentence case; nunca mayúsculas ni negritas pesadas.

## Layout

Contenedor `.wrap` de 1180 px máximo con gutter de 20 px (celular), 32 px (desde 720 px) y 48 px (desde 1100 px). El punto de quiebre estructural es 900 px: debajo, navegación en cajón y barra fija inferior (76 px) con WhatsApp y Llamar; encima, navegación en línea y WhatsApp en el encabezado.

La portada es una rejilla 5fr/7fr en escritorio (titular a la izquierda, escenario 3D de 560 px a la derecha); en celular, titular y debajo un escenario de 380 px. El mapa de síntomas pasa de una columna a cuatro (gap 28 px) con la terminal de ancho completo debajo, en dos columnas. Las páginas de servicio llevan cabecera 7fr/5fr con foto inclinada, trayecto de estaciones (máx. 860 px) y texto local en dos columnas. Ritmo vertical entre secciones: 88 px (96 px antes del cierre).

## Elevation & Depth

Plano y tonal, con una excepción: la profundidad real (eje Z) solo la tienen las tarjetas flotantes de la portada y la foto inclinada de las páginas de servicio. Todo lo demás se separa con un escalón de gris y un filete de 1 px.

### Shadow Vocabulary
- **Tarjeta flotante** (`box-shadow: 0 24px 48px rgba(0,0,0,0.55)`; en hover `0 30px 60px rgba(0,0,0,0.7)`): sombra suave y ancha que asienta tarjetas 3D y la foto de cabecera.
- **Halo de parada** (`0 0 0 5px rgba(92,255,157,0.16), 0 0 18px rgba(92,255,157,0.5)`): resplandor verde de la parada elegida.
- **Orbe** (`0 0 28px rgba(92,255,157,0.35)`): brillo de la estación.
- **Contorno fantasma** (`inset 0 0 0 1px rgba(255,255,255,0.28)`; hover blanco pleno): borde de botón fantasma.

### Named Rules
**The Profundidad-Solo-En-La-Portada Rule.** Perspectiva, inclinación y sombra amplia pertenecen a las tarjetas de servicio y a la foto de cabecera; paneles, bandas y campos se quedan planos.

## Shapes

Píldora y panel: botones, chips de servicio y enlaces de navegación totalmente redondos (999 px); tarjetas flotantes 14 px; terminal, cajas de nota y marcos de foto 20 px; campos 12 px; marca 10 px; anillo de foco 8 px. Paradas, pasos y modos son círculos de 14 px con aro de 2 px sobre un riel de 2 px. Las esferas verdes (orbe de 44 px, punto de 18 px en tarjetas de texto) son radiales con brillo en el cuadrante superior izquierdo.

## Components

### Buttons
- **Shape:** píldora (999 px), alto mínimo 52 px (44 px en el encabezado), Geist 500 a 1rem.
- **Primary (`btn-wa`, `btn-ink`):** fondo blanco, texto negro; hover con halo blanco de 4 px al 12 %, solo con puntero fino.
- **Ghost:** transparente con contorno interior blanco al 28 %, hover a contorno blanco pleno.
- **Press:** escala 0.97 en 140 ms con `cubic-bezier(0.23, 1, 0.32, 1)`.

### Tarjetas flotantes (signature)
Ocho tarjetas 16:10 (seis con foto, dos de texto con esfera verde) dispuestas con variables `--x --y --w --z --ry --rz` dentro de un escenario con `perspective: 1100px`. El contenedor rota hasta 9° en Y y 5° en X según el puntero (solo ratón); sin puntero deriva entre ±8° en 14 s con alternancia, y esa animación solo existe con `prefers-reduced-motion: no-preference`. Hover o foco adelantan la tarjeta 70 px y la enderezan; una etiqueta píldora blanca bajo el escenario muestra el nombre de la tarjeta activa. La octava tarjeta solo aparece desde 900 px.

### Parada y mensaje (signature)
Botón de fila de 56 px mínimo con círculo de 14 px y aro gris sobre el riel; al elegirse se rellena de verde, crece 1.2 y gana halo. La terminal (panel de 20 px, orbe verde, lista de puntos verdes con el viaje, campo y botón blanco de WhatsApp) arma el mensaje con las paradas elegidas.

### Navigation
Barra superior pegajosa en negro al 92 % con filete inferior; enlaces en píldora gris suave, el activo en Superficie 2 y blanco. En celular, botón de menú circular de 46 px con contorno al 28 % y un cajón a pantalla completa (filas de 68 px, 1.7rem) que entra con fundido y 8 px de desplazamiento en 200 ms.

### Bandas, trayecto y FAQ
- **Banda de índice:** ancho completo, filete superior, hover a Superficie con flecha que se desplaza 6 px.
- **Proceso / modos / estaciones:** riel de 2 px con círculos con aro por paso.
- **FAQ:** `details` con filetes y signo más dibujado que rota 45° en 220 ms.
- **Foto:** marco de 20 px; en secciones en escala de grises (`grayscale(1) contrast(1.1) brightness(0.85)`), a color e inclinada en la cabecera de servicio.

### Movimiento
Un solo easing, `cubic-bezier(0.23, 1, 0.32, 1)`, con 140–220 ms en la interfaz y 400–600 ms en el escenario 3D. Con `prefers-reduced-motion: reduce` el desplazamiento suave se desactiva y toda transición o animación baja a 0.01 ms.

## Do's and Don'ts

### Do:
- **Do** usar solo negro, grises y blanco en la interfaz y reservar el verde (#5cff9d) para elecciones del visitante y la estación.
- **Do** componer títulos en Geist 500, sentence case y tracking -0.04em.
- **Do** hacer los botones en píldora blanca (52 px) y la acción de WhatsApp a un toque.
- **Do** limitar la profundidad 3D y la sombra amplia a las tarjetas flotantes y la foto de cabecera.
- **Do** dejar el color a las fotos y mantener las fotos de sección en escala de grises.
- **Do** respetar `prefers-reduced-motion` y usar el easing `cubic-bezier(0.23, 1, 0.32, 1)`.

### Don't:
- **Don't** pintar botones, enlaces o titulares de verde ni añadir un segundo acento.
- **Don't** volver a las cuatro líneas de color, a Barlow Condensed, a Atkinson ni a los títulos en mayúsculas del sistema anterior.
- **Don't** poner cifras, métricas o reseñas inventadas en la interfaz.
- **Don't** aplicar perspectiva o inclinación a paneles, bandas, campos o texto corrido.
- **Don't** hacer depender la tarjeta 3D del puntero: debe funcionar con el dedo y con teclado (foco).

Defectos de la construcción que no se canonizan: `--k`, `--i` y `data-line` se siguen generando en `build.mjs` y copiándose en `site.js`, pero ya no tienen estilo en `site.css`; los enlaces de línea (`.linea-nombre a`, 36 px) y del pie (`.foot a`, 36 px) quedan bajo el objetivo táctil de 44 px; y el hover de `.btn-ink` (#ffffff) apenas se distingue del reposo (#fafafa).
