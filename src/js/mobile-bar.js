import $ from 'jquery';

const mobileBar = {
  init() {
    $('.mobile-bar__btn--open').on('click', function () {
      $(this).fadeOut(0);
      $(this).siblings('.mobile-bar__close').fadeIn(0);
      $(this).parents('.mobile-bar__item').siblings('.mobile-bar__item').find('.mobile-bar__close').fadeOut(0);
      $(this).parents('.mobile-bar__item').siblings('.mobile-bar__item').find('.mobile-bar__btn--open').fadeIn(0);
      $('.body').addClass('--frozen');
    });

    $('.mobile-bar__close').on('click', function () {
      $(this).fadeOut(0);
      $(this).siblings('.mobile-bar__btn').fadeIn(0);
      $('.body').removeClass('--frozen');
    });

    $('.-js-fadeinmenu').on('click', function () {
      $('.mobile-menu').fadeIn();
    });
    $('.-js-fadeoutmenu').on('click', function () {
      $('.mobile-menu').fadeOut();
    })
  }
}


export default mobileBar;