import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoconativeScroll from 'loconative-scroll';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger);

function init() {
  // let scroll = initSmoothScroll();
  initSmoothScroll();

  gsap.to('.page-wrapper', {
    autoAlpha: 1,
  });
}

createCopyButton();
animateArticleDivider();
animateNav();

function initSmoothScroll() {
  // https://github.com/quentinhocde/loconative-scroll
  const scroll = new LoconativeScroll({
    // el: document.querySelector("[data-scroll-container]"),
    scrollToEasing: (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2),
    smooth: true,
    duration: 0.75,
    smartphone: {
      smooth: false,
    },
    tablet: {
      smooth: false,
    },
  });

  // ScrollTrigger.refresh();

  return scroll;
}

function animateArticleDivider() {
  const articleDividers = document.querySelectorAll('.article_divider img');

  articleDividers.forEach((divider) => {
    gsap.to(divider, {
      rotateZ: 180,
      scrollTrigger: {
        trigger: divider,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.25,
      },
    });
  });
}

function animateNav() {
  gsap.set('.nav', {
    backgroundColor: 'rgba(37, 64, 57, 0)',
  });
  gsap.to('.nav', {
    backgroundColor: 'rgba(37, 64, 57, 1)',
    scrollTrigger: {
      trigger: '.nav',
      start: 'clamp(top top)',
      end: '+200px',
      scrub: 1.5,
      toggleActions: 'play reverse play reverse',
    },
  });
}

// Function to copy the current page URL
function copyCurrentPageURL(button) {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      console.log('URL copied to clipboard successfully!');
      animateButtonChange(button); // Call the animation function here
    })
    .catch((err) => {
      console.error('Failed to copy URL: ', err);
    });
}

function animateButtonChange(button) {
  const copyIcon = button.querySelector('.is-copy');
  const checkmarkIcon = button.querySelector('.is-checkmark');

  gsap.to(copyIcon, {
    display: 'none',
    duration: 0.5,
    opacity: 0,
  });

  gsap.to(checkmarkIcon, {
    delay: 0.5,
    display: 'block',
    duration: 0.5,
    opacity: 1,
  });
}

function createCopyButton() {
  // Selecting the button with the attribute ma-element="copy-button"
  const copyButton = document.querySelector('[ma-element="copy-button"]');

  // Adding click event listener to the button
  if (copyButton) {
    copyButton.addEventListener('click', () => copyCurrentPageURL(copyButton));
  } else {
    console.log('Copy button not found!');
  }
}

window.Webflow ||= [];
window.Webflow.push(() => {
  const mySwiper = new Swiper('.swiper', {
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
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
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

  init();
  // End
});
