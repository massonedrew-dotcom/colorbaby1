/* ============================================================
   Color Baby House — интерактивный motion (всё, что зависит от курсора и событий).
   Чистые CSS-анимации живут в motion.css — сюда попадает только то,
   что CSS сам сделать не может.

   Слушатели навешены делегированием на document: React перерисовывает
   разметку, и точечные обработчики пришлось бы переподключать после
   каждого рендера.

   Публичный API: window.CSMotion.confetti(element)
   ============================================================ */
(function () {
  'use strict';

  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 3D-наклон карточек за курсором ---------- */

  var TILT_MAX = 11;            // максимальный угол поворота, градусы
  var activeTilt = null;

  function applyTilt(el, x, y) {
    var r = el.getBoundingClientRect();
    var px = (x - r.left) / r.width;
    var py = (y - r.top) / r.height;
    el.style.setProperty('--cs-ry', ((px - 0.5) * 2 * TILT_MAX).toFixed(2) + 'deg');
    el.style.setProperty('--cs-rx', ((0.5 - py) * 2 * TILT_MAX).toFixed(2) + 'deg');
    el.style.setProperty('--cs-mx', (px * 100).toFixed(1) + '%');
    el.style.setProperty('--cs-my', (py * 100).toFixed(1) + '%');
  }

  function resetTilt(el) {
    if (!el) return;
    el.style.setProperty('--cs-rx', '0deg');
    el.style.setProperty('--cs-ry', '0deg');
  }

  /* ---------- Магнитные кнопки ---------- */

  var MAGNET_RADIUS = 120;      // с какого расстояния кнопка начинает тянуться
  var MAGNET_PULL = 0.32;       // насколько сильно (доля расстояния)

  function applyMagnets(x, y) {
    var magnets = document.querySelectorAll('[data-cs-magnet]');
    for (var i = 0; i < magnets.length; i++) {
      var el = magnets[i];
      var r = el.getBoundingClientRect();
      if (!r.width) continue;
      var dx = x - (r.left + r.width / 2);
      var dy = y - (r.top + r.height / 2);
      var dist = Math.sqrt(dx * dx + dy * dy);
      var near = dist < r.width / 2 + MAGNET_RADIUS;
      el.style.setProperty('--cs-mgx', (near ? dx * MAGNET_PULL : 0).toFixed(1) + 'px');
      el.style.setProperty('--cs-mgy', (near ? dy * MAGNET_PULL : 0).toFixed(1) + 'px');
    }
  }

  /* ---------- Один общий обработчик движения курсора ---------- */

  var pending = false;
  var lastX = 0;
  var lastY = 0;
  var lastTarget = null;

  function onPointerMove(e) {
    if (REDUCED || e.pointerType === 'touch') return;
    lastX = e.clientX;
    lastY = e.clientY;
    lastTarget = e.target;
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () {
      pending = false;
      var tilt = lastTarget && lastTarget.closest ? lastTarget.closest('[data-cs-tilt]') : null;
      if (activeTilt && activeTilt !== tilt) resetTilt(activeTilt);
      activeTilt = tilt;
      if (tilt) applyTilt(tilt, lastX, lastY);
      applyMagnets(lastX, lastY);
    });
  }

  document.addEventListener('pointermove', onPointerMove, { passive: true });
  // Курсор ушёл из окна — снимаем все смещения
  document.addEventListener('pointerleave', function () {
    resetTilt(activeTilt);
    activeTilt = null;
    applyMagnets(-9999, -9999);
  });

  /* ---------- Конфетти ---------- */

  var CONFETTI_COLORS = ['#EE4A9B', '#FBD130', '#22BFD1', '#1FC39C', '#1F6FBE', '#22BFD1'];

  function confetti(origin) {
    if (REDUCED || !origin || typeof origin.getBoundingClientRect !== 'function') return;
    if (!document.body.animate) return;                 // нет Web Animations API — молча пропускаем

    var r = origin.getBoundingClientRect();
    var cx = r.left + r.width / 2;
    var cy = r.top + r.height / 2;

    var layer = document.createElement('div');
    layer.className = 'cs-confetti-layer';
    document.body.appendChild(layer);

    var count = 70;
    var maxDur = 0;

    for (var i = 0; i < count; i++) {
      var piece = document.createElement('i');
      piece.className = 'cs-confetti-piece';
      piece.style.left = cx + 'px';
      piece.style.top = cy + 'px';
      piece.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
      if (i % 3 === 0) piece.style.borderRadius = '50%';
      layer.appendChild(piece);

      var angle = Math.random() * Math.PI * 2;
      var power = 120 + Math.random() * 260;
      var dx = Math.cos(angle) * power;
      var dy = Math.sin(angle) * power - 120;          // подбрасываем вверх
      var fall = 320 + Math.random() * 280;
      var dur = 1100 + Math.random() * 900;
      var spin = (Math.random() * 720 - 360).toFixed(0);
      if (dur > maxDur) maxDur = dur;

      piece.animate([
        { transform: 'translate3d(0,0,0) rotate(0deg)', opacity: 1 },
        { transform: 'translate3d(' + dx * 0.6 + 'px,' + dy + 'px,0) rotate(' + spin / 2 + 'deg)', opacity: 1, offset: 0.35 },
        { transform: 'translate3d(' + dx + 'px,' + (dy + fall) + 'px,0) rotate(' + spin + 'deg)', opacity: 0 },
      ], {
        duration: dur,
        easing: 'cubic-bezier(0.16, 0.84, 0.44, 1)',
        fill: 'forwards',
      });
    }

    setTimeout(function () { layer.remove(); }, maxDur + 200);
  }

  window.CSMotion = { confetti: confetti, reduced: REDUCED };
})();
