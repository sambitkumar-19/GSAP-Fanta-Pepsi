gsap.registerPlugin(ScrollTrigger);

// Fanta animation
gsap.fromTo(
  ".fanta-img",
  { rotation: 27, x: 100 },
  { rotation: 360, x: 0, duration: 10 }
);

// gsap.fromTo(
//   ".pepsi-img",
//   { rotation: 27, x: 100 },
//   { rotation: 360, x: 0, duration: 10 }
// );

// Pepsi animation on scroll
gsap.fromTo(
  ".pepsi-img",
  { opacity: 0, scale: 0.5, rotation: 0 },
  {
    opacity: 1,
    scale: 1,
    rotation: 360,
    duration: 10,
    scrollTrigger: {
      trigger: ".pepsi-img",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true,
    },
  }
);
