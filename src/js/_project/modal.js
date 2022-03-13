export default class {
  constructor() {
    const modalButton = Array.prototype.slice.call(document.querySelectorAll('.modal__button'));
    const modalBackground = Array.prototype.slice.call(document.querySelectorAll('.modal__background'));
    for (let modalTarget of modalButton) {
      modalTarget.addEventListener('click', () => {
        const target = modalTarget.dataset.target;
        const targetElement = document.querySelector('#' + target);
        targetElement.classList.add('is-show');
      });
    }
    for (let modalClose of modalBackground) {
      modalClose.addEventListener('click', () => {
        document.querySelector('.is-show').classList.remove('is-show');
      });
    }
  }
}
