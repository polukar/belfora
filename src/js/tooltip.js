import $ from 'jquery';


const tooltip = {
  init() {
    $('.-js-fadeintooltip').on('click', function () {
      $(this).find('.tooltip').fadeIn();
    });

    $(window).on('scroll', function () {
      $('.tooltip').fadeOut();
    })

    $(document).on('click', function (e) {
      var tooltip = $('.-js-fadeintooltip');
      if (!tooltip.is(e.target) && tooltip.has(e.target).length === 0) {
        tooltip.find('.tooltip').fadeOut();
      }
    })
  }
}

export default tooltip;