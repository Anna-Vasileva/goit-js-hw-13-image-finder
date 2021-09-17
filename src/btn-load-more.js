export default class loadMoreBtn {
  constructor() {
    this.button = document.querySelector('.btn-load');
  }

  show() {
    this.button.classList.remove('is-hidden');
  }
  hide() {
    this.button.classList.add('is-hidden');
  }
}
