import $ from 'jquery';


const cart = {
  init() {
    $('.cart__pic').on('click', function () {
      if (!$(this).hasClass('active')) {
        $('.cart__buttons').fadeOut();
        $('.cart__like').fadeIn();
        $('.tags').fadeIn();


        $(this).addClass('active');
        $(this).siblings('.cart__buttons').fadeIn();
        $(this).siblings('.cart__like').fadeOut();
        $(this).siblings('.tags').fadeOut();
      } else {
        $(this).removeClass('active');
        $(this).siblings('.cart__buttons').fadeOut();
        $(this).siblings('.cart__like').fadeIn();
        $(this).siblings('.tags').fadeIn();
      }
    })

    $(document).on('click', function (e) {
      var cart = $('.cart');
      if (!cart.is(e.target) && cart.has(e.target).length === 0) {
        $('.cart__pic').removeClass('active');
        $('.cart__buttons').fadeOut();
        $('.cart__like').fadeIn();
        $('.tags').fadeIn();
      }
    });

    $('.-js-fadebuttons').on('click', function () {
      $('.cart__pic').removeClass('active');
      $('.cart__buttons').fadeOut();
      $('.cart__like').fadeIn();
      $('.tags').fadeIn();
    });



  }
}


export default cart;