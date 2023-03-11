import { galleryMarkup } from './galleryMarkup';

(() => {
    const buttons = document.querySelectorAll('#galleryBtn');
    const item = document.querySelector('#swiper3');
    const URL_DB = `https://carpathians-db.onrender.com/api/gallery`
    const KEY = 'dede23wfWSD@@$fsD3'

    async function fetchData(season) {
        const response = await fetch(`${URL_DB}/${season}`, {
            method: 'GET',
            headers: { key: KEY}
        });
        const data = await response.json();
        return data;
    }

    async function init() {
        try {
            const data = await fetchData('summer');
            galleryMarkup(data);
        } catch (error) {
            console.error(error);
        }

        buttons.forEach(button => {
            button.addEventListener('click', async () => {
                if (button.classList.contains('gallery__button--active')) {
                    return;
                }
                
                item.classList.remove('is-visible')
                setTimeout(() => {
                    item.classList.add('is-visible')
                }, 1000);
                
                const season = button.getAttribute('data-season');

                buttons.forEach(otherButton => {
                    if (otherButton !== button) {
                        otherButton.classList.remove('gallery__button--active');
                    }
                });
                button.classList.add('gallery__button--active');

                try {
                    const data = await fetchData(season);
                    galleryMarkup(data);
                } catch (error) {
                    console.error(error);
                }
            });
        });
    }

    init();
})();