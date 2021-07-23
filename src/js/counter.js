import $ from 'jquery';


const counter = {
  init() {
    const maxValue = 99;
    const minValue = 1;

    $('.counter__plus').on('click', function () {
      const input = $(this).siblings('.counter__input');
      let value = +input.val();
      if (value <= maxValue) input.val(value + 1);
    });

    $('.counter__minus').on('click', function () {
      const input = $(this).siblings('.counter__input');
      let value = +input.val();
      if (value >= minValue) input.val(value - 1);
    });
  }
}


export default counter;