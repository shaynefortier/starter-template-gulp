import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCards } from "swiper/modules";

/** 
* Carousel class to instanciate a carousel through Swiper
*/
export default class Carousel {
    /**
     * Constructor
     * @param {HTMLElement} element - HTML element associated to data-component="Carousel"
     */
    constructor(element){
        this.element = element;
        this.options = {
            modules: [Navigation, Pagination, Keyboard, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCards],
            pagination: {
                el: this.element.querySelector('.swiper-pagination'),
            },
            navigation: {
                nextEl: this.element.querySelector('.swiper-button-next'),
                prevEl: this.element.querySelector('.swiper-button-prev'),
            },
            slidesPerView: 1.2,
            spaceBetween: 16,
            centeredSlides: true,
            grabCursor: true,
            keyboard: {
                enabled: true,
            },
            breakpoints: {
                580: {
                    slidesPerView: 1.5,
                },
                920: {
                    slidesPerView: 1.8,
                    spaceBetween: 24,
                },
                1080: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                },
            },
        };

        this.init();
    }

    /**
     * initialization method
     */
    init(){
        console.log('Carousel component loaded')
        
        this.setOptions();
        new Swiper(this.element, this.options);
    }

    setOptions(){
        // autoplay
        if('autoplay' in this.element.dataset ){
            const autoplayNumber = parseInt(this.element.dataset.autoplay);
            this.options.autoplay = {
                pauseOnMouseEnter: true,
            };

            if(!isNaN(autoplayNumber)){
                this.options.autoplay.delay = autoplayNumber;
            }
            
        }

        // loop
        if('loop' in this.element.dataset){
            this.options.loop = true;
        }

        // Transition Effects (effect)
        if('transition' in this.element.dataset){
            switch (this.element.dataset.transition) {
                case 'fade':
                    // fade
                        this.options.effect = 'fade';
                        this.options.fadeEffect = {
                            crossFade: true
                        };
                        this.options.slidesPerView = 1;
                        this.options.spaceBetween = 0;
                        this.options.breakpoints = {
                            580: {
                                slidesPerView: 1,
                            },
                            920: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            1080: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                        };
                    break;
                    
                case 'flip':
                    // flip
                        this.options.effect = 'flip';
                    break;

                case 'cube':
                    // cube
                        this.options.effect = 'cube';
                    break;

                case 'coverflow':
                    // coverflow
                        this.options.effect = 'coverflow';
                    break;

                case 'cards':
                    // cards
                        this.options.effect = 'cards';
                    break;
            
                default:
                    console.warn(`The transition you entered is not available !`);
                    break;
            }
        }
    }
}