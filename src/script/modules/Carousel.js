import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCards } from "swiper/modules";
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

/** Carousel class to instanciate a carousel through Swiper */
class Carousel {
    /**
     * Using the SwiperJS library, it renders a carousel to the HTML element
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
            spaceBetween: 16,
            grabCursor: true,
            keyboard: {
                enabled: true,
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

    /**
     * Called automatically, it checks if other options are precized
     */
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

        // Centered Slides
        if('centered' in this.element.dataset){
            this.options.centeredSlides = true;
        }

        // Slides per view
        if('slidesPerView' in this.element.dataset && !isNaN(Number(this.element.dataset.slidesPerView))){
            const value = Number(this.element.dataset.slidesPerView);
            this.options.breakpoints = {
                580: {
                    slidesPerView: value * 0.50,
                },
                920: {
                    slidesPerView: value * 0.75,
                    spaceBetween: 24,
                },
                1080: {
                    slidesPerView: value,
                    spaceBetween: 32,
                },
            };
        }
    }
}
export default Carousel;