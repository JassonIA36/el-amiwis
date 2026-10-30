// Genera las cinco páginas del sitio de Pedro Roa a partir de un solo lugar (contenido + componentes).
// Uso: node scripts/build.mjs   (escribe index.html y las páginas de servicio en la raíz)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Dirección pública del sitio. Cámbiala aquí cuando Pedro tenga su dominio definitivo y vuelve a ejecutar el script.
const SITE = 'https://pedroroatech.vercel.app';
const WA = '573024555428';
const TEL = '+57 302 4555428';
const MAIL = 'pedroroae@gmail.com';
const FECHA = '2026-10-29';

const waLink = (texto) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

const ICON = {
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 4v-4A2.5 2.5 0 0 1 4 13.5z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
  right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
};

// ---------------------------------------------------------------- líneas
const LINEAS = [
  {
    id: 'azul', k: 'azul', nombre: 'Mantenimiento y reparación', corto: 'Mantenimiento', page: 'servicios-tecnicos.html',
    resumen: 'Limpieza, pasta térmica, optimización, reparación de fallas y upgrades de SSD, memoria y refrigeración.',
    paradas: [
      ['Va muy lento', 'Tarda en arrancar o se congela'],
      ['Se calienta o suena fuerte', 'Los ventiladores no paran o se apaga'],
      ['Pantalla azul o se reinicia', 'Errores, cuelgues y reinicios solos'],
      ['No enciende', 'No da imagen o no prende'],
      ['Quiero más memoria o un SSD', 'Mejorar la velocidad de mi equipo'],
    ],
  },
  {
    id: 'naranja', k: 'naranja', nombre: 'PC a la medida y GPU', corto: 'PC a la medida', page: 'computadoras-gpu.html',
    resumen: 'Computadores armados según lo que haces y tu presupuesto, y asesoría para elegir tu tarjeta gráfica.',
    paradas: [
      ['Quiero armar un PC', 'Para trabajar, jugar o estudiar'],
      ['Quiero elegir o cambiar mi GPU', 'NVIDIA o AMD según mi uso'],
      ['Necesito una estación de trabajo', 'Render, 3D, edición o arquitectura'],
    ],
  },
  {
    id: 'verde', k: 'verde', nombre: 'Impresoras y soporte remoto', corto: 'Impresoras y remoto', page: 'impresoras-soporte-remoto.html',
    resumen: 'Impresoras de tinta continua y láser, y ayuda inmediata por AnyDesk sin que tengas que moverte.',
    paradas: [
      ['La impresora no imprime o sale con rayas', 'Tinta continua o láser'],
      ['Configurar la impresora en red', 'Controladores y conexión'],
      ['Necesito ayuda ahora por AnyDesk', 'Soporte remoto desde donde estés'],
    ],
  },
  {
    id: 'rojo', k: 'rojo', nombre: 'Software y periféricos', corto: 'Software', page: 'software-perifericos.html',
    resumen: 'Formateo, virus, licencias originales de Windows y Office, y teclados, ratones y monitores.',
    paradas: [
      ['Formatear o quitar virus', 'Instalación limpia con respaldo'],
      ['Licencia de Windows u Office', 'Activación original'],
      ['Teclado, mouse o monitor', 'Asesoría y venta'],
    ],
  },
];

// Tarjetas que flotan en la portada: [clase, enlace, nombre, imagen (o null = tarjeta de texto)]
const TARJETAS = [
  ['t1', 'servicios-tecnicos.html', 'Cambio de pasta térmica', 'pasta'],
  ['t2', 'servicios-tecnicos.html', 'Upgrade de SSD', 'ssd'],
  ['t3', 'computadoras-gpu.html', 'PC a la medida', 'pc'],
  ['t4', 'computadoras-gpu.html', 'Tarjetas gráficas', 'gpu'],
  ['t5', 'impresoras-soporte-remoto.html', 'Impresoras de tinta continua', 'ecotank'],
  ['t6', 'impresoras-soporte-remoto.html', 'Impresoras láser', 'laser'],
  ['t7', 'software-perifericos.html', 'Software y licencias', null],
  ['t8', 'impresoras-soporte-remoto.html', 'Soporte remoto', null],
];

// ---------------------------------------------------------------- preguntas frecuentes (inicio)
const FAQ = [
  ['¿Cuánto cuesta el mantenimiento de un computador en Bogotá?',
    'Depende del equipo (portátil o torre) y de lo que necesite: limpieza y cambio de pasta térmica, un upgrade o una reparación. Escríbenos por WhatsApp con la marca y el modelo y te damos un presupuesto exacto, sin compromiso.'],
  ['¿Prestan servicio técnico de computadores a domicilio en Bogotá?',
    'Sí. Pedro hace el diagnóstico y el servicio en tu casa u oficina en Bogotá. Escríbenos tu barrio o localidad para confirmar la cobertura y las condiciones del domicilio. Si la reparación exige microelectrónica o pruebas prolongadas, el equipo se lleva al laboratorio y se devuelve calibrado.'],
  ['¿Cuánto demora la reparación o el mantenimiento?',
    'Depende del trabajo: un mantenimiento o un cambio de memoria o SSD no se parece a la reparación de una tarjeta madre o al ensamble de un computador a la medida, que necesitan pruebas de estabilidad. Al darte el presupuesto, Pedro te confirma el plazo de tu caso.'],
  ['¿Los servicios y componentes tienen garantía?',
    'Sí. Los trabajos de reparación, mantenimiento y los repuestos tienen garantía por escrito, y recibes un informe técnico. La duración depende del tipo de trabajo y queda indicada en el presupuesto.'],
  ['¿Qué marcas y tipos de equipos atienden?',
    'Todas las marcas líderes de computadores y portátiles (Asus, Lenovo, Dell, HP, Acer, Apple Mac, MSI y otras), además de torres personalizadas y computadores de escritorio armados para gaming, arquitectura y oficina.'],
  ['¿Cómo funciona el soporte técnico remoto por AnyDesk?',
    'Es una conexión rápida para resolver fallas de software, virus, configuración de impresoras o licencias sin salir de casa. Descargas AnyDesk, autorizas el acceso temporal y ves en tu pantalla cada paso que Pedro realiza, en tiempo real. Puedes cortar la sesión cuando quieras.'],
  ['¿Cómo puedo pagar?',
    'En efectivo, por transferencia bancaria, Nequi o Daviplata.'],
];

// ---------------------------------------------------------------- páginas de servicio
const PAGINAS = {
  'servicios-tecnicos.html': {
    linea: 'azul',
    h1: 'Mantenimiento de computadores y reparación de portátiles en Bogotá',
    lead: 'Limpieza, cambio de pasta térmica, optimización y reparación de fallas. A domicilio en Bogotá, en laboratorio o por AnyDesk.',
    wa: 'Hola Pedro, vi tu página de mantenimiento y reparación. Quiero consultar por mi equipo:',
    localTitulo: 'Técnico de computadores en Bogotá',
    local: [
      'Somos especialistas en mantenimiento de computadores en Bogotá y reparación de portátiles. Atendemos problemas térmicos, pantallas azules, fallas de tarjeta madre, cambio de pasta térmica de buena calidad y upgrades de SSD y memoria RAM para devolverle la velocidad a tu equipo.',
      'Prestamos servicio de técnico de computadores a domicilio en Bogotá, con recepción en laboratorio, pruebas de estabilidad bajo estrés y garantía por escrito. Escríbenos tu barrio o localidad y te confirmamos la cobertura.',
    ],
    trayectoTitulo: 'Qué hace Pedro con tu equipo',
    intro: 'Cada servicio es una parada de esta línea. Escribe cuál necesitas, o describe el síntoma y Pedro te dice por dónde empezar.',
    estaciones: [
      { tag: 'Preventivo', t: 'Mantenimiento físico', p: 'Limpieza interna y pasta térmica nueva para que el equipo no se caliente ni se apague.', li: [
        '<b>Limpieza profunda</b> del chasis y de la tarjeta con productos que no dañan los circuitos.',
        '<b>Desarme de ventiladores y radiadores</b> y lubricación de rodamientos.',
        '<b>Pasta térmica de calidad</b>, de marcas como Arctic, Noctua o Thermal Grizzly, según el equipo.',
        'Conviene repetirlo cada 6 a 8 meses.'] },
      { tag: 'Software', t: 'Mantenimiento lógico y sistema operativo', p: 'Para equipos que se volvieron lentos sin que se haya dañado nada físico.', li: [
        '<b>Arranque más rápido:</b> se quitan programas que se abren solos y no hacen falta.',
        '<b>Eliminación de virus y malware</b> que consumen recursos en segundo plano.',
        '<b>Reparación del sistema:</b> archivos dañados, actualizaciones y revisión del disco.'] },
      { tag: 'Correctivo', t: 'Diagnóstico y reparación', p: 'Cuando el equipo no enciende, se reinicia o muestra pantalla azul.', li: [
        '<b>Pantallas azules:</b> se identifica el error exacto antes de cambiar nada.',
        '<b>Reinicios y cuelgues:</b> revisión de la alimentación y de las fases de la tarjeta madre.',
        '<b>Cambio de componentes dañados:</b> condensadores, chipsets y piezas en corto.'] },
      { tag: 'Upgrade', t: 'Repotenciación', p: 'Se revisa qué frena tu equipo y se cambia solo lo que hace falta, con piezas compatibles.', li: [
        '<b>SSD NVMe o SATA:</b> arranque y carga más rápidos, clonando tu sistema para que no tengas que reinstalar.',
        '<b>Memoria RAM DDR4 o DDR5:</b> ampliación verificada con MemTest86.',
        '<b>Refrigeración líquida o por aire:</b> para que el procesador no baje su velocidad por temperatura.',
        '<b>Fuentes de poder modulares:</b> para alimentar tarjetas gráficas de gama alta.'] },
    ],
    foto: { src: 'assets/instalacion-ssd.jpg', alt: 'Instalación de un SSD NVMe en una tarjeta madre' },
    nota: { t: 'Pruebas antes de entregar', p: 'Un equipo repotenciado se somete a pruebas de estrés con programas como Cinebench, AIDA64 y FurMark, y recibes un informe técnico de lo que se hizo.' },
  },
  'computadoras-gpu.html': {
    linea: 'naranja',
    h1: 'Computadores a la medida y venta de PC y GPU en Bogotá',
    lead: 'Armamos el equipo según lo que haces y lo que puedes invertir, sin pagar de más por piezas que no necesitas.',
    wa: 'Hola Pedro, vi tu página de computadores a la medida. Quiero armar un equipo para:',
    localTitulo: 'Computadores a la medida en Bogotá',
    local: [
      '¿Buscas computadores a la medida en Bogotá o venta de PC y GPU? Diseñamos y ensamblamos configuraciones de alto rendimiento para gaming, arquitectura, modelado 3D e inteligencia artificial, con componentes originales, tarjetas gráficas y fuentes de poder certificadas, buscando que ninguna pieza frene a las demás y que el aire circule bien.',
      'Te asesoramos según tu presupuesto y hacemos la entrega con instalación a domicilio en Bogotá. Escríbenos tu barrio o localidad para confirmar la cobertura.',
    ],
    trayectoTitulo: 'Para qué lo vas a usar',
    intro: 'El equipo se diseña pieza por pieza alrededor de tu uso. Estos son los tres perfiles más pedidos.',
    estaciones: [
      { tag: 'Trabajo diario', t: 'Oficina y negocio', p: 'Compactos, silenciosos y de bajo consumo, pensados para jornadas largas sin reinicios ni pérdida de archivos.', li: [
        '<b>Para qué sirven:</b> hojas de cálculo grandes, programas contables, ERP y CRM.',
        '<b>Configuración típica:</b> SSD NVMe de 1 TB y entre 16 y 32 GB de memoria.',
        '<b>Plataformas:</b> procesadores Intel o AMD de gama media, según tu presupuesto.'] },
      { tag: 'Juegos', t: 'Gaming', p: 'Equipos para jugar en 1080p, 1440p o 4K, con buena ventilación y, si quieres, iluminación ARGB sincronizable.', li: [
        '<b>Procesador y GPU</b> balanceados, para que ninguno limite al otro.',
        '<b>Flujo de aire</b> con presión positiva para mantener bajas las temperaturas.',
        '<b>Streaming:</b> también se arman equipos pensados para transmitir con OBS.'] },
      { tag: 'Render y edición', t: 'Estación de trabajo', p: 'Para arquitectura, render 3D, edición de video y diseño técnico, donde cada minuto de espera cuesta.', li: [
        '<b>Programas:</b> Blender, V-Ray, DaVinci Resolve, Premiere, AutoCAD y Revit.',
        '<b>Memoria de 64 a 128 GB</b> y tarjeta gráfica de gama alta o profesional.',
        '<b>IA local:</b> equipos preparados para entrenar y ejecutar modelos en tu propia máquina.'] },
      { tag: 'Tarjetas gráficas', t: 'Elegir tu GPU', p: 'No solo vendemos hardware: te ayudamos a escoger la potencia que necesitas, de NVIDIA o AMD.', li: [
        '<b>Juegos:</b> trazado de rayos y escalado por IA (DLSS o FSR) para jugar fluido.',
        '<b>Creación de contenido:</b> menos tiempo de render en edición, 3D y arquitectura.',
        '<b>Inteligencia artificial:</b> núcleos dedicados para trabajar con modelos locales.'] },
    ],
    foto: { src: 'assets/gpu-installation.jpg', alt: 'Instalación de una tarjeta gráfica en un computador' },
    nota: { t: 'Cómo se arma tu presupuesto', p: 'Escríbele a Pedro lo que quieres hacer, los programas o juegos que usas y cuánto puedes invertir. Te devuelve una lista de componentes balanceada, sin sobrecostos.' },
  },
  'impresoras-soporte-remoto.html': {
    linea: 'verde',
    h1: 'Reparación de impresoras y soporte técnico remoto en Bogotá',
    lead: 'Impresoras de tinta continua y láser para casa y oficina, y ayuda inmediata por AnyDesk sin que tengas que moverte.',
    wa: 'Hola Pedro, vi tu página de impresoras y soporte remoto. Mi caso es:',
    localTitulo: 'Reparación de impresoras en Bogotá',
    local: [
      'Ofrecemos reparación de impresoras en Bogotá para sistemas de tinta continua EcoTank y equipos láser de oficina. Solucionamos atascos de papel, líneas borrosas, almohadillas desbordadas y calibración de cabezales.',
      'También damos soporte técnico remoto en Bogotá y a nivel nacional con AnyDesk: configurar impresoras en red, resolver errores de controladores y arreglar problemas de software al instante. Atendemos a domicilio y a empresas en Bogotá; escríbenos tu barrio o localidad para confirmar la cobertura.',
    ],
    trayectoTitulo: 'Qué impresora tienes',
    intro: 'Cada tecnología tiene sus fallas típicas. Esto es lo que revisa y repara Pedro.',
    estaciones: [
      { tag: 'Tinta continua', t: 'Epson EcoTank y similares', p: 'Sistemas de tinta continua sin cartuchos: se recargan desde botellas.', li: [
        '<b>Cabezales bloqueados:</b> diagnóstico y purga de la tinta seca de los conductos.',
        '<b>Almohadillas desbordadas:</b> limpieza y reinicio del contador.',
        '<b>Líneas y colores desviados:</b> limpieza del encoder y calibración de impresión.'] },
      { tag: 'Láser', t: 'HP, Canon y otras láser', p: 'Equipos de oficina con tóner que presentan manchas, atascos o impresiones pálidas.', li: [
        '<b>Fusor:</b> revisión y reemplazo de la unidad dañada.',
        '<b>Tambor y rodillos:</b> limpieza del cilindro fotosensible y del alimentador de papel.',
        '<b>Tóner:</b> recarga de cartuchos.'] },
      { tag: 'Remoto', t: 'Soporte técnico por AnyDesk', p: 'Asistencia en tiempo real, rápida y bajo tu supervisión directa en pantalla, esté donde esté.', li: [
        '<b>Tú autorizas la sesión</b> con el número de AnyDesk y puedes terminarla cuando quieras.',
        '<b>Qué se resuelve:</b> impresoras en red, controladores, virus, licencias y fallas de software.',
        '<b>Sin desplazamientos:</b> funciona en Bogotá y en el resto del país.'] },
    ],
    foto: { src: 'assets/impresora-ecotank.jpg', alt: 'Impresora de tinta continua con sus botellas de tinta' },
    nota: { t: '¿Tu impresora no responde ahora mismo?', p: 'Escríbele a Pedro por WhatsApp con la marca y el modelo, y te dice si se resuelve por AnyDesk o si hay que revisarla en laboratorio.' },
  },
  'software-perifericos.html': {
    linea: 'rojo',
    h1: 'Formateo de computadores, licencias y periféricos en Bogotá',
    lead: 'Instalación limpia con respaldo de tu información, licencias originales y equipamiento para tu escritorio o tu setup gamer.',
    wa: 'Hola Pedro, vi tu página de software y periféricos. Necesito:',
    localTitulo: 'Formateo y licencias en Bogotá',
    local: [
      'Hacemos formateo de computadores en Bogotá con respaldo seguro de tu información, instalación limpia de Windows 10 u 11 Pro y licencias originales de programas y suites de productividad. También te asesoramos en la venta de periféricos para tu estación de trabajo o setup gamer.',
      'Atendemos a domicilio en Bogotá o por soporte remoto inmediato. Escríbenos tu barrio o localidad para confirmar la cobertura.',
    ],
    trayectoTitulo: 'Qué necesitas instalar o comprar',
    intro: 'Tres paradas: dejar el sistema limpio, tenerlo en regla y equiparlo bien.',
    estaciones: [
      { tag: 'Instalación', t: 'Formateo e instalación de programas', p: 'Para equipos con virus, lentitud acumulada o un sistema que ya no responde.', li: [
        '<b>Respaldo de tu información</b> antes de tocar nada.',
        '<b>Instalación limpia</b> de Windows 10 u 11 Pro y de los programas que usas.',
        '<b>Resultado:</b> un sistema sin virus ni ralentizaciones.'] },
      { tag: 'Licencias', t: 'Software con activación original', p: 'Licencias genuinas, sin cracks ni activadores riesgosos.', li: [
        '<b>Sistemas operativos:</b> Windows 10 Pro, Windows 11 Pro y Windows Server.',
        '<b>Productividad:</b> Microsoft 365 para uso personal, familiar y empresarial.',
        '<b>Seguridad:</b> antivirus ESET, Kaspersky y Bitdefender.',
        '<b>Diseño y cálculo:</b> AutoCAD, Revit, SolidWorks y Adobe Creative Cloud.'] },
      { tag: 'Equipamiento', t: 'Periféricos y almacenamiento', p: 'Se instalan, se configuran y se dejan funcionando, no solo se venden.', li: [
        '<b>SSD NVMe M.2:</b> marcas como Samsung o WD, según compatibilidad.',
        '<b>Teclados mecánicos</b> y ratones gaming o ergonómicos.',
        '<b>Monitores</b> 4K o de alta frecuencia, de marcas como LG y ASUS.'] },
    ],
    foto: { src: 'assets/impresora-laser.jpg', alt: 'Puesto de trabajo con computador, teclado y ratón' },
    nota: { t: 'Dinos qué tienes', p: 'Escríbele a Pedro las especificaciones de tu equipo o el programa que necesitas y te cotiza con la activación incluida.' },
  },
};

// ---------------------------------------------------------------- piezas compartidas
function head({ title, desc, file, ogImage, ld, line }) {
  const url = `${SITE}/${file === 'index.html' ? '' : file}`;
  const og = `${SITE}/${ogImage}`;
  const ldTxt = ld.map((o) => `<script type="application/ld+json">\n${JSON.stringify(o, null, 2)}\n</script>`).join('\n');
  return `<!DOCTYPE html>
<html lang="es-CO" data-line="${line}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow">
<meta name="google-site-verification" content="ma6vcR9GbZT9sEGYslggxtk1oNrjwc28c1keLYDhthA">
<meta name="theme-color" content="#0e1217">
<meta name="color-scheme" content="dark">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_CO">
<meta property="og:site_name" content="Pedro Roa – Computer Technology">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta property="og:image:width" content="1376">
<meta property="og:image:height" content="768">
<meta property="og:image:alt" content="Pedro Roa – Computer Technology, servicio técnico en Bogotá">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${og}">
<link rel="icon" href="favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="192x192" href="assets/favicon-192x192.png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">
<link rel="preload" href="fonts/geist-variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="css/site.css">
<script>document.documentElement.classList.add('js')</script>
${ldTxt}
</head>`;
}

function header(actual) {
  const items = LINEAS.map((l) =>
    `<a href="${l.page}" style="--k:var(--${l.k})"${actual === l.page ? ' aria-current="page"' : ''}><i></i>${l.corto}</a>`).join('');
  const drawer = LINEAS.map((l) => `<a href="${l.page}" style="--k:var(--${l.k})"><i></i>${l.nombre}</a>`).join('');
  return `<a class="skip" href="#contenido">Saltar al contenido</a>
<header class="top">
  <div class="wrap">
    <a class="brand" href="index.html" aria-label="Pedro Roa, inicio">
      <img src="assets/logo.png" width="40" height="40" alt="">
      <span><b>Pedro Roa</b><small>Computer Technology · Bogotá</small></span>
    </a>
    <nav class="nav" aria-label="Servicios">${items}</nav>
    <a class="btn btn-wa" href="${waLink('Hola Pedro, vi tu página y quiero consultar por mi equipo.')}" target="_blank" rel="noopener">${ICON.chat}WhatsApp</a>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="drawer" aria-label="Abrir menú"><span></span></button>
  </div>
</header>
<nav class="drawer" id="drawer" aria-label="Menú">
  <a href="index.html" style="--k:var(--ink)"><i></i>Inicio</a>
  ${drawer}
</nav>`;
}

function barra(texto) {
  return `<div class="bar">
  <a class="btn btn-wa" href="${waLink(texto)}" target="_blank" rel="noopener">${ICON.chat}Escribir a Pedro</a>
  <a class="btn btn-ghost" href="tel:+${WA}" aria-label="Llamar a Pedro">${ICON.phone}Llamar</a>
</div>`;
}

function bandas(excluir) {
  return LINEAS.filter((l) => l.page !== excluir).map((l) => `<a class="banda" href="${l.page}" style="--k:var(--${l.k})">
    <h3>${l.nombre}</h3>
    <p>${l.resumen}</p>
    <span class="ir">Ver la línea ${ICON.right}</span>
  </a>`).join('\n');
}

function cierre(texto) {
  return `<section class="cierre">
  <div class="wrap">
    <h2>Cuéntale a Pedro qué le pasa a tu equipo</h2>
    <p>Cuéntale qué le pasa a tu equipo. Diagnóstico honesto y presupuesto claro, sin compromiso.</p>
    <div class="acciones">
      <a class="btn btn-ink" href="${waLink(texto)}" target="_blank" rel="noopener">${ICON.chat}WhatsApp ${TEL}</a>
      <a class="btn btn-ghost" href="tel:+${WA}">${ICON.phone}Llamar ahora</a>
    </div>
  </div>
</section>`;
}

function pie() {
  const links = LINEAS.map((l) => `<li><a href="${l.page}">${l.nombre}</a></li>`).join('');
  return `<footer class="foot">
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <h3>Pedro Roa – Computer Technology</h3>
        <p>Servicio técnico de computadores, portátiles e impresoras en Bogotá: en laboratorio, a domicilio y por soporte remoto.</p>
      </div>
      <div>
        <h3>Servicios</h3>
        <ul><li><a href="index.html">Inicio</a></li>${links}</ul>
      </div>
      <div>
        <h3>Contacto</h3>
        <ul>
          <li><a href="${waLink('Hola Pedro, quiero consultar por mi equipo.')}" target="_blank" rel="noopener">WhatsApp ${TEL}</a></li>
          <li><a href="tel:+${WA}">Llamar ${TEL}</a></li>
          <li><a href="mailto:${MAIL}">${MAIL}</a></li>
          <li>Lunes a sábado, 8:00 a. m. a 6:00 p. m.</li>
          <li>Pagos: efectivo, transferencia, Nequi y Daviplata</li>
        </ul>
      </div>
    </div>
    <p class="legal">© 2026 Pedro Roa – Computer Technology · Bogotá, Colombia</p>
  </div>
</footer>`;
}

// ---------------------------------------------------------------- inicio
function mapaHTML() {
  const lineas = LINEAS.map((l, i) => {
    const paradas = l.paradas.map(([t, sub]) =>
      `<button class="parada" type="button" aria-pressed="false" data-linea="${l.corto}" data-texto="${esc(t)}"><span class="dot"></span><span class="txt">${t}<small>${sub}</small></span></button>`).join('');
    return `<section class="linea" style="--k:var(--${l.k});--i:${i}" aria-label="${l.nombre}">
      <div class="linea-nombre"><a href="${l.page}">${l.nombre} ${ICON.right}</a></div>
      <div class="paradas">${paradas}</div>
    </section>`;
  }).join('\n');
  return `<div class="mapa" id="mapa">
  ${lineas}
  <div class="terminal" id="terminal">
    <div class="cabeza"><span class="orbe" aria-hidden="true"></span><h3>Pedro Roa</h3>
    <p class="sub">Estación final · Bogotá</p></div>
    <ul class="viaje" id="viaje" aria-live="polite"><li class="vacio">Elige una o más paradas y tu mensaje se arma solo.</li></ul>
    <div class="cuerpo"><label for="equipo">Marca y modelo de tu equipo (opcional)</label>
    <input id="equipo" type="text" autocomplete="off" placeholder="Ej.: portátil Lenovo IdeaPad 3">
    <a class="btn btn-ink" id="enviar" href="${waLink('Hola Pedro, vi tu página y quiero consultar por mi equipo.')}" target="_blank" rel="noopener">${ICON.chat}Enviar por WhatsApp</a>
    <p class="nota">Se abre WhatsApp con el mensaje listo. No se envía nada hasta que lo mandes tú.</p></div>
  </div>
</div>`;
}

function indexHTML(meta) {
  const ld = meta.ld.map((o) => {
    if (o['@type'] === 'FAQPage') {
      return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
    }
    return o;
  });
  const faq = FAQ.map(([q, a]) => `<details><summary><span>${q}</span></summary><div class="resp"><p>${a}</p></div></details>`).join('\n');
  const pasos = [
    ['Cuéntale qué pasa', 'Escribes por WhatsApp con la marca y el modelo de tu equipo y lo que notas.'],
    ['Diagnóstico', 'Pedro revisa el equipo en tu casa, en el laboratorio o por AnyDesk y te dice qué tiene.'],
    ['Presupuesto claro', 'Sabes cuánto cuesta antes de que se toque nada, sin compromiso.'],
    ['Reparación y pruebas', 'Se hace el trabajo y se prueba la estabilidad del equipo antes de devolvértelo.'],
    ['Entrega con garantía', 'Recibes un informe técnico y garantía por escrito.'],
  ].map(([t, p]) => `<li class="paso"><div><h3>${t}</h3><p>${p}</p></div></li>`).join('');
  return `${head({ title: meta.title, desc: meta.desc, file: 'index.html', ogImage: 'assets/custom-pc-hero.jpg', ld, line: 'azul' })}
<body>
${header('index.html')}
<main id="contenido">
  <section class="hero">
    <div class="wrap hero-grid">
      <div class="hero-texto">
        <h1>Servicio técnico de computadores y portátiles en Bogotá</h1>
        <p class="lead">Pedro Roa revisa, repara y arma computadores, portátiles e impresoras. <strong>Elige qué le pasa a tu equipo</strong> y se lo mandas por WhatsApp ya explicado.</p>
        <div class="hero-acciones">
          <a class="btn btn-wa" href="${waLink('Hola Pedro, vi tu página y quiero consultar por mi equipo.')}" target="_blank" rel="noopener">${ICON.chat}Escribir por WhatsApp</a>
          <a class="btn btn-ghost" href="#mapa">Describir mi caso</a>
        </div>
        <div class="hero-meta"><span>A domicilio en Bogotá</span><span>En laboratorio</span><span>Soporte remoto por AnyDesk</span></div>
      </div>
      <div class="escenario" id="escenario">
        <div class="tarjetas auto" id="tarjetas">
          ${TARJETAS.map(([clase, href, nombre, img]) => img
            ? `<a class="tarjeta ${clase}" href="${href}" data-nombre="${nombre}" aria-label="${nombre}"><img src="assets/cards/${img}.webp" width="720" height="450" alt="" decoding="async"></a>`
            : `<a class="tarjeta texto ${clase}" href="${href}" data-nombre="${nombre}" aria-label="${nombre}"><i></i><b>${nombre}</b></a>`).join('\n          ')}
        </div>
        <span class="etiqueta" id="etiqueta" aria-hidden="true">Servicios de Pedro</span>
      </div>
    </div>
  </section>

  <section class="wrap" id="sintomas">
    <div class="mapa-head">
      <h2>¿Qué le pasa a tu equipo?</h2>
      <p>Toca las paradas que describen tu caso. Todas las líneas llegan a Pedro.</p>
    </div>
    ${mapaHTML()}
  </section>

  <section class="lineas">
    <div class="wrap"><h2>Las cuatro líneas de servicio</h2></div>
    <div class="lineas-full">${bandas('')}</div>
  </section>

  <section class="proceso">
    <div class="wrap proceso-grid">
      <div>
        <h2>Cómo es el viaje</h2>
        <ol class="pasos" style="list-style:none;margin:0;padding:0">${pasos}</ol>
      </div>
      <figure class="foto" style="--k:var(--azul)"><img src="assets/pasta-termica-hero.jpg" width="1376" height="768" loading="lazy" alt="Aplicación de pasta térmica sobre un procesador"></figure>
    </div>
  </section>

  <section class="cobertura">
    <div class="wrap">
      <h2>Dónde te atiende</h2>
      <div class="modos">
        <div class="modo"><h3>A domicilio en Bogotá</h3><p>Pedro va a tu casa u oficina para el diagnóstico y el servicio. Escríbenos tu barrio o localidad para confirmar la cobertura y las condiciones del domicilio.</p></div>
        <div class="modo"><h3>En laboratorio</h3><p>Para reparaciones de microelectrónica, pruebas de estabilidad prolongadas y ensamble de computadores a la medida. El equipo vuelve a ti calibrado.</p></div>
        <div class="modo"><h3>Remoto por AnyDesk</h3><p>Para fallas de software, virus, impresoras o licencias, sin salir de casa y a nivel nacional.</p></div>
      </div>
    </div>
  </section>

  <section class="faq">
    <div class="wrap">
      <h2>Preguntas frecuentes</h2>
      ${faq}
    </div>
  </section>

  ${cierre('Hola Pedro, vi tu página y quiero consultar por mi equipo.')}
</main>
${pie()}
${barra('Hola Pedro, vi tu página y quiero consultar por mi equipo.')}
<script src="js/site.js" defer></script>
</body>
</html>
`;
}

// ---------------------------------------------------------------- páginas de servicio
function paginaHTML(file, p, meta) {
  const l = LINEAS.find((x) => x.k === p.linea);
  const ld = meta.ld;
  const est = p.estaciones.map((e) => `<li class="est"><div><h3>${e.t}</h3><p>${e.p}</p><ul>${e.li.map((x) => `<li>${x}</li>`).join('')}</ul></div></li>`).join('');
  const local = p.local.map((t) => `<p>${t}</p>`).join('');
  return `${head({ title: meta.title, desc: meta.desc, file, ogImage: meta.og ? meta.og.replace(/^\//, '') : 'assets/custom-pc-hero.jpg', ld, line: p.linea })}
<body>
${header(file)}
<main id="contenido">
  <section class="p-hero">
    <div class="wrap">
      <div>
        <h1>${p.h1}</h1>
        <p class="lead">${p.lead}</p>
        <div class="acciones">
          <a class="btn btn-wa" href="${waLink(p.wa)}" target="_blank" rel="noopener">${ICON.chat}Cotizar por WhatsApp</a>
          <a class="btn btn-ghost" href="tel:+${WA}">${ICON.phone}Llamar</a>
        </div>
      </div>
      <figure class="foto"><img src="${p.foto.src}" width="1376" height="768" alt="${esc(p.foto.alt)}"></figure>
    </div>
  </section>

  <section class="local">
    <div class="wrap">
      <h2>${p.localTitulo}</h2>
      <div class="cuerpo">${local}</div>
    </div>
  </section>

  <section class="trayecto">
    <div class="wrap">
      <h2>${p.trayectoTitulo}</h2>
      <p class="intro">${p.intro}</p>
      <ol class="estaciones" style="list-style:none;margin:0;padding:0">${est}</ol>
      <div class="par">
        <div class="nota-box"><h3>${p.nota.t}</h3><p>${p.nota.p}</p></div>
      </div>
    </div>
  </section>

  <section class="lineas">
    <div class="wrap"><h2>Otras líneas</h2></div>
    <div class="lineas-full">${bandas(file)}</div>
  </section>

  ${cierre(p.wa)}
</main>
${pie()}
${barra(p.wa)}
<script src="js/site.js" defer></script>
</body>
</html>
`;
}

// ---------------------------------------------------------------- escritura
const fix = (o) => JSON.parse(JSON.stringify(o).replaceAll('https://[DOMINIO]', SITE));
const readMeta = (name) => {
  const m = JSON.parse(fs.readFileSync(path.join(ROOT, 'src', `${name}.meta.json`), 'utf8'));
  m.ld = fix(m.ld);
  return m;
};

const idx = readMeta('index');
// Cuenta de teléfono, horario y datos del negocio se conservan; se retira la nota de configuración de la dirección.
fs.writeFileSync(path.join(ROOT, 'index.html'), indexHTML(idx));
for (const [file, p] of Object.entries(PAGINAS)) {
  const meta = readMeta(file.replace('.html', ''));
  fs.writeFileSync(path.join(ROOT, file), paginaHTML(file, p, meta));
}

const pages = ['index.html', ...Object.keys(PAGINAS)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((f) => `  <url>\n    <loc>${SITE}/${f === 'index.html' ? '' : f}</loc>\n    <lastmod>${FECHA}</lastmod>\n    <priority>${f === 'index.html' ? '1.0' : '0.8'}</priority>\n  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
const robots = fs.readFileSync(path.join(ROOT, 'robots.txt'), 'utf8').replace(/# Mapa del sitio[^\n]*\nSitemap:[^\n]*/, `Sitemap: ${SITE}/sitemap.xml`);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), robots);
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.webmanifest'), 'utf8'));
manifest.theme_color = '#0e1217';
manifest.background_color = '#0e1217';
manifest.lang = 'es-CO';
fs.writeFileSync(path.join(ROOT, 'site.webmanifest'), JSON.stringify(manifest, null, 2) + '\n');
console.log('Listo:', pages.join(', '));
