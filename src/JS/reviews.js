import Swiper, { Navigation } from 'swiper';
import { reviews } from './reviewsData';
const list = document.querySelector('#swip');

reviews().then(markupCard);


function markupCard(data) {
  const markup = data.map(
    el => `
<div class="swiper-slide">
<picture> <source srcset="
              ${el.bcgPhoto_desk_1x} 1x,
              ${el.bcgPhoto_desk_2x} 2x,
              ${el.bcgPhoto_desk_3x} 3x
            " media="(min-width:1280px)"/>
                    <source srcset=
              ${el.bcgPhoto_tab_1x} 1x,
              ${el.bcgPhoto_tab_2x} 2x,
              ${el.bcgPhoto_tab_3x} 3x
            media="(min-width:768)" />
             <source srcset="
            ${el.bcgPhoto_mob_1x} 1x,
            ${el.bcgPhoto_mob_2x} 2x,
            ${el.bcgPhoto_mob_3x} 3x
            " media="(max-width:767)" />
 <img class="reviews__img" src=${el.bcgPhoto_mob_1x} alt='reviews' height="134px" />
                </picture>
 <div class="reviews__content">
  <img class="reviews__picture" src=${el.avatar} alt="avatar" />
  <h3 class="reviews__subtitle">${el.username}</h3>
  <p class="reviews__text">${el.comment}</p>
 <button class=" swiper-button reviews__btn" id='test'>Click</button>
                </div>
                <div class="reviews__card">
                <picture><source srcset="
               ${el.photo_desk_1x} 1x,
               ${el.photo_desk_2x} 2x,
               ${el.photo_desk_3x} 3x
              " media="(min-width:1279px)" />
                        <source srcset="
                ${el.photo_tab_1x} 1x,
                ${el.photo_tab_2x} 2x,
                ${el.photo_tab_3x} 3x
              " media="(min-width:767px)" />
                        <source srcset="
               ${el.photo_mob_1x} 1x,
               ${el.photo_mob_2x} 2x,
               ${el.photo_mob_3x} 3x
              " media="(max-width:767px)" />
 <img src=${el.photo_mob_1x} alt="exampl" />
                    </picture>
 </div> 

                 </div>
`
  );
  list.insertAdjacentHTML('beforeend', markup.join(''));
}

//SWIPER
new Swiper('.mySwiper', {
  modules: [Navigation],
  //speed: 2000,
  spaceBetween: 20,
  slidesPerView: 1,
  slidesPerGroup: 1,

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 // autoplay: false,
});



