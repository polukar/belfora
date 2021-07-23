import $ from 'jquery';

const basket = {
  init() {
    $('.-js-fadeoutbasket').on('click', function (e) {
      e.preventDefault();
      $('.basket').fadeOut();
    });

    $('.-js-fadeinbasket').on('click', function () {
      $('.basket').fadeIn();
    });

  }
}


export default basket;