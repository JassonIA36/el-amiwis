---
name: Pedro Roa – Computer Technology
description: Diagrama de rutas de diagnóstico en tema grafito; cuatro líneas de color que terminan en una sola estación hielo, Pedro.
colors:
  ground: "#0e1217"
  paper: "#171c23"
  surface-2: "#202732"
  ink: "#e8edf3"
  ink-2: "#a8b2bf"
  rule: "#2b333e"
  ice: "#e4ecf6"
  ice-ink: "#0b0f14"
  ink-button-hover: "#1c2430"
  line-azul: "#4f8cff"
  line-naranja: "#e5a23c"
  line-verde: "#33c3a3"
  line-rojo: "#f26b76"
typography:
  display:
    fontFamily: "Barlow Condensed, Barlow Fallback, Arial Narrow, sans-serif"
    fontSize: "clamp(2.7rem, 10.5vw, 4.9rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Barlow Condensed, Barlow Fallback, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 6vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Barlow Condensed, Barlow Fallback, Arial Narrow, sans-serif"
    fontSize: "1.32rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.005em"
  body:
    fontFamily: "Atkinson Hyperlegible, Atkinson Fallback, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Barlow Condensed, Barlow Fallback, Arial Narrow, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    letterSpacing: "0.01em"
rounded:
  sm: "8px"
  field: "10px"
  md: "12px"
  lg: "16px"
  xl: "18px"
  pill: "999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "28px"
  gutter-lg: "40px"
  max: "1180px"
  rail: "10px"
components:
  button-wa:
    backgroundColor: "{colors.ice}"
    textColor: "{colors.ice-ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "52px"
  button-ink:
    backgroundColor: "{colors.ice-ink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.ink-button-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "52px"
  line-chip:
    backgroundColor: "{colors.line-azul}"
    textColor: "{colors.ice-ink}"
    rounded: "{rounded.pill}"
    height: "36px"
    padding: "0 14px"
  banda:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "34px 16px 22px"
  banda-hover:
    backgroundColor: "{colors.surface-2}"
  page-header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "52px 16px 40px"
  terminal:
    backgroundColor: "{colors.ice}"
    textColor: "{colors.ice-ink}"
    rounded: "{rounded.xl}"
    padding: "22px 18px 20px"
  field:
    backgroundColor: "#ffffff"
    textColor: "{colors.ice-ink}"
    rounded: "{rounded.field}"
    height: "48px"
  note-box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "20px"
---

# Design System: Pedro Roa – Computer Technology

## Overview

**Creative North Star: "El Diagrama de Rutas"**

El sitio se lee como el plano de un sistema de transporte público: cada síntoma es una parada, cada servicio es una línea de color, y las cuatro líneas llegan a una sola estación terminal, Pedro. La superficie es un grafito azulado (#0e1217) con texto casi blanco; el color vive solo en los rieles de las cuatro líneas y en un único acento hielo. Es señalética nocturna: sobria, directa, legible en el celular.

La densidad es baja y la jerarquía es de rótulo: títulos condensados en mayúsculas, texto largo en una sans de máxima legibilidad. La profundidad es tonal: tres escalones de grafito (fondo, papel, superficie 2) separados por filetes de 1 px, sin sombras de elevación. Las bandas de índice y las cabeceras de página son oscuras con un riel de color en el borde superior; el color de línea nunca llena un bloque grande.

**Key Characteristics:**
- Cuatro líneas de color en tonos sobrios de indicador (azul, ámbar, verde agua, coral), con una sola activa por página mediante `--c` / `--k`.
- Un solo acento, hielo (#e4ecf6), para el botón principal de WhatsApp, la estación terminal y la banda de cierre.
- Rieles de 10 px con paradas circulares con aro: hueco = disponible, lleno = elegida.
- Bandas y cabeceras oscuras con riel de color arriba (10 px en bandas, 12 px en cabeceras de página).
- Móvil primero: barra fija inferior con WhatsApp y Llamar, objetivos táctiles de 44 px o más.

## Colors

Paleta grafito: tres escalones oscuros, texto frío claro, cuatro colores de línea y un acento hielo casi blanco.

### Primary
- **Hielo** (#e4ecf6): único acento. Botón principal de WhatsApp, estación terminal, banda de cierre y anillo de foco. Siempre con texto Tinta de Hielo.
- **Tinta de Hielo** (#0b0f14): texto sobre hielo y sobre los chips de línea; también el fondo del botón oscuro.

### Secondary (las cuatro líneas)
- **Línea Azul** (#4f8cff): mantenimiento y servicios técnicos; color por defecto (`--c`).
- **Línea Ámbar** (#e5a23c): computadores a la medida y GPU.
- **Línea Verde Agua** (#33c3a3): impresoras y soporte remoto.
- **Línea Coral** (#f26b76): software y periféricos.

Cada línea tiñe su riel, su chip (con texto Tinta de Hielo), el riel superior de su banda y de la cabecera de su página, y el punto de navegación.

### Neutral
- **Grafito** (#0e1217): fondo de página, encabezado, cajón y barra fija.
- **Papel Grafito** (#171c23): bandas, cabeceras de página, cajas de nota, tablas y centro de las paradas.
- **Superficie 2** (#202732): hover de bandas y de enlaces de navegación.
- **Texto** (#e8edf3): texto principal, aros de paradas y rieles de proceso.
- **Texto Suave** (#a8b2bf): párrafos de apoyo y metadatos.
- **Filete** (#2b333e): divisores de 1 px.

### Named Rules
**The Un-Solo-Hielo Rule.** El hielo es el único acento: señala la acción y la estación final. No se usa para resaltar titulares ni como relleno decorativo, y no se añade un segundo acento.
**The Línea-Por-Página Rule.** Una página de servicio usa una sola línea de color (`data-line`); el resto del chrome es grafito y texto.
**The Riel-No-Relleno Rule.** El color de línea aparece como riel, punto, chip o aro; las bandas y cabeceras no se rellenan con él.

## Typography

**Display Font:** Barlow Condensed 600/700/800 (con Barlow Fallback de métricas ajustadas, Arial Narrow)
**Body Font:** Atkinson Hyperlegible 400/700 (con Atkinson Fallback, system-ui)

**Character:** Rótulo de estación frente a texto de manual: condensada y contundente para nombrar paradas y líneas, hiperlegible para explicar.

### Hierarchy
- **Display** (800, clamp(2.7rem, 10.5vw, 4.9rem), 0.92): h1 de portada, en mayúsculas; el h1 de servicio llega a 5.4rem.
- **Headline** (800, clamp(2rem, 6vw, 3.2rem), 1): h2 de sección, en mayúsculas.
- **Title** (700, 1.32rem–2.3rem, 1.3 / 1): paradas, estaciones, pasos y preguntas (summary 1.45rem).
- **Body** (400, 1.0625rem, 1.6): texto corrido, máximo 68ch.
- **Label** (800, 1.25rem, 0.01em, mayúsculas): botones, nombre de línea; navegación en 700, 1.08rem.

### Named Rules
**The Rótulo Rule.** Display y títulos van en Barlow Condensed en mayúsculas; el texto corrido nunca va en condensada.

## Layout

Contenedor `.wrap` de 1180 px máximo con gutter de 16 px (celular), 28 px (desde 720 px) y 40 px (desde 1100 px). El punto de quiebre estructural es 900 px: debajo, navegación en cajón y barra fija inferior (`--bar-h` 72 px) con WhatsApp y Llamar; encima, navegación en línea y botón de WhatsApp en el encabezado.

El mapa de portada pasa de una línea apilada a cuatro columnas verticales (gap 28 px) que bajan juntas hacia la estación terminal de ancho completo. Las páginas de servicio llevan una cabecera oscura con riel de color (7fr/5fr en escritorio), el trayecto de estaciones (máx. 880 px), texto local en dos columnas y cierre hielo. Las bandas de índice son de ancho completo con contenido alineado al contenedor. Ritmo vertical entre secciones: 48, 64 y 72 px.

## Elevation & Depth

Plano y tonal: la profundidad sale de los escalones grafito (fondo, papel, superficie 2) y de filetes de 1 px, no de sombras difusas. Las únicas `box-shadow` son rieles y anillos de estado: el riel superior inset de bandas (10 px) y cabeceras (12 px), el anillo de la parada elegida (anillo papel + anillo de línea) y el contorno interior del botón fantasma.

### Named Rules
**The Tono-No-Sombra Rule.** Separa superficies con un escalón de grafito o un filete de 1 px; el anillo de foco (outline de 3 px en hielo, offset 3 px) es el único realce de interacción.

## Shapes

Lenguaje de pastilla y señal: botones y chips totalmente redondos (999 px), contenedores grandes en 16–18 px, campos 10 px, marca 10 px, botón de menú 12 px, enlaces de navegación 8 px. Paradas = círculo de 22 px con aro de 5 px; rieles = barra de 10 px con extremos redondeados. Las fotos van en monocromo (en la portada multiplicadas sobre el color de línea; en cabeceras de página, grises con filete) con esquinas de 18 px.

## Components

### Buttons
- **Shape:** pastilla completa (999 px), alto mínimo 52 px (44 px en el encabezado), Barlow Condensed 800 en mayúsculas.
- **Primary (`btn-wa`):** hielo con Tinta de Hielo.
- **Secondary:** `btn-ink` (Tinta de Hielo con texto claro, hover #1c2430 solo con puntero) y `btn-ghost` (contorno interior de 2 px en texto, hover invierte a texto claro sobre Tinta de Hielo).
- **Press:** escala 0.97 en 140 ms con `cubic-bezier(0.23, 1, 0.32, 1)`.

### Parada (signature)
Botón de fila de 52 px mínimo con círculo de centro papel y aro claro sobre el riel; al elegirse el círculo se llena, crece 1.12 y gana anillo papel + color de línea; el texto se subraya en color de línea.

### Estación terminal (signature)
Bloque hielo de radio 18 px (0 0 18px 18px en escritorio, uniéndose al mapa). Contiene el resumen del viaje, un campo blanco de 48 px con borde de 2 px y el botón de envío por WhatsApp con mensaje redactado. Es una de las pocas superficies claras del sitio.

### Navigation
Barra superior pegajosa sobre Grafito con filete inferior de 1 px; enlaces en Barlow 700 mayúsculas con punto del color de su línea, subrayado interior de 3 px en la página actual y hover en Superficie 2. En celular, botón de menú de 48 px con contorno de 2 px y un cajón a pantalla completa (filas de 64 px, barra de color por línea) que entra con fundido y desplazamiento de 8 px en 200 ms con el easing del sistema; el icono del menú se transforma en equis en 200 ms.

### Bandas, cabeceras y pruebas
- **Banda de índice:** ancho completo en Papel Grafito, filete superior de 1 px y riel de color de 10 px arriba; hover a Superficie 2 y flecha que se desplaza 6 px (200 ms).
- **Cabecera de página:** Papel Grafito con riel de color de 12 px arriba y filete inferior.
- **Trayecto / proceso / modos:** riel de 10 px con círculo con aro por paso (en proceso y modos el riel es del color de texto; en el trayecto, del color de línea).
- **FAQ:** `details` con filetes de 1 px, indicador circular y signo más que rota 45 grados (220 ms).
- **Caja de nota y tabla:** Papel Grafito con borde de 1 px, radio 16 px; encabezados de tabla en Barlow mayúsculas sobre Grafito.

### Movimiento
Un solo easing, `cubic-bezier(0.23, 1, 0.32, 1)`, con duraciones de 120 a 220 ms. Con `prefers-reduced-motion: reduce` el desplazamiento suave se desactiva y toda transición o animación baja a 0.01 ms.

## Do's and Don'ts

### Do:
- **Do** usar una sola línea de color por página de servicio y el hielo solo en la acción principal, la estación final y el cierre.
- **Do** mantener objetivos táctiles de 44 px o más y la acción de WhatsApp a un toque (barra fija en celular).
- **Do** estructurar con escalones de grafito, filetes de 1 px, rieles de 10 px y paradas con aro.
- **Do** dar a bandas y cabeceras fondo oscuro con riel de color arriba.
- **Do** poner las fotos en monocromo.
- **Do** usar el easing `cubic-bezier(0.23, 1, 0.32, 1)` con duraciones de 120–220 ms y respetar `prefers-reduced-motion`.

### Don't:
- **Don't** llenar bandas o cabeceras con un color de línea saturado.
- **Don't** añadir un segundo acento ni volver al amarillo anterior.
- **Don't** usar la plantilla oscura «terminal/cyber» con tarjetas iguales de icono.
- **Don't** poner cifras, métricas o reseñas inventadas en la interfaz.
- **Don't** usar sombras de elevación; usa un escalón de grafito o un filete.
- **Don't** componer texto corrido en Barlow Condensed.
