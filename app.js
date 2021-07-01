const open = document.querySelector(".active");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
let tl = gsap.timeline();

tl.to(".overlay", {
  opacity: 1,
  duration: 0.5,
  pointerEvents: "auto",
  y: 0,
  scale: 1,
});
tl.pause();

// Open overlay
open.addEventListener("click", () => {
  tl.play();
});

// Close overlay
close.addEventListener("click", () => {
  tl.reverse();
});
