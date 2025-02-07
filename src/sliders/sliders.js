import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export function createPartnerRecipesSlider() {
  const partnerRecipesSlider = document.querySelector('.partner-recipes_list-wrap.swiper');

  if (!partnerRecipesSlider) return;

  const sliderBtnPrev = partnerRecipesSlider.parentNode.querySelector(
    '[data-element="swiper-prev"]'
  );
  const sliderBtnNext = partnerRecipesSlider.parentNode.querySelector(
    '[data-element="swiper-next"]'
  );

  const swiper = new Swiper(partnerRecipesSlider, {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    // slideToClickedSlide: true,
    keyboard: true,
    centeredSlides: true,
    // loop: true,
    rewind: true,
    grabCursor: true,
    allowTouchMove: true,
    speed: 1000,
    navigation: {
      nextEl: sliderBtnNext,
      prevEl: sliderBtnPrev,
    },
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.slider-pagination',
      clickable: true,
      bulletActiveClass: 'is-active',
      bulletClass: 'slider-bullet',
    },
  });

  const partnerRecipesHeaderHeight = document
    .querySelector('.partner-recipe_header')
    .getBoundingClientRect().height;
  const sliderNavigationWrap =
    partnerRecipesSlider.parentNode.querySelector('.slider-navigation-wrap');
  const sliderNavigationWrapHeight = sliderNavigationWrap.getBoundingClientRect().height;

  const topHeight = partnerRecipesHeaderHeight - sliderNavigationWrapHeight;

  sliderNavigationWrap.style.top = `${topHeight}px`;
}

export function createEquipmentSlider() {
  const equipmentSlider = document.querySelector('.equipment_list-wrap.swiper');

  if (!equipmentSlider) return;

  const sliderBtnPrev = equipmentSlider.parentNode.querySelector('[data-element="swiper-prev"]');
  const sliderBtnNext = equipmentSlider.parentNode.querySelector('[data-element="swiper-next"]');

  const swiper = new Swiper(equipmentSlider, {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    // slidesPerGroup: 1,
    spaceBetween: 16,
    slideToClickedSlide: true,
    keyboard: true,
    // centeredSlides: true,
    slideActiveClass: 'is-active',
    slideDuplicateActiveClass: 'is-active',
    grabCursor: true,
    allowTouchMove: true,
    navigation: {
      prevEl: sliderBtnPrev,
      nextEl: sliderBtnNext,
    },
    breakpoints: {
      0: {
        /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      480: {
        /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      767: {
        /* when window >= 767px - webflow tablet */
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
      992: {
        /* when window >= 988px - webflow desktop */
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
  });
}

export function createTestimonialSlider() {
  const testimonialSlider = document.querySelector('.testimonial-slider_list-wrap.swiper');
  const sliderBtnPrev = testimonialSlider.parentNode.querySelector('[data-element="swiper-prev"]');
  const sliderBtnNext = testimonialSlider.parentNode.querySelector('[data-element="swiper-next"]');

  console.log(testimonialSlider);
  const mySwiper = new Swiper(testimonialSlider, {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 1,
    // slidesPerGroup: 1,
    spaceBetween: 16,
    slideToClickedSlide: true,
    keyboard: true,
    centeredSlides: true,
    slideActiveClass: 'is-active',
    slideDuplicateActiveClass: 'is-active',
    loop: true,
    speed: 1000,
    grabCursor: true,
    allowTouchMove: true,
    navigation: {
      prevEl: sliderBtnPrev,
      nextEl: sliderBtnNext,
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      0: {
        /* when window >=0px - webflow mobile landscape/portriat */

        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 8,
      },
      480: {
        /* when window >=0px - webflow mobile landscape/portriat */

        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 8,
      },
      767: {
        /* when window >= 767px - webflow tablet */

        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 8,
      },
      992: {
        /* when window >= 988px - webflow desktop */

        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 8,
      },
    },
  });
}
