import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoconativeScroll from 'loconative-scroll';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
function init() {
  initSmoothScroll();

  animateHomeHeaderOnLoad();

  gsap.to('.page-wrapper', {
    autoAlpha: 1,
  });
  // createAndAnimateConceptAsset();
  animateOnScroll();
  conceptSectionScrollTo();
}

// Home header intro animation
function animateHomeHeaderOnLoad() {
  const vegImg1 = document.querySelector('.veg-1');
  const vegImg2 = document.querySelector('.veg-2');
  const vegImg3 = document.querySelector('.veg-3');
  const vegImg4 = document.querySelector('.veg-4');
  const vegImg5 = document.querySelector('.veg-5');
  const vegImg6 = document.querySelector('.veg-6');
  const vegImg7 = document.querySelector('.veg-7');
  const vegImg8 = document.querySelector('.veg-8');
  const vegImg9 = document.querySelector('.veg-9');
  const vegImg10 = document.querySelector('.veg-10');
  const vegImg11 = document.querySelector('.veg-11');
  const vegImg12 = document.querySelector('.veg-12');

  const hat = document.querySelector('.home-header_chefs-hat');
  const headingTop = document.querySelector('.is-top');
  const headingBottom = document.querySelector('.is-bottom');
  const subheading = document.querySelector('.home-header_subheading');
  const headerButtons = document.querySelector('.home-header_buttons');
  const nav = document.querySelector('.nav');

  const tl = gsap.timeline({
    // onComplete: () => {
    //   animateOnScroll();
    // }
  });
  const duration = 1.0;
  const rotation = -35;
  const distance = generateDistributedArray(12, 'exponential', [15, 50], 1.5);
  const ease = 'power2.out';
  const delay = generateDistributedArray(12, 'exponential', [0, 0.35], 1.5);

  tl.to('.page-wrapper', {
    autoAlpha: 1,
  })
    .from(
      vegImg1,
      {
        autoAlpha: 0,
        x: `${-distance[0]}vw`,
        rotationZ: rotation,
        duration: duration,
        ease: ease,
      },
      `start+=${delay[0]}`
    )
    .from(
      vegImg3,
      {
        autoAlpha: 0,
        x: `${-distance[1]}vw`,
        rotationZ: rotation,
        duration: duration,
        ease: ease,
      },
      `start+=${delay[1]}`
    )
    .from(
      vegImg4,
      {
        autoAlpha: 0,
        x: `${-distance[2]}vw`,
        rotationZ: rotation,
        duration: duration,
        ease: ease,
      },
      `start+=${delay[2]}`
    )
    .from(
      vegImg5,
      {
        autoAlpha: 0,
        x: `${-distance[3]}vw`,
        rotationZ: rotation * 1.25,
        duration: duration,
        ease: ease,
      },
      `start+=${delay[3]}`
    )
    .from(
      vegImg6,
      {
        autoAlpha: 0,
        x: `${-distance[4]}vw`,
        rotationZ: rotation * 1.25,
        duration: duration,
        ease: ease,
      },
      `start+=${delay[4]}`
    )
    .from(
      vegImg8,
      {
        autoAlpha: 0,
        x: `${-distance[5]}vw`,
        rotationZ: rotation * 1.25,
        duration: duration,
        ease: ease,
      },
      `start+=${delay[5]}`
    )
    .from(
      vegImg9,
      {
        autoAlpha: 0,
        x: `${-distance[6]}vw`,
        rotationZ: rotation * 1.25,
        duration: duration,
        ease: ease,
      },
      `start+=${delay[6]}`
    )
    .from(
      vegImg12,
      {
        autoAlpha: 0,
        x: `${-distance[7]}vw`,
        rotationZ: rotation * 1.25,
        duration: duration,
        ease: ease,
      },
      `start+=${delay[7]}`
    )
    .from(
      vegImg10,
      {
        autoAlpha: 0,
        x: `${-distance[8]}vw`,
        rotationZ: rotation * 1.4,
        duration: duration,
        ease: ease,
      },
      `start+=${delay[8]}`
    )
    .from(
      vegImg7,
      {
        autoAlpha: 0,
        x: `${-distance[9]}vw`,
        rotationZ: rotation * 1.4,
        duration: duration,
        ease: ease,
      },
      `start+=${delay[9]}`
    )
    .from(
      vegImg11,
      {
        autoAlpha: 0,
        x: `${-distance[10]}vw`,
        rotationZ: rotation * 1.4,
        duration: duration,
        ease: ease,
      },
      `start+=${delay[10]}`
    )
    .from(
      vegImg2,
      {
        autoAlpha: 0,
        x: `${-distance[11]}vw`,
        rotationZ: rotation * 1.4,
        duration: duration,
        ease: ease,
      },
      `start+=${delay[11]}`
    )
    .from(
      hat,
      {
        autoAlpha: 0,
        x: `-20vw`,
        rotationZ: rotation,
        duration: duration,
        ease: ease,
      },
      `start+=0.35`
    )
    .from(
      headingTop,
      {
        autoAlpha: 0,
        x: `-10vw`,
        // rotationZ: rotation * 1.4,
        duration: duration,
        ease: ease,
      },
      `start+=0.45`
    )
    .from(
      headingBottom,
      {
        autoAlpha: 0,
        x: `-10vw`,
        // rotationZ: rotation * 1.4,
        duration: duration,
        ease: ease,
      },
      `start+=0.5`
    )
    .from(
      subheading,
      {
        autoAlpha: 0,
      },
      `start+=1`
    )
    .from(
      headerButtons,
      {
        autoAlpha: 0,
      },
      `start+=1.5`
    )
    .from(
      nav,
      {
        autoAlpha: 0,
      },
      `start+=1.75`
    );
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

// Helper functions
function generateDistributedArray(n, distribution = 'exponential', range = [0, 1], base = 2) {
  if (n <= 0) return [];

  // Helper functions
  const exponential = (x) => Math.pow(base, x);
  const sine = (x) => Math.sin((Math.PI * x) / (n - 1));

  // Choose the distribution function
  let distributionFunction;
  switch (distribution) {
    case 'exponential':
      distributionFunction = exponential;
      break;
    case 'sine':
      distributionFunction = sine;
      break;
    default:
      throw new Error('Invalid distribution type');
  }

  // Function to map a value from one range to another
  const mapRange = (value, inMin, inMax, outMin, outMax) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  // Create the array
  const rawValues = Array.from({ length: n }, (_, i) => distributionFunction(i));
  const maxVal = Math.max(...rawValues);
  const minVal = Math.min(...rawValues);

  return rawValues.map((val) => mapRange(val, minVal, maxVal, range[0], range[1]));
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

function createAndAnimateConceptAsset() {
  const conceptAsset = document.querySelector('.concept_asset-wrap');

  gsap.set('.concept_content', { autoAlpha: 0 });
  gsap.set('.concept_content.is-first', { autoAlpha: 1 });

  let pinDistance;
  let mm = gsap.matchMedia();

  mm.add('(max-width: 991px)', () => {
    // mobile setup code here...
    pinDistance = 3500;
  });

  mm.add('(min-width: 992px)', () => {
    // desktop setup code here...
    pinDistance = 4000;
  });

  mm.add('(min-width: 1441px)', () => {
    // large desktop setup code here...
    pinDistance = 4500;
  });

  gsap.to('.concept_asset', {
    rotateZ: 520,
    scrollTrigger: {
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2,
    },
  });

  /* section */
  ScrollTrigger.create({
    trigger: '.section_concept',
    start: 'center center',
    end: '+=' + pinDistance,
    pin: '.concept_component',
    // markers: true,
    id: 'section_concept',
  });

  /* texts inside section */
  const stepsTimeline = gsap.timeline({
    onComplete: () => {
      gsap.to('.concept_scroll-indicator', {
        autoAlpha: 0,
      });
    },
    scrollTrigger: {
      trigger: '.concept_content',
      start: 'center center',
      end: '+=' + pinDistance,
      scrub: true,
      // markers: true
    },
  });

  const steps = gsap.utils.toArray('.concept_content');

  // loop through each step and add a callback into the timeline, spaced equally (1 second apart just to make things simple)
  steps.forEach((step, i) => {
    const isFirst = i === 0;
    console.log(isFirst);
    if (i !== 0) {
      stepsTimeline.add(() => {
        // if scrolling backward, we need to invert which element fades in or out
        const forward = stepsTimeline.scrollTrigger.direction > 0,
          inEl = forward ? step : steps[i - 1],
          outEl = forward ? steps[i - 1] : step;
        outEl &&
          gsap.to(outEl, {
            autoAlpha: 0,
            duration: 0.5,
            overwrite: true,
          });
        inEl &&
          gsap.to(inEl, {
            autoAlpha: 1,
            duration: 1.25,
            delay: 0.5,
            overwrite: true,
          });
      }, i || 0.001);
    }
  });
  // add blank space to the end of the timeline so that the last element stays for a bit before unpinning.
  stepsTimeline.to({}, { duration: 1.5 });
}

function conceptSectionScrollTo() {
  const exploreButton = document.querySelector('#explore');
  const recipesPillarSection = document.querySelector('#recipes-pillar');

  exploreButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Get the bounding rectangle of the section
    const rect = recipesPillarSection.getBoundingClientRect();

    // Calculate the vertical center of the section
    const sectionCenter = rect.top + window.scrollY + rect.height / 2;

    // Calculate the viewport height
    const viewportHeight = window.innerHeight;

    // Adjust the scroll position to bring the section's center to the middle of the viewport
    const scrollToPosition = sectionCenter - viewportHeight / 2;

    gsap.to(window, {
      duration: 1.5,
      scrollTo: scrollToPosition,
      ease: 'power1.inOut',
      overwrite: 'auto',
    });
  });
}

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('hello');
  const mySwiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    // slidesPerGroup: 1,
    spaceBetween: 16,
    slideToClickedSlide: true,
    keyboard: true,
    centeredSlides: true,
    slideActiveClass: 'is-active',
    slideDuplicateActiveClass: 'is-active',
    loop: true,
    grabCursor: true,
    allowTouchMove: true,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
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

  console.log(mySwiper);

  init();
  // End
});
