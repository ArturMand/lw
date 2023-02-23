(()=>{
const backdrop = document.querySelector('.backdrop');
backdrop.addEventListener('click',()=>{
    backdrop.classList.remove('is-open')
    document.body.style.overflow='visible'
})
})()