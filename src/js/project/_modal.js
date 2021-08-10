export default class {
  constructor() {
    const modalButton = Array.prototype.slice.call(document.getElementsByClassName('modal__button'), 0);
    const modalBackground = Array.prototype.slice.call(document.querySelectorAll('.modal__background'), 0);
    // const modalButton = Array.prototype.slice.call(document.querySelectorAll('.modal__button'));
    // const modalBackground = Array.prototype.slice.call(document.querySelectorAll('.modal__background'));
    modalButton.forEach((modalTarget) => {
      modalTarget.addEventListener('click', () => {
        const target = modalTarget.dataset.target;
        const targetElement = document.querySelector('#' + target);
        targetElement.classList.add('is-show');
      });
    });
    modalBackground.forEach((modalClose) => {
      modalClose.addEventListener('click', () => {
        document.querySelector('.modal.is-show').classList.remove('is-show');
      });
    });
    // for (let modalTarget of modalButton) {
    //   modalTarget.addEventListener('click', () => {
    //     const target = modalTarget.dataset.target;
    //     const targetElement = document.querySelector('#' + target);
    //     targetElement.classList.add('is-show');
    //   });
    // }
    // for (let modalClose of modalBackground) {
    //   modalClose.addEventListener('click', () => {
    //     document.querySelector('.is-show').classList.remove('is-show');
    //   });
    // }
  }
}
