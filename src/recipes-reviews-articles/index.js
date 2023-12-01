import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoconativeScroll from 'loconative-scroll';

gsap.registerPlugin(ScrollTrigger);

function init() {
  initSmoothScroll();

  gsap.to('.page-wrapper', {
    autoAlpha: 1,
  });

  animateOnScroll();
}

// Home on scroll animations - parallax
function animateOnScroll() {
  let mm = gsap.matchMedia(),
    breakPoint = 992;
  let isDesktop, isMobile, reduceMotion;

  mm.add(
    {
      // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
      reduceMotion: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
      ({ isDesktop, isMobile, reduceMotion } = context.conditions);

      return () => {
        // optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
        // it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
      };
    }
  );

  const elements = document.querySelectorAll('[ma-scroll]');

  elements.forEach((el) => {
    ScrollTrigger.refresh();
    let speed = el.getAttribute('ma-scroll-speed');

    gsap.to(el, {
      y: isDesktop ? `-${speed}` : 0,
      scrollTrigger: {
        trigger: el,
        start: 'clamp(top bottom)',
        end: 'clamp(bottom top)',
        scrub: 1,
      },
    });
  });
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

  ScrollTrigger.refresh();

  return scroll;
}

window.addEventListener('DOMContentLoaded', () => {
  init();
  // End
});
