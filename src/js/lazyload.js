import $ from 'jquery';


const lazyLoadImg = {
  init() {
    function lazy() {
      $('.lazy').each(function () {
        var windowHeight = $(window).innerHeight();
        var windowScrollTop = $(window).scrollTop() + windowHeight + 50;
        var elemetOfssetTop = $(this).offset().top;
        var img = $(this).data('src');
        if (elemetOfssetTop < windowScrollTop) {
          $(this).css({
            'background': `url('${img}') no-repeat center / cover`
          });
        }
      })
    }
    $(window).on('scroll', function () {
      lazy();
    })
    $(document).ready(function () {
      lazy();
    })
  }
}


export default lazyLoadImg;