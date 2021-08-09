export default class {
  constructor() {
    const modalButton = document.querySelectorAll('.modal_button');
    const modalBackground = document.querySelectorAll('.modal__background');
    const modal = document.querySelectorAll('modal');
    for (let modalTarget of modalButton) {
      modalTarget.addEventListener('click', () => {
        const target = modalTarget.dataset.target;
        console.log(target);
        const targetElement = document.querySelector('#' + target);
        console.log(targetElement);
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
