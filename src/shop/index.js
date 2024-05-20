import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoconativeScroll from 'loconative-scroll';

import { createModal } from '$utils/modal';

gsap.registerPlugin(ScrollTrigger);

function init() {
  initSmoothScroll();

  gsap.to('.page-wrapper', {
    autoAlpha: 1,
    duration: 0.5,
  });

  createModal();
}

function initSmoothScroll() {
  // https://github.com/quentinhocde/loconative-scroll
  const scroll = new LoconativeScroll({
    // el: document.querySelector("[ma-scroll-container]"),
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

  return scroll;
}

window.addEventListener('DOMContentLoaded', () => {
  init();
  // End
});
