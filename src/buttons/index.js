import { gsap } from 'gsap';

const buttons = document.querySelectorAll('[ma-element = button]');
const duration = 0.25;

buttons.forEach((button) => {
  if (button.getAttribute('ma-interaction') === 'button-light') {
    animateButtonLight(button);
  }

  if (button.getAttribute('ma-interaction') === 'button-text-light') {
    animateButtonTextLight(button);
  }

  if (button.getAttribute('ma-interaction') === 'button-secondary-dark') {
    animateButtonSecondaryDark(button);
  }

  if (button.getAttribute('ma-interaction') === 'button-orange') {
    animateButtonOrange(button);
  }

  if (button.getAttribute('ma-interaction') === 'button-arrow') {
    animateButtonArrow(button);
  }
});

function animateButtonLight(button) {
  const { color } = window.getComputedStyle(button);
  const { borderColor } = window.getComputedStyle(button);
  const bgColor = window.getComputedStyle(button).backgroundColor;
  const bgColorVar = button.getAttribute('ma-bg-color');
  // const newColor = getComputedStyle(document.documentElement)
  //   .getPropertyValue("--color-primary--primary-50")
  //   .trim();
  const newBgColor = getComputedStyle(document.documentElement).getPropertyValue(bgColorVar);

  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      // color: 'white',
      backgroundColor: newBgColor,
      duration: duration,
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      color: color,
      backgroundColor: bgColor,
      duration: duration,
    });
  });
}

function animateButtonTextLight(button) {
  const { color } = window.getComputedStyle(button);
  const colorVar = button.getAttribute('ma-color');

  const { borderColor } = window.getComputedStyle(button);
  const borderColorVar = button.getAttribute('ma-border-color');

  const newColor = getComputedStyle(document.documentElement).getPropertyValue(colorVar);
  const newBorderColor = getComputedStyle(document.documentElement).getPropertyValue(
    borderColorVar
  );

  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      color: newColor,
      borderColor: newBorderColor,
      duration: duration,
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      color: color,
      borderColor: borderColor,
      duration: duration,
    });
  });
}

function animateButtonSecondaryDark(button) {
  const { color } = window.getComputedStyle(button);
  const colorVar = button.getAttribute('ma-color');

  const bg = button.querySelector('.button_bg');
  const bgColorVar = button.getAttribute('ma-bg-color');

  const { borderColor } = window.getComputedStyle(button);
  const borderColorVar = button.getAttribute('ma-border-color');

  const newColor = getComputedStyle(document.documentElement).getPropertyValue(colorVar);
  const newBgColor = getComputedStyle(document.documentElement).getPropertyValue(bgColorVar);
  const newBorderColor = getComputedStyle(document.documentElement).getPropertyValue(
    borderColorVar
  );

  gsap.set(bg, {
    backgroundColor: newBgColor,
    autoAlpha: 0,
  });

  button.addEventListener('mouseenter', () => {
    gsap.to(bg, {
      autoAlpha: 1,
      duration: duration,
    });

    gsap.to(button, {
      color: newColor,
      borderColor: newBorderColor ? newBorderColor : borderColor,
      duration: duration,
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(bg, {
      autoAlpha: 0,
      duration: duration,
    });

    gsap.to(button, {
      color: color,
      borderColor: borderColor,
      duration: duration,
    });
  });
}

function animateButtonOrange(button) {
  const { color } = window.getComputedStyle(button);
  // const borderColor = window.getComputedStyle(button).borderColor;
  const bgColor = window.getComputedStyle(button).backgroundColor;
  const bgColorVar = button.getAttribute('ma-bg-color');
  // const newColor = getComputedStyle(document.documentElement)
  //   .getPropertyValue("--color-primary--primary-50")
  //   .trim();
  const newBgColor = getComputedStyle(document.documentElement).getPropertyValue(bgColorVar);

  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      // color: 'white',
      backgroundColor: newBgColor,
      duration: duration,
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      color: color,
      backgroundColor: bgColor,
      duration: duration,
    });
  });
}

function animateButtonArrow(button) {
  const { color } = window.getComputedStyle(button);
  const colorVar = button.getAttribute('ma-color');

  // const borderColor = window.getComputedStyle(button).borderColor;
  // const borderColorVar = button.getAttribute("ma-border-color");

  const newColor = getComputedStyle(document.documentElement).getPropertyValue(colorVar);
  // const newBorderColor = getComputedStyle(
  //   document.documentElement
  // ).getPropertyValue(borderColorVar);

  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      color: newColor,
      duration: duration,
      // borderColor: newBorderColor
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      color: color,
      duration: duration,
      // borderColor: borderColor
    });
  });
}
