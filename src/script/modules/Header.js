/** Class representing the Header */
export default class Header {
  /**
   * It dynamize the Header for toggling the menu button on mobile
   * @param {HTMLElement} element - The element to link to this class, in this case the Site Navbar/Header
   */
  constructor(element) {
    this.element = element;
    this.toggler = this.element.querySelector('.js-toggle');
    this.menu = this.element.querySelector('js-menu');

    this.init();
  }

  /**
   * The initiation method that add event to the menu toggle
   */
  init() {
    console.log('Header loaded');

    this.toggler.addEventListener('click', this.toggleMenu.bind(this));
  }

  /**
   * Appearing/Disappearing the navigation menu on mobile
   */
  toggleMenu() {
    this.element.classList.toggle('active');
  }
}