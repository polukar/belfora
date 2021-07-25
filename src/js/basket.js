import $ from 'jquery';

const basket = {
  init() {
    $('.-js-fadeoutbasket').on('click', function (e) {
      e.preventDefault();
      $('body').removeClass('--frozen');
      $('.basket').fadeOut();
    });

    $('.-js-fadeinbasket').on('click', function () {
      $('body').addClass('--frozen');
      $('.basket').fadeIn();
    });

  }
}


export default basket;