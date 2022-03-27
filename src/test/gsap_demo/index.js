import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

document.querySelectorAll(".gsapButton").forEach((button, index) => {
  button.addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#section" + (index + 1) } });
  });
});

const urlHash = location.hash;

if (urlHash) {
  const target = document.querySelector(urlHash);
  document.addEventListener("DOMContentLoaded", () => {
    gsap.set(window, { scrollTo: { y: 0 } });
    gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 70 } });
  });
}
