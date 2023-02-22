(() => {
  const btnOpenMenuRef = document.querySelector('.btn__menu');
  const mobileMenuRef = document.querySelector('.menu');
  const heroContentRef = document.querySelector('.hero__wrapper');
  btnOpenMenuRef.addEventListener('click', () => {
    const expanded =
      btnOpenMenuRef.getAttribute('aria-expanded') === 'true' || false;
      heroContentRef.classList.toggle('is-visible')
    btnOpenMenuRef.classList.toggle('opened');
    btnOpenMenuRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();
