/* Menú desplegable móvil — Pedro Roa
   Cargar DESPUÉS de js/main.js. Toma el control del botón #mobile-menu-btn
   (captura el clic antes que cualquier otro script) para que no se abra y cierre dos veces. */
(function () {
  'use strict';

  function init() {
    var btn = document.getElementById('mobile-menu-btn');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    var icon = btn.querySelector('.material-symbols-outlined');
    var XL = 1280;

    function isOpen() { return !menu.classList.contains('hidden'); }

    function setOpen(open) {
      menu.classList.toggle('hidden', !open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      if (icon) icon.textContent = open ? 'close' : 'menu';
    }

    setOpen(false);

    document.addEventListener('click', function (e) {
      var t = e.target;
      if (btn.contains(t)) {
        e.preventDefault();
        e.stopPropagation();
        setOpen(!isOpen());
        return;
      }
      if (!isOpen()) return;
      // Cierra al tocar un enlace del menú o cualquier zona fuera de él
      if ((t.closest && t.closest('#mobile-menu a')) || !menu.contains(t)) setOpen(false);
    }, true);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) { setOpen(false); btn.focus(); }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= XL && isOpen()) setOpen(false);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
