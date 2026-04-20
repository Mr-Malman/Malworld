/**
 * CTF Theme — Matrix Rain Canvas + Glitch Heading Hover
 * Injected as a side-effect import — no React components touched.
 */

// ── Matrix Rain Canvas ──────────────────────────────────────────
function initMatrixRain() {
  const canvas = document.createElement('canvas');
  canvas.id = 'ctf-matrix-canvas';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  const CHARS =
    'アイウエオカキクケコサシスセソタチツテトナニヌネノ' +
    'ハヒフヘホマミムメモヤユヨラリルレロワヲン' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

  let cols, drops;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    cols  = Math.floor(canvas.width / 16);
    drops = Array(cols).fill(1);
  }

  resize();
  window.addEventListener('resize', resize);

  function draw() {
    ctx.fillStyle = 'rgba(13,13,13,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41';
    ctx.font = '14px JetBrains Mono, monospace';

    for (let i = 0; i < drops.length; i++) {
      const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
      ctx.fillText(ch, i * 16, drops[i] * 16);

      if (drops[i] * 16 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 50);
}

// ── Glitch on heading hover ──────────────────────────────────────
function initGlitchHeadings() {
  const apply = () => {
    document.querySelectorAll('h1, h2, h3').forEach((el) => {
      if (el.dataset.ctfGlitch) return;
      el.dataset.ctfGlitch = '1';

      el.addEventListener('mouseenter', () => {
        el.classList.add('ctf-glitch-active');
      });
      el.addEventListener('animationend', () => {
        el.classList.remove('ctf-glitch-active');
      });
    });
  };

  // Apply now, then re-apply on DOM mutations (React re-renders)
  apply();
  const observer = new MutationObserver(apply);
  observer.observe(document.body, { childList: true, subtree: true });
}

// ── Boot ─────────────────────────────────────────────────────────
function bootCTFTheme() {
  initMatrixRain();
  initGlitchHeadings();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootCTFTheme);
} else {
  bootCTFTheme();
}
