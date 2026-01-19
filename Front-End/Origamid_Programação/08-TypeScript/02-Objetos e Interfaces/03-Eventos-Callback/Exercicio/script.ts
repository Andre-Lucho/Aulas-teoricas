const btnMbile = document.querySelector<HTMLElement>('#btn-mobile');

function menuMobile(event: PointerEvent) {
  const element = event.currentTarget;
  const nav = document.getElementById('nav');
  if (element instanceof HTMLElement && nav) {
    const active = nav.classList.toggle('active');
    if (active) {
      element.setAttribute('aria-expanded', 'true');
      element.setAttribute('aria-label', 'Fechar Menu');
    } else {
      element.setAttribute('aria-expanded', 'false');
      element.setAttribute('aria-label', 'Abrir Menu');
    }
  }
}

btnMbile?.addEventListener('pointerdown', menuMobile);
