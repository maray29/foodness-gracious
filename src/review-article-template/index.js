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

  animateNav();
  animateArticleDivider();
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

window.addEventListener('DOMContentLoaded', () => {
  init();
  // End
});
