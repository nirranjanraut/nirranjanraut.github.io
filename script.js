(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Restore the visitor's theme preference; otherwise follow the OS setting.
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme) root.dataset.theme = savedTheme;
  else if (prefersDark) root.dataset.theme = 'dark';

  const updateThemeLabel = () => {
    const isDark = root.dataset.theme === 'dark';
    themeButton?.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    const icon = themeButton?.querySelector('.theme-icon');
    if (icon) icon.textContent = isDark ? '☀' : '◐';
  };
  updateThemeLabel();
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', root.dataset.theme);
    updateThemeLabel();
  });

  menuButton?.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Open navigation menu' : 'Close navigation menu');
    navLinks?.classList.toggle('open', !expanded);
  });
  navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation menu');
  }));

  // Reveal sections as they enter the viewport, with a no-observer fallback.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  document.querySelector('#print-resume')?.addEventListener('click', () => window.print());
  document.querySelector('#year').textContent = new Date().getFullYear();

  const form = document.querySelector('#contact-form');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`);
    const body = encodeURIComponent(
      `Hello Niranjan,\n\n${data.get('message')}\n\nRegards,\n${data.get('name')}\n${data.get('email')}`
    );
    document.querySelector('#form-note').textContent = 'Opening your email application with the message details…';
    window.location.href = `mailto:nirranjan.raut@gmail.com?subject=${subject}&body=${body}`;
  });
})();
