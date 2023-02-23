(()=>{
    const btnOpenModal = document.querySelector('.hero__btn');
    const backdrop = document.querySelector('.backdrop');
    btnOpenModal.addEventListener('click',()=>{
        backdrop.classList.add('is-open')
        document.body.style.overflow='hidden'
    })
})()