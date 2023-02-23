(() => {
  const btnOpenModalRef = document.querySelector('.btn__hero');
  const backdropRef = document.querySelector('.backdrop');
  const modalOrderTourRef = document.querySelector('.modalOrderTour');
  btnOpenModalRef.addEventListener('click', () => {
    backdropRef.classList.add('is-open');
    modalOrderTourRef.classList.add('is-open')
    document.body.style.overflow = 'hidden';
  });
})();
