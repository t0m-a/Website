/**
 * TSIMON.ME — TELEMETRY & INTERACTION SCRIPTS
 * Author: Thomas Mathieu Simon
 * Version: 2.0.0
 * Zero-dependency client-side telemetry and interaction utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
  initUtcClock();
  initCopyButtons();
  initScrollSpy();
  initThemeToggle();
});

/**
 * 1. LIVE TIMEZONE TELEMETRY (La Paz, Bolivia // UTC-4)
 */
function initUtcClock() {
  const clockElement = document.getElementById('utc-clock');
  if (!clockElement) return;

  function updateClock() {
    try {
      const now = new Date();
      // Format time in America/La_Paz (UTC-4)
      const options = {
        timeZone: 'America/La_Paz',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      clockElement.textContent = `${formatter.format(now)} UTC-4`;
    } catch (e) {
      // Fallback
      clockElement.textContent = 'LA PAZ [UTC-4]';
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/**
 * 2. ONE-CLICK CLIPBOARD COPY WITH ACCESSIBLE TOAST NOTIFICATION
 */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  const toast = document.getElementById('toast');
  let toastTimer = null;

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied to clipboard: ${textToCopy}`);
      } catch (err) {
        // Fallback prompt if clipboard API blocked
        showToast(`Selected: ${textToCopy}`);
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

/**
 * 3. ACCESSIBLE SCROLL SPY FOR NAVIGATION ANCHORS
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.top-nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * 4. DARK / LIGHT THEME TOGGLE WITH LOCALSTORAGE PERSISTENCE
 */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function applyTheme(theme, persist) {
    document.documentElement.setAttribute('data-theme', theme);
    if (persist) {
      try {
        localStorage.setItem('tsimon-theme', theme);
      } catch (e) {}
    }

    const isLight = theme === 'light';
    toggleBtn.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    toggleBtn.setAttribute('title', isLight ? 'Switch to dark mode' : 'Switch to light mode');

    // Update meta theme-color for browser chromes
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isLight ? '#f8fafc' : '#090b0e');
    }
  }

  // Sync initial labels and attributes
  applyTheme(getTheme(), false);

  toggleBtn.addEventListener('click', () => {
    const current = getTheme();
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next, true);

    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = `Theme: ${next === 'light' ? 'Light Monograph' : 'Dark Obsidian'}`;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    }
  });

  // Watch for system color scheme changes if user hasn't explicitly set a preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      try {
        if (!localStorage.getItem('tsimon-theme')) {
          applyTheme(e.matches ? 'light' : 'dark', false);
        }
      } catch (err) {}
    });
  }
}
