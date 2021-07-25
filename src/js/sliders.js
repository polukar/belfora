import Swiper from 'swiper';


const sliders = {

  init() {
    const mainSlider = new Swiper('.main-slider', {
      loop: true,
      slidesPerView: 1,
      loopedSlides: 10,
      spaceBetween: 12,
      breakpoints: {
        980: {
          slidesPerView: 2,
          loopedSlides: 10,
          spaceBetween: 34,
        }
      }
    });

    $('.main-slider .slider-next').on('click', function () {
      mainSlider.slideNext();
    });

    $('.main-slider .slider-prev').on('click', function () {
      mainSlider.slidePrev();
    });
  }
}


export default sliders;