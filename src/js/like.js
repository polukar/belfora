import $ from 'jquery';


const like = {
  init() {
    $('.cart__like').on('click', function () {
      $(this).toggleClass('active');
    })
  }
}


export default like;