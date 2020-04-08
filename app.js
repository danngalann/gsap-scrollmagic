const flightPath = {
  curviness: 1,
  autoRotate: true,
  path: [
    { x: 100, y: -20 },
    { x: 300, y: 10 },
    { x: 500, y: 50 },
    { x: 750, y: -50 },
    { x: 450, y: -50 },
    { x: 600, y: 100 },
    { x: 800, y: 0 },
    { x: window.innerWidth, y: -200 },
  ],
};
gsap.registerPlugin(MotionPathPlugin);
const tl = gsap.timeline();

tl.to(".paper-plane", 5, {
  motionPath: flightPath,
  ease: "power1.out",
});

// ScrollMagic
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  triggerHook: 0, // The % of the screen at which the trigger should be placed
  duration: 3000,
})
  .setTween(tl) // This is the scrollmagic gsap plugin
  .setPin('.animation') // Locks the section in place until the animation is complete  
  .addTo(controller);
  // Uncomment for debug
  // .addIndicators();
