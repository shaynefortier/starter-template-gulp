export default class Header {
  constructor(element) {
    this.element = element;
    this.toggler = this.element.querySelector('.js-toggle');
    this.menu = this.element.querySelector('js-menu');

    this.init();
  }
  init() {
    console.log('Header loaded');

    this.toggler.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.element.classList.toggle('active');
  }
}
