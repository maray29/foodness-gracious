import 'swiper/css';
import 'swiper/css/navigation';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function createPartnerRecipesSlider() {
  const partnerRecipesSlider = document.querySelector('.partner-recipes_list-wrap.swiper');

  if (!partnerRecipesSlider) return;

  const sliderBtnPrev = partnerRecipesSlider.parentNode.querySelector(
    '[data-element="swiper-prev"]'
  );
  const sliderBtnNext = partnerRecipesSlider.parentNode.querySelector(
    '[data-element="swiper-next"]'
  );

  if (partnerRecipesSlider) {
    const swiper = new Swiper(partnerRecipesSlider, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
      keyboard: true,
      centeredSlides: true,
      loop: true,
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
  }

  const partnerRecipesHeaderHeight = document
    .querySelector('.partner-recipe_header')
    .getBoundingClientRect().height;
  const sliderNavigationWrap =
    partnerRecipesSlider.parentNode.querySelector('.slider-navigation-wrap');
  const sliderNavigationWrapHeight = sliderNavigationWrap.getBoundingClientRect().height;

  const topHeight = partnerRecipesHeaderHeight - sliderNavigationWrapHeight;

  sliderNavigationWrap.style.top = `${topHeight}px`;
}
