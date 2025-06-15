document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('navbar');
  if (!header) return;

  header.innerHTML = `
    <nav>
      <a href="./index.html">
        <img src="img/LogoJoseSilva.svg" alt="Logo Jose Silva">
      </a>
      <div class="navbar-items">
        <a href="./index.html">Inicio</a>
        <a href="./drawing-design.html">Dibujos</a>
        <a href="./ui-design.html">Dise\u00f1o</a>
        <a href="./cv.html" class="read-it"><h4>Curriculum</h4></a>
        <button class="button-icon" id="themeToggle" aria-label="Cambiar tema">
          <span id="themeToggleIcon"></span>
        </button>
      </div>
    </nav>
  `;

  const current = header.dataset.current;
  if (current) {
    const link = header.querySelector(`a[href="${current}"]`);
    if (link) {
      link.setAttribute('aria-current', 'page');
    }
  }
});
