---
name: Pedro Roa – Computer Technology
description: Diagrama de rutas de diagnóstico; cuatro líneas de color que terminan en una sola estación amarilla, Pedro.
colors:
  ground: "#f3f4f1"
  paper: "#ffffff"
  ink: "#12161b"
  ink-2: "#444c55"
  rule: "#d3d7d1"
  signal-yellow: "#ffd21f"
  yellow-hover: "#ffe066"
  line-azul: "#1565d8"
  line-naranja: "#b34f00"
  line-verde: "#0e7a43"
  line-rojo: "#c62833"
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
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "52px"
  button-wa-hover:
    backgroundColor: "{colors.yellow-hover}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "52px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "52px"
  line-chip:
    backgroundColor: "{colors.line-azul}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    height: "36px"
    padding: "0 14px"
  terminal:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "22px 18px 20px"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "10px"
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

El sitio se lee como el plano de un sistema de transporte público: cada síntoma es una parada, cada servicio es una línea de color, y las cuatro líneas llegan a una sola estación terminal, Pedro. La superficie es un gris banco de taller (#f3f4f1) con tinta casi negra; el color vive solo en las líneas y en el amarillo señal. Es directo, de señalética, pensado para leerse a plena luz desde el celular.

La densidad es baja y la jerarquía es de rótulo: títulos condensados en mayúsculas, texto largo en una sans de máxima legibilidad. Las formas son planas, con contornos de tinta de 2 px y rieles gruesos de 10 px; la profundidad se resuelve con color y borde, no con sombra.

**Key Characteristics:**
- Cuatro líneas de color (azul, naranja, verde, rojo) con un solo color activo por página mediante `--c` / `--k`.
- Amarillo señal reservado para la estación terminal, el botón principal de WhatsApp, el cierre y la selección de texto.
- Rieles de 10 px con paradas circulares con aro: hueco = disponible, lleno = elegida.
- Bordes de tinta de 2 px como estructura; sin sombras de elevación.
- Móvil primero: barra fija inferior con WhatsApp y Llamar, objetivos táctiles de 44 px o más.

## Colors

Paleta de señalética: fondo neutro cálido-frío, tinta casi negra, cuatro colores de línea saturados y un amarillo de aviso.

### Primary
- **Amarillo Señal** (#ffd21f): botón principal de WhatsApp, la estación terminal, la banda de cierre y la selección de texto. Con texto de tinta. Hover a #ffe066.

### Secondary (las cuatro líneas)
- **Línea Azul** (#1565d8): mantenimiento y servicios técnicos; color por defecto (`--c`).
- **Línea Naranja** (#b34f00): computadores a la medida y GPU.
- **Línea Verde** (#0e7a43): impresoras y soporte remoto.
- **Línea Roja** (#c62833): software y periféricos.

Cada línea tiñe su riel, su chip, su banda de índice y el hero de su página; texto blanco encima.

### Neutral
- **Banco de Taller** (#f3f4f1): fondo de página, encabezado y barra fija.
- **Papel** (#ffffff): centro de paradas, campos, cajas de nota y tablas.
- **Tinta** (#12161b): texto, bordes de 2 px, botón oscuro, rieles de proceso.
- **Tinta Suave** (#444c55): texto secundario y párrafos de apoyo.
- **Filete** (#d3d7d1): divisores finos de 1 px.

### Named Rules
**The Un-Solo-Amarillo Rule.** El amarillo señala la acción y la estación final; no se usa como resaltador de titulares ni como relleno decorativo.
**The Línea-Por-Página Rule.** Una página de servicio usa una sola línea de color (`data-line`); el resto del chrome es tinta y neutros.

## Typography

**Display Font:** Barlow Condensed 600/700/800 (con Barlow Fallback de métricas ajustadas, Arial Narrow)
**Body Font:** Atkinson Hyperlegible 400/700 (con Atkinson Fallback, system-ui)

**Character:** Rótulo de estación frente a texto de manual: condensada y contundente para nombrar paradas y líneas, hiperlegible para explicar.

### Hierarchy
- **Display** (800, clamp(2.7rem, 10.5vw, 4.9rem), 0.92): h1 de portada, en mayúsculas; el h1 de servicio llega a 5.4rem.
- **Headline** (800, clamp(2rem, 6vw, 3.2rem), 1): h2 de sección, en mayúsculas.
- **Title** (700, 1.32rem–2.3rem, 1.3 / 1): paradas, estaciones, pasos y preguntas (summary 1.45rem).
- **Body** (400, 1.0625rem, 1.6): texto corrido, máximo 68ch.
- **Label** (800, 1.25rem, 0.01em, mayúsculas): botones, nombre de línea, navegación (700, 1.08rem).

### Named Rules
**The Rótulo Rule.** Display y títulos van en Barlow Condensed en mayúsculas; el texto corrido nunca va en condensada.

## Layout

Contenedor `.wrap` de 1180 px máximo con gutter de 16 px (celular), 28 px (desde 720 px) y 40 px (desde 1100 px). El punto de quiebre estructural es 900 px: debajo, navegación en cajón y barra fija inferior (`--bar-h` 72 px) con WhatsApp y Llamar; encima, navegación en línea y botón de WhatsApp en el encabezado.

El mapa de portada pasa de una línea apilada a cuatro columnas verticales (gap 28 px) que bajan juntas hacia la estación terminal de ancho completo. Las páginas de servicio llevan un hero a color de línea (7fr/5fr en escritorio), el trayecto de estaciones (máx. 880 px), texto local en dos columnas y cierre amarillo. Las bandas de índice son de ancho completo con contenido alineado al contenedor. Ritmo vertical entre secciones: 48, 64 y 72 px.

## Elevation & Depth

Plano por defecto: la profundidad se expresa con bloques de color, bordes de tinta de 2 px y anillos concéntricos, no con sombras difusas. Las únicas `box-shadow` son anillos de estado: el foco y la parada elegida (anillo papel + anillo de línea), y el contorno interior del botón fantasma.

### Named Rules
**The Borde-No-Sombra Rule.** Separa superficies con borde de 2 px o cambio de color; el anillo de foco (3 px tinta + 6 px amarillo) es el único realce con halo.

## Shapes

Lenguaje de pastilla y señal: botones y chips totalmente redondos (999 px), contenedores grandes en 16–18 px, campos 10 px, marca 10 px, elementos de navegación 8 px. Paradas = círculo de 22 px con aro de 5 px; rieles = barra de 10 px con extremos redondeados. Las fotos van en monocromo multiplicado sobre el color de su línea, con esquinas de 18 px.

## Components

### Buttons
- **Shape:** pastilla completa (999 px), alto mínimo 52 px (44 px en el encabezado), Barlow Condensed 800 en mayúsculas.
- **Primary (`btn-wa`):** amarillo señal con tinta; hover #ffe066 solo con puntero.
- **Secondary:** `btn-ink` (tinta con texto blanco, hover #2a323b) y `btn-ghost` (contorno interior de 2 px, hover invierte a tinta).
- **Press:** escala 0.97 en 140 ms con `cubic-bezier(0.23, 1, 0.32, 1)`.

### Parada (signature)
Botón de fila de 52 px mínimo con círculo hueco sobre el riel; al elegirse el círculo se llena de tinta, crece 1.12 y gana anillo papel + color de línea; el texto se subraya en color de línea.

### Estación terminal (signature)
Bloque amarillo con borde de tinta de 2 px y radio 18 px (0 0 18px 18px en escritorio, uniéndose al mapa). Contiene el resumen del viaje, un campo blanco de 48 px y el botón de envío por WhatsApp con mensaje redactado.

### Navigation
Barra superior pegajosa sobre Banco de Taller con filete inferior de tinta de 2 px; enlaces en Barlow 700 mayúsculas con punto del color de su línea y subrayado interior de 3 px en la página actual. En celular, botón de menú de 48 px y cajón a pantalla con filas de 64 px y barra de color por línea.

### Bandas, estaciones y pruebas
- **Banda de índice:** ancho completo en color de línea, borde de tinta de 2 px arriba y abajo, flecha que se desplaza 6 px en hover.
- **Trayecto / proceso / modos:** riel de 10 px con círculo con aro por paso.
- **FAQ:** `details` con filetes de 2 px, indicador circular y signo más que rota 45 grados.
- **Caja de nota y tabla:** papel con borde de 2 px, radio 16 px; encabezados de tabla en Barlow mayúsculas.

## Do's and Don'ts

### Do:
- **Do** usar una sola línea de color por página de servicio y amarillo solo en acción y estación final.
- **Do** mantener objetivos táctiles de 44 px o más y la acción de WhatsApp a un toque (barra fija en celular).
- **Do** estructurar con bordes de tinta de 2 px, rieles de 10 px y paradas con aro.
- **Do** poner las fotos en monocromo sobre el color de su línea.
- **Do** usar el easing `cubic-bezier(0.23, 1, 0.32, 1)` con duraciones de 120–220 ms.

### Don't:
- **Don't** volver a la plantilla oscura «terminal/cyber» con tarjetas iguales de icono.
- **Don't** usar resaltador amarillo en titulares.
- **Don't** poner cifras, métricas o reseñas inventadas en la interfaz.
- **Don't** usar sombras de elevación; usa borde o color.
- **Don't** componer texto corrido en Barlow Condensed.
