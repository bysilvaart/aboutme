document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeToggle');
  const icon = document.getElementById('themeToggleIcon');
  if (!btn || !icon) return;

  const sunSVG = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2m0 16v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18.364 17.95l-1.414-1.414M6.05 6.05L4.636 4.636M12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>';
  const moonSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';

  function setIcon(theme){
    icon.innerHTML = theme === 'dark' ? sunSVG : moonSVG;
  }

  let theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
  setIcon(theme);

  btn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setIcon(theme);
  });
});

