// Menú móvil y armado del mensaje de WhatsApp a partir de las paradas elegidas en el mapa.
(function () {
  var root = document.documentElement;

  // ---- Menú ----
  var btn = document.querySelector('.menu-btn');
  if (btn) {
    var setMenu = function (open) {
      root.classList.toggle('nav-open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    };
    btn.addEventListener('click', function () { setMenu(!root.classList.contains('nav-open')); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    document.querySelectorAll('.drawer a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    window.matchMedia('(min-width: 900px)').addEventListener('change', function (m) { if (m.matches) setMenu(false); });
  }

  // ---- Servicios flotando: sigue al puntero y muestra el nombre de la tarjeta ----
  var escenario = document.getElementById("escenario");
  if (escenario) {
    var tarjetas = document.getElementById("tarjetas");
    var etiqueta = document.getElementById("etiqueta");
    var base = etiqueta.textContent;
    var fino = window.matchMedia("(hover: hover) and (pointer: fine)");
    escenario.addEventListener("pointermove", function (e) {
      if (!fino.matches || e.pointerType !== "mouse") return;
      var r = escenario.getBoundingClientRect();
      tarjetas.classList.remove("auto");
      tarjetas.style.setProperty("--px", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
      tarjetas.style.setProperty("--py", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
    });
    var poner = function (e) {
      var t = e.target.closest(".tarjeta");
      if (t) etiqueta.textContent = t.dataset.nombre;
    };
    var quitar = function () { etiqueta.textContent = base; };
    escenario.addEventListener("pointerover", poner);
    escenario.addEventListener("focusin", poner);
    escenario.addEventListener("pointerleave", quitar);
    escenario.addEventListener("focusout", quitar);
  }

  // ---- Mapa de síntomas ----
  var mapa = document.getElementById('mapa');
  if (!mapa) return;
  var lista = document.getElementById('viaje');
  var enviar = document.getElementById('enviar');
  var equipo = document.getElementById('equipo');
  var NUMERO = '573024555428';
  var vacio = lista.innerHTML;

  function elegidas() {
    return Array.prototype.slice.call(mapa.querySelectorAll('.parada[aria-pressed="true"]'));
  }

  function actualizar() {
    var sel = elegidas();
    lista.innerHTML = '';
    if (!sel.length) {
      lista.innerHTML = vacio;
    } else {
      sel.forEach(function (p) {
        var li = document.createElement('li');
        li.style.setProperty('--k', getComputedStyle(p.closest('.linea')).getPropertyValue('--k'));
        li.textContent = p.dataset.texto;
        lista.appendChild(li);
      });
    }
    var texto = 'Hola Pedro, vi tu página y quiero consultar por mi equipo.';
    if (sel.length) {
      texto += '\nMi caso:\n' + sel.map(function (p) { return '• ' + p.dataset.texto; }).join('\n');
    }
    var modelo = equipo.value.trim();
    if (modelo) texto += '\nEquipo: ' + modelo;
    enviar.href = 'https://wa.me/' + NUMERO + '?text=' + encodeURIComponent(texto);
  }

  mapa.addEventListener('click', function (e) {
    var p = e.target.closest('.parada');
    if (!p) return;
    p.setAttribute('aria-pressed', p.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    actualizar();
  });
  equipo.addEventListener('input', actualizar);
})();
