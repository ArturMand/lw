const btnOpenModalRef = document.querySelector('.btn__hero');
const backdropRef = document.querySelector('.backdrop');
const modalOrderTourRef = document.querySelector('.modalOrderTour');
const closeModalAndMobileMenuByEsc = e => {
  console.log(e);
  if (e.key === 'Escape') {
    backdropRef.classList.remove('is-open');
    modalOrderTourRef.classList.remove('is-open');
    document.body.style.overflow = 'visible';
  }
  document.body.removeEventListener('keydown', closeModalAndMobileMenuByEsc);
};
(() => {
  btnOpenModalRef.addEventListener('click', () => {
    backdropRef.classList.add('is-open');
    modalOrderTourRef.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    document.body.addEventListener('keydown', closeModalAndMobileMenuByEsc);
  });
})();
