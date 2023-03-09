(() =>{
    const buttons = document.querySelectorAll('#galleryBtn');
    const item = document.querySelector('#swiper3');


    fetch(`https://carpathians-db.onrender.com/api/gallery/summer`, {
        method: 'GET',
        headers: { key: 'dede23wfWSD@@$fsD3'}
    })
    .then(response => response.json())
    .then(data => {
        item.innerHTML = ''
        const newElement = `
        <div class="swiper-slide slide1">    
                <picture>
                    <source
                        srcset="
                            ${data[0].image_1_mob_1x} 1x,
                            ${data[0].image_1_mob_2x} 2x,
                            ${data[0].image_1_mob_3x} 3x
                        "
                        media="(max-width:767px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_1_tab_1x} 1x,
                            ${data[0].image_1_tab_2x} 2x,
                            ${data[0].image_1_tab_3x} 3x
                        "
                        media="(min-width:768px) and (max-width:1279px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_1_desk_1x} 1x,
                            ${data[0].image_1_desk_2x} 2x,
                            ${data[0].image_1_desk_3x} 3x
                        "
                        media="(min-width:1280px)"
                        type="image/png"
                    />
                    <img
                    class="gallery__photo"
                    src="${data[0].image_1_mob_1x}"
                    alt="nature photo"
                    />
                </picture>
        </div>
        <div class="swiper-slide slide2">    
                <picture>
                    <source
                        srcset="
                            ${data[0].image_2_mob_1x} 1x,
                            ${data[0].image_2_mob_2x} 2x,
                            ${data[0].image_2_mob_3x} 3x
                        "
                        media="(max-width:767px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_2_tab_1x} 1x,
                            ${data[0].image_2_tab_2x} 2x,
                            ${data[0].image_2_tab_3x} 3x
                        "
                        media="(min-width:768px) and (max-width:1279px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_2_desk_1x} 1x,
                            ${data[0].image_2_desk_2x} 2x,
                            ${data[0].image_2_desk_3x} 3x
                        "
                        media="(min-width:1280px)"
                        type="image/png"
                    />

                    <img
                        class="gallery__photo"
                        src="${data[0].image_2_mob_1x}"
                        alt="nature photo"
                    />

                </picture>
        </div>
        <div class="swiper-slide slide3">    
                <picture>
                    <source
                        srcset="
                            ${data[0].image_3_mob_1x} 1x,
                            ${data[0].image_3_mob_2x} 2x,
                            ${data[0].image_3_mob_3x} 3x
                        "
                        media="(max-width:767px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_3_tab_1x} 1x,
                            ${data[0].image_3_tab_2x} 2x,
                            ${data[0].image_3_tab_3x} 3x
                        "
                        media="(min-width:768px) and (max-width:1279px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_3_desk_1x} 1x,
                            ${data[0].image_3_desk_2x} 2x,
                            ${data[0].image_3_desk_3x} 3x
                        "
                        media="(min-width:1280px)"
                        type="image/png"
                    />
                    <img
                        class="gallery__photo"
                        src="${data[0].image_3_mob_1x}"
                        alt="nature photo"
                    />
                </picture>
        </div>
        <div class="swiper-slide slide4"> 
                <picture>
                    <source
                        srcset="
                            ${data[0].image_4_mob_1x} 1x,
                            ${data[0].image_4_mob_2x} 2x,
                            ${data[0].image_4_mob_3x} 3x
                        "
                        media="(max-width:767px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_4_tab_1x} 1x,
                            ${data[0].image_4_tab_2x} 2x,
                            ${data[0].image_4_tab_3x} 3x
                        "
                        media="(min-width:768px) and (max-width:1279px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_4_desk_1x} 1x,
                            ${data[0].image_4_desk_2x} 2x,
                            ${data[0].image_4_desk_3x} 3x
                        "
                        media="(min-width:1280px)"
                        type="image/png"
                    />
                    <img
                        class="gallery__photo"
                        src="${data[0].image_4_mob_1x}"
                        alt="nature photo"
                    />
                </picture>
        </div>
        <div class="swiper-slide slide5">    
                <picture>
                    <source
                        srcset="
                            ${data[0].image_5_mob_1x} 1x,
                            ${data[0].image_5_mob_2x} 2x,
                            ${data[0].image_5_mob_3x} 3x
                        "
                        media="(max-width:767px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_5_tab_1x} 1x,
                            ${data[0].image_5_tab_2x} 2x,
                            ${data[0].image_5_tab_3x} 3x
                        "
                        media="(min-width:768px) and (max-width:1279px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_5_desk_1x} 1x,
                            ${data[0].image_5_desk_2x} 2x,
                            ${data[0].image_5_desk_3x} 3x
                        "
                        media="(min-width:1280px)"
                        type="image/png"
                    />
                    <img
                        class="gallery__photo"
                        src="${data[0].image_5_mob_1x}"
                        alt="nature photo"
                    />
                </picture>
            </div>
            `;
        item.insertAdjacentHTML('beforeend', [...newElement].join(''));
    })
    .catch(error => console.error(error));


    buttons.forEach(button => {
        button.addEventListener('click', () => {

            item.classList.add('gallery-fade-out')
            setTimeout(() => {
                item.classList.remove('gallery-fade-out')
            }, 1000);
            const season = button.getAttribute('data-season');

            buttons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.classList.remove('gallery__button--active');
                }
            });
            button.classList.add('gallery__button--active');

            fetch(`https://carpathians-db.onrender.com/api/gallery/${season}`, {
                method: 'GET',
                headers: { key: 'dede23wfWSD@@$fsD3'}
            })
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    item.innerHTML = '';
                }, 500);
                
                
        const newElement = `
        <div class="swiper-slide slide1">    
                <picture>
                    <source
                        srcset="
                            ${data[0].image_1_mob_1x} 1x,
                            ${data[0].image_1_mob_2x} 2x,
                            ${data[0].image_1_mob_3x} 3x
                        "
                        media="(max-width:767px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_1_tab_1x} 1x,
                            ${data[0].image_1_tab_2x} 2x,
                            ${data[0].image_1_tab_3x} 3x
                        "
                        media="(min-width:768px) and (max-width:1279px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_1_desk_1x} 1x,
                            ${data[0].image_1_desk_2x} 2x,
                            ${data[0].image_1_desk_3x} 3x
                        "
                        media="(min-width:1280px)"
                        type="image/png"
                    />
                    <img
                    class="gallery__photo"
                    src="${data[0].image_1_mob_1x}"
                    alt="nature photo"
                    />
                </picture>
        </div>
        <div class="swiper-slide slide2">    
                <picture>
                    <source
                        srcset="
                            ${data[0].image_2_mob_1x} 1x,
                            ${data[0].image_2_mob_2x} 2x,
                            ${data[0].image_2_mob_3x} 3x
                        "
                        media="(max-width:767px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_2_tab_1x} 1x,
                            ${data[0].image_2_tab_2x} 2x,
                            ${data[0].image_2_tab_3x} 3x
                        "
                        media="(min-width:768px) and (max-width:1279px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_2_desk_1x} 1x,
                            ${data[0].image_2_desk_2x} 2x,
                            ${data[0].image_2_desk_3x} 3x
                        "
                        media="(min-width:1280px)"
                        type="image/png"
                    />

                    <img
                        class="gallery__photo"
                        src="${data[0].image_2_mob_1x}"
                        alt="nature photo"
                    />

                </picture>
        </div>
        <div class="swiper-slide slide3">    
                <picture>
                    <source
                        srcset="
                            ${data[0].image_3_mob_1x} 1x,
                            ${data[0].image_3_mob_2x} 2x,
                            ${data[0].image_3_mob_3x} 3x
                        "
                        media="(max-width:767px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_3_tab_1x} 1x,
                            ${data[0].image_3_tab_2x} 2x,
                            ${data[0].image_3_tab_3x} 3x
                        "
                        media="(min-width:768px) and (max-width:1279px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_3_desk_1x} 1x,
                            ${data[0].image_3_desk_2x} 2x,
                            ${data[0].image_3_desk_3x} 3x
                        "
                        media="(min-width:1280px)"
                        type="image/png"
                    />
                    <img
                        class="gallery__photo"
                        src="${data[0].image_3_mob_1x}"
                        alt="nature photo"
                    />
                </picture>
        </div>
        <div class="swiper-slide slide4"> 
                <picture>
                    <source
                        srcset="
                            ${data[0].image_4_mob_1x} 1x,
                            ${data[0].image_4_mob_2x} 2x,
                            ${data[0].image_4_mob_3x} 3x
                        "
                        media="(max-width:767px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_4_tab_1x} 1x,
                            ${data[0].image_4_tab_2x} 2x,
                            ${data[0].image_4_tab_3x} 3x
                        "
                        media="(min-width:768px) and (max-width:1279px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_4_desk_1x} 1x,
                            ${data[0].image_4_desk_2x} 2x,
                            ${data[0].image_4_desk_3x} 3x
                        "
                        media="(min-width:1280px)"
                        type="image/png"
                    />
                    <img
                        class="gallery__photo"
                        src="${data[0].image_4_mob_1x}"
                        alt="nature photo"
                    />
                </picture>
        </div>
        <div class="swiper-slide slide5">    
                <picture>
                    <source
                        srcset="
                            ${data[0].image_5_mob_1x} 1x,
                            ${data[0].image_5_mob_2x} 2x,
                            ${data[0].image_5_mob_3x} 3x
                        "
                        media="(max-width:767px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_5_tab_1x} 1x,
                            ${data[0].image_5_tab_2x} 2x,
                            ${data[0].image_5_tab_3x} 3x
                        "
                        media="(min-width:768px) and (max-width:1279px)"
                        type="image/png"
                    />
                    <source
                        srcset="
                            ${data[0].image_5_desk_1x} 1x,
                            ${data[0].image_5_desk_2x} 2x,
                            ${data[0].image_5_desk_3x} 3x
                        "
                        media="(min-width:1280px)"
                        type="image/png"
                    />
                    <img
                        class="gallery__photo"
                        src="${data[0].image_5_mob_1x}"
                        alt="nature photo"
                    />
                </picture>
            </div>
            `;
                setTimeout(() => {
                item.insertAdjacentHTML('beforeend', [...newElement].join(''))
                }, 600);

            })
                
                .catch(error => console.error(error));
        });
    });
})()