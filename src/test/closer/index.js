export default class {
  constructor() {
    let closerCountUp = document.querySelector("[data-count-up]");
    let closerButton = document.querySelector("[data-closer-button]");
    const closer = function () {
      let count = 0;
      return function () {
        count += 1;
        closerCountUp.innerText = count;
      };
    };
    const closerFunc = closer();
    closerButton.addEventListener("click", closerFunc);
  }
}
